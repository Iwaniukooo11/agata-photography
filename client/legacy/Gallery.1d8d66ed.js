import{_ as n,a as t,b as a,d as s,i as l,s as e,e as o,S as c,f as r,h as i,j as u,l as f,n as h,o as g,H as m,Q as v,u as d,q as _,t as $,k as p,g as w,m as y,p as j,y as b,z as S,A as O,B as M,C as q,D as E,v as H,R as P,T,w as k}from"./client.3d90db85.js";import{s as I,H as G}from"./Price.38f09ff7.js";function L(n){var t;return{c:function(){t=$("Pokaż więcej!")},l:function(n){t=p(n,"Pokaż więcej!")},m:function(n,a){g(n,t,a)},d:function(n){n&&f(t)}}}function A(n){var t;return{c:function(){t=$("Pokaż mniej")},l:function(n){t=p(n,"Pokaż mniej")},m:function(n,a){g(n,t,a)},d:function(n){n&&f(t)}}}function U(n){var t,a;function s(n,t){return n[1]?A:L}var l=s(n),e=l(n);return{c:function(){t=r("button"),e.c(),this.h()},l:function(n){t=i(n,"BUTTON",{class:!0});var a=u(t);e.l(a),a.forEach(f),this.h()},h:function(){h(t,"class","section__show-more-btn")},m:function(s,l){g(s,t,l),e.m(t,null),a=m(t,"click",function(){v(n[1]?n[2]:n[0])&&(n[1]?n[2]:n[0]).apply(this,arguments)})},p:function(a,o){d(o,1)[0];l!==(l=s(n=a))&&(e.d(1),(e=l(n))&&(e.c(),e.m(t,null)))},i:_,o:_,d:function(n){n&&f(t),e.d(),a()}}}function z(n,t,a){var s=t.toggleShowHandler,l=t.showMore;return n.$set=function(n){"toggleShowHandler"in n&&a(0,s=n.toggleShowHandler),"showMore"in n&&a(1,l=n.showMore)},[s,l,function(){return I({element:".section.gallery",onStart:s,duration:300})}]}var B=function(r){function i(n){var c;return t(this,i),c=a(this,s(i).call(this)),l(o(c),n,z,U,e,{toggleShowHandler:0,showMore:1}),c}return n(i,c),i}();function C(n,t,a){var s=n.slice();return s[4]=t[a],s[6]=a,s}function D(n,t,a){var s=n.slice();return s[4]=t[a],s[6]=a,s}function N(n){var t,a,s,l,e;return{c:function(){t=r("li"),a=r("img"),l=w(),this.h()},l:function(n){t=i(n,"LI",{class:!0,"data-src":!0});var s=u(t);a=i(s,"IMG",{src:!0,class:!0,alt:!0}),l=y(s),s.forEach(f),this.h()},h:function(){a.src!==(s=Object.values(n[4])[0])&&h(a,"src",s),h(a,"class","gallery__img svelte-1tmsqu0"),h(a,"alt","TOP 3 zdjęć"),h(t,"class","gallery__list-element onShow i"+n[6]+" svelte-1tmsqu0"),h(t,"data-src",e=Object.values(n[4])[0])},m:function(n,s){g(n,t,s),j(t,a),j(t,l)},p:function(n,l){2&l&&a.src!==(s=Object.values(n[4])[0])&&h(a,"src",s),2&l&&e!==(e=Object.values(n[4])[0])&&h(t,"data-src",e)},d:function(n){n&&f(t)}}}function x(n){var t,a=new B({props:{toggleShowHandler:n[3],showMore:n[2]}});return{c:function(){b(a.$$.fragment)},l:function(n){S(a.$$.fragment,n)},m:function(n,s){O(a,n,s),t=!0},p:function(n,t){var s={};4&t&&(s.showMore=n[2]),a.$set(s)},i:function(n){t||(M(a.$$.fragment,n),t=!0)},o:function(n){q(a.$$.fragment,n),t=!1},d:function(n){E(a,n)}}}function Q(n){var t,a,s,l,e,o;return{c:function(){t=r("li"),a=r("img"),l=w(),this.h()},l:function(n){t=i(n,"LI",{class:!0,"data-src":!0});var s=u(t);a=i(s,"IMG",{src:!0,class:!0,alt:!0}),l=y(s),s.forEach(f),this.h()},h:function(){a.src!==(s=Object.values(n[4])[0])&&h(a,"src",s),h(a,"class","gallery__img svelte-1tmsqu0"),h(a,"alt","Zdjęcia"),h(t,"class",e="gallery__list-element gallery__list-element--main "+(n[2]?"onShow":null)+"\n          i"+n[6]+" svelte-1tmsqu0"),h(t,"data-src",o=Object.values(n[4])[0])},m:function(n,s){g(n,t,s),j(t,a),j(t,l)},p:function(n,l){2&l&&a.src!==(s=Object.values(n[4])[0])&&h(a,"src",s),4&l&&e!==(e="gallery__list-element gallery__list-element--main "+(n[2]?"onShow":null)+"\n          i"+n[6]+" svelte-1tmsqu0")&&h(t,"class",e),2&l&&o!==(o=Object.values(n[4])[0])&&h(t,"data-src",o)},d:function(n){n&&f(t)}}}function R(n){var t,a=new B({props:{toggleShowHandler:n[3],showMore:n[2]}});return{c:function(){b(a.$$.fragment)},l:function(n){S(a.$$.fragment,n)},m:function(n,s){O(a,n,s),t=!0},p:function(n,t){var s={};4&t&&(s.showMore=n[2]),a.$set(s)},i:function(n){t||(M(a.$$.fragment,n),t=!0)},o:function(n){q(a.$$.fragment,n),t=!1},d:function(n){E(a,n)}}}function V(n){for(var t,a,s,l,e,o,c,m,v,_,I,L,A,U=n[1].description+"",z=new G({props:{title:"Galeria",icon:n[0]}}),B=n[1].imagesTop3,V=[],Z=0;Z<B.length;Z+=1)V[Z]=N(D(n,B,Z));for(var F=!n[2]&&x(n),J=n[1].imagesAll,K=[],W=0;W<J.length;W+=1)K[W]=Q(C(n,J,W));var X=n[2]&&R(n);return{c:function(){t=r("section"),a=r("div"),b(z.$$.fragment),s=w(),l=r("p"),e=$(U),o=w(),c=r("ul");for(var n=0;n<V.length;n+=1)V[n].c();m=w(),F&&F.c(),v=w(),_=r("ul");for(var i=0;i<K.length;i+=1)K[i].c();L=w(),X&&X.c(),this.h()},l:function(n){t=i(n,"SECTION",{class:!0,"data-section":!0,"data-aos":!0,"data-aos-once":!0});var r=u(t);a=i(r,"DIV",{class:!0});var h=u(a);S(z.$$.fragment,h),s=y(h),l=i(h,"P",{class:!0});var g=u(l);e=p(g,U),g.forEach(f),o=y(h),c=i(h,"UL",{class:!0,"data-lg":!0,"data-showmore":!0});for(var d=u(c),$=0;$<V.length;$+=1)V[$].l(d);d.forEach(f),m=y(h),F&&F.l(h),v=y(h),_=i(h,"UL",{class:!0,"data-lg":!0});for(var w=u(_),j=0;j<K.length;j+=1)K[j].l(w);w.forEach(f),L=y(h),X&&X.l(h),h.forEach(f),r.forEach(f),this.h()},h:function(){h(l,"class","section__desc"),h(c,"class","gallery__list gallery__list--short svelte-1tmsqu0"),h(c,"data-lg","true"),h(c,"data-showmore","true"),h(_,"class",I="gallery__list gallery__list--main "+(n[2]?"active":null)+" svelte-1tmsqu0"),h(_,"data-lg","true"),h(a,"class","container"),h(t,"class","section gallery"),h(t,"data-section","gallery"),h(t,"data-aos","-"),h(t,"data-aos-once","true")},m:function(n,r){g(n,t,r),j(t,a),O(z,a,null),j(a,s),j(a,l),j(l,e),j(a,o),j(a,c);for(var i=0;i<V.length;i+=1)V[i].m(c,null);j(a,m),F&&F.m(a,null),j(a,v),j(a,_);for(var u=0;u<K.length;u+=1)K[u].m(_,null);j(a,L),X&&X.m(a,null),A=!0},p:function(n,t){var s=d(t,1)[0],l={};if(1&s&&(l.icon=n[0]),z.$set(l),(!A||2&s)&&U!==(U=n[1].description+"")&&H(e,U),2&s){var o;for(B=n[1].imagesTop3,o=0;o<B.length;o+=1){var r=D(n,B,o);V[o]?V[o].p(r,s):(V[o]=N(r),V[o].c(),V[o].m(c,null))}for(;o<V.length;o+=1)V[o].d(1);V.length=B.length}if(n[2]?F&&(P(),q(F,1,1,function(){F=null}),T()):F?(F.p(n,s),M(F,1)):((F=x(n)).c(),M(F,1),F.m(a,v)),6&s){var i;for(J=n[1].imagesAll,i=0;i<J.length;i+=1){var u=C(n,J,i);K[i]?K[i].p(u,s):(K[i]=Q(u),K[i].c(),K[i].m(_,null))}for(;i<K.length;i+=1)K[i].d(1);K.length=J.length}(!A||4&s&&I!==(I="gallery__list gallery__list--main "+(n[2]?"active":null)+" svelte-1tmsqu0"))&&h(_,"class",I),n[2]?X?(X.p(n,s),M(X,1)):((X=R(n)).c(),M(X,1),X.m(a,null)):X&&(P(),q(X,1,1,function(){X=null}),T())},i:function(n){A||(M(z.$$.fragment,n),M(F),M(X),A=!0)},o:function(n){q(z.$$.fragment,n),q(F),q(X),A=!1},d:function(n){n&&f(t),E(z),k(V,n),F&&F.d(),k(K,n),X&&X.d()}}}function Z(n,t,a){var s,l=t.icon,e=t.content;return n.$set=function(n){"icon"in n&&a(0,l=n.icon),"content"in n&&a(1,e=n.content)},a(2,s=!1),[l,e,s,function(){a(2,s=!s)}]}var F=function(r){function i(n){var c;return t(this,i),c=a(this,s(i).call(this)),l(o(c),n,Z,V,e,{icon:0,content:1}),c}return n(i,c),i}();export{F as G};
