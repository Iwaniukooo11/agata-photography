import{S as s,i as a,s as t,e as c,q as e,a as r,t as l,c as n,b as o,r as i,f as d,g as _,d as h,h as f,j as v,k as w,u as m,A as p,m as j,v as u,w as g,x as E,B as $,K as x}from"./client.2c6cdc26.js";import{H as y}from"./Price.488d8970.js";const{window:I}=x;function b(s){let a;return{c(){a=l("Czytaj więcej")},l(s){a=_(s,"Czytaj więcej")},m(s,t){v(s,a,t)},d(s){s&&h(a)}}}function k(s){let a;return{c(){a=l("Czytaj mniej")},l(s){a=_(s,"Czytaj mniej")},m(s,t){v(s,a,t)},d(s){s&&h(a)}}}function z(s){let a,t,x,z,C,P,T,A,N,S,B,H,M,O,W,q,D,G,K,L,R,U,V,F,J,Q,X,Y,Z,ss,as,ts,cs,es,rs=s[0].description+"",ls=s[2].time+"",ns=s[2].header+"",os=s[2].desc_short+"",is=s[2].desc_long+"";const ds=new y({props:{title:"Aktualności",icon:s[1]}});function _s(s,a){return s[4]?k:b}let hs=_s(s),fs=hs(s);return{c(){a=c("section"),t=c("div"),e(ds.$$.fragment),x=r(),z=c("p"),C=l(rs),P=r(),T=c("article"),A=c("img"),S=r(),B=c("i"),H=r(),M=c("time"),O=l(ls),q=r(),D=c("h3"),G=l(ns),K=r(),L=c("p"),R=l(os),U=r(),V=c("span"),F=c("p"),J=l(is),X=r(),Y=c("button"),fs.c(),Z=r(),ss=c("i"),as=r(),ts=c("i"),this.h()},l(s){a=n(s,"SECTION",{class:!0,"data-section":!0,"data-aos":!0,"data-aos-once":!0});var c=o(a);t=n(c,"DIV",{class:!0});var e=o(t);i(ds.$$.fragment,e),x=d(e),z=n(e,"P",{class:!0});var r=o(z);C=_(r,rs),r.forEach(h),P=d(e),T=n(e,"ARTICLE",{class:!0});var l=o(T);A=n(l,"IMG",{class:!0,src:!0,alt:!0}),S=d(l),B=n(l,"I",{class:!0}),o(B).forEach(h),H=d(l),M=n(l,"TIME",{class:!0,datetime:!0});var f=o(M);O=_(f,ls),f.forEach(h),q=d(l),D=n(l,"H3",{class:!0});var v=o(D);G=_(v,ns),v.forEach(h),K=d(l),L=n(l,"P",{class:!0});var w=o(L);R=_(w,os),w.forEach(h),U=d(l),V=n(l,"SPAN",{class:!0,id:!0});var m=o(V);F=n(m,"P",{class:!0});var p=o(F);J=_(p,is),p.forEach(h),m.forEach(h),X=d(l),Y=n(l,"BUTTON",{"data-toggle":!0,"data-target":!0,"aria-expanded":!0,class:!0});var j=o(Y);fs.l(j),j.forEach(h),Z=d(l),ss=n(l,"I",{class:!0}),o(ss).forEach(h),as=d(l),ts=n(l,"I",{class:!0}),o(ts).forEach(h),l.forEach(h),e.forEach(h),c.forEach(h),this.h()},h(){f(z,"class","section__desc"),f(A,"class","card__img  svelte-r28tjw"),A.src!==(N="https://cdn.pixabay.com/photo/2019/11/12/18/41/vancouver-4621816_960_720.jpg")&&f(A,"src","https://cdn.pixabay.com/photo/2019/11/12/18/41/vancouver-4621816_960_720.jpg"),f(A,"alt","zdjęcie tytułowe"),f(B,"class","card__icon far fa-clock svelte-r28tjw"),f(M,"class","card__time svelte-r28tjw"),f(M,"datetime",W=s[2].time),f(D,"class","card__head svelte-r28tjw"),f(L,"class","section__desc card__desc svelte-r28tjw"),f(F,"class","card__desc section__desc  svelte-r28tjw"),f(V,"class",Q="collapse card__long-txt-wrap "+(s[3]?"show":null)+" svelte-r28tjw"),f(V,"id","news-card"),f(Y,"data-toggle","collapse"),f(Y,"data-target","#news-card"),f(Y,"aria-expanded","false"),f(Y,"class","section__show-more-btn card__show-more-btn svelte-r28tjw"),f(ss,"class","card__nav card__nav--left fas fa-chevron-left svelte-r28tjw"),f(ts,"class","card__nav card__nav--right fas fa-chevron-right svelte-r28tjw"),f(T,"class","news__card card  svelte-r28tjw"),f(t,"class","container"),f(a,"class","section news svelte-r28tjw"),f(a,"data-section","news"),f(a,"data-aos","-"),f(a,"data-aos-once","true")},m(c,e){v(c,a,e),w(a,t),m(ds,t,null),w(t,x),w(t,z),w(z,C),w(t,P),w(t,T),w(T,A),w(T,S),w(T,B),w(T,H),w(T,M),w(M,O),w(T,q),w(T,D),w(D,G),w(T,K),w(T,L),w(L,R),w(T,U),w(T,V),w(V,F),w(F,J),w(T,X),w(T,Y),fs.m(Y,null),w(T,Z),w(T,ss),w(T,as),w(T,ts),cs=!0,es=[p(I,"resize",s[8]),p(Y,"click",s[5]),p(ss,"click",s[7]),p(ts,"click",s[6])]},p(s,[a]){const t={};2&a&&(t.icon=s[1]),ds.$set(t),(!cs||1&a)&&rs!==(rs=s[0].description+"")&&j(C,rs),(!cs||4&a)&&ls!==(ls=s[2].time+"")&&j(O,ls),(!cs||4&a&&W!==(W=s[2].time))&&f(M,"datetime",W),(!cs||4&a)&&ns!==(ns=s[2].header+"")&&j(G,ns),(!cs||4&a)&&os!==(os=s[2].desc_short+"")&&j(R,os),(!cs||4&a)&&is!==(is=s[2].desc_long+"")&&j(J,is),(!cs||8&a&&Q!==(Q="collapse card__long-txt-wrap "+(s[3]?"show":null)+" svelte-r28tjw"))&&f(V,"class",Q),hs!==(hs=_s(s))&&(fs.d(1),(fs=hs(s))&&(fs.c(),fs.m(Y,null)))},i(s){cs||(u(ds.$$.fragment,s),cs=!0)},o(s){g(ds.$$.fragment,s),cs=!1},d(s){s&&h(a),E(ds),fs.d(),$(es)}}}function C(s,a,t){let{icon:c}=a,{content:e}=a,r=0;for(let s in e.list){r++;let a="";const t=e.list[s].description.split(" ");for(let s=0;s<15;s++)a+=`${t[s]} `;e.list[s].desc_short=a,a="";for(let s=15;s<t.length;s++)a+=`${t[s]} `;e.list[s].desc_long=a}let l=0,n=e.list[l],o=!1;window.innerWidth>=960&&(o=!0);let i;return s.$set=(s=>{"icon"in s&&t(1,c=s.icon),"content"in s&&t(0,e=s.content)}),s.$$.update=(()=>{1025&s.$$.dirty&&t(2,n=e.list[l])}),t(4,i=!1),[e,c,n,o,i,()=>t(4,i=!i),()=>{t(10,l<r-1?l+=1:l=0)},()=>{t(10,l>0?l-=1:l=r-1)},s=>{window.innerWidth>=960&&t(4,i=!0),t(3,o=!0)}]}class P extends s{constructor(s){super(),a(this,s,C,z,t,{icon:1,content:0})}}export{P as N};
