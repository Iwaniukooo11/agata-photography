!function(){"use strict";const e=["client/client.47c2be45.js","client/Price.b29d07e3.js","client/Gallery.f2699a2b.js","client/News.d9efd234.js","client/index.770c60ba.js","client/copywriting.7160f11b.js","client/photography.ccfa442d.js","client/graphic.3977a8a8.js","client/client.19b23053.js"].concat(["service-worker-index.html",".htaccess","background/contact-bg.svg","background/landing-bg.svg","favicon.png","global.css","great-success.png","logo-192.png","logo-512.png","logo-final.png","manifest.json","ogp.png"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1588323880724").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1588323880724"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1588323880724").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const c=await t.match(e.request);if(c)return c;throw n}}))))})}();
