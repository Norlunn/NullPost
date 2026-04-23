const CACHE_NAME = "nullpost-v7";
const SHELL_URLS = [
    "/static/index.html",
    "/static/style.css",
    "/static/app.js",
    "/static/crypto.js",
    "/static/i18n.js",
    "/static/webrtc.js",
    "/static/qrcodegen.js",
    "/static/logo-48.png",
    "/static/logo-96.png",
    "/static/logo-128.png",
    "/static/logo-180.png",
    "/static/logo-192.png",
    "/static/logo-256.png",
    "/static/logo-512.png",
    "/static/manifest.json"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(SHELL_URLS))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys()
            .then((keys) => Promise.all(
                keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
            ))
            .then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", (event) => {
    const url = new URL(event.request.url);
    if (url.pathname === "/config" || url.pathname === "/health" || url.pathname.startsWith("/ws/")) {
        return;
    }
    event.respondWith(
        fetch(event.request)
            .then((response) => {
                if (response.ok && (url.pathname.startsWith("/static/") || url.pathname === "/" || url.pathname === "/sw.js")) {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
                }
                return response;
            })
            .catch(() => caches.match(event.request).then((cached) => cached || caches.match("/static/index.html")))
    );
});
