// All cryptographic operations use the browser's built-in Web Crypto API.
// Key derivation: one expensive PBKDF2 (600k iterations), then three cheap HKDF splits.
// This produces independent keys for channel matching, message encryption, and fingerprinting.

const PBKDF2_ITERATIONS = 600_000;
const enc = new TextEncoder();
const dec = new TextDecoder();

export function toBase64(buffer) {
    const bytes = new Uint8Array(buffer);
    let binary = "";
    for (let i = 0; i < bytes.length; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}

export function fromBase64(str) {
    const binary = atob(str);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
}

async function pbkdf2MasterKey(password, salt) {
    const base = await crypto.subtle.importKey(
        "raw", enc.encode(password), "PBKDF2", false, ["deriveBits"]
    );
    const bits = await crypto.subtle.deriveBits(
        {
            name: "PBKDF2",
            salt: enc.encode(salt),
            iterations: PBKDF2_ITERATIONS,
            hash: "SHA-256"
        },
        base,
        256
    );
    return crypto.subtle.importKey("raw", bits, "HKDF", false, ["deriveBits", "deriveKey"]);
}

async function hkdfBits(masterKey, info, length) {
    return crypto.subtle.deriveBits(
        { name: "HKDF", hash: "SHA-256", salt: enc.encode("nullpost-v1"), info: enc.encode(info) },
        masterKey,
        length
    );
}

async function hkdfKey(masterKey, info) {
    return crypto.subtle.deriveKey(
        { name: "HKDF", hash: "SHA-256", salt: enc.encode("nullpost-v1"), info: enc.encode(info) },
        masterKey,
        { name: "AES-GCM", length: 256 },
        false,
        ["encrypt", "decrypt"]
    );
}

// Derives all three outputs from the password in one call.
// salt is fetched from /config — unique per server instance.
// Returns { channelId, passwordKey, fingerprint }.
// passwordKey is used only to authenticate the ECDH handshake, not for messages.
export async function deriveAll(password, salt) {
    const master = await pbkdf2MasterKey(password, salt);

    const [channelBits, passwordKey, fingerprintBits] = await Promise.all([
        hkdfBits(master, "channel-id", 256),
        hkdfKey(master, "encryption-key"),
        hkdfBits(master, "fingerprint", 48)
    ]);

    const channelId = Array.from(new Uint8Array(channelBits))
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");

    const fingerprint = Array.from(new Uint8Array(fingerprintBits))
        .map(b => b.toString(16).padStart(2, "0").toUpperCase())
        .join(" · ");

    return { channelId, passwordKey, fingerprint };
}

// Generates an ephemeral P-256 ECDH keypair for one session.
export async function generateEphemeralKeyPair() {
    return crypto.subtle.generateKey(
        { name: "ECDH", namedCurve: "P-256" },
        false,
        ["deriveBits"]
    );
}

// Returns the raw 65-byte uncompressed P-256 public key.
export async function exportPublicKey(publicKey) {
    const raw = await crypto.subtle.exportKey("raw", publicKey);
    return new Uint8Array(raw);
}

// Imports a raw P-256 public key.
export async function importPublicKey(rawBytes) {
    return crypto.subtle.importKey(
        "raw",
        rawBytes,
        { name: "ECDH", namedCurve: "P-256" },
        true,
        []
    );
}

// ECDH + HKDF → non-extractable AES-256-GCM session key and 48-bit session fingerprint.
export async function deriveSessionKey(privateKey, peerPublicKey) {
    const sharedBits = await crypto.subtle.deriveBits(
        { name: "ECDH", public: peerPublicKey },
        privateKey,
        256
    );

    const hkdfBase = await crypto.subtle.importKey(
        "raw", sharedBits, "HKDF", false, ["deriveKey", "deriveBits"]
    );

    const hkdfParams = (info) => ({
        name: "HKDF", hash: "SHA-256", salt: enc.encode("nullpost-v1"), info: enc.encode(info)
    });

    const [sessionKey, fpBits] = await Promise.all([
        crypto.subtle.deriveKey(
            hkdfParams("nullpost-session-key"),
            hkdfBase,
            { name: "AES-GCM", length: 256 },
            false,
            ["encrypt", "decrypt"]
        ),
        crypto.subtle.deriveBits(hkdfParams("nullpost-session-fingerprint"), hkdfBase, 48)
    ]);

    const sessionFingerprint = Array.from(new Uint8Array(fpBits))
        .map(b => b.toString(16).padStart(2, "0").toUpperCase())
        .join(" · ");

    return { sessionKey, sessionFingerprint };
}

export async function encryptForLink(password, salt) {
    const keyMaterial = await crypto.subtle.importKey(
        "raw", enc.encode(salt), "HKDF", false, ["deriveKey"]
    );
    const key = await crypto.subtle.deriveKey(
        { name: "HKDF", hash: "SHA-256", salt: enc.encode("nullpost-v1"), info: enc.encode("link-encryption") },
        keyMaterial,
        { name: "AES-GCM", length: 256 },
        false,
        ["encrypt"]
    );
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const ciphertext = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, enc.encode(password));
    return toBase64(iv) + "." + toBase64(ciphertext);
}

export async function decryptForLink(token, salt) {
    const [ivB64, dataB64] = token.split(".");
    if (!ivB64 || !dataB64) throw new Error("Invalid token");
    const keyMaterial = await crypto.subtle.importKey(
        "raw", enc.encode(salt), "HKDF", false, ["deriveKey"]
    );
    const key = await crypto.subtle.deriveKey(
        { name: "HKDF", hash: "SHA-256", salt: enc.encode("nullpost-v1"), info: enc.encode("link-encryption") },
        keyMaterial,
        { name: "AES-GCM", length: 256 },
        false,
        ["decrypt"]
    );
    const plain = await crypto.subtle.decrypt(
        { name: "AES-GCM", iv: fromBase64(ivB64) },
        key,
        fromBase64(dataB64)
    );
    return dec.decode(plain);
}

// Binary-capable AES-GCM encrypt (for raw public key bytes).
export async function encryptBytes(key, bytes) {
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const ciphertext = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, bytes);
    return { data: toBase64(ciphertext), iv: toBase64(iv) };
}

// Binary-capable AES-GCM decrypt (for raw public key bytes).
export async function decryptBytes(key, dataB64, ivB64) {
    const plain = await crypto.subtle.decrypt(
        { name: "AES-GCM", iv: fromBase64(ivB64) },
        key,
        fromBase64(dataB64)
    );
    return new Uint8Array(plain);
}

// Encrypts plaintext with AES-256-GCM. Returns { data, iv } as base64 strings.
export async function encrypt(key, plaintext) {
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const ciphertext = await crypto.subtle.encrypt(
        { name: "AES-GCM", iv },
        key,
        enc.encode(plaintext)
    );
    return {
        data: toBase64(ciphertext),
        iv: toBase64(iv)
    };
}

// Decrypts AES-256-GCM ciphertext. Throws if decryption fails (wrong key or tampered data).
export async function decrypt(key, dataB64, ivB64) {
    const data = fromBase64(dataB64);
    const iv = fromBase64(ivB64);
    const plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, data);
    return dec.decode(plain);
}
