!function(){"use strict";const e=["client/client.a34a88e9.js","client/Price.239a7814.js","client/Gallery.5bebf61a.js","client/News.2fc236aa.js","client/index.693b623a.js","client/copywriting.9f630c5d.js","client/photography.6067d08e.js","client/graphic.a7100ce5.js","client/client.a61d31ac.js"].concat(["service-worker-index.html",".htaccess","background/contact-bg.svg","background/landing-bg.svg","favicon.png","global.css","great-success.png","logo-192.png","logo-512.png","logo-final.png","manifest.json","ogp.png"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1586376962338").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1586376962338"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1586376962338").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const c=await t.match(e.request);if(c)return c;throw n}}))))})}();
