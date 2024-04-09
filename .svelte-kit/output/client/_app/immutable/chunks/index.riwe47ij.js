var G=Object.defineProperty;var J=(t,e,n)=>e in t?G(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var B=(t,e,n)=>(J(t,typeof e!="symbol"?e+"":e,n),n);import{n as v,r as w,j as I,h as R,i as K,k as O,l as Q,m as X,p as Y,q as Z,v as q,w as tt,x as et,y as nt}from"./scheduler.BAwge4yL.js";const T=typeof window<"u";let it=T?()=>window.performance.now():()=>Date.now(),L=T?t=>requestAnimationFrame(t):v;const g=new Set;function k(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),g.size!==0&&L(k)}function rt(t){let e;return g.size===0&&L(k),{promise:new Promise(n=>{g.add(e={c:t,f:n})}),abort(){g.delete(e)}}}let C=!1;function st(){C=!0}function lt(){C=!1}function at(t,e,n,s){for(;t<e;){const o=t+(e-t>>1);n(o)<=s?t=o+1:e=o}return t}function ot(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const i=[];for(let a=0;a<e.length;a++){const _=e[a];_.claim_order!==void 0&&i.push(_)}e=i}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let o=0;for(let i=0;i<e.length;i++){const a=e[i].claim_order,_=(o>0&&e[n[o]].claim_order<=a?o+1:at(1,o,m=>e[n[m]].claim_order,a))-1;s[i]=n[_]+1;const c=_+1;n[c]=i,o=Math.max(c,o)}const u=[],l=[];let r=e.length-1;for(let i=n[o]+1;i!=0;i=s[i-1]){for(u.push(e[i-1]);r>=i;r--)l.push(e[r]);r--}for(;r>=0;r--)l.push(e[r]);u.reverse(),l.sort((i,a)=>i.claim_order-a.claim_order);for(let i=0,a=0;i<l.length;i++){for(;a<u.length&&l[i].claim_order>=u[a].claim_order;)a++;const _=a<u.length?u[a]:null;t.insertBefore(l[i],_)}}function ut(t,e){t.appendChild(e)}function H(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ct(t){const e=U("style");return e.textContent="/* empty */",ft(H(t),e),e.sheet}function ft(t,e){return ut(t.head||t,e),e.sheet}function _t(t,e){if(C){for(ot(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Bt(t,e,n){C&&!n?_t(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function F(t){t.parentNode&&t.parentNode.removeChild(t)}function Pt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function U(t){return document.createElement(t)}function M(t){return document.createTextNode(t)}function Rt(){return M(" ")}function It(){return M("")}function Lt(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Mt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Ot(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function qt(t){return t.dataset.svelteH}function dt(t){return Array.from(t.childNodes)}function mt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function V(t,e,n,s,o=!1){mt(t);const u=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const r=t[l];if(e(r)){const i=n(r);return i===void 0?t.splice(l,1):t[l]=i,o||(t.claim_info.last_index=l),r}}for(let l=t.claim_info.last_index-1;l>=0;l--){const r=t[l];if(e(r)){const i=n(r);return i===void 0?t.splice(l,1):t[l]=i,o?i===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,r}}return s()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function ht(t,e,n,s){return V(t,o=>o.nodeName===e,o=>{const u=[];for(let l=0;l<o.attributes.length;l++){const r=o.attributes[l];n[r.name]||u.push(r.name)}u.forEach(l=>o.removeAttribute(l))},()=>s(e))}function zt(t,e,n){return ht(t,e,n,U)}function pt(t,e){return V(t,n=>n.nodeType===3,n=>{const s=""+e;if(n.data.startsWith(s)){if(n.data.length!==s.length)return n.splitText(s.length)}else n.data=s},()=>M(e),!0)}function Tt(t){return pt(t," ")}function kt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ht(t,e){t.value=e??""}function Ft(t,e,n,s){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function Ut(t,e,n){t.classList.toggle(e,!!n)}function $t(t,e,{bubbles:n=!1,cancelable:s=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:s})}function Vt(t,e){return new t(e)}const E=new Map;let A=0;function yt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function gt(t,e){const n={stylesheet:ct(e),rules:{}};return E.set(t,n),n}function z(t,e,n,s,o,u,l,r=0){const i=16.666/s;let a=`{
`;for(let d=0;d<=1;d+=i){const y=e+(n-e)*u(d);a+=d*100+`%{${l(y,1-y)}}
`}const _=a+`100% {${l(n,1-n)}}
}`,c=`__svelte_${yt(_)}_${r}`,m=H(t),{stylesheet:$,rules:f}=E.get(m)||gt(m,t);f[c]||(f[c]=!0,$.insertRule(`@keyframes ${c} ${_}`,$.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${c} ${s}ms linear ${o}ms 1 both`,A+=1,c}function xt(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),o=n.length-s.length;o&&(t.style.animation=s.join(", "),A-=o,A||vt())}function vt(){L(()=>{A||(E.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&F(e)}),E.clear())})}let x;function wt(){return x||(x=Promise.resolve(),x.then(()=>{x=null})),x}function P(t,e,n){t.dispatchEvent($t(`${e?"intro":"outro"}${n}`))}const N=new Set;let p;function Wt(){p={r:0,c:[],p}}function Gt(){p.r||w(p.c),p=p.p}function bt(t,e){t&&t.i&&(N.delete(t),t.i(e))}function Jt(t,e,n,s){if(t&&t.o){if(N.has(t))return;N.add(t),p.c.push(()=>{N.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const Nt={duration:0};function Kt(t,e,n,s){let u=e(t,n,{direction:"both"}),l=s?0:1,r=null,i=null,a=null,_;function c(){a&&xt(t,a)}function m(f,h){const d=f.b-l;return h*=Math.abs(d),{a:l,b:f.b,d,duration:h,start:f.start,end:f.start+h,group:f.group}}function $(f){const{delay:h=0,duration:d=300,easing:y=K,tick:S=v,css:j}=u||Nt,D={start:it()+h,b:f};f||(D.group=p,p.r+=1),"inert"in t&&(f?_!==void 0&&(t.inert=_):(_=t.inert,t.inert=!0)),r||i?i=D:(j&&(c(),a=z(t,l,f,d,h,y,j)),f&&S(0,1),r=m(D,d),R(()=>P(t,f,"start")),rt(b=>{if(i&&b>i.start&&(r=m(i,d),i=null,P(t,r.b,"start"),j&&(c(),a=z(t,l,r.b,r.duration,0,y,u.css))),r){if(b>=r.end)S(l=r.b,1-l),P(t,r.b,"end"),i||(r.b?c():--r.group.r||w(r.group.c)),r=null;else if(b>=r.start){const W=b-r.start;l=r.a+r.d*y(W/r.duration),S(l,1-l)}}return!!(r||i)}))}return{run(f){I(u)?wt().then(()=>{u=u({direction:f?"in":"out"}),$(f)}):$(f)},end(){c(),r=i=null}}}function Qt(t){t&&t.c()}function Xt(t,e){t&&t.l(e)}function Et(t,e,n){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,n),R(()=>{const u=t.$$.on_mount.map(tt).filter(I);t.$$.on_destroy?t.$$.on_destroy.push(...u):w(u),t.$$.on_mount=[]}),o.forEach(R)}function At(t,e){const n=t.$$;n.fragment!==null&&(Y(n.after_update),w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ct(t,e){t.$$.dirty[0]===-1&&(et.push(t),nt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Yt(t,e,n,s,o,u,l=null,r=[-1]){const i=Z;q(t);const a=t.$$={fragment:null,ctx:[],props:u,update:v,not_equal:o,bound:O(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:O(),dirty:r,skip_bound:!1,root:e.target||i.$$.root};l&&l(a.root);let _=!1;if(a.ctx=n?n(t,e.props||{},(c,m,...$)=>{const f=$.length?$[0]:m;return a.ctx&&o(a.ctx[c],a.ctx[c]=f)&&(!a.skip_bound&&a.bound[c]&&a.bound[c](f),_&&Ct(t,c)),m}):[],a.update(),_=!0,w(a.before_update),a.fragment=s?s(a.ctx):!1,e.target){if(e.hydrate){st();const c=dt(e.target);a.fragment&&a.fragment.l(c),c.forEach(F)}else a.fragment&&a.fragment.c();e.intro&&bt(t.$$.fragment),Et(t,e.target,e.anchor),lt(),Q()}q(i)}class Zt{constructor(){B(this,"$$");B(this,"$$set")}$destroy(){At(this,1),this.$destroy=v}$on(e,n){if(!I(n))return v;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const o=s.indexOf(n);o!==-1&&s.splice(o,1)}}$set(e){this.$$set&&!X(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const St="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(St);export{Lt as A,Mt as B,Pt as C,Ut as D,Kt as E,Zt as S,Jt as a,M as b,zt as c,dt as d,U as e,pt as f,F as g,Tt as h,Yt as i,Bt as j,_t as k,kt as l,It as m,Gt as n,Ot as o,Ft as p,Wt as q,Vt as r,Rt as s,bt as t,Qt as u,Xt as v,Et as w,At as x,qt as y,Ht as z};
