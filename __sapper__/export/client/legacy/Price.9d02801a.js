import{C as t,_ as n,a,b as c,c as e,i as r,s,d as o,S as i,e as l,g as u,t as f,h,j as v,n as d,l as g,m as p,o as m,p as _,q as b,D as k,E as y,v as w,w as E,F as $,G as I,f as x,k as M,r as O,x as q,y as L,z as N,H as P,I as A,J as S,u as T,A as D,K as j,L as z,M as V,N as C,O as G,P as U,Q as H}from"./client.b578b4f2.js";var R=t(function(t,n){var a=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==a)return a;throw new Error("unable to locate global object")}();t.exports=n=a.fetch,n.default=a.fetch.bind(a),n.Headers=a.Headers,n.Request=a.Request,n.Response=a.Response});R.Headers,R.Request,R.Response;function B(t,n,a){var c=t.slice();return c[3]=n[a],c[5]=a,c}function F(t,n,a){var c=t.slice();return c[6]=n[a],c}function X(t){var n,a,c,e,r,s,o,i=t[6].text+"";return{c:function(){n=l("li"),a=l("a"),c=l("i"),e=u(),r=l("span"),s=f(i),o=u(),this.h()},l:function(t){n=h(t,"LI",{class:!0});var l=v(n);a=h(l,"A",{href:!0,target:!0,class:!0});var u=v(a);c=h(u,"I",{class:!0}),v(c).forEach(d),e=g(u),r=h(u,"SPAN",{class:!0});var f=v(r);s=p(f,i),f.forEach(d),u.forEach(d),o=g(l),l.forEach(d),this.h()},h:function(){m(c,"class",t[6].icon+" social-list__icon svelte-7tcly5"),m(r,"class","social-list__txt"),m(a,"href",t[6].link),m(a,"target","_blank"),m(a,"class","social-list__link svelte-7tcly5"),m(n,"class","social-list__element svelte-7tcly5")},m:function(t,i){_(t,n,i),b(n,a),b(a,c),b(a,e),b(a,r),b(r,s),b(n,o)},p:k,d:function(t){t&&d(n)}}}function Y(t){var n,a=t[5]>1&&function(t){var n,a,c,e;return{c:function(){n=l("li"),a=l("img"),e=u(),this.h()},l:function(t){n=h(t,"LI",{class:!0});var c=v(n);a=h(c,"IMG",{src:!0,alt:!0,class:!0}),e=g(c),c.forEach(d),this.h()},h:function(){a.src!==(c=t[0].images[t[5]].url)&&m(a,"src",c),m(a,"alt",t[5]+1+"-slide"),m(a,"class","image-list__img d-block w-10 svelte-7tcly5"),m(n,"class","image-list__element carousel-item  svelte-7tcly5")},m:function(t,c){_(t,n,c),b(n,a),b(n,e)},p:function(t,n){1&n&&a.src!==(c=t[0].images[t[5]].url)&&m(a,"src",c)},d:function(t){t&&d(n)}}}(t);return{c:function(){a&&a.c(),n=y()},l:function(t){a&&a.l(t),n=y()},m:function(t,c){a&&a.m(t,c),_(t,n,c)},p:function(t,n){t[5]>1&&a.p(t,n)},d:function(t){a&&a.d(t),t&&d(n)}}}function J(t){for(var n,a,c,e,r,s,o,i,y,I,x,M,O,q,L,N,P,A,S,T,D,j,z,V,C,G,U,H,R,J,K,Z,Q,W,tt,nt,at,ct,et,rt,st,ot,it,lt=t[0].header+"",ut=t[0].description+"",ft=t[1],ht=[],vt=0;vt<ft.length;vt+=1)ht[vt]=X(F(t,ft,vt));for(var dt=t[0].images,gt=[],pt=0;pt<dt.length;pt+=1)gt[pt]=Y(B(t,dt,pt));return{c:function(){n=l("div"),a=l("section"),c=l("div"),e=l("h1"),r=f(lt),s=u(),o=l("div"),i=l("i"),y=u(),I=l("h2"),x=f("Fotograf, Grafik, Copywriter"),M=u(),O=l("p"),q=f(ut),L=u(),N=l("div"),P=u(),A=l("ul");for(var t=0;t<ht.length;t+=1)ht[t].c();S=u(),T=l("img"),D=u(),j=l("section"),z=l("ul"),V=l("li"),C=l("img"),U=u(),H=l("li"),R=l("img"),K=u();for(var h=0;h<gt.length;h+=1)gt[h].c();Z=u(),Q=l("a"),W=l("span"),tt=u(),nt=l("span"),at=f("Previous"),ct=u(),et=l("a"),rt=l("span"),st=u(),ot=l("span"),it=f("Next"),this.h()},l:function(t){n=h(t,"DIV",{class:!0,"data-section":!0});var l=v(n);a=h(l,"SECTION",{class:!0});var u=v(a);c=h(u,"DIV",{class:!0});var f=v(c);e=h(f,"H1",{class:!0});var m=v(e);r=p(m,lt),m.forEach(d),s=g(f),o=h(f,"DIV",{class:!0});var _=v(o);i=h(_,"I",{class:!0}),v(i).forEach(d),y=g(_),I=h(_,"H2",{class:!0});var b=v(I);x=p(b,"Fotograf, Grafik, Copywriter"),b.forEach(d),_.forEach(d),f.forEach(d),M=g(u),O=h(u,"P",{class:!0});var k=v(O);q=p(k,ut),k.forEach(d),L=g(u),N=h(u,"DIV",{class:!0}),v(N).forEach(d),P=g(u),A=h(u,"UL",{class:!0});for(var w=v(A),E=0;E<ht.length;E+=1)ht[E].l(w);w.forEach(d),S=g(u),T=h(u,"IMG",{class:!0,alt:!0,src:!0}),u.forEach(d),D=g(l),j=h(l,"SECTION",{class:!0,"data-ride":!0,id:!0});var $=v(j);z=h($,"UL",{class:!0,id:!0});var G=v(z);V=h(G,"LI",{class:!0});var B=v(V);C=h(B,"IMG",{src:!0,alt:!0,class:!0}),B.forEach(d),U=g(G),H=h(G,"LI",{class:!0});var F=v(H);R=h(F,"IMG",{src:!0,alt:!0,class:!0}),F.forEach(d),K=g(G);for(var X=0;X<gt.length;X+=1)gt[X].l(G);G.forEach(d),Z=g($),Q=h($,"A",{class:!0,href:!0,role:!0,"data-slide":!0});var Y=v(Q);W=h(Y,"SPAN",{class:!0,"aria-hidden":!0}),v(W).forEach(d),tt=g(Y),nt=h(Y,"SPAN",{class:!0});var J=v(nt);at=p(J,"Previous"),J.forEach(d),Y.forEach(d),ct=g($),et=h($,"A",{class:!0,href:!0,role:!0,"data-slide":!0});var ft=v(et);rt=h(ft,"SPAN",{class:!0,"aria-hidden":!0}),v(rt).forEach(d),st=g(ft),ot=h(ft,"SPAN",{class:!0});var vt=v(ot);it=p(vt,"Next"),vt.forEach(d),ft.forEach(d),$.forEach(d),l.forEach(d),this.h()},h:function(){m(e,"class","lnd-page__head svelte-7tcly5"),m(i,"class","fas fa-camera-retro job-wrap__icon svelte-7tcly5"),m(I,"class","job-wrap__desc svelte-7tcly5"),m(o,"class","lnd-page__job-wrap job-wrap svelte-7tcly5"),m(c,"class","lnd-page__txt-content svelte-7tcly5"),m(O,"class","lnd-page__desc section__desc section__desc--white"),m(N,"class","lnd-page__line svelte-7tcly5"),m(A,"class","lnd-page__social-list social-list svelte-7tcly5"),m(T,"class","lnd-page__white-shape svelte-7tcly5"),m(T,"alt","background image"),T.src!=="background/landing-bg.svg"&&m(T,"src","background/landing-bg.svg"),m(a,"class","lnd-page svelte-7tcly5"),C.src!==(G=t[0].images[0].url)&&m(C,"src",G),m(C,"alt","1-slide"),m(C,"class","image-list__img d-block w-10 svelte-7tcly5"),m(V,"class","image-list__element carousel-item active svelte-7tcly5"),R.src!==(J=t[0].images[1].url)&&m(R,"src",J),m(R,"alt","2-slide"),m(R,"class","image-list__img d-block w-10 svelte-7tcly5"),m(H,"class","image-list__element carousel-item  svelte-7tcly5"),m(z,"class","gallery-slider__image-list image-list carousel-inner svelte-7tcly5"),m(z,"id","lnd-page-gallery"),m(W,"class","carousel-control-prev-icon"),m(W,"aria-hidden","true"),m(nt,"class","sr-only"),m(Q,"class","carousel-control-prev"),m(Q,"href","#gallery-carousel"),m(Q,"role","button"),m(Q,"data-slide","prev"),m(rt,"class","carousel-control-next-icon"),m(rt,"aria-hidden","true"),m(ot,"class","sr-only"),m(et,"class","carousel-control-next"),m(et,"href","#gallery-carousel"),m(et,"role","button"),m(et,"data-slide","next"),m(j,"class","carousel slide gallery-slider svelte-7tcly5"),m(j,"data-ride","carousel"),m(j,"id","gallery-carousel"),m(n,"class","landing-wrap svelte-7tcly5"),m(n,"data-section","home")},m:function(t,l){_(t,n,l),b(n,a),b(a,c),b(c,e),b(e,r),b(c,s),b(c,o),b(o,i),b(o,y),b(o,I),b(I,x),b(a,M),b(a,O),b(O,q),b(a,L),b(a,N),b(a,P),b(a,A);for(var u=0;u<ht.length;u+=1)ht[u].m(A,null);b(a,S),b(a,T),b(n,D),b(n,j),b(j,z),b(z,V),b(V,C),b(z,U),b(z,H),b(H,R),b(z,K);for(var f=0;f<gt.length;f+=1)gt[f].m(z,null);b(j,Z),b(j,Q),b(Q,W),b(Q,tt),b(Q,nt),b(nt,at),b(j,ct),b(j,et),b(et,rt),b(et,st),b(et,ot),b(ot,it)},p:function(t,n){var a=w(n,1)[0];if(1&a&&lt!==(lt=t[0].header+"")&&E(r,lt),1&a&&ut!==(ut=t[0].description+"")&&E(q,ut),2&a){var c;for(ft=t[1],c=0;c<ft.length;c+=1){var e=F(t,ft,c);ht[c]?ht[c].p(e,a):(ht[c]=X(e),ht[c].c(),ht[c].m(A,null))}for(;c<ht.length;c+=1)ht[c].d(1);ht.length=ft.length}if(1&a&&C.src!==(G=t[0].images[0].url)&&m(C,"src",G),1&a&&R.src!==(J=t[0].images[1].url)&&m(R,"src",J),1&a){var s;for(dt=t[0].images,s=0;s<dt.length;s+=1){var o=B(t,dt,s);gt[s]?gt[s].p(o,a):(gt[s]=Y(o),gt[s].c(),gt[s].m(z,null))}for(;s<gt.length;s+=1)gt[s].d(1);gt.length=dt.length}},i:k,o:k,d:function(t){t&&d(n),$(ht,t),$(gt,t)}}}function K(t,n,a){var c=n.content,e=n.contact,r=[{icon:"fab fa-facebook",text:e.facebookNick,link:e.facebookLink},{icon:"fab fa-instagram",text:e.instagramNick,link:e.instagramLink}];return t.$set=function(t){"content"in t&&a(0,c=t.content),"contact"in t&&a(2,e=t.contact)},[c,r,e]}var Z=function(t){function l(t){var n;return a(this,l),n=c(this,e(l).call(this)),r(o(n),t,K,J,s,{content:0,contact:2}),n}return n(l,i),l}();function Q(t){var n,a,c,e,r,s,o;return{c:function(){n=l("span"),a=l("i"),e=u(),r=l("h2"),s=f(t[0]),this.h()},l:function(c){n=h(c,"SPAN",{class:!0});var o=v(n);a=h(o,"I",{class:!0}),v(a).forEach(d),e=g(o),r=h(o,"H2",{class:!0});var i=v(r);s=p(i,t[0]),i.forEach(d),o.forEach(d),this.h()},h:function(){m(a,"class",c="icon "+t[1]+" svelte-1kldyar"),m(r,"class",o=I(t[2])+" svelte-1kldyar"),m(n,"class","header svelte-1kldyar")},m:function(t,c){_(t,n,c),b(n,a),b(n,e),b(n,r),b(r,s)},p:function(t,n){var e=w(n,1)[0];2&e&&c!==(c="icon "+t[1]+" svelte-1kldyar")&&m(a,"class",c),1&e&&E(s,t[0]),4&e&&o!==(o=I(t[2])+" svelte-1kldyar")&&m(r,"class",o)},i:k,o:k,d:function(t){t&&d(n)}}}function W(t,n,a){var c=n.title,e=n.icon,r=n.className;return t.$set=function(t){"title"in t&&a(0,c=t.title),"icon"in t&&a(1,e=t.icon),"className"in t&&a(2,r=t.className)},[c,e,r]}var tt=function(t){function l(t){var n;return a(this,l),n=c(this,e(l).call(this)),r(o(n),t,W,Q,s,{title:0,icon:1,className:2}),n}return n(l,i),l}();function nt(t){var n,a,c,e,r,s,o,i,k,y,$,I,P,A,S,T,D,j=t[1].descriptionUp+"",z=t[1].descriptionDown+"",V=new tt({props:{title:"o mnie",icon:t[0]}});return{c:function(){n=l("section"),a=l("div"),x(V.$$.fragment),c=u(),e=l("p"),r=f(j),s=u(),o=l("div"),i=l("img"),y=u(),$=l("div"),I=u(),P=l("div"),A=u(),S=l("p"),T=f(z),this.h()},l:function(t){n=h(t,"SECTION",{class:!0,"data-section":!0,"data-aos":!0,"data-aos-once":!0});var l=v(n);a=h(l,"DIV",{class:!0});var u=v(a);M(V.$$.fragment,u),c=g(u),e=h(u,"P",{class:!0});var f=v(e);r=p(f,j),f.forEach(d),s=g(u),o=h(u,"DIV",{class:!0});var m=v(o);i=h(m,"IMG",{src:!0,class:!0,alt:!0}),y=g(m),$=h(m,"DIV",{class:!0}),v($).forEach(d),m.forEach(d),I=g(u),P=h(u,"DIV",{class:!0}),v(P).forEach(d),A=g(u),S=h(u,"P",{class:!0});var _=v(S);T=p(_,z),_.forEach(d),u.forEach(d),l.forEach(d),this.h()},h:function(){m(e,"class","section__desc section__desc about__desc--top svelte-gdumvq"),i.src!==(k=t[1].profilePhoto.url)&&m(i,"src",k),m(i,"class","about__photo svelte-gdumvq"),m(i,"alt","Moje zdjęcie"),m($,"class","about__photo-after svelte-gdumvq"),m(o,"class","about__photos-wrap svelte-gdumvq"),m(P,"class","about__line svelte-gdumvq"),m(S,"class","section__desc about__desc--bottom svelte-gdumvq"),m(a,"class","container svelte-gdumvq"),m(n,"class","section about svelte-gdumvq"),m(n,"data-section","about"),m(n,"data-aos","-"),m(n,"data-aos-once","true")},m:function(t,l){_(t,n,l),b(n,a),O(V,a,null),b(a,c),b(a,e),b(e,r),b(a,s),b(a,o),b(o,i),b(o,y),b(o,$),b(a,I),b(a,P),b(a,A),b(a,S),b(S,T),D=!0},p:function(t,n){var a=w(n,1)[0],c={};1&a&&(c.icon=t[0]),V.$set(c),(!D||2&a)&&j!==(j=t[1].descriptionUp+"")&&E(r,j),(!D||2&a&&i.src!==(k=t[1].profilePhoto.url))&&m(i,"src",k),(!D||2&a)&&z!==(z=t[1].descriptionDown+"")&&E(T,z)},i:function(t){D||(q(V.$$.fragment,t),D=!0)},o:function(t){L(V.$$.fragment,t),D=!1},d:function(t){t&&d(n),N(V)}}}function at(t,n,a){var c=n.icon,e=n.content;return t.$set=function(t){"icon"in t&&a(0,c=t.icon),"content"in t&&a(1,e=t.content)},[c,e]}var ct=function(t){function l(t){var n;return a(this,l),n=c(this,e(l).call(this)),r(o(n),t,at,nt,s,{icon:0,content:1}),n}return n(l,i),l}();function et(t,n,a){var c=t.slice();return c[5]=n[a],c}function rt(t,n,a){var c=t.slice();return c[5]=n[a],c}function st(t){var n,a,c=t[5].text+"";return{c:function(){n=l("span"),a=f(c),this.h()},l:function(t){n=h(t,"SPAN",{class:!0});var e=v(n);a=p(e,c),e.forEach(d),this.h()},h:function(){m(n,"class","list__content")},m:function(t,c){_(t,n,c),b(n,a)},p:k,d:function(t){t&&d(n)}}}function ot(t){var n,a,c,e=t[5].text+"";return{c:function(){n=l("a"),a=l("span"),c=f(e),this.h()},l:function(t){n=h(t,"A",{href:!0,target:!0});var r=v(n);a=h(r,"SPAN",{class:!0});var s=v(a);c=p(s,e),s.forEach(d),r.forEach(d),this.h()},h:function(){m(a,"class","list__content"),m(n,"href",t[5].link),m(n,"target","_blank")},m:function(t,e){_(t,n,e),b(n,a),b(a,c)},p:k,d:function(t){t&&d(n)}}}function it(t){var n,a,c,e;var r=function(t,n){return t[5].link?ot:st}(t)(t);return{c:function(){n=l("li"),a=l("i"),c=u(),r.c(),e=u(),this.h()},l:function(t){n=h(t,"LI",{class:!0});var s=v(n);a=h(s,"I",{class:!0}),v(a).forEach(d),c=g(s),r.l(s),e=g(s),s.forEach(d),this.h()},h:function(){m(a,"class","list__icon "+t[5].class+" svelte-b8pbep"),m(n,"class","list__element svelte-b8pbep")},m:function(t,s){_(t,n,s),b(n,a),b(n,c),r.m(n,null),b(n,e)},p:function(t,n){r.p(t,n)},d:function(t){t&&d(n),r.d()}}}function lt(t){var n,a,c,e,r=t[5].text+"";return{c:function(){n=l("li"),a=l("a"),c=f(r),e=u(),this.h()},l:function(t){n=h(t,"LI",{class:!0});var s=v(n);a=h(s,"A",{class:!0,rel:!0,href:!0});var o=v(a);c=p(o,r),o.forEach(d),e=g(s),s.forEach(d),this.h()},h:function(){m(a,"class","contact__link-profession"),m(a,"rel","prefetch"),m(a,"href","/"+t[5].link),m(n,"class","contact__link-element list__element svelte-b8pbep")},m:function(t,r){_(t,n,r),b(n,a),b(a,c),b(n,e)},p:k,d:function(t){t&&d(n)}}}function ut(t){for(var n,a,c,e,r,s,o,i,k,y,I,P,A,S,T,D=t[1].description+"",j=new tt({props:{title:"Kontakt",className:"white",icon:t[0]}}),z=t[2],V=[],C=0;C<z.length;C+=1)V[C]=it(rt(t,z,C));for(var G=t[3],U=[],H=0;H<G.length;H+=1)U[H]=lt(et(t,G,H));return{c:function(){n=l("section"),a=l("div"),x(j.$$.fragment),c=u(),e=l("p"),r=f(D),s=u(),o=l("ul");for(var t=0;t<V.length;t+=1)V[t].c();i=u(),k=l("p"),y=f("Zapraszam do zapoznania się z moimi innymi profesjami:"),I=u(),P=l("ul");for(var h=0;h<U.length;h+=1)U[h].c();A=u(),S=l("img"),this.h()},l:function(t){n=h(t,"SECTION",{class:!0,"data-section":!0});var l=v(n);a=h(l,"DIV",{class:!0});var u=v(a);M(j.$$.fragment,u),c=g(u),e=h(u,"P",{class:!0});var f=v(e);r=p(f,D),f.forEach(d),s=g(u),o=h(u,"UL",{class:!0});for(var m=v(o),_=0;_<V.length;_+=1)V[_].l(m);m.forEach(d),i=g(u),k=h(u,"P",{class:!0});var b=v(k);y=p(b,"Zapraszam do zapoznania się z moimi innymi profesjami:"),b.forEach(d),I=g(u),P=h(u,"UL",{class:!0});for(var w=v(P),E=0;E<U.length;E+=1)U[E].l(w);w.forEach(d),u.forEach(d),A=g(l),S=h(l,"IMG",{class:!0,src:!0,alt:!0}),l.forEach(d),this.h()},h:function(){m(e,"class","section__desc contact__desc section__desc--white svelte-b8pbep"),m(o,"class","contact__list list svelte-b8pbep"),m(k,"class","section__desc contact__desc section__desc--white\n      contact__desc--proffesions svelte-b8pbep"),m(P,"class","contact__link-list svelte-b8pbep"),m(a,"class","container svelte-b8pbep"),m(S,"class","contact__svg svelte-b8pbep"),S.src!=="background/contact-bg.svg"&&m(S,"src","background/contact-bg.svg"),m(S,"alt","bacgkround image"),m(n,"class","section contact svelte-b8pbep"),m(n,"data-section","contact")},m:function(t,l){_(t,n,l),b(n,a),O(j,a,null),b(a,c),b(a,e),b(e,r),b(a,s),b(a,o);for(var u=0;u<V.length;u+=1)V[u].m(o,null);b(a,i),b(a,k),b(k,y),b(a,I),b(a,P);for(var f=0;f<U.length;f+=1)U[f].m(P,null);b(n,A),b(n,S),T=!0},p:function(t,n){var a=w(n,1)[0],c={};if(1&a&&(c.icon=t[0]),j.$set(c),(!T||2&a)&&D!==(D=t[1].description+"")&&E(r,D),4&a){var e;for(z=t[2],e=0;e<z.length;e+=1){var s=rt(t,z,e);V[e]?V[e].p(s,a):(V[e]=it(s),V[e].c(),V[e].m(o,null))}for(;e<V.length;e+=1)V[e].d(1);V.length=z.length}if(8&a){var i;for(G=t[3],i=0;i<G.length;i+=1){var l=et(t,G,i);U[i]?U[i].p(l,a):(U[i]=lt(l),U[i].c(),U[i].m(P,null))}for(;i<U.length;i+=1)U[i].d(1);U.length=G.length}},i:function(t){T||(q(j.$$.fragment,t),T=!0)},o:function(t){L(j.$$.fragment,t),T=!1},d:function(t){t&&d(n),N(j),$(V,t),$(U,t)}}}function ft(t,n,a){var c=n.icon,e=n.contact,r=n.content,s=[{class:"fab fa-facebook",text:e.facebookNick,link:e.facebookLink},{class:"fab fa-instagram",text:e.instagramNick,link:e.instagramLink},{class:"fas fa-envelope-open",text:e.mail,link:null},{class:"fas fa-map-marker-alt",text:e.localization,link:null}];return t.$set=function(t){"icon"in t&&a(0,c=t.icon),"contact"in t&&a(4,e=t.contact),"content"in t&&a(1,r=t.content)},[c,r,s,[{text:"Fotografia",link:"photography"},{text:"Grafika",link:"graphic"},{text:"Copywriting",link:"copywriting"}],e]}var ht=function(t){function l(t){var n;return a(this,l),n=c(this,e(l).call(this)),r(o(n),t,ft,ut,s,{icon:0,contact:4,content:1}),n}return n(l,i),l}();function vt(t){var n=t*t;return t<4/11?7.5625*n:t<8/11?9.075*n-9.9*t+3.4:t<.9?4356/361*n-35442/1805*t+16061/1805:10.8*t*t-20.52*t+10.72}var dt={$:function(t){return"string"==typeof t?document.querySelector(t):t},extend:function(){return Object.assign.apply(Object,arguments)},cumulativeOffset:function(t){var n=0,a=0;do{n+=t.offsetTop||0,a+=t.offsetLeft||0,t=t.offsetParent}while(t);return{top:n,left:a}},directScroll:function(t){return t&&t!==document&&t!==document.body},scrollTop:function(t,n){var a=void 0!==n;return this.directScroll(t)?a?t.scrollTop=n:t.scrollTop:a?document.documentElement.scrollTop=document.body.scrollTop=n:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},scrollLeft:function(t,n){var a=void 0!==n;return this.directScroll(t)?a?t.scrollLeft=n:t.scrollLeft:a?document.documentElement.scrollLeft=document.body.scrollLeft=n:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0}},gt=A(Object.freeze({__proto__:null,backIn:function(t){var n=1.70158;return t*t*((n+1)*t-n)},backInOut:function(t){var n=2.5949095;return(t*=2)<1?t*t*((n+1)*t-n)*.5:.5*((t-=2)*t*((n+1)*t+n)+2)},backOut:function(t){var n=1.70158;return--t*t*((n+1)*t+n)+1},bounceIn:function(t){return 1-vt(1-t)},bounceInOut:function(t){return t<.5?.5*(1-vt(1-2*t)):.5*vt(2*t-1)+.5},bounceOut:vt,circIn:function(t){return 1-Math.sqrt(1-t*t)},circInOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},circOut:function(t){return Math.sqrt(1- --t*t)},cubicIn:function(t){return t*t*t},cubicInOut:function(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1},cubicOut:function(t){var n=t-1;return n*n*n+1},elasticIn:function(t){return Math.sin(13*t*Math.PI/2)*Math.pow(2,10*(t-1))},elasticInOut:function(t){return t<.5?.5*Math.sin(13*Math.PI/2*2*t)*Math.pow(2,10*(2*t-1)):.5*Math.sin(-13*Math.PI/2*(2*t-1+1))*Math.pow(2,-10*(2*t-1))+1},elasticOut:function(t){return Math.sin(-13*(t+1)*Math.PI/2)*Math.pow(2,-10*t)+1},expoIn:function(t){return 0===t?t:Math.pow(2,10*(t-1))},expoInOut:function(t){return 0===t||1===t?t:t<.5?.5*Math.pow(2,20*t-10):-.5*Math.pow(2,10-20*t)+1},expoOut:function(t){return 1===t?t:1-Math.pow(2,-10*t)},quadIn:function(t){return t*t},quadInOut:function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)},quadOut:function(t){return-t*(t-2)},quartIn:function(t){return Math.pow(t,4)},quartInOut:function(t){return t<.5?8*Math.pow(t,4):-8*Math.pow(t-1,4)+1},quartOut:function(t){return Math.pow(t-1,3)*(1-t)+1},quintIn:function(t){return t*t*t*t*t},quintInOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},quintOut:function(t){return--t*t*t*t*t+1},sineIn:function(t){var n=Math.cos(t*Math.PI*.5);return Math.abs(n)<1e-14?1:1-n},sineInOut:function(t){return-.5*(Math.cos(Math.PI*t)-1)},sineOut:function(t){return Math.sin(t*Math.PI/2)},linear:P})),pt=A(S),mt=pt.noop,_t=pt.loop,bt=pt.now,kt={container:"body",duration:500,delay:0,offset:0,easing:"cubicInOut",onStart:mt,onDone:mt,onAborting:mt,scrollX:!1,scrollY:!0},yt=function(t){var n=t.offset,a=t.duration,c=t.delay,e=t.easing,r=t.x,s=void 0===r?0:r,o=t.y,i=void 0===o?0:o,l=t.scrollX,u=t.scrollY,f=t.onStart,h=t.onDone,v=t.container,d=t.onAborting,g=t.element;"string"==typeof e&&(e=gt[e]),"function"==typeof n&&(n=n());var p=dt.cumulativeOffset(v),m=g?dt.cumulativeOffset(g):{top:i,left:s},_=dt.scrollLeft(v),b=dt.scrollTop(v),k=m.left-p.left+n,y=m.top-p.top+n,w=k-_,E=y-b,$=!0,I=!1,x=bt()+c,M=x+a;function O(t){t||(I=!0,f(g,{x:s,y:i}))}function q(t){var n,a,c;n=v,a=b+E*t,c=_+w*t,l&&dt.scrollLeft(n,c),u&&dt.scrollTop(n,a)}function L(){$=!1}return _t(function(t){if(!I&&t>=x&&O(!1),I&&t>=M&&(q(1),L(),h(g,{x:s,y:i})),!$)return d(g,{x:s,y:i}),!1;I&&q(0+1*e((t-x)/a));return!0}),O(c),q(0),L},wt=function(t){return yt(function(t){var n=dt.extend({},kt,t);return n.container=dt.$(n.container),n.element=dt.$(n.element),n}(t))};function Et(t,n,a){var c=t.slice();return c[7]=n[a],c[9]=a,c}function $t(t){var n,a,c,e,r,s=t[7]+"";function o(){for(var n,a=arguments.length,c=new Array(a),e=0;e<a;e++)c[e]=arguments[e];return(n=t)[6].apply(n,[t[9]].concat(c))}return{c:function(){n=l("li"),a=l("button"),c=f(s),e=u(),this.h()},l:function(t){n=h(t,"LI",{class:!0});var r=v(n);a=h(r,"BUTTON",{class:!0});var o=v(a);c=p(o,s),o.forEach(d),e=g(r),r.forEach(d),this.h()},h:function(){m(a,"class","nav__link svelte-udqwir"),m(n,"class","nav__list-element svelte-udqwir")},m:function(t,s){_(t,n,s),b(n,a),b(a,c),b(n,e),r=T(a,"click",o)},p:function(n,a){t=n},d:function(t){t&&d(n),r()}}}function It(t){for(var n,a,c,e,r,s,o,i,f,p,y,E=t[1],I=[],x=0;x<E.length;x+=1)I[x]=$t(Et(t,E,x));return{c:function(){n=l("button"),a=l("span"),c=l("span"),r=u(),s=l("nav"),o=l("img"),i=u(),f=l("ul");for(var t=0;t<I.length;t+=1)I[t].c();this.h()},l:function(t){n=h(t,"BUTTON",{class:!0,type:!0});var e=v(n);a=h(e,"SPAN",{class:!0});var l=v(a);c=h(l,"SPAN",{class:!0}),v(c).forEach(d),l.forEach(d),e.forEach(d),r=g(t),s=h(t,"NAV",{class:!0});var u=v(s);o=h(u,"IMG",{class:!0,src:!0,alt:!0}),i=g(u),f=h(u,"UL",{class:!0});for(var p=v(f),m=0;m<I.length;m+=1)I[m].l(p);p.forEach(d),u.forEach(d),this.h()},h:function(){m(c,"class","hamburger-inner svelte-udqwir"),m(a,"class","hamburger-box"),m(n,"class",e=" hamburger hamburger--collapse "+(t[0]?"is-active":null)+" svelte-udqwir"),m(n,"type","button"),m(o,"class","nav__logo svelte-udqwir"),o.src!=="logo-final.png"&&m(o,"src","logo-final.png"),m(o,"alt","logo-image"),m(f,"class","nav__list svelte-udqwir"),m(s,"class",p="nav "+(t[0]?"active":null)+" svelte-udqwir")},m:function(e,l){_(e,n,l),b(n,a),b(a,c),_(e,r,l),_(e,s,l),b(s,o),b(s,i),b(s,f);for(var u=0;u<I.length;u+=1)I[u].m(f,null);y=[T(n,"click",t[3]),T(s,"click",t[3])]},p:function(t,a){var c=w(a,1)[0];if(1&c&&e!==(e=" hamburger hamburger--collapse "+(t[0]?"is-active":null)+" svelte-udqwir")&&m(n,"class",e),6&c){var r;for(E=t[1],r=0;r<E.length;r+=1){var o=Et(t,E,r);I[r]?I[r].p(o,c):(I[r]=$t(o),I[r].c(),I[r].m(f,null))}for(;r<I.length;r+=1)I[r].d(1);I.length=E.length}1&c&&p!==(p="nav "+(t[0]?"active":null)+" svelte-udqwir")&&m(s,"class",p)},i:k,o:k,d:function(t){t&&d(n),t&&d(r),t&&d(s),$(I,t),D(y)}}}function xt(t,n,a){var c=[{id:"photography",list:["home","o mnie","galeria","aktualności","cennik","kontakt"],listEng:["home","about","gallery","news","price","contact"]},{id:"copywriting",list:["home","o mnie","artykuły","cennik","kontakt"],listEng:["home","about","news","price","contact"]},{id:"graphic",list:["home","o mnie","galeria","cennik","kontakt"],listEng:["home","about","gallery","price","contact"]}],e=n.current,r=c.filter(function(t){return t.id==e})[0].list,s=c.filter(function(t){return t.id==e})[0].listEng,o=!1;return t.$set=function(t){"current"in t&&a(4,e=t.current)},[o,r,s,function(){return a(0,o=!o)},e,c,function(t,n){return wt({element:"[data-section='".concat(s[t],"']")})}]}var Mt=function(t){function l(t){var n;return a(this,l),n=c(this,e(l).call(this)),r(o(n),t,xt,It,s,{current:4}),n}return n(l,i),l}(),Ot="d520e435b184bf5fb60c1291275c62";function qt(t){var n;return{c:function(){n=f("uga dupa")},l:function(t){n=p(t,"uga dupa")},m:function(t,a){_(t,n,a)},p:k,i:k,o:k,d:function(t){t&&d(n)}}}function Lt(t){var n,a,c,e,r=new Mt({props:{current:t[0]}}),s=new Z({props:{content:t[1].landingPage,contact:t[1].contactAsset}}),o=t[6].default,i=C(o,t,t[5],null),l=new ht({props:{icon:t[2].contact,content:t[1].contact,contact:t[1].contactAsset}});return{c:function(){x(r.$$.fragment),n=u(),x(s.$$.fragment),a=u(),i&&i.c(),c=u(),x(l.$$.fragment)},l:function(t){M(r.$$.fragment,t),n=g(t),M(s.$$.fragment,t),a=g(t),i&&i.l(t),c=g(t),M(l.$$.fragment,t)},m:function(t,o){O(r,t,o),_(t,n,o),O(s,t,o),_(t,a,o),i&&i.m(t,o),_(t,c,o),O(l,t,o),e=!0},p:function(t,n){var a={};1&n&&(a.current=t[0]),r.$set(a);var c={};2&n&&(c.content=t[1].landingPage),2&n&&(c.contact=t[1].contactAsset),s.$set(c),i&&i.p&&32&n&&i.p(G(o,t,t[5],null),U(o,t[5],n,null));var e={};2&n&&(e.content=t[1].contact),2&n&&(e.contact=t[1].contactAsset),l.$set(e)},i:function(t){e||(q(r.$$.fragment,t),q(s.$$.fragment,t),q(i,t),q(l.$$.fragment,t),e=!0)},o:function(t){L(r.$$.fragment,t),L(s.$$.fragment,t),L(i,t),L(l.$$.fragment,t),e=!1},d:function(t){N(r,t),t&&d(n),N(s,t),t&&d(a),i&&i.d(t),t&&d(c),N(l,t)}}}function Nt(t){var n;return{c:function(){n=f("loading-layout")},l:function(t){n=p(t,"loading-layout")},m:function(t,a){_(t,n,a)},p:k,i:k,o:k,d:function(t){t&&d(n)}}}function Pt(t){var n,a,c,e={ctx:t,current:null,token:null,pending:Nt,then:Lt,catch:qt,value:7,blocks:[,,,]};return j(t[3],e),{c:function(){n=l("div"),e.block.c(),this.h()},l:function(t){n=h(t,"DIV",{id:!0,class:!0});var a=v(n);e.block.l(a),a.forEach(d),this.h()},h:function(){m(n,"id","app"),m(n,"class",a=I(t[0])+" svelte-1r5kyww")},m:function(t,a){_(t,n,a),e.block.m(n,e.anchor=null),e.mount=function(){return n},e.anchor=null,c=!0},p:function(r,s){var o=w(s,1)[0],i=(t=r).slice();i[7]=e.resolved,e.block.p(i,o),(!c||1&o&&a!==(a=I(t[0])+" svelte-1r5kyww"))&&m(n,"class",a)},i:function(t){c||(q(e.block),c=!0)},o:function(t){for(var n=0;n<3;n+=1){var a=e.blocks[n];L(a)}c=!1},d:function(t){t&&d(n),e.block.d(),e.token=null,e=null}}}function At(t,n,a){var c=null,e=function(){var t=z(V.mark(function t(){var n,e;return V.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R("https://graphql.datocms.com/",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(Ot)},body:JSON.stringify({query:"\n  \t\t\t{\n  \t\t\t\tlandingPage {\n  \t\t\t\t\theader\n  \t\t\t\t\tdescription\n  \t\t\t\t\timages {\n  \t\t\t\t\turl\n  \t\t\t\t\t}\n  \t\t\t\t}\n\n  \t\t\t\t contactAsset{\n  \t\t\t\t\tfacebookLink\n  \t\t\t\t\tfacebookNick\n  \t\t\t\t\tinstagramLink\n  \t\t\t\t\tinstagramNick\n  \t\t\t\t\tmail\n  \t\t\t\t\tlocalization\n  \t\t\t\t}\n  \t\t\t\tcontact{\n  \t\t\t\t\t  \tdescription\n  \t\t\t\t\t}\n  \t\t\t}\n  \t\t\t"})});case 2:return n=t.sent,t.next=5,n.json();case 5:if(e=t.sent,a(1,c=e.data),!e){t.next=9;break}return t.abrupt("return",e.data);case 9:throw new Error("fuckkkkkk");case 10:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),r=e(),s=n.current,o=n.$$slots,i=void 0===o?{}:o,l=n.$$scope;return t.$set=function(t){"current"in t&&a(0,s=t.current),"$$scope"in t&&a(5,l=t.$$scope)},[s,c,{about:"fas fa-user-circle",gallery:"far fa-images",news:"far fa-newspaper",price:"fas fa-shopping-basket",contact:"fas fa-id-card"},r,e,l,i]}var St=function(t){function l(t){var n;return a(this,l),n=c(this,e(l).call(this)),r(o(n),t,At,Pt,s,{current:0}),n}return n(l,i),l}();function Tt(t,n,a){var c=t.slice();return c[6]=n[a],c}function Dt(t,n,a){var c=t.slice();return c[3]=n[a],c}function jt(t){var n,a,c,e,r,s,o;return{c:function(){n=l("li"),a=l("img"),e=u(),r=l("div"),s=u(),this.h()},l:function(t){n=h(t,"LI",{class:!0,"data-src":!0});var c=v(n);a=h(c,"IMG",{class:!0,src:!0,alt:!0}),e=g(c),r=h(c,"DIV",{class:!0}),v(r).forEach(d),s=g(c),c.forEach(d),this.h()},h:function(){m(a,"class","image-list__img svelte-y9rwxi"),a.src!==(c=t[6].url)&&m(a,"src",c),m(a,"alt","zdjęcie usługi"),m(r,"class","image-list__img-after svelte-y9rwxi"),m(n,"class","image-list__element svelte-y9rwxi"),m(n,"data-src",o=t[6].url)},m:function(t,c){_(t,n,c),b(n,a),b(n,e),b(n,r),b(n,s)},p:function(t,e){1&e&&a.src!==(c=t[6].url)&&m(a,"src",c),1&e&&o!==(o=t[6].url)&&m(n,"data-src",o)},d:function(t){t&&d(n)}}}function zt(t){var n,a,c,e,r,s,o,i,k,y,w,I,x,M,O,q,L,N,P,A,S,D=t[3].title+"",j=t[3].price+"",z=t[3].description+"";function V(){for(var n,a=arguments.length,c=new Array(a),e=0;e<a;e++)c[e]=arguments[e];return(n=t)[2].apply(n,[t[3]].concat(c))}for(var C=t[3].images,G=[],U=0;U<C.length;U+=1)G[U]=jt(Tt(t,C,U));return{c:function(){n=l("li"),a=l("div"),c=l("div"),e=l("h3"),r=f(D),s=u(),o=l("span"),i=f(j),k=u(),y=l("button"),w=l("i"),x=u(),M=l("article"),O=l("p"),q=f(z),L=u(),N=l("ul");for(var t=0;t<G.length;t+=1)G[t].c();A=u(),this.h()},l:function(t){n=h(t,"LI",{class:!0});var l=v(n);a=h(l,"DIV",{class:!0});var u=v(a);c=h(u,"DIV",{class:!0});var f=v(c);e=h(f,"H3",{class:!0});var m=v(e);r=p(m,D),m.forEach(d),s=g(f),o=h(f,"SPAN",{class:!0});var _=v(o);i=p(_,j),_.forEach(d),f.forEach(d),k=g(u),y=h(u,"BUTTON",{"data-toggle":!0,"data-target":!0,"aria-expanded":!0,class:!0});var b=v(y);w=h(b,"I",{class:!0}),v(w).forEach(d),b.forEach(d),u.forEach(d),x=g(l),M=h(l,"ARTICLE",{class:!0,"data-target":!0});var E=v(M);O=h(E,"P",{class:!0});var $=v(O);q=p($,z),$.forEach(d),L=g(E),N=h(E,"UL",{class:!0,"data-lg":!0});for(var I=v(N),P=0;P<G.length;P+=1)G[P].l(I);I.forEach(d),E.forEach(d),A=g(l),l.forEach(d),this.h()},h:function(){m(e,"class","list__head svelte-y9rwxi"),m(o,"class","list__price svelte-y9rwxi"),m(c,"class",""),m(w,"class","fas fa-caret-right svelte-y9rwxi"),m(y,"data-toggle","collapse"),m(y,"data-target",I="[data-target='"+t[3].title+"']"),m(y,"aria-expanded","false"),m(y,"class","list__show-more svelte-y9rwxi"),H(y,"active",t[3].active),m(a,"class","list__head-txt-wrap svelte-y9rwxi"),m(O,"class","list__desc section__desc"),m(N,"class","list__image-list image-list svelte-y9rwxi"),m(N,"data-lg","true"),m(M,"class","list__content collapse svelte-y9rwxi"),m(M,"data-target",P=t[3].title),m(n,"class","list__element svelte-y9rwxi")},m:function(t,l){_(t,n,l),b(n,a),b(a,c),b(c,e),b(e,r),b(c,s),b(c,o),b(o,i),b(a,k),b(a,y),b(y,w),b(n,x),b(n,M),b(M,O),b(O,q),b(M,L),b(M,N);for(var u=0;u<G.length;u+=1)G[u].m(N,null);b(n,A),S=T(y,"click",V)},p:function(n,a){if(t=n,1&a&&D!==(D=t[3].title+"")&&E(r,D),1&a&&j!==(j=t[3].price+"")&&E(i,j),1&a&&I!==(I="[data-target='"+t[3].title+"']")&&m(y,"data-target",I),1&a&&H(y,"active",t[3].active),1&a&&z!==(z=t[3].description+"")&&E(q,z),1&a){var c;for(C=t[3].images,c=0;c<C.length;c+=1){var e=Tt(t,C,c);G[c]?G[c].p(e,a):(G[c]=jt(e),G[c].c(),G[c].m(N,null))}for(;c<G.length;c+=1)G[c].d(1);G.length=C.length}1&a&&P!==(P=t[3].title)&&m(M,"data-target",P)},d:function(t){t&&d(n),$(G,t),S()}}}function Vt(t){for(var n,a,c,e,r,s=new tt({props:{title:"Cennik",icon:t[1]}}),o=t[0],i=[],f=0;f<o.length;f+=1)i[f]=zt(Dt(t,o,f));return{c:function(){n=l("section"),a=l("div"),x(s.$$.fragment),c=u(),e=l("ul");for(var t=0;t<i.length;t+=1)i[t].c();this.h()},l:function(t){n=h(t,"SECTION",{class:!0,"data-section":!0,"data-aos":!0,"data-aos-once":!0});var r=v(n);a=h(r,"DIV",{class:!0});var o=v(a);M(s.$$.fragment,o),c=g(o),e=h(o,"UL",{class:!0});for(var l=v(e),u=0;u<i.length;u+=1)i[u].l(l);l.forEach(d),o.forEach(d),r.forEach(d),this.h()},h:function(){m(e,"class","price__list list svelte-y9rwxi"),m(a,"class","container"),m(n,"class","section price svelte-y9rwxi"),m(n,"data-section","price"),m(n,"data-aos","-"),m(n,"data-aos-once","true")},m:function(t,o){_(t,n,o),b(n,a),O(s,a,null),b(a,c),b(a,e);for(var l=0;l<i.length;l+=1)i[l].m(e,null);r=!0},p:function(t,n){var a=w(n,1)[0],c={};if(2&a&&(c.icon=t[1]),s.$set(c),1&a){var r;for(o=t[0],r=0;r<o.length;r+=1){var l=Dt(t,o,r);i[r]?i[r].p(l,a):(i[r]=zt(l),i[r].c(),i[r].m(e,null))}for(;r<i.length;r+=1)i[r].d(1);i.length=o.length}},i:function(t){r||(q(s.$$.fragment,t),r=!0)},o:function(t){L(s.$$.fragment,t),r=!1},d:function(t){t&&d(n),N(s),$(i,t)}}}function Ct(t,n,a){var c=n.icon,e=n.content;return t.$set=function(t){"icon"in t&&a(1,c=t.icon),"content"in t&&a(0,e=t.content)},[e,c,function(t,n){return a(0,t.active=!t.active,e)}]}var Gt=function(t){function l(t){var n;return a(this,l),n=c(this,e(l).call(this)),r(o(n),t,Ct,Vt,s,{icon:1,content:0}),n}return n(l,i),l}();export{ct as A,tt as H,St as L,Gt as P,R as f,wt as s,Ot as t};
