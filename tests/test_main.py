from contextlib import suppress
from unittest.mock import MagicMock

import pytest
from starlette.testclient import TestClient

import main
from main import (
    CHANNEL_ID_RE,
    MAX_CONNECTS_PER_IP,
    MAX_MESSAGE_BYTES,
    app,
    channel_last_activity,
    channels,
    get_client_ip,
    ip_connection_times,
    origin_matches_host,
)


@pytest.fixture(autouse=True)
def _clean_state():
    channels.clear()
    channel_last_activity.clear()
    ip_connection_times.clear()
    yield
    channels.clear()
    channel_last_activity.clear()
    ip_connection_times.clear()


VALID_CHANNEL = "a" * 64
client = TestClient(app)


def ws_connect(channel_id=VALID_CHANNEL, origin="https://testserver", host="testserver"):
    headers = {}
    if origin:
        headers["origin"] = origin
    if host:
        headers["host"] = host
    return client.websocket_connect(f"/ws/{channel_id}", headers=headers)


# --- Origin validation ---


class TestOriginMatchesHost:
    def test_matching(self):
        assert origin_matches_host("https://example.com", "example.com")
        assert origin_matches_host("http://localhost:8000", "localhost:8000")

    def test_mismatched(self):
        assert not origin_matches_host("https://evil.com", "example.com")
        assert not origin_matches_host("https://example.com:8080", "example.com")

    def test_empty(self):
        assert not origin_matches_host("", "example.com")
        assert not origin_matches_host("https://example.com", "")
        assert not origin_matches_host("", "")

    def test_rejects_non_http_schemes(self):
        assert not origin_matches_host("ftp://example.com", "example.com")


# --- Channel ID validation ---


class TestChannelIdRegex:
    def test_valid(self):
        assert CHANNEL_ID_RE.match("a" * 64)
        assert CHANNEL_ID_RE.match("0123456789abcdef" * 4)

    def test_too_short(self):
        assert not CHANNEL_ID_RE.match("a" * 63)

    def test_too_long(self):
        assert not CHANNEL_ID_RE.match("a" * 65)

    def test_uppercase_rejected(self):
        assert not CHANNEL_ID_RE.match("A" * 64)

    def test_non_hex_rejected(self):
        assert not CHANNEL_ID_RE.match("g" * 64)


# --- HTTP endpoints ---


class TestHttpEndpoints:
    def test_root_redirects(self):
        resp = client.get("/", follow_redirects=False)
        assert resp.status_code == 307
        assert resp.headers["location"] == "/static/index.html"

    def test_health(self):
        resp = client.get("/health")
        assert resp.status_code == 200
        assert resp.json()["status"] == "ok"

    def test_config_returns_salt(self):
        resp = client.get("/config")
        assert resp.status_code == 200
        data = resp.json()
        assert "salt" in data
        assert len(data["salt"]) == 64

    def test_security_headers(self):
        resp = client.get("/health")
        assert "Content-Security-Policy" in resp.headers
        assert resp.headers["X-Content-Type-Options"] == "nosniff"
        assert resp.headers["X-Frame-Options"] == "DENY"
        assert resp.headers["Referrer-Policy"] == "no-referrer"
        assert "Permissions-Policy" in resp.headers

    def test_static_cache_control(self):
        resp = client.get("/static/index.html")
        assert resp.status_code == 200
        cc = resp.headers.get("Cache-Control", "")
        assert "max-age=300" in cc
        assert "must-revalidate" in cc

    def test_coop_coep_headers(self):
        resp = client.get("/health")
        assert resp.headers["Cross-Origin-Opener-Policy"] == "same-origin"
        assert resp.headers["Cross-Origin-Embedder-Policy"] == "require-corp"

    def test_service_worker_route(self):
        resp = client.get("/sw.js")
        assert resp.status_code == 200
        assert "application/javascript" in resp.headers["content-type"]
        assert resp.headers["Cache-Control"] == "no-cache"
        assert resp.headers["Service-Worker-Allowed"] == "/"

    def test_manifest_served(self):
        resp = client.get("/static/manifest.json")
        assert resp.status_code == 200

    def test_pwa_icons_served(self):
        for icon in ("icon-192.png", "icon-512.png"):
            resp = client.get(f"/static/{icon}")
            assert resp.status_code == 200, f"{icon} not served"

    def test_webrtc_js_served(self):
        resp = client.get("/static/webrtc.js")
        assert resp.status_code == 200
        assert "application/javascript" in resp.headers["content-type"]


# --- WebSocket ---


class TestWebSocket:
    def test_rejects_bad_origin(self):
        with ws_connect(origin="https://evil.com") as ws:
            msg = ws.receive_json()
            assert msg == {"type": "status", "status": "rejected"}

    def test_rejects_invalid_channel_id(self):
        with ws_connect(channel_id="not-valid") as ws:
            msg = ws.receive_json()
            assert msg == {"type": "status", "status": "rejected"}

    def test_single_peer_gets_waiting(self):
        with ws_connect() as ws:
            msg = ws.receive_json()
            assert msg == {"type": "status", "status": "waiting"}

    def test_two_peers_get_connected(self):
        with ws_connect() as ws1:
            ws1.receive_json()  # waiting
            with ws_connect() as ws2:
                msg1 = ws1.receive_json()
                msg2 = ws2.receive_json()
                assert msg1 == {"type": "status", "status": "connected"}
                assert msg2 == {"type": "status", "status": "connected"}

    def test_third_peer_rejected(self):
        with ws_connect() as ws1:
            ws1.receive_json()
            with ws_connect() as ws2:
                ws1.receive_json()
                ws2.receive_json()
                with ws_connect() as ws3:
                    msg = ws3.receive_json()
                    assert msg == {"type": "status", "status": "rejected"}

    def test_message_relay(self):
        with ws_connect() as ws1:
            ws1.receive_json()
            with ws_connect() as ws2:
                ws1.receive_json()
                ws2.receive_json()
                ws1.send_json({"type": "message", "data": "dGVzdA==", "iv": "aXY="})
                relayed = ws2.receive_json()
                assert relayed == {"type": "message", "data": "dGVzdA==", "iv": "aXY="}

    def test_non_relayable_type_dropped(self):
        with ws_connect() as ws1:
            ws1.receive_json()
            with ws_connect() as ws2:
                ws1.receive_json()
                ws2.receive_json()
                ws1.send_json({"type": "status", "status": "connected"})
                ws1.send_json({"type": "message", "data": "ok", "iv": "iv"})
                relayed = ws2.receive_json()
                assert relayed["type"] == "message"

    def test_missing_data_iv_dropped(self):
        with ws_connect() as ws1:
            ws1.receive_json()
            with ws_connect() as ws2:
                ws1.receive_json()
                ws2.receive_json()
                ws1.send_json({"type": "message"})
                ws1.send_json({"type": "message", "data": "ok", "iv": "iv"})
                relayed = ws2.receive_json()
                assert relayed["data"] == "ok"

    def test_extra_fields_stripped(self):
        with ws_connect() as ws1:
            ws1.receive_json()
            with ws_connect() as ws2:
                ws1.receive_json()
                ws2.receive_json()
                ws1.send_json({"type": "message", "data": "d", "iv": "i", "extra": "evil"})
                relayed = ws2.receive_json()
                assert "extra" not in relayed

    def test_peer_left_on_disconnect(self):
        with ws_connect() as ws1:
            ws1.receive_json()
            with ws_connect() as ws2:
                ws1.receive_json()
                ws2.receive_json()
            msg = ws1.receive_json()
            assert msg == {"type": "status", "status": "peer_left"}

    def test_key_exchange_relayed(self):
        with ws_connect() as ws1:
            ws1.receive_json()
            with ws_connect() as ws2:
                ws1.receive_json()
                ws2.receive_json()
                ws1.send_json({"type": "key_exchange", "data": "pubkey", "iv": "iv"})
                relayed = ws2.receive_json()
                assert relayed["type"] == "key_exchange"


# --- Rate limiting ---


class TestMessageRateLimiting:
    def test_messages_within_limit_are_relayed(self):
        with ws_connect() as ws1:
            ws1.receive_json()
            with ws_connect() as ws2:
                ws1.receive_json()
                ws2.receive_json()
                ws1.send_json({"type": "message", "data": "dGVzdA==", "iv": "aXY="})
                relayed = ws2.receive_json()
                assert relayed["type"] == "message"


class TestRateLimiting:
    def test_rate_limit_rejects(self):
        for i in range(MAX_CONNECTS_PER_IP):
            channel = f"{'a' * 60}{i:04x}"
            with suppress(Exception), ws_connect(channel_id=channel):
                pass

        with ws_connect(channel_id="b" * 64) as ws:
            msg = ws.receive_json()
            assert msg == {"type": "status", "status": "rejected"}


class TestEdgeCases:
    def test_oversized_message_dropped(self):
        with ws_connect() as ws1:
            ws1.receive_json()
            with ws_connect() as ws2:
                ws1.receive_json()
                ws2.receive_json()
                ws1.send_text("x" * (MAX_MESSAGE_BYTES + 1))
                ws1.send_json({"type": "message", "data": "ok", "iv": "iv"})
                relayed = ws2.receive_json()
                assert relayed["data"] == "ok"

    def test_max_channels_rejected(self, monkeypatch):
        monkeypatch.setattr(main, "MAX_CHANNELS", 1)
        with ws_connect("a" * 64) as ws1:
            ws1.receive_json()
            with ws_connect("b" * 64) as ws2:
                msg = ws2.receive_json()
                assert msg == {"type": "status", "status": "rejected"}


class TestGetClientIp:
    def test_direct_connection(self, monkeypatch):
        monkeypatch.setattr(main, "TRUSTED_PROXY", False)
        ws = MagicMock()
        ws.client.host = "10.0.0.1"
        assert get_client_ip(ws) == "10.0.0.1"

    def test_trusted_proxy_uses_forwarded_for(self, monkeypatch):
        monkeypatch.setattr(main, "TRUSTED_PROXY", True)
        ws = MagicMock()
        ws.headers.get.return_value = "1.2.3.4, 5.6.7.8"
        assert get_client_ip(ws) == "1.2.3.4"

    def test_trusted_proxy_falls_back_to_direct(self, monkeypatch):
        monkeypatch.setattr(main, "TRUSTED_PROXY", True)
        ws = MagicMock()
        ws.headers.get.return_value = ""
        ws.client.host = "10.0.0.1"
        assert get_client_ip(ws) == "10.0.0.1"

    def test_no_client_returns_none(self):
        ws = MagicMock()
        ws.headers.get.return_value = ""
        ws.client = None
        assert get_client_ip(ws) is None
