import{S as s,i as a,s as t,e,q as c,a as r,t as l,c as n,b as o,r as i,g as d,d as _,f,h,j as w,k as m,u as v,A as j,m as u,v as g,w as p,x as E,B as $,K as I}from"./client.a7876f8c.js";import{H as x}from"./Price.cbabfdad.js";const{window:b}=I;function k(s){let a;return{c(){a=l("Czytaj więcej")},l(s){a=_(s,"Czytaj więcej")},m(s,t){w(s,a,t)},d(s){s&&f(a)}}}function y(s){let a;return{c(){a=l("Czytaj mniej")},l(s){a=_(s,"Czytaj mniej")},m(s,t){w(s,a,t)},d(s){s&&f(a)}}}function z(s){let a,t,I,z,C,P,T,A,N,S,B,H,M,O,W,q,D,G,K,L,R,U,V,F,J,Q,X,Y,Z,ss,as,ts,es,cs,rs=s[0].description+"",ls=s[2].time+"",ns=s[2].header+"",os=s[2].desc_short+"",is=s[2].desc_long+"";const ds=new x({props:{title:"Aktualności",icon:s[1]}});function _s(s,a){return s[4]?y:k}let fs=_s(s),hs=fs(s);return{c(){a=e("section"),t=e("div"),c(ds.$$.fragment),I=r(),z=e("p"),C=l(rs),P=r(),T=e("article"),A=e("img"),S=r(),B=e("i"),H=r(),M=e("time"),O=l(ls),q=r(),D=e("h3"),G=l(ns),K=r(),L=e("p"),R=l(os),U=r(),V=e("span"),F=e("p"),J=l(is),X=r(),Y=e("button"),hs.c(),Z=r(),ss=e("i"),as=r(),ts=e("i"),this.h()},l(s){a=n(s,"SECTION",{class:!0,"data-section":!0,"data-aos":!0,"data-aos-once":!0});var e=o(a);t=n(e,"DIV",{class:!0});var c=o(t);i(ds.$$.fragment,c),I=d(c),z=n(c,"P",{class:!0});var r=o(z);C=_(r,rs),r.forEach(f),P=d(c),T=n(c,"ARTICLE",{class:!0});var l=o(T);A=n(l,"IMG",{class:!0,src:!0,alt:!0}),S=d(l),B=n(l,"I",{class:!0}),o(B).forEach(f),H=d(l),M=n(l,"TIME",{class:!0,datetime:!0});var h=o(M);O=_(h,ls),h.forEach(f),q=d(l),D=n(l,"H3",{class:!0});var w=o(D);G=_(w,ns),w.forEach(f),K=d(l),L=n(l,"P",{class:!0});var m=o(L);R=_(m,os),m.forEach(f),U=d(l),V=n(l,"SPAN",{class:!0,id:!0});var v=o(V);F=n(v,"P",{class:!0});var j=o(F);J=_(j,is),j.forEach(f),v.forEach(f),X=d(l),Y=n(l,"BUTTON",{"data-toggle":!0,"data-target":!0,"aria-expanded":!0,class:!0});var u=o(Y);hs.l(u),u.forEach(f),Z=d(l),ss=n(l,"I",{class:!0}),o(ss).forEach(f),as=d(l),ts=n(l,"I",{class:!0}),o(ts).forEach(f),l.forEach(f),c.forEach(f),e.forEach(f),this.h()},h(){h(z,"class","section__desc"),h(A,"class","card__img  svelte-r28tjw"),A.src!==(N=s[2].image.url)&&h(A,"src",N),h(A,"alt","zdjęcie tytułowe"),h(B,"class","card__icon far fa-clock svelte-r28tjw"),h(M,"class","card__time svelte-r28tjw"),h(M,"datetime",W=s[2].time),h(D,"class","card__head svelte-r28tjw"),h(L,"class","section__desc card__desc svelte-r28tjw"),h(F,"class","card__desc section__desc  svelte-r28tjw"),h(V,"class",Q="collapse card__long-txt-wrap "+(s[3]?"show":null)+" svelte-r28tjw"),h(V,"id","news-card"),h(Y,"data-toggle","collapse"),h(Y,"data-target","#news-card"),h(Y,"aria-expanded","false"),h(Y,"class","section__show-more-btn card__show-more-btn svelte-r28tjw"),h(ss,"class","card__nav card__nav--left fas fa-chevron-left svelte-r28tjw"),h(ts,"class","card__nav card__nav--right fas fa-chevron-right svelte-r28tjw"),h(T,"class","news__card card  svelte-r28tjw"),h(t,"class","container"),h(a,"class","section news svelte-r28tjw"),h(a,"data-section","news"),h(a,"data-aos","-"),h(a,"data-aos-once","true")},m(e,c){w(e,a,c),m(a,t),v(ds,t,null),m(t,I),m(t,z),m(z,C),m(t,P),m(t,T),m(T,A),m(T,S),m(T,B),m(T,H),m(T,M),m(M,O),m(T,q),m(T,D),m(D,G),m(T,K),m(T,L),m(L,R),m(T,U),m(T,V),m(V,F),m(F,J),m(T,X),m(T,Y),hs.m(Y,null),m(T,Z),m(T,ss),m(T,as),m(T,ts),es=!0,cs=[j(b,"resize",s[8]),j(Y,"click",s[5]),j(ss,"click",s[7]),j(ts,"click",s[6])]},p(s,[a]){const t={};2&a&&(t.icon=s[1]),ds.$set(t),(!es||1&a)&&rs!==(rs=s[0].description+"")&&u(C,rs),(!es||4&a&&A.src!==(N=s[2].image.url))&&h(A,"src",N),(!es||4&a)&&ls!==(ls=s[2].time+"")&&u(O,ls),(!es||4&a&&W!==(W=s[2].time))&&h(M,"datetime",W),(!es||4&a)&&ns!==(ns=s[2].header+"")&&u(G,ns),(!es||4&a)&&os!==(os=s[2].desc_short+"")&&u(R,os),(!es||4&a)&&is!==(is=s[2].desc_long+"")&&u(J,is),(!es||8&a&&Q!==(Q="collapse card__long-txt-wrap "+(s[3]?"show":null)+" svelte-r28tjw"))&&h(V,"class",Q),fs!==(fs=_s(s))&&(hs.d(1),(hs=fs(s))&&(hs.c(),hs.m(Y,null)))},i(s){es||(g(ds.$$.fragment,s),es=!0)},o(s){p(ds.$$.fragment,s),es=!1},d(s){s&&f(a),E(ds),hs.d(),$(cs)}}}function C(s,a,t){let{icon:e}=a,{content:c}=a,r=0;for(let s in c.list){r++;let a="";const t=c.list[s].description.split(" ");for(let s=0;s<15;s++)a+=`${t[s]} `;c.list[s].desc_short=a,a="";for(let s=15;s<t.length;s++)a+=`${t[s]} `;c.list[s].desc_long=a}let l=0,n=c.list[l],o=!1;window.innerWidth>=960&&(o=!0);let i;return s.$set=(s=>{"icon"in s&&t(1,e=s.icon),"content"in s&&t(0,c=s.content)}),s.$$.update=(()=>{1025&s.$$.dirty&&t(2,n=c.list[l])}),t(4,i=!1),[c,e,n,o,i,()=>t(4,i=!i),()=>{t(10,l<r-1?l+=1:l=0)},()=>{t(10,l>0?l-=1:l=r-1)},s=>{window.innerWidth>=960&&t(4,i=!0),t(3,o=!0)}]}class P extends s{constructor(s){super(),a(this,s,C,z,t,{icon:1,content:0})}}export{P as N};
