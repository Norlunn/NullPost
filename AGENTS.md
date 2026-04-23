# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## What this is

NullPost is a self-hosted, real-time secure text and file transfer tool. Two computers connect using a shared password, all messages and files are end-to-end encrypted in the browser, and the server acts purely as a relay — it never sees plaintext and stores nothing. An optional WebRTC mode sends data directly between browsers (peer-to-peer), bypassing the server relay entirely for message and file content.

## Running locally

```bash
python -m uvicorn main:app --reload
```

Open two browser tabs at `http://localhost:8000`. Enter the same password in both to establish a channel.

## Dependencies

```bash
python -m pip install -r requirements.txt      # runtime
python -m pip install -r requirements-dev.txt  # dev tools (pytest, httpx, ruff, pre-commit)
```

Runtime has only two packages: `fastapi` and `uvicorn[standard]` (pinned in `requirements.txt`). Dev dependencies are also pinned in `requirements-dev.txt`. No frontend build step — the static files are served as-is.

## Running tests

```bash
python -m pytest tests/ -v
```

## Linting

```bash
pre-commit install          # once after cloning — hooks run on every git commit
python -m ruff check .      # lint
python -m ruff format .     # format
```

Ruff is configured in `pyproject.toml` with `select = ["ALL"]`. Suppressed rule groups: `D` (docstrings), `ANN` (type annotations), `PLR2004` (magic values), `C901`/`PLR0912`/`PLR0915` (complexity — `websocket_endpoint` is an intentional state machine), `COM812` (trailing comma — conflicts with the formatter). Per-file: `E402` in `main.py` (intentional import order for `mimetypes.add_type`), `S101` in tests (assert is idiomatic pytest).

## Commit messages

Use Conventional Commits 1.0.0 for all new commits: `<type>[optional scope]: <description>`. Prefer standard types such as `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `build`, `ci`, and `chore`; include a scope when it clarifies the touched area, for example `style(fonts): use local typography assets`. Mark breaking changes with `!` before the colon or a `BREAKING CHANGE:` footer.

## Deploying

**Single instance only.** Channel state (`channels`, `ip_connection_times`) is in-memory and per-process. Multiple replicas will silently break pairing — two peers landing on different instances each sit in "waiting" forever. `fly.toml` enforces this with `max_machines_running = 1`; pin the instance/replica count to 1 on every other platform too.

### Environment variables

| Variable | Default | Purpose |
|---|---|---|
| `PORT` | `8080` | Port uvicorn listens on (injected automatically by all cloud platforms) |
| `TRUSTED_PROXY` | *(unset)* | Set to any non-empty value (e.g. `1`) when running behind a reverse proxy that injects `X-Forwarded-For`. Required on all cloud platforms for per-IP rate limiting to work correctly. Leave unset for direct connections to prevent header spoofing. |

### Fly.io (Docker)

```bash
fly deploy
```

The `Dockerfile` builds a Python 3.13-slim image, creates a non-root `appuser`, and runs uvicorn on `${PORT:-8080}`. `fly.toml` sets `internal_port = 8080` and enforces HTTPS. The `.dockerignore` excludes `fly.toml`, `__pycache__`, and `.Codex/`.

Set `TRUSTED_PROXY=1` in `fly.toml` or via `fly secrets set TRUSTED_PROXY=1`.

### Railway / Render / DigitalOcean App Platform / Google Cloud Run

All four use the same `Dockerfile`. Each platform injects a `PORT` environment variable; the `CMD` falls back to `8080` when it is absent (Fly.io). No extra config files are required beyond what is already in the repo — `render.yaml` is provided for Render Blueprint deploys.

Set `TRUSTED_PROXY=1` in each platform's environment variable settings.

Note: Google Cloud Run enforces a maximum WebSocket session duration of 60 minutes.

### Heroku

```bash
git push heroku main
```

Uses the `Procfile` (Python buildpack, no Docker). Heroku injects `$PORT` automatically.

Set `TRUSTED_PROXY=1` via `heroku config:set TRUSTED_PROXY=1`.

## Architecture

### Backend (`main.py`)

Single FastAPI application that serves two things. On startup it overrides Windows registry MIME types via `mimetypes.add_type` to ensure `.js`, `.css`, and `.svg` are served with correct content types (Python picks up wrong types from the Windows registry by default).
- Static files (`/static/` → `static/` directory) served through an `AllowlistedStaticFiles` subclass that only serves files in a hardcoded allowlist (`ALLOWED_STATIC_FILES`) or matching the pattern `flags/*.svg`, with `Cache-Control` headers (`max-age=300, must-revalidate`)
- Health check (`GET /health`) for load balancer probes
- Service worker (`GET /sw.js`) — serves `static/sw.js` from the root path with `Cache-Control: no-cache` and `Service-Worker-Allowed: /`
- WebSocket relay endpoint (`/ws/{channel_id}`)

The global `channels` dict maps a `channel_id` to a list of at most 2 active WebSocket connections. The server:
1. Validates the `Origin` header against the `Host` header (CSRF protection)
2. Validates the channel ID format (must be 64 lowercase hex chars)
3. Extracts the real client IP via `get_client_ip()` — reads `X-Forwarded-For` when `TRUSTED_PROXY` is set, otherwise uses the direct connection IP; returns `None` if the IP is unresolvable, in which case the connection is rejected
4. Pairs the first two callers with the same channel ID
5. Relays only packets with `"type": "message"` or `"type": "key_exchange"` — never control messages

Per-connection message rate limiting (`MSG_RATE_LIMIT`, 200 msg/sec) prevents relay flooding — if the limit is exceeded the connection is closed with reason `"rate_limit"` (not silently dropped). The sliding window is tracked with a `deque[float]` per connection. 200/sec is intentionally high so that legitimate file transfers (128 KB chunks) never approach the limit; `MAX_MESSAGE_BYTES` (256 KB) bounds the actual data rate regardless. Per-IP connection timestamps (`ip_connection_times`) are cleaned up when their list drains to empty, preventing unbounded memory growth from unique IPs. Each WebSocket rejection includes a distinct close reason (`origin`, `channel_id`, `no_ip`, `rate_limit`, `max_channels`, `channel_full`) visible in browser DevTools.

All state is in-memory. A background reaper task runs every 60 seconds: it sweeps stale entries from `ip_connection_times` (where all timestamps are older than `RATE_WINDOW_SECONDS`) and closes idle single-peer channels after 10 minutes to prevent channel exhaustion, sending the client a `"timed_out"` status before closing. A server restart drops all active channels; clients auto-reconnect with backoff.

### Frontend (`static/`)

Installable as a PWA. A service worker (`sw.js`, served from `/sw.js` with `Service-Worker-Allowed: /`) provides offline fallback; a web manifest (`manifest.json`) provides standalone-display metadata and PNG logo icons (`logo-48.png`, `logo-96.png`, `logo-128.png`, `logo-256.png`). The visible app mark is `logo-96.png`, also cached by the service worker. The service worker uses a network-first strategy — always fetches fresh assets and updates the cache on success, falling back to the cache only when the network is unreachable. `/config`, `/health`, and `/ws/` are never cached.

Static frontend files include six ES modules, one vendored library (`qrcodegen.js`, loaded as a plain `<script>` before the modules so the `qrcode` global is available when `app.js` runs), plus PWA/logo assets. No bundler, no transpiler:

**`crypto.js`** — all cryptographic logic, no third-party libraries:
- One expensive PBKDF2 (600k iterations, SHA-256) derives a master key from the password
- Three cheap HKDF splits (salt: `"nullpost-v1"`) produce independent outputs: `channel-id`, `encryption-key` (used only to authenticate the ECDH handshake), `fingerprint`
- PBKDF2 salt is fetched from `GET /config` — unique per server instance
- Session key derivation also uses HKDF with salt `"nullpost-v1"` and info strings `"nullpost-session-key"` / `"nullpost-session-fingerprint"`
- `encryptForLink(password, salt)` / `decryptForLink(token, salt)` — encrypts the password into a URL-safe token using HKDF (info: `"link-encryption"`) + AES-GCM, so share links carry `#e=<token>` instead of the raw password. The token is tied to the server's PBKDF2 salt, so it only works on the same server instance.
- Exported API: `deriveAll(password, salt)` → `{ channelId, passwordKey, fingerprint }`, plus `encrypt`/`decrypt` (text, AES-256-GCM), `encryptBytes`/`decryptBytes` (binary), `toBase64`/`fromBase64` (encoding utilities), `generateEphemeralKeyPair`, `exportPublicKey`, `importPublicKey`, `deriveSessionKey`, `encryptForLink`/`decryptForLink`

**`i18n.js`** — internationalisation module:
- All UI strings in 28 languages keyed by stable identifiers: English (default), Spanish, Portuguese, Russian, German, French, Italian, Polish, Ukrainian, Dutch, Romanian, Greek, Hungarian, Czech, Swedish, Bulgarian, Danish, Finnish, Norwegian Bokmål, Slovak, Croatian, Lithuanian, Slovenian, Latvian, Estonian, Maltese, Icelandic, Irish — ordered by number of native speakers descending
- Exports `t(key)` (lookup), `getLang()`, `setLang(lang)` (applies translations to all `data-i18n*` elements)
- Language preference persisted in `localStorage`; selected via a globe-icon dropdown menu on both screens
- HTML elements use `data-i18n` (textContent), `data-i18n-placeholder`, `data-i18n-aria` (aria-label), `data-i18n-title` (title tooltip), `data-i18n-html` (HTML with preserved child elements)

**`app.js`** — WebSocket client and UI:
- Two screens: `#screen-connect` and `#screen-channel`, toggled by the `active` CSS class
- Password strength indicator on the connect screen (entropy-based, warning-only). Connecting is blocked if the password is fewer than 6 characters; the error appears inline directly below the password input (inside `.connect-form`, after `#password-strength`).
- QR code and share link: as the user types a password, `updateShareLink()` is called after a 1-second debounce (`shareLinkTimer`). It encrypts the password via `encryptForLink()` and `drawQRCode()` renders a 160×160 px QR code encoding the URL with `#e=<encrypted-token>`. A "Copy link" button (`btnCopyLink`) copies the share URL to the clipboard. On page load, the salt is fetched first, then if `location.hash` contains `e=`, the token is decrypted via `decryptForLink()`, the password field is populated, and `connect()` is called automatically; the legacy `#p=<password>` format is still accepted for backward compatibility. `history.replaceState()` immediately strips the hash from the URL bar. The password never reaches the server because URL fragments are not sent in HTTP requests.
- Connection mode toggle on the connect screen: "Relay" (default) or "Direct (P2P)". Persisted in `localStorage` as `connMode`.
- Mode badge: a small pill in the channel header shows the active transport. Displays "P2P" (green) when the DataChannel is open, "P2P" (neutral) while P2P is pending, "Relay" (amber) if P2P was attempted but fell back, or "Relay" (neutral) for plain relay mode. Tracked via `p2pFailed` flag; resets on every connect and reconnect attempt.
- `connect()` reads the mode toggle, calls `deriveAll()`, generates an ephemeral ECDH keypair, requests `Notification` permission, then opens a WebSocket to `/ws/{channelId}`
- On `status: connected`, both peers exchange ECDH public keys (encrypted with `passwordKey`), derive a shared `sessionKey` and `sessionFingerprint` via HKDF, then move to `connected` state. If the tab is backgrounded, an OS notification fires via the Notifications API.
- If P2P mode is selected, after key exchange both peers send encrypted `{ t: "rtc_ready" }` signals. The first peer (who received `"waiting"` status — tracked via `isFirstPeer`) creates an SDP offer; the second peer answers. ICE candidates are exchanged as encrypted messages. If the DataChannel opens within 10 seconds, all subsequent messages and files route through it (status changes to `connected_p2p`). If ICE fails or the peer doesn't support P2P (no `rtc_ready` within 3 seconds), the client falls back to WebSocket relay and shows an amber warning system message. The WebSocket stays open regardless for server status messages.
- Transport abstraction: `sendEncryptedPayload(data, iv)` routes encrypted messages through the DataChannel (if P2P connected) or WebSocket (relay fallback). `isTransportReady()` checks whichever transport is active. All message-sending functions use this abstraction.
- Incoming `message` packets are decrypted using `sessionKey` (never the password-derived key) and dispatched via `handleDecryptedPayload()` — shared by both the WebSocket and DataChannel receive paths.
- Message replay protection: each encrypted payload includes a monotonic counter (`n`); receivers reject messages with counter <= last seen. Counters reset on reconnect/disconnect.
- Typing indicator: the `messageInput` input event sends an encrypted `{ t: "typing" }` signal on the first keystroke, then schedules `{ t: "typing_stop" }` 2 s after the last keystroke. These signals bypass the replay counter (no `n` field) and are handled before the counter check on the receive side. `#typing-indicator` shows/hides accordingly.
- File sharing: files are queued via `enqueueFile()` and sent sequentially by `processFileQueue()`, each chunked (128 KB per chunk), encrypted, and sent as `type: "message"` packets. Metadata (filename, size, MIME type) is embedded in the first chunk payload. The receiver reassembles chunks by file ID; images (MIME `image/*`) are shown as inline previews via `setImagePreview()`; other files get a download button via `setDownload()`. When the receiver clicks "Download", an encrypted `file_ack` message is sent back so the sender's UI updates. Max file size: 50 MB via relay, 500 MB via P2P (`MAX_FILE_SIZE_P2P`). Supports drag-and-drop, paperclip button, and clipboard paste (Ctrl+V). Concurrent incoming transfers capped at `MAX_INCOMING_FILES` (5); stale partial transfers are reaped after 60 seconds.
- Unsend: a hover-reveal "Trekk tilbake" button appears on sent messages and sent files. Clicking it calls `sendUnsend(msgN)` (text) or `sendUnsendFile(fileId)` (files), which replaces the sender's DOM element with a placeholder immediately (optimistic) and sends an encrypted `{ t: "unsend"/"unsend_file", ref, n }` notification to the peer. The peer's `handleMessage()` dispatches these types, looks up the element in `receivedMessages` or `receivedFiles`, and calls `replaceWithPlaceholder()`. Three tracking Maps (`sentMessages`, `receivedMessages`, `receivedFiles`) are cleared alongside `sentFiles` on peer disconnect, reconnect, and `disconnectCleanup()`.
- Message expiry: the sender picks a self-destruct timer (30s / 1m / 5m / 30m / 1h / off) via a dropdown menu (`btnExpiry` / `expiryMenu`). The `exp` field (seconds) is embedded in the encrypted payload for both text messages and file transfers. Both sender and receiver schedule `scheduleExpiry()` which shows a live countdown (`message-expiry` element) and replaces the message with an "(Expired)" placeholder when it reaches zero. Expiry is cosmetic — it removes the DOM element on both sides but cannot enforce deletion of data already saved by the peer.
- Read receipts: when the receiver gets a text message, `sendMsgAck()` sends an encrypted `{ t: "msg_ack", ref, n }` back — but only if `document.visibilityState === "visible"`. If the tab is hidden, the ack is queued in `pendingAcks[]` and flushed by `flushPendingAcks()` when the `visibilitychange` event fires. The sender's `markAsSeen()` appends a "Seen" indicator to the message meta.
- Auto-reconnect uses exponential backoff (up to 6 attempts, delays 1s → 32s); each reconnect generates a fresh ECDH keypair. If all 6 attempts fail, the client shows "Disconnected" and stops retrying — the user must manually reconnect.

**`webrtc.js`** — WebRTC P2P data channel module:
- Manages `RTCPeerConnection` and `RTCDataChannel` lifecycle
- Uses Google's public STUN servers for NAT traversal (no TURN — ~85% of networks work, the rest fall back to relay)
- Exported API: `init(callbacks)` (set up signal/open/close/message callbacks), `createOffer()` / `handleOffer(sdp)` / `handleAnswer(sdp)` / `handleIceCandidate(candidateStr)` (signaling), `send(data)` (with backpressure — pauses when `bufferedAmount` exceeds 1 MB, resumes on drain or 5 s safety timeout), `isConnected()`, `cleanup()`
- ICE timeout: 10 seconds — if the DataChannel doesn't open in time, `onClose` fires with `"ice_timeout"` so the caller can fall back
- All event handlers are nulled in `cleanup()` to prevent callbacks after teardown

**`qrcodegen.js`** — vendored QR Code Generator by Kazuhiko Arase (MIT). Loaded as a plain `<script>` (not a module); exposes a global `qrcode(typeNumber, errorCorrectionLevel)` factory. Only used in `app.js` for the share link QR code on the connect screen.

**`sw.js`** — service worker for offline/PWA support. Uses a network-first strategy for all requests: always fetches from the network and updates the cache on success, falling back to the cached response only when the network is unreachable. Never caches `/config`, `/health`, or `/ws/` requests. Served from `/sw.js` (not `/static/sw.js`) so its scope covers the entire origin. The `Service-Worker-Allowed: /` header is set in `main.py`.

**`manifest.json`** — web app manifest for PWA install. References the square raster PNG logo set: `logo-48.png`, `logo-96.png`, `logo-128.png`, `logo-192.png`, `logo-256.png`, and `logo-512.png`. Manifest icons include `purpose: "any maskable"` for mobile launcher compatibility.

**`index.html`** / **`style.css`** — single-page UI, dark/light theme toggle, language picker dropdown (28 languages; English is the default), monospace message display. Typography uses local variable fonts from `static/fonts/`: Space Grotesk for headings/title-like text (`--display`), IBM Plex Sans for general UI text (`--sans`), and JetBrains Mono for code/technical surfaces (`--mono`) such as passwords, message bodies, file names/sizes, fingerprints/hashes, transport badges, progress text, expiry counters, and timestamps/message metadata. Keep the current system font fallbacks after the local fonts. The connect screen uses a compact layout: reduced box padding, a collapsible `<details>` security note (collapsed by default, labelled via `securityNoteLabel` i18n key), and the QR canvas rendered at 160×160 px below the connect button. The title row uses `logo-96.png` for the NullPost mark; the browser favicon uses `logo-48.png`; Open Graph metadata uses `logo-256.png`; Apple touch icon metadata uses `logo-180.png`. The language menu displays in a responsive grid: 4 columns on desktop, 3 on tablet (≤768 px), 2 on mobile (≤480 px). Each language option shows an SVG flag image from `static/flags/` (lipis/flag-icons, MIT) served as a 20×15 px `<img>` tag alongside the language name.

**`static/flags/`** — 28 SVG flag images (lipis/flag-icons, MIT license). Named by ISO 3166-1 alpha-2 country code (e.g. `gb.svg` for English, `ua.svg` for Ukrainian). Served by `AllowlistedStaticFiles` via the `flags/*.svg` pattern rule rather than individual allowlist entries.

**`static/fonts/`** — local variable font assets served through the static allowlist: `SpaceGrotesk-VariableFont_wght.ttf`, `IBMPlexSans-VariableFont_wdth,wght.ttf`, and `JetBrainsMono-VariableFont_wght.ttf`. If replacing or adding fonts, update the `@font-face` declarations in `style.css`, the `ALLOWED_STATIC_FILES` set in `main.py`, and MIME handling if the file extension changes.

**`logo-48.png` / `logo-96.png` / `logo-128.png` / `logo-180.png` / `logo-192.png` / `logo-256.png` / `logo-512.png`** — transparent square raster NullPost logo assets. The mark is a compact azure Ø/key-ring shape with the left side disintegrating into short blue/cyan/teal particles plus small complementary orange accents. `logo-180.png` is used for Apple touch icons; `logo-192.png` and `logo-512.png` are required for reliable PWA/mobile launcher icons. If replacing these assets, keep the filenames or update `index.html`, `manifest.json`, `sw.js`, and `ALLOWED_STATIC_FILES` in `main.py` together. Bump the service worker `CACHE_NAME` when changing icon assets so installed clients refresh cached icons.

### WebSocket message protocol

Client → server (relayed to peer, during handshake):
```json
{ "type": "key_exchange", "data": "<base64 encrypted ECDH public key>", "iv": "<base64 IV>" }
```

Client → server (relayed to peer, after handshake):
```json
{ "type": "message", "data": "<base64 ciphertext>", "iv": "<base64 IV>" }
```

Server → client (control only, never relayed):
```json
{ "type": "status", "status": "waiting|connected|peer_left|rejected|timed_out" }
```

- `waiting` — first peer in channel, waiting for the other
- `connected` — both peers are present; ECDH handshake should begin
- `peer_left` — the other peer disconnected
- `rejected` — channel is full (2 peers already), rate-limited, or channel limit reached
- `timed_out` — single-peer channel was reaped after 10 minutes of inactivity

### Inner encrypted payload format (file transfers)

Text messages are wrapped in a JSON envelope before encryption: `{ "n": <counter>, "m": "<text>" }`. The `n` field is a monotonic counter for replay protection. Plain UTF-8 strings without an envelope are still accepted on the receive side for backward compatibility.

File transfers use a structured JSON inner payload (distinguished by the `"t"` field after decryption):

First chunk (seq === 0):
```json
{ "t": "file_chunk", "id": "<8-hex>", "seq": 0, "total": 21, "name": "doc.pdf", "size": 1048576, "mime": "application/pdf", "c": "<base64 chunk>", "n": 42 }
```

Subsequent chunks:
```json
{ "t": "file_chunk", "id": "<8-hex>", "seq": 1, "c": "<base64 chunk>", "n": 43 }
```

The `"n"` field in file chunks is also a monotonic counter for replay protection. Backward compatibility: if the decrypted payload is not valid JSON or lacks a `"t"` field, it is treated as a plain text message.

Download acknowledgement (sent by receiver after clicking "Download"):
```json
{ "t": "file_ack", "id": "<8-hex>", "n": 1 }
```

The sender matches `id` against its `sentFiles` map and updates the UI. The ack participates in the same replay-protection counter as all other outgoing messages from the receiver.

Typing signals (ephemeral, no counter — handled before the counter check):
```json
{ "t": "typing" }
{ "t": "typing_stop" }
```

WebRTC signaling (ephemeral, no counter — sent encrypted over WebSocket relay, handled before the counter check):
```json
{ "t": "rtc_ready" }
{ "t": "rtc_offer", "sdp": "<SDP offer string>" }
{ "t": "rtc_answer", "sdp": "<SDP answer string>" }
{ "t": "rtc_ice", "candidate": "<JSON-stringified RTCIceCandidate>" }
```

- `rtc_ready` — both P2P-enabled peers send this after key exchange; tells the other peer that WebRTC is supported
- `rtc_offer` / `rtc_answer` — SDP session descriptions for WebRTC negotiation
- `rtc_ice` — ICE candidates for NAT traversal, trickled as they are discovered
- All signaling messages are encrypted with the session key and relayed via the WebSocket as regular `"type": "message"` frames — the server cannot distinguish them from chat messages

Read receipt (sent by receiver after receiving a text message):
```json
{ "t": "msg_ack", "ref": 42, "n": 55 }
```

The sender matches `ref` against its `sentMessages` map and appends a "Seen" indicator.

Unsend notifications (sender retracts a previously sent item):
```json
{ "t": "unsend",      "ref": 42,         "n": 57 }
{ "t": "unsend_file", "ref": "a1b2c3d4", "n": 58 }
```

- `ref` for `unsend` is the `n` counter value of the original text message
- `ref` for `unsend_file` is the `id` (8-hex string) of the file transfer
- Both carry a monotonic `n` counter for replay protection

Message expiry (optional, embedded in text and file payloads):
```json
{ "n": 42, "m": "secret text", "exp": 300 }
```

- `exp` is the self-destruct timer in seconds (30, 60, 300, 1800, 3600, or absent/0 for no expiry)
- Both sender and receiver independently schedule a countdown; when it reaches zero the DOM element is replaced with an "(Expired)" placeholder
- For file transfers, `exp` is embedded in the first chunk (seq 0) metadata

## Security invariants — do not break

- The server must never log or inspect message content.
- Channel IDs are PBKDF2/HKDF-derived hashes; the raw password never reaches the server.
- Session keys are derived client-side via ECDH and never transmitted; only ECDH public keys cross the network, and they are encrypted under the password-derived key before being sent.
- Only `"type": "message"` and `"type": "key_exchange"` packets are relayed, and only the fields `type`, `data`, and `iv` are forwarded — this prevents extra attacker-supplied fields reaching the peer and prevents fake status control message injection.
- Origin validation (`origin_matches_host`) must remain; removing it opens cross-site WebSocket hijacking.
- The `channels` dict must cap at 2 connections per channel ID; a third connection must be rejected.
- All private key material in `crypto.js` is non-extractable (`false`): the ECDH private key, `passwordKey`, and `sessionKey` — preventing exfiltration via DevTools.
- The PBKDF2 salt is fetched from `GET /config` (a random value generated at server startup) and must not be hardcoded. Both peers must use the same running server instance to derive matching keys.
- Rate limiting (`MAX_CHANNELS`, `MAX_CONNECTS_PER_IP`, `MAX_MESSAGE_BYTES`, `MSG_RATE_LIMIT`) must remain to prevent channel exhaustion, connection flooding, and relay amplification. Per-connection message rate limiting closes the connection with `"rate_limit"` when exceeded — `MSG_RATE_LIMIT` is set to 200/sec so legitimate file transfers (128 KB chunks) never approach the limit.
- When deployed behind a reverse proxy, `TRUSTED_PROXY=1` must be set; without it `get_client_ip()` sees the proxy's IP and per-IP rate limiting becomes ineffective.
- Connections where the client IP cannot be determined (`get_client_ip()` returns `None`) are rejected — this prevents IP-less clients from sharing a rate-limit bucket and exhausting the per-IP connection quota for legitimate users.
- The idle channel reaper (`CHANNEL_IDLE_TIMEOUT_SECONDS`) must remain to prevent single-peer channel slot exhaustion.
- Relayed messages must have both `data` and `iv` fields present; messages missing either field are silently dropped.
- The HKDF salt `"nullpost-v1"` is a protocol constant — changing it is a breaking change that prevents peers running different versions from deriving matching keys.
- Forward secrecy: each session performs an ephemeral ECDH key exchange (P-256) authenticated by the password-derived key. Ephemeral ECDH keypairs are non-extractable and discarded after the handshake. Compromising the password does not reveal past session keys — it only reveals the channel ID and allows decrypting the ECDH public keys, but not reconstructing the ECDH shared secret without the private key.
- File transfers are end-to-end encrypted using the same session key as text messages. File metadata (name, size, MIME type) is inside the encrypted payload — the server never sees it. Files are never stored on disk; they exist only in browser memory during transfer and as a Blob for download.
- The server must never log client IP addresses.
- Message replay protection: each encrypted payload contains a monotonic counter (`n`); receivers reject messages with counter <= last seen. Counters reset per session.
- Incoming file transfer concurrency is capped (`MAX_INCOMING_FILES`); stale partial transfers are reaped after `FILE_TRANSFER_TIMEOUT_MS`.
- The Docker container must run as a non-root user.
- `Cross-Origin-Opener-Policy: same-origin` and `Cross-Origin-Embedder-Policy: require-corp` must be set for cross-origin isolation. Since all resources are self-hosted, `require-corp` is safe — adding external resources would require changing to `credentialless`.
- The CSP must include `img-src 'self' blob:` — inline image previews use `URL.createObjectURL()` which produces `blob:` URLs that would be blocked by `default-src 'self'` alone.
- The CSP includes `base-uri 'self'` to prevent `<base>` tag injection attacks.
- Static files are served through `AllowlistedStaticFiles`, which rejects requests for files not in `ALLOWED_STATIC_FILES` and not matching `flags/*.svg`. When adding a new static file, it must be added to this set in `main.py` or it will return 404. Flag SVGs in `static/flags/` are covered by the pattern rule and do not need individual entries. Note: `sw.js` is served via a dedicated `/sw.js` route (not through the static mount), so it is not in `ALLOWED_STATIC_FILES`.
- The `CHUNK_SIZE` (128 KB) and `MAX_MESSAGE_BYTES` (256 KB) must stay coordinated — a 128 KB raw chunk expands to ~228 KB after base64 + AES-GCM + base64 + JSON wrapping, which must fit within `MAX_MESSAGE_BYTES`.
- WebRTC P2P mode uses the same E2E encryption as relay mode — all data over the DataChannel is encrypted with the session key before sending. The DataChannel is an additional transport layer, not a replacement for encryption.
- WebRTC signaling (SDP offers, answers, ICE candidates) is encrypted with the session key before being relayed via WebSocket — the server never sees SDP or ICE data in plaintext.
- WebRTC uses only public STUN servers (no TURN). Approximately 15% of restrictive networks (symmetric NAT, corporate firewalls) will fail to establish a P2P connection and automatically fall back to the WebSocket relay.
- When P2P fails or is not selected, the system falls back to the existing WebSocket relay — the user is informed via a visible warning system message. No data is silently lost.
- The `MAX_FILE_SIZE_P2P` (500 MB) only applies when the DataChannel is active. Relay mode retains the 50 MB limit (`MAX_FILE_SIZE`) to protect server memory.
