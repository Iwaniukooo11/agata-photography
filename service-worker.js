!function(){"use strict";const e=["client/client.7fdbe0ea.js","client/Price.8ca0b0eb.js","client/Gallery.ed7a8616.js","client/News.97a704dd.js","client/index.ac0f380d.js","client/copywriting.48d94aa5.js","client/photography.13cf190a.js","client/graphic.6aed18c9.js","client/client.f82f0465.js"].concat(["service-worker-index.html",".htaccess","background/contact-bg.svg","background/landing-bg.svg","favicon.png","global.css","great-success.png","logo-192.png","logo-512.png","logo-final.png","manifest.json","ogp.png"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1586447753407").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1586447753407"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1586447753407").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const c=await t.match(e.request);if(c)return c;throw n}}))))})}();
