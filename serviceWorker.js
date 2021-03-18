var nameOfCache = "pwaDemoCache";
var cachedFiles = [
    '/',
    '/inex.html',
    '/text.html',
    '/images.html',
    '/css/pwaStyle.css',
    '/js/main.js'
];

/* Start service worker */
self.addEventListener('install', function(e){
    e.waitUntil(
            caches.open(nameOfCache).then(function(cache){
                return cache.addAll(cachedFiles);
            })
    );
});

/* Use cached Files if the user is offline */
self.addEventListener('fetch', function(e){
    e.respondWith(
            caches.match(e.request).then(function(response){
                return response || fetch(e.request);
            })
          );
});