self.addEventListener('install', (e) => e.waitUntil(self.skipWaiting()));
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

self.addEventListener("message", (e) => {
    e.source.postMessage(Date.now());
    debugger;
});