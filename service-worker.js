!function(){"use strict";const e=["client/client.b4d7be04.js","client/Price.89b5aeee.js","client/Gallery.a0acac8d.js","client/News.7b93c574.js","client/index.740672b7.js","client/copywriting.a8f916f2.js","client/photography.02e91a33.js","client/graphic.a7259874.js","client/client.e978a8c6.js"].concat(["service-worker-index.html",".htaccess","background/contact-bg.svg","background/landing-bg.svg","favicon.png","global.css","great-success.png","logo-192.png","logo-512.png","logo-final.png","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1585839974896").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1585839974896"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const c=new URL(e.request.url);c.protocol.startsWith("http")&&(c.hostname===self.location.hostname&&c.port!==self.location.port||(c.host===self.location.host&&t.has(c.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1585839974896").then(async t=>{try{const c=await fetch(e.request);return t.put(e.request,c.clone()),c}catch(c){const n=await t.match(e.request);if(n)return n;throw c}}))))})}();
