import {
    deriveAll, encrypt, decrypt,
    generateEphemeralKeyPair, exportPublicKey, importPublicKey,
    deriveSessionKey, encryptBytes, decryptBytes,
    toBase64, fromBase64,
    encryptForLink, decryptForLink
} from "./crypto.js";
import { t, getLang, setLang, DEFAULT_LANG } from "./i18n.js";
import * as rtc from "./webrtc.js";

let ws = null;
let passwordKey = null;
let sessionKey = null;
let ephemeralKeyPair = null;
let keyExchangeComplete = false;
let keyExchangeTimeout = null;
let reconnectAttempts = 0;
let reconnectTimer = null;
let savedChannelId = "";
let peersConnected = false;
let sendCounter = 0;
let peerCounter = -1;
let p2pMode = false;
let p2pFailed = false;
let isFirstPeer = false;
let peerRtcReady = false;
let rtcActive = false;
let usingDataChannel = false;
let rtcFallbackTimer = null;

const MAX_RECONNECT_ATTEMPTS = 6;
const RECONNECT_BASE_DELAY_MS = 1000;
const KEY_EXCHANGE_TIMEOUT_MS = 10_000;
const RTC_READY_TIMEOUT_MS = 3_000;
const CHUNK_SIZE = 131072;
const MAX_FILE_SIZE = 50 * 1024 * 1024;
const MAX_FILE_SIZE_P2P = 500 * 1024 * 1024;
const MAX_INCOMING_FILES = 5;
const FILE_TRANSFER_TIMEOUT_MS = 60_000;
const TYPING_STOP_DELAY_MS = 2000;

const EXPIRY_OPTIONS = [30, 60, 300, 1800, 3600, 0];
const EXPIRY_LABELS = { 30: "30s", 60: "1m", 300: "5m", 1800: "30m", 3600: "1h", 0: "∞" };

const incomingFiles = new Map();
const sentFiles = new Map();
const sentMessages = new Map();
const receivedMessages = new Map();
const receivedFiles = new Map();
const pendingAcks = [];
let sendAborted = false;
let typingTimer = null;
let typingActive = false;
let fileQueue = [];
let fileSending = false;
let linkSalt = null;
let shareUrl = "";
let shareLinkGen = 0;
let shareLinkTimer = null;
let messageExpiry = 300;
let maskMessage = false;

// --- DOM references ---

const screenConnect = document.getElementById("screen-connect");
const screenChannel = document.getElementById("screen-channel");
const passwordInput = document.getElementById("password");
const btnConnect = document.getElementById("btn-connect");
const connectError = document.getElementById("connect-error");
const connectSpinner = document.getElementById("connect-spinner");
const statusDot = document.getElementById("status-dot");
const statusText = document.getElementById("status-text");
const fingerprintValue = document.getElementById("fingerprint-value");
const fingerprintArea = document.getElementById("fingerprint-area");
const messagesEl = document.getElementById("messages");
const messageInput = document.getElementById("message-input");
const btnSend = document.getElementById("btn-send");
const btnDisconnect = document.getElementById("btn-disconnect");
const btnConnectScreenTheme = document.getElementById("btn-connect-screen-theme");
const btnChannelTheme = document.getElementById("btn-channel-theme");
const btnConnectScreenLang = document.getElementById("btn-connect-screen-lang");
const btnChannelLang = document.getElementById("btn-channel-lang");
const langMenuConnect = document.getElementById("lang-menu-connect");
const langMenuChannel = document.getElementById("lang-menu-channel");
const btnAttach = document.getElementById("btn-attach");
const fileInput = document.getElementById("file-input");
const dropOverlay = document.getElementById("drop-overlay");
const passwordStrength = document.getElementById("password-strength");
const strengthFill = passwordStrength.querySelector(".strength-fill");
const strengthLabel = passwordStrength.querySelector(".strength-label");
const typingIndicator = document.getElementById("typing-indicator");
const qrArea = document.getElementById("qr-area");
const qrCanvas = document.getElementById("qr-canvas");
const btnCopyLink = document.getElementById("btn-copy-link");
const btnExpiry = document.getElementById("btn-expiry");
const expiryMenu = document.getElementById("expiry-menu");
const btnMask = document.getElementById("btn-mask");
const modeBadge = document.getElementById("mode-badge");
const modeRadios = document.querySelectorAll('input[name="conn-mode"]');
const modeDescription = document.getElementById("mode-description");
const helpOverlay = document.getElementById("help-overlay");
const btnHelpClose = document.getElementById("btn-help-close");
const btnConnectScreenHelp = document.getElementById("btn-connect-screen-help");
const btnChannelHelp = document.getElementById("btn-channel-help");

// --- Theme ---

function applyTheme(light) {
    document.documentElement.classList.toggle("light", light);
    const icon = light ? "☀️" : "🌙";
    btnConnectScreenTheme.textContent = icon;
    btnChannelTheme.textContent = icon;
}

function toggleTheme() {
    const isLight = document.documentElement.classList.contains("light");
    localStorage.setItem("theme", isLight ? "dark" : "light");
    applyTheme(!isLight);
}

// --- Language ---

function updateModeDescription() {
    const mode = document.querySelector('input[name="conn-mode"]:checked')?.value || "relay";
    modeDescription.textContent = t(mode === "p2p" ? "modeP2PDesc" : "modeRelayDesc");
}

function applyLang(lang) {
    setLang(lang);
    for (const el of document.querySelectorAll(".lang-option")) {
        el.classList.toggle("active", el.dataset.lang === lang);
    }
    document.title = t("title");
    if (currentStatusState) {
        statusText.textContent = statusLabel(currentStatusState);
    }
    updateModeDescription();
}

function closeLangMenus() {
    for (const menu of [langMenuConnect, langMenuChannel]) {
        menu.hidden = true;
        menu.style.right = "";
        menu.style.left = "";
    }
    btnConnectScreenLang.setAttribute("aria-expanded", "false");
    btnChannelLang.setAttribute("aria-expanded", "false");
}

function openLangMenu(menu, btn) {
    const isOpen = !menu.hidden;
    closeLangMenus();
    if (!isOpen) {
        menu.hidden = false;
        btn.setAttribute("aria-expanded", "true");
        const rect = menu.getBoundingClientRect();
        if (rect.left < 8) {
            menu.style.right = "auto";
            menu.style.left = "0";
        }
    }
}

// --- UI helpers ---

let currentStatusState = null;

function estimatePasswordStrength(password) {
    if (!password) return "weak";
    let charsetSize = 0;
    if (/[a-z]/.test(password)) charsetSize += 26;
    if (/[A-Z]/.test(password)) charsetSize += 26;
    if (/[0-9]/.test(password)) charsetSize += 10;
    if (/[^a-zA-Z0-9]/.test(password)) charsetSize += 32;
    const bits = Math.floor(password.length * Math.log2(charsetSize || 1));
    if (bits < 40) return "weak";
    if (bits < 60) return "fair";
    if (bits < 80) return "good";
    return "strong";
}

async function updateShareLink(password) {
    const gen = ++shareLinkGen;
    if (!password || !linkSalt) {
        shareUrl = "";
        qrArea.classList.add("hidden");
        return;
    }
    try {
        const token = await encryptForLink(password, linkSalt);
        if (gen !== shareLinkGen) return;
        const mode = document.querySelector('input[name="conn-mode"]:checked')?.value || "relay";
        const modeParam = mode === "p2p" ? "&m=p2p" : "";
        shareUrl = window.location.origin + window.location.pathname + "#e=" + encodeURIComponent(token) + modeParam;
        drawQRCode(shareUrl);
    } catch {
        if (gen === shareLinkGen) qrArea.classList.add("hidden");
    }
}

function updatePasswordStrength() {
    const password = passwordInput.value;
    if (!password) {
        passwordStrength.classList.add("hidden");
        qrArea.classList.add("hidden");
        shareUrl = "";
        return;
    }
    passwordStrength.classList.remove("hidden");
    const level = estimatePasswordStrength(password);
    strengthFill.className = "strength-fill " + level;
    const key = "password" + level.charAt(0).toUpperCase() + level.slice(1);
    strengthLabel.textContent = t(key);
    clearTimeout(shareLinkTimer);
    shareLinkTimer = setTimeout(() => updateShareLink(password), 1000);
}

function drawQRCode(url) {
    try {
        const qr = qrcode(0, "M");
        qr.addData(url);
        qr.make();
        const count = qr.getModuleCount();
        const size = 160;
        qrCanvas.width = size;
        qrCanvas.height = size;
        const ctx = qrCanvas.getContext("2d");
        const cell = size / count;
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, size, size);
        ctx.fillStyle = "#000000";
        for (let r = 0; r < count; r++) {
            for (let c = 0; c < count; c++) {
                if (qr.isDark(r, c)) {
                    ctx.fillRect(
                        Math.floor(c * cell),
                        Math.floor(r * cell),
                        Math.ceil(cell),
                        Math.ceil(cell)
                    );
                }
            }
        }
        qrArea.classList.remove("hidden");
    } catch {
        qrArea.classList.add("hidden");
    }
}

const STATUS_KEYS = {
    waiting: "statusWaiting",
    key_exchange: "statusKeyExchange",
    connected: "statusConnected",
    connected_p2p: "statusConnectedP2P",
    peer_left: "statusPeerLeft",
    reconnecting: "statusReconnecting",
    disconnected: "statusDisconnected",
};

function statusLabel(state) {
    return STATUS_KEYS[state] ? t(STATUS_KEYS[state]) : state;
}

function showScreen(name) {
    screenConnect.classList.toggle("active", name === "connect");
    screenChannel.classList.toggle("active", name === "channel");
    if (name === "connect") {
        passwordInput.focus();
    } else if (name === "channel") {
        messageInput.focus();
    }
}

function setStatus(state) {
    currentStatusState = state;
    const isConn = state === "connected" || state === "connected_p2p";
    statusDot.className = "dot " + (isConn ? "connected" : state);
    statusText.textContent = statusLabel(state);
    btnSend.disabled = !isConn;
    btnAttach.disabled = !isConn;
    btnMask.disabled = !isConn;
    peersConnected = isConn;
    fingerprintArea.classList.toggle("visible",
        state === "waiting" || state === "key_exchange" || isConn);
}

function updateModeBadge() {
    if (usingDataChannel) {
        modeBadge.textContent = "P2P";
        modeBadge.className = "mode-badge mode-p2p";
        modeBadge.title = t("modeP2PDesc");
    } else if (p2pMode && p2pFailed) {
        modeBadge.textContent = "Relay";
        modeBadge.className = "mode-badge mode-fallback";
        modeBadge.title = t("modeRelayDesc");
    } else if (p2pMode) {
        modeBadge.textContent = "P2P";
        modeBadge.className = "mode-badge";
        modeBadge.title = t("modeP2PDesc");
    } else {
        modeBadge.textContent = "Relay";
        modeBadge.className = "mode-badge";
        modeBadge.title = t("modeRelayDesc");
    }
    modeBadge.hidden = false;
}

function showConnectError(msg) {
    connectError.textContent = msg;
    connectError.classList.remove("hidden");
}

function clearConnectError() {
    connectError.classList.add("hidden");
}

function setConnecting(active) {
    connectSpinner.classList.toggle("hidden", !active);
    btnConnect.disabled = active;
    btnConnect.setAttribute("aria-busy", active);
    passwordInput.disabled = active;
}

function createMessageMeta(direction, time) {
    const meta = document.createElement("div");
    meta.className = "message-meta";

    const label = document.createElement("span");
    label.dataset.i18n = direction === "sent" ? "you" : "peer";
    label.textContent = t(label.dataset.i18n);

    meta.appendChild(label);
    meta.append(" · " + time);
    return meta;
}

function appendMessage(text, direction, msgN, masked = false) {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });

    const wrap = document.createElement("div");
    wrap.className = "message " + direction;

    const meta = createMessageMeta(direction, time);
    if (masked && direction === "sent") {
        const badge = document.createElement("span");
        badge.className = "masked-badge";
        badge.setAttribute("data-i18n-title", "maskToggle");
        badge.title = t("maskToggle");
        badge.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`;
        meta.appendChild(badge);
    }

    const body = document.createElement("pre");
    body.className = "message-body";
    body.textContent = (masked && direction === "received") ? "*".repeat(text.length) : text;

    wrap.appendChild(meta);
    wrap.appendChild(body);

    if (direction === "received") {
        const copyBtn = document.createElement("button");
        copyBtn.className = "btn-copy";
        copyBtn.dataset.i18n = "copy";
        copyBtn.textContent = t("copy");
        copyBtn.addEventListener("click", () => {
            navigator.clipboard.writeText(text).then(() => {
                copyBtn.textContent = t("copied");
                setTimeout(() => { copyBtn.textContent = t("copy"); }, 1500);
            });
        });
        wrap.appendChild(copyBtn);
        if (typeof msgN === "number") receivedMessages.set(msgN, wrap);
    } else if (direction === "sent" && typeof msgN === "number") {
        const unsendBtn = document.createElement("button");
        unsendBtn.className = "btn-unsend";
        unsendBtn.dataset.i18n = "unsend";
        unsendBtn.textContent = t("unsend");
        unsendBtn.addEventListener("click", () => sendUnsend(msgN));
        wrap.appendChild(unsendBtn);
        sentMessages.set(msgN, wrap);
    }

    messagesEl.appendChild(wrap);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return wrap;
}

function appendSystemMessage(textOrKey, {i18nKey, warning} = {}) {
    const el = document.createElement("div");
    el.className = "system-message";
    if (warning) el.classList.add("system-warning");
    el.textContent = textOrKey;
    if (i18nKey) el.setAttribute("data-i18n", i18nKey);
    messagesEl.appendChild(el);
    messagesEl.scrollTop = messagesEl.scrollHeight;
}

// --- Typing indicator ---

function showTypingIndicator() {
    typingIndicator.textContent = t("typingIndicator");
    typingIndicator.classList.remove("hidden");
}

function hideTypingIndicator() {
    typingIndicator.classList.add("hidden");
}

// --- Transport abstraction ---

async function sendEncryptedPayload(data, iv) {
    const json = JSON.stringify({ type: "message", data, iv });
    if (usingDataChannel && rtc.isConnected()) {
        await rtc.send(json);
    } else if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(json);
    }
}

function isTransportReady() {
    if (usingDataChannel && rtc.isConnected()) return true;
    return ws && ws.readyState === WebSocket.OPEN;
}

// --- WebRTC P2P ---

async function sendRtcSignal(inner) {
    if (!sessionKey || !keyExchangeComplete || !ws || ws.readyState !== WebSocket.OPEN) return;
    try {
        const encrypted = await encrypt(sessionKey, JSON.stringify(inner));
        ws.send(JSON.stringify({ type: "message", data: encrypted.data, iv: encrypted.iv }));
    } catch {}
}

function startP2PNegotiation() {
    peerRtcReady = false;
    rtcActive = true;
    rtc.init({
        onSignal: sendRtcSignal,
        onOpen: handleDataChannelOpen,
        onClose: handleP2PFailed,
        onMessage: handleDataChannelMessage,
    });
    sendRtcSignal({ t: "rtc_ready" });
    rtcFallbackTimer = setTimeout(() => {
        if (!usingDataChannel && rtcActive) {
            handleP2PFailed("ready_timeout");
        }
    }, RTC_READY_TIMEOUT_MS);
}

function handlePeerRtcReady() {
    peerRtcReady = true;
    if (!p2pMode || !rtcActive) return;
    clearTimeout(rtcFallbackTimer);
    rtcFallbackTimer = null;
    if (isFirstPeer) {
        rtc.createOffer().catch(() => handleP2PFailed("offer_failed"));
    }
}

function handleDataChannelOpen() {
    clearTimeout(rtcFallbackTimer);
    rtcFallbackTimer = null;
    usingDataChannel = true;
    setStatus("connected_p2p");
    updateModeBadge();
    appendSystemMessage(t("sysP2PConnected"), { i18nKey: "sysP2PConnected" });
}

function handleP2PFailed() {
    clearTimeout(rtcFallbackTimer);
    rtcFallbackTimer = null;
    const wasActive = usingDataChannel;
    usingDataChannel = false;
    rtcActive = false;
    rtc.cleanup();
    if (peersConnected) {
        p2pFailed = true;
        if (wasActive) setStatus("connected");
        updateModeBadge();
        appendSystemMessage(t("sysP2PFallback"), { i18nKey: "sysP2PFallback", warning: true });
    }
}

async function handleDataChannelMessage(rawData) {
    if (!keyExchangeComplete || !sessionKey) return;
    let msg;
    try { msg = JSON.parse(rawData); } catch { return; }
    if (!msg.data || !msg.iv) return;
    try {
        const plaintext = await decrypt(sessionKey, msg.data, msg.iv);
        handleDecryptedPayload(plaintext);
    } catch {
        appendSystemMessage(t("sysDecryptFailed"), { i18nKey: "sysDecryptFailed" });
    }
}

async function sendTypingSignal(type) {
    if (!sessionKey || !keyExchangeComplete || !peersConnected || !isTransportReady()) return;
    try {
        const encrypted = await encrypt(sessionKey, JSON.stringify({ t: type }));
        await sendEncryptedPayload(encrypted.data, encrypted.iv);
    } catch {}
}

// --- File queue ---

async function processFileQueue() {
    if (fileSending || fileQueue.length === 0) return;
    fileSending = true;
    while (fileQueue.length > 0) {
        await initiateFileSend(fileQueue.shift());
    }
    fileSending = false;
}

function enqueueFile(file) {
    fileQueue.push(file);
    processFileQueue();
}

// --- File transfer ---

function formatFileSize(bytes) {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
}

function randomHex(byteCount) {
    const arr = crypto.getRandomValues(new Uint8Array(byteCount));
    return Array.from(arr, b => b.toString(16).padStart(2, "0")).join("");
}

const FILE_ICON_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>`;

function createFileMessageElement(name, size, direction) {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });

    const wrap = document.createElement("div");
    wrap.className = "message " + direction;

    const meta = createMessageMeta(direction, time);

    const fileEl = document.createElement("div");
    fileEl.className = "file-message";

    const header = document.createElement("div");
    header.className = "file-message-header";

    const icon = document.createElement("span");
    icon.className = "file-message-icon";
    icon.innerHTML = FILE_ICON_SVG;

    const nameEl = document.createElement("span");
    nameEl.className = "file-message-name";
    nameEl.textContent = name.length > 255 ? name.slice(0, 255) + "…" : name;

    header.appendChild(icon);
    header.appendChild(nameEl);

    const sizeEl = document.createElement("div");
    sizeEl.className = "file-message-size";
    sizeEl.textContent = formatFileSize(size);

    const progressWrap = document.createElement("div");
    progressWrap.className = "file-progress";
    const progressBar = document.createElement("div");
    progressBar.className = "file-progress-bar";
    progressWrap.appendChild(progressBar);

    const progressText = document.createElement("div");
    progressText.className = "file-progress-text";
    progressText.textContent = direction === "sent" ? t("fileSending") : t("fileReceiving");

    fileEl.appendChild(header);
    fileEl.appendChild(sizeEl);
    fileEl.appendChild(progressWrap);
    fileEl.appendChild(progressText);

    wrap.appendChild(meta);
    wrap.appendChild(fileEl);
    messagesEl.appendChild(wrap);
    messagesEl.scrollTop = messagesEl.scrollHeight;

    let sentStatusEl = null;
    let unsendBtn = null;

    if (direction === "sent") {
        unsendBtn = document.createElement("button");
        unsendBtn.className = "btn-unsend";
        unsendBtn.dataset.i18n = "unsend";
        unsendBtn.textContent = t("unsend");
        unsendBtn.disabled = true;
        wrap.appendChild(unsendBtn);
    }

    return {
        getWrap() { return wrap; },
        setProgress(fraction) {
            progressBar.style.width = Math.round(fraction * 100) + "%";
            messagesEl.scrollTop = messagesEl.scrollHeight;
        },
        setDone() {
            progressWrap.remove();
            progressText.remove();
            const check = document.createElement("div");
            check.className = "file-message-size";
            check.textContent = "✓ " + t("fileSent");
            fileEl.appendChild(check);
            sentStatusEl = check;
            if (unsendBtn) unsendBtn.disabled = false;
        },
        setAcked() {
            if (sentStatusEl) {
                sentStatusEl.textContent = "✓ " + t("fileDownloadedByPeer");
            }
        },
        setDownload(blob, filename, onDownload) {
            progressWrap.remove();
            progressText.remove();
            const btn = document.createElement("button");
            btn.className = "btn-download";
            btn.textContent = t("download");
            btn.setAttribute("data-i18n", "download");
            btn.addEventListener("click", () => {
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = filename;
                a.click();
                setTimeout(() => URL.revokeObjectURL(url), 60000);
                if (onDownload) onDownload();
            });
            fileEl.appendChild(btn);
        },
        setImagePreview(blob, filename, onDownload) {
            progressWrap.remove();
            progressText.remove();
            const previewEl = document.createElement("div");
            previewEl.className = "file-message-preview";
            const img = document.createElement("img");
            const objectUrl = URL.createObjectURL(blob);
            img.src = objectUrl;
            img.alt = filename;
            previewEl.appendChild(img);
            fileEl.appendChild(previewEl);
            const btn = document.createElement("button");
            btn.className = "btn-download";
            btn.textContent = t("download");
            btn.setAttribute("data-i18n", "download");
            btn.addEventListener("click", () => {
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = filename;
                a.click();
                setTimeout(() => URL.revokeObjectURL(url), 60000);
                if (onDownload) onDownload();
            });
            fileEl.appendChild(btn);
            setTimeout(() => URL.revokeObjectURL(objectUrl), 300_000);
        },
        setError(msg) {
            progressWrap.remove();
            progressText.textContent = msg;
            progressText.style.color = "var(--error)";
        }
    };
}

async function initiateFileSend(file) {
    if (file.size === 0) {
        appendSystemMessage(t("fileEmpty"), {i18nKey: "fileEmpty"});
        return;
    }
    const maxSize = usingDataChannel ? MAX_FILE_SIZE_P2P : MAX_FILE_SIZE;
    if (file.size > maxSize) {
        const key = usingDataChannel ? "fileTooLargeP2P" : "fileTooLarge";
        appendSystemMessage(t(key), {i18nKey: key});
        return;
    }
    if (!sessionKey || !keyExchangeComplete || !peersConnected || !isTransportReady()) {
        appendSystemMessage(t("fileNotConnected"), {i18nKey: "fileNotConnected"});
        return;
    }

    const fileId = randomHex(4);
    const totalChunks = Math.ceil(file.size / CHUNK_SIZE);
    const arrayBuffer = await file.arrayBuffer();
    const bytes = new Uint8Array(arrayBuffer);

    const expiry = messageExpiry;
    const ui = createFileMessageElement(file.name, file.size, "sent");

    for (let seq = 0; seq < totalChunks; seq++) {
        if (sendAborted || !peersConnected || !isTransportReady()) {
            ui.setError(t("fileTransferError"));
            return;
        }

        const start = seq * CHUNK_SIZE;
        const end = Math.min(start + CHUNK_SIZE, file.size);
        const chunkBytes = bytes.slice(start, end);
        const chunkB64 = toBase64(chunkBytes);

        const inner = { t: "file_chunk", id: fileId, seq, c: chunkB64, n: sendCounter++ };
        if (seq === 0) {
            inner.total = totalChunks;
            inner.name = file.name.slice(0, 255);
            inner.size = file.size;
            inner.mime = file.type || "application/octet-stream";
            if (expiry > 0) inner.exp = expiry;
        }

        let encrypted;
        try {
            encrypted = await encrypt(sessionKey, JSON.stringify(inner));
        } catch {
            ui.setError(t("fileTransferError"));
            return;
        }

        await sendEncryptedPayload(encrypted.data, encrypted.iv);
        ui.setProgress((seq + 1) / totalChunks);

        if (seq < totalChunks - 1) {
            await new Promise(r => setTimeout(r, 5));
        }
    }

    ui.setDone();
    sentFiles.set(fileId, ui);
    if (expiry > 0) scheduleExpiry(ui.getWrap(), expiry);
    const unsendBtnEl = ui.getWrap().querySelector(".btn-unsend");
    if (unsendBtnEl) {
        unsendBtnEl.addEventListener("click", () => sendUnsendFile(fileId));
    }
}

function handleFileChunk(parsed) {
    const fileId = parsed.id;

    if (!incomingFiles.has(fileId)) {
        if (parsed.seq !== 0) return;
        if (incomingFiles.size >= MAX_INCOMING_FILES) return;
        const maxSize = usingDataChannel ? MAX_FILE_SIZE_P2P : MAX_FILE_SIZE;
        const maxChunks = Math.ceil(maxSize / CHUNK_SIZE);
        if (!Number.isInteger(parsed.total) || parsed.total < 1 || parsed.total > maxChunks) return;
        if (typeof parsed.size !== "number" || parsed.size < 1 || parsed.size > maxSize) return;
        const entry = {
            name: parsed.name,
            size: parsed.size,
            mime: parsed.mime,
            total: parsed.total,
            exp: parsed.exp || 0,
            chunks: new Map(),
            startedAt: Date.now(),
            ui: createFileMessageElement(parsed.name, parsed.size, "received")
        };
        incomingFiles.set(fileId, entry);
    }

    const entry = incomingFiles.get(fileId);
    entry.chunks.set(parsed.seq, fromBase64(parsed.c));
    entry.ui.setProgress(entry.chunks.size / entry.total);

    if (entry.chunks.size === entry.total) {
        let totalBytes = 0;
        for (const chunk of entry.chunks.values()) totalBytes += chunk.length;

        const assembled = new Uint8Array(totalBytes);
        let offset = 0;
        for (let i = 0; i < entry.total; i++) {
            const chunk = entry.chunks.get(i);
            assembled.set(chunk, offset);
            offset += chunk.length;
        }

        const blob = new Blob([assembled], { type: entry.mime });
        if (entry.mime.startsWith("image/")) {
            entry.ui.setImagePreview(blob, entry.name, () => sendFileAck(fileId));
        } else {
            entry.ui.setDownload(blob, entry.name, () => sendFileAck(fileId));
        }
        receivedFiles.set(fileId, entry.ui.getWrap());
        if (entry.exp > 0) scheduleExpiry(entry.ui.getWrap(), entry.exp);
        incomingFiles.delete(fileId);
    }
}

function cleanupIncomingFiles() {
    for (const [id, entry] of incomingFiles) {
        entry.ui.setError(t("fileTransferAborted"));
    }
    incomingFiles.clear();
}

function clearElementExpiry(wrap) {
    if (wrap._expiryInterval) {
        clearInterval(wrap._expiryInterval);
        wrap._expiryInterval = null;
    }
}

function clearExpiryTimers() {
    for (const el of messagesEl.querySelectorAll(".message")) {
        clearElementExpiry(el);
    }
}

function replaceWithPlaceholder(wrap) {
    clearElementExpiry(wrap);
    const meta = wrap.querySelector(".message-meta");
    wrap.innerHTML = "";
    if (meta) wrap.appendChild(meta);
    const placeholder = document.createElement("div");
    placeholder.className = "message-unsent";
    placeholder.dataset.i18n = "unsent";
    placeholder.textContent = t("unsent");
    wrap.appendChild(placeholder);
}

function replaceWithExpiredPlaceholder(wrap) {
    clearElementExpiry(wrap);
    for (const [key, el] of sentMessages) { if (el === wrap) { sentMessages.delete(key); break; } }
    for (const [key, el] of receivedMessages) { if (el === wrap) { receivedMessages.delete(key); break; } }
    for (const [key, ui] of sentFiles) { if (ui.getWrap() === wrap) { sentFiles.delete(key); break; } }
    for (const [key, el] of receivedFiles) { if (el === wrap) { receivedFiles.delete(key); break; } }
    const meta = wrap.querySelector(".message-meta");
    wrap.innerHTML = "";
    if (meta) wrap.appendChild(meta);
    const placeholder = document.createElement("div");
    placeholder.className = "message-expired";
    placeholder.dataset.i18n = "expired";
    placeholder.textContent = t("expired");
    wrap.appendChild(placeholder);
}

function formatCountdown(ms) {
    const totalSec = Math.ceil(ms / 1000);
    if (totalSec >= 3600) {
        const h = Math.floor(totalSec / 3600);
        const m = Math.floor((totalSec % 3600) / 60);
        const s = totalSec % 60;
        return h + ":" + String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
    }
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return m + ":" + String(s).padStart(2, "0");
}

function scheduleExpiry(wrap, seconds) {
    const expireAt = Date.now() + seconds * 1000;
    const timerEl = document.createElement("span");
    timerEl.className = "message-expiry";
    const firstBtn = wrap.querySelector(".btn-unsend, .btn-copy");
    if (firstBtn) {
        const row = document.createElement("div");
        row.className = "expiry-row";
        firstBtn.parentNode.insertBefore(row, firstBtn);
        if (firstBtn.classList.contains("btn-copy")) {
            row.appendChild(timerEl);
            row.appendChild(firstBtn);
        } else {
            row.appendChild(firstBtn);
            row.appendChild(timerEl);
        }
    } else {
        wrap.appendChild(timerEl);
    }

    function update() {
        const remaining = Math.max(0, expireAt - Date.now());
        if (remaining <= 0) {
            clearInterval(intervalId);
            replaceWithExpiredPlaceholder(wrap);
            return;
        }
        timerEl.textContent = formatCountdown(remaining);
        timerEl.classList.toggle("expiry-warning", remaining <= 30_000);
        timerEl.classList.toggle("expiry-urgent", remaining <= 10_000);
    }

    update();
    const intervalId = setInterval(update, 1000);
    wrap._expiryInterval = intervalId;
}

async function sendUnsend(msgN) {
    const wrap = sentMessages.get(msgN);
    if (!wrap) return;
    replaceWithPlaceholder(wrap);
    sentMessages.delete(msgN);
    if (!sessionKey || !keyExchangeComplete || !peersConnected || !isTransportReady()) return;
    try {
        const inner = { t: "unsend", ref: msgN, n: sendCounter++ };
        const encrypted = await encrypt(sessionKey, JSON.stringify(inner));
        await sendEncryptedPayload(encrypted.data, encrypted.iv);
    } catch {}
}

async function sendUnsendFile(fileId) {
    const ui = sentFiles.get(fileId);
    const wrap = ui ? ui.getWrap() : null;
    sentFiles.delete(fileId);
    if (wrap) replaceWithPlaceholder(wrap);
    if (!sessionKey || !keyExchangeComplete || !peersConnected || !isTransportReady()) return;
    try {
        const inner = { t: "unsend_file", ref: fileId, n: sendCounter++ };
        const encrypted = await encrypt(sessionKey, JSON.stringify(inner));
        await sendEncryptedPayload(encrypted.data, encrypted.iv);
    } catch {}
}

async function sendFileAck(fileId) {
    if (!sessionKey || !keyExchangeComplete || !peersConnected || !isTransportReady()) return;
    try {
        const inner = { t: "file_ack", id: fileId, n: sendCounter++ };
        const encrypted = await encrypt(sessionKey, JSON.stringify(inner));
        await sendEncryptedPayload(encrypted.data, encrypted.iv);
    } catch {}
}

async function sendMsgAck(refN) {
    if (!sessionKey || !keyExchangeComplete || !peersConnected || !isTransportReady()) return;
    if (document.visibilityState !== "visible") {
        pendingAcks.push(refN);
        return;
    }
    try {
        const inner = { t: "msg_ack", ref: refN, n: sendCounter++ };
        const encrypted = await encrypt(sessionKey, JSON.stringify(inner));
        await sendEncryptedPayload(encrypted.data, encrypted.iv);
    } catch {}
}

async function flushPendingAcks() {
    const toSend = pendingAcks.splice(0);
    for (const refN of toSend) {
        await sendMsgAck(refN);
    }
}

function markAsSeen(wrap) {
    if (wrap.querySelector(".message-seen")) return;
    const meta = wrap.querySelector(".message-meta");
    if (!meta) return;
    const seen = document.createElement("span");
    seen.className = "message-seen";
    seen.dataset.i18n = "seen";
    seen.textContent = t("seen");
    meta.append(" · ");
    meta.appendChild(seen);
}

setInterval(() => {
    const now = Date.now();
    for (const [id, entry] of incomingFiles) {
        if (now - entry.startedAt > FILE_TRANSFER_TIMEOUT_MS) {
            entry.ui.setError(t("fileTransferAborted"));
            incomingFiles.delete(id);
        }
    }
}, 15_000);

// --- WebSocket ---

function buildWsUrl(channelId) {
    const proto = location.protocol === "https:" ? "wss:" : "ws:";
    return `${proto}//${location.host}/ws/${channelId}`;
}

function openWebSocket(channelId) {
    if (ws) {
        ws.onclose = null;
        ws.onerror = null;
        ws.close();
    }

    ws = new WebSocket(buildWsUrl(channelId));

    ws.addEventListener("message", handleMessage);
    ws.addEventListener("close", handleClose);
    ws.addEventListener("error", () => {});
}

async function handleMessage(event) {
    let msg;
    try {
        msg = JSON.parse(event.data);
    } catch {
        return;
    }

    if (msg.type === "status") {
        switch (msg.status) {
            case "waiting":
                isFirstPeer = true;
                setStatus("waiting");
                appendSystemMessage(t("sysChannelOpen"), {i18nKey: "sysChannelOpen"});
                break;
            case "connected":
                setStatus("key_exchange");
                appendSystemMessage(t("sysPeerConnected"), {i18nKey: "sysPeerConnected"});
                if (Notification.permission === "granted" && document.visibilityState === "hidden") {
                    new Notification(t("notifTitle"), { body: t("notifBody") });
                }
                await sendKeyExchange();
                keyExchangeTimeout = setTimeout(() => {
                    if (!keyExchangeComplete) {
                        appendSystemMessage(t("sysKeyExchangeTimeout"), {i18nKey: "sysKeyExchangeTimeout"});
                        disconnectCleanup();
                        showScreen("connect");
                        showConnectError(t("errKeyExchangeTimeout"));
                    }
                }, KEY_EXCHANGE_TIMEOUT_MS);
                break;
            case "peer_left":
                clearTimeout(keyExchangeTimeout);
                keyExchangeTimeout = null;
                sessionKey = null;
                keyExchangeComplete = false;
                sendAborted = true;
                sendCounter = 0;
                peerCounter = -1;
                rtc.cleanup();
                usingDataChannel = false;
                rtcActive = false;
                peerRtcReady = false;
                clearTimeout(rtcFallbackTimer);
                rtcFallbackTimer = null;
                cleanupIncomingFiles();
                sentFiles.clear();
                sentMessages.clear();
                receivedMessages.clear();
                receivedFiles.clear();
                hideTypingIndicator();
                setStatus("peer_left");
                appendSystemMessage(t("sysPeerLeft"), {i18nKey: "sysPeerLeft"});
                break;
            case "rejected":
                appendSystemMessage(t("sysRejected"), {i18nKey: "sysRejected"});
                disconnectCleanup();
                showScreen("connect");
                showConnectError(t("errChannelFull"));
                break;
            case "timed_out":
                appendSystemMessage(t("sysTimedOut"), {i18nKey: "sysTimedOut"});
                disconnectCleanup();
                showScreen("connect");
                showConnectError(t("errTimedOut"));
                break;
        }
        return;
    }

    if (msg.type === "key_exchange") {
        await handleKeyExchange(msg);
        return;
    }

    if (msg.type === "message") {
        if (!keyExchangeComplete || !sessionKey) {
            return;
        }
        try {
            const plaintext = await decrypt(sessionKey, msg.data, msg.iv);
            handleDecryptedPayload(plaintext);
        } catch {
            appendSystemMessage(t("sysDecryptFailed"), {i18nKey: "sysDecryptFailed"});
        }
    }
}

function handleDecryptedPayload(plaintext) {
    let parsed = null;
    try { parsed = JSON.parse(plaintext); } catch {}

    if (parsed && parsed.t === "typing") { showTypingIndicator(); return; }
    if (parsed && parsed.t === "typing_stop") { hideTypingIndicator(); return; }
    if (parsed && parsed.t === "rtc_ready") { handlePeerRtcReady(); return; }
    if (parsed && parsed.t === "rtc_offer") { rtc.handleOffer(parsed.sdp).catch(() => handleP2PFailed("offer_failed")); return; }
    if (parsed && parsed.t === "rtc_answer") { rtc.handleAnswer(parsed.sdp).catch(() => {}); return; }
    if (parsed && parsed.t === "rtc_ice") { rtc.handleIceCandidate(parsed.candidate).catch(() => {}); return; }

    if (parsed && parsed.t === "file_chunk") {
        if (typeof parsed.n === "number") {
            if (parsed.n <= peerCounter) return;
            peerCounter = parsed.n;
        }
        handleFileChunk(parsed);
    } else if (parsed && parsed.t === "file_ack") {
        if (typeof parsed.n === "number") {
            if (parsed.n <= peerCounter) return;
            peerCounter = parsed.n;
        }
        const ui = sentFiles.get(parsed.id);
        if (ui) ui.setAcked();
    } else if (parsed && parsed.t === "unsend") {
        if (typeof parsed.n === "number") {
            if (parsed.n <= peerCounter) return;
            peerCounter = parsed.n;
        }
        if (typeof parsed.ref === "number") {
            const wrap = receivedMessages.get(parsed.ref);
            if (wrap) { replaceWithPlaceholder(wrap); receivedMessages.delete(parsed.ref); }
        }
    } else if (parsed && parsed.t === "unsend_file") {
        if (typeof parsed.n === "number") {
            if (parsed.n <= peerCounter) return;
            peerCounter = parsed.n;
        }
        if (typeof parsed.ref === "string") {
            const wrap = receivedFiles.get(parsed.ref);
            if (wrap) { replaceWithPlaceholder(wrap); receivedFiles.delete(parsed.ref); }
        }
    } else if (parsed && parsed.t === "msg_ack") {
        if (typeof parsed.n === "number") {
            if (parsed.n <= peerCounter) return;
            peerCounter = parsed.n;
        }
        if (typeof parsed.ref === "number") {
            const wrap = sentMessages.get(parsed.ref);
            if (wrap) markAsSeen(wrap);
        }
    } else if (parsed && typeof parsed.n === "number" && typeof parsed.m === "string") {
        if (parsed.n <= peerCounter) return;
        peerCounter = parsed.n;
        const wrap = appendMessage(parsed.m, "received", parsed.n, parsed.mask === true);
        if (parsed.exp > 0) scheduleExpiry(wrap, parsed.exp);
        sendMsgAck(parsed.n);
    } else {
        appendMessage(plaintext, "received");
    }
}

async function sendKeyExchange() {
    try {
        const pubKeyBytes = await exportPublicKey(ephemeralKeyPair.publicKey);
        const encrypted = await encryptBytes(passwordKey, pubKeyBytes);
        ws.send(JSON.stringify({ type: "key_exchange", data: encrypted.data, iv: encrypted.iv }));
    } catch {
        appendSystemMessage(t("sysKeyExchangeSendFailed"), {i18nKey: "sysKeyExchangeSendFailed"});
        disconnectCleanup();
        showScreen("connect");
        showConnectError(t("errKeyExchangeFailed"));
    }
}

async function handleKeyExchange(msg) {
    if (keyExchangeComplete) return;
    try {
        const peerPubKeyBytes = await decryptBytes(passwordKey, msg.data, msg.iv);
        if (peerPubKeyBytes.length !== 65 || peerPubKeyBytes[0] !== 0x04) {
            throw new Error("Invalid public key");
        }
        const peerPublicKey = await importPublicKey(peerPubKeyBytes);
        const { sessionKey: sk, sessionFingerprint } =
            await deriveSessionKey(ephemeralKeyPair.privateKey, peerPublicKey);

        sessionKey = sk;
        keyExchangeComplete = true;
        ephemeralKeyPair = null;
        clearTimeout(keyExchangeTimeout);
        keyExchangeTimeout = null;

        fingerprintValue.textContent = sessionFingerprint;
        setStatus("connected");
        appendSystemMessage(t("sysKeysExchanged"), {i18nKey: "sysKeysExchanged"});
        if (p2pMode) startP2PNegotiation();
    } catch {
        appendSystemMessage(t("sysKeyExchangeFailed"), {i18nKey: "sysKeyExchangeFailed"});
        disconnectCleanup();
        showScreen("connect");
        showConnectError(t("errKeyExchangePassword"));
    }
}

function handleClose(event) {
    if (!event.wasClean && savedChannelId) {
        scheduleReconnect();
    }
}

function scheduleReconnect() {
    if (reconnectAttempts >= MAX_RECONNECT_ATTEMPTS) {
        setStatus("disconnected");
        appendSystemMessage(t("sysReconnectFailed"), {i18nKey: "sysReconnectFailed"});
        return;
    }
    const delay = RECONNECT_BASE_DELAY_MS * Math.pow(2, reconnectAttempts);
    reconnectAttempts++;
    setStatus("reconnecting");
    reconnectTimer = setTimeout(async () => {
        ephemeralKeyPair = await generateEphemeralKeyPair();
        sessionKey = null;
        keyExchangeComplete = false;
        sendAborted = false;
        sendCounter = 0;
        peerCounter = -1;
        rtc.cleanup();
        usingDataChannel = false;
        rtcActive = false;
        p2pFailed = false;
        peerRtcReady = false;
        isFirstPeer = false;
        sentFiles.clear();
        sentMessages.clear();
        receivedMessages.clear();
        receivedFiles.clear();
        openWebSocket(savedChannelId);
    }, delay);
}

// --- Connect flow ---

async function fetchSalt() {
    if (linkSalt) return linkSalt;
    const res = await fetch("/config");
    const data = await res.json();
    linkSalt = data.salt;
    return linkSalt;
}

async function connect() {
    const password = passwordInput.value;
    if (!password) {
        showConnectError(t("errNoPassword"));
        return;
    }
    if (password.length < 6) {
        showConnectError(t("errPasswordTooShort"));
        return;
    }

    const modeEl = document.querySelector('input[name="conn-mode"]:checked');
    p2pMode = modeEl?.value === "p2p";

    clearConnectError();
    setConnecting(true);

    if ("Notification" in window && Notification.permission === "default") {
        Notification.requestPermission();
    }

    let derived;
    try {
        const salt = await fetchSalt();
        derived = await deriveAll(password, salt);
    } catch {
        setConnecting(false);
        showConnectError(t("errDeriveFailed"));
        return;
    }

    let kp;
    try {
        kp = await generateEphemeralKeyPair();
    } catch {
        setConnecting(false);
        showConnectError(t("errKeygenFailed"));
        return;
    }

    savedChannelId = derived.channelId;
    passwordKey = derived.passwordKey;
    ephemeralKeyPair = kp;
    sessionKey = null;
    keyExchangeComplete = false;
    sendAborted = false;
    isFirstPeer = false;
    fingerprintValue.textContent = derived.fingerprint;
    reconnectAttempts = 0;

    p2pFailed = false;
    setConnecting(false);
    showScreen("channel");
    updateModeBadge();
    setStatus("waiting");
    messagesEl.innerHTML = "";
    openWebSocket(derived.channelId);
}

function disconnectCleanup() {
    clearExpiryTimers();
    clearTimeout(reconnectTimer);
    clearTimeout(keyExchangeTimeout);
    clearTimeout(typingTimer);
    clearTimeout(rtcFallbackTimer);
    reconnectTimer = null;
    keyExchangeTimeout = null;
    typingTimer = null;
    rtcFallbackTimer = null;
    typingActive = false;
    sendAborted = true;
    fileQueue = [];
    fileSending = false;
    cleanupIncomingFiles();
    sentFiles.clear();
    sentMessages.clear();
    receivedMessages.clear();
    receivedFiles.clear();
    pendingAcks.length = 0;
    p2pFailed = false;
    hideTypingIndicator();
    rtc.cleanup();
    usingDataChannel = false;
    rtcActive = false;
    peerRtcReady = false;
    isFirstPeer = false;
    if (ws) {
        ws.onclose = null;
        ws.onerror = null;
        ws.close();
        ws = null;
    }
    passwordKey = null;
    sessionKey = null;
    ephemeralKeyPair = null;
    keyExchangeComplete = false;
    savedChannelId = "";
    reconnectAttempts = 0;
    peersConnected = false;
    sendCounter = 0;
    peerCounter = -1;
}

function disconnect() {
    disconnectCleanup();
    modeBadge.hidden = true;
    showScreen("connect");
    clearConnectError();
    passwordInput.value = "";
    passwordStrength.classList.add("hidden");
    qrArea.classList.add("hidden");
}

// --- Send ---

async function sendMessage() {
    const text = messageInput.value;
    if (!text.trim() || !sessionKey || !keyExchangeComplete || !peersConnected || !isTransportReady()) return;

    const expiry = messageExpiry;
    let encrypted;
    const msgN = sendCounter;
    try {
        const envelope = { n: sendCounter++, m: text };
        if (expiry > 0) envelope.exp = expiry;
        if (maskMessage) envelope.mask = true;
        encrypted = await encrypt(sessionKey, JSON.stringify(envelope));
    } catch {
        appendSystemMessage(t("sysEncryptFailed"), {i18nKey: "sysEncryptFailed"});
        return;
    }

    await sendEncryptedPayload(encrypted.data, encrypted.iv);
    const wrap = appendMessage(text, "sent", msgN, maskMessage);
    if (expiry > 0) scheduleExpiry(wrap, expiry);
    messageInput.value = "";
    messageInput.focus();
}

// --- Event listeners ---

btnConnect.addEventListener("click", connect);

passwordInput.addEventListener("input", updatePasswordStrength);

passwordInput.addEventListener("keydown", e => {
    if (e.key === "Enter") connect();
});

btnDisconnect.addEventListener("click", disconnect);

btnSend.addEventListener("click", sendMessage);

messageInput.addEventListener("keydown", e => {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

btnAttach.addEventListener("click", () => fileInput.click());
fileInput.addEventListener("change", () => {
    for (const file of fileInput.files) {
        enqueueFile(file);
    }
    fileInput.value = "";
});

let dragCounter = 0;

screenChannel.addEventListener("dragenter", (e) => {
    e.preventDefault();
    dragCounter++;
    if (peersConnected) dropOverlay.classList.remove("hidden");
});

screenChannel.addEventListener("dragleave", (e) => {
    e.preventDefault();
    dragCounter--;
    if (dragCounter === 0) dropOverlay.classList.add("hidden");
});

screenChannel.addEventListener("dragover", (e) => {
    e.preventDefault();
});

screenChannel.addEventListener("drop", (e) => {
    e.preventDefault();
    dragCounter = 0;
    dropOverlay.classList.add("hidden");
    if (!peersConnected) return;
    for (const file of e.dataTransfer.files) {
        enqueueFile(file);
    }
});

screenChannel.addEventListener("paste", (e) => {
    if (!peersConnected) return;
    const items = e.clipboardData?.items;
    if (!items) return;
    for (const item of items) {
        if (item.kind === "file") {
            const file = item.getAsFile();
            if (file) enqueueFile(file);
        }
    }
});

messageInput.addEventListener("input", async () => {
    if (!peersConnected || !keyExchangeComplete) return;
    if (!typingActive) {
        typingActive = true;
        await sendTypingSignal("typing");
    }
    clearTimeout(typingTimer);
    typingTimer = setTimeout(async () => {
        typingActive = false;
        await sendTypingSignal("typing_stop");
    }, TYPING_STOP_DELAY_MS);
});

btnConnectScreenTheme.addEventListener("click", toggleTheme);
btnChannelTheme.addEventListener("click", toggleTheme);

let helpModalOpener = null;

function openHelpModal() {
    helpModalOpener = document.activeElement;
    helpOverlay.classList.remove("hidden");
    helpOverlay.setAttribute("aria-hidden", "false");
    btnHelpClose.focus();
}

function closeHelpModal() {
    const opener = helpModalOpener;
    helpModalOpener = null;
    helpOverlay.classList.add("hidden");
    helpOverlay.setAttribute("aria-hidden", "true");
    if (opener && typeof opener.focus === "function") opener.focus();
}

btnConnectScreenHelp.addEventListener("click", openHelpModal);
btnChannelHelp.addEventListener("click", openHelpModal);
btnHelpClose.addEventListener("click", closeHelpModal);
helpOverlay.addEventListener("click", (e) => {
    if (e.target === helpOverlay) closeHelpModal();
});

btnConnectScreenLang.addEventListener("click", (e) => {
    e.stopPropagation();
    openLangMenu(langMenuConnect, btnConnectScreenLang);
});
btnChannelLang.addEventListener("click", (e) => {
    e.stopPropagation();
    openLangMenu(langMenuChannel, btnChannelLang);
});

document.addEventListener("click", () => { closeLangMenus(); closeExpiryMenu(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeLangMenus(); closeExpiryMenu(); closeHelpModal(); } });

for (const el of document.querySelectorAll(".lang-option")) {
    el.addEventListener("click", (e) => {
        e.stopPropagation();
        localStorage.setItem("lang", el.dataset.lang);
        applyLang(el.dataset.lang);
        closeLangMenus();
    });
}

btnCopyLink.addEventListener("click", () => {
    if (!shareUrl) return;
    navigator.clipboard.writeText(shareUrl).then(() => {
        btnCopyLink.textContent = t("copied");
        setTimeout(() => { btnCopyLink.textContent = t("copyLink"); }, 1500);
    });
});

function closeExpiryMenu() {
    expiryMenu.hidden = true;
    btnExpiry.setAttribute("aria-expanded", "false");
}

btnExpiry.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = !expiryMenu.hidden;
    closeExpiryMenu();
    closeLangMenus();
    if (!isOpen) {
        for (const opt of expiryMenu.querySelectorAll(".expiry-option")) {
            opt.classList.toggle("active", Number(opt.dataset.value) === messageExpiry);
        }
        expiryMenu.hidden = false;
        btnExpiry.setAttribute("aria-expanded", "true");
    }
});

for (const opt of document.querySelectorAll(".expiry-option")) {
    opt.addEventListener("click", (e) => {
        e.stopPropagation();
        messageExpiry = Number(opt.dataset.value);
        btnExpiry.textContent = EXPIRY_LABELS[messageExpiry];
        closeExpiryMenu();
    });
}

btnMask.addEventListener("click", () => {
    maskMessage = !maskMessage;
    btnMask.classList.toggle("active", maskMessage);
    btnMask.setAttribute("aria-pressed", String(maskMessage));
});

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") flushPendingAcks();
});

for (const radio of modeRadios) {
    radio.addEventListener("change", () => {
        localStorage.setItem("connMode", radio.value);
        updateModeDescription();
        if (passwordInput.value) updateShareLink(passwordInput.value);
    });
}

window.addEventListener("load", async () => {
    const savedTheme = localStorage.getItem("theme");
    const preferLight = savedTheme
        ? savedTheme === "light"
        : window.matchMedia("(prefers-color-scheme: light)").matches;
    applyTheme(preferLight);

    const savedLang = localStorage.getItem("lang") || DEFAULT_LANG;
    applyLang(savedLang);

    const savedMode = localStorage.getItem("connMode");
    if (savedMode) {
        const radio = document.querySelector(`input[name="conn-mode"][value="${savedMode}"]`);
        if (radio) radio.checked = true;
    }
    updateModeDescription();

    await fetchSalt();

    const hashParams = new URLSearchParams(location.hash.slice(1));
    const encryptedToken = hashParams.get("e");
    const prefilledPassword = hashParams.get("p");
    const sharedMode = hashParams.get("m");
    let autoConnect = false;

    if (encryptedToken && linkSalt) {
        try {
            const password = await decryptForLink(encryptedToken, linkSalt);
            passwordInput.value = password;
            updatePasswordStrength();
            autoConnect = true;
        } catch {}
        history.replaceState(null, "", location.pathname + location.search);
    } else if (prefilledPassword) {
        passwordInput.value = prefilledPassword;
        updatePasswordStrength();
        autoConnect = true;
        history.replaceState(null, "", location.pathname + location.search);
    }

    if (sharedMode) {
        const radio = document.querySelector(`input[name="conn-mode"][value="${sharedMode}"]`);
        if (radio) {
            radio.checked = true;
            localStorage.setItem("connMode", sharedMode);
            updateModeDescription();
        }
    }

    if (autoConnect) {
        connect();
    } else {
        passwordInput.focus();
    }

    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/sw.js").catch(() => {});
    }
});
