const CACHE_NAME = 'translink-pwa-cache';
const TRANSLINK_REALTIME_URL = 'https://apis.opendatani.gov.uk/translink';

const urlsToCache = [
  '/',
  'index.html',
  'src.f10117fe.js',
  'styles.c9b106b8.css',
  'favicon.ico'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache  => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', e => {
  console.log('fetching', e.request.url);
  if (e.request.url.indexOf(TRANSLINK_REALTIME_URL) >= 0) {
    e.respondWith(
      // fetch then cache strategy if the URL is to the translink API
      caches.open(CACHE_NAME).then(cache => {
        return fetch(e.request).then(response => {
          cache.put(e.request.url, response.clone());
          return response;
        });
      })
    );
  } else {
    e.respondWith(
      // asking for cached shell files
      // fetch from cache and if doesn't exist fetch it from the network
      caches.match(e.request).then(resp => resp || fetch(e.request))
    );
  }
});