var Se=Object.defineProperty;var Me=(t,e,n)=>e in t?Se(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ne=(t,e,n)=>(Me(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function k(){}function Le(t){return t()}function ce(){return Object.create(null)}function J(t){t.forEach(Le)}function ke(t){return typeof t=="function"}function z(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let K;function ie(t,e){return t===e?!0:(K||(K=document.createElement("a")),K.href=e,t===K.href)}function je(t){return Object.keys(t).length===0}function g(t,e){t.appendChild(e)}function L(t,e,n){t.insertBefore(e,n||null)}function A(t){t.parentNode&&t.parentNode.removeChild(t)}function B(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function H(t){return document.createTextNode(t)}function x(){return H(" ")}function G(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function d(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Te(t){return Array.from(t.childNodes)}function D(t,e){e=""+e,t.data!==e&&(t.data=e)}let se;function Z(t){se=t}const W=[],ue=[];let R=[];const de=[],Ce=Promise.resolve();let re=!1;function Qe(){re||(re=!0,Ce.then($e))}function Y(t){R.push(t)}const le=new Set;let N=0;function $e(){if(N!==0)return;const t=se;do{try{for(;N<W.length;){const e=W[N];N++,Z(e),He(e.$$)}}catch(e){throw W.length=0,N=0,e}for(Z(null),W.length=0,N=0;ue.length;)ue.pop()();for(let e=0;e<R.length;e+=1){const n=R[e];le.has(n)||(le.add(n),n())}R.length=0}while(W.length);for(;de.length;)de.pop()();re=!1,le.clear(),Z(t)}function He(t){if(t.fragment!==null){t.update(),J(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Y)}}function Ee(t){const e=[],n=[];R.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),R=e}const U=new Set;let Oe;function j(t,e){t&&t.i&&(U.delete(t),t.i(e))}function T(t,e,n,l){if(t&&t.o){if(U.has(t))return;U.add(t),Oe.c.push(()=>{U.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function S(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function O(t){t&&t.c()}function C(t,e,n){const{fragment:l,after_update:r}=t.$$;l&&l.m(e,n),Y(()=>{const i=t.$$.on_mount.map(Le).filter(ke);t.$$.on_destroy?t.$$.on_destroy.push(...i):J(i),t.$$.on_mount=[]}),r.forEach(Y)}function Q(t,e){const n=t.$$;n.fragment!==null&&(Ee(n.after_update),J(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ze(t,e){t.$$.dirty[0]===-1&&(W.push(t),Qe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(t,e,n,l,r,i,s=null,a=[-1]){const o=se;Z(t);const m=t.$$={fragment:null,ctx:[],props:i,update:k,not_equal:r,bound:ce(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:ce(),dirty:a,skip_bound:!1,root:e.target||o.$$.root};s&&s(m.root);let c=!1;if(m.ctx=n?n(t,e.props||{},(u,_,...h)=>{const v=h.length?h[0]:_;return m.ctx&&r(m.ctx[u],m.ctx[u]=v)&&(!m.skip_bound&&m.bound[u]&&m.bound[u](v),c&&ze(t,u)),_}):[],m.update(),c=!0,J(m.before_update),m.fragment=l?l(m.ctx):!1,e.target){if(e.hydrate){const u=Te(e.target);m.fragment&&m.fragment.l(u),u.forEach(A)}else m.fragment&&m.fragment.c();e.intro&&j(t.$$.fragment),C(t,e.target,e.anchor),$e()}Z(o)}class V{constructor(){ne(this,"$$");ne(this,"$$set")}$destroy(){Q(this,1),this.$destroy=k}$on(e,n){if(!ke(n))return k;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const r=l.indexOf(n);r!==-1&&l.splice(r,1)}}$set(e){this.$$set&&!je(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ie="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ie);function Ve(t){let e;return{c(){e=p("section"),e.innerHTML=`<h3 class="text-title-lg font-paragraph tracking-widest"><i>Hi.</i></h3> <p class="text-title-md font-semibold font-paragraph leading-tight mt-5 mb-20">I&#39;m a full stack web developer with an extensive background in AEC
        and Software and a passion for creating functional,
        engaging web applications with a keen eye for clean and efficient 
        code.</p>`,d(e,"id","about"),d(e,"class","text-gray-light mx-margin my-20 svelte-c1kyx4")},m(n,l){L(n,e,l)},p:k,i:k,o:k,d(n){n&&A(e)}}}class Ge extends V{constructor(e){super(),I(this,e,null,Ve,z,{})}}function ge(t){let e,n,l,r;return{c(){e=p("button"),d(e,"class",n="bg-gray-dark top-0 left-0 right-0 bottom-0 fixed duration-500 opacity-50 "+t[2])},m(i,s){L(i,e,s),l||(r=G(e,"click",t[3]),l=!0)},p(i,s){s&4&&n!==(n="bg-gray-dark top-0 left-0 right-0 bottom-0 fixed duration-500 opacity-50 "+i[2])&&d(e,"class",n)},d(i){i&&A(e),l=!1,r()}}}function Ne(t){let e,n,l,r,i,s,a,o,m,c,u,_,h,v,f,b,w,P,y,E,oe,ee,F,X,ae,te,fe,$=t[2]&&ge(t);return{c(){e=p("nav"),n=p("div"),l=p("button"),l.innerHTML='<div class="block bg-gray-dark h-1 w-1/2"></div> <div class="block bg-gray-dark h-1 w-1/2"></div>',r=x(),i=p("div"),s=p("div"),o=x(),m=p("div"),c=p("ul"),u=p("span"),u.textContent="Menu",_=x(),h=p("li"),v=p("a"),v.innerHTML='<span class="text-gray-dark pr-4 font-heading text-title-sm">Home</span>',f=x(),b=p("li"),w=p("a"),w.innerHTML='<span class="text-gray-dark pr-4 font-heading text-title-sm">About</span>',P=x(),y=p("li"),E=p("a"),E.innerHTML='<span class="text-gray-dark pr-4 font-heading text-title-sm">Projects</span>',oe=x(),ee=p("li"),F=p("a"),F.innerHTML='<span class="text-gray-dark pr-4 font-heading text-title-sm">Contact</span>',ae=x(),$&&$.c(),d(l,"class","bg-gray-light fixed flex flex-col py-[18px] right-margin w-12 h-12 items-center justify-between rounded-full z-50"),d(s,"id","menu"),d(s,"class",a="bg-gray-light "+t[0]+" "+t[1]+" rounded-3xl absolute top-0 right-0 z-30 svelte-2gnmmr"),d(u,"class","text-gray font-heading text-title-sm mb-2"),d(v,"href","#home"),d(w,"href","#about"),d(E,"href","#projects"),d(F,"href","#footer"),d(c,"class","flex flex-col justify-between px-10 py-4 z-40 leading-tight"),d(m,"class",X="flex flex-col justify-between "+t[2]),d(i,"class","px-1 py-3 rounded-3xl"),d(n,"class","top-margin right-margin z-10 fixed flex items-start justify-end")},m(M,q){L(M,e,q),g(e,n),g(n,l),g(n,r),g(n,i),g(i,s),g(i,o),g(i,m),g(m,c),g(c,u),g(c,_),g(c,h),g(h,v),g(c,f),g(c,b),g(b,w),g(c,P),g(c,y),g(y,E),g(c,oe),g(c,ee),g(ee,F),g(e,ae),$&&$.m(e,null),te||(fe=[G(l,"click",t[3]),G(v,"click",t[3]),G(w,"click",t[3]),G(E,"click",t[3]),G(F,"click",t[3])],te=!0)},p(M,[q]){q&3&&a!==(a="bg-gray-light "+M[0]+" "+M[1]+" rounded-3xl absolute top-0 right-0 z-30 svelte-2gnmmr")&&d(s,"class",a),q&4&&X!==(X="flex flex-col justify-between "+M[2])&&d(m,"class",X),M[2]?$?$.p(M,q):($=ge(M),$.c(),$.m(e,null)):$&&($.d(1),$=null)},i:k,o:k,d(M){M&&A(e),$&&$.d(),te=!1,J(fe)}}}function We(t,e,n){let l="h-12",r="w-12",i="invisible";function s(){i==="invisible"?n(2,i="visible"):n(2,i="invisible"),l==="h-12"?(n(0,l="h-full"),n(1,r="w-full")):(n(0,l="h-12"),n(1,r="w-12"))}return[l,r,i,s]}class Be extends V{constructor(e){super(),I(this,e,We,Ne,z,{})}}function he(t,e,n){const l=t.slice();return l[1]=e[n],l}function me(t,e,n){const l=t.slice();return l[1]=e[n],l}function pe(t,e,n){const l=t.slice();return l[1]=e[n],l}function _e(t){let e,n=t[1]+"",l,r;return{c(){e=p("li"),l=H(n),r=H(`  -  
            `),d(e,"class","font-paragraph font-semibold text-gray-dark text-title-sm md:text-title-md")},m(i,s){L(i,e,s),g(e,l),g(e,r)},p(i,s){s&1&&n!==(n=i[1]+"")&&D(l,n)},d(i){i&&A(e)}}}function be(t){let e,n=t[1]+"",l,r;return{c(){e=p("li"),l=H(n),r=H(`  -  
            `),d(e,"class","font-paragraph font-semibold text-gray-dark text-title-sm md:text-title-md")},m(i,s){L(i,e,s),g(e,l),g(e,r)},p(i,s){s&1&&n!==(n=i[1]+"")&&D(l,n)},d(i){i&&A(e)}}}function we(t){let e,n=t[1]+"",l,r;return{c(){e=p("li"),l=H(n),r=H(`  -  
            `),d(e,"class","font-paragraph font-semibold text-gray-dark text-title-sm md:text-title-md")},m(i,s){L(i,e,s),g(e,l),g(e,r)},p(i,s){s&1&&n!==(n=i[1]+"")&&D(l,n)},d(i){i&&A(e)}}}function Re(t){let e,n,l,r,i,s,a=S(t[0]),o=[];for(let h=0;h<a.length;h+=1)o[h]=_e(pe(t,a,h));let m=S(t[0]),c=[];for(let h=0;h<m.length;h+=1)c[h]=be(me(t,m,h));let u=S(t[0]),_=[];for(let h=0;h<u.length;h+=1)_[h]=we(he(t,u,h));return{c(){e=p("div"),n=p("ul");for(let h=0;h<o.length;h+=1)o[h].c();l=x(),r=p("ul");for(let h=0;h<c.length;h+=1)c[h].c();i=x(),s=p("ul");for(let h=0;h<_.length;h+=1)_[h].c();d(n,"class","flex items-center justify-center animate-infinite-scroll"),d(r,"class","flex items-center justify-center animate-infinite-scroll"),d(r,"aria-hidden","true"),d(s,"class","flex items-center justify-center animate-infinite-scroll"),d(s,"aria-hidden","true"),d(e,"class","max-w-[100vw] overflow-hidden flex flex-nowrap bg-green py-4 my-20")},m(h,v){L(h,e,v),g(e,n);for(let f=0;f<o.length;f+=1)o[f]&&o[f].m(n,null);g(e,l),g(e,r);for(let f=0;f<c.length;f+=1)c[f]&&c[f].m(r,null);g(e,i),g(e,s);for(let f=0;f<_.length;f+=1)_[f]&&_[f].m(s,null)},p(h,[v]){if(v&1){a=S(h[0]);let f;for(f=0;f<a.length;f+=1){const b=pe(h,a,f);o[f]?o[f].p(b,v):(o[f]=_e(b),o[f].c(),o[f].m(n,null))}for(;f<o.length;f+=1)o[f].d(1);o.length=a.length}if(v&1){m=S(h[0]);let f;for(f=0;f<m.length;f+=1){const b=me(h,m,f);c[f]?c[f].p(b,v):(c[f]=be(b),c[f].c(),c[f].m(r,null))}for(;f<c.length;f+=1)c[f].d(1);c.length=m.length}if(v&1){u=S(h[0]);let f;for(f=0;f<u.length;f+=1){const b=he(h,u,f);_[f]?_[f].p(b,v):(_[f]=we(b),_[f].c(),_[f].m(s,null))}for(;f<_.length;f+=1)_[f].d(1);_.length=u.length}},i:k,o:k,d(h){h&&A(e),B(o,h),B(c,h),B(_,h)}}}function Fe(t,e,n){let{tags:l}=e;return t.$$set=r=>{"tags"in r&&n(0,l=r.tags)},[l]}class Pe extends V{constructor(e){super(),I(this,e,Fe,Re,z,{tags:0})}}const qe="data:image/svg+xml,%3csvg%20fill='%23f2f2f2'%20height='200px'%20width='200px'%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2075.294%2075.294'%20xml:space='preserve'%20stroke='%23f2f2f2'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%3e%3c/g%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/g%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cg%3e%3cpath%20d='M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9%20c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z%20M61.603,18.089L37.647,33.523L13.691,18.089%20H61.603z%20M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065%20c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016%20c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102%20c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069%20c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Ze="/assets/github-coloured-XsAXwpIH.png",Je="/assets/LI-coloured-f4T5qprX.png";function ve(t,e,n){const l=t.slice();return l[1]=e[n],l}function ye(t){let e,n,l;return{c(){e=p("a"),n=p("img"),ie(n.src,l=t[1].src)||d(n,"src",l),d(n,"alt",t[1].alt),d(n,"class","hover:brightness-75 hover:scale-95 duration-500"),d(e,"href",t[1].link),d(e,"target","_blank"),d(e,"class","flex justify-center font-paragraph font-semibold text-gray-light text-title-sm w-1/4 max-w-32 px-2 py-1 mr-2 bg-gray-dark ")},m(r,i){L(r,e,i),g(e,n)},p:k,d(r){r&&A(e)}}}function De(t){let e,n,l,r,i;n=new Pe({props:{tags:Array(10).fill("LET'S CHAT")}});let s=S(t[0]),a=[];for(let o=0;o<s.length;o+=1)a[o]=ye(ve(t,s,o));return{c(){e=p("footer"),O(n.$$.fragment),l=x(),r=p("div");for(let o=0;o<a.length;o+=1)a[o].c();d(r,"class","flex flex-row justify-around my-20"),d(e,"id","footer")},m(o,m){L(o,e,m),C(n,e,null),g(e,l),g(e,r);for(let c=0;c<a.length;c+=1)a[c]&&a[c].m(r,null);i=!0},p(o,[m]){if(m&1){s=S(o[0]);let c;for(c=0;c<s.length;c+=1){const u=ve(o,s,c);a[c]?a[c].p(u,m):(a[c]=ye(u),a[c].c(),a[c].m(r,null))}for(;c<a.length;c+=1)a[c].d(1);a.length=s.length}},i(o){i||(j(n.$$.fragment,o),i=!0)},o(o){T(n.$$.fragment,o),i=!1},d(o){o&&A(e),Q(n),B(a,o)}}}function Xe(t){return[[{link:"mailto:myles@mylestaylor.dev",src:qe,alt:"Email"},{link:"https://github.com/MiloMT",src:Ze,alt:"Github"},{link:"https://www.linkedin.com/in/myles-t-962aa41aa/",src:Je,alt:"LinkedIn"}]]}class Ke extends V{constructor(e){super(),I(this,e,Xe,De,z,{})}}const Ue=["HTML","CSS","JAVASCRIPT","PYTHON","FLASK","PSQL","MONGODB","REACT","SVELTE"],Ye="data:image/svg+xml,%3csvg%20width='323.3'%20height='72.501'%20viewBox='0%200%20323.3%2072.501'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='svgGroup'%20stroke-linecap='round'%20fill-rule='evenodd'%20font-size='9pt'%20stroke='%23f2f2f2'%20stroke-width='0mm'%20fill='%23f2f2f2'%20style='stroke:%23f2f2f2;stroke-width:0mm;fill:%23f2f2f2'%3e%3cpath%20d='M%2073.2%2071.601%20L%2053.7%2071.601%20L%2053.7%2034.201%20L%2041.8%2060.501%20L%2031.4%2060.501%20L%2019.5%2034.201%20L%2019.5%2071.601%20L%200%2071.601%20L%200%200.601%20L%2021.3%200.601%20L%2036.6%2034.001%20L%2052%200.601%20L%2073.2%200.601%20L%2073.2%2071.601%20Z%20M%20230%2054.601%20L%20261.1%2054.601%20L%20261.1%2071.601%20L%20210.5%2071.601%20L%20210.5%200.601%20L%20260.2%200.601%20L%20260.2%2017.601%20L%20230%2017.601%20L%20230%2027.601%20L%20255.8%2027.601%20L%20255.8%2043.401%20L%20230%2043.401%20L%20230%2054.601%20Z%20M%20321.6%207.701%20L%20313.2%2023.801%20L%20311.5%2022.801%20A%2029.72%2029.72%200%200%200%20310.201%2022.084%20Q%20309.519%2021.727%20308.719%2021.344%20A%2071.087%2071.087%200%200%200%20307%2020.551%20A%2048.546%2048.546%200%200%200%20303.305%2019.086%20A%2057.916%2057.916%200%200%200%20300.9%2018.301%20A%2022.885%2022.885%200%200%200%20295.805%2017.348%20A%2020.733%2020.733%200%200%200%20294.4%2017.301%20A%2012.857%2012.857%200%200%200%20292.719%2017.404%20Q%20291.851%2017.519%20291.125%2017.761%20A%206.315%206.315%200%200%200%20290.3%2018.101%20A%202.931%202.931%200%200%200%20289.294%2018.893%20Q%20288.844%2019.461%20288.735%2020.264%20A%203.986%203.986%200%200%200%20288.7%2020.801%20A%203.27%203.27%200%200%200%20289.839%2023.34%20A%204.568%204.568%200%200%200%20290.3%2023.701%20Q%20291.9%2024.801%20294.85%2025.701%20A%20500.671%20500.671%200%200%201%20297.224%2026.432%20Q%20298.281%2026.76%20299.45%2027.127%20A%20957.826%20957.826%200%200%201%20301.9%2027.901%20A%2074.731%2074.731%200%200%201%20307.33%2029.765%20Q%20310.6%2031.038%20313.3%2032.501%20A%2021.836%2021.836%200%200%201%20317.751%2035.646%20A%2018.016%2018.016%200%200%201%20320.7%2039.151%20A%2015.006%2015.006%200%200%201%20322.522%2043.365%20Q%20323.3%2046.237%20323.3%2049.901%20A%2029.609%2029.609%200%200%201%20322.949%2054.588%20Q%20322.402%2058%20321%2060.651%20Q%20318.7%2065.001%20314.8%2067.601%20Q%20310.9%2070.201%20306.1%2071.351%20Q%20301.3%2072.501%20296.3%2072.501%20Q%20291.2%2072.501%20285.65%2071.451%20Q%20280.1%2070.401%20274.9%2068.551%20A%2059.457%2059.457%200%200%201%20268.175%2065.7%20A%2050.972%2050.972%200%200%201%20265.4%2064.201%20L%20273.8%2047.101%20L%20275.8%2048.301%20A%2034.546%2034.546%200%200%200%20277.329%2049.161%20Q%20278.934%2050.016%20281.1%2051.001%20A%2051.67%2051.67%200%200%200%20285.283%2052.676%20A%2065.004%2065.004%200%200%200%20288.45%2053.701%20Q%20292.5%2054.901%20296.6%2054.901%20Q%20299.8%2054.901%20301.05%2054.051%20A%203.133%203.133%200%200%200%20301.787%2053.369%20A%202.509%202.509%200%200%200%20302.3%2051.801%20A%203.286%203.286%200%200%200%20301.01%2049.142%20A%205.384%205.384%200%200%200%20300.1%2048.551%20Q%20298.505%2047.717%20296.201%2046.936%20A%2049.542%2049.542%200%200%200%20294.35%2046.351%20Q%20290.8%2045.301%20286.5%2043.901%20A%2059.125%2059.125%200%200%201%20282.159%2042.248%20Q%20278.8%2040.807%20276.3%2039.151%20A%2019.534%2019.534%200%200%201%20272.918%2036.349%20A%2015.338%2015.338%200%200%201%20270.4%2032.851%20A%2016.105%2016.105%200%200%201%20268.917%2028.535%20Q%20268.539%2026.635%20268.504%2024.455%20A%2027.911%2027.911%200%200%201%20268.5%2024.001%20A%2027.896%2027.896%200%200%201%20269.111%2018.011%20A%2019.909%2019.909%200%200%201%20272.2%2010.801%20Q%20275.9%205.501%20281.95%202.751%20A%2031.15%2031.15%200%200%201%20294.945%200.001%20A%2035.575%2035.575%200%200%201%20295%200.001%20Q%20300.2%200.001%20305.05%201.251%20A%2066.491%2066.491%200%200%201%20312.262%203.539%20A%2058.963%2058.963%200%200%201%20314.15%204.301%20A%20162.284%20162.284%200%200%201%20317.668%205.837%20Q%20319.267%206.56%20320.679%207.247%20A%2093.512%2093.512%200%200%201%20321.6%207.701%20Z%20M%2078.7%200.601%20L%2099.8%200.601%20L%20112.5%2029.601%20L%20125.5%200.601%20L%20146.7%200.601%20L%20122.2%2048.101%20L%20122.2%2071.601%20L%20102.8%2071.601%20L%20102.8%2047.901%20L%2078.7%200.601%20Z%20M%20203.7%2071.601%20L%20152%2071.601%20L%20152%200.601%20L%20171.5%200.601%20L%20171.5%2054.601%20L%20203.7%2054.601%20L%20203.7%2071.601%20Z'%20vector-effect='non-scaling-stroke'/%3e%3c/g%3e%3c/svg%3e",e0="/assets/subheader-oQwuuNk1.svg";function t0(t){let e,n,l,r,i,s;return Y(t[1]),l=new Pe({props:{tags:Ue}}),{c(){e=p("header"),e.innerHTML=`<div class="w-full"><div class="flex flex-col items-start lg:flex-row w-full mb-4"><img src="${Ye}" alt="Header" class="w-full lg:w-full mb-4"/></div></div> <img src="${e0}" alt="Header" class="w-full"/>`,n=x(),O(l.$$.fragment),d(e,"id","header"),d(e,"class","max-w-full flex flex-col text-center items-center mx-margin my-20")},m(a,o){L(a,e,o),L(a,n,o),C(l,a,o),r=!0,i||(s=G(window,"resize",t[1]),i=!0)},p:k,i(a){r||(j(l.$$.fragment,a),r=!0)},o(a){T(l.$$.fragment,a),r=!1},d(a){a&&(A(e),A(n)),Q(l,a),i=!1,s()}}}function n0(t,e,n){let l;function r(){n(0,l=window.innerWidth)}return n(0,l=0),[l,r]}class l0 extends V{constructor(e){super(),I(this,e,n0,t0,z,{})}}function xe(t,e,n){const l=t.slice();return l[5]=e[n],l}function Ae(t){let e,n=t[5]+"",l,r;return{c(){e=p("li"),l=H(n),r=x(),d(e,"class","flex justify-center font-paragraph font-semibold text-gray-light border-solid border-green border-2 rounded-lg w-fit px-2 py-1 mr-2 hover:px-4 duration-500 bg-gray-dark")},m(i,s){L(i,e,s),g(e,l),g(e,r)},p(i,s){s&16&&n!==(n=i[5]+"")&&D(l,n)},d(i){i&&A(e)}}}function i0(t){let e,n,l,r,i,s,a,o,m,c,u,_,h,v,f=S(t[4]),b=[];for(let w=0;w<f.length;w+=1)b[w]=Ae(xe(t,f,w));return{c(){e=p("li"),n=p("a"),l=p("div"),r=p("div"),i=p("img"),a=x(),o=p("div"),o.innerHTML="",m=x(),c=p("div"),u=p("h6"),_=H(t[3]),h=x(),v=p("ul");for(let w=0;w<b.length;w+=1)b[w].c();ie(i.src,s=t[1])||d(i,"src",s),d(i,"alt",t[2]),d(i,"class","rounded-2xl group-hover:rounded-[3rem] group-hover:brightness-50 duration-500 brightness-110"),d(o,"class","bg-gray-dark z-[1] w-full h-1/2 md:h-1/4 bottom-0 absolute opacity-70 rounded-b-2xl group-hover:rounded-b-[3rem] duration-500"),d(u,"class","font-heading font-semibold text-title-sm text-gray-light mt-6 group-hover:text-green duration-500 z-[5]"),d(v,"class","flex flex-row flex-wrap mt-4"),d(c,"class","absolute flex flex-col z-[5] bottom-5 left-5"),d(r,"class","relative"),d(l,"class","flex flex-row"),d(n,"href",t[0]),d(n,"target","_blank"),d(e,"class","group w-full md:w-[49%] mb-margin")},m(w,P){L(w,e,P),g(e,n),g(n,l),g(l,r),g(r,i),g(r,a),g(r,o),g(r,m),g(r,c),g(c,u),g(u,_),g(c,h),g(c,v);for(let y=0;y<b.length;y+=1)b[y]&&b[y].m(v,null)},p(w,[P]){if(P&2&&!ie(i.src,s=w[1])&&d(i,"src",s),P&4&&d(i,"alt",w[2]),P&8&&D(_,w[3]),P&16){f=S(w[4]);let y;for(y=0;y<f.length;y+=1){const E=xe(w,f,y);b[y]?b[y].p(E,P):(b[y]=Ae(E),b[y].c(),b[y].m(v,null))}for(;y<b.length;y+=1)b[y].d(1);b.length=f.length}P&1&&d(n,"href",w[0])},i:k,o:k,d(w){w&&A(e),B(b,w)}}}function r0(t,e,n){let{link:l}=e,{imagePath:r}=e,{imageAlt:i}=e,{name:s}=e,{tags:a}=e;return t.$$set=o=>{"link"in o&&n(0,l=o.link),"imagePath"in o&&n(1,r=o.imagePath),"imageAlt"in o&&n(2,i=o.imageAlt),"name"in o&&n(3,s=o.name),"tags"in o&&n(4,a=o.tags)},[l,r,i,s,a]}class s0 extends V{constructor(e){super(),I(this,e,r0,i0,z,{link:0,imagePath:1,imageAlt:2,name:3,tags:4})}}const o0=[{link:"https://milomt.github.io/",imagePath:"/src/assets/projects/portfolio_v3.png",imageAlt:"Portfolio v3",name:"Portfolio Website V3.0",desc:"Testing the waters with Vite / Svelte, in combination with Typescript and Tailwind. This is mostly a reproduction of the most recent version of the site within the new frameworks. Focusing on component modularization, open styling through Tailwind and effective project handling.",tags:["Svelte","Vite","Typescript","Tailwind"]},{link:"https://github.com/MiloMT/WebDev-Pathway-Assistant",imagePath:"/src/assets/projects/webdev_pathway_assistant.png",imageAlt:"Webdev Pathway Assistant API",name:"Webdev Pathway Assistant API",desc:"Webdev Pathway Assistant API is an API using both Flask and PostgreSQL (with SQL Alchemy as the ORM) developed as a assessment for the coder academy web developer course. It features interacting tables through join table setups, with validation and sanitisation through marshmallow and security / authentication through JWT token generation and use.",tags:["Python","Flask","PostgreSQL"]},{link:"https://milomt.github.io/",imagePath:"/src/assets/projects/portfolio_v2.png",imageAlt:"Portfolio v2",name:"Portfolio Website V2.0",desc:"Second take of my portfolio website without having to meet assessment requirements for my course. Using HTML, CSS and JS without any frameworks to deepen my understanding on these languages. Some features were imported from other repo's. Attribution is contained within the website code.",tags:["HTML","CSS","SCSS","Javascript"]},{link:"https://github.com/MiloMT/PyPassGen",imagePath:"/src/assets/projects/pypassgen.png",imageAlt:"PyPassGen",name:"PyPassGen",desc:"PyPassGen is a password generator that generates passwords based on set of user provided arguments and has the ability to store and encrypt / decrypt passwords to a computer.",tags:["Python","Bash"]},{link:"https://portfolio-site-nine-dusky.vercel.app/",imagePath:"/src/assets/projects/portfolio_v1.png",imageAlt:"Portfolio v1",name:"Portfolio Website V1.0",desc:"Older portfolio website developed for my first assignment in the web developer Coder Academy course. Developed specifically without any frameworks, CSS built from scratch. Contained plenty of filler for sections that I did not intend to continue with.",tags:["HTML","CSS","SCSS"]}];function a0(t,e,n){const l=t.slice();return l[0]=e[n],l}function f0(t){let e,n;return e=new s0({props:{link:t[0].link,imagePath:t[0].imagePath,imageAlt:t[0].imageAlt,name:t[0].name,tags:t[0].tags}}),{c(){O(e.$$.fragment)},m(l,r){C(e,l,r),n=!0},p:k,i(l){n||(j(e.$$.fragment,l),n=!0)},o(l){T(e.$$.fragment,l),n=!1},d(l){Q(e,l)}}}function c0(t){let e,n,l,r=S(o0),i=[];for(let s=0;s<r.length;s+=1)i[s]=f0(a0(t,r,s));return{c(){e=p("section"),n=p("ul");for(let s=0;s<i.length;s+=1)i[s].c();d(n,"id","projects"),d(n,"class","flex flex-row flex-wrap justify-between mx-margin")},m(s,a){L(s,e,a),g(e,n);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(n,null);l=!0},p:k,i(s){if(!l){for(let a=0;a<r.length;a+=1)j(i[a]);l=!0}},o(s){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)T(i[a]);l=!1},d(s){s&&A(e),B(i,s)}}}class u0 extends V{constructor(e){super(),I(this,e,null,c0,z,{})}}function d0(t){let e,n,l,r,i,s,a,o,m,c;return e=new Be({}),l=new l0({}),i=new Ge({}),a=new u0({}),m=new Ke({}),{c(){O(e.$$.fragment),n=x(),O(l.$$.fragment),r=x(),O(i.$$.fragment),s=x(),O(a.$$.fragment),o=x(),O(m.$$.fragment)},m(u,_){C(e,u,_),L(u,n,_),C(l,u,_),L(u,r,_),C(i,u,_),L(u,s,_),C(a,u,_),L(u,o,_),C(m,u,_),c=!0},p:k,i(u){c||(j(e.$$.fragment,u),j(l.$$.fragment,u),j(i.$$.fragment,u),j(a.$$.fragment,u),j(m.$$.fragment,u),c=!0)},o(u){T(e.$$.fragment,u),T(l.$$.fragment,u),T(i.$$.fragment,u),T(a.$$.fragment,u),T(m.$$.fragment,u),c=!1},d(u){u&&(A(n),A(r),A(s),A(o)),Q(e,u),Q(l,u),Q(i,u),Q(a,u),Q(m,u)}}}class g0 extends V{constructor(e){super(),I(this,e,null,d0,z,{})}}new g0({target:document.getElementById("app")});
