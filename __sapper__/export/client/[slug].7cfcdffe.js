import{S as t,i as s,s as a,a as e,e as n,t as o,L as i,d as r,f as c,c as l,b as u,g as h,h as f,j as m,k as p,m as d,n as v}from"./client.46ea6755.js";function g(t){let s,a,g,j,w,x,y=t[0].title+"",E=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),g=n("h1"),j=o(y),w=e(),x=n("div"),this.h()},l(t){i('[data-svelte="svelte-1uty71u"]',document.head).forEach(r),a=c(t),g=l(t,"H1",{});var s=u(g);j=h(s,y),s.forEach(r),w=c(t),x=l(t,"DIV",{class:!0}),u(x).forEach(r),this.h()},h(){f(x,"class","content svelte-3nu9wu")},m(t,s){m(t,a,s),m(t,g,s),p(g,j),m(t,w,s),m(t,x,s),x.innerHTML=E},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&y!==(y=t[0].title+"")&&d(j,y),1&a&&E!==(E=t[0].html+"")&&(x.innerHTML=E)},i:v,o:v,d(t){t&&r(a),t&&r(g),t&&r(w),t&&r(x)}}}async function j({params:t,query:s}){const a=await this.fetch(`blog/${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function w(t,s,a){let{post:e}=s;return t.$set=(t=>{"post"in t&&a(0,e=t.post)}),[e]}export default class extends t{constructor(t){super(),s(this,t,w,g,a,{post:0})}}export{j as preload};