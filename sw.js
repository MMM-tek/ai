// Service Worker for Blocker PWA
const CACHE_NAME = 'blocker-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    // Permite que la app funcione online/offline
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
