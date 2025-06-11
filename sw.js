const CACHE_NAME = "heritage-v1";
const FILES_TO_CACHE = [
  '/app.js',
  '/index.html',
  '/daftar.html',
  '/styles.css',
  '/images/logoheritage.png',
  '/images/omahugm.jpg',
  '/images/masjidmataram.jpg',
  '/images/joglojatikumaran.jpeg',
  '/images/pendopoagung-luthfi.jpg',
  '/images/omahpersik.png',
  '/images/omahindise2.jpg',
  '/images/ndalemnatan.jpg'
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    }).catch(() => caches.match('/index.html'))
  );
});
