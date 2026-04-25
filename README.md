<table border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td width="112" valign="middle">
      <img src="static/logo-96.png" alt="NullPost logo" width="96" height="96">
    </td>
    <td valign="middle">
      <h1>NullPost</h1>
      <blockquote>The server relays. It reads nothing. In code, that's <code>null</code> — in Norwegian, that's zero. NullPost.</blockquote>
    </td>
  </tr>
</table>

Self-hosted, real-time secure text and file transfer. Two browsers connect using a shared password — all messages and files are end-to-end encrypted in the browser. The server is a pure relay: it never sees plaintext and stores nothing. Optional peer-to-peer mode (WebRTC) sends data directly between browsers, bypassing the server entirely.

**Two people only.** Each channel supports exactly two participants — no group chat.

Hosted instance: [nullpost.eu](https://nullpost.eu)

## Requirements

- Python 3.10+
- A modern browser (Chrome, Firefox, Safari, Edge — Web Crypto API required)

## Run locally

```bash
python -m pip install -r requirements.txt
python -m uvicorn main:app --reload
```

Open two browser tabs at `http://localhost:8000`, enter the same password in both. That's it.

## Features

- **Text chat** — messages encrypted with AES-256-GCM; copy button on each received message; read receipts ("Seen") sent only when the recipient's tab is visible
- **Peer-to-peer (WebRTC)** — choose "Direct (P2P)" on the connect screen to send data directly between browsers via WebRTC DataChannel. The server is only used for signaling. Falls back to encrypted relay automatically if P2P fails (e.g. restrictive firewalls), with a visible warning. No TURN servers required. A mode badge in the header shows the active transport (Relay / P2P)
- **File sharing** — drag and drop, click the paperclip, or paste from clipboard (Ctrl+V). Chunked, encrypted, streamed through the relay — nothing stored on the server. Images show as inline previews; other files get a download button. Max 50 MB via relay, 500 MB via P2P
- **Disappearing messages** — pick a self-destruct timer (30s / 1m / 5m / 30m / 1h / off) from a dropdown before sending. Both sides see a live countdown; when it hits zero the message is replaced with "(Expired)". Best-effort: cosmetic only, cannot enforce deletion of data the peer already copied
- **Unsend** — hover over any sent message or file and click "Unsend" to retract it from both sides. Best-effort: if the peer already saved a file to disk, that copy remains
- **Typing indicator** — shows when the other party is typing, sent as an encrypted signal
- **QR code / share link** — as you type a password, a QR code appears encoding an encrypted share link. The password is encrypted with a key derived from the server's session salt, so the link only works on the same server instance. A "Copy link" button copies the URL. On the receiving end, the password is decrypted client-side, auto-filled, and the connection starts automatically. The password never reaches the server — URL fragments are not sent in HTTP requests
- **PWA** — installable as a Progressive Web App. Service worker uses a network-first strategy (always fetches fresh, falls back to cache when offline); web manifest provides standalone-display metadata
- **Browser notifications** — fires an OS notification if your tab is backgrounded when the peer connects
- **Password strength meter** — entropy-based, warning only; connecting is blocked if the password is shorter than 6 characters, with an error shown inline below the input
- **Theme** — dark/light toggle, persisted in `localStorage`
- **Language** — globe-icon picker in the corner of both screens; 28 languages (English default): Spanish, English, Portuguese, Russian, German, French, Italian, Polish, Ukrainian, Dutch, Romanian, Greek, Hungarian, Czech, Swedish, Bulgarian, Danish, Finnish, Norwegian, Slovak, Croatian, Lithuanian, Slovenian, Latvian, Estonian, Maltese, Icelandic, Irish — sorted by speaker count, each shown with its country flag. Preference persisted in `localStorage`
- **Auto-reconnect** — on unexpected WebSocket drop, retries up to 6 times with exponential backoff (1 s → 32 s); each attempt generates a fresh ECDH keypair. After 6 failures the user is shown a "Disconnected" message and must reconnect manually

## How it works

1. Both parties open the app and enter the same password
2. The password derives a channel ID via PBKDF2 + HKDF — the raw password never leaves the browser
3. An ephemeral ECDH key exchange establishes a session key, authenticated by the password-derived key
4. All messages and files are encrypted with AES-256-GCM using the session key before being sent
5. If P2P mode is selected: a WebRTC DataChannel is negotiated (signaling encrypted and relayed via WebSocket). Once established, data flows directly between browsers — the server only sees encrypted signaling during setup

Forward secrecy: compromising the password after a session does not reveal past messages.

## Development

```bash
python -m pip install -r requirements-dev.txt
pre-commit install   # runs ruff on every git commit
```

Run tests: `python -m pytest tests/ -v`  
Lint/format: `python -m ruff check . && python -m ruff format .`

## Deploy

All cloud platforms route traffic through a reverse proxy. Set `TRUSTED_PROXY=1` so the server reads the real client IP from `X-Forwarded-For` — without it, per-IP rate limiting applies to the proxy's IP instead of the actual client.

**Single instance only.** Channel state is held in memory. Running multiple replicas will silently break pairing — two peers landing on different instances will each sit in "waiting" forever. Pin the instance count to 1 on every platform. The included `fly.toml` already does this (`max_machines_running = 1`).

### Fly.io

```bash
fly secrets set TRUSTED_PROXY=1
fly deploy
```

### Railway / Render / DigitalOcean App Platform / Google Cloud Run

Connect your repo — each platform detects the `Dockerfile` and injects `PORT` automatically. For Render, `render.yaml` is included for one-click Blueprint deploys. Set `TRUSTED_PROXY=1` in the platform's environment variable settings.

Note: Google Cloud Run enforces a maximum WebSocket session duration of 60 minutes.

### Heroku

```bash
heroku config:set TRUSTED_PROXY=1
git push heroku main
```

Uses the `Procfile` (Python buildpack). No Docker required.

## Stack

- **Backend:** Python 3, FastAPI, uvicorn — WebSocket relay only
- **Frontend:** Vanilla JS ES modules, Web Crypto API, WebRTC — no build step; one vendored library (`qrcodegen.js`, MIT) for QR code generation; 28 SVG flag images (`static/flags/`, lipis/flag-icons, MIT); service worker for offline/PWA support
- **UI language:** English (default) / Spanish / Portuguese / Russian / German / French / Italian / Polish / Ukrainian / Dutch / Romanian / Greek / Hungarian / Czech / Swedish / Bulgarian / Danish / Finnish / Norwegian / Slovak / Croatian / Lithuanian / Slovenian / Latvian / Estonian / Maltese / Icelandic / Irish
