import{S as t,i as n,s as e,a,q as r,L as o,d as s,f as c,r as l,j as i,u as p,v as f,w as $,x as m,C as d,l as u,n as g}from"./client.f8ff194f.js";import{L as h,f as w,t as b,A as y,P as k}from"./Price.be45dca9.js";import{G as P}from"./Gallery.47269c42.js";import{N as j}from"./News.d4fbc473.js";function N(t){return{c:g,l:g,m:g,p:g,i:g,o:g,d:g}}function x(t){let n,e,o,d;const u=new P({props:{icon:t[1].gallery,content:t[0].phGallery}}),h=new y({props:{icon:t[1].about,content:t[0].phAbout}}),w=new j({props:{icon:t[1].news,content:{...t[0].news,list:{...t[0].allPhNewsCards}}}}),b=new k({props:{icon:t[1].price,content:t[0].allPhPriceCards}});return{c(){r(u.$$.fragment),n=a(),r(h.$$.fragment),e=a(),r(w.$$.fragment),o=a(),r(b.$$.fragment)},l(t){l(u.$$.fragment,t),n=c(t),l(h.$$.fragment,t),e=c(t),l(w.$$.fragment,t),o=c(t),l(b.$$.fragment,t)},m(t,a){p(u,t,a),i(t,n,a),p(h,t,a),i(t,e,a),p(w,t,a),i(t,o,a),p(b,t,a),d=!0},p:g,i(t){d||(f(u.$$.fragment,t),f(h.$$.fragment,t),f(w.$$.fragment,t),f(b.$$.fragment,t),d=!0)},o(t){$(u.$$.fragment,t),$(h.$$.fragment,t),$(w.$$.fragment,t),$(b.$$.fragment,t),d=!1},d(t){m(u,t),t&&s(n),m(h,t),t&&s(e),m(w,t),t&&s(o),m(b,t)}}}function A(t){return{c:g,l:g,m:g,p:g,i:g,o:g,d:g}}function C(t){let n,e,a,r={ctx:t,current:null,token:null,pending:A,then:x,catch:N,value:0,blocks:[,,,]};return d(e=t[2],r),{c(){n=u(),r.block.c()},l(t){n=u(),r.block.l(t)},m(t,e){i(t,n,e),r.block.m(t,r.anchor=e),r.mount=(()=>n.parentNode),r.anchor=n,a=!0},p(n,e){{const a=(t=n).slice();a[0]=r.resolved,r.block.p(a,e)}},i(t){a||(f(r.block),a=!0)},o(t){for(let t=0;t<3;t+=1){const n=r.blocks[t];$(n)}a=!1},d(t){t&&s(n),r.block.d(t),r.token=null,r=null}}}function v(t){let n,e;const d=new h({props:{current:"photography",$$slots:{default:[C]},$$scope:{ctx:t}}});return{c(){n=a(),r(d.$$.fragment),this.h()},l(t){o('[data-svelte="svelte-1ldbw4a"]',document.head).forEach(s),n=c(t),l(d.$$.fragment,t),this.h()},h(){document.title="Raw - Fotografia"},m(t,a){i(t,n,a),p(d,t,a),e=!0},p(t,[n]){const e={};16&n&&(e.$$scope={dirty:n,ctx:t}),d.$set(e)},i(t){e||(f(d.$$.fragment,t),e=!0)},o(t){$(d.$$.fragment,t),e=!1},d(t){t&&s(n),m(d,t)}}}function G(t,n,e){let a=null;let r=(async()=>{const t=await w("https://graphql.datocms.com/",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${b}`},body:JSON.stringify({query:"\n    \t\t\t{\n          phAbout{\n              descriptionUp\n              descriptionDown\n              profilePhoto{\n              url\n              }\n    \t\t\t\t}\n    \t\t\t\tphNews{\n    \t\t\t\t\tdescription\n    \t\t\t\t}\n    \t\t\t\tallPhNewsCards{\n    \t\t\t\t\theader\n    \t\t\t\t\tdescription\n    \t\t\t\t\ttime\n    \t\t\t\t}\n    \t\t\t\tphGallery{\n    \t\t\t\t\tdescription\n\n    \t\t\t\t\timagesTop3{\n    \t\t\t\t\t\turl\n    \t\t\t\t\t}\n    \t\t\t\t\timagesAll{\n    \t\t\t\t\t\turl\n    \t\t\t\t\t}\n    \t\t\t\t}\n    \t\t\t\tallPhPriceCards{\n    \t\t\t\t\ttitle\n    \t\t\t\t\tprice\n    \t\t\t\t\tdescription\n    \t\t\t\t\timages{\n    \t\t\t\t\turl\n    \t\t\t\t\t}\n    \t\t\t\t}\n\n    \t\t\t}\n    \t\t\t"})}),n=await t.json();return console.log(n,"get!"),e(0,a=n.data),n.data})();return[a,{about:"fas fa-user-circle",gallery:"far fa-images",news:"far fa-newspaper",price:"fas fa-shopping-basket",contact:"fas fa-id-card"},r]}export default class extends t{constructor(t){super(),n(this,t,G,v,e,{})}}
