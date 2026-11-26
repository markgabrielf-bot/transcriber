/*
  coi-sw.js - part of Free Audio Transcriber (MIT License)
  Adds the security headers that let the browser run the AI on multiple CPU cores.
  Keep this file in the same folder as index.html.
*/
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.mode !== 'navigate') return;
  e.respondWith(fetch(r).then(res => {
    if (!res || res.status === 0) return res;
    const h = new Headers(res.headers);
    h.set('Cross-Origin-Opener-Policy', 'same-origin');
    h.set('Cross-Origin-Embedder-Policy', 'credentialless');
    return new Response(res.body, { status: res.status, statusText: res.statusText, headers: h });
  }).catch(() => fetch(r)));
});
