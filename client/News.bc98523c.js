import{S as a,i as s,s as t,e as c,q as e,a as r,t as l,c as n,b as o,r as i,f as d,g as _,d as h,h as f,j as v,k as w,u as m,A as p,m as j,v as u,w as g,x as E,B as $,K as x}from"./client.a7289c90.js";import{H as y}from"./Price.47b131ff.js";const{window:I}=x;function b(a){let s;return{c(){s=l("Czytaj więcej")},l(a){s=_(a,"Czytaj więcej")},m(a,t){v(a,s,t)},d(a){a&&h(s)}}}function k(a){let s;return{c(){s=l("Czytaj mniej")},l(a){s=_(a,"Czytaj mniej")},m(a,t){v(a,s,t)},d(a){a&&h(s)}}}function z(a){let s,t,x,z,C,P,T,A,N,S,B,H,M,O,W,q,D,G,K,L,R,U,V,F,J,Q,X,Y,Z,aa,sa,ta,ca,ea,ra=a[0].description+"",la=a[2].time+"",na=a[2].header+"",oa=a[2].desc_short+"",ia=a[2].desc_long+"";const da=new y({props:{title:"Aktualności",icon:a[1]}});function _a(a,s){return a[4]?k:b}let ha=_a(a),fa=ha(a);return{c(){s=c("section"),t=c("div"),e(da.$$.fragment),x=r(),z=c("p"),C=l(ra),P=r(),T=c("article"),A=c("img"),S=r(),B=c("i"),H=r(),M=c("time"),O=l(la),q=r(),D=c("h3"),G=l(na),K=r(),L=c("p"),R=l(oa),U=r(),V=c("span"),F=c("p"),J=l(ia),X=r(),Y=c("button"),fa.c(),Z=r(),aa=c("i"),sa=r(),ta=c("i"),this.h()},l(a){s=n(a,"SECTION",{class:!0,"data-section":!0,"data-aos":!0,"data-aos-once":!0});var c=o(s);t=n(c,"DIV",{class:!0});var e=o(t);i(da.$$.fragment,e),x=d(e),z=n(e,"P",{class:!0});var r=o(z);C=_(r,ra),r.forEach(h),P=d(e),T=n(e,"ARTICLE",{class:!0});var l=o(T);A=n(l,"IMG",{class:!0,src:!0,alt:!0}),S=d(l),B=n(l,"I",{class:!0}),o(B).forEach(h),H=d(l),M=n(l,"TIME",{class:!0,datetime:!0});var f=o(M);O=_(f,la),f.forEach(h),q=d(l),D=n(l,"H3",{class:!0});var v=o(D);G=_(v,na),v.forEach(h),K=d(l),L=n(l,"P",{class:!0});var w=o(L);R=_(w,oa),w.forEach(h),U=d(l),V=n(l,"SPAN",{class:!0,id:!0});var m=o(V);F=n(m,"P",{class:!0});var p=o(F);J=_(p,ia),p.forEach(h),m.forEach(h),X=d(l),Y=n(l,"BUTTON",{"data-toggle":!0,"data-target":!0,"aria-expanded":!0,class:!0});var j=o(Y);fa.l(j),j.forEach(h),Z=d(l),aa=n(l,"I",{class:!0}),o(aa).forEach(h),sa=d(l),ta=n(l,"I",{class:!0}),o(ta).forEach(h),l.forEach(h),e.forEach(h),c.forEach(h),this.h()},h(){f(z,"class","section__desc"),f(A,"class","card__img  svelte-r28tjw"),A.src!==(N="https://cdn.pixabay.com/photo/2019/11/12/18/41/vancouver-4621816_960_720.jpg")&&f(A,"src","https://cdn.pixabay.com/photo/2019/11/12/18/41/vancouver-4621816_960_720.jpg"),f(A,"alt","zdjęcie tytułowe"),f(B,"class","card__icon far fa-clock svelte-r28tjw"),f(M,"class","card__time svelte-r28tjw"),f(M,"datetime",W=a[2].time),f(D,"class","card__head svelte-r28tjw"),f(L,"class","section__desc card__desc svelte-r28tjw"),f(F,"class","card__desc section__desc  svelte-r28tjw"),f(V,"class",Q="collapse card__long-txt-wrap "+(a[3]?"show":null)+" svelte-r28tjw"),f(V,"id","news-card"),f(Y,"data-toggle","collapse"),f(Y,"data-target","#news-card"),f(Y,"aria-expanded","false"),f(Y,"class","section__show-more-btn card__show-more-btn svelte-r28tjw"),f(aa,"class","card__nav card__nav--left fas fa-chevron-left svelte-r28tjw"),f(ta,"class","card__nav card__nav--right fas fa-chevron-right svelte-r28tjw"),f(T,"class","news__card card  svelte-r28tjw"),f(t,"class","container"),f(s,"class","section news svelte-r28tjw"),f(s,"data-section","news"),f(s,"data-aos","-"),f(s,"data-aos-once","true")},m(c,e){v(c,s,e),w(s,t),m(da,t,null),w(t,x),w(t,z),w(z,C),w(t,P),w(t,T),w(T,A),w(T,S),w(T,B),w(T,H),w(T,M),w(M,O),w(T,q),w(T,D),w(D,G),w(T,K),w(T,L),w(L,R),w(T,U),w(T,V),w(V,F),w(F,J),w(T,X),w(T,Y),fa.m(Y,null),w(T,Z),w(T,aa),w(T,sa),w(T,ta),ca=!0,ea=[p(I,"resize",a[8]),p(Y,"click",a[5]),p(aa,"click",a[7]),p(ta,"click",a[6])]},p(a,[s]){const t={};2&s&&(t.icon=a[1]),da.$set(t),(!ca||1&s)&&ra!==(ra=a[0].description+"")&&j(C,ra),(!ca||4&s)&&la!==(la=a[2].time+"")&&j(O,la),(!ca||4&s&&W!==(W=a[2].time))&&f(M,"datetime",W),(!ca||4&s)&&na!==(na=a[2].header+"")&&j(G,na),(!ca||4&s)&&oa!==(oa=a[2].desc_short+"")&&j(R,oa),(!ca||4&s)&&ia!==(ia=a[2].desc_long+"")&&j(J,ia),(!ca||8&s&&Q!==(Q="collapse card__long-txt-wrap "+(a[3]?"show":null)+" svelte-r28tjw"))&&f(V,"class",Q),ha!==(ha=_a(a))&&(fa.d(1),(fa=ha(a))&&(fa.c(),fa.m(Y,null)))},i(a){ca||(u(da.$$.fragment,a),ca=!0)},o(a){g(da.$$.fragment,a),ca=!1},d(a){a&&h(s),E(da),fa.d(),$(ea)}}}function C(a,s,t){let{icon:c}=s,{content:e}=s,r=0;for(let a in e.list){r++;let s="";const t=e.list[a].description.split(" ");for(let a=0;a<15;a++)s+=`${t[a]} `;e.list[a].desc_short=s,s="";for(let a=15;a<t.length;a++)s+=`${t[a]} `;e.list[a].desc_long=s}let l=0,n=e.list[l],o=!1;window.innerWidth>=960&&(o=!0);let i;return a.$set=(a=>{"icon"in a&&t(1,c=a.icon),"content"in a&&t(0,e=a.content)}),a.$$.update=(()=>{1025&a.$$.dirty&&t(2,n=e.list[l])}),t(4,i=!1),[e,c,n,o,i,()=>t(4,i=!i),()=>{t(10,l<r-1?l+=1:l=0)},()=>{t(10,l>0?l-=1:l=r-1)},a=>{window.innerWidth>=960&&t(4,i=!0),t(3,o=!0)}]}class P extends a{constructor(a){super(),s(this,a,C,z,t,{icon:1,content:0})}}export{P as N};
