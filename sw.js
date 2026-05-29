const CACHE = 'brackets-v1';

const ASSETS = [
    '/',
    '/index.html',
    '/all4.html',
    '/all4simple.html',
    '/single_bracket_files/bracket.html',
    '/single_bracket_files/bracket8.html',
    '/single_bracket_files/bracket16.html',
    '/single_bracket_files/bracket64.html',
    '/into_bracs.js',
    '/position_ids.js',
    '/save_load.js',
    '/hide_screen.js',
    '/team8.css',
    '/team16.css',
    '/team32.css',
    '/team64.css',
    '/img/tournimg.png',
    '/img/bckgrnd.jpeg',
    '/manifest.webmanifest'
];

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE).then(cache => cache.addAll(ASSETS))
    );
    self.skipWaiting();
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
        )
    );
    self.clients.claim();
});

self.addEventListener('fetch', e => {
    // Skip non-GET and browser-extension requests
    if (e.request.method !== 'GET' || !e.request.url.startsWith(self.location.origin)) return;

    e.respondWith(
        caches.match(e.request).then(cached => {
            if (cached) return cached;
            return fetch(e.request).then(response => {
                // Cache new valid responses on the fly
                if (response && response.status === 200) {
                    const clone = response.clone();
                    caches.open(CACHE).then(cache => cache.put(e.request, clone));
                }
                return response;
            });
        }).catch(() => {
            // Offline fallback — return index for navigation requests
            if (e.request.mode === 'navigate') return caches.match('/index.html');
        })
    );
});