var app=function(){"use strict";function e(){}const t=e=>e;function n(e){return e()}function a(){return Object.create(null)}function i(e){e.forEach(n)}function r(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function o(t,...n){if(null==t)return e;const a=t.subscribe(...n);return a.unsubscribe?()=>a.unsubscribe():a}function c(e){let t;return o(e,(e=>t=e))(),t}function l(e,t,n){e.$$.on_destroy.push(o(t,n))}function u(e,t,n=t){return e.set(n),t}const d="undefined"!=typeof window;let m=d?()=>window.performance.now():()=>Date.now(),f=d?e=>requestAnimationFrame(e):e;const p=new Set;function h(e){p.forEach((t=>{t.c(e)||(p.delete(t),t.f())})),0!==p.size&&f(h)}function g(e){let t;return 0===p.size&&f(h),{promise:new Promise((n=>{p.add(t={c:e,f:n})})),abort(){p.delete(t)}}}function b(e,t){e.appendChild(t)}function v(e,t,n){e.insertBefore(t,n||null)}function $(e){e.parentNode.removeChild(e)}function y(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function w(e){return document.createElement(e)}function x(e){return document.createTextNode(e)}function _(){return x(" ")}function q(){return x("")}function A(e,t,n,a){return e.addEventListener(t,n,a),()=>e.removeEventListener(t,n,a)}function E(e){return function(t){return t.preventDefault(),e.call(this,t)}}function C(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function S(e){return""===e?null:+e}function k(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function I(e,t){e.value=null==t?"":t}function L(e,t,n,a){e.style.setProperty(t,n,a?"important":"")}const j=new Set;let M,P=0;function R(e,t,n,a,i,r,s,o=0){const c=16.666/a;let l="{\n";for(let e=0;e<=1;e+=c){const a=t+(n-t)*r(e);l+=100*e+`%{${s(a,1-a)}}\n`}const u=l+`100% {${s(n,1-n)}}\n}`,d=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(u)}_${o}`,m=e.ownerDocument;j.add(m);const f=m.__svelte_stylesheet||(m.__svelte_stylesheet=m.head.appendChild(w("style")).sheet),p=m.__svelte_rules||(m.__svelte_rules={});p[d]||(p[d]=!0,f.insertRule(`@keyframes ${d} ${u}`,f.cssRules.length));const h=e.style.animation||"";return e.style.animation=`${h?h+", ":""}${d} ${a}ms linear ${i}ms 1 both`,P+=1,d}function T(e,t){const n=(e.style.animation||"").split(", "),a=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),i=n.length-a.length;i&&(e.style.animation=a.join(", "),P-=i,P||f((()=>{P||(j.forEach((e=>{const t=e.__svelte_stylesheet;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.__svelte_rules={}})),j.clear())})))}function N(e){M=e}function V(e){(function(){if(!M)throw new Error("Function called outside component initialization");return M})().$$.on_mount.push(e)}const B=[],D=[],O=[],z=[],Q=Promise.resolve();let F=!1;function H(e){O.push(e)}let G=!1;const U=new Set;function Y(){if(!G){G=!0;do{for(let e=0;e<B.length;e+=1){const t=B[e];N(t),Z(t.$$)}for(N(null),B.length=0;D.length;)D.pop()();for(let e=0;e<O.length;e+=1){const t=O[e];U.has(t)||(U.add(t),t())}O.length=0}while(B.length);for(;z.length;)z.pop()();F=!1,G=!1,U.clear()}}function Z(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(H)}}let J;function K(){return J||(J=Promise.resolve(),J.then((()=>{J=null}))),J}function W(e,t,n){e.dispatchEvent(function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(`${t?"intro":"outro"}${n}`))}const X=new Set;let ee;function te(){ee={r:0,c:[],p:ee}}function ne(){ee.r||i(ee.c),ee=ee.p}function ae(e,t){e&&e.i&&(X.delete(e),e.i(t))}function ie(e,t,n,a){if(e&&e.o){if(X.has(e))return;X.add(e),ee.c.push((()=>{X.delete(e),a&&(n&&e.d(1),a())})),e.o(t)}}const re={duration:0};function se(n,a,i){let s,o,c=a(n,i),l=!1,u=0;function d(){s&&T(n,s)}function f(){const{delay:a=0,duration:i=300,easing:r=t,tick:f=e,css:p}=c||re;p&&(s=R(n,0,1,i,a,r,p,u++)),f(0,1);const h=m()+a,b=h+i;o&&o.abort(),l=!0,H((()=>W(n,!0,"start"))),o=g((e=>{if(l){if(e>=b)return f(1,0),W(n,!0,"end"),d(),l=!1;if(e>=h){const t=r((e-h)/i);f(t,1-t)}}return l}))}let p=!1;return{start(){p||(T(n),r(c)?(c=c(),K().then(f)):f())},invalidate(){p=!1},end(){l&&(d(),l=!1)}}}function oe(n,a,s){let o,c=a(n,s),l=!0;const u=ee;function d(){const{delay:a=0,duration:r=300,easing:s=t,tick:d=e,css:f}=c||re;f&&(o=R(n,1,0,r,a,s,f));const p=m()+a,h=p+r;H((()=>W(n,!1,"start"))),g((e=>{if(l){if(e>=h)return d(0,1),W(n,!1,"end"),--u.r||i(u.c),!1;if(e>=p){const t=s((e-p)/r);d(1-t,t)}}return l}))}return u.r+=1,r(c)?K().then((()=>{c=c(),d()})):d(),{end(e){e&&c.tick&&c.tick(1,0),l&&(o&&T(n,o),l=!1)}}}function ce(e){e&&e.c()}function le(e,t,a){const{fragment:s,on_mount:o,on_destroy:c,after_update:l}=e.$$;s&&s.m(t,a),H((()=>{const t=o.map(n).filter(r);c?c.push(...t):i(t),e.$$.on_mount=[]})),l.forEach(H)}function ue(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function de(e,t){-1===e.$$.dirty[0]&&(B.push(e),F||(F=!0,Q.then(Y)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function me(t,n,r,s,o,c,l=[-1]){const u=M;N(t);const d=n.props||{},m=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:o,bound:a(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:a(),dirty:l,skip_bound:!1};let f=!1;if(m.ctx=r?r(t,d,((e,n,...a)=>{const i=a.length?a[0]:n;return m.ctx&&o(m.ctx[e],m.ctx[e]=i)&&(!m.skip_bound&&m.bound[e]&&m.bound[e](i),f&&de(t,e)),n})):[],m.update(),f=!0,i(m.before_update),m.fragment=!!s&&s(m.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);m.fragment&&m.fragment.l(e),e.forEach($)}else m.fragment&&m.fragment.c();n.intro&&ae(t.$$.fragment),le(t,n.target,n.anchor),Y()}N(u)}class fe{$destroy(){ue(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const pe=[];function he(e,t){return{subscribe:ge(e,t).subscribe}}function ge(t,n=e){let a;const i=[];function r(e){if(s(t,e)&&(t=e,a)){const e=!pe.length;for(let e=0;e<i.length;e+=1){const n=i[e];n[1](),pe.push(n,t)}if(e){for(let e=0;e<pe.length;e+=2)pe[e][0](pe[e+1]);pe.length=0}}}return{set:r,update:function(e){r(e(t))},subscribe:function(s,o=e){const c=[s,o];return i.push(c),1===i.length&&(a=n(r)||e),s(t),()=>{const e=i.indexOf(c);-1!==e&&i.splice(e,1),0===i.length&&(a(),a=null)}}}}function be(t,n,a){const s=!Array.isArray(t),c=s?[t]:t,l=n.length<2;return he(a,(t=>{let a=!1;const u=[];let d=0,m=e;const f=()=>{if(d)return;m();const a=n(s?u[0]:u,t);l?t(a):m=r(a)?a:e},p=c.map(((e,t)=>o(e,(e=>{u[t]=e,d&=~(1<<t),a&&f()}),(()=>{d|=1<<t}))));return a=!0,f(),function(){i(p),m()}}))}const ve=e=>Math.floor(Math.random()*e),$e=e=>{if("boolean"==typeof e){if(!0===e)return"True";if(!1===e)return"False"}return e},ye=e=>e>=90?"#008568":e>=80?"#0074C8":e>=70?"#d17216":"#d11616",we=(e,t)=>{let n=((e,t)=>{let n=[];for(;n.length<e;){let e=ve(t);n.includes(e)||n.push(e)}return n})(t,e.length),a=[];return n.forEach((t=>{let n={};n.question=e[t].q,n.followup=e[t].followup;let i=[...e[t].a];n.correctAnswer=e[t].a[0],n.answers=(e=>{for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e})(i),a.push(n)})),a},xe="Creació i posada en marxa de la empresa 2022",_e=[{q:"Quins factors influeixen en la decisió d'ubicació de l'empresa?",a:["Totes són correctes","Zona comercial, afluència de possibles clients i nivell de renda","Accés fàcil a mitjans de comunicació i transport, condicions d'accés i aparcament de vehicles i imatge comercial de la zona"]},{q:"En una societat anònima:",a:["La denominació o denominació social deu ser única. No pot existir altra societat amb la mateixa denominació","Haurà d'estar constituida, com a mínim, per 3 socis","Els socis/sòcies responen dels deutes de la societat amb el seu patrimoni personal"]},{q:"En el Registre Mercantil Central de Madrid:",a:["Se solicita el certificat de no existència d'altra societat registrada amb la mateixa denominació","S'inscriuen totes les societats constituides a Espanya","S'inscriuen les societats constituides a Madrid"]},{q:"Els principals factors per a desenvolupar un negoci d'èxit son:",a:["Innovació i oportunitat de mercat","Baix endeudament i oportunitat de mercat","Baix endeudament i innovació"]},{q:"Vas a començar un negoci de venda a l'engròs de cereals, on ubicaries les instal·lacions?",a:["En un polígon industrial prop a una autovia","A un local cèntric pel que transiten moltes persones","A un centre comercial amb gran concentració de comerços"]},{q:"En una societat limitada:",a:["Es pot tenir un nom comercial diferent a la raó social","La denominació o raó social i el nom comercial han de coincidir","La denominació o raó social i el nom comercial no poden coincidir"]},{q:"En relació a l'IVA:",a:["És un impost que recau sobre els consumidors ","És un impost que recau sobre les empreses","Proporciona ingressos a les empreses que repercuteixen IVA"]},{q:"L'empresari/empresaria individual:",a:["Ha de tributar per IRPF","Ha de tributar per Impost de Societats","Les dues anteriors són correctes"]},{q:"La propietària del local que hem llogat per a oficina es la nostra:",a:["Acreedora","Proveïdora","Deudora"]},{q:"Per la propietat del camió de transport, l'empresa ha de tributar cada any per:",a:["IVTM","IVA","IS"]},{q:"Són tributs locals",a:["IBI, taxa de residus, IAE","IVA, Impost sobre Societats, taxa de residus","IVA, IBI, taxa de residus"]},{q:"Els tràmits legals de constitució",a:["Són obligatòris solament per a les societats","Són obligatòris per a tot el col·lectiu empresarial, tant persones físiques com jurídiques","Són opcionals per a tots"]},{q:"La raó social d'una societat és:",a:["El nom de la societat","El motiu per el que s'ha constituit","La finalitat, que és obtenir beneficis"]},{q:"Una empresa socialment responsable és aquella que:",a:["Realitza actuacions amb caràcter voluntari sobre medi ambient i desenvolupament sostenible","Té responsabilitat ilimitada dels socis i sòcies davant dels deutes de la societat","Compleix les normes i les lleis vigents sobre assumptes mediambientals i desenvolupament sostenible"]},{q:"Assenyala la resposta correcta:",a:["Per a començar un negoci, els soci i sòcies han d'aportar els diners necessaris per a la adquisició dels actius","El capital social aportat pels soci i sòcies coincideix amb el patrimoni de l'empresa al inici de la seua activitat","El capital social aportat sempre coincideix amb el patrimoni de l'empresa"]},{q:"L'empresari/empresària individual respon dels deutes del negoci:",a:["Amb resposabilitat il·limitada","Amb responsabilitat limitada","Respon amb el seu patrimoni personal solament fins a un límit prèviament establert"]},{q:"Qué és el capital social?",a:["Aportació que fan els socis per a la constitució de la societat","És el benefici que obté l'empresa a final d'exercici comptable","És la remuneració que obtenen els treballadors"]},{q:"Les fases de creació d'una empresa són:",a:["Definició del producte, Elecció de la forma jurídica, Determinació de la situació patrimonial, Tràmits de constitució, Contractació de serveis bàsics","Llibre diari, Llibre major, Balanç de situació i Liquidació de l'IVA","Ninguna és correcta"]},{q:"Quina no és una qualitat de l'empresari",a:["Incapacitat per a assumir riscos","Confiança en u mateix","Caràcter negociador, iniciativa, lideratge i dots comunicatives"]},{q:"Marca l'afirmació correcta",a:["Si es tracta d'un empresari individual, la personalitat jurídica de l'empresa és la mateixa que la del seu titular","Si es tracta d'una societat, la seua constitució no li otorga personalitat jurídica"]},{q:"És una contractació de serveis bàsics",a:["Contracte de lloguer del local comercial, contracte de subministrament de llum o contracte d'abertura de compte corrent","Contractació de treballadors","Contractació de l'empresa de logística integral"]},{q:"Quin capital mínim és necessari per a constituir una Societat Anònima?",a:["60.000 euros","No hi ha mínim inicial","3.000 euros"]},{q:"El capital social mínim per a constituir una Societat Limitada és:",a:["3.000 euros","12.000 euros","60.000 euros"]},{q:"Quins requisits ha de complir un negoci al crear-se per a tenir èxit?",a:["Generar necessitat del client, diferenciar-se i aprofitar les oportunitats de mercat","Generar necessitat del client, diferenciar-se i triar un bon nom per a l'empresa","Determinar l'import de capital social, decidir la forma jurídica i triar un nom per a l'empresa"]}],qe=he(_e.length),Ae=ge(10),Ee=ge(!1),Ce=ge(0),Se=ge(!1),ke=he(_e),Ie=he(xe),Le=be(Ee,((e,t)=>{e&&t(we(c(ke),c(Ae)))}),[]),je=ge(0),Me=be([je,Le],(([e,t])=>((e,t)=>{let n=0;return"number"==typeof e&&"number"==typeof t&&(n=Math.round(e/t*100)),n})(e,t.length)),0),Pe=ge([]),Re=()=>{je.set(0),Ee.set(!1),Ce.set(0),Se.set(!1),Pe.set([])};function Te(e){const t=e-1;return t*t*t+1}function Ne(e,{delay:t=0,duration:n=400,easing:a=Te,x:i=0,y:r=0,opacity:s=0}){const o=getComputedStyle(e),c=+o.opacity,l="none"===o.transform?"":o.transform,u=c*(1-s);return{delay:t,duration:n,easing:a,css:(e,t)=>`\n\t\t\ttransform: ${l} translate(${(1-e)*i}px, ${(1-e)*r}px);\n\t\t\topacity: ${c-u*t}`}}function Ve(e,t,n){const a=e.slice();return a[10]=t[n],a[12]=n,a}function Be(e,t,n){const a=e.slice();return a[7]=t[n],a[9]=n,a}function De(e){let t,n,a,i,r,s,o,c,l,u,d,m,f=e[7].question+"",p=e[7].answers,h=[];for(let t=0;t<p.length;t+=1)h[t]=Oe(Ve(e,p,t));function g(e,t){return e[2]<e[1].length-1?Qe:ze}let q=g(e),S=q(e);return{c(){t=w("form"),n=w("fieldset"),a=w("legend"),i=x(f),r=_();for(let e=0;e<h.length;e+=1)h[e].c();s=_(),S.c(),o=_(),C(a,"class","svelte-ous5hl"),C(n,"class","svelte-ous5hl")},m(c,l){v(c,t,l),b(t,n),b(n,a),b(a,i),b(n,r);for(let e=0;e<h.length;e+=1)h[e].m(n,null);b(t,s),S.m(t,null),b(t,o),u=!0,d||(m=A(t,"submit",E(e[3])),d=!0)},p(e,a){if((!u||2&a)&&f!==(f=e[7].question+"")&&k(i,f),3&a){let t;for(p=e[7].answers,t=0;t<p.length;t+=1){const i=Ve(e,p,t);h[t]?h[t].p(i,a):(h[t]=Oe(i),h[t].c(),h[t].m(n,null))}for(;t<h.length;t+=1)h[t].d(1);h.length=p.length}q!==(q=g(e))&&(S.d(1),S=q(e),S&&(S.c(),S.m(t,o)))},i(e){u||(H((()=>{l&&l.end(1),c||(c=se(t,Ne,{x:200,duration:500,delay:500})),c.start()})),u=!0)},o(e){c&&c.invalidate(),l=oe(t,Ne,{x:-200,duration:500}),u=!1},d(e){e&&$(t),y(h,e),S.d(),e&&l&&l.end(),d=!1,m()}}}function Oe(e){let t,n,a,i,r,s,o,c,l,u,d,m,f,p=$e(e[10])+"";return{c(){t=w("label"),n=w("input"),s=_(),o=x(p),c=_(),l=w("span"),u=_(),n.required=!0,C(n,"type","radio"),C(n,"id",a="answer"+e[12]),n.__value=i=e[10],n.value=n.__value,C(n,"name",r="question"+e[9]),C(n,"class","svelte-ous5hl"),e[5][0].push(n),C(l,"class","radio svelte-ous5hl"),C(t,"for",d="answer"+e[12]),C(t,"class","svelte-ous5hl")},m(a,i){v(a,t,i),b(t,n),n.checked=n.__value===e[0],b(t,s),b(t,o),b(t,c),b(t,l),b(t,u),m||(f=A(n,"change",e[4]),m=!0)},p(e,t){2&t&&i!==(i=e[10])&&(n.__value=i,n.value=n.__value),1&t&&(n.checked=n.__value===e[0]),2&t&&p!==(p=$e(e[10])+"")&&k(o,p)},d(a){a&&$(t),e[5][0].splice(e[5][0].indexOf(n),1),m=!1,f()}}}function ze(e){let t;return{c(){t=w("button"),t.textContent="Comproba",C(t,"type","submit")},m(e,n){v(e,t,n)},d(e){e&&$(t)}}}function Qe(e){let t;return{c(){t=w("button"),t.textContent="Avança",C(t,"type","submit")},m(e,n){v(e,t,n)},d(e){e&&$(t)}}}function Fe(e){let t,n,a=e[2]===e[9]&&De(e);return{c(){a&&a.c(),t=q()},m(e,i){a&&a.m(e,i),v(e,t,i),n=!0},p(e,n){e[2]===e[9]?a?(a.p(e,n),4&n&&ae(a,1)):(a=De(e),a.c(),ae(a,1),a.m(t.parentNode,t)):a&&(te(),ie(a,1,1,(()=>{a=null})),ne())},i(e){n||(ae(a),n=!0)},o(e){ie(a),n=!1},d(e){a&&a.d(e),e&&$(t)}}}function He(e){let t,n,a,i,r=e[1],s=[];for(let t=0;t<r.length;t+=1)s[t]=Fe(Be(e,r,t));const o=e=>ie(s[e],1,1,(()=>{s[e]=null}));return{c(){t=w("h3"),t.textContent="Test Creació i posada en marxa d'una empresa",n=_();for(let e=0;e<s.length;e+=1)s[e].c();a=q(),L(t,"width","75%"),L(t,"color","black")},m(e,r){v(e,t,r),v(e,n,r);for(let t=0;t<s.length;t+=1)s[t].m(e,r);v(e,a,r),i=!0},p(e,[t]){if(15&t){let n;for(r=e[1],n=0;n<r.length;n+=1){const i=Be(e,r,n);s[n]?(s[n].p(i,t),ae(s[n],1)):(s[n]=Fe(i),s[n].c(),ae(s[n],1),s[n].m(a.parentNode,a))}for(te(),n=r.length;n<s.length;n+=1)o(n);ne()}},i(e){if(!i){for(let e=0;e<r.length;e+=1)ae(s[e]);i=!0}},o(e){s=s.filter(Boolean);for(let e=0;e<s.length;e+=1)ie(s[e]);i=!1},d(e){e&&$(t),e&&$(n),y(s,e),e&&$(a)}}}function Ge(e,t,n){let a,i,r,s;l(e,Le,(e=>n(1,a=e))),l(e,Ce,(e=>n(2,i=e))),l(e,Pe,(e=>n(6,r=e)));return[s,a,i,()=>{a[i].correctAnswer===s?(je.update((e=>e+1)),u(Pe,r=[...r,{correct:!0,chosenAnswer:s}],r)):u(Pe,r=[...r,{correct:!1,chosenAnswer:s}],r),n(0,s=""),i<a.length-1?Ce.update((e=>e+1)):(Ee.set(!1),Se.set(!0))},function(){s=this.__value,n(0,s)},[[]]]}class Ue extends fe{constructor(e){super(),me(this,e,Ge,He,s,{})}}function Ye(e){let t,n,a,r,s,o,c,l,u,d,m,f,p,h,g,y;return{c(){t=w("div"),n=w("h1"),a=x(e[0]),r=x("!"),s=_(),o=w("form"),c=w("label"),l=x("Tria el nombre de preguntes\n            "),u=w("input"),d=_(),m=w("button"),m.textContent="Start",C(n,"class","svelte-u1obmh"),C(u,"type","number"),C(u,"max",e[1]),C(u,"min","1"),u.required=!0,C(u,"class","svelte-u1obmh"),C(c,"class","svelte-u1obmh"),C(m,"type","submit")},m(i,f){v(i,t,f),b(t,n),b(n,a),b(n,r),b(t,s),b(t,o),b(o,c),b(c,l),b(c,u),I(u,e[2]),b(o,d),b(o,m),h=!0,g||(y=[A(u,"input",e[4]),A(o,"submit",E(e[3]))],g=!0)},p(e,[t]){(!h||1&t)&&k(a,e[0]),(!h||2&t)&&C(u,"max",e[1]),4&t&&S(u.value)!==e[2]&&I(u,e[2])},i(e){h||(H((()=>{p&&p.end(1),f||(f=se(t,Ne,{x:200,duration:500,delay:500})),f.start()})),h=!0)},o(e){f&&f.invalidate(),p=oe(t,Ne,{x:-200,duration:500}),h=!1},d(e){e&&$(t),e&&p&&p.end(),g=!1,i(y)}}}function Ze(e,t,n){let a,i,r;l(e,Ie,(e=>n(0,a=e))),l(e,qe,(e=>n(1,i=e))),l(e,Ae,(e=>n(2,r=e)));return[a,i,r,()=>{Ee.set(!0)},function(){r=S(this.value),Ae.set(r)}]}class Je extends fe{constructor(e){super(),me(this,e,Ze,Ye,s,{})}}function Ke(e,t,n){const a=e.slice();return a[4]=t[n],a[6]=n,a}function We(e){let t,n=e[2],a=[];for(let t=0;t<n.length;t+=1)a[t]=at(Ke(e,n,t));return{c(){t=w("ul");for(let e=0;e<a.length;e+=1)a[e].c();C(t,"class","svelte-irmcw7")},m(e,n){v(e,t,n);for(let e=0;e<a.length;e+=1)a[e].m(t,null)},p(e,i){if(6&i){let r;for(n=e[2],r=0;r<n.length;r+=1){const s=Ke(e,n,r);a[r]?a[r].p(s,i):(a[r]=at(s),a[r].c(),a[r].m(t,null))}for(;r<a.length;r+=1)a[r].d(1);a.length=n.length}},d(e){e&&$(t),y(a,e)}}}function Xe(e){let t;return{c(){t=w("span"),t.textContent="0",C(t,"class","icon wrong svelte-irmcw7")},m(e,n){v(e,t,n)},d(e){e&&$(t)}}}function et(e){let t;return{c(){t=w("span"),t.textContent="+1",C(t,"class","icon correct svelte-irmcw7")},m(e,n){v(e,t,n)},d(e){e&&$(t)}}}function tt(e){let t,n,a,i=$e(e[1][e[6]].chosenAnswer)+"";return{c(){t=w("p"),n=x("Your Answer:\n                "),a=x(i),C(t,"class","svelte-irmcw7")},m(e,i){v(e,t,i),b(t,n),b(t,a)},p(e,t){2&t&&i!==(i=$e(e[1][e[6]].chosenAnswer)+"")&&k(a,i)},d(e){e&&$(t)}}}function nt(e){let t,n,a=e[4].followup+"";return{c(){t=w("p"),n=x(a),C(t,"class","followup svelte-irmcw7")},m(e,a){v(e,t,a),b(t,n)},p(e,t){4&t&&a!==(a=e[4].followup+"")&&k(n,a)},d(e){e&&$(t)}}}function at(e){let t,n,a,i,r,s,o,c,l,u,d,m,f=e[4].question+"",p=$e(e[4].correctAnswer)+"";function h(e,t){return e[1][e[6]].correct?et:Xe}let g=h(e),y=g(e),q=!e[1][e[6]].correct&&tt(e),A=e[4].followup&&nt(e);return{c(){t=w("li"),n=w("div"),y.c(),a=_(),i=w("div"),r=w("p"),s=x(f),o=_(),c=w("p"),l=x(p),u=_(),q&&q.c(),d=_(),A&&A.c(),m=_(),C(n,"class","svelte-irmcw7"),C(r,"class","svelte-irmcw7"),C(c,"class","svelte-irmcw7"),C(i,"class","svelte-irmcw7"),C(t,"class","svelte-irmcw7")},m(e,f){v(e,t,f),b(t,n),y.m(n,null),b(t,a),b(t,i),b(i,r),b(r,s),b(i,o),b(i,c),b(c,l),b(i,u),q&&q.m(i,null),b(i,d),A&&A.m(i,null),b(t,m)},p(e,t){g!==(g=h(e))&&(y.d(1),y=g(e),y&&(y.c(),y.m(n,null))),4&t&&f!==(f=e[4].question+"")&&k(s,f),4&t&&p!==(p=$e(e[4].correctAnswer)+"")&&k(l,p),e[1][e[6]].correct?q&&(q.d(1),q=null):q?q.p(e,t):(q=tt(e),q.c(),q.m(i,d)),e[4].followup?A?A.p(e,t):(A=nt(e),A.c(),A.m(i,null)):A&&(A.d(1),A=null)},d(e){e&&$(t),y.d(),q&&q.d(),A&&A.d()}}}function it(e){let t,n,a,i,r,s,o,c,l,u,d,m,f,p,h,g,y,q,E,S=null!=e[1]&&0!=e[1].length&&We(e);return{c(){t=w("div"),n=w("h1"),n.textContent="Resultats",a=_(),i=w("div"),r=w("p"),s=x("Puntuació: "),o=x(e[0]),c=x("%"),l=_(),u=w("div"),d=w("div"),m=_(),S&&S.c(),f=_(),p=w("button"),p.textContent="Play Again",C(n,"class","svelte-irmcw7"),C(r,"class","final-score svelte-irmcw7"),C(d,"class","score-bar svelte-irmcw7"),L(d,"width",e[0]+"%"),L(d,"background",ye(e[0])),C(u,"class","score-scale svelte-irmcw7"),C(p,"type","button")},m(e,h){v(e,t,h),b(t,n),b(t,a),b(t,i),b(i,r),b(r,s),b(r,o),b(r,c),b(i,l),b(i,u),b(u,d),b(t,m),S&&S.m(t,null),b(t,f),b(t,p),y=!0,q||(E=A(p,"click",Re),q=!0)},p(e,[n]){(!y||1&n)&&k(o,e[0]),(!y||1&n)&&L(d,"width",e[0]+"%"),(!y||1&n)&&L(d,"background",ye(e[0])),null!=e[1]&&0!=e[1].length?S?S.p(e,n):(S=We(e),S.c(),S.m(t,f)):S&&(S.d(1),S=null)},i(e){y||(H((()=>{g&&g.end(1),h||(h=se(t,Ne,{y:200,duration:500,delay:500})),h.start()})),y=!0)},o(e){h&&h.invalidate(),g=oe(t,Ne,{y:-200,duration:500}),y=!1},d(e){e&&$(t),S&&S.d(),e&&g&&g.end(),q=!1,E()}}}function rt(e,t,n){let a,i,r;l(e,Me,(e=>n(3,a=e))),l(e,Pe,(e=>n(1,i=e))),l(e,Le,(e=>n(2,r=e)));let s=0;return V((async()=>{n(0,s=a)})),[s,i,r]}class st extends fe{constructor(e){super(),me(this,e,rt,it,s,{})}}function ot(e){let t,n;return t=new Je({}),{c(){ce(t.$$.fragment)},m(e,a){le(t,e,a),n=!0},i(e){n||(ae(t.$$.fragment,e),n=!0)},o(e){ie(t.$$.fragment,e),n=!1},d(e){ue(t,e)}}}function ct(e){let t,n;return t=new st({}),{c(){ce(t.$$.fragment)},m(e,a){le(t,e,a),n=!0},i(e){n||(ae(t.$$.fragment,e),n=!0)},o(e){ie(t.$$.fragment,e),n=!1},d(e){ue(t,e)}}}function lt(e){let t,n;return t=new Ue({}),{c(){ce(t.$$.fragment)},m(e,a){le(t,e,a),n=!0},i(e){n||(ae(t.$$.fragment,e),n=!0)},o(e){ie(t.$$.fragment,e),n=!1},d(e){ue(t,e)}}}function ut(e){let t,n,a,i;const r=[lt,ct,ot],s=[];function o(e,t){return e[0]?0:e[1]?1:2}return n=o(e),a=s[n]=r[n](e),{c(){t=w("main"),a.c(),C(t,"class","svelte-1o1ab46")},m(e,a){v(e,t,a),s[n].m(t,null),i=!0},p(e,[i]){let c=n;n=o(e),n!==c&&(te(),ie(s[c],1,1,(()=>{s[c]=null})),ne(),a=s[n],a||(a=s[n]=r[n](e),a.c()),ae(a,1),a.m(t,null))},i(e){i||(ae(a),i=!0)},o(e){ie(a),i=!1},d(e){e&&$(t),s[n].d()}}}function dt(e,t,n){let a,i;return l(e,Ee,(e=>n(0,a=e))),l(e,Se,(e=>n(1,i=e))),[a,i]}return new class extends fe{constructor(e){super(),me(this,e,dt,ut,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
