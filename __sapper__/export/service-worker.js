!function(){"use strict";const e=["client/client.ea35e086.js","client/Price.37982b77.js","client/Gallery.9115ccc0.js","client/News.e00d3576.js","client/index.8b48ec15.js","client/copywriting.ada6c2b5.js","client/photography.1eb560f3.js","client/graphic.36de986b.js","client/client.c16d5e44.js"].concat(["service-worker-index.html",".htaccess","background/contact-bg.svg","background/landing-bg.svg","favicon.png","global.css","great-success.png","logo-192.png","logo-512.png","logo-final.png","manifest.json","ogp.png"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1586379458712").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1586379458712"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const c=new URL(e.request.url);c.protocol.startsWith("http")&&(c.hostname===self.location.hostname&&c.port!==self.location.port||(c.host===self.location.host&&t.has(c.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1586379458712").then(async t=>{try{const c=await fetch(e.request);return t.put(e.request,c.clone()),c}catch(c){const n=await t.match(e.request);if(n)return n;throw c}}))))})}();
