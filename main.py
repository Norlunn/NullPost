import asyncio
import json
import logging
import mimetypes
import os
import re
import secrets
import time
from collections import defaultdict, deque
from contextlib import asynccontextmanager, suppress
from urllib.parse import urlparse

logger = logging.getLogger(__name__)

mimetypes.add_type("application/javascript", ".js")
mimetypes.add_type("text/css", ".css")
mimetypes.add_type("image/svg+xml", ".svg")
mimetypes.add_type("font/ttf", ".ttf")
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.responses import FileResponse, JSONResponse, RedirectResponse
from fastapi.staticfiles import StaticFiles
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request
from starlette.responses import Response


@asynccontextmanager
async def lifespan(_app: FastAPI):
    task = asyncio.create_task(reap_idle_channels())
    yield
    task.cancel()


app = FastAPI(docs_url=None, redoc_url=None, openapi_url=None, lifespan=lifespan)

# Unique per server instance — prevents cross-deployment pre-computation attacks on PBKDF2.
# Not a secret; clients fetch it openly. Rotate by restarting the server.
PBKDF2_SALT = secrets.token_hex(32)

# Set TRUSTED_PROXY=1 (or any non-empty value) when running behind a reverse proxy
# (Fly.io, Railway, Render, Heroku, Cloud Run) that injects X-Forwarded-For.
# Leave unset for direct connections to prevent header spoofing.
TRUSTED_PROXY = bool(os.environ.get("TRUSTED_PROXY", "").strip())

# channel_id -> list of at most 2 active WebSocket connections
channels: dict[str, list[WebSocket]] = {}
channel_last_activity: dict[str, float] = {}

MAX_CHANNELS = 1000
MAX_MESSAGE_BYTES = 256 * 1024  # 256 KB per relayed message
RATE_WINDOW_SECONDS = 60
MAX_CONNECTS_PER_IP = 10  # new connections per IP per minute
CHANNEL_IDLE_TIMEOUT_SECONDS = 600
MSG_RATE_LIMIT = 200  # max messages per second per connection
MSG_RATE_WINDOW = 1.0

ip_connection_times: dict[str, list[float]] = defaultdict(list)

CHANNEL_ID_RE = re.compile(r"^[0-9a-f]{64}$")

CSP = (
    "default-src 'self'; script-src 'self'; style-src 'self'; "
    "img-src 'self' blob:; connect-src 'self'; base-uri 'self'; frame-ancestors 'none';"
)

STATIC_CACHE_CONTROL = "public, max-age=300, must-revalidate"


class SecurityHeadersMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        response = await call_next(request)
        response.headers["Content-Security-Policy"] = CSP
        response.headers["X-Content-Type-Options"] = "nosniff"
        response.headers["X-Frame-Options"] = "DENY"
        response.headers["Referrer-Policy"] = "no-referrer"
        if request.url.scheme == "https" or request.headers.get("x-forwarded-proto") == "https":
            response.headers["Strict-Transport-Security"] = "max-age=63072000; includeSubDomains"
        response.headers["Permissions-Policy"] = "camera=(), microphone=(), geolocation=()"
        response.headers["Cross-Origin-Opener-Policy"] = "same-origin"
        response.headers["Cross-Origin-Embedder-Policy"] = "require-corp"
        if request.url.path.startswith("/static/"):
            response.headers["Cache-Control"] = STATIC_CACHE_CONTROL
        return response


app.add_middleware(SecurityHeadersMiddleware)


def get_client_ip(ws: WebSocket) -> str | None:
    if TRUSTED_PROXY:
        forwarded = ws.headers.get("x-forwarded-for", "")
        if forwarded:
            return forwarded.split(",")[0].strip()
    return ws.client.host if ws.client else None


def origin_matches_host(origin: str, host: str) -> bool:
    if not origin or not host:
        return False
    parsed = urlparse(origin)
    return parsed.netloc == host and parsed.scheme in ("http", "https")


async def safe_send(ws: WebSocket, data: dict) -> None:
    with suppress(Exception):
        await ws.send_json(data)


@app.get("/")
async def root():
    return RedirectResponse(url="/static/index.html")


@app.get("/health")
async def health():
    return JSONResponse({"status": "ok"})


@app.get("/config")
async def config():
    return {"salt": PBKDF2_SALT}


@app.get("/sw.js")
async def service_worker():
    return FileResponse(
        "static/sw.js",
        media_type="application/javascript",
        headers={"Cache-Control": "no-cache", "Service-Worker-Allowed": "/"},
    )


@app.websocket("/ws/{channel_id}")
async def websocket_endpoint(ws: WebSocket, channel_id: str):
    await ws.accept()

    origin = ws.headers.get("origin", "")
    host = ws.headers.get("host", "")
    if not origin_matches_host(origin, host):
        await safe_send(ws, {"type": "status", "status": "rejected"})
        await ws.close(code=1008, reason="origin")
        return

    if not CHANNEL_ID_RE.match(channel_id):
        await safe_send(ws, {"type": "status", "status": "rejected"})
        await ws.close(code=1008, reason="channel_id")
        return

    client_ip = get_client_ip(ws)
    if client_ip is None:
        await safe_send(ws, {"type": "status", "status": "rejected"})
        await ws.close(code=1008, reason="no_ip")
        return

    now = time.monotonic()
    times = ip_connection_times[client_ip]
    times[:] = [t for t in times if now - t < RATE_WINDOW_SECONDS]
    if not times:
        del ip_connection_times[client_ip]
    if len(times) >= MAX_CONNECTS_PER_IP:
        await safe_send(ws, {"type": "status", "status": "rejected"})
        await ws.close(code=1008, reason="rate_limit")
        return
    ip_connection_times[client_ip].append(now)

    if len(channels) >= MAX_CHANNELS and channel_id not in channels:
        await safe_send(ws, {"type": "status", "status": "rejected"})
        await ws.close(code=1008, reason="max_channels")
        return

    peers = channels.setdefault(channel_id, [])

    if len(peers) >= 2:
        logger.info("Channel %s…%s full, rejecting connection", channel_id[:8], channel_id[-4:])
        await safe_send(ws, {"type": "status", "status": "rejected"})
        await ws.close(code=1008, reason="channel_full")
        return

    peers.append(ws)
    channel_last_activity[channel_id] = time.monotonic()
    logger.info("Peer joined channel %s…%s (%d/2)", channel_id[:8], channel_id[-4:], len(peers))

    if len(peers) == 1:
        await safe_send(ws, {"type": "status", "status": "waiting"})
    else:
        for peer in peers:
            await safe_send(peer, {"type": "status", "status": "connected"})

    msg_timestamps: deque[float] = deque()
    try:
        while True:
            raw = await ws.receive_text()
            if len(raw) > MAX_MESSAGE_BYTES:
                continue
            now_msg = time.monotonic()
            while msg_timestamps and now_msg - msg_timestamps[0] >= MSG_RATE_WINDOW:
                msg_timestamps.popleft()
            if len(msg_timestamps) >= MSG_RATE_LIMIT:
                await ws.close(1008, "rate_limit")
                break
            msg_timestamps.append(now_msg)
            try:
                msg = json.loads(raw)
            except json.JSONDecodeError:
                continue
            if msg.get("type") not in ("message", "key_exchange"):
                continue
            if "data" not in msg or "iv" not in msg:
                continue
            channel_last_activity[channel_id] = time.monotonic()
            other = [p for p in channels.get(channel_id, []) if p is not ws]
            relay = {"type": msg["type"], "data": msg["data"], "iv": msg["iv"]}
            for peer in other:
                await safe_send(peer, relay)
    except WebSocketDisconnect:
        pass
    except Exception:
        logger.exception("Unexpected error in channel %s…%s", channel_id[:8], channel_id[-4:])
    finally:
        channel_peers = channels.get(channel_id, [])
        if ws in channel_peers:
            channel_peers.remove(ws)
        for peer in channel_peers:
            await safe_send(peer, {"type": "status", "status": "peer_left"})
        if not channel_peers:
            channels.pop(channel_id, None)
            channel_last_activity.pop(channel_id, None)
        logger.info("Peer left channel %s…%s (%d remaining)", channel_id[:8], channel_id[-4:], len(channel_peers))


async def reap_idle_channels():
    while True:
        await asyncio.sleep(60)
        now = time.monotonic()
        stale_ips = [
            ip for ip, times in ip_connection_times.items() if all(now - t >= RATE_WINDOW_SECONDS for t in times)
        ]
        for ip in stale_ips:
            del ip_connection_times[ip]
        stale = [
            cid
            for cid, last in channel_last_activity.items()
            if now - last > CHANNEL_IDLE_TIMEOUT_SECONDS and len(channels.get(cid, [])) < 2
        ]
        for cid in stale:
            peers = channels.pop(cid, [])
            channel_last_activity.pop(cid, None)
            for peer in peers:
                await safe_send(peer, {"type": "status", "status": "timed_out"})
                with suppress(Exception):
                    await peer.close(code=1008)
            if peers:
                logger.info("Reaped idle channel %s…%s", cid[:8], cid[-4:])


ALLOWED_STATIC_FILES = {
    "index.html",
    "style.css",
    "app.js",
    "crypto.js",
    "i18n.js",
    "webrtc.js",
    "qrcodegen.js",
    "logo-256.png",
    "logo-512.png",
    "logo-192.png",
    "logo-180.png",
    "logo-128.png",
    "logo-96.png",
    "logo-48.png",
    "manifest.json",
    "fonts/IBMPlexSans-VariableFont_wdth,wght.ttf",
    "fonts/JetBrainsMono-VariableFont_wght.ttf",
    "fonts/SpaceGrotesk-VariableFont_wght.ttf",
}


class AllowlistedStaticFiles(StaticFiles):
    async def get_response(self, path: str, scope):
        normalized = path.replace("\\", "/")
        if normalized not in ALLOWED_STATIC_FILES and not (
            normalized.startswith("flags/") and normalized.endswith(".svg")
        ):
            return Response(status_code=404)
        return await super().get_response(path, scope)


app.mount("/static", AllowlistedStaticFiles(directory="static"), name="static")
