import{_ as t,a as n,b as s,c as a,i as r,s as o,d as e,S as f,e as c,t as i,h as u,j as l,m as h,n as v,o as p,p as g,q as m,w as d,g as b,V as E,l as j,v as y,D as q,F as x}from"./client.b578b4f2.js";function L(t,n,s){var a=t.slice();return a[1]=n[s],a}function R(t){var n,s,a,r,o=t[1].title+"";return{c:function(){n=c("li"),s=c("a"),a=i(o),this.h()},l:function(t){n=u(t,"LI",{});var r=l(n);s=u(r,"A",{rel:!0,href:!0});var e=l(s);a=h(e,o),e.forEach(v),r.forEach(v),this.h()},h:function(){p(s,"rel","prefetch"),p(s,"href",r="blog/"+t[1].slug)},m:function(t,r){g(t,n,r),m(n,s),m(s,a)},p:function(t,n){1&n&&o!==(o=t[1].title+"")&&d(a,o),1&n&&r!==(r="blog/"+t[1].slug)&&p(s,"href",r)},d:function(t){t&&v(n)}}}function w(t){for(var n,s,a,r,o,e=t[0],f=[],d=0;d<e.length;d+=1)f[d]=R(L(t,e,d));return{c:function(){n=b(),s=c("h1"),a=i("Recent posts"),r=b(),o=c("ul");for(var t=0;t<f.length;t+=1)f[t].c();this.h()},l:function(t){E('[data-svelte="svelte-hfp9t8"]',document.head).forEach(v),n=j(t),s=u(t,"H1",{});var e=l(s);a=h(e,"Recent posts"),e.forEach(v),r=j(t),o=u(t,"UL",{class:!0});for(var c=l(o),i=0;i<f.length;i+=1)f[i].l(c);c.forEach(v),this.h()},h:function(){document.title="Blog",p(o,"class","svelte-4fatyy")},m:function(t,e){g(t,n,e),g(t,s,e),m(s,a),g(t,r,e),g(t,o,e);for(var c=0;c<f.length;c+=1)f[c].m(o,null)},p:function(t,n){var s=y(n,1)[0];if(1&s){var a;for(e=t[0],a=0;a<e.length;a+=1){var r=L(t,e,a);f[a]?f[a].p(r,s):(f[a]=R(r),f[a].c(),f[a].m(o,null))}for(;a<f.length;a+=1)f[a].d(1);f.length=e.length}},i:q,o:q,d:function(t){t&&v(n),t&&v(s),t&&v(r),t&&v(o),x(f,t)}}}function A(t){t.params,t.query;return this.fetch("blog.json").then(function(t){return t.json()}).then(function(t){return{posts:t}})}function B(t,n,s){var a=n.posts;return t.$set=function(t){"posts"in t&&s(0,a=t.posts)},[a]}export default(function(c){function i(t){var f;return n(this,i),f=s(this,a(i).call(this)),r(e(f),t,B,w,o,{posts:0}),f}return t(i,f),i}());export{A as preload};
