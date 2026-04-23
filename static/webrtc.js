const ICE_TIMEOUT_MS = 10_000;
const DC_BUFFER_THRESHOLD = 1_048_576;
const BACKPRESSURE_TIMEOUT_MS = 5_000;

const ICE_SERVERS = [
    { urls: "stun:stun.l.google.com:19302" },
    { urls: "stun:stun1.l.google.com:19302" },
];

let pc = null;
let dc = null;
let iceTimer = null;
let cbs = {};

export function init(callbacks) {
    cbs = callbacks;
}

export async function createOffer() {
    pc = createPeerConnection();
    dc = pc.createDataChannel("nullpost", { ordered: true });
    bindDataChannel(dc);
    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);
    cbs.onSignal({ t: "rtc_offer", sdp: pc.localDescription.sdp });
    startIceTimeout();
}

export async function handleOffer(sdp) {
    pc = createPeerConnection();
    pc.ondatachannel = (e) => {
        dc = e.channel;
        bindDataChannel(dc);
    };
    await pc.setRemoteDescription({ type: "offer", sdp });
    const answer = await pc.createAnswer();
    await pc.setLocalDescription(answer);
    cbs.onSignal({ t: "rtc_answer", sdp: pc.localDescription.sdp });
    startIceTimeout();
}

export async function handleAnswer(sdp) {
    if (pc) await pc.setRemoteDescription({ type: "answer", sdp });
}

export async function handleIceCandidate(candidateStr) {
    if (!pc) return;
    try { await pc.addIceCandidate(JSON.parse(candidateStr)); } catch {}
}

export async function send(data) {
    if (!dc || dc.readyState !== "open") return false;
    if (dc.bufferedAmount > DC_BUFFER_THRESHOLD) {
        await new Promise((resolve) => {
            dc.bufferedAmountLowThreshold = DC_BUFFER_THRESHOLD / 2;
            dc.onbufferedamountlow = () => {
                dc.onbufferedamountlow = null;
                resolve();
            };
            setTimeout(resolve, BACKPRESSURE_TIMEOUT_MS);
        });
        if (!dc || dc.readyState !== "open") return false;
    }
    dc.send(data);
    return true;
}

export function isConnected() {
    return dc?.readyState === "open";
}

export function cleanup() {
    clearTimeout(iceTimer);
    iceTimer = null;
    if (dc) {
        dc.onopen = null;
        dc.onclose = null;
        dc.onmessage = null;
        dc.onbufferedamountlow = null;
        try { dc.close(); } catch {}
        dc = null;
    }
    if (pc) {
        pc.onicecandidate = null;
        pc.ondatachannel = null;
        pc.onconnectionstatechange = null;
        try { pc.close(); } catch {}
        pc = null;
    }
}

function createPeerConnection() {
    const conn = new RTCPeerConnection({ iceServers: ICE_SERVERS });
    conn.onicecandidate = (e) => {
        if (e.candidate) {
            cbs.onSignal({ t: "rtc_ice", candidate: JSON.stringify(e.candidate) });
        }
    };
    conn.onconnectionstatechange = () => {
        if (conn.connectionState === "failed") {
            cleanup();
            cbs.onClose?.("connection_failed");
        }
    };
    return conn;
}

function bindDataChannel(channel) {
    channel.binaryType = "arraybuffer";
    channel.onopen = () => {
        clearTimeout(iceTimer);
        iceTimer = null;
        cbs.onOpen?.();
    };
    channel.onclose = () => {
        cbs.onClose?.("channel_closed");
    };
    channel.onmessage = (e) => {
        cbs.onMessage?.(e.data);
    };
}

function startIceTimeout() {
    clearTimeout(iceTimer);
    iceTimer = setTimeout(() => {
        if (!dc || dc.readyState !== "open") {
            cleanup();
            cbs.onClose?.("ice_timeout");
        }
    }, ICE_TIMEOUT_MS);
}
