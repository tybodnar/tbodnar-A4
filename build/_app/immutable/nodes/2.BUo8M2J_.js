import{i as ue,s as ce,r as ae,b as fe,f as K,h as oe,n as de}from"../chunks/scheduler.BAwge4yL.js";import{S as pe,i as he,e as g,s as x,c as y,d as A,h as D,g as _,y as H,o as h,j as E,k as T,z as Z,A as P,B as ve,t as F,n as $,a as q,C as me,b as _e,f as be,D as ee,l as ge,E as z,p as Q,q as te}from"../chunks/index.riwe47ij.js";import{w as ye}from"../chunks/index.BXwGqzWn.js";function le(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function J(l,{delay:t=0,duration:i=400,easing:o=ue}={}){const s=+getComputedStyle(l).opacity;return{delay:t,duration:i,easing:o,css:f=>`opacity: ${f*s}`}}function se(l,t,i){const o=l.slice();return o[14]=t[i],o[15]=t,o[16]=i,o}function ne(l){let t,i,o,s,f=l[14].text+"",v,r,d,L="×",M,C,m,k,N;function I(){l[10].call(i,l[15],l[16])}function B(){return l[11](l[16])}return{c(){t=g("li"),i=g("input"),o=x(),s=g("span"),v=_e(f),r=x(),d=g("span"),d.textContent=L,M=x(),this.h()},l(n){t=y(n,"LI",{class:!0});var p=A(t);i=y(p,"INPUT",{type:!0,class:!0}),o=D(p),s=y(p,"SPAN",{class:!0});var S=A(s);v=be(S,f),S.forEach(_),r=D(p),d=y(p,"SPAN",{class:!0,id:!0,role:!0,tabindex:!0,"data-svelte-h":!0}),H(d)!=="svelte-bgpr6e"&&(d.textContent=L),M=D(p),p.forEach(_),this.h()},h(){h(i,"type","checkbox"),h(i,"class","svelte-a0ppei"),h(s,"class","svelte-a0ppei"),ee(s,"done",l[14].done),h(d,"class","remove svelte-a0ppei"),h(d,"id","remover"),h(d,"role","button"),h(d,"tabindex","0"),h(t,"class","svelte-a0ppei")},m(n,p){E(n,t,p),T(t,i),i.checked=l[14].done,T(t,o),T(t,s),T(s,v),T(t,r),T(t,d),T(t,M),m=!0,k||(N=[P(i,"change",I),P(i,"change",l[4]),P(d,"click",B)],k=!0)},p(n,p){l=n,p&1&&(i.checked=l[14].done),(!m||p&1)&&f!==(f=l[14].text+"")&&ge(v,f),(!m||p&1)&&ee(s,"done",l[14].done)},i(n){m||(n&&oe(()=>{m&&(C||(C=z(t,J,{delay:0,duration:200},!0)),C.run(1))}),m=!0)},o(n){n&&(C||(C=z(t,J,{delay:0,duration:200},!1)),C.run(0)),m=!1},d(n){n&&_(t),n&&C&&C.end(),k=!1,ae(N)}}}function ie(l){let t,i="Remove Done",o,s,f,v;return{c(){t=g("button"),t.textContent=i,this.h()},l(r){t=y(r,"BUTTON",{style:!0,class:!0,"data-svelte-h":!0}),H(t)!=="svelte-5aslw6"&&(t.textContent=i),this.h()},h(){Q(t,"align-items","center"),Q(t,"display","flex"),Q(t,"justify-content","center"),h(t,"class","svelte-a0ppei")},m(r,d){E(r,t,d),s=!0,f||(v=P(t,"click",l[7]),f=!0)},p:de,i(r){s||(r&&oe(()=>{s&&(o||(o=z(t,J,{delay:0,duration:200},!0)),o.run(1))}),s=!0)},o(r){r&&(o||(o=z(t,J,{delay:0,duration:200},!1)),o.run(0)),s=!1},d(r){r&&_(t),r&&o&&o.end(),f=!1,v()}}}function Ce(l){let t,i,o,s,f,v,r="Light Mode is OFF",d,L,M="To Do List!",C,m,k,N,I,B='<button type="submit" class="svelte-a0ppei">Add</button>',n,p,S,j,w,V,R,W,O=le(l[0]),c=[];for(let e=0;e<O.length;e+=1)c[e]=ne(se(l,O,e));const re=e=>q(c[e],1,1,()=>{c[e]=null});let b=l[2].length>0&&ie(l);return{c(){t=g("label"),i=g("input"),o=x(),s=g("span"),f=x(),v=g("h3"),v.textContent=r,d=x(),L=g("h1"),L.textContent=M,C=x(),m=g("form"),k=g("input"),N=x(),I=g("div"),I.innerHTML=B,n=x(),p=g("div"),S=g("ul");for(let e=0;e<c.length;e+=1)c[e].c();j=x(),w=g("div"),b&&b.c(),this.h()},l(e){t=y(e,"LABEL",{class:!0});var a=A(t);i=y(a,"INPUT",{type:!0,class:!0}),o=D(a),s=y(a,"SPAN",{class:!0}),A(s).forEach(_),a.forEach(_),f=D(e),v=y(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),H(v)!=="svelte-bzfvv3"&&(v.textContent=r),d=D(e),L=y(e,"H1",{id:!0,class:!0,"data-svelte-h":!0}),H(L)!=="svelte-3t5vip"&&(L.textContent=M),C=D(e),m=y(e,"FORM",{class:!0});var u=A(m);k=y(u,"INPUT",{type:!0,class:!0}),N=D(u),I=y(u,"DIV",{"data-svelte-h":!0}),H(I)!=="svelte-1jl9fcl"&&(I.innerHTML=B),u.forEach(_),n=D(e),p=y(e,"DIV",{class:!0});var U=A(p);S=y(U,"UL",{class:!0});var X=A(S);for(let G=0;G<c.length;G+=1)c[G].l(X);X.forEach(_),U.forEach(_),j=D(e),w=y(e,"DIV",{class:!0});var Y=A(w);b&&b.l(Y),Y.forEach(_),this.h()},h(){h(i,"type","checkbox"),h(i,"class","svelte-a0ppei"),h(s,"class","slider round svelte-a0ppei"),h(t,"class","switch svelte-a0ppei"),h(v,"class","darkModeText svelte-a0ppei"),h(v,"id","DarkModetext"),h(L,"id","hOne"),h(L,"class","svelte-a0ppei"),h(k,"type","text"),h(k,"class","svelte-a0ppei"),h(m,"class","flex svelte-a0ppei"),h(S,"class","svelte-a0ppei"),h(p,"class","centerList svelte-a0ppei"),h(w,"class","center svelte-a0ppei")},m(e,a){E(e,t,a),T(t,i),T(t,o),T(t,s),E(e,f,a),E(e,v,a),E(e,d,a),E(e,L,a),E(e,C,a),E(e,m,a),T(m,k),Z(k,l[1]),T(m,N),T(m,I),E(e,n,a),E(e,p,a),T(p,S);for(let u=0;u<c.length;u+=1)c[u]&&c[u].m(S,null);E(e,j,a),E(e,w,a),b&&b.m(w,null),V=!0,R||(W=[P(i,"change",l[8]),P(k,"input",l[9]),P(m,"submit",ve(l[5]))],R=!0)},p(e,[a]){if(a&2&&k.value!==e[1]&&Z(k,e[1]),a&81){O=le(e[0]);let u;for(u=0;u<O.length;u+=1){const U=se(e,O,u);c[u]?(c[u].p(U,a),F(c[u],1)):(c[u]=ne(U),c[u].c(),F(c[u],1),c[u].m(S,null))}for(te(),u=O.length;u<c.length;u+=1)re(u);$()}e[2].length>0?b?(b.p(e,a),a&4&&F(b,1)):(b=ie(e),b.c(),F(b,1),b.m(w,null)):b&&(te(),q(b,1,1,()=>{b=null}),$())},i(e){if(!V){for(let a=0;a<O.length;a+=1)F(c[a]);F(b),V=!0}},o(e){c=c.filter(Boolean);for(let a=0;a<c.length;a+=1)q(c[a]);q(b),V=!1},d(e){e&&(_(t),_(f),_(v),_(d),_(L),_(C),_(m),_(n),_(p),_(j),_(w)),me(c,e),b&&b.d(),R=!1,ae(W)}}}function ke(l,t,i){let o,s,f="",v,r=ye([]);fe(l,r,n=>i(0,s=n)),typeof window<"u"&&typeof localStorage<"u"&&(v=localStorage.getItem("storedList"),v&&K(r,s=JSON.parse(v),s));function d(){return v=localStorage.setItem("storedList",JSON.stringify(s))}function L(){f!=""&&(K(r,s=[...s,{text:f,done:!1}],s),console.log(s),d(),i(1,f=""))}function M(n){s.splice(n,1),r.set(s),d()}function C(){K(r,s=s.filter(n=>!n.done),s),d()}let m=!0;function k(){let n=document.getElementById("DarkModetext");m?(n.innerText="Light Mode is ON",document.body.style.backgroundColor="#ebebeb",document.body.style.color="rgb(18, 18, 18)",m=!1):(document.body.style.backgroundColor="rgb(18, 18, 18)",document.body.style.color="white",m=!0,n.innerText="Light Mode is OFF")}function N(){f=this.value,i(1,f)}function I(n,p){n[p].done=this.checked,r.set(s)}const B=n=>M(n);return l.$$.update=()=>{l.$$.dirty&1&&i(2,o=s.filter(n=>n.done))},[s,f,o,r,d,L,M,C,k,N,I,B]}class Ie extends pe{constructor(t){super(),he(this,t,ke,Ce,ce,{})}}export{Ie as component};
