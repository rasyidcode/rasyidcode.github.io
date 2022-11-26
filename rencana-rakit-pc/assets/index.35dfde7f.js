(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function pu(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Z0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",e1=pu(Z0);function up(t){return!!t||t===""}function gu(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ze(r)?r1(r):gu(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Ze(t))return t;if(Oe(t))return t}}const t1=/;(?![^(]*\))/g,n1=/:(.+)/;function r1(t){const e={};return t.split(t1).forEach(n=>{if(n){const r=n.split(n1);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Je(t){let e="";if(Ze(t))e=t;else if(ee(t))for(let n=0;n<t.length;n++){const r=Je(t[n]);r&&(e+=r+" ")}else if(Oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Re=t=>Ze(t)?t:t==null?"":ee(t)||Oe(t)&&(t.toString===mp||!ie(t.toString))?JSON.stringify(t,hp,2):String(t),hp=(t,e)=>e&&e.__v_isRef?hp(t,e.value):Xr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:fp(e)?{[`Set(${e.size})`]:[...e.values()]}:Oe(e)&&!ee(e)&&!pp(e)?String(e):e,Te={},Qr=[],jt=()=>{},s1=()=>!1,i1=/^on[^a-z]/,Oa=t=>i1.test(t),yu=t=>t.startsWith("onUpdate:"),it=Object.assign,vu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},o1=Object.prototype.hasOwnProperty,de=(t,e)=>o1.call(t,e),ee=Array.isArray,Xr=t=>Pa(t)==="[object Map]",fp=t=>Pa(t)==="[object Set]",ie=t=>typeof t=="function",Ze=t=>typeof t=="string",bu=t=>typeof t=="symbol",Oe=t=>t!==null&&typeof t=="object",dp=t=>Oe(t)&&ie(t.then)&&ie(t.catch),mp=Object.prototype.toString,Pa=t=>mp.call(t),a1=t=>Pa(t).slice(8,-1),pp=t=>Pa(t)==="[object Object]",wu=t=>Ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Po=pu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ma=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},c1=/-(\w)/g,tn=Ma(t=>t.replace(c1,(e,n)=>n?n.toUpperCase():"")),l1=/\B([A-Z])/g,Is=Ma(t=>t.replace(l1,"-$1").toLowerCase()),La=Ma(t=>t.charAt(0).toUpperCase()+t.slice(1)),Dc=Ma(t=>t?`on${La(t)}`:""),oi=(t,e)=>!Object.is(t,e),Mo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Go=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Yo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let yf;const u1=()=>yf||(yf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Gt;class h1{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Gt,!e&&Gt&&(this.index=(Gt.scopes||(Gt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Gt;try{return Gt=this,e()}finally{Gt=n}}}on(){Gt=this}off(){Gt=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this.active=!1}}}function f1(t,e=Gt){e&&e.active&&e.effects.push(t)}const _u=t=>{const e=new Set(t);return e.w=0,e.n=0,e},gp=t=>(t.w&qn)>0,yp=t=>(t.n&qn)>0,d1=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=qn},m1=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];gp(s)&&!yp(s)?s.delete(t):e[n++]=s,s.w&=~qn,s.n&=~qn}e.length=n}},ul=new WeakMap;let Fs=0,qn=1;const hl=30;let $t;const wr=Symbol(""),fl=Symbol("");class Eu{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,f1(this,r)}run(){if(!this.active)return this.fn();let e=$t,n=Fn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=$t,$t=this,Fn=!0,qn=1<<++Fs,Fs<=hl?d1(this):vf(this),this.fn()}finally{Fs<=hl&&m1(this),qn=1<<--Fs,$t=this.parent,Fn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){$t===this?this.deferStop=!0:this.active&&(vf(this),this.onStop&&this.onStop(),this.active=!1)}}function vf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Fn=!0;const vp=[];function Ts(){vp.push(Fn),Fn=!1}function ks(){const t=vp.pop();Fn=t===void 0?!0:t}function xt(t,e,n){if(Fn&&$t){let r=ul.get(t);r||ul.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=_u()),bp(s)}}function bp(t,e){let n=!1;Fs<=hl?yp(t)||(t.n|=qn,n=!gp(t)):n=!t.has($t),n&&(t.add($t),$t.deps.push(t))}function fn(t,e,n,r,s,i){const o=ul.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ee(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ee(t)?wu(n)&&a.push(o.get("length")):(a.push(o.get(wr)),Xr(t)&&a.push(o.get(fl)));break;case"delete":ee(t)||(a.push(o.get(wr)),Xr(t)&&a.push(o.get(fl)));break;case"set":Xr(t)&&a.push(o.get(wr));break}if(a.length===1)a[0]&&dl(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);dl(_u(c))}}function dl(t,e){const n=ee(t)?t:[...t];for(const r of n)r.computed&&bf(r);for(const r of n)r.computed||bf(r)}function bf(t,e){(t!==$t||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const p1=pu("__proto__,__v_isRef,__isVue"),wp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(bu)),g1=Iu(),y1=Iu(!1,!0),v1=Iu(!0),wf=b1();function b1(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=be(this);for(let i=0,o=this.length;i<o;i++)xt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(be)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ts();const r=be(this)[e].apply(this,n);return ks(),r}}),t}function Iu(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?M1:kp:e?Tp:Ip).get(r))return r;const o=ee(r);if(!t&&o&&de(wf,s))return Reflect.get(wf,s,i);const a=Reflect.get(r,s,i);return(bu(s)?wp.has(s):p1(s))||(t||xt(r,"get",s),e)?a:ht(a)?o&&wu(s)?a:a.value:Oe(a)?t?xp(a):Pi(a):a}}const w1=_p(),_1=_p(!0);function _p(t=!1){return function(n,r,s,i){let o=n[r];if(as(o)&&ht(o)&&!ht(s))return!1;if(!t&&(!Qo(s)&&!as(s)&&(o=be(o),s=be(s)),!ee(n)&&ht(o)&&!ht(s)))return o.value=s,!0;const a=ee(n)&&wu(r)?Number(r)<n.length:de(n,r),c=Reflect.set(n,r,s,i);return n===be(i)&&(a?oi(s,o)&&fn(n,"set",r,s):fn(n,"add",r,s)),c}}function E1(t,e){const n=de(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&fn(t,"delete",e,void 0),r}function I1(t,e){const n=Reflect.has(t,e);return(!bu(e)||!wp.has(e))&&xt(t,"has",e),n}function T1(t){return xt(t,"iterate",ee(t)?"length":wr),Reflect.ownKeys(t)}const Ep={get:g1,set:w1,deleteProperty:E1,has:I1,ownKeys:T1},k1={get:v1,set(t,e){return!0},deleteProperty(t,e){return!0}},x1=it({},Ep,{get:y1,set:_1}),Tu=t=>t,$a=t=>Reflect.getPrototypeOf(t);function fo(t,e,n=!1,r=!1){t=t.__v_raw;const s=be(t),i=be(e);n||(e!==i&&xt(s,"get",e),xt(s,"get",i));const{has:o}=$a(s),a=r?Tu:n?Su:ai;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function mo(t,e=!1){const n=this.__v_raw,r=be(n),s=be(t);return e||(t!==s&&xt(r,"has",t),xt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function po(t,e=!1){return t=t.__v_raw,!e&&xt(be(t),"iterate",wr),Reflect.get(t,"size",t)}function _f(t){t=be(t);const e=be(this);return $a(e).has.call(e,t)||(e.add(t),fn(e,"add",t,t)),this}function Ef(t,e){e=be(e);const n=be(this),{has:r,get:s}=$a(n);let i=r.call(n,t);i||(t=be(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?oi(e,o)&&fn(n,"set",t,e):fn(n,"add",t,e),this}function If(t){const e=be(this),{has:n,get:r}=$a(e);let s=n.call(e,t);s||(t=be(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&fn(e,"delete",t,void 0),i}function Tf(){const t=be(this),e=t.size!==0,n=t.clear();return e&&fn(t,"clear",void 0,void 0),n}function go(t,e){return function(r,s){const i=this,o=i.__v_raw,a=be(o),c=e?Tu:t?Su:ai;return!t&&xt(a,"iterate",wr),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function yo(t,e,n){return function(...r){const s=this.__v_raw,i=be(s),o=Xr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Tu:e?Su:ai;return!e&&xt(i,"iterate",c?fl:wr),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function xn(t){return function(...e){return t==="delete"?!1:this}}function S1(){const t={get(i){return fo(this,i)},get size(){return po(this)},has:mo,add:_f,set:Ef,delete:If,clear:Tf,forEach:go(!1,!1)},e={get(i){return fo(this,i,!1,!0)},get size(){return po(this)},has:mo,add:_f,set:Ef,delete:If,clear:Tf,forEach:go(!1,!0)},n={get(i){return fo(this,i,!0)},get size(){return po(this,!0)},has(i){return mo.call(this,i,!0)},add:xn("add"),set:xn("set"),delete:xn("delete"),clear:xn("clear"),forEach:go(!0,!1)},r={get(i){return fo(this,i,!0,!0)},get size(){return po(this,!0)},has(i){return mo.call(this,i,!0)},add:xn("add"),set:xn("set"),delete:xn("delete"),clear:xn("clear"),forEach:go(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=yo(i,!1,!1),n[i]=yo(i,!0,!1),e[i]=yo(i,!1,!0),r[i]=yo(i,!0,!0)}),[t,n,e,r]}const[A1,C1,N1,R1]=S1();function ku(t,e){const n=e?t?R1:N1:t?C1:A1;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(de(n,s)&&s in r?n:r,s,i)}const D1={get:ku(!1,!1)},O1={get:ku(!1,!0)},P1={get:ku(!0,!1)},Ip=new WeakMap,Tp=new WeakMap,kp=new WeakMap,M1=new WeakMap;function L1(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $1(t){return t.__v_skip||!Object.isExtensible(t)?0:L1(a1(t))}function Pi(t){return as(t)?t:xu(t,!1,Ep,D1,Ip)}function F1(t){return xu(t,!1,x1,O1,Tp)}function xp(t){return xu(t,!0,k1,P1,kp)}function xu(t,e,n,r,s){if(!Oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=$1(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Jr(t){return as(t)?Jr(t.__v_raw):!!(t&&t.__v_isReactive)}function as(t){return!!(t&&t.__v_isReadonly)}function Qo(t){return!!(t&&t.__v_isShallow)}function Sp(t){return Jr(t)||as(t)}function be(t){const e=t&&t.__v_raw;return e?be(e):t}function Ap(t){return Go(t,"__v_skip",!0),t}const ai=t=>Oe(t)?Pi(t):t,Su=t=>Oe(t)?xp(t):t;function Cp(t){Fn&&$t&&(t=be(t),bp(t.dep||(t.dep=_u())))}function Np(t,e){t=be(t),t.dep&&dl(t.dep)}function ht(t){return!!(t&&t.__v_isRef===!0)}function U1(t){return Rp(t,!1)}function V1(t){return Rp(t,!0)}function Rp(t,e){return ht(t)?t:new B1(t,e)}class B1{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:be(e),this._value=n?e:ai(e)}get value(){return Cp(this),this._value}set value(e){const n=this.__v_isShallow||Qo(e)||as(e);e=n?e:be(e),oi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ai(e),Np(this))}}function Zr(t){return ht(t)?t.value:t}const j1={get:(t,e,n)=>Zr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ht(s)&&!ht(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Dp(t){return Jr(t)?t:new Proxy(t,j1)}var Op;class H1{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Op]=!1,this._dirty=!0,this.effect=new Eu(e,()=>{this._dirty||(this._dirty=!0,Np(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=be(this);return Cp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Op="__v_isReadonly";function z1(t,e,n=!1){let r,s;const i=ie(t);return i?(r=t,s=jt):(r=t.get,s=t.set),new H1(r,s,i||!s,n)}function Un(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Fa(i,e,n)}return s}function Nt(t,e,n,r){if(ie(t)){const i=Un(t,e,n,r);return i&&dp(i)&&i.catch(o=>{Fa(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Nt(t[i],e,n,r));return s}function Fa(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Un(c,null,10,[t,o,a]);return}}q1(t,n,s,r)}function q1(t,e,n,r=!0){console.error(t)}let ci=!1,ml=!1;const lt=[];let Qt=0;const es=[];let on=null,hr=0;const Pp=Promise.resolve();let Au=null;function Mp(t){const e=Au||Pp;return t?e.then(this?t.bind(this):t):e}function K1(t){let e=Qt+1,n=lt.length;for(;e<n;){const r=e+n>>>1;li(lt[r])<t?e=r+1:n=r}return e}function Cu(t){(!lt.length||!lt.includes(t,ci&&t.allowRecurse?Qt+1:Qt))&&(t.id==null?lt.push(t):lt.splice(K1(t.id),0,t),Lp())}function Lp(){!ci&&!ml&&(ml=!0,Au=Pp.then(Fp))}function W1(t){const e=lt.indexOf(t);e>Qt&&lt.splice(e,1)}function G1(t){ee(t)?es.push(...t):(!on||!on.includes(t,t.allowRecurse?hr+1:hr))&&es.push(t),Lp()}function kf(t,e=ci?Qt+1:0){for(;e<lt.length;e++){const n=lt[e];n&&n.pre&&(lt.splice(e,1),e--,n())}}function $p(t){if(es.length){const e=[...new Set(es)];if(es.length=0,on){on.push(...e);return}for(on=e,on.sort((n,r)=>li(n)-li(r)),hr=0;hr<on.length;hr++)on[hr]();on=null,hr=0}}const li=t=>t.id==null?1/0:t.id,Y1=(t,e)=>{const n=li(t)-li(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Fp(t){ml=!1,ci=!0,lt.sort(Y1);const e=jt;try{for(Qt=0;Qt<lt.length;Qt++){const n=lt[Qt];n&&n.active!==!1&&Un(n,null,14)}}finally{Qt=0,lt.length=0,$p(),ci=!1,Au=null,(lt.length||es.length)&&Fp()}}function Q1(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Te;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||Te;f&&(s=n.map(m=>m.trim())),h&&(s=n.map(Yo))}let a,c=r[a=Dc(e)]||r[a=Dc(tn(e))];!c&&i&&(c=r[a=Dc(Is(e))]),c&&Nt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Nt(l,t,6,s)}}function Up(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ie(t)){const c=l=>{const u=Up(l,e,!0);u&&(a=!0,it(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Oe(t)&&r.set(t,null),null):(ee(i)?i.forEach(c=>o[c]=null):it(o,i),Oe(t)&&r.set(t,o),o)}function Ua(t,e){return!t||!Oa(e)?!1:(e=e.slice(2).replace(/Once$/,""),de(t,e[0].toLowerCase()+e.slice(1))||de(t,Is(e))||de(t,e))}let ft=null,Va=null;function Xo(t){const e=ft;return ft=t,Va=t&&t.type.__scopeId||null,e}function X1(t){Va=t}function J1(){Va=null}function Or(t,e=ft,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&$f(-1);const i=Xo(e);let o;try{o=t(...s)}finally{Xo(i),r._d&&$f(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Oc(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:m,ctx:g,inheritAttrs:v}=t;let T,y;const _=Xo(t);try{if(n.shapeFlag&4){const F=s||r;T=Yt(u.call(F,F,h,i,m,f,g)),y=c}else{const F=e;T=Yt(F.length>1?F(i,{attrs:c,slots:a,emit:l}):F(i,null)),y=e.props?c:Z1(c)}}catch(F){Gs.length=0,Fa(F,t,1),T=U(Rt)}let D=T;if(y&&v!==!1){const F=Object.keys(y),{shapeFlag:X}=D;F.length&&X&7&&(o&&F.some(yu)&&(y=eb(y,o)),D=Kn(D,y))}return n.dirs&&(D=Kn(D),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&(D.transition=n.transition),T=D,Xo(_),T}const Z1=t=>{let e;for(const n in t)(n==="class"||n==="style"||Oa(n))&&((e||(e={}))[n]=t[n]);return e},eb=(t,e)=>{const n={};for(const r in t)(!yu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function tb(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?xf(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!Ua(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?xf(r,o,l):!0:!!o;return!1}function xf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ua(n,i))return!0}return!1}function nb({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const rb=t=>t.__isSuspense;function sb(t,e){e&&e.pendingBranch?ee(t)?e.effects.push(...t):e.effects.push(t):G1(t)}function Lo(t,e){if(Xe){let n=Xe.provides;const r=Xe.parent&&Xe.parent.provides;r===n&&(n=Xe.provides=Object.create(r)),n[t]=e}}function Vn(t,e,n=!1){const r=Xe||ft;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ie(e)?e.call(r.proxy):e}}const Sf={};function Ks(t,e,n){return Vp(t,e,n)}function Vp(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Te){const a=Xe;let c,l=!1,u=!1;if(ht(t)?(c=()=>t.value,l=Qo(t)):Jr(t)?(c=()=>t,r=!0):ee(t)?(u=!0,l=t.some(y=>Jr(y)||Qo(y)),c=()=>t.map(y=>{if(ht(y))return y.value;if(Jr(y))return mr(y);if(ie(y))return Un(y,a,2)})):ie(t)?e?c=()=>Un(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Nt(t,a,3,[f])}:c=jt,e&&r){const y=c;c=()=>mr(y())}let h,f=y=>{h=T.onStop=()=>{Un(y,a,4)}};if(hi)return f=jt,e?n&&Nt(e,a,3,[c(),u?[]:void 0,f]):c(),jt;let m=u?[]:Sf;const g=()=>{if(!!T.active)if(e){const y=T.run();(r||l||(u?y.some((_,D)=>oi(_,m[D])):oi(y,m)))&&(h&&h(),Nt(e,a,3,[y,m===Sf?void 0:m,f]),m=y)}else T.run()};g.allowRecurse=!!e;let v;s==="sync"?v=g:s==="post"?v=()=>Et(g,a&&a.suspense):(g.pre=!0,a&&(g.id=a.uid),v=()=>Cu(g));const T=new Eu(c,v);return e?n?g():m=T.run():s==="post"?Et(T.run.bind(T),a&&a.suspense):T.run(),()=>{T.stop(),a&&a.scope&&vu(a.scope.effects,T)}}function ib(t,e,n){const r=this.proxy,s=Ze(t)?t.includes(".")?Bp(r,t):()=>r[t]:t.bind(r,r);let i;ie(e)?i=e:(i=e.handler,n=e);const o=Xe;cs(this);const a=Vp(s,i.bind(r),n);return o?cs(o):_r(),a}function Bp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function mr(t,e){if(!Oe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ht(t))mr(t.value,e);else if(ee(t))for(let n=0;n<t.length;n++)mr(t[n],e);else if(fp(t)||Xr(t))t.forEach(n=>{mr(n,e)});else if(pp(t))for(const n in t)mr(t[n],e);return t}function ob(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Kp(()=>{t.isMounted=!0}),Wp(()=>{t.isUnmounting=!0}),t}const Ct=[Function,Array],ab={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ct,onEnter:Ct,onAfterEnter:Ct,onEnterCancelled:Ct,onBeforeLeave:Ct,onLeave:Ct,onAfterLeave:Ct,onLeaveCancelled:Ct,onBeforeAppear:Ct,onAppear:Ct,onAfterAppear:Ct,onAppearCancelled:Ct},setup(t,{slots:e}){const n=qb(),r=ob();let s;return()=>{const i=e.default&&zp(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const v of i)if(v.type!==Rt){o=v;break}}const a=be(t),{mode:c}=a;if(r.isLeaving)return Pc(o);const l=Af(o);if(!l)return Pc(o);const u=pl(l,a,r,n);gl(l,u);const h=n.subTree,f=h&&Af(h);let m=!1;const{getTransitionKey:g}=l.type;if(g){const v=g();s===void 0?s=v:v!==s&&(s=v,m=!0)}if(f&&f.type!==Rt&&(!fr(l,f)||m)){const v=pl(f,a,r,n);if(gl(f,v),c==="out-in")return r.isLeaving=!0,v.afterLeave=()=>{r.isLeaving=!1,n.update()},Pc(o);c==="in-out"&&l.type!==Rt&&(v.delayLeave=(T,y,_)=>{const D=Hp(r,f);D[String(f.key)]=f,T._leaveCb=()=>{y(),T._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=_})}return o}}},jp=ab;function Hp(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function pl(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:v,onAppear:T,onAfterAppear:y,onAppearCancelled:_}=e,D=String(t.key),F=Hp(n,t),X=(Z,oe)=>{Z&&Nt(Z,r,9,oe)},fe=(Z,oe)=>{const ye=oe[1];X(Z,oe),ee(Z)?Z.every(ze=>ze.length<=1)&&ye():Z.length<=1&&ye()},me={mode:i,persisted:o,beforeEnter(Z){let oe=a;if(!n.isMounted)if(s)oe=v||a;else return;Z._leaveCb&&Z._leaveCb(!0);const ye=F[D];ye&&fr(t,ye)&&ye.el._leaveCb&&ye.el._leaveCb(),X(oe,[Z])},enter(Z){let oe=c,ye=l,ze=u;if(!n.isMounted)if(s)oe=T||c,ye=y||l,ze=_||u;else return;let B=!1;const Ce=Z._enterCb=tt=>{B||(B=!0,tt?X(ze,[Z]):X(ye,[Z]),me.delayedLeave&&me.delayedLeave(),Z._enterCb=void 0)};oe?fe(oe,[Z,Ce]):Ce()},leave(Z,oe){const ye=String(t.key);if(Z._enterCb&&Z._enterCb(!0),n.isUnmounting)return oe();X(h,[Z]);let ze=!1;const B=Z._leaveCb=Ce=>{ze||(ze=!0,oe(),Ce?X(g,[Z]):X(m,[Z]),Z._leaveCb=void 0,F[ye]===t&&delete F[ye])};F[ye]=t,f?fe(f,[Z,B]):B()},clone(Z){return pl(Z,e,n,r)}};return me}function Pc(t){if(Ba(t))return t=Kn(t),t.children=null,t}function Af(t){return Ba(t)?t.children?t.children[0]:void 0:t}function gl(t,e){t.shapeFlag&6&&t.component?gl(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function zp(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Qe?(o.patchFlag&128&&s++,r=r.concat(zp(o.children,e,a))):(e||o.type!==Rt)&&r.push(a!=null?Kn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Mi(t){return ie(t)?{setup:t,name:t.name}:t}const Ws=t=>!!t.type.__asyncLoader,Ba=t=>t.type.__isKeepAlive;function cb(t,e){qp(t,"a",e)}function lb(t,e){qp(t,"da",e)}function qp(t,e,n=Xe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ja(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ba(s.parent.vnode)&&ub(r,e,n,s),s=s.parent}}function ub(t,e,n,r){const s=ja(e,t,r,!0);Gp(()=>{vu(r[e],s)},n)}function ja(t,e,n=Xe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ts(),cs(n);const a=Nt(e,n,t,o);return _r(),ks(),a});return r?s.unshift(i):s.push(i),i}}const En=t=>(e,n=Xe)=>(!hi||t==="sp")&&ja(t,(...r)=>e(...r),n),hb=En("bm"),Kp=En("m"),fb=En("bu"),db=En("u"),Wp=En("bum"),Gp=En("um"),mb=En("sp"),pb=En("rtg"),gb=En("rtc");function yb(t,e=Xe){ja("ec",t,e)}function Cf(t,e){const n=ft;if(n===null)return t;const r=za(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Te]=e[i];ie(o)&&(o={mounted:o,updated:o}),o.deep&&mr(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function ir(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Ts(),Nt(c,n,8,[t.el,a,t,e]),ks())}}const Yp="components";function ce(t,e){return bb(Yp,t,!0,e)||t}const vb=Symbol();function bb(t,e,n=!0,r=!1){const s=ft||Xe;if(s){const i=s.type;if(t===Yp){const a=Qb(i,!1);if(a&&(a===e||a===tn(e)||a===La(tn(e))))return i}const o=Nf(s[t]||i[t],e)||Nf(s.appContext[t],e);return!o&&r?i:o}}function Nf(t,e){return t&&(t[e]||t[tn(e)]||t[La(tn(e))])}function Li(t,e,n,r){let s;const i=n&&n[r];if(ee(t)||Ze(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Oe(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function wb(t,e,n={},r,s){if(ft.isCE||ft.parent&&Ws(ft.parent)&&ft.parent.isCE)return U("slot",e==="default"?null:{name:e},r&&r());let i=t[e];i&&i._c&&(i._d=!1),V();const o=i&&Qp(i(n)),a=Zn(Qe,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Qp(t){return t.some(e=>ea(e)?!(e.type===Rt||e.type===Qe&&!Qp(e.children)):!0)?t:null}const yl=t=>t?ag(t)?za(t)||t.proxy:yl(t.parent):null,Jo=it(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>yl(t.parent),$root:t=>yl(t.root),$emit:t=>t.emit,$options:t=>Nu(t),$forceUpdate:t=>t.f||(t.f=()=>Cu(t.update)),$nextTick:t=>t.n||(t.n=Mp.bind(t.proxy)),$watch:t=>ib.bind(t)}),_b={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==Te&&de(r,e))return o[e]=1,r[e];if(s!==Te&&de(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&de(l,e))return o[e]=3,i[e];if(n!==Te&&de(n,e))return o[e]=4,n[e];vl&&(o[e]=0)}}const u=Jo[e];let h,f;if(u)return e==="$attrs"&&xt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Te&&de(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,de(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==Te&&de(s,e)?(s[e]=n,!0):r!==Te&&de(r,e)?(r[e]=n,!0):de(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Te&&de(t,o)||e!==Te&&de(e,o)||(a=i[0])&&de(a,o)||de(r,o)||de(Jo,o)||de(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:de(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let vl=!0;function Eb(t){const e=Nu(t),n=t.proxy,r=t.ctx;vl=!1,e.beforeCreate&&Rf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:m,updated:g,activated:v,deactivated:T,beforeDestroy:y,beforeUnmount:_,destroyed:D,unmounted:F,render:X,renderTracked:fe,renderTriggered:me,errorCaptured:Z,serverPrefetch:oe,expose:ye,inheritAttrs:ze,components:B,directives:Ce,filters:tt}=e;if(l&&Ib(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ke in o){const Ee=o[ke];ie(Ee)&&(r[ke]=Ee.bind(n))}if(s){const ke=s.call(n,n);Oe(ke)&&(t.data=Pi(ke))}if(vl=!0,i)for(const ke in i){const Ee=i[ke],Pt=ie(Ee)?Ee.bind(n,n):ie(Ee.get)?Ee.get.bind(n,n):jt,sr=!ie(Ee)&&ie(Ee.set)?Ee.set.bind(n):jt,Mt=Fe({get:Pt,set:sr});Object.defineProperty(r,ke,{enumerable:!0,configurable:!0,get:()=>Mt.value,set:wt=>Mt.value=wt})}if(a)for(const ke in a)Xp(a[ke],r,n,ke);if(c){const ke=ie(c)?c.call(n):c;Reflect.ownKeys(ke).forEach(Ee=>{Lo(Ee,ke[Ee])})}u&&Rf(u,t,"c");function Le(ke,Ee){ee(Ee)?Ee.forEach(Pt=>ke(Pt.bind(n))):Ee&&ke(Ee.bind(n))}if(Le(hb,h),Le(Kp,f),Le(fb,m),Le(db,g),Le(cb,v),Le(lb,T),Le(yb,Z),Le(gb,fe),Le(pb,me),Le(Wp,_),Le(Gp,F),Le(mb,oe),ee(ye))if(ye.length){const ke=t.exposed||(t.exposed={});ye.forEach(Ee=>{Object.defineProperty(ke,Ee,{get:()=>n[Ee],set:Pt=>n[Ee]=Pt})})}else t.exposed||(t.exposed={});X&&t.render===jt&&(t.render=X),ze!=null&&(t.inheritAttrs=ze),B&&(t.components=B),Ce&&(t.directives=Ce)}function Ib(t,e,n=jt,r=!1){ee(t)&&(t=bl(t));for(const s in t){const i=t[s];let o;Oe(i)?"default"in i?o=Vn(i.from||s,i.default,!0):o=Vn(i.from||s):o=Vn(i),ht(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Rf(t,e,n){Nt(ee(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Xp(t,e,n,r){const s=r.includes(".")?Bp(n,r):()=>n[r];if(Ze(t)){const i=e[t];ie(i)&&Ks(s,i)}else if(ie(t))Ks(s,t.bind(n));else if(Oe(t))if(ee(t))t.forEach(i=>Xp(i,e,n,r));else{const i=ie(t.handler)?t.handler.bind(n):e[t.handler];ie(i)&&Ks(s,i,t)}}function Nu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Zo(c,l,o,!0)),Zo(c,e,o)),Oe(e)&&i.set(e,c),c}function Zo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Zo(t,i,n,!0),s&&s.forEach(o=>Zo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Tb[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Tb={data:Df,props:lr,emits:lr,methods:lr,computed:lr,beforeCreate:yt,created:yt,beforeMount:yt,mounted:yt,beforeUpdate:yt,updated:yt,beforeDestroy:yt,beforeUnmount:yt,destroyed:yt,unmounted:yt,activated:yt,deactivated:yt,errorCaptured:yt,serverPrefetch:yt,components:lr,directives:lr,watch:xb,provide:Df,inject:kb};function Df(t,e){return e?t?function(){return it(ie(t)?t.call(this,this):t,ie(e)?e.call(this,this):e)}:e:t}function kb(t,e){return lr(bl(t),bl(e))}function bl(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function yt(t,e){return t?[...new Set([].concat(t,e))]:e}function lr(t,e){return t?it(it(Object.create(null),t),e):e}function xb(t,e){if(!t)return e;if(!e)return t;const n=it(Object.create(null),t);for(const r in e)n[r]=yt(t[r],e[r]);return n}function Sb(t,e,n,r=!1){const s={},i={};Go(i,Ha,1),t.propsDefaults=Object.create(null),Jp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:F1(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Ab(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=be(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ua(t.emitsOptions,f))continue;const m=e[f];if(c)if(de(i,f))m!==i[f]&&(i[f]=m,l=!0);else{const g=tn(f);s[g]=wl(c,a,g,m,t,!1)}else m!==i[f]&&(i[f]=m,l=!0)}}}else{Jp(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!de(e,h)&&((u=Is(h))===h||!de(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=wl(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!de(e,h)&&!0)&&(delete i[h],l=!0)}l&&fn(t,"set","$attrs")}function Jp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Po(c))continue;const l=e[c];let u;s&&de(s,u=tn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ua(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=be(n),l=a||Te;for(let u=0;u<i.length;u++){const h=i[u];n[h]=wl(s,c,h,l[h],t,!de(l,h))}}return o}function wl(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=de(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&ie(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(cs(s),r=l[n]=c.call(null,e),_r())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Is(n))&&(r=!0))}return r}function Zp(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!ie(t)){const u=h=>{c=!0;const[f,m]=Zp(h,e,!0);it(o,f),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Oe(t)&&r.set(t,Qr),Qr;if(ee(i))for(let u=0;u<i.length;u++){const h=tn(i[u]);Of(h)&&(o[h]=Te)}else if(i)for(const u in i){const h=tn(u);if(Of(h)){const f=i[u],m=o[h]=ee(f)||ie(f)?{type:f}:f;if(m){const g=Lf(Boolean,m.type),v=Lf(String,m.type);m[0]=g>-1,m[1]=v<0||g<v,(g>-1||de(m,"default"))&&a.push(h)}}}const l=[o,a];return Oe(t)&&r.set(t,l),l}function Of(t){return t[0]!=="$"}function Pf(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Mf(t,e){return Pf(t)===Pf(e)}function Lf(t,e){return ee(e)?e.findIndex(n=>Mf(n,t)):ie(e)&&Mf(e,t)?0:-1}const eg=t=>t[0]==="_"||t==="$stable",Ru=t=>ee(t)?t.map(Yt):[Yt(t)],Cb=(t,e,n)=>{if(e._n)return e;const r=Or((...s)=>Ru(e(...s)),n);return r._c=!1,r},tg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(eg(s))continue;const i=t[s];if(ie(i))e[s]=Cb(s,i,r);else if(i!=null){const o=Ru(i);e[s]=()=>o}}},ng=(t,e)=>{const n=Ru(e);t.slots.default=()=>n},Nb=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=be(e),Go(e,"_",n)):tg(e,t.slots={})}else t.slots={},e&&ng(t,e);Go(t.slots,Ha,1)},Rb=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Te;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(it(s,e),!n&&a===1&&delete s._):(i=!e.$stable,tg(e,s)),o=e}else e&&(ng(t,e),o={default:1});if(i)for(const a in s)!eg(a)&&!(a in o)&&delete s[a]};function rg(){return{app:null,config:{isNativeTag:s1,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Db=0;function Ob(t,e){return function(r,s=null){ie(r)||(r=Object.assign({},r)),s!=null&&!Oe(s)&&(s=null);const i=rg(),o=new Set;let a=!1;const c=i.app={_uid:Db++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Jb,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&ie(l.install)?(o.add(l),l.install(c,...u)):ie(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=U(r,s);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,za(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function _l(t,e,n,r,s=!1){if(ee(t)){t.forEach((f,m)=>_l(f,e&&(ee(e)?e[m]:e),n,r,s));return}if(Ws(r)&&!s)return;const i=r.shapeFlag&4?za(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Te?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ze(l)?(u[l]=null,de(h,l)&&(h[l]=null)):ht(l)&&(l.value=null)),ie(c))Un(c,a,12,[o,u]);else{const f=Ze(c),m=ht(c);if(f||m){const g=()=>{if(t.f){const v=f?de(h,c)?h[c]:u[c]:c.value;s?ee(v)&&vu(v,i):ee(v)?v.includes(i)||v.push(i):f?(u[c]=[i],de(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,de(h,c)&&(h[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Et(g,n)):g()}}}const Et=sb;function Pb(t){return Mb(t)}function Mb(t,e){const n=u1();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:m=jt,insertStaticContent:g}=t,v=(d,p,b,E=null,x=null,N=null,M=!1,C=null,R=!!p.dynamicChildren)=>{if(d===p)return;d&&!fr(d,p)&&(E=P(d),wt(d,x,N,!0),d=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:S,ref:G,shapeFlag:j}=p;switch(S){case Du:T(d,p,b,E);break;case Rt:y(d,p,b,E);break;case Mc:d==null&&_(p,b,E,M);break;case Qe:B(d,p,b,E,x,N,M,C,R);break;default:j&1?X(d,p,b,E,x,N,M,C,R):j&6?Ce(d,p,b,E,x,N,M,C,R):(j&64||j&128)&&S.process(d,p,b,E,x,N,M,C,R,ge)}G!=null&&x&&_l(G,d&&d.ref,N,p||d,!p)},T=(d,p,b,E)=>{if(d==null)r(p.el=a(p.children),b,E);else{const x=p.el=d.el;p.children!==d.children&&l(x,p.children)}},y=(d,p,b,E)=>{d==null?r(p.el=c(p.children||""),b,E):p.el=d.el},_=(d,p,b,E)=>{[d.el,d.anchor]=g(d.children,p,b,E,d.el,d.anchor)},D=({el:d,anchor:p},b,E)=>{let x;for(;d&&d!==p;)x=f(d),r(d,b,E),d=x;r(p,b,E)},F=({el:d,anchor:p})=>{let b;for(;d&&d!==p;)b=f(d),s(d),d=b;s(p)},X=(d,p,b,E,x,N,M,C,R)=>{M=M||p.type==="svg",d==null?fe(p,b,E,x,N,M,C,R):oe(d,p,x,N,M,C,R)},fe=(d,p,b,E,x,N,M,C)=>{let R,S;const{type:G,props:j,shapeFlag:Y,transition:ne,dirs:ue}=d;if(R=d.el=o(d.type,N,j&&j.is,j),Y&8?u(R,d.children):Y&16&&Z(d.children,R,null,E,x,N&&G!=="foreignObject",M,C),ue&&ir(d,null,E,"created"),j){for(const Ie in j)Ie!=="value"&&!Po(Ie)&&i(R,Ie,null,j[Ie],N,d.children,E,x,L);"value"in j&&i(R,"value",null,j.value),(S=j.onVnodeBeforeMount)&&Wt(S,E,d)}me(R,d,d.scopeId,M,E),ue&&ir(d,null,E,"beforeMount");const xe=(!x||x&&!x.pendingBranch)&&ne&&!ne.persisted;xe&&ne.beforeEnter(R),r(R,p,b),((S=j&&j.onVnodeMounted)||xe||ue)&&Et(()=>{S&&Wt(S,E,d),xe&&ne.enter(R),ue&&ir(d,null,E,"mounted")},x)},me=(d,p,b,E,x)=>{if(b&&m(d,b),E)for(let N=0;N<E.length;N++)m(d,E[N]);if(x){let N=x.subTree;if(p===N){const M=x.vnode;me(d,M,M.scopeId,M.slotScopeIds,x.parent)}}},Z=(d,p,b,E,x,N,M,C,R=0)=>{for(let S=R;S<d.length;S++){const G=d[S]=C?Dn(d[S]):Yt(d[S]);v(null,G,p,b,E,x,N,M,C)}},oe=(d,p,b,E,x,N,M)=>{const C=p.el=d.el;let{patchFlag:R,dynamicChildren:S,dirs:G}=p;R|=d.patchFlag&16;const j=d.props||Te,Y=p.props||Te;let ne;b&&or(b,!1),(ne=Y.onVnodeBeforeUpdate)&&Wt(ne,b,p,d),G&&ir(p,d,b,"beforeUpdate"),b&&or(b,!0);const ue=x&&p.type!=="foreignObject";if(S?ye(d.dynamicChildren,S,C,b,E,ue,N):M||Ee(d,p,C,null,b,E,ue,N,!1),R>0){if(R&16)ze(C,p,j,Y,b,E,x);else if(R&2&&j.class!==Y.class&&i(C,"class",null,Y.class,x),R&4&&i(C,"style",j.style,Y.style,x),R&8){const xe=p.dynamicProps;for(let Ie=0;Ie<xe.length;Ie++){const Be=xe[Ie],Lt=j[Be],Vr=Y[Be];(Vr!==Lt||Be==="value")&&i(C,Be,Lt,Vr,x,d.children,b,E,L)}}R&1&&d.children!==p.children&&u(C,p.children)}else!M&&S==null&&ze(C,p,j,Y,b,E,x);((ne=Y.onVnodeUpdated)||G)&&Et(()=>{ne&&Wt(ne,b,p,d),G&&ir(p,d,b,"updated")},E)},ye=(d,p,b,E,x,N,M)=>{for(let C=0;C<p.length;C++){const R=d[C],S=p[C],G=R.el&&(R.type===Qe||!fr(R,S)||R.shapeFlag&70)?h(R.el):b;v(R,S,G,null,E,x,N,M,!0)}},ze=(d,p,b,E,x,N,M)=>{if(b!==E){if(b!==Te)for(const C in b)!Po(C)&&!(C in E)&&i(d,C,b[C],null,M,p.children,x,N,L);for(const C in E){if(Po(C))continue;const R=E[C],S=b[C];R!==S&&C!=="value"&&i(d,C,S,R,M,p.children,x,N,L)}"value"in E&&i(d,"value",b.value,E.value)}},B=(d,p,b,E,x,N,M,C,R)=>{const S=p.el=d?d.el:a(""),G=p.anchor=d?d.anchor:a("");let{patchFlag:j,dynamicChildren:Y,slotScopeIds:ne}=p;ne&&(C=C?C.concat(ne):ne),d==null?(r(S,b,E),r(G,b,E),Z(p.children,b,G,x,N,M,C,R)):j>0&&j&64&&Y&&d.dynamicChildren?(ye(d.dynamicChildren,Y,b,x,N,M,C),(p.key!=null||x&&p===x.subTree)&&sg(d,p,!0)):Ee(d,p,b,G,x,N,M,C,R)},Ce=(d,p,b,E,x,N,M,C,R)=>{p.slotScopeIds=C,d==null?p.shapeFlag&512?x.ctx.activate(p,b,E,M,R):tt(p,b,E,x,N,M,R):kn(d,p,R)},tt=(d,p,b,E,x,N,M)=>{const C=d.component=zb(d,E,x);if(Ba(d)&&(C.ctx.renderer=ge),Kb(C),C.asyncDep){if(x&&x.registerDep(C,Le),!d.el){const R=C.subTree=U(Rt);y(null,R,p,b)}return}Le(C,d,p,b,x,N,M)},kn=(d,p,b)=>{const E=p.component=d.component;if(tb(d,p,b))if(E.asyncDep&&!E.asyncResolved){ke(E,p,b);return}else E.next=p,W1(E.update),E.update();else p.el=d.el,E.vnode=p},Le=(d,p,b,E,x,N,M)=>{const C=()=>{if(d.isMounted){let{next:G,bu:j,u:Y,parent:ne,vnode:ue}=d,xe=G,Ie;or(d,!1),G?(G.el=ue.el,ke(d,G,M)):G=ue,j&&Mo(j),(Ie=G.props&&G.props.onVnodeBeforeUpdate)&&Wt(Ie,ne,G,ue),or(d,!0);const Be=Oc(d),Lt=d.subTree;d.subTree=Be,v(Lt,Be,h(Lt.el),P(Lt),d,x,N),G.el=Be.el,xe===null&&nb(d,Be.el),Y&&Et(Y,x),(Ie=G.props&&G.props.onVnodeUpdated)&&Et(()=>Wt(Ie,ne,G,ue),x)}else{let G;const{el:j,props:Y}=p,{bm:ne,m:ue,parent:xe}=d,Ie=Ws(p);if(or(d,!1),ne&&Mo(ne),!Ie&&(G=Y&&Y.onVnodeBeforeMount)&&Wt(G,xe,p),or(d,!0),j&&ae){const Be=()=>{d.subTree=Oc(d),ae(j,d.subTree,d,x,null)};Ie?p.type.__asyncLoader().then(()=>!d.isUnmounted&&Be()):Be()}else{const Be=d.subTree=Oc(d);v(null,Be,b,E,d,x,N),p.el=Be.el}if(ue&&Et(ue,x),!Ie&&(G=Y&&Y.onVnodeMounted)){const Be=p;Et(()=>Wt(G,xe,Be),x)}(p.shapeFlag&256||xe&&Ws(xe.vnode)&&xe.vnode.shapeFlag&256)&&d.a&&Et(d.a,x),d.isMounted=!0,p=b=E=null}},R=d.effect=new Eu(C,()=>Cu(S),d.scope),S=d.update=()=>R.run();S.id=d.uid,or(d,!0),S()},ke=(d,p,b)=>{p.component=d;const E=d.vnode.props;d.vnode=p,d.next=null,Ab(d,p.props,E,b),Rb(d,p.children,b),Ts(),kf(),ks()},Ee=(d,p,b,E,x,N,M,C,R=!1)=>{const S=d&&d.children,G=d?d.shapeFlag:0,j=p.children,{patchFlag:Y,shapeFlag:ne}=p;if(Y>0){if(Y&128){sr(S,j,b,E,x,N,M,C,R);return}else if(Y&256){Pt(S,j,b,E,x,N,M,C,R);return}}ne&8?(G&16&&L(S,x,N),j!==S&&u(b,j)):G&16?ne&16?sr(S,j,b,E,x,N,M,C,R):L(S,x,N,!0):(G&8&&u(b,""),ne&16&&Z(j,b,E,x,N,M,C,R))},Pt=(d,p,b,E,x,N,M,C,R)=>{d=d||Qr,p=p||Qr;const S=d.length,G=p.length,j=Math.min(S,G);let Y;for(Y=0;Y<j;Y++){const ne=p[Y]=R?Dn(p[Y]):Yt(p[Y]);v(d[Y],ne,b,null,x,N,M,C,R)}S>G?L(d,x,N,!0,!1,j):Z(p,b,E,x,N,M,C,R,j)},sr=(d,p,b,E,x,N,M,C,R)=>{let S=0;const G=p.length;let j=d.length-1,Y=G-1;for(;S<=j&&S<=Y;){const ne=d[S],ue=p[S]=R?Dn(p[S]):Yt(p[S]);if(fr(ne,ue))v(ne,ue,b,null,x,N,M,C,R);else break;S++}for(;S<=j&&S<=Y;){const ne=d[j],ue=p[Y]=R?Dn(p[Y]):Yt(p[Y]);if(fr(ne,ue))v(ne,ue,b,null,x,N,M,C,R);else break;j--,Y--}if(S>j){if(S<=Y){const ne=Y+1,ue=ne<G?p[ne].el:E;for(;S<=Y;)v(null,p[S]=R?Dn(p[S]):Yt(p[S]),b,ue,x,N,M,C,R),S++}}else if(S>Y)for(;S<=j;)wt(d[S],x,N,!0),S++;else{const ne=S,ue=S,xe=new Map;for(S=ue;S<=Y;S++){const kt=p[S]=R?Dn(p[S]):Yt(p[S]);kt.key!=null&&xe.set(kt.key,S)}let Ie,Be=0;const Lt=Y-ue+1;let Vr=!1,mf=0;const Ps=new Array(Lt);for(S=0;S<Lt;S++)Ps[S]=0;for(S=ne;S<=j;S++){const kt=d[S];if(Be>=Lt){wt(kt,x,N,!0);continue}let Kt;if(kt.key!=null)Kt=xe.get(kt.key);else for(Ie=ue;Ie<=Y;Ie++)if(Ps[Ie-ue]===0&&fr(kt,p[Ie])){Kt=Ie;break}Kt===void 0?wt(kt,x,N,!0):(Ps[Kt-ue]=S+1,Kt>=mf?mf=Kt:Vr=!0,v(kt,p[Kt],b,null,x,N,M,C,R),Be++)}const pf=Vr?Lb(Ps):Qr;for(Ie=pf.length-1,S=Lt-1;S>=0;S--){const kt=ue+S,Kt=p[kt],gf=kt+1<G?p[kt+1].el:E;Ps[S]===0?v(null,Kt,b,gf,x,N,M,C,R):Vr&&(Ie<0||S!==pf[Ie]?Mt(Kt,b,gf,2):Ie--)}}},Mt=(d,p,b,E,x=null)=>{const{el:N,type:M,transition:C,children:R,shapeFlag:S}=d;if(S&6){Mt(d.component.subTree,p,b,E);return}if(S&128){d.suspense.move(p,b,E);return}if(S&64){M.move(d,p,b,ge);return}if(M===Qe){r(N,p,b);for(let j=0;j<R.length;j++)Mt(R[j],p,b,E);r(d.anchor,p,b);return}if(M===Mc){D(d,p,b);return}if(E!==2&&S&1&&C)if(E===0)C.beforeEnter(N),r(N,p,b),Et(()=>C.enter(N),x);else{const{leave:j,delayLeave:Y,afterLeave:ne}=C,ue=()=>r(N,p,b),xe=()=>{j(N,()=>{ue(),ne&&ne()})};Y?Y(N,ue,xe):xe()}else r(N,p,b)},wt=(d,p,b,E=!1,x=!1)=>{const{type:N,props:M,ref:C,children:R,dynamicChildren:S,shapeFlag:G,patchFlag:j,dirs:Y}=d;if(C!=null&&_l(C,null,b,d,!0),G&256){p.ctx.deactivate(d);return}const ne=G&1&&Y,ue=!Ws(d);let xe;if(ue&&(xe=M&&M.onVnodeBeforeUnmount)&&Wt(xe,p,d),G&6)k(d.component,b,E);else{if(G&128){d.suspense.unmount(b,E);return}ne&&ir(d,null,p,"beforeUnmount"),G&64?d.type.remove(d,p,b,x,ge,E):S&&(N!==Qe||j>0&&j&64)?L(S,p,b,!1,!0):(N===Qe&&j&384||!x&&G&16)&&L(R,p,b),E&&Ur(d)}(ue&&(xe=M&&M.onVnodeUnmounted)||ne)&&Et(()=>{xe&&Wt(xe,p,d),ne&&ir(d,null,p,"unmounted")},b)},Ur=d=>{const{type:p,el:b,anchor:E,transition:x}=d;if(p===Qe){ho(b,E);return}if(p===Mc){F(d);return}const N=()=>{s(b),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(d.shapeFlag&1&&x&&!x.persisted){const{leave:M,delayLeave:C}=x,R=()=>M(b,N);C?C(d.el,N,R):R()}else N()},ho=(d,p)=>{let b;for(;d!==p;)b=f(d),s(d),d=b;s(p)},k=(d,p,b)=>{const{bum:E,scope:x,update:N,subTree:M,um:C}=d;E&&Mo(E),x.stop(),N&&(N.active=!1,wt(M,d,p,b)),C&&Et(C,p),Et(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},L=(d,p,b,E=!1,x=!1,N=0)=>{for(let M=N;M<d.length;M++)wt(d[M],p,b,E,x)},P=d=>d.shapeFlag&6?P(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),W=(d,p,b)=>{d==null?p._vnode&&wt(p._vnode,null,null,!0):v(p._vnode||null,d,p,null,null,null,b),kf(),$p(),p._vnode=d},ge={p:v,um:wt,m:Mt,r:Ur,mt:tt,mc:Z,pc:Ee,pbc:ye,n:P,o:t};let $e,ae;return e&&([$e,ae]=e(ge)),{render:W,hydrate:$e,createApp:Ob(W,$e)}}function or({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function sg(t,e,n=!1){const r=t.children,s=e.children;if(ee(r)&&ee(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Dn(s[i]),a.el=o.el),n||sg(o,a))}}function Lb(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const $b=t=>t.__isTeleport,Qe=Symbol(void 0),Du=Symbol(void 0),Rt=Symbol(void 0),Mc=Symbol(void 0),Gs=[];let Ut=null;function V(t=!1){Gs.push(Ut=t?null:[])}function Fb(){Gs.pop(),Ut=Gs[Gs.length-1]||null}let ui=1;function $f(t){ui+=t}function ig(t){return t.dynamicChildren=ui>0?Ut||Qr:null,Fb(),ui>0&&Ut&&Ut.push(t),t}function Q(t,e,n,r,s,i){return ig(w(t,e,n,r,s,i,!0))}function Zn(t,e,n,r,s){return ig(U(t,e,n,r,s,!0))}function ea(t){return t?t.__v_isVNode===!0:!1}function fr(t,e){return t.type===e.type&&t.key===e.key}const Ha="__vInternal",og=({key:t})=>t!=null?t:null,$o=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ze(t)||ht(t)||ie(t)?{i:ft,r:t,k:e,f:!!n}:t:null;function w(t,e=null,n=null,r=0,s=null,i=t===Qe?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&og(e),ref:e&&$o(e),scopeId:Va,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(Ou(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ze(n)?8:16),ui>0&&!o&&Ut&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ut.push(c),c}const U=Ub;function Ub(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===vb)&&(t=Rt),ea(t)){const a=Kn(t,e,!0);return n&&Ou(a,n),ui>0&&!i&&Ut&&(a.shapeFlag&6?Ut[Ut.indexOf(t)]=a:Ut.push(a)),a.patchFlag|=-2,a}if(Xb(t)&&(t=t.__vccOpts),e){e=Vb(e);let{class:a,style:c}=e;a&&!Ze(a)&&(e.class=Je(a)),Oe(c)&&(Sp(c)&&!ee(c)&&(c=it({},c)),e.style=gu(c))}const o=Ze(t)?1:rb(t)?128:$b(t)?64:Oe(t)?4:ie(t)?2:0;return w(t,e,n,r,s,o,i,!0)}function Vb(t){return t?Sp(t)||Ha in t?it({},t):t:null}function Kn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Bb(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&og(a),ref:e&&e.ref?n&&s?ee(s)?s.concat($o(e)):[s,$o(e)]:$o(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Qe?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Kn(t.ssContent),ssFallback:t.ssFallback&&Kn(t.ssFallback),el:t.el,anchor:t.anchor}}function rn(t=" ",e=0){return U(Du,null,t,e)}function Ot(t="",e=!1){return e?(V(),Zn(Rt,null,t)):U(Rt,null,t)}function Yt(t){return t==null||typeof t=="boolean"?U(Rt):ee(t)?U(Qe,null,t.slice()):typeof t=="object"?Dn(t):U(Du,null,String(t))}function Dn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Kn(t)}function Ou(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ee(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ou(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Ha in e)?e._ctx=ft:s===3&&ft&&(ft.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:ft},n=32):(e=String(e),r&64?(n=16,e=[rn(e)]):n=8);t.children=e,t.shapeFlag|=n}function Bb(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Je([e.class,r.class]));else if(s==="style")e.style=gu([e.style,r.style]);else if(Oa(s)){const i=e[s],o=r[s];o&&i!==o&&!(ee(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Wt(t,e,n,r=null){Nt(t,e,7,[n,r])}const jb=rg();let Hb=0;function zb(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||jb,i={uid:Hb++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new h1(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zp(r,s),emitsOptions:Up(r,s),emit:null,emitted:null,propsDefaults:Te,inheritAttrs:r.inheritAttrs,ctx:Te,data:Te,props:Te,attrs:Te,slots:Te,refs:Te,setupState:Te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Q1.bind(null,i),t.ce&&t.ce(i),i}let Xe=null;const qb=()=>Xe||ft,cs=t=>{Xe=t,t.scope.on()},_r=()=>{Xe&&Xe.scope.off(),Xe=null};function ag(t){return t.vnode.shapeFlag&4}let hi=!1;function Kb(t,e=!1){hi=e;const{props:n,children:r}=t.vnode,s=ag(t);Sb(t,n,s,e),Nb(t,r);const i=s?Wb(t,e):void 0;return hi=!1,i}function Wb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ap(new Proxy(t.ctx,_b));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Yb(t):null;cs(t),Ts();const i=Un(r,t,0,[t.props,s]);if(ks(),_r(),dp(i)){if(i.then(_r,_r),e)return i.then(o=>{Ff(t,o,e)}).catch(o=>{Fa(o,t,0)});t.asyncDep=i}else Ff(t,i,e)}else cg(t,e)}function Ff(t,e,n){ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Oe(e)&&(t.setupState=Dp(e)),cg(t,n)}let Uf;function cg(t,e,n){const r=t.type;if(!t.render){if(!e&&Uf&&!r.render){const s=r.template||Nu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=it(it({isCustomElement:i,delimiters:a},o),c);r.render=Uf(s,l)}}t.render=r.render||jt}cs(t),Ts(),Eb(t),ks(),_r()}function Gb(t){return new Proxy(t.attrs,{get(e,n){return xt(t,"get","$attrs"),e[n]}})}function Yb(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Gb(t))},slots:t.slots,emit:t.emit,expose:e}}function za(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Dp(Ap(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Jo)return Jo[n](t)}}))}function Qb(t,e=!0){return ie(t)?t.displayName||t.name:t.name||e&&t.__name}function Xb(t){return ie(t)&&"__vccOpts"in t}const Fe=(t,e)=>z1(t,e,hi);function $i(t,e,n){const r=arguments.length;return r===2?Oe(e)&&!ee(e)?ea(e)?U(t,null,[e]):U(t,e):U(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ea(n)&&(n=[n]),U(t,e,n))}const Jb="3.2.41",Zb="http://www.w3.org/2000/svg",dr=typeof document<"u"?document:null,Vf=dr&&dr.createElement("template"),ew={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?dr.createElementNS(Zb,t):dr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>dr.createTextNode(t),createComment:t=>dr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>dr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Vf.innerHTML=r?`<svg>${t}</svg>`:t;const a=Vf.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function tw(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function nw(t,e,n){const r=t.style,s=Ze(n);if(n&&!s){for(const i in n)El(r,i,n[i]);if(e&&!Ze(e))for(const i in e)n[i]==null&&El(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Bf=/\s*!important$/;function El(t,e,n){if(ee(n))n.forEach(r=>El(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=rw(t,e);Bf.test(n)?t.setProperty(Is(r),n.replace(Bf,""),"important"):t[r]=n}}const jf=["Webkit","Moz","ms"],Lc={};function rw(t,e){const n=Lc[e];if(n)return n;let r=tn(e);if(r!=="filter"&&r in t)return Lc[e]=r;r=La(r);for(let s=0;s<jf.length;s++){const i=jf[s]+r;if(i in t)return Lc[e]=i}return e}const Hf="http://www.w3.org/1999/xlink";function sw(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Hf,e.slice(6,e.length)):t.setAttributeNS(Hf,e,n);else{const i=e1(e);n==null||i&&!up(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function iw(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=up(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Hr(t,e,n,r){t.addEventListener(e,n,r)}function ow(t,e,n,r){t.removeEventListener(e,n,r)}function aw(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=cw(e);if(r){const l=i[e]=hw(r,s);Hr(t,a,l,c)}else o&&(ow(t,a,o,c),i[e]=void 0)}}const zf=/(?:Once|Passive|Capture)$/;function cw(t){let e;if(zf.test(t)){e={};let r;for(;r=t.match(zf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Is(t.slice(2)),e]}let $c=0;const lw=Promise.resolve(),uw=()=>$c||(lw.then(()=>$c=0),$c=Date.now());function hw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Nt(fw(r,n.value),e,5,[r])};return n.value=t,n.attached=uw(),n}function fw(t,e){if(ee(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const qf=/^on[a-z]/,dw=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?tw(t,r,s):e==="style"?nw(t,n,r):Oa(e)?yu(e)||aw(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):mw(t,e,r,s))?iw(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),sw(t,e,r,s))};function mw(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&qf.test(e)&&ie(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||qf.test(e)&&Ze(n)?!1:e in t}const Sn="transition",Ms="animation",Pr=(t,{slots:e})=>$i(jp,pw(t),e);Pr.displayName="Transition";const lg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Pr.props=it({},jp.props,lg);const ar=(t,e=[])=>{ee(t)?t.forEach(n=>n(...e)):t&&t(...e)},Kf=t=>t?ee(t)?t.some(e=>e.length>1):t.length>1:!1;function pw(t){const e={};for(const B in t)B in lg||(e[B]=t[B]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,g=gw(s),v=g&&g[0],T=g&&g[1],{onBeforeEnter:y,onEnter:_,onEnterCancelled:D,onLeave:F,onLeaveCancelled:X,onBeforeAppear:fe=y,onAppear:me=_,onAppearCancelled:Z=D}=e,oe=(B,Ce,tt)=>{cr(B,Ce?u:a),cr(B,Ce?l:o),tt&&tt()},ye=(B,Ce)=>{B._isLeaving=!1,cr(B,h),cr(B,m),cr(B,f),Ce&&Ce()},ze=B=>(Ce,tt)=>{const kn=B?me:_,Le=()=>oe(Ce,B,tt);ar(kn,[Ce,Le]),Wf(()=>{cr(Ce,B?c:i),An(Ce,B?u:a),Kf(kn)||Gf(Ce,r,v,Le)})};return it(e,{onBeforeEnter(B){ar(y,[B]),An(B,i),An(B,o)},onBeforeAppear(B){ar(fe,[B]),An(B,c),An(B,l)},onEnter:ze(!1),onAppear:ze(!0),onLeave(B,Ce){B._isLeaving=!0;const tt=()=>ye(B,Ce);An(B,h),bw(),An(B,f),Wf(()=>{!B._isLeaving||(cr(B,h),An(B,m),Kf(F)||Gf(B,r,T,tt))}),ar(F,[B,tt])},onEnterCancelled(B){oe(B,!1),ar(D,[B])},onAppearCancelled(B){oe(B,!0),ar(Z,[B])},onLeaveCancelled(B){ye(B),ar(X,[B])}})}function gw(t){if(t==null)return null;if(Oe(t))return[Fc(t.enter),Fc(t.leave)];{const e=Fc(t);return[e,e]}}function Fc(t){return Yo(t)}function An(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function cr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Wf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let yw=0;function Gf(t,e,n,r){const s=t._endId=++yw,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=vw(t,e);if(!o)return r();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,f),i()},f=m=>{m.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,f)}function vw(t,e){const n=window.getComputedStyle(t),r=g=>(n[g]||"").split(", "),s=r(Sn+"Delay"),i=r(Sn+"Duration"),o=Yf(s,i),a=r(Ms+"Delay"),c=r(Ms+"Duration"),l=Yf(a,c);let u=null,h=0,f=0;e===Sn?o>0&&(u=Sn,h=o,f=i.length):e===Ms?l>0&&(u=Ms,h=l,f=c.length):(h=Math.max(o,l),u=h>0?o>l?Sn:Ms:null,f=u?u===Sn?i.length:c.length:0);const m=u===Sn&&/\b(transform|all)(,|$)/.test(n[Sn+"Property"]);return{type:u,timeout:h,propCount:f,hasTransform:m}}function Yf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Qf(n)+Qf(t[r])))}function Qf(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function bw(){return document.body.offsetHeight}const Xf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ee(e)?n=>Mo(e,n):e};function ww(t){t.target.composing=!0}function Jf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Zf={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Xf(s);const i=r||s.props&&s.props.type==="number";Hr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Yo(a)),t._assign(a)}),n&&Hr(t,"change",()=>{t.value=t.value.trim()}),e||(Hr(t,"compositionstart",ww),Hr(t,"compositionend",Jf),Hr(t,"change",Jf))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Xf(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Yo(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},_w=["ctrl","shift","alt","meta"],Ew={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>_w.some(n=>t[`${n}Key`]&&!e.includes(n))},Vt=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=Ew[e[s]];if(i&&i(n,e))return}return t(n,...r)},Iw=it({patchProp:dw},ew);let ed;function Tw(){return ed||(ed=Pb(Iw))}const kw=(...t)=>{const e=Tw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=xw(r);if(!s)return;const i=e._component;!ie(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function xw(t){return Ze(t)?document.querySelector(t):t}const Pe=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Sw={name:"NavigationBar",props:{hide:Boolean},methods:{logout(){this.$emit("logout")}}},Aw={class:"flex gap-12"},Cw={class:"flex flex-col items-center group"},Nw=w("div",{class:"absolute -top-6 items-center group-hover:flex hidden"},[w("span",{class:"z-10 p-2 bg-gray-700 text-xs leading-none text-white whitespace-nowrap shadow-lg rounded-sm"},"Home")],-1),Rw={class:"flex flex-col items-center group"},Dw=w("div",{class:"absolute -top-6 flex-col items-center group-hover:flex hidden"},[w("span",{class:"z-10 p-2 bg-gray-700 text-xs leading-none text-white whitespace-nowrap shadow-lg rounded-sm"},"Ide")],-1),Ow={class:"flex flex-col items-center group"},Pw=w("div",{class:"absolute -top-6 flex-col items-center group-hover:flex hidden"},[w("span",{class:"z-10 p-2 bg-gray-700 text-xs leading-none text-white whitespace-nowrap shadow-lg rounded-sm"},"Komponen")],-1),Mw={class:"flex flex-col items-center group"},Lw=w("div",{class:"absolute -top-6 flex-col items-center group-hover:flex hidden"},[w("span",{class:"z-10 p-2 bg-gray-700 text-xs leading-none text-white whitespace-nowrap shadow-lg rounded-sm"},"Logout")],-1);function $w(t,e,n,r,s,i){const o=ce("font-awesome-icon");return V(),Q("div",{class:Je(["w-full py-1 px-10 bg-gradient-to-tl from-emerald-500 to-teal-500 absolute bottom-0 rounded-b-lg flex justify-between z-20",{hidden:n.hide}])},[w("div",Aw,[w("div",Cw,[U(o,{icon:"fa-solid fa-home",class:Je(["text-white w-8 h-8 cursor-pointer hover:bg-emerald-600 p-3 rounded-full transition duration-150 ease-in-out",{"text-emerald-900":t.$route.meta.module==="rencana"}]),onClick:e[0]||(e[0]=a=>t.$router.push({name:"rencana-view"}))},null,8,["class"]),Nw]),w("div",Rw,[U(o,{icon:"fa-solid fa-lightbulb",class:Je(["text-white w-8 h-8 cursor-pointer hover:bg-emerald-600 p-3 rounded-full transition duration-150 ease-in-out",{"text-emerald-900":t.$route.meta.module==="ide"}]),onClick:e[1]||(e[1]=a=>t.$router.push({name:"list-ide-view"}))},null,8,["class"]),Dw]),w("div",Ow,[U(o,{icon:"fa-solid fa-database",class:Je(["text-white w-8 h-8 cursor-pointer hover:bg-emerald-600 p-3 rounded-full transition duration-150 ease-in-out",{"text-emerald-900":t.$route.meta.module==="komponen"}]),onClick:e[2]||(e[2]=a=>t.$router.push({name:"komponen-grid-view"}))},null,8,["class"]),Pw])]),w("div",Mw,[U(o,{icon:"fa-solid fa-sign-out",class:"text-white w-8 h-8 text-right cursor-pointer hover:bg-emerald-600 p-3 rounded-full transition duration-150 ease-in-out",onClick:i.logout},null,8,["onClick"]),Lw])],2)}const Fw=Pe(Sw,[["render",$w]]),Uw={name:"AlertDialog",props:{showing:{type:Boolean,required:!0},message:{type:String,required:!0}},methods:{close(){this.$emit("close")},yes(){this.$emit("yes")}}},Vw={class:"relative w-8/12 max-w-2xl bg-white shadow-md rounded-lg p-5"},Bw={class:"flex flex-col gap-3"},jw={class:"text-center text-gray-800"},Hw={class:"flex justify-evenly"};function zw(t,e,n,r,s,i){const o=ce("font-awesome-icon");return n.showing?(V(),Q("div",{key:0,class:"fixed inset-0 w-full h-screen flex items-center justify-center bg-semi-75",onClick:e[3]||(e[3]=Vt((...a)=>i.close&&i.close(...a),["self"]))},[w("div",Vw,[w("button",{"aria-label":"close",class:"absolute top-2 right-2 text-gray-500 hover:bg-gray-200 p-1 rounded-full flex transition duration-150 ease-in-out",onClick:e[0]||(e[0]=Vt((...a)=>i.close&&i.close(...a),["prevent"]))},[U(o,{icon:"fa-solid fa-close",class:"w-3.5 h-3.5"})]),w("div",Bw,[U(o,{icon:"fa-solid fa-warning",class:"w-10 h-10 text-center mx-auto text-gray-800"}),w("p",jw,Re(n.message),1),w("div",Hw,[w("button",{class:"bg-red-500 w-20 rounded-md text-white font-semibold hover:bg-red-700 transition duration-150 ease-in-out",onClick:e[1]||(e[1]=Vt((...a)=>i.yes&&i.yes(...a),["prevent"]))}," Ya "),w("button",{class:"w-20 rounded-md border border-gray-300 text-gray-800 font-semibold hover:bg-gray-200 transition duration-150 ease-in-out",onClick:e[2]||(e[2]=Vt((...a)=>i.close&&i.close(...a),["prevent"]))}," Batal ")])])])])):Ot("",!0)}const ug=Pe(Uw,[["render",zw]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},qw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},fg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(f=64)),r.push(n[u],n[h],n[f],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const f=i<<2|a>>4;if(r.push(f),l!==64){const m=a<<4&240|l>>2;if(r.push(m),h!==64){const g=l<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Kw=function(t){const e=hg(t);return fg.encodeByteArray(e,!0)},ta=function(t){return Kw(t).replace(/\./g,"")},dg=function(t){try{return fg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ww(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function Gw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Yw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qw(){const t=pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Xw(){return typeof indexedDB=="object"}function Jw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Zw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=()=>Zw().__FIREBASE_DEFAULTS__,t_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},n_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&dg(t[1]);return e&&JSON.parse(e)},Pu=()=>{try{return e_()||t_()||n_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},mg=t=>{var e,n;return(n=(e=Pu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},r_=t=>{const e=mg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},s_=()=>{var t;return(t=Pu())===null||t===void 0?void 0:t.config},pg=t=>{var e;return(e=Pu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ta(JSON.stringify(n)),ta(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_="FirebaseError";class In extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=a_,Object.setPrototypeOf(this,In.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fi.prototype.create)}}class Fi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?c_(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new In(s,a,r)}}function c_(t,e){return t.replace(l_,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const l_=/\{\$([^}]+)}/g;function u_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function na(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(td(i)&&td(o)){if(!na(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function td(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Us(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Vs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function h_(t,e){const n=new f_(t,e);return n.subscribe.bind(n)}class f_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");d_(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Uc),s.error===void 0&&(s.error=Uc),s.complete===void 0&&(s.complete=Uc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function d_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Uc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(t){return t&&t._delegate?t._delegate:t}class xr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new i_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(g_(e))try{this.getOrInitializeService({instanceIdentifier:ur})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ur){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ur){return this.instances.has(e)}getOptions(e=ur){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:p_(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ur){return this.component?this.component.multipleInstances?e:ur:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function p_(t){return t===ur?void 0:t}function g_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new m_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const v_={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},b_=ve.INFO,w_={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},__=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=w_[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mu{constructor(e){this.name=e,this._logLevel=b_,this._logHandler=__,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?v_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const E_=(t,e)=>e.some(n=>t instanceof n);let nd,rd;function I_(){return nd||(nd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function T_(){return rd||(rd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gg=new WeakMap,Il=new WeakMap,yg=new WeakMap,Vc=new WeakMap,Lu=new WeakMap;function k_(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Bn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&gg.set(n,t)}).catch(()=>{}),Lu.set(e,t),e}function x_(t){if(Il.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Il.set(t,e)}let Tl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Il.get(t);if(e==="objectStoreNames")return t.objectStoreNames||yg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function S_(t){Tl=t(Tl)}function A_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Bc(this),e,...n);return yg.set(r,e.sort?e.sort():[e]),Bn(r)}:T_().includes(t)?function(...e){return t.apply(Bc(this),e),Bn(gg.get(this))}:function(...e){return Bn(t.apply(Bc(this),e))}}function C_(t){return typeof t=="function"?A_(t):(t instanceof IDBTransaction&&x_(t),E_(t,I_())?new Proxy(t,Tl):t)}function Bn(t){if(t instanceof IDBRequest)return k_(t);if(Vc.has(t))return Vc.get(t);const e=C_(t);return e!==t&&(Vc.set(t,e),Lu.set(e,t)),e}const Bc=t=>Lu.get(t);function N_(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Bn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Bn(o.result),c.oldVersion,c.newVersion,Bn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const R_=["get","getKey","getAll","getAllKeys","count"],D_=["put","add","delete","clear"],jc=new Map;function sd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(jc.get(e))return jc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=D_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||R_.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return jc.set(e,i),i}S_(t=>({...t,get:(e,n,r)=>sd(e,n)||t.get(e,n,r),has:(e,n)=>!!sd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(P_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function P_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kl="@firebase/app",id="0.8.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=new Mu("@firebase/app"),M_="@firebase/app-compat",L_="@firebase/analytics-compat",$_="@firebase/analytics",F_="@firebase/app-check-compat",U_="@firebase/app-check",V_="@firebase/auth",B_="@firebase/auth-compat",j_="@firebase/database",H_="@firebase/database-compat",z_="@firebase/functions",q_="@firebase/functions-compat",K_="@firebase/installations",W_="@firebase/installations-compat",G_="@firebase/messaging",Y_="@firebase/messaging-compat",Q_="@firebase/performance",X_="@firebase/performance-compat",J_="@firebase/remote-config",Z_="@firebase/remote-config-compat",eE="@firebase/storage",tE="@firebase/storage-compat",nE="@firebase/firestore",rE="@firebase/firestore-compat",sE="firebase",iE="9.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl="[DEFAULT]",oE={[kl]:"fire-core",[M_]:"fire-core-compat",[$_]:"fire-analytics",[L_]:"fire-analytics-compat",[U_]:"fire-app-check",[F_]:"fire-app-check-compat",[V_]:"fire-auth",[B_]:"fire-auth-compat",[j_]:"fire-rtdb",[H_]:"fire-rtdb-compat",[z_]:"fire-fn",[q_]:"fire-fn-compat",[K_]:"fire-iid",[W_]:"fire-iid-compat",[G_]:"fire-fcm",[Y_]:"fire-fcm-compat",[Q_]:"fire-perf",[X_]:"fire-perf-compat",[J_]:"fire-rc",[Z_]:"fire-rc-compat",[eE]:"fire-gcs",[tE]:"fire-gcs-compat",[nE]:"fire-fst",[rE]:"fire-fst-compat","fire-js":"fire-js",[sE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=new Map,Sl=new Map;function aE(t,e){try{t.container.addComponent(e)}catch(n){Sr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ls(t){const e=t.name;if(Sl.has(e))return Sr.debug(`There were multiple attempts to register component ${e}.`),!1;Sl.set(e,t);for(const n of ra.values())aE(n,t);return!0}function $u(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},jn=new Fi("app","Firebase",cE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi=iE;function vg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:xl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw jn.create("bad-app-name",{appName:String(s)});if(n||(n=s_()),!n)throw jn.create("no-options");const i=ra.get(s);if(i){if(na(n,i.options)&&na(r,i.config))return i;throw jn.create("duplicate-app",{appName:s})}const o=new y_(s);for(const c of Sl.values())o.addComponent(c);const a=new lE(n,r,o);return ra.set(s,a),a}function bg(t=xl){const e=ra.get(t);if(!e&&t===xl)return vg();if(!e)throw jn.create("no-app",{appName:t});return e}function Hn(t,e,n){var r;let s=(r=oE[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sr.warn(a.join(" "));return}ls(new xr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE="firebase-heartbeat-database",hE=1,fi="firebase-heartbeat-store";let Hc=null;function wg(){return Hc||(Hc=N_(uE,hE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(fi)}}}).catch(t=>{throw jn.create("idb-open",{originalErrorMessage:t.message})})),Hc}async function fE(t){var e;try{return(await wg()).transaction(fi).objectStore(fi).get(_g(t))}catch(n){if(n instanceof In)Sr.warn(n.message);else{const r=jn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Sr.warn(r.message)}}}async function od(t,e){var n;try{const s=(await wg()).transaction(fi,"readwrite");return await s.objectStore(fi).put(e,_g(t)),s.done}catch(r){if(r instanceof In)Sr.warn(r.message);else{const s=jn.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Sr.warn(s.message)}}}function _g(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE=1024,mE=30*24*60*60*1e3;class pE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ad();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=mE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ad(),{heartbeatsToSend:n,unsentEntries:r}=gE(this._heartbeatsCache.heartbeats),s=ta(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ad(){return new Date().toISOString().substring(0,10)}function gE(t,e=dE){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),cd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),cd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class yE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xw()?Jw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await fE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return od(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return od(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function cd(t){return ta(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(t){ls(new xr("platform-logger",e=>new O_(e),"PRIVATE")),ls(new xr("heartbeat",e=>new pE(e),"PRIVATE")),Hn(kl,id,t),Hn(kl,id,"esm2017"),Hn("fire-js","")}vE("");var bE="firebase",wE="9.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hn(bE,wE,"app");var _E=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},z,Fu=Fu||{},te=_E||self;function sa(){}function qa(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Bi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function EE(t){return Object.prototype.hasOwnProperty.call(t,zc)&&t[zc]||(t[zc]=++IE)}var zc="closure_uid_"+(1e9*Math.random()>>>0),IE=0;function TE(t,e,n){return t.call.apply(t.bind,arguments)}function kE(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function dt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?dt=TE:dt=kE,dt.apply(null,arguments)}function vo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function at(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function er(){this.s=this.s,this.o=this.o}var xE=0;er.prototype.s=!1;er.prototype.na=function(){!this.s&&(this.s=!0,this.M(),xE!=0)&&EE(this)};er.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Eg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Uu(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function ld(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(qa(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function mt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}mt.prototype.h=function(){this.defaultPrevented=!0};var SE=function(){if(!te.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{te.addEventListener("test",sa,e),te.removeEventListener("test",sa,e)}catch{}return t}();function ia(t){return/^[\s\xa0]*$/.test(t)}var ud=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function qc(t,e){return t<e?-1:t>e?1:0}function Ka(){var t=te.navigator;return t&&(t=t.userAgent)?t:""}function Xt(t){return Ka().indexOf(t)!=-1}function Vu(t){return Vu[" "](t),t}Vu[" "]=sa;function AE(t){var e=RE;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var CE=Xt("Opera"),us=Xt("Trident")||Xt("MSIE"),Ig=Xt("Edge"),Al=Ig||us,Tg=Xt("Gecko")&&!(Ka().toLowerCase().indexOf("webkit")!=-1&&!Xt("Edge"))&&!(Xt("Trident")||Xt("MSIE"))&&!Xt("Edge"),NE=Ka().toLowerCase().indexOf("webkit")!=-1&&!Xt("Edge");function kg(){var t=te.document;return t?t.documentMode:void 0}var oa;e:{var Kc="",Wc=function(){var t=Ka();if(Tg)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ig)return/Edge\/([\d\.]+)/.exec(t);if(us)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(NE)return/WebKit\/(\S+)/.exec(t);if(CE)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Wc&&(Kc=Wc?Wc[1]:""),us){var Gc=kg();if(Gc!=null&&Gc>parseFloat(Kc)){oa=String(Gc);break e}}oa=Kc}var RE={};function DE(){return AE(function(){let t=0;const e=ud(String(oa)).split("."),n=ud("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=qc(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||qc(s[2].length==0,i[2].length==0)||qc(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var Cl;if(te.document&&us){var hd=kg();Cl=hd||parseInt(oa,10)||void 0}else Cl=void 0;var OE=Cl;function di(t,e){if(mt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Tg){e:{try{Vu(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:PE[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&di.X.h.call(this)}}at(di,mt);var PE={2:"touch",3:"pen",4:"mouse"};di.prototype.h=function(){di.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ji="closure_listenable_"+(1e6*Math.random()|0),ME=0;function LE(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=s,this.key=++ME,this.ba=this.ea=!1}function Wa(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Bu(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function xg(t){const e={};for(const n in t)e[n]=t[n];return e}const fd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Sg(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<fd.length;i++)n=fd[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ga(t){this.src=t,this.g={},this.h=0}Ga.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Rl(t,e,r,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new LE(e,this.src,i,!!r,s),e.ea=n,t.push(e)),e};function Nl(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Eg(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Wa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Rl(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==r)return s}return-1}var ju="closure_lm_"+(1e6*Math.random()|0),Yc={};function Ag(t,e,n,r,s){if(r&&r.once)return Ng(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ag(t,e[i],n,r,s);return null}return n=qu(n),t&&t[ji]?t.N(e,n,Bi(r)?!!r.capture:!!r,s):Cg(t,e,n,!1,r,s)}function Cg(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Bi(s)?!!s.capture:!!s,a=zu(t);if(a||(t[ju]=a=new Ga(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=$E(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)SE||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Dg(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function $E(){function t(n){return e.call(t.src,t.listener,n)}const e=FE;return t}function Ng(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ng(t,e[i],n,r,s);return null}return n=qu(n),t&&t[ji]?t.O(e,n,Bi(r)?!!r.capture:!!r,s):Cg(t,e,n,!0,r,s)}function Rg(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Rg(t,e[i],n,r,s);else r=Bi(r)?!!r.capture:!!r,n=qu(n),t&&t[ji]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Rl(i,n,r,s),-1<n&&(Wa(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=zu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Rl(e,n,r,s)),(n=-1<t?e[t]:null)&&Hu(n))}function Hu(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[ji])Nl(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Dg(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=zu(e))?(Nl(n,t),n.h==0&&(n.src=null,e[ju]=null)):Wa(t)}}}function Dg(t){return t in Yc?Yc[t]:Yc[t]="on"+t}function FE(t,e){if(t.ba)t=!0;else{e=new di(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Hu(t),t=n.call(r,e)}return t}function zu(t){return t=t[ju],t instanceof Ga?t:null}var Qc="__closure_events_fn_"+(1e9*Math.random()>>>0);function qu(t){return typeof t=="function"?t:(t[Qc]||(t[Qc]=function(e){return t.handleEvent(e)}),t[Qc])}function et(){er.call(this),this.i=new Ga(this),this.P=this,this.I=null}at(et,er);et.prototype[ji]=!0;et.prototype.removeEventListener=function(t,e,n,r){Rg(this,t,e,n,r)};function st(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new mt(e,t);else if(e instanceof mt)e.target=e.target||t;else{var s=e;e=new mt(r,t),Sg(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=bo(o,r,!0,e)&&s}if(o=e.g=t,s=bo(o,r,!0,e)&&s,s=bo(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=bo(o,r,!1,e)&&s}et.prototype.M=function(){if(et.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Wa(n[r]);delete t.g[e],t.h--}}this.I=null};et.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};et.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function bo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Nl(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Ku=te.JSON.stringify;function UE(){var t=Mg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class VE{constructor(){this.h=this.g=null}add(e,n){const r=Og.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Og=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new BE,t=>t.reset());class BE{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function jE(t){te.setTimeout(()=>{throw t},0)}function Pg(t,e){Dl||HE(),Ol||(Dl(),Ol=!0),Mg.add(t,e)}var Dl;function HE(){var t=te.Promise.resolve(void 0);Dl=function(){t.then(zE)}}var Ol=!1,Mg=new VE;function zE(){for(var t;t=UE();){try{t.h.call(t.g)}catch(n){jE(n)}var e=Og;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ol=!1}function Ya(t,e){et.call(this),this.h=t||1,this.g=e||te,this.j=dt(this.lb,this),this.l=Date.now()}at(Ya,et);z=Ya.prototype;z.ca=!1;z.R=null;z.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),st(this,"tick"),this.ca&&(Wu(this),this.start()))}};z.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Wu(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}z.M=function(){Ya.X.M.call(this),Wu(this),delete this.g};function Gu(t,e,n){if(typeof t=="function")n&&(t=dt(t,n));else if(t&&typeof t.handleEvent=="function")t=dt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:te.setTimeout(t,e||0)}function Lg(t){t.g=Gu(()=>{t.g=null,t.i&&(t.i=!1,Lg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class qE extends er{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Lg(this)}M(){super.M(),this.g&&(te.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mi(t){er.call(this),this.h=t,this.g={}}at(mi,er);var dd=[];function $g(t,e,n,r){Array.isArray(n)||(n&&(dd[0]=n.toString()),n=dd);for(var s=0;s<n.length;s++){var i=Ag(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Fg(t){Bu(t.g,function(e,n){this.g.hasOwnProperty(n)&&Hu(e)},t),t.g={}}mi.prototype.M=function(){mi.X.M.call(this),Fg(this)};mi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Qa(){this.g=!0}Qa.prototype.Aa=function(){this.g=!1};function KE(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function WE(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function qr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+YE(t,n)+(r?" "+r:"")})}function GE(t,e){t.info(function(){return"TIMEOUT: "+e})}Qa.prototype.info=function(){};function YE(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Ku(n)}catch{return e}}var Mr={},md=null;function Xa(){return md=md||new et}Mr.Pa="serverreachability";function Ug(t){mt.call(this,Mr.Pa,t)}at(Ug,mt);function pi(t){const e=Xa();st(e,new Ug(e))}Mr.STAT_EVENT="statevent";function Vg(t,e){mt.call(this,Mr.STAT_EVENT,t),this.stat=e}at(Vg,mt);function vt(t){const e=Xa();st(e,new Vg(e,t))}Mr.Qa="timingevent";function Bg(t,e){mt.call(this,Mr.Qa,t),this.size=e}at(Bg,mt);function Hi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return te.setTimeout(function(){t()},e)}var Ja={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},jg={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Yu(){}Yu.prototype.h=null;function pd(t){return t.h||(t.h=t.i())}function Hg(){}var zi={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Qu(){mt.call(this,"d")}at(Qu,mt);function Xu(){mt.call(this,"c")}at(Xu,mt);var Pl;function Za(){}at(Za,Yu);Za.prototype.g=function(){return new XMLHttpRequest};Za.prototype.i=function(){return{}};Pl=new Za;function qi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new mi(this),this.O=QE,t=Al?125:void 0,this.T=new Ya(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new zg}function zg(){this.i=null,this.g="",this.h=!1}var QE=45e3,Ml={},aa={};z=qi.prototype;z.setTimeout=function(t){this.O=t};function Ll(t,e,n){t.K=1,t.v=tc(dn(e)),t.s=n,t.P=!0,qg(t,null)}function qg(t,e){t.F=Date.now(),Ki(t),t.A=dn(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),Zg(n.i,"t",r),t.C=0,n=t.l.H,t.h=new zg,t.g=wy(t.l,n?e:null,!t.s),0<t.N&&(t.L=new qE(dt(t.La,t,t.g),t.N)),$g(t.S,t.g,"readystatechange",t.ib),e=t.H?xg(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),pi(),KE(t.j,t.u,t.A,t.m,t.U,t.s)}z.ib=function(t){t=t.target;const e=this.L;e&&an(t)==3?e.l():this.La(t)};z.La=function(t){try{if(t==this.g)e:{const u=an(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Al||this.g&&(this.h.h||this.g.fa()||bd(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?pi(3):pi(2)),ec(this);var n=this.g.aa();this.Y=n;t:if(Kg(this)){var r=bd(this.g);t="";var s=r.length,i=an(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pr(this),Ys(this);var o="";break t}this.h.i=new te.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,WE(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ia(a)){var l=a;break t}}l=null}if(n=l)qr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,$l(this,n);else{this.i=!1,this.o=3,vt(12),pr(this),Ys(this);break e}}this.P?(Wg(this,u,o),Al&&this.i&&u==3&&($g(this.S,this.T,"tick",this.hb),this.T.start())):(qr(this.j,this.m,o,null),$l(this,o)),u==4&&pr(this),this.i&&!this.I&&(u==4?gy(this.l,this):(this.i=!1,Ki(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,vt(12)):(this.o=0,vt(13)),pr(this),Ys(this)}}}catch{}finally{}};function Kg(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Wg(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=XE(t,n),s==aa){e==4&&(t.o=4,vt(14),r=!1),qr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Ml){t.o=4,vt(15),qr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else qr(t.j,t.m,s,null),$l(t,s);Kg(t)&&s!=aa&&s!=Ml&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,vt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),sh(e),e.K=!0,vt(11))):(qr(t.j,t.m,n,"[Invalid Chunked Response]"),pr(t),Ys(t))}z.hb=function(){if(this.g){var t=an(this.g),e=this.g.fa();this.C<e.length&&(ec(this),Wg(this,t,e),this.i&&t!=4&&Ki(this))}};function XE(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?aa:(n=Number(e.substring(n,r)),isNaN(n)?Ml:(r+=1,r+n>e.length?aa:(e=e.substr(r,n),t.C=r+n,e)))}z.cancel=function(){this.I=!0,pr(this)};function Ki(t){t.V=Date.now()+t.O,Gg(t,t.O)}function Gg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Hi(dt(t.gb,t),e)}function ec(t){t.B&&(te.clearTimeout(t.B),t.B=null)}z.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(GE(this.j,this.A),this.K!=2&&(pi(),vt(17)),pr(this),this.o=2,Ys(this)):Gg(this,this.V-t)};function Ys(t){t.l.G==0||t.I||gy(t.l,t)}function pr(t){ec(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Wu(t.T),Fg(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function $l(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Fl(n.h,t))){if(!t.J&&Fl(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ua(n),sc(n);else break e;rh(n),vt(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=Hi(dt(n.cb,n),6e3));if(1>=ny(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else gr(n,11)}else if((t.J||n.g==t)&&ua(n),!ia(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const g=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=r.h;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Ju(i,i.h),i.h=null))}if(r.D){const v=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,Me(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=by(r,r.H?r.ka:null,r.V),o.J){ry(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(ec(a),Ki(a)),r.g=o}else my(r);0<n.i.length&&ic(n)}else l[0]!="stop"&&l[0]!="close"||gr(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?gr(n,7):nh(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}pi(4)}catch{}}function JE(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(qa(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function ZE(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(qa(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Yg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(qa(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=ZE(t),r=JE(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Qg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function e2(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Er(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Er){this.h=e!==void 0?e:t.h,ca(this,t.j),this.s=t.s,this.g=t.g,la(this,t.m),this.l=t.l,e=t.i;var n=new gi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),gd(this,n),this.o=t.o}else t&&(n=String(t).match(Qg))?(this.h=!!e,ca(this,n[1]||"",!0),this.s=Bs(n[2]||""),this.g=Bs(n[3]||"",!0),la(this,n[4]),this.l=Bs(n[5]||"",!0),gd(this,n[6]||"",!0),this.o=Bs(n[7]||"")):(this.h=!!e,this.i=new gi(null,this.h))}Er.prototype.toString=function(){var t=[],e=this.j;e&&t.push(js(e,yd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(js(e,yd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(js(n,n.charAt(0)=="/"?r2:n2,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",js(n,i2)),t.join("")};function dn(t){return new Er(t)}function ca(t,e,n){t.j=n?Bs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function la(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function gd(t,e,n){e instanceof gi?(t.i=e,o2(t.i,t.h)):(n||(e=js(e,s2)),t.i=new gi(e,t.h))}function Me(t,e,n){t.i.set(e,n)}function tc(t){return Me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Bs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function js(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,t2),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function t2(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var yd=/[#\/\?@]/g,n2=/[#\?:]/g,r2=/[#\?]/g,s2=/[#\?@]/g,i2=/#/g;function gi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function tr(t){t.g||(t.g=new Map,t.h=0,t.i&&e2(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}z=gi.prototype;z.add=function(t,e){tr(this),this.i=null,t=xs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Xg(t,e){tr(t),e=xs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Jg(t,e){return tr(t),e=xs(t,e),t.g.has(e)}z.forEach=function(t,e){tr(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};z.oa=function(){tr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};z.W=function(t){tr(this);let e=[];if(typeof t=="string")Jg(this,t)&&(e=e.concat(this.g.get(xs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};z.set=function(t,e){return tr(this),this.i=null,t=xs(this,t),Jg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};z.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Zg(t,e,n){Xg(t,e),0<n.length&&(t.i=null,t.g.set(xs(t,e),Uu(n)),t.h+=n.length)}z.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function xs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function o2(t,e){e&&!t.j&&(tr(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Xg(this,r),Zg(this,s,n))},t)),t.j=e}var a2=class{constructor(t,e){this.h=t,this.g=e}};function ey(t){this.l=t||c2,te.PerformanceNavigationTiming?(t=te.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(te.g&&te.g.Ga&&te.g.Ga()&&te.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var c2=10;function ty(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ny(t){return t.h?1:t.g?t.g.size:0}function Fl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ju(t,e){t.g?t.g.add(e):t.h=e}function ry(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ey.prototype.cancel=function(){if(this.i=sy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function sy(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Uu(t.i)}function Zu(){}Zu.prototype.stringify=function(t){return te.JSON.stringify(t,void 0)};Zu.prototype.parse=function(t){return te.JSON.parse(t,void 0)};function l2(){this.g=new Zu}function u2(t,e,n){const r=n||"";try{Yg(t,function(s,i){let o=s;Bi(s)&&(o=Ku(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function h2(t,e){const n=new Qa;if(te.Image){const r=new Image;r.onload=vo(wo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=vo(wo,n,r,"TestLoadImage: error",!1,e),r.onabort=vo(wo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=vo(wo,n,r,"TestLoadImage: timeout",!1,e),te.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function wo(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Wi(t){this.l=t.ac||null,this.j=t.jb||!1}at(Wi,Yu);Wi.prototype.g=function(){return new nc(this.l,this.j)};Wi.prototype.i=function(t){return function(){return t}}({});function nc(t,e){et.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=eh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}at(nc,et);var eh=0;z=nc.prototype;z.open=function(t,e){if(this.readyState!=eh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,yi(this)};z.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||te).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};z.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gi(this)),this.readyState=eh};z.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,yi(this)),this.g&&(this.readyState=3,yi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof te.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;iy(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function iy(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}z.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Gi(this):yi(this),this.readyState==3&&iy(this)}};z.Va=function(t){this.g&&(this.response=this.responseText=t,Gi(this))};z.Ua=function(t){this.g&&(this.response=t,Gi(this))};z.ga=function(){this.g&&Gi(this)};function Gi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,yi(t)}z.setRequestHeader=function(t,e){this.v.append(t,e)};z.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};z.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function yi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(nc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var f2=te.JSON.parse;function Ve(t){et.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=oy,this.K=this.L=!1}at(Ve,et);var oy="",d2=/^https?$/i,m2=["POST","PUT"];z=Ve.prototype;z.Ka=function(t){this.L=t};z.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Pl.g(),this.C=this.u?pd(this.u):pd(Pl),this.g.onreadystatechange=dt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){vd(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=te.FormData&&t instanceof te.FormData,!(0<=Eg(m2,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ly(this),0<this.B&&((this.K=p2(this.g))?(this.g.timeout=this.B,this.g.ontimeout=dt(this.qa,this)):this.A=Gu(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){vd(this,i)}};function p2(t){return us&&DE()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}z.qa=function(){typeof Fu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,st(this,"timeout"),this.abort(8))};function vd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ay(t),rc(t)}function ay(t){t.D||(t.D=!0,st(t,"complete"),st(t,"error"))}z.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,st(this,"complete"),st(this,"abort"),rc(this))};z.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),rc(this,!0)),Ve.X.M.call(this)};z.Ha=function(){this.s||(this.F||this.v||this.l?cy(this):this.fb())};z.fb=function(){cy(this)};function cy(t){if(t.h&&typeof Fu<"u"&&(!t.C[1]||an(t)!=4||t.aa()!=2)){if(t.v&&an(t)==4)Gu(t.Ha,0,t);else if(st(t,"readystatechange"),an(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(Qg)[1]||null;if(!s&&te.self&&te.self.location){var i=te.self.location.protocol;s=i.substr(0,i.length-1)}r=!d2.test(s?s.toLowerCase():"")}n=r}if(n)st(t,"complete"),st(t,"success");else{t.m=6;try{var o=2<an(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",ay(t)}}finally{rc(t)}}}}function rc(t,e){if(t.g){ly(t);const n=t.g,r=t.C[0]?sa:null;t.g=null,t.C=null,e||st(t,"ready");try{n.onreadystatechange=r}catch{}}}function ly(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(te.clearTimeout(t.A),t.A=null)}function an(t){return t.g?t.g.readyState:0}z.aa=function(){try{return 2<an(this)?this.g.status:-1}catch{return-1}};z.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};z.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),f2(e)}};function bd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case oy:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}z.Ea=function(){return this.m};z.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function uy(t){let e="";return Bu(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function th(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=uy(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Me(t,e,n))}function Ls(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function hy(t){this.Ca=0,this.i=[],this.j=new Qa,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ls("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ls("baseRetryDelayMs",5e3,t),this.bb=Ls("retryDelaySeedMs",1e4,t),this.$a=Ls("forwardChannelMaxRetries",2,t),this.ta=Ls("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new ey(t&&t.concurrentRequestLimit),this.Fa=new l2,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}z=hy.prototype;z.ma=8;z.G=1;function nh(t){if(fy(t),t.G==3){var e=t.U++,n=dn(t.F);Me(n,"SID",t.I),Me(n,"RID",e),Me(n,"TYPE","terminate"),Yi(t,n),e=new qi(t,t.j,e,void 0),e.K=2,e.v=tc(dn(n)),n=!1,te.navigator&&te.navigator.sendBeacon&&(n=te.navigator.sendBeacon(e.v.toString(),"")),!n&&te.Image&&(new Image().src=e.v,n=!0),n||(e.g=wy(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ki(e)}vy(t)}function sc(t){t.g&&(sh(t),t.g.cancel(),t.g=null)}function fy(t){sc(t),t.u&&(te.clearTimeout(t.u),t.u=null),ua(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&te.clearTimeout(t.m),t.m=null)}function ic(t){ty(t.h)||t.m||(t.m=!0,Pg(t.Ja,t),t.C=0)}function g2(t,e){return ny(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Hi(dt(t.Ja,t,e),yy(t,t.C)),t.C++,!0)}z.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new qi(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=xg(i),Sg(i,this.S)):i=this.S),this.o!==null||this.N||(s.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=dy(this,s,e),n=dn(this.F),Me(n,"RID",t),Me(n,"CVER",22),this.D&&Me(n,"X-HTTP-Session-Id",this.D),Yi(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(uy(i)))+"&"+e:this.o&&th(n,this.o,i)),Ju(this.h,s),this.Ya&&Me(n,"TYPE","init"),this.O?(Me(n,"$req",e),Me(n,"SID","null"),s.Z=!0,Ll(s,n,null)):Ll(s,n,e),this.G=2}}else this.G==3&&(t?wd(this,t):this.i.length==0||ty(this.h)||wd(this))};function wd(t,e){var n;e?n=e.m:n=t.U++;const r=dn(t.F);Me(r,"SID",t.I),Me(r,"RID",n),Me(r,"AID",t.T),Yi(t,r),t.o&&t.s&&th(r,t.o,t.s),n=new qi(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=dy(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Ju(t.h,n),Ll(n,r,e)}function Yi(t,e){t.ia&&Bu(t.ia,function(n,r){Me(e,r,n)}),t.l&&Yg({},function(n,r){Me(e,r,n)})}function dy(t,e,n){n=Math.min(t.i.length,n);var r=t.l?dt(t.l.Ra,t.l,t):null;e:{var s=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].h;const u=s[c].g;if(l-=i,0>l)i=Math.max(0,s[c].h-100),a=!1;else try{u2(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function my(t){t.g||t.u||(t.Z=1,Pg(t.Ia,t),t.A=0)}function rh(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Hi(dt(t.Ia,t),yy(t,t.A)),t.A++,!0)}z.Ia=function(){if(this.u=null,py(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Hi(dt(this.eb,this),t)}};z.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,vt(10),sc(this),py(this))};function sh(t){t.B!=null&&(te.clearTimeout(t.B),t.B=null)}function py(t){t.g=new qi(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=dn(t.sa);Me(e,"RID","rpc"),Me(e,"SID",t.I),Me(e,"CI",t.L?"0":"1"),Me(e,"AID",t.T),Me(e,"TYPE","xmlhttp"),Yi(t,e),t.o&&t.s&&th(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=tc(dn(e)),n.s=null,n.P=!0,qg(n,t)}z.cb=function(){this.v!=null&&(this.v=null,sc(this),rh(this),vt(19))};function ua(t){t.v!=null&&(te.clearTimeout(t.v),t.v=null)}function gy(t,e){var n=null;if(t.g==e){ua(t),sh(t),t.g=null;var r=2}else if(Fl(t.h,e))n=e.D,ry(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=Xa(),st(r,new Bg(r,n)),ic(t)}else my(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(r==1&&g2(t,e)||r==2&&rh(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:gr(t,5);break;case 4:gr(t,10);break;case 3:gr(t,6);break;default:gr(t,2)}}}function yy(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function gr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=dt(t.kb,t);n||(n=new Er("//www.google.com/images/cleardot.gif"),te.location&&te.location.protocol=="http"||ca(n,"https"),tc(n)),h2(n.toString(),r)}else vt(2);t.G=0,t.l&&t.l.va(e),vy(t),fy(t)}z.kb=function(t){t?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function vy(t){if(t.G=0,t.la=[],t.l){const e=sy(t.h);(e.length!=0||t.i.length!=0)&&(ld(t.la,e),ld(t.la,t.i),t.h.i.length=0,Uu(t.i),t.i.length=0),t.l.ua()}}function by(t,e,n){var r=n instanceof Er?dn(n):new Er(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),la(r,r.m);else{var s=te.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Er(null,void 0);r&&ca(i,r),e&&(i.g=e),s&&la(i,s),n&&(i.l=n),r=i}return n=t.D,e=t.za,n&&e&&Me(r,n,e),Me(r,"VER",t.ma),Yi(t,r),r}function wy(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ve(new Wi({jb:!0})):new Ve(t.ra),e.Ka(t.H),e}function _y(){}z=_y.prototype;z.xa=function(){};z.wa=function(){};z.va=function(){};z.ua=function(){};z.Ra=function(){};function ha(){if(us&&!(10<=Number(OE)))throw Error("Environmental error: no available transport.")}ha.prototype.g=function(t,e){return new St(t,e)};function St(t,e){et.call(this),this.g=new hy(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!ia(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ia(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ss(this)}at(St,et);St.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;vt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=by(t,null,t.V),ic(t)};St.prototype.close=function(){nh(this.g)};St.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ku(t),t=n);e.i.push(new a2(e.ab++,t)),e.G==3&&ic(e)};St.prototype.M=function(){this.g.l=null,delete this.j,nh(this.g),delete this.g,St.X.M.call(this)};function Ey(t){Qu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}at(Ey,Qu);function Iy(){Xu.call(this),this.status=1}at(Iy,Xu);function Ss(t){this.g=t}at(Ss,_y);Ss.prototype.xa=function(){st(this.g,"a")};Ss.prototype.wa=function(t){st(this.g,new Ey(t))};Ss.prototype.va=function(t){st(this.g,new Iy)};Ss.prototype.ua=function(){st(this.g,"b")};ha.prototype.createWebChannel=ha.prototype.g;St.prototype.send=St.prototype.u;St.prototype.open=St.prototype.m;St.prototype.close=St.prototype.close;Ja.NO_ERROR=0;Ja.TIMEOUT=8;Ja.HTTP_ERROR=6;jg.COMPLETE="complete";Hg.EventType=zi;zi.OPEN="a";zi.CLOSE="b";zi.ERROR="c";zi.MESSAGE="d";et.prototype.listen=et.prototype.N;Ve.prototype.listenOnce=Ve.prototype.O;Ve.prototype.getLastError=Ve.prototype.Oa;Ve.prototype.getLastErrorCode=Ve.prototype.Ea;Ve.prototype.getStatus=Ve.prototype.aa;Ve.prototype.getResponseJson=Ve.prototype.Sa;Ve.prototype.getResponseText=Ve.prototype.fa;Ve.prototype.send=Ve.prototype.da;Ve.prototype.setWithCredentials=Ve.prototype.Ka;var y2=function(){return new ha},v2=function(){return Xa()},Xc=Ja,b2=jg,w2=Mr,_d={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},_2=Wi,_o=Hg,E2=Ve;const Ed="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let As="9.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new Mu("@firebase/firestore");function Id(){return Ar.logLevel}function q(t,...e){if(Ar.logLevel<=ve.DEBUG){const n=e.map(ih);Ar.debug(`Firestore (${As}): ${t}`,...n)}}function mn(t,...e){if(Ar.logLevel<=ve.ERROR){const n=e.map(ih);Ar.error(`Firestore (${As}): ${t}`,...n)}}function Ul(t,...e){if(Ar.logLevel<=ve.WARN){const n=e.map(ih);Ar.warn(`Firestore (${As}): ${t}`,...n)}}function ih(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(t="Unexpected state"){const e=`FIRESTORE (${As}) INTERNAL ASSERTION FAILED: `+t;throw mn(e),new Error(e)}function Ae(t,e){t||re()}function se(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends In{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class I2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ct.UNAUTHENTICATED))}shutdown(){}}class T2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class k2{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new un;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new un,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new un)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ae(typeof r.accessToken=="string"),new Ty(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ae(e===null||typeof e=="string"),new ct(e)}}class x2{constructor(e,n,r,s){this.h=e,this.l=n,this.m=r,this.g=s,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Ae(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class S2{constructor(e,n,r,s){this.h=e,this.l=n,this.m=r,this.g=s}getToken(){return Promise.resolve(new x2(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class A2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class C2{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?s(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ae(typeof n.token=="string"),this.A=n.token,new A2(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=N2(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function hs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new O(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new O(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new O(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return qe.fromMillis(Date.now())}static fromDate(e){return qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.timestamp=e}static fromTimestamp(e){return new le(e)}static min(){return new le(new qe(0,0))}static max(){return new le(new qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n,r){n===void 0?n=0:n>e.length&&re(),r===void 0?r=e.length-n:r>e.length-n&&re(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return vi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof vi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Se extends vi{construct(e,n,r){return new Se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const R2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends vi{construct(e,n,r){return new ut(e,n,r)}static isValidIdentifier(e){return R2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new O(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new O(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new O(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new O(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ut(n)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Se.fromString(e))}static fromName(e){return new K(Se.fromString(e).popFirst(5))}static empty(){return new K(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Se(e.slice()))}}function D2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=le.fromTimestamp(r===1e9?new qe(n+1,0):new qe(n,r));return new Wn(s,K.empty(),e)}function O2(t){return new Wn(t.readTime,t.key,-1)}class Wn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Wn(le.min(),K.empty(),-1)}static max(){return new Wn(le.max(),K.empty(),-1)}}function P2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class L2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qi(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==M2)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,r)=>{n(e)})}static reject(e){return new A((n,r)=>{r(e)})}static waitFor(e){return new A((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=A.resolve(!1);for(const r of e)n=n.next(s=>s?A.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new A((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new A((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Xi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Lr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function xy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oh.at=-1;class We{constructor(e,n){this.comparator=e,this.root=n||nt.EMPTY}insert(e,n){return new We(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(e){return new We(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Eo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Eo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Eo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Eo(this.root,e,this.comparator,!0)}}class Eo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class nt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:nt.RED,this.left=s!=null?s:nt.EMPTY,this.right=i!=null?i:nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new nt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return nt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1;nt.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(t,e,n,r,s){return this}insert(t,e,n){return new nt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.comparator=e,this.data=new We(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new kd(this.data.getIterator())}getIteratorFrom(e){return new kd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ke(this.comparator);return n.data=e,n}}class kd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new Dt([])}unionWith(e){let n=new Ke(ut.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Dt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return hs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new gt(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new gt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const $2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gn(t){if(Ae(!!t),typeof t=="string"){let e=0;const n=$2.exec(t);if(Ae(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function fs(t){return typeof t=="string"?gt.fromBase64String(t):gt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Sy(t){const e=t.mapValue.fields.__previous_value__;return ah(e)?Sy(e):e}function bi(t){const e=Gn(t.mapValue.fields.__local_write_time__.timestampValue);return new qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class wi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new wi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof wi&&e.projectId===this.projectId&&e.database===this.database}}function oc(t){return t==null}function fa(t){return t===0&&1/t==-1/0}function U2(t){return typeof t=="number"&&Number.isInteger(t)&&!fa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Cr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ah(t)?4:V2(t)?9007199254740991:10:re()}function nn(t,e){if(t===e)return!0;const n=Cr(t);if(n!==Cr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return bi(t).isEqual(bi(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Gn(r.timestampValue),o=Gn(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return fs(r.bytesValue).isEqual(fs(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return He(r.geoPointValue.latitude)===He(s.geoPointValue.latitude)&&He(r.geoPointValue.longitude)===He(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return He(r.integerValue)===He(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=He(r.doubleValue),o=He(s.doubleValue);return i===o?fa(i)===fa(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return hs(t.arrayValue.values||[],e.arrayValue.values||[],nn);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Td(i)!==Td(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!nn(i[a],o[a])))return!1;return!0}(t,e);default:return re()}}function _i(t,e){return(t.values||[]).find(n=>nn(n,e))!==void 0}function ds(t,e){if(t===e)return 0;const n=Cr(t),r=Cr(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=He(s.integerValue||s.doubleValue),a=He(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return xd(t.timestampValue,e.timestampValue);case 4:return xd(bi(t),bi(e));case 5:return we(t.stringValue,e.stringValue);case 6:return function(s,i){const o=fs(s),a=fs(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=we(o[c],a[c]);if(l!==0)return l}return we(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=we(He(s.latitude),He(i.latitude));return o!==0?o:we(He(s.longitude),He(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=ds(o[c],a[c]);if(l)return l}return we(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===Io.mapValue&&i===Io.mapValue)return 0;if(s===Io.mapValue)return 1;if(i===Io.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=we(a[u],l[u]);if(h!==0)return h;const f=ds(o[a[u]],c[l[u]]);if(f!==0)return f}return we(a.length,l.length)}(t.mapValue,e.mapValue);default:throw re()}}function xd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=Gn(t),r=Gn(e),s=we(n.seconds,r.seconds);return s!==0?s:we(n.nanos,r.nanos)}function ts(t){return Vl(t)}function Vl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=Gn(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?fs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,K.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=Vl(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${Vl(r.fields[a])}`;return i+"}"}(t.mapValue):re();var e,n}function da(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Bl(t){return!!t&&"integerValue"in t}function ch(t){return!!t&&"arrayValue"in t}function Sd(t){return!!t&&"nullValue"in t}function Ad(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Fo(t){return!!t&&"mapValue"in t}function Qs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Lr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Qs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function V2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Fo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qs(n)}setAll(e){let n=ut.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Qs(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Fo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Fo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Lr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new It(Qs(this.value))}}function Ay(t){const e=[];return Lr(t.fields,(n,r)=>{const s=new ut([n]);if(Fo(r)){const i=Ay(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Dt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n,r,s,i,o){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new rt(e,0,le.min(),le.min(),It.empty(),0)}static newFoundDocument(e,n,r){return new rt(e,1,n,le.min(),r,0)}static newNoDocument(e,n){return new rt(e,2,n,le.min(),It.empty(),0)}static newUnknownDocument(e,n){return new rt(e,3,n,le.min(),It.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ht=null}}function Cd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new B2(t,e,n,r,s,i,o)}function lh(t){const e=se(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(s=r).field.canonicalString()+s.op.toString()+ts(s.value);var s}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),oc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ts(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ts(r)).join(",")),e.ht=n}return e.ht}function j2(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${ts(r.value)}`;var r}).join(", ")}]`),oc(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>ts(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>ts(n)).join(",")),`Target(${e})`}function uh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!Q2(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!nn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Rd(t.startAt,e.startAt)&&Rd(t.endAt,e.endAt)}function jl(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class bt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new H2(e,n,r):n==="array-contains"?new K2(e,r):n==="in"?new W2(e,r):n==="not-in"?new G2(e,r):n==="array-contains-any"?new Y2(e,r):new bt(e,n,r)}static lt(e,n,r){return n==="in"?new z2(e,r):new q2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(ds(n,this.value)):n!==null&&Cr(this.value)===Cr(n)&&this.ft(ds(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class H2 extends bt{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.ft(n)}}class z2 extends bt{constructor(e,n){super(e,"in",n),this.keys=Cy("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class q2 extends bt{constructor(e,n){super(e,"not-in",n),this.keys=Cy("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Cy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class K2 extends bt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ch(n)&&_i(n.arrayValue,this.value)}}class W2 extends bt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_i(this.value.arrayValue,n)}}class G2 extends bt{constructor(e,n){super(e,"not-in",n)}matches(e){if(_i(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!_i(this.value.arrayValue,n)}}class Y2 extends bt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ch(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>_i(this.value.arrayValue,r))}}class ms{constructor(e,n){this.position=e,this.inclusive=n}}class ns{constructor(e,n="asc"){this.field=e,this.dir=n}}function Q2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Nd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=ds(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Rd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!nn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function X2(t,e,n,r,s,i,o,a){return new $r(t,e,n,r,s,i,o,a)}function hh(t){return new $r(t)}function Dd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function fh(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function dh(t){for(const e of t.filters)if(e.dt())return e.field;return null}function mh(t){return t.collectionGroup!==null}function ps(t){const e=se(t);if(e._t===null){e._t=[];const n=dh(e),r=fh(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new ns(n)),e._t.push(new ns(ut.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e._t.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new ns(ut.keyField(),i))}}}return e._t}function pn(t){const e=se(t);if(!e.wt)if(e.limitType==="F")e.wt=Cd(e.path,e.collectionGroup,ps(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of ps(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new ns(i.field,o))}const r=e.endAt?new ms(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new ms(e.startAt.position,e.startAt.inclusive):null;e.wt=Cd(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.wt}function ma(t,e,n){return new $r(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ac(t,e){return uh(pn(t),pn(e))&&t.limitType===e.limitType}function Ny(t){return`${lh(pn(t))}|lt:${t.limitType}`}function Hl(t){return`Query(target=${j2(pn(t))}; limitType=${t.limitType})`}function ph(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):K.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=Nd(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,ps(n),r)||n.endAt&&!function(s,i,o){const a=Nd(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,ps(n),r))}(t,e)}function J2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ry(t){return(e,n)=>{let r=!1;for(const s of ps(t)){const i=Z2(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Z2(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?ds(a,c):re()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return re()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dy(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fa(e)?"-0":e}}function Oy(t){return{integerValue:""+t}}function eI(t,e){return U2(e)?Oy(e):Dy(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(){this._=void 0}}function tI(t,e,n){return t instanceof pa?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof Ei?My(t,e):t instanceof Ii?Ly(t,e):function(r,s){const i=Py(r,s),o=Od(i)+Od(r.yt);return Bl(i)&&Bl(r.yt)?Oy(o):Dy(r.It,o)}(t,e)}function nI(t,e,n){return t instanceof Ei?My(t,e):t instanceof Ii?Ly(t,e):n}function Py(t,e){return t instanceof ga?Bl(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class pa extends cc{}class Ei extends cc{constructor(e){super(),this.elements=e}}function My(t,e){const n=$y(e);for(const r of t.elements)n.some(s=>nn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ii extends cc{constructor(e){super(),this.elements=e}}function Ly(t,e){let n=$y(e);for(const r of t.elements)n=n.filter(s=>!nn(s,r));return{arrayValue:{values:n}}}class ga extends cc{constructor(e,n){super(),this.It=e,this.yt=n}}function Od(t){return He(t.integerValue||t.doubleValue)}function $y(t){return ch(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function rI(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ei&&r instanceof Ei||n instanceof Ii&&r instanceof Ii?hs(n.elements,r.elements,nn):n instanceof ga&&r instanceof ga?nn(n.yt,r.yt):n instanceof pa&&r instanceof pa}(t.transform,e.transform)}class sI{constructor(e,n){this.version=e,this.transformResults=n}}class Ht{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ht}static exists(e){return new Ht(void 0,e)}static updateTime(e){return new Ht(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Uo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class lc{}function Fy(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new gh(t.key,Ht.none()):new Ji(t.key,t.data,Ht.none());{const n=t.data,r=It.empty();let s=new Ke(ut.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new nr(t.key,r,new Dt(s.toArray()),Ht.none())}}function iI(t,e,n){t instanceof Ji?function(r,s,i){const o=r.value.clone(),a=Md(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof nr?function(r,s,i){if(!Uo(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=Md(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(Uy(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Xs(t,e,n,r){return t instanceof Ji?function(s,i,o,a){if(!Uo(s.precondition,i))return o;const c=s.value.clone(),l=Ld(s.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof nr?function(s,i,o,a){if(!Uo(s.precondition,i))return o;const c=Ld(s.fieldTransforms,a,i),l=i.data;return l.setAll(Uy(s)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(s,i,o){return Uo(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function oI(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Py(r.transform,s||null);i!=null&&(n===null&&(n=It.empty()),n.set(r.field,i))}return n||null}function Pd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&hs(n,r,(s,i)=>rI(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ji extends lc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class nr extends lc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Uy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Md(t,e,n){const r=new Map;Ae(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,nI(o,a,n[s]))}return r}function Ld(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,tI(i,o,e))}return r}class gh extends lc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class aI extends lc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je,pe;function lI(t){switch(t){default:return re();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function Vy(t){if(t===void 0)return mn("GRPC error has no .code"),I.UNKNOWN;switch(t){case je.OK:return I.OK;case je.CANCELLED:return I.CANCELLED;case je.UNKNOWN:return I.UNKNOWN;case je.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case je.INTERNAL:return I.INTERNAL;case je.UNAVAILABLE:return I.UNAVAILABLE;case je.UNAUTHENTICATED:return I.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case je.NOT_FOUND:return I.NOT_FOUND;case je.ALREADY_EXISTS:return I.ALREADY_EXISTS;case je.PERMISSION_DENIED:return I.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case je.ABORTED:return I.ABORTED;case je.OUT_OF_RANGE:return I.OUT_OF_RANGE;case je.UNIMPLEMENTED:return I.UNIMPLEMENTED;case je.DATA_LOSS:return I.DATA_LOSS;default:return re()}}(pe=je||(je={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Lr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return xy(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI=new We(K.comparator);function gn(){return uI}const By=new We(K.comparator);function Hs(...t){let e=By;for(const n of t)e=e.insert(n.key,n);return e}function jy(t){let e=By;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function yr(){return Js()}function Hy(){return Js()}function Js(){return new Cs(t=>t.toString(),(t,e)=>t.isEqual(e))}const hI=new We(K.comparator),fI=new Ke(K.comparator);function he(...t){let e=fI;for(const n of t)e=e.add(n);return e}const dI=new Ke(we);function zy(){return dI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Zi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new uc(le.min(),s,zy(),gn(),he())}}class Zi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Zi(r,n,he(),he(),he())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n,r,s){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=s}}class qy{constructor(e,n){this.targetId=e,this.At=n}}class Ky{constructor(e,n,r=gt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class $d{constructor(){this.Rt=0,this.bt=Ud(),this.Pt=gt.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=he(),n=he(),r=he();return this.bt.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:re()}}),new Zi(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=Ud()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class mI{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=gn(),this.qt=Fd(),this.Kt=new Ke(we)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:re()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,s)=>{this.Ht(s)&&n(s)})}Yt(e){const n=e.targetId,r=e.At.count,s=this.Xt(n);if(s){const i=s.target;if(jl(i))if(r===0){const o=new K(i.path);this.jt(n,o,rt.newNoDocument(o,le.min()))}else Ae(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&jl(a.target)){const c=new K(a.target.path);this.Ut.get(c)!==null||this.ee(o,c)||this.jt(o,c,rt.newNoDocument(c,e))}i.Dt&&(n.set(o,i.xt()),i.Nt())}});let r=he();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const s=new uc(e,n,this.Kt,this.Ut,r);return this.Ut=gn(),this.qt=Fd(),this.Kt=new Ke(we),s}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const s=this.zt(e);this.ee(e,n)?s.kt(n,1):s.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new $d,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new Ke(we),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new $d),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function Fd(){return new We(K.comparator)}function Ud(){return new We(K.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),gI=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class yI{constructor(e,n){this.databaseId=e,this.gt=n}}function ya(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Wy(t,e){return t.gt?e.toBase64():e.toUint8Array()}function vI(t,e){return ya(t,e.toTimestamp())}function hn(t){return Ae(!!t),le.fromTimestamp(function(e){const n=Gn(e);return new qe(n.seconds,n.nanos)}(t))}function yh(t,e){return function(n){return new Se(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Gy(t){const e=Se.fromString(t);return Ae(Xy(e)),e}function zl(t,e){return yh(t.databaseId,e.path)}function Jc(t,e){const n=Gy(e);if(n.get(1)!==t.databaseId.projectId)throw new O(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new O(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(Yy(n))}function ql(t,e){return yh(t.databaseId,e)}function bI(t){const e=Gy(t);return e.length===4?Se.emptyPath():Yy(e)}function Kl(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Yy(t){return Ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Vd(t,e,n){return{name:zl(t,e),fields:n.value.mapValue.fields}}function wI(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:re()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,l){return c.gt?(Ae(l===void 0||typeof l=="string"),gt.fromBase64String(l||"")):(Ae(l===void 0||l instanceof Uint8Array),gt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?I.UNKNOWN:Vy(c.code);return new O(l,c.message||"")}(o);n=new Ky(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Jc(t,r.document.name),i=hn(r.document.updateTime),o=new It({mapValue:{fields:r.document.fields}}),a=rt.newFoundDocument(s,i,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new Vo(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Jc(t,r.document),i=r.readTime?hn(r.readTime):le.min(),o=rt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Vo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Jc(t,r.document),i=r.removedTargetIds||[];n=new Vo([],i,s,null)}else{if(!("filter"in e))return re();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new cI(s),o=r.targetId;n=new qy(o,i)}}return n}function _I(t,e){let n;if(e instanceof Ji)n={update:Vd(t,e.key,e.value)};else if(e instanceof gh)n={delete:zl(t,e.key)};else if(e instanceof nr)n={update:Vd(t,e.key,e.data),updateMask:RI(e.fieldMask)};else{if(!(e instanceof aI))return re();n={verify:zl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof pa)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ei)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ii)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ga)return{fieldPath:i.field.canonicalString(),increment:o.yt};throw re()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:vI(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:re()}(t,e.precondition)),n}function EI(t,e){return t&&t.length>0?(Ae(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?hn(r.updateTime):hn(s);return i.isEqual(le.min())&&(i=hn(s)),new sI(i,r.transformResults||[])}(n,e))):[]}function II(t,e){return{documents:[ql(t,e.path)]}}function TI(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=ql(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ql(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(Ad(h.value))return{unaryFilter:{field:Br(h.field),op:"IS_NAN"}};if(Sd(h.value))return{unaryFilter:{field:Br(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Ad(h.value))return{unaryFilter:{field:Br(h.field),op:"IS_NOT_NAN"}};if(Sd(h.value))return{unaryFilter:{field:Br(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Br(h.field),op:AI(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Br(u.field),direction:SI(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.gt||oc(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function kI(t){let e=bI(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ae(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Qy(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new ns(Kr(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,oc(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new ms(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new ms(f,h)}(n.endAt)),X2(e,s,o,i,a,"F",c,l)}function xI(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return re()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Qy(t){return t?t.unaryFilter!==void 0?[NI(t)]:t.fieldFilter!==void 0?[CI(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Qy(e)).reduce((e,n)=>e.concat(n)):re():[]}function SI(t){return pI[t]}function AI(t){return gI[t]}function Br(t){return{fieldPath:t.canonicalString()}}function Kr(t){return ut.fromServerFormat(t.fieldPath)}function CI(t){return bt.create(Kr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(t.fieldFilter.op),t.fieldFilter.value)}function NI(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Kr(t.unaryFilter.field);return bt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Kr(t.unaryFilter.field);return bt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Kr(t.unaryFilter.field);return bt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Kr(t.unaryFilter.field);return bt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return re()}}function RI(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Xy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&iI(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Xs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Xs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Hy();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Fy(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(le.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&hs(this.mutations,e.mutations,(n,r)=>Pd(n,r))&&hs(this.baseMutations,e.baseMutations,(n,r)=>Pd(n,r))}}class vh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ae(e.mutations.length===r.length);let s=hI;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new vh(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,n,r,s,i=le.min(),o=le.min(),a=gt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Ir(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e){this.re=e}}function MI(t){const e=kI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ma(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(){this.Ye=new $I}addToCollectionParentIndex(e,n){return this.Ye.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(Wn.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(Wn.min())}updateCollectionGroup(e,n,r){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class $I{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ke(Se.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ke(Se.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new gs(0)}static vn(){return new gs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(){this.changes=new Cs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.getBaseDocument(e,n,r))).next(s=>(r!==null&&Xs(r.mutation,s,Dt.empty(),qe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,n,r=he()){const s=yr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Hs();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=yr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,he()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=gn();const o=Js(),a=Js();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof nr)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),Xs(u.mutation,l,u.mutation.getFieldMask(),qe.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new UI(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Js();let s=new We((o,a)=>o-a),i=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Dt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||he()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Hy();u.forEach(f=>{if(!i.has(f)){const m=Fy(n.get(f),r.get(f));m!==null&&h.set(f,m),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return A.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return K.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):mh(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):A.resolve(yr());let a=-1,c=i;return o.next(l=>A.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?A.resolve():this.getBaseDocument(e,u,h).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,he())).next(u=>({batchId:a,changes:jy(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let s=Hs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=Hs();return this.indexManager.getCollectionParents(e,s).next(o=>A.forEach(o,a=>{const c=function(l,u){return new $r(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(i=>(s=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();s.get(l)===null&&(s=s.insert(l,rt.newInvalidDocument(l)))});let o=Hs();return s.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Xs(l.mutation,c,Dt.empty(),qe.now()),ph(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):A.resolve(rt.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return A.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:hn(r.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:MI(r.bundledQuery),readTime:hn(r.readTime)}}(n)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(){this.overlays=new We(K.comparator),this.es=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const r=yr();return A.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ue(e,n,i)}),A.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.es.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(r)),A.resolve()}getOverlaysForCollection(e,n,r){const s=yr(),i=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return A.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new We((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=yr(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=yr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return A.resolve(a)}ue(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.es.get(s.largestBatchId).delete(r.key);this.es.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new OI(n,r));let i=this.es.get(n);i===void 0&&(i=he(),this.es.set(n,i)),this.es.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(){this.ns=new Ke(Ye.ss),this.rs=new Ke(Ye.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new Ye(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new K(new Se([])),r=new Ye(n,e),s=new Ye(n,e+1),i=[];return this.rs.forEachInRange([r,s],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new K(new Se([])),r=new Ye(n,e),s=new Ye(n,e+1);let i=he();return this.rs.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ye(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return K.comparator(e.key,n.key)||we(e._s,n._s)}static os(e,n){return we(e._s,n._s)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Ke(Ye.ss)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new DI(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.gs=this.gs.add(new Ye(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ps(r),i=s<0?0:s;return A.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),s=new Ye(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([r,s],o=>{const a=this.ys(o._s);i.push(a)}),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ke(we);return n.forEach(s=>{const i=new Ye(s,0),o=new Ye(s,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{r=r.add(a._s)})}),A.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;K.isDocumentKey(i)||(i=i.child(""));const o=new Ye(new K(i),0);let a=new Ke(we);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c._s)),!0)},o),A.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const s=this.ys(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ae(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return A.forEach(n.mutations,s=>{const i=new Ye(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new Ye(n,0),s=this.gs.firstAfterOrEqual(r);return A.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e){this.Es=e,this.docs=new We(K.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():rt.newInvalidDocument(n))}getEntries(e,n){let r=gn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():rt.newInvalidDocument(s))}),A.resolve(r)}getAllFromCollection(e,n,r){let s=gn();const i=new K(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||P2(O2(c),r)<=0||(s=s.insert(c.key,c.mutableCopy()))}return A.resolve(s)}getAllFromCollectionGroup(e,n,r,s){re()}As(e,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new qI(this)}getSize(e){return A.resolve(this.size)}}class qI extends FI{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Yn.addEntry(e,s)):this.Yn.removeEntry(r)}),A.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e){this.persistence=e,this.Rs=new Cs(n=>lh(n),uh),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.bs=0,this.Ps=new bh,this.targetCount=0,this.vs=gs.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,s)=>n(s)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),A.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new gs(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.Dn(n),A.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),A.waitFor(i).next(()=>s)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return A.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),A.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),A.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),A.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return A.resolve(r)}containsKey(e,n){return A.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new oh(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new KI(this),this.indexManager=new LI,this.remoteDocumentCache=function(r){return new zI(r)}(r=>this.referenceDelegate.xs(r)),this.It=new PI(n),this.Ns=new BI(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new jI,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new HI(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const s=new GI(this.Ss.next());return this.referenceDelegate.ks(),r(s).next(i=>this.referenceDelegate.Os(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ms(e,n){return A.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class GI extends L2{constructor(e){super(),this.currentSequenceNumber=e}}class wh{constructor(e){this.persistence=e,this.Fs=new bh,this.$s=null}static Bs(e){return new wh(e)}get Ls(){if(this.$s)return this.$s;throw re()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),A.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),A.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(s=>this.Ls.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Ls.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Ls,r=>{const s=K.fromPath(r);return this.Us(e,s).next(i=>{i||n.removeEntry(s,le.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return A.or([()=>A.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=s}static Ci(e,n){let r=he(),s=he();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new _h(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,s){return this.ki(e,n).next(i=>i||this.Oi(e,n,s,r)).next(i=>i||this.Mi(e,n))}ki(e,n){if(Dd(n))return A.resolve(null);let r=pn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ma(n,null,"F"),r=pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=he(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(e,ma(n,null,"F")):this.Bi(e,l,n,c)}))})))}Oi(e,n,r,s){return Dd(n)||s.isEqual(le.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,r,s)?this.Mi(e,n):(Id()<=ve.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Hl(n)),this.Bi(e,o,n,D2(s,-1)))})}Fi(e,n){let r=new Ke(Ry(e));return n.forEach((s,i)=>{ph(e,i)&&(r=r.add(i))}),r}$i(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Mi(e,n){return Id()<=ve.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Hl(n)),this.Ni.getDocumentsMatchingQuery(e,n,Wn.min())}Bi(e,n,r,s){return this.Ni.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e,n,r,s){this.persistence=e,this.Li=n,this.It=s,this.Ui=new We(we),this.qi=new Cs(i=>lh(i),uh),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new VI(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function XI(t,e,n,r){return new QI(t,e,n,r)}async function Jy(t,e){const n=se(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=he();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function JI(t,e){const n=se(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=A.resolve();return h.forEach(m=>{f=f.next(()=>l.getEntry(a,m)).next(g=>{const v=c.docVersions.get(m);Ae(v!==null),g.version.compareTo(v)<0&&(u.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),l.addEntry(g)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=he();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Zy(t){const e=se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function ZI(t,e){const n=se(t),r=e.snapshotVersion;let s=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});s=n.Ui;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.Cs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,u.addedDocuments,h)));let m=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?m=m.withResumeToken(gt.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,r)),s=s.insert(h,m),function(g,v,T){return g.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(f,m,u)&&a.push(n.Cs.updateTargetData(i,m))});let c=gn(),l=he();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(eT(i,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!r.isEqual(le.min())){const u=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return A.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ui=s,i))}function eT(t,e,n){let r=he(),s=he();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=gn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(le.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:s}})}function tT(t,e){const n=se(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function nT(t,e){const n=se(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Cs.getTargetData(r,e).next(i=>i?(s=i,A.resolve(s)):n.Cs.allocateTargetId(r).next(o=>(s=new Ir(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ui.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function Wl(t,e,n){const r=se(t),s=r.Ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Xi(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(s.target)}function Bd(t,e,n){const r=se(t);let s=le.min(),i=he();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=se(a),h=u.qi.get(l);return h!==void 0?A.resolve(u.Ui.get(h)):u.Cs.getTargetData(c,l)}(r,o,pn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?s:le.min(),n?i:he())).next(a=>(rT(r,J2(e),a),{documents:a,Hi:i})))}function rT(t,e,n){let r=t.Ki.get(e)||le.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ki.set(e,r)}class jd{constructor(){this.activeTargetIds=zy()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sT{constructor(){this.Lr=new jd,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new jd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,s,i){const o=this.ho(e,n);q("RestConnection","Sending: ",o,r);const a={};return this.lo(a,s,i),this.fo(e,o,a,r).then(c=>(q("RestConnection","Received: ",c),c),c=>{throw Ul("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}_o(e,n,r,s,i,o){return this.ao(e,n,r,s,i)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+As,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}ho(e,n){const r=oT[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,s){return new Promise((i,o)=>{const a=new E2;a.setWithCredentials(!0),a.listenOnce(b2.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Xc.NO_ERROR:const l=a.getResponseJson();q("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Xc.TIMEOUT:q("Connection",'RPC "'+e+'" timed out'),o(new O(I.DEADLINE_EXCEEDED,"Request time out"));break;case Xc.HTTP_ERROR:const u=a.getStatus();if(q("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(m){const g=m.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(g)>=0?g:I.UNKNOWN}(h.status);o(new O(f,h.message))}else o(new O(I.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new O(I.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{q("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,r,15)})}wo(e,n,r){const s=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=y2(),o=v2(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new _2({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const c=s.join("");q("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const f=new aT({Hr:g=>{h?q("Connection","Not sending because WebChannel is closed:",g):(u||(q("Connection","Opening WebChannel transport."),l.open(),u=!0),q("Connection","WebChannel sending:",g),l.send(g))},Jr:()=>l.close()}),m=(g,v,T)=>{g.listen(v,y=>{try{T(y)}catch(_){setTimeout(()=>{throw _},0)}})};return m(l,_o.EventType.OPEN,()=>{h||q("Connection","WebChannel transport opened.")}),m(l,_o.EventType.CLOSE,()=>{h||(h=!0,q("Connection","WebChannel transport closed"),f.io())}),m(l,_o.EventType.ERROR,g=>{h||(h=!0,Ul("Connection","WebChannel transport errored:",g),f.io(new O(I.UNAVAILABLE,"The operation could not be completed")))}),m(l,_o.EventType.MESSAGE,g=>{var v;if(!h){const T=g.data[0];Ae(!!T);const y=T,_=y.error||((v=y[0])===null||v===void 0?void 0:v.error);if(_){q("Connection","WebChannel received error:",_);const D=_.status;let F=function(fe){const me=je[fe];if(me!==void 0)return Vy(me)}(D),X=_.message;F===void 0&&(F=I.INTERNAL,X="Unknown error status: "+D+" with message "+_.message),h=!0,f.io(new O(F,X)),l.close()}else q("Connection","WebChannel received:",T),f.ro(T)}}),m(o,w2.STAT_EVENT,g=>{g.stat===_d.PROXY?q("Connection","Detected buffering proxy"):g.stat===_d.NOPROXY&&q("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function Zc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(t){return new yI(t,!0)}class ev{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=s,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),s=Math.max(0,n-r);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,s,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,n,r,s,i,o,a,c){this.Hs=e,this.vo=r,this.Vo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new ev(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(mn(n.toString()),mn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.So===n&&this.Go(r,s)},r=>{e(()=>{const s=new O(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(s)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(s=>{r(()=>this.Qo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class lT extends tv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.It=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=wI(this.It,e),r=function(s){if(!("targetChange"in s))return le.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?le.min():i.readTime?hn(i.readTime):le.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=Kl(this.It),n.addTarget=function(s,i){let o;const a=i.target;return o=jl(a)?{documents:II(s,a)}:{query:TI(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Wy(s,i.resumeToken):i.snapshotVersion.compareTo(le.min())>0&&(o.readTime=ya(s,i.snapshotVersion.toTimestamp())),o}(this.It,e);const r=xI(this.It,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=Kl(this.It),n.removeTarget=e,this.Bo(n)}}class uT extends tv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=EI(e.writeResults,e.commitTime),r=hn(e.commitTime);return this.listener.Zo(r,n)}return Ae(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Kl(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>_I(this.It,r))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.It=s,this.nu=!1}su(){if(this.nu)throw new O(I.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.ao(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(I.UNKNOWN,s.toString())})}_o(e,n,r,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(I.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class fT{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(mn(n),this.ou=!1):q("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr(o=>{r.enqueueAndForget(async()=>{Fr(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=se(a);c._u.add(4),await eo(c),c.gu.set("Unknown"),c._u.delete(4),await fc(c)}(this))})}),this.gu=new fT(r,s)}}async function fc(t){if(Fr(t))for(const e of t.wu)await e(!0)}async function eo(t){for(const e of t.wu)await e(!1)}function nv(t,e){const n=se(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Th(n)?Ih(n):Ns(n).ko()&&Eh(n,e))}function rv(t,e){const n=se(t),r=Ns(n);n.du.delete(e),r.ko()&&sv(n,e),n.du.size===0&&(r.ko()?r.Fo():Fr(n)&&n.gu.set("Unknown"))}function Eh(t,e){t.yu.Mt(e.targetId),Ns(t).zo(e)}function sv(t,e){t.yu.Mt(e),Ns(t).Ho(e)}function Ih(t){t.yu=new mI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),Ns(t).start(),t.gu.uu()}function Th(t){return Fr(t)&&!Ns(t).No()&&t.du.size>0}function Fr(t){return se(t)._u.size===0}function iv(t){t.yu=void 0}async function mT(t){t.du.forEach((e,n)=>{Eh(t,e)})}async function pT(t,e){iv(t),Th(t)?(t.gu.hu(e),Ih(t)):t.gu.set("Unknown")}async function gT(t,e,n){if(t.gu.set("Online"),e instanceof Ky&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await va(t,r)}else if(e instanceof Vo?t.yu.Gt(e):e instanceof qy?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(le.min()))try{const r=await Zy(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.yu.te(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=s.du.get(c);l&&s.du.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.du.get(a);if(!c)return;s.du.set(a,c.withResumeToken(gt.EMPTY_BYTE_STRING,c.snapshotVersion)),sv(s,a);const l=new Ir(c.target,a,1,c.sequenceNumber);Eh(s,l)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await va(t,r)}}async function va(t,e,n){if(!Xi(e))throw e;t._u.add(1),await eo(t),t.gu.set("Offline"),n||(n=()=>Zy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await fc(t)})}function ov(t,e){return e().catch(n=>va(t,n,e))}async function dc(t){const e=se(t),n=Yn(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;yT(e);)try{const s=await tT(e.localStore,r);if(s===null){e.fu.length===0&&n.Fo();break}r=s.batchId,vT(e,s)}catch(s){await va(e,s)}av(e)&&cv(e)}function yT(t){return Fr(t)&&t.fu.length<10}function vT(t,e){t.fu.push(e);const n=Yn(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function av(t){return Fr(t)&&!Yn(t).No()&&t.fu.length>0}function cv(t){Yn(t).start()}async function bT(t){Yn(t).eu()}async function wT(t){const e=Yn(t);for(const n of t.fu)e.Xo(n.mutations)}async function _T(t,e,n){const r=t.fu.shift(),s=vh.from(r,e,n);await ov(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await dc(t)}async function ET(t,e){e&&Yn(t).Yo&&await async function(n,r){if(s=r.code,lI(s)&&s!==I.ABORTED){const i=n.fu.shift();Yn(n).Mo(),await ov(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await dc(n)}var s}(t,e),av(t)&&cv(t)}async function zd(t,e){const n=se(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=Fr(n);n._u.add(3),await eo(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await fc(n)}async function IT(t,e){const n=se(t);e?(n._u.delete(2),await fc(n)):e||(n._u.add(2),await eo(n),n.gu.set("Unknown"))}function Ns(t){return t.pu||(t.pu=function(e,n,r){const s=se(e);return s.su(),new lT(n,s.connection,s.authCredentials,s.appCheckCredentials,s.It,r)}(t.datastore,t.asyncQueue,{Yr:mT.bind(null,t),Zr:pT.bind(null,t),Wo:gT.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Th(t)?Ih(t):t.gu.set("Unknown")):(await t.pu.stop(),iv(t))})),t.pu}function Yn(t){return t.Iu||(t.Iu=function(e,n,r){const s=se(e);return s.su(),new uT(n,s.connection,s.authCredentials,s.appCheckCredentials,s.It,r)}(t.datastore,t.asyncQueue,{Yr:bT.bind(null,t),Zr:ET.bind(null,t),tu:wT.bind(null,t),Zo:_T.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await dc(t)):(await t.Iu.stop(),t.fu.length>0&&(q("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new kh(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xh(t,e){if(mn("AsyncQueue",`${e}: ${t}`),Xi(t))return new O(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Hs(),this.sortedSet=new We(this.comparator)}static emptySet(e){return new rs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof rs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new rs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(){this.Tu=new We(K.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):re():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class ys{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ys(e,n,rs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ac(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(){this.Au=void 0,this.listeners=[]}}class kT{constructor(){this.queries=new Cs(e=>Ny(e),ac),this.onlineState="Unknown",this.Ru=new Set}}async function lv(t,e){const n=se(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new TT),s)try{i.Au=await n.onListen(r)}catch(o){const a=xh(o,`Initialization of query '${Hl(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Sh(n)}async function uv(t,e){const n=se(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function xT(t,e){const n=se(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(s)&&(r=!0);o.Au=s}}r&&Sh(n)}function ST(t,e,n){const r=se(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Sh(t){t.Ru.forEach(e=>{e.next()})}class hv{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ys(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=ys.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e){this.key=e}}class dv{constructor(e){this.key=e}}class AT{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=he(),this.mutatedKeys=he(),this.Gu=Ry(e),this.Qu=new rs(this.Gu)}get ju(){return this.Uu}Wu(e,n){const r=n?n.zu:new qd,s=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),m=ph(this.query,h)?h:null,g=!!f&&this.mutatedKeys.has(f.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let T=!1;f&&m?f.data.isEqual(m.data)?g!==v&&(r.track({type:3,doc:m}),T=!0):this.Hu(f,m)||(r.track({type:2,doc:m}),T=!0,(c&&this.Gu(m,c)>0||l&&this.Gu(m,l)<0)&&(a=!0)):!f&&m?(r.track({type:0,doc:m}),T=!0):f&&!m&&(r.track({type:1,doc:f}),T=!0,(c||l)&&(a=!0)),T&&(m?(o=o.add(m),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Qu:o,zu:r,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((l,u)=>function(h,f){const m=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re()}};return m(h)-m(f)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new ys(this.query,e.Qu,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new qd,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=he(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new dv(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new fv(r))}),n}tc(e){this.Uu=e.Hi,this.Ku=he();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return ys.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class CT{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class NT{constructor(e){this.key=e,this.nc=!1}}class RT{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Cs(a=>Ny(a),ac),this.rc=new Map,this.oc=new Set,this.uc=new We(K.comparator),this.cc=new Map,this.ac=new bh,this.hc={},this.lc=new Map,this.fc=gs.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function DT(t,e){const n=jT(t);let r,s;const i=n.ic.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.ec();else{const o=await nT(n.localStore,pn(e));n.isPrimaryClient&&nv(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await OT(n,e,r,a==="current",o.resumeToken)}return s}async function OT(t,e,n,r,s){t._c=(h,f,m)=>async function(g,v,T,y){let _=v.view.Wu(T);_.$i&&(_=await Bd(g.localStore,v.query,!1).then(({documents:X})=>v.view.Wu(X,_)));const D=y&&y.targetChanges.get(v.targetId),F=v.view.applyChanges(_,g.isPrimaryClient,D);return Wd(g,v.targetId,F.Xu),F.snapshot}(t,h,f,m);const i=await Bd(t.localStore,e,!0),o=new AT(e,i.Hi),a=o.Wu(i.documents),c=Zi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Wd(t,n,l.Xu);const u=new CT(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function PT(t,e){const n=se(t),r=n.ic.get(e),s=n.rc.get(r.targetId);if(s.length>1)return n.rc.set(r.targetId,s.filter(i=>!ac(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Wl(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),rv(n.remoteStore,r.targetId),Gl(n,r.targetId)}).catch(Qi)):(Gl(n,r.targetId),await Wl(n.localStore,r.targetId,!0))}async function MT(t,e,n){const r=HT(t);try{const s=await function(i,o){const a=se(i),c=qe.now(),l=o.reduce((f,m)=>f.add(m.key),he());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let m=gn(),g=he();return a.Gi.getEntries(f,l).next(v=>{m=v,m.forEach((T,y)=>{y.isValidDocument()||(g=g.add(T))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,m)).next(v=>{u=v;const T=[];for(const y of o){const _=oI(y,u.get(y.key).overlayedDocument);_!=null&&T.push(new nr(y.key,_,Ay(_.value.mapValue),Ht.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,T,o)}).next(v=>{h=v;const T=v.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(f,v.batchId,T)})}).then(()=>({batchId:h.batchId,changes:jy(u)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new We(we)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(r,s.batchId,n),await to(r,s.changes),await dc(r.remoteStore)}catch(s){const i=xh(s,"Failed to persist write");n.reject(i)}}async function mv(t,e){const n=se(t);try{const r=await ZI(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.cc.get(i);o&&(Ae(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.nc=!0:s.modifiedDocuments.size>0?Ae(o.nc):s.removedDocuments.size>0&&(Ae(o.nc),o.nc=!1))}),await to(n,r,e)}catch(r){await Qi(r)}}function Kd(t,e,n){const r=se(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=se(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&Sh(a)}(r.eventManager,e),s.length&&r.sc.Wo(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function LT(t,e,n){const r=se(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.cc.get(e),i=s&&s.key;if(i){let o=new We(K.comparator);o=o.insert(i,rt.newNoDocument(i,le.min()));const a=he().add(i),c=new uc(le.min(),new Map,new Ke(we),o,a);await mv(r,c),r.uc=r.uc.remove(i),r.cc.delete(e),Ah(r)}else await Wl(r.localStore,e,!1).then(()=>Gl(r,e,n)).catch(Qi)}async function $T(t,e){const n=se(t),r=e.batch.batchId;try{const s=await JI(n.localStore,e);gv(n,r,null),pv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await to(n,s)}catch(s){await Qi(s)}}async function FT(t,e,n){const r=se(t);try{const s=await function(i,o){const a=se(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Ae(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(r.localStore,e);gv(r,e,n),pv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await to(r,s)}catch(s){await Qi(s)}}function pv(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function gv(t,e,n){const r=se(t);let s=r.hc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.hc[r.currentUser.toKey()]=s}}function Gl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||yv(t,r)})}function yv(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(rv(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Ah(t))}function Wd(t,e,n){for(const r of n)r instanceof fv?(t.ac.addReference(r.key,e),UT(t,r)):r instanceof dv?(q("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||yv(t,r.key)):re()}function UT(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(q("SyncEngine","New document in limbo: "+n),t.oc.add(r),Ah(t))}function Ah(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new K(Se.fromString(e)),r=t.fc.next();t.cc.set(r,new NT(n)),t.uc=t.uc.insert(n,r),nv(t.remoteStore,new Ir(pn(hh(n.path)),r,2,oh.at))}}async function to(t,e,n){const r=se(t),s=[],i=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,c)=>{o.push(r._c(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=_h.Ci(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.sc.Wo(s),await async function(a,c){const l=se(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>A.forEach(c,h=>A.forEach(h.Si,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>A.forEach(h.Di,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Xi(u))throw u;q("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Ui.get(h),m=f.snapshotVersion,g=f.withLastLimboFreeSnapshotVersion(m);l.Ui=l.Ui.insert(h,g)}}}(r.localStore,i))}async function VT(t,e){const n=se(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await Jy(n.localStore,e);n.currentUser=e,function(s,i){s.lc.forEach(o=>{o.forEach(a=>{a.reject(new O(I.CANCELLED,i))})}),s.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await to(n,r.ji)}}function BT(t,e){const n=se(t),r=n.cc.get(e);if(r&&r.nc)return he().add(r.key);{let s=he();const i=n.rc.get(e);if(!i)return s;for(const o of i){const a=n.ic.get(o);s=s.unionWith(a.view.ju)}return s}}function jT(t){const e=se(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=mv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=BT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=LT.bind(null,e),e.sc.Wo=xT.bind(null,e.eventManager),e.sc.wc=ST.bind(null,e.eventManager),e}function HT(t){const e=se(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$T.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=FT.bind(null,e),e}class zT{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=hc(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return XI(this.persistence,new YI,e.initialUser,this.It)}yc(e){return new WI(wh.Bs,this.It)}gc(e){return new sT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class qT{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Kd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=VT.bind(null,this.syncEngine),await IT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new kT}createDatastore(e){const n=hc(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new cT(s));var s;return function(i,o,a,c){return new hT(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>Kd(this.syncEngine,a,0),o=Hd.C()?new Hd:new iT,new dT(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,l){const u=new RT(r,s,i,o,a,c);return l&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=se(e);q("RemoteStore","RemoteStore shutting down."),n._u.add(5),await eo(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(t,e,n){if(!n)throw new O(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function KT(t,e,n,r){if(e===!0&&r===!0)throw new O(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Gd(t){if(!K.isDocumentKey(t))throw new O(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Yd(t){if(K.isDocumentKey(t))throw new O(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function mc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re()}function yn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new O(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mc(t);throw new O(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function WT(t,e){if(e<=0)throw new O(I.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd=new Map;class Xd{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new O(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,KT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new O(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new O(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xd(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new I2;switch(n.type){case"gapi":const r=n.client;return new S2(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new O(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Qd.get(e);n&&(q("ComponentProvider","Removing Datastore"),Qd.delete(e),n.terminate())}(this),Promise.resolve()}}function GT(t,e,n,r={}){var s;const i=(t=yn(t,pc))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Ul("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=ct.MOCK_USER;else{o=o_(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new O(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ct(c)}t._authCredentials=new T2(new Ty(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tt(this.firestore,e,this._key)}}class rr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new rr(this.firestore,e,this._query)}}class zn extends rr{constructor(e,n,r){super(e,n,hh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new K(e))}withConverter(e){return new zn(this.firestore,e,this._path)}}function Ch(t,e,...n){if(t=ot(t),vv("collection","path",e),t instanceof pc){const r=Se.fromString(e,...n);return Yd(r),new zn(t,null,r)}{if(!(t instanceof Tt||t instanceof zn))throw new O(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return Yd(r),new zn(t.firestore,null,r)}}function Zs(t,e,...n){if(t=ot(t),arguments.length===1&&(e=ky.R()),vv("doc","path",e),t instanceof pc){const r=Se.fromString(e,...n);return Gd(r),new Tt(t,null,new K(r))}{if(!(t instanceof Tt||t instanceof zn))throw new O(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return Gd(r),new Tt(t.firestore,t instanceof zn?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):mn("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ct.UNAUTHENTICATED,this.clientId=ky.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{q("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(q("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new O(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=xh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function QT(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Jy(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function XT(t,e){t.asyncQueue.verifyOperationInProgress();const n=await JT(t);q("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>zd(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>zd(e.remoteStore,i)),t.onlineComponents=e}async function JT(t){return t.offlineComponents||(q("FirestoreClient","Using default OfflineComponentProvider"),await QT(t,new zT)),t.offlineComponents}async function wv(t){return t.onlineComponents||(q("FirestoreClient","Using default OnlineComponentProvider"),await XT(t,new qT)),t.onlineComponents}function ZT(t){return wv(t).then(e=>e.syncEngine)}async function _v(t){const e=await wv(t),n=e.eventManager;return n.onListen=DT.bind(null,e.syncEngine),n.onUnlisten=PT.bind(null,e.syncEngine),n}function ek(t,e,n={}){const r=new un;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const l=new bv({next:h=>{i.enqueueAndForget(()=>uv(s,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new O(I.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new O(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new hv(hh(o.path),l,{includeMetadataChanges:!0,Nu:!0});return lv(s,u)}(await _v(t),t.asyncQueue,e,n,r)),r.promise}function tk(t,e,n={}){const r=new un;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const l=new bv({next:h=>{i.enqueueAndForget(()=>uv(s,u)),h.fromCache&&a.source==="server"?c.reject(new O(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new hv(o,l,{includeMetadataChanges:!0,Nu:!0});return lv(s,u)}(await _v(t),t.asyncQueue,e,n,r)),r.promise}class nk{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new ev(this,"async_queue_retry"),this.Wc=()=>{const n=Zc();n&&q("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Zc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=Zc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new un;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Xi(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw mn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const s=kh.createAndSchedule(this,e,n,r,i=>this.Yc(i));return this.qc.push(s),s}zc(){this.Kc&&re()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}class Rs extends pc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new nk,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ev(this),this._firestoreClient.terminate()}}function rk(t,e){const n=typeof t=="object"?t:bg(),r=typeof t=="string"?t:e||"(default)",s=$u(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=r_("firestore");i&&GT(s,...i)}return s}function Nh(t){return t._firestoreClient||Ev(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ev(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new F2(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new YT(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vs(gt.fromBase64String(e))}catch(n){throw new O(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new vs(gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new O(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new O(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new O(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk=/^__.*__$/;class ik{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new nr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ji(e,this.data,n,this.fieldTransforms)}}class Iv{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new nr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Tv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class Oh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=s,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Oh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ia({path:r,oa:!1});return s.ua(e),s}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ia({path:r,oa:!1});return s.na(),s}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return ba(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Tv(this.sa)&&sk.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class ok{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||hc(e)}da(e,n,r,s=!1){return new Oh({sa:e,methodName:n,fa:r,path:ut.emptyPath(),oa:!1,la:s},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function yc(t){const e=t._freezeSettings(),n=hc(t._databaseId);return new ok(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ak(t,e,n,r,s,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,s);Ph("Data must be an object, but it was:",o,r);const a=xv(r,o);let c,l;if(i.merge)c=new Dt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=Yl(e,h,n);if(!o.contains(f))throw new O(I.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Av(u,f)||u.push(f)}c=new Dt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new ik(new It(a),c,l)}class vc extends Rh{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof vc}}function ck(t,e,n,r){const s=t.da(1,e,n);Ph("Data must be an object, but it was:",s,r);const i=[],o=It.empty();Lr(r,(c,l)=>{const u=Mh(e,c,n);l=ot(l);const h=s.ca(u);if(l instanceof vc)i.push(u);else{const f=no(l,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new Dt(i);return new Iv(o,a,s.fieldTransforms)}function lk(t,e,n,r,s,i){const o=t.da(1,e,n),a=[Yl(e,r,n)],c=[s];if(i.length%2!=0)throw new O(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Yl(e,i[f])),c.push(i[f+1]);const l=[],u=It.empty();for(let f=a.length-1;f>=0;--f)if(!Av(l,a[f])){const m=a[f];let g=c[f];g=ot(g);const v=o.ca(m);if(g instanceof vc)l.push(m);else{const T=no(g,v);T!=null&&(l.push(m),u.set(m,T))}}const h=new Dt(l);return new Iv(u,h,o.fieldTransforms)}function kv(t,e,n,r=!1){return no(n,t.da(r?4:3,e))}function no(t,e){if(Sv(t=ot(t)))return Ph("Unsupported field value:",e,t),xv(t,e);if(t instanceof Rh)return function(n,r){if(!Tv(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=no(o,r.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=ot(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return eI(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=qe.fromDate(n);return{timestampValue:ya(r.It,s)}}if(n instanceof qe){const s=new qe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ya(r.It,s)}}if(n instanceof Dh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof vs)return{bytesValue:Wy(r.It,n._byteString)};if(n instanceof Tt){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:yh(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${mc(n)}`)}(t,e)}function xv(t,e){const n={};return xy(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Lr(t,(r,s)=>{const i=no(s,e.ra(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Sv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof qe||t instanceof Dh||t instanceof vs||t instanceof Tt||t instanceof Rh)}function Ph(t,e,n){if(!Sv(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=mc(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function Yl(t,e,n){if((e=ot(e))instanceof gc)return e._internalPath;if(typeof e=="string")return Mh(t,e);throw ba("Field path arguments must be of type string or ",t,!1,void 0,n)}const uk=new RegExp("[~\\*/\\[\\]]");function Mh(t,e,n){if(e.search(uk)>=0)throw ba(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gc(...e.split("."))._internalPath}catch{throw ba(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ba(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new O(I.INVALID_ARGUMENT,a+t+c)}function Av(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new hk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(bc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class hk extends Lh{data(){return super.data()}}function bc(t,e){return typeof e=="string"?Mh(t,e):e instanceof gc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new O(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wc{}function wa(t,...e){for(const n of e)t=n._apply(t);return t}class dk extends wc{constructor(e,n,r){super(),this.ma=e,this.ga=n,this.ya=r,this.type="where"}_apply(e){const n=yc(e.firestore),r=function(s,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new O(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){em(u,l);const m=[];for(const g of u)m.push(Zd(a,s,g));h={arrayValue:{values:m}}}else h=Zd(a,s,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||em(u,l),h=kv(o,i,u,l==="in"||l==="not-in");const f=bt.create(c,l,h);return function(m,g){if(g.dt()){const T=dh(m);if(T!==null&&!T.isEqual(g.field))throw new O(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${T.toString()}' and '${g.field.toString()}'`);const y=fh(m);y!==null&&Cv(m,g.field,y)}const v=function(T,y){for(const _ of T.filters)if(y.indexOf(_.op)>=0)return _.op;return null}(m,function(T){switch(T){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(g.op));if(v!==null)throw v===g.op?new O(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${g.op.toString()}' filter.`):new O(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${g.op.toString()}' filters with '${v.toString()}' filters.`)}(s,f),f}(e._query,"where",n,e.firestore._databaseId,this.ma,this.ga,this.ya);return new rr(e.firestore,e.converter,function(s,i){const o=s.filters.concat([i]);return new $r(s.path,s.collectionGroup,s.explicitOrderBy.slice(),o,s.limit,s.limitType,s.startAt,s.endAt)}(e._query,r))}}function _a(t,e,n){const r=e,s=bc("where",t);return new dk(s,r,n)}class mk extends wc{constructor(e,n){super(),this.ma=e,this.pa=n,this.type="orderBy"}_apply(e){const n=function(r,s,i){if(r.startAt!==null)throw new O(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new O(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new ns(s,i);return function(a,c){if(fh(a)===null){const l=dh(a);l!==null&&Cv(a,l,c.field)}}(r,o),o}(e._query,this.ma,this.pa);return new rr(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new $r(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function Jd(t,e="asc"){const n=e,r=bc("orderBy",t);return new mk(r,n)}class pk extends wc{constructor(e,n,r){super(),this.type=e,this.Ia=n,this.Ta=r}_apply(e){return new rr(e.firestore,e.converter,ma(e._query,this.Ia,this.Ta))}}function Ql(t){return WT("limit",t),new pk("limit",t,"F")}class gk extends wc{constructor(e,n,r){super(),this.type=e,this.Ea=n,this.Aa=r}_apply(e){const n=vk(e,this.type,this.Ea,this.Aa);return new rr(e.firestore,e.converter,function(r,s){return new $r(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,s,r.endAt)}(e._query,n))}}function yk(...t){return new gk("startAfter",t,!1)}function vk(t,e,n,r){if(n[0]=ot(n[0]),n[0]instanceof Lh)return function(s,i,o,a,c){if(!a)throw new O(I.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const u of ps(s))if(u.field.isKeyField())l.push(da(i,a.key));else{const h=a.data.field(u.field);if(ah(h))throw new O(I.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+u.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const f=u.field.canonicalString();throw new O(I.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}l.push(h)}return new ms(l,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const s=yc(t.firestore);return function(i,o,a,c,l,u){const h=i.explicitOrderBy;if(l.length>h.length)throw new O(I.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let m=0;m<l.length;m++){const g=l[m];if(h[m].field.isKeyField()){if(typeof g!="string")throw new O(I.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof g}`);if(!mh(i)&&g.indexOf("/")!==-1)throw new O(I.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${g}' contains a slash.`);const v=i.path.child(Se.fromString(g));if(!K.isDocumentKey(v))throw new O(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const T=new K(v);f.push(da(o,T))}else{const v=kv(a,c,g);f.push(v)}}return new ms(f,u)}(t._query,t.firestore._databaseId,s,e,n,r)}}function Zd(t,e,n){if(typeof(n=ot(n))=="string"){if(n==="")throw new O(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!mh(e)&&n.indexOf("/")!==-1)throw new O(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Se.fromString(n));if(!K.isDocumentKey(r))throw new O(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return da(t,new K(r))}if(n instanceof Tt)return da(t,n._key);throw new O(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${mc(n)}.`)}function em(t,e){if(!Array.isArray(t)||t.length===0)throw new O(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new O(I.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Cv(t,e,n){if(!n.isEqual(e))throw new O(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{convertValue(e,n="none"){switch(Cr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(fs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw re()}}convertObject(e,n){const r={};return Lr(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Dh(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Sy(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(bi(e));default:return null}}convertTimestamp(e){const n=Gn(e);return new qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Se.fromString(e);Ae(Xy(r));const s=new wi(r.get(1),r.get(3)),i=new K(r.popFirst(5));return s.isEqual(n)||mn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wk(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Nv extends Lh{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Bo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(bc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Bo extends Nv{data(e={}){return super.data(e)}}class _k{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new zs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Bo(this._firestore,this._userDataWriter,r.key,r,new zs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new O(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>{const a=new Bo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new zs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Bo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new zs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:Ek(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Ek(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(t){t=yn(t,Tt);const e=yn(t.firestore,Rs);return ek(Nh(e),t._key).then(n=>kk(e,t,n))}class Rv extends bk{constructor(e){super(),this.firestore=e}convertBytes(e){return new vs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,n)}}function Ea(t){t=yn(t,rr);const e=yn(t.firestore,Rs),n=Nh(e),r=new Rv(e);return fk(t._query),tk(n,t._query).then(s=>new _k(e,r,t,s))}function tm(t,e,n,...r){t=yn(t,Tt);const s=yn(t.firestore,Rs),i=yc(s);let o;return o=typeof(e=ot(e))=="string"||e instanceof gc?lk(i,"updateDoc",t._key,e,n,r):ck(i,"updateDoc",t._key,e),Fh(s,[o.toMutation(t._key,Ht.exists(!0))])}function Ik(t){return Fh(yn(t.firestore,Rs),[new gh(t._key,Ht.none())])}function Tk(t,e){const n=yn(t.firestore,Rs),r=Zs(t),s=wk(t.converter,e);return Fh(n,[ak(yc(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Ht.exists(!1))]).then(()=>r)}function Fh(t,e){return function(n,r){const s=new un;return n.asyncQueue.enqueueAndForget(async()=>MT(await ZT(n),r,s)),s.promise}(Nh(t),e)}function kk(t,e,n){const r=n.docs.get(e._key),s=new Rv(t);return new Nv(t,s,e._key,r,new zs(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){As=n})(Vi),ls(new xr("firestore",(n,{instanceIdentifier:r,options:s})=>{const i=n.getProvider("app").getImmediate(),o=new Rs(new k2(n.getProvider("auth-internal")),new C2(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new O(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wi(a.options.projectId,c)}(i,r),i);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),Hn(Ed,"3.7.2",t),Hn(Ed,"3.7.2","esm2017")})();function Uh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Dv(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xk=Dv,Ov=new Fi("auth","Firebase",Dv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm=new Mu("@firebase/auth");function jo(t,...e){nm.logLevel<=ve.ERROR&&nm.error(`Auth (${Vi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(t,...e){throw Vh(t,...e)}function Zt(t,...e){return Vh(t,...e)}function Sk(t,e,n){const r=Object.assign(Object.assign({},xk()),{[e]:n});return new Fi("auth","Firebase",r).create(e,{appName:t.name})}function Vh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ov.create(t,...e)}function J(t,e,...n){if(!t)throw Vh(e,...n)}function cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw jo(e),new Error(e)}function vn(t,e){t||cn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm=new Map;function ln(t){vn(t instanceof Function,"Expected a class definition");let e=rm.get(t);return e?(vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,rm.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ak(t,e){const n=$u(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(na(i,e!=null?e:{}))return s;zt(s,"already-initialized")}return n.initialize({options:e})}function Ck(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ln);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Nk(){return sm()==="http:"||sm()==="https:"}function sm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Nk()||Gw()||"connection"in navigator)?navigator.onLine:!0}function Dk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,n){this.shortDelay=e,this.longDelay=n,vn(n>e,"Short delay should be less than long delay!"),this.isMobile=Ww()||Yw()}get(){return Rk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(t,e){vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=new ro(3e4,6e4);function _c(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function so(t,e,n,r,s={}){return Mv(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ui(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Pv.fetch()(Lv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Mv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ok),e);try{const s=new Mk(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw To(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw To(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw To(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw To(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Sk(t,u,l);zt(t,u)}}catch(s){if(s instanceof In)throw s;zt(t,"network-request-failed")}}async function Ec(t,e,n,r,s={}){const i=await so(t,e,n,r,s);return"mfaPendingCredential"in i&&zt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Lv(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Bh(t.config,s):`${t.config.apiScheme}://${s}`}class Mk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Zt(this.auth,"network-request-failed")),Pk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function To(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Zt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lk(t,e){return so(t,"POST","/v1/accounts:delete",e)}async function $k(t,e){return so(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Fk(t,e=!1){const n=ot(t),r=await n.getIdToken(e),s=jh(r);J(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ei(el(s.auth_time)),issuedAtTime:ei(el(s.iat)),expirationTime:ei(el(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function el(t){return Number(t)*1e3}function jh(t){var e;const[n,r,s]=t.split(".");if(n===void 0||r===void 0||s===void 0)return jo("JWT malformed, contained fewer than 3 sections"),null;try{const i=dg(r);return i?JSON.parse(i):(jo("Failed to decode base64 JWT payload"),null)}catch(i){return jo("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function Uk(t){const e=jh(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ti(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof In&&Vk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Vk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ei(this.lastLoginAt),this.creationTime=ei(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ia(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ti(t,$k(n,{idToken:r}));J(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?zk(i.providerUserInfo):[],a=Hk(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new $v(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function jk(t){const e=ot(t);await Ia(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Hk(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function zk(t){return t.map(e=>{var{providerId:n}=e,r=Uh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qk(t,e){const n=await Mv(t,{},async()=>{const r=Ui({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Lv(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Pv.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Uk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return J(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await qk(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ki;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(J(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(J(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ki,this.toJSON())}_performRefresh(){return cn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Tr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Uh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Bk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new $v(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ti(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Fk(this,e)}reload(){return jk(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Tr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ia(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ti(this,Lk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,y=(l=n.createdAt)!==null&&l!==void 0?l:void 0,_=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:D,emailVerified:F,isAnonymous:X,providerData:fe,stsTokenManager:me}=n;J(D&&me,e,"internal-error");const Z=ki.fromJSON(this.name,me);J(typeof D=="string",e,"internal-error"),Cn(h,e.name),Cn(f,e.name),J(typeof F=="boolean",e,"internal-error"),J(typeof X=="boolean",e,"internal-error"),Cn(m,e.name),Cn(g,e.name),Cn(v,e.name),Cn(T,e.name),Cn(y,e.name),Cn(_,e.name);const oe=new Tr({uid:D,auth:e,email:f,emailVerified:F,displayName:h,isAnonymous:X,photoURL:g,phoneNumber:m,tenantId:v,stsTokenManager:Z,createdAt:y,lastLoginAt:_});return fe&&Array.isArray(fe)&&(oe.providerData=fe.map(ye=>Object.assign({},ye))),T&&(oe._redirectEventId=T),oe}static async _fromIdTokenResponse(e,n,r=!1){const s=new ki;s.updateFromServerResponse(n);const i=new Tr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ia(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Fv.type="NONE";const im=Fv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(t,e,n){return`firebase:${t}:${e}:${n}`}class ss{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ho(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ho("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ss(ln(im),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||ln(im);const o=Ho(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Tr._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ss(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new ss(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Uv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hv(e))return"Blackberry";if(zv(e))return"Webos";if(Hh(e))return"Safari";if((e.includes("chrome/")||Vv(e))&&!e.includes("edge/"))return"Chrome";if(jv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Uv(t=pt()){return/firefox\//i.test(t)}function Hh(t=pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vv(t=pt()){return/crios\//i.test(t)}function Bv(t=pt()){return/iemobile/i.test(t)}function jv(t=pt()){return/android/i.test(t)}function Hv(t=pt()){return/blackberry/i.test(t)}function zv(t=pt()){return/webos/i.test(t)}function Ic(t=pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Kk(t=pt()){var e;return Ic(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Wk(){return Qw()&&document.documentMode===10}function qv(t=pt()){return Ic(t)||jv(t)||zv(t)||Hv(t)||/windows phone/i.test(t)||Bv(t)}function Gk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(t,e=[]){let n;switch(t){case"Browser":n=om(pt());break;case"Worker":n=`${om(pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new am(this),this.idTokenSubscription=new am(this),this.beforeStateQueue=new Yk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ov,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ln(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ss.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Ia(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Dk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ot(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ln(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ln(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await ss.create(this,[ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return J(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Kv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Tc(t){return ot(t)}class am{constructor(e){this.auth=e,this.observer=null,this.addObserver=h_(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Xk(t,e,n){const r=Tc(t);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Wv(e),{host:o,port:a}=Jk(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Zk()}function Wv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Jk(t){const e=Wv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:cm(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:cm(o)}}}function cm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Zk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return cn("not implemented")}_getIdTokenResponse(e){return cn("not implemented")}_linkToIdToken(e,n){return cn("not implemented")}_getReauthenticationResolver(e){return cn("not implemented")}}async function ex(t,e){return so(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tx(t,e){return Ec(t,"POST","/v1/accounts:signInWithPassword",_c(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nx(t,e){return Ec(t,"POST","/v1/accounts:signInWithEmailLink",_c(t,e))}async function rx(t,e){return Ec(t,"POST","/v1/accounts:signInWithEmailLink",_c(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi extends zh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new xi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new xi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return tx(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return nx(e,{email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return ex(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return rx(e,{idToken:n,email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function is(t,e){return Ec(t,"POST","/v1/accounts:signInWithIdp",_c(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sx="http://localhost";class Nr extends zh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Nr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Uh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Nr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return is(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,is(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,is(e,n)}buildRequest(){const e={requestUri:sx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ui(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ix(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ox(t){const e=Us(Vs(t)).link,n=e?Us(Vs(e)).deep_link_id:null,r=Us(Vs(t)).deep_link_id;return(r?Us(Vs(r)).link:null)||r||n||e||t}class qh{constructor(e){var n,r,s,i,o,a;const c=Us(Vs(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=ix((s=c.mode)!==null&&s!==void 0?s:null);J(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=ox(e);try{return new qh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(){this.providerId=Ds.PROVIDER_ID}static credential(e,n){return xi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=qh.parseLink(n);return J(r,"argument-error"),xi._fromEmailAndCode(e,r.code,r.tenantId)}}Ds.PROVIDER_ID="password";Ds.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ds.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io extends Gv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends io{constructor(){super("facebook.com")}static credential(e){return Nr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends io{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Nr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.GOOGLE_SIGN_IN_METHOD="google.com";Mn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends io{constructor(){super("github.com")}static credential(e){return Nr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.GITHUB_SIGN_IN_METHOD="github.com";Ln.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends io{constructor(){super("twitter.com")}static credential(e,n){return Nr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return $n.credential(n,r)}catch{return null}}}$n.TWITTER_SIGN_IN_METHOD="twitter.com";$n.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Tr._fromIdTokenResponse(e,r,s),o=lm(r);return new bs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=lm(r);return new bs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function lm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta extends In{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ta.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ta(e,n,r,s)}}function Yv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ta._fromErrorAndOperation(t,i,e,r):i})}async function ax(t,e,n=!1){const r=await Ti(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return bs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cx(t,e,n=!1){var r;const{auth:s}=t,i="reauthenticate";try{const o=await Ti(t,Yv(s,i,e,t),n);J(o.idToken,s,"internal-error");const a=jh(o.idToken);J(a,s,"internal-error");const{sub:c}=a;return J(t.uid===c,s,"user-mismatch"),bs._forOperation(t,i,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&zt(s,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qv(t,e,n=!1){const r="signIn",s=await Yv(t,r,e),i=await bs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function lx(t,e){return Qv(Tc(t),e)}function ux(t,e,n){return lx(ot(t),Ds.credential(e,n))}function hx(t,e,n,r){return ot(t).onIdTokenChanged(e,n,r)}function fx(t,e,n){return ot(t).beforeAuthStateChanged(e,n)}const ka="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ka,"1"),this.storage.removeItem(ka),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dx(){const t=pt();return Hh(t)||Ic(t)}const mx=1e3,px=10;class Jv extends Xv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=dx()&&Gk(),this.fallbackToPolling=qv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Wk()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,px):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},mx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jv.type="LOCAL";const gx=Jv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv extends Xv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Zv.type="SESSION";const e0=Zv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new kc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await yx(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Kh("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(){return window}function bx(t){en().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(){return typeof en().WorkerGlobalScope<"u"&&typeof en().importScripts=="function"}async function wx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _x(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ex(){return t0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0="firebaseLocalStorageDb",Ix=1,xa="firebaseLocalStorage",r0="fbase_key";class oo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xc(t,e){return t.transaction([xa],e?"readwrite":"readonly").objectStore(xa)}function Tx(){const t=indexedDB.deleteDatabase(n0);return new oo(t).toPromise()}function Jl(){const t=indexedDB.open(n0,Ix);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(xa,{keyPath:r0})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(xa)?e(r):(r.close(),await Tx(),e(await Jl()))})})}async function um(t,e,n){const r=xc(t,!0).put({[r0]:e,value:n});return new oo(r).toPromise()}async function kx(t,e){const n=xc(t,!1).get(e),r=await new oo(n).toPromise();return r===void 0?null:r.value}function hm(t,e){const n=xc(t,!0).delete(e);return new oo(n).toPromise()}const xx=800,Sx=3;class s0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Sx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return t0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kc._getInstance(Ex()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await wx(),!this.activeServiceWorker)return;this.sender=new vx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_x()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jl();return await um(e,ka,"1"),await hm(e,ka),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>um(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>kx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>hm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=xc(s,!1).getAll();return new oo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}s0.type="LOCAL";const Ax=s0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Nx(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Zt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Cx().appendChild(r)})}function Rx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ro(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dx(t,e){return e?ln(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh extends zh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return is(e,this._buildIdpRequest())}_linkToIdToken(e,n){return is(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return is(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ox(t){return Qv(t.auth,new Wh(t),t.bypassAuthState)}function Px(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),cx(n,new Wh(t),t.bypassAuthState)}async function Mx(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),ax(n,new Wh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ox;case"linkViaPopup":case"linkViaRedirect":return Mx;case"reauthViaPopup":case"reauthViaRedirect":return Px;default:zt(this.auth,"internal-error")}}resolve(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lx=new ro(2e3,1e4);class Wr extends i0{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Wr.currentPopupAction&&Wr.currentPopupAction.cancel(),Wr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){vn(this.filter.length===1,"Popup operations only handle one event");const e=Kh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Lx.get())};e()}}Wr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $x="pendingRedirect",zo=new Map;class Fx extends i0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=zo.get(this.auth._key());if(!e){try{const r=await Ux(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}zo.set(this.auth._key(),e)}return this.bypassAuthState||zo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ux(t,e){const n=jx(e),r=Bx(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Vx(t,e){zo.set(t._key(),e)}function Bx(t){return ln(t._redirectPersistence)}function jx(t){return Ho($x,t.config.apiKey,t.name)}async function Hx(t,e,n=!1){const r=Tc(t),s=Dx(r,e),o=await new Fx(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zx=10*60*1e3;class qx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Kx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!o0(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Zt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zx&&this.cachedEventUids.clear(),this.cachedEventUids.has(fm(e))}saveEventToCache(e){this.cachedEventUids.add(fm(e)),this.lastProcessedEventTime=Date.now()}}function fm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function o0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Kx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return o0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wx(t,e={}){return so(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Yx=/^https?/;async function Qx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Wx(t);for(const n of e)try{if(Xx(n))return}catch{}zt(t,"unauthorized-domain")}function Xx(t){const e=Xl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Yx.test(n))return!1;if(Gx.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jx=new ro(3e4,6e4);function dm(){const t=en().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Zx(t){return new Promise((e,n)=>{var r,s,i;function o(){dm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dm(),n(Zt(t,"network-request-failed"))},timeout:Jx.get()})}if(!((s=(r=en().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=en().gapi)===null||i===void 0)&&i.load)o();else{const a=Rx("iframefcb");return en()[a]=()=>{gapi.load?o():n(Zt(t,"network-request-failed"))},Nx(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw qo=null,e})}let qo=null;function eS(t){return qo=qo||Zx(t),qo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS=new ro(5e3,15e3),nS="__/auth/iframe",rS="emulator/auth/iframe",sS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oS(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bh(e,rS):`https://${t.config.authDomain}/${nS}`,r={apiKey:e.apiKey,appName:t.name,v:Vi},s=iS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ui(r).slice(1)}`}async function aS(t){const e=await eS(t),n=en().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:oS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Zt(t,"network-request-failed"),a=en().setTimeout(()=>{i(o)},tS.get());function c(){en().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lS=500,uS=600,hS="_blank",fS="http://localhost";class mm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dS(t,e,n,r=lS,s=uS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},cS),{width:r.toString(),height:s.toString(),top:i,left:o}),l=pt().toLowerCase();n&&(a=Vv(l)?hS:n),Uv(l)&&(e=e||fS,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[m,g])=>`${f}${m}=${g},`,"");if(Kk(l)&&a!=="_self")return mS(e||"",a),new mm(null);const h=window.open(e||"",a,u);J(h,t,"popup-blocked");try{h.focus()}catch{}return new mm(h)}function mS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS="__/auth/handler",gS="emulator/auth/handler";function pm(t,e,n,r,s,i){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Vi,eventId:s};if(e instanceof Gv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",u_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof io){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${yS(t)}?${Ui(a).slice(1)}`}function yS({config:t}){return t.emulator?Bh(t,gS):`https://${t.authDomain}/${pS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl="webStorageSupport";class vS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=e0,this._completeRedirectFn=Hx,this._overrideRedirectResult=Vx}async _openPopup(e,n,r,s){var i;vn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=pm(e,n,r,Xl(),s);return dS(e,o,Kh())}async _openRedirect(e,n,r,s){return await this._originValidation(e),bx(pm(e,n,r,Xl(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(vn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await aS(e),r=new qx(e);return n.register("authEvent",s=>(J(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(tl,{type:tl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[tl];o!==void 0&&n(!!o),zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Qx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qv()||Hh()||Ic()}}const bS=vS;var gm="@firebase/auth",ym="0.20.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _S(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ES(t){ls(new xr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{J(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),J(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kv(t)},u=new Qk(a,c,l);return Ck(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ls(new xr("auth-internal",e=>{const n=Tc(e.getProvider("auth").getImmediate());return(r=>new wS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Hn(gm,ym,_S(t)),Hn(gm,ym,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS=5*60,TS=pg("authIdTokenMaxAge")||IS;let vm=null;const kS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>TS)return;const s=n==null?void 0:n.token;vm!==s&&(vm=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function xS(t=bg()){const e=$u(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ak(t,{popupRedirectResolver:bS,persistence:[Ax,gx,e0]}),r=pg("authTokenSyncURL");if(r){const i=kS(r);fx(n,i,()=>i(n.currentUser)),hx(n,o=>i(o))}const s=mg("auth");return s&&Xk(n,`http://${s}`),n}ES("Browser");const SS={apiKey:"AIzaSyA4C0hNEK3tgE6bTD2VqY1u4VRtjj0HZV0",authDomain:"vuejspractice-e2169.firebaseapp.com",projectId:"vuejspractice-e2169",storageBucket:"vuejspractice-e2169.appspot.com",messagingSenderId:"431420928789",appId:"1:431420928789:web:1b161f009d3f9a58ebaf1c"},a0=vg(SS),Si=xS(a0),kr=rk(a0),AS={name:"App",components:{NavigationBar:Fw,AlertDialog:ug},data(){return{isAuthenticated:!1,showingModal:!1}},beforeMount(){Si.onAuthStateChanged(t=>{this.isAuthenticated=t!=null})},methods:{logout(){Si.signOut(),this.$router.push("/login"),this.showingModal=!1},showModal(){this.showingModal=!0},closeModal(){this.showingModal=!1}}},CS={class:"h-screen"},NS=w("div",{class:"text-center bg-gradient-to-tl from-emerald-500 to-teal-500 py-20 h-80"},[w("h1",{class:"uppercase font-bold text-3xl text-white"},"rencana rakit pc"),w("h4",{class:"text-gray-50 py-2 leading-5 text-xl font-light tracking-wider"},"Bikin Rencana Rakitan PC Terbaikmu! ")],-1),RS={class:"mx-auto shadow-xl w-11/12 md:w-4/5 lg:w-3/5 xl:w-1/2 h-2/3 -mt-24 bg-white rounded-lg relative overflow-hidden"};function DS(t,e,n,r,s,i){const o=ce("router-view"),a=ce("NavigationBar"),c=ce("AlertDialog");return V(),Q("div",CS,[NS,w("div",RS,[U(o),U(a,{hide:!s.isAuthenticated,onLogout:e[0]||(e[0]=l=>i.showModal())},null,8,["hide"])]),U(c,{message:"Anda yakin ingin logout?",showing:s.showingModal,onClose:e[1]||(e[1]=l=>i.closeModal()),onYes:e[2]||(e[2]=l=>i.logout())},null,8,["showing"])])}const OS=Pe(AS,[["render",DS]]);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const zr=typeof window<"u";function PS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const _e=Object.assign;function nl(t,e){const n={};for(const r in e){const s=e[r];n[r]=qt(s)?s.map(t):t(s)}return n}const ti=()=>{},qt=Array.isArray,MS=/\/$/,LS=t=>t.replace(MS,"");function rl(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=VS(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function $S(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function bm(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function FS(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ws(e.matched[r],n.matched[s])&&c0(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ws(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function c0(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!US(t[n],e[n]))return!1;return!0}function US(t,e){return qt(t)?wm(t,e):qt(e)?wm(e,t):t===e}function wm(t,e){return qt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function VS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Ai;(function(t){t.pop="pop",t.push="push"})(Ai||(Ai={}));var ni;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ni||(ni={}));function BS(t){if(!t)if(zr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),LS(t)}const jS=/^[^#]+#/;function HS(t,e){return t.replace(jS,"#")+e}function zS(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Sc=()=>({left:window.pageXOffset,top:window.pageYOffset});function qS(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=zS(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function _m(t,e){return(history.state?history.state.position-e:-1)+t}const Zl=new Map;function KS(t,e){Zl.set(t,e)}function WS(t){const e=Zl.get(t);return Zl.delete(t),e}let GS=()=>location.protocol+"//"+location.host;function l0(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),bm(c,"")}return bm(n,t)+r+s}function YS(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const m=l0(t,location),g=n.value,v=e.value;let T=0;if(f){if(n.value=m,e.value=f,o&&o===g){o=null;return}T=v?f.position-v.position:0}else r(m);s.forEach(y=>{y(n.value,g,{delta:T,type:Ai.pop,direction:T?T>0?ni.forward:ni.back:ni.unknown})})};function c(){o=n.value}function l(f){s.push(f);const m=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return i.push(m),m}function u(){const{history:f}=window;!f.state||f.replaceState(_e({},f.state,{scroll:Sc()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function Em(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Sc():null}}function QS(t){const{history:e,location:n}=window,r={value:l0(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:GS()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](f)}}function o(c,l){const u=_e({},e.state,Em(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=_e({},s.value,e.state,{forward:c,scroll:Sc()});i(u.current,u,!0);const h=_e({},Em(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function XS(t){t=BS(t);const e=QS(t),n=YS(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=_e({location:"",base:t,go:r,createHref:HS.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function JS(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),XS(t)}function ZS(t){return typeof t=="string"||t&&typeof t=="object"}function u0(t){return typeof t=="string"||typeof t=="symbol"}const Nn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},h0=Symbol("");var Im;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Im||(Im={}));function _s(t,e){return _e(new Error,{type:t,[h0]:!0},e)}function sn(t,e){return t instanceof Error&&h0 in t&&(e==null||!!(t.type&e))}const Tm="[^/]+?",eA={sensitive:!1,strict:!1,start:!0,end:!0},tA=/[.+*?^${}()[\]/\\]/g;function nA(t,e){const n=_e({},eA,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let m=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(tA,"\\$&"),m+=40;else if(f.type===1){const{value:g,repeatable:v,optional:T,regexp:y}=f;i.push({name:g,repeatable:v,optional:T});const _=y||Tm;if(_!==Tm){m+=10;try{new RegExp(`(${_})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${g}" (${_}): `+F.message)}}let D=v?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;h||(D=T&&l.length<2?`(?:/${D})`:"/"+D),T&&(D+="?"),s+=D,m+=20,T&&(m+=-8),v&&(m+=-20),_===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const m=u[f]||"",g=i[f-1];h[g.name]=m&&g.repeatable?m.split("/"):m}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of f)if(m.type===0)u+=m.value;else if(m.type===1){const{value:g,repeatable:v,optional:T}=m,y=g in l?l[g]:"";if(qt(y)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const _=qt(y)?y.join("/"):y;if(!_)if(T)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=_}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function rA(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function sA(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=rA(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(km(r))return 1;if(km(s))return-1}return s.length-r.length}function km(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const iA={type:0,value:""},oA=/[a-zA-Z0-9_]/;function aA(t){if(!t)return[[]];if(t==="/")return[[iA]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:oA.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function cA(t,e,n){const r=nA(aA(t.path),n),s=_e(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function lA(t,e){const n=[],r=new Map;e=Am({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const m=!f,g=uA(u);g.aliasOf=f&&f.record;const v=Am(e,u),T=[g];if("alias"in u){const D=typeof u.alias=="string"?[u.alias]:u.alias;for(const F of D)T.push(_e({},g,{components:f?f.record.components:g.components,path:F,aliasOf:f?f.record:g}))}let y,_;for(const D of T){const{path:F}=D;if(h&&F[0]!=="/"){const X=h.record.path,fe=X[X.length-1]==="/"?"":"/";D.path=h.record.path+(F&&fe+F)}if(y=cA(D,h,v),f?f.alias.push(y):(_=_||y,_!==y&&_.alias.push(y),m&&u.name&&!Sm(y)&&o(u.name)),g.children){const X=g.children;for(let fe=0;fe<X.length;fe++)i(X[fe],y,f&&f.children[fe])}f=f||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&c(y)}return _?()=>{o(_)}:ti}function o(u){if(u0(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&sA(u,n[h])>=0&&(u.record.path!==n[h].record.path||!f0(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Sm(u)&&r.set(u.record.name,u)}function l(u,h){let f,m={},g,v;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw _s(1,{location:u});v=f.record.name,m=_e(xm(h.params,f.keys.filter(_=>!_.optional).map(_=>_.name)),u.params&&xm(u.params,f.keys.map(_=>_.name))),g=f.stringify(m)}else if("path"in u)g=u.path,f=n.find(_=>_.re.test(g)),f&&(m=f.parse(g),v=f.record.name);else{if(f=h.name?r.get(h.name):n.find(_=>_.re.test(h.path)),!f)throw _s(1,{location:u,currentLocation:h});v=f.record.name,m=_e({},h.params,u.params),g=f.stringify(m)}const T=[];let y=f;for(;y;)T.unshift(y.record),y=y.parent;return{name:v,path:g,params:m,matched:T,meta:fA(T)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function xm(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function uA(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:hA(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function hA(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Sm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function fA(t){return t.reduce((e,n)=>_e(e,n.meta),{})}function Am(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function f0(t,e){return e.children.some(n=>n===t||f0(t,n))}const d0=/#/g,dA=/&/g,mA=/\//g,pA=/=/g,gA=/\?/g,m0=/\+/g,yA=/%5B/g,vA=/%5D/g,p0=/%5E/g,bA=/%60/g,g0=/%7B/g,wA=/%7C/g,y0=/%7D/g,_A=/%20/g;function Gh(t){return encodeURI(""+t).replace(wA,"|").replace(yA,"[").replace(vA,"]")}function EA(t){return Gh(t).replace(g0,"{").replace(y0,"}").replace(p0,"^")}function eu(t){return Gh(t).replace(m0,"%2B").replace(_A,"+").replace(d0,"%23").replace(dA,"%26").replace(bA,"`").replace(g0,"{").replace(y0,"}").replace(p0,"^")}function IA(t){return eu(t).replace(pA,"%3D")}function TA(t){return Gh(t).replace(d0,"%23").replace(gA,"%3F")}function kA(t){return t==null?"":TA(t).replace(mA,"%2F")}function Sa(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function xA(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(m0," "),o=i.indexOf("="),a=Sa(o<0?i:i.slice(0,o)),c=o<0?null:Sa(i.slice(o+1));if(a in e){let l=e[a];qt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Cm(t){let e="";for(let n in t){const r=t[n];if(n=IA(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(qt(r)?r.map(i=>i&&eu(i)):[r&&eu(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function SA(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=qt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const AA=Symbol(""),Nm=Symbol(""),Yh=Symbol(""),v0=Symbol(""),tu=Symbol("");function $s(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function On(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(_s(4,{from:n,to:e})):h instanceof Error?a(h):ZS(h)?a(_s(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function sl(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(CA(a)){const l=(a.__vccOpts||a)[e];l&&s.push(On(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=PS(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&On(f,n,r,i,o)()}))}}return s}function CA(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Rm(t){const e=Vn(Yh),n=Vn(v0),r=Fe(()=>e.resolve(Zr(t.to))),s=Fe(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(ws.bind(null,u));if(f>-1)return f;const m=Dm(c[l-2]);return l>1&&Dm(u)===m&&h[h.length-1].path!==m?h.findIndex(ws.bind(null,c[l-2])):f}),i=Fe(()=>s.value>-1&&OA(n.params,r.value.params)),o=Fe(()=>s.value>-1&&s.value===n.matched.length-1&&c0(n.params,r.value.params));function a(c={}){return DA(c)?e[Zr(t.replace)?"replace":"push"](Zr(t.to)).catch(ti):Promise.resolve()}return{route:r,href:Fe(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const NA=Mi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Rm,setup(t,{slots:e}){const n=Pi(Rm(t)),{options:r}=Vn(Yh),s=Fe(()=>({[Om(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Om(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:$i("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),RA=NA;function DA(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function OA(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!qt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Dm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Om=(t,e,n)=>t!=null?t:e!=null?e:n,PA=Mi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Vn(tu),s=Fe(()=>t.route||r.value),i=Vn(Nm,0),o=Fe(()=>{let l=Zr(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Fe(()=>s.value.matched[o.value]);Lo(Nm,Fe(()=>o.value+1)),Lo(AA,a),Lo(tu,s);const c=U1();return Ks(()=>[c.value,a.value,t.name],([l,u,h],[f,m,g])=>{u&&(u.instances[h]=l,m&&m!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!ws(u,m)||!f)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Pm(n.default,{Component:f,route:l});const m=h.props[u],g=m?m===!0?l.params:typeof m=="function"?m(l):m:null,T=$i(f,_e({},g,e,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Pm(n.default,{Component:T,route:l})||T}}});function Pm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const MA=PA;function LA(t){const e=lA(t.routes,t),n=t.parseQuery||xA,r=t.stringifyQuery||Cm,s=t.history,i=$s(),o=$s(),a=$s(),c=V1(Nn);let l=Nn;zr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=nl.bind(null,k=>""+k),h=nl.bind(null,kA),f=nl.bind(null,Sa);function m(k,L){let P,W;return u0(k)?(P=e.getRecordMatcher(k),W=L):W=k,e.addRoute(W,P)}function g(k){const L=e.getRecordMatcher(k);L&&e.removeRoute(L)}function v(){return e.getRoutes().map(k=>k.record)}function T(k){return!!e.getRecordMatcher(k)}function y(k,L){if(L=_e({},L||c.value),typeof k=="string"){const d=rl(n,k,L.path),p=e.resolve({path:d.path},L),b=s.createHref(d.fullPath);return _e(d,p,{params:f(p.params),hash:Sa(d.hash),redirectedFrom:void 0,href:b})}let P;if("path"in k)P=_e({},k,{path:rl(n,k.path,L.path).path});else{const d=_e({},k.params);for(const p in d)d[p]==null&&delete d[p];P=_e({},k,{params:h(k.params)}),L.params=h(L.params)}const W=e.resolve(P,L),ge=k.hash||"";W.params=u(f(W.params));const $e=$S(r,_e({},k,{hash:EA(ge),path:W.path})),ae=s.createHref($e);return _e({fullPath:$e,hash:ge,query:r===Cm?SA(k.query):k.query||{}},W,{redirectedFrom:void 0,href:ae})}function _(k){return typeof k=="string"?rl(n,k,c.value.path):_e({},k)}function D(k,L){if(l!==k)return _s(8,{from:L,to:k})}function F(k){return me(k)}function X(k){return F(_e(_(k),{replace:!0}))}function fe(k){const L=k.matched[k.matched.length-1];if(L&&L.redirect){const{redirect:P}=L;let W=typeof P=="function"?P(k):P;return typeof W=="string"&&(W=W.includes("?")||W.includes("#")?W=_(W):{path:W},W.params={}),_e({query:k.query,hash:k.hash,params:"path"in W?{}:k.params},W)}}function me(k,L){const P=l=y(k),W=c.value,ge=k.state,$e=k.force,ae=k.replace===!0,d=fe(P);if(d)return me(_e(_(d),{state:typeof d=="object"?_e({},ge,d.state):ge,force:$e,replace:ae}),L||P);const p=P;p.redirectedFrom=L;let b;return!$e&&FS(r,W,P)&&(b=_s(16,{to:p,from:W}),sr(W,W,!0,!1)),(b?Promise.resolve(b):oe(p,W)).catch(E=>sn(E)?sn(E,2)?E:Pt(E):ke(E,p,W)).then(E=>{if(E){if(sn(E,2))return me(_e({replace:ae},_(E.to),{state:typeof E.to=="object"?_e({},ge,E.to.state):ge,force:$e}),L||p)}else E=ze(p,W,!0,ae,ge);return ye(p,W,E),E})}function Z(k,L){const P=D(k,L);return P?Promise.reject(P):Promise.resolve()}function oe(k,L){let P;const[W,ge,$e]=$A(k,L);P=sl(W.reverse(),"beforeRouteLeave",k,L);for(const d of W)d.leaveGuards.forEach(p=>{P.push(On(p,k,L))});const ae=Z.bind(null,k,L);return P.push(ae),jr(P).then(()=>{P=[];for(const d of i.list())P.push(On(d,k,L));return P.push(ae),jr(P)}).then(()=>{P=sl(ge,"beforeRouteUpdate",k,L);for(const d of ge)d.updateGuards.forEach(p=>{P.push(On(p,k,L))});return P.push(ae),jr(P)}).then(()=>{P=[];for(const d of k.matched)if(d.beforeEnter&&!L.matched.includes(d))if(qt(d.beforeEnter))for(const p of d.beforeEnter)P.push(On(p,k,L));else P.push(On(d.beforeEnter,k,L));return P.push(ae),jr(P)}).then(()=>(k.matched.forEach(d=>d.enterCallbacks={}),P=sl($e,"beforeRouteEnter",k,L),P.push(ae),jr(P))).then(()=>{P=[];for(const d of o.list())P.push(On(d,k,L));return P.push(ae),jr(P)}).catch(d=>sn(d,8)?d:Promise.reject(d))}function ye(k,L,P){for(const W of a.list())W(k,L,P)}function ze(k,L,P,W,ge){const $e=D(k,L);if($e)return $e;const ae=L===Nn,d=zr?history.state:{};P&&(W||ae?s.replace(k.fullPath,_e({scroll:ae&&d&&d.scroll},ge)):s.push(k.fullPath,ge)),c.value=k,sr(k,L,P,ae),Pt()}let B;function Ce(){B||(B=s.listen((k,L,P)=>{if(!ho.listening)return;const W=y(k),ge=fe(W);if(ge){me(_e(ge,{replace:!0}),W).catch(ti);return}l=W;const $e=c.value;zr&&KS(_m($e.fullPath,P.delta),Sc()),oe(W,$e).catch(ae=>sn(ae,12)?ae:sn(ae,2)?(me(ae.to,W).then(d=>{sn(d,20)&&!P.delta&&P.type===Ai.pop&&s.go(-1,!1)}).catch(ti),Promise.reject()):(P.delta&&s.go(-P.delta,!1),ke(ae,W,$e))).then(ae=>{ae=ae||ze(W,$e,!1),ae&&(P.delta&&!sn(ae,8)?s.go(-P.delta,!1):P.type===Ai.pop&&sn(ae,20)&&s.go(-1,!1)),ye(W,$e,ae)}).catch(ti)}))}let tt=$s(),kn=$s(),Le;function ke(k,L,P){Pt(k);const W=kn.list();return W.length?W.forEach(ge=>ge(k,L,P)):console.error(k),Promise.reject(k)}function Ee(){return Le&&c.value!==Nn?Promise.resolve():new Promise((k,L)=>{tt.add([k,L])})}function Pt(k){return Le||(Le=!k,Ce(),tt.list().forEach(([L,P])=>k?P(k):L()),tt.reset()),k}function sr(k,L,P,W){const{scrollBehavior:ge}=t;if(!zr||!ge)return Promise.resolve();const $e=!P&&WS(_m(k.fullPath,0))||(W||!P)&&history.state&&history.state.scroll||null;return Mp().then(()=>ge(k,L,$e)).then(ae=>ae&&qS(ae)).catch(ae=>ke(ae,k,L))}const Mt=k=>s.go(k);let wt;const Ur=new Set,ho={currentRoute:c,listening:!0,addRoute:m,removeRoute:g,hasRoute:T,getRoutes:v,resolve:y,options:t,push:F,replace:X,go:Mt,back:()=>Mt(-1),forward:()=>Mt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:kn.add,isReady:Ee,install(k){const L=this;k.component("RouterLink",RA),k.component("RouterView",MA),k.config.globalProperties.$router=L,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>Zr(c)}),zr&&!wt&&c.value===Nn&&(wt=!0,F(s.location).catch(ge=>{}));const P={};for(const ge in Nn)P[ge]=Fe(()=>c.value[ge]);k.provide(Yh,L),k.provide(v0,Pi(P)),k.provide(tu,c);const W=k.unmount;Ur.add(k),k.unmount=function(){Ur.delete(k),Ur.size<1&&(l=Nn,B&&B(),B=null,c.value=Nn,wt=!1,Le=!1),W()}}};return ho}function jr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function $A(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>ws(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>ws(l,c))||s.push(c))}return[n,r,s]}const FA={name:"PageTitle",props:{text:{type:String,required:!0},withBack:{type:Boolean,default:!1},path:{type:String,default:""}},methods:{navBack(){this.path.length>0?this.$router.push(this.path):this.$router.back()}}},UA={class:"flex items-center"},VA={class:"max-w-max"},BA={class:"text-sm sm:text-base font-bold text-gray-800 uppercase tracking-wide"},jA=w("div",{class:"h-1 w-full bg-emerald-500 mt-1"},null,-1);function HA(t,e,n,r,s,i){const o=ce("font-awesome-icon");return V(),Q("div",UA,[n.withBack?(V(),Q("button",{key:0,onClick:e[0]||(e[0]=(...a)=>i.navBack&&i.navBack(...a)),class:"text-emerald-500 p-2 mr-2 hover:bg-emerald-50 flex items-center justify-center rounded-full"},[U(o,{icon:"fa-solid fa-chevron-left",class:"mr-1"})])):Ot("",!0),w("div",VA,[w("h1",BA,Re(n.text),1),jA])])}const ao=Pe(FA,[["render",HA]]),zA={name:"PageContainer"},qA={class:"p-5 h-full"};function KA(t,e,n,r,s,i){return V(),Q("div",qA,[wb(t.$slots,"default")])}const Qh=Pe(zA,[["render",KA]]),WA={name:"KategoriKomponenCard",props:{title:{type:String,required:!0},icon:{type:String,required:!0}}},GA={class:"bg-gradient-to-r from-emerald-500 to-teal-500 p-5 flex items-center justify-center cursor-pointer hover:from-emerald-700 hover:to-teal-700 transition duration-150 ease-in-out rounded-sm flex-col"},YA={class:"font-bold text-white text-sm"};function QA(t,e,n,r,s,i){const o=ce("font-awesome-icon");return V(),Q("div",GA,[U(o,{icon:n.icon,class:"w-8 h-8 mb-2 text-white"},null,8,["icon"]),w("h1",YA,Re(n.title),1)])}const XA=Pe(WA,[["render",QA]]),JA={name:"KomponenGridView",components:{PageContainer:Qh,PageTitle:ao,KategoriKomponenCard:XA},data(){return{}}},ZA={class:"grid grid-cols-2 gap-5"};function eC(t,e,n,r,s,i){const o=ce("PageTitle"),a=ce("KategoriKomponenCard"),c=ce("PageContainer");return V(),Zn(c,null,{default:Or(()=>[U(o,{text:"Komponen",class:"mb-8"}),w("div",ZA,[U(a,{title:"Motherboard",icon:"fa-solid fa-keyboard",onClick:e[0]||(e[0]=l=>t.$router.push({name:"list-komponen-view2",params:{type:"motherboard"}}))}),U(a,{title:"Processor",icon:"fa-solid fa-microchip",onClick:e[1]||(e[1]=l=>t.$router.push({name:"list-komponen-view2",params:{type:"processor"}}))}),U(a,{title:"RAM",icon:"fa-solid fa-memory",onClick:e[2]||(e[2]=l=>t.$router.push({name:"list-komponen-view2",params:{type:"ram"}}))}),U(a,{title:"VGA",icon:"fa-solid fa-display",onClick:e[3]||(e[3]=l=>t.$router.push({name:"list-komponen-view2",params:{type:"vga"}}))}),U(a,{title:"Storage",icon:"fa-solid fa-hard-drive",onClick:e[4]||(e[4]=l=>t.$router.push("komponen/storage"))}),U(a,{title:"PSU",icon:"fa-solid fa-bolt",onClick:e[5]||(e[5]=l=>t.$router.push({name:"list-komponen-view2",params:{type:"psu"}}))})])]),_:1})}const tC=Pe(JA,[["render",eC]]),nC={name:"ItemKomponen",props:{komponenId:{type:String,required:!0},priceId:{type:Number,required:!0},name:{type:String,required:!0},harga:{type:Number,required:!0},link:{type:String,required:!0}},emits:["itemHapus"],methods:{rupiahFormat(t){return"Rp. "+this.formatNumber(t.toString())},formatNumber(t){return t.replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,".")},goToLinkSourceURL(){window.open(this.link,"_blank")}}},rC={class:"font-bold truncate"},sC={class:"flex flex-row justify-between"},iC={class:"font-bold text-orange-500"},oC={class:"flex flex-row max-w-max gap-1"};function aC(t,e,n,r,s,i){const o=ce("font-awesome-icon");return V(),Q("div",{onClick:e[3]||(e[3]=a=>t.$router.push({name:"detail-komponen-view",params:{komponenId:n.komponenId,type:t.$route.params.type}})),class:"py-3 cursor-pointer hover:bg-gray-50 transition duration-150 ease-in-out"},[w("h1",rC,Re(n.name),1),w("div",sC,[w("h3",null,[rn("Harga : "),w("span",iC,Re(i.rupiahFormat(n.harga)),1)]),w("div",oC,[w("button",{onClick:e[0]||(e[0]=Vt((...a)=>i.goToLinkSourceURL&&i.goToLinkSourceURL(...a),["stop"])),target:"_blank",class:"bg-blue-500 rounded-full px-1.5 flex hover:bg-blue-700 transition duration-150 ease-in-out"},[U(o,{icon:"fa-solid fa-link",class:"w-3 h-3 text-white self-center"})]),w("button",{onClick:e[1]||(e[1]=Vt(a=>t.$router.push({name:"manage-komponen-view",params:{type:t.$route.params.type},query:{komponenId:n.komponenId,priceId:n.priceId}}),["stop"])),class:"bg-orange-500 rounded-full px-1.5 flex hover:bg-orange-700 transition duration-150 ease-in-out"},[U(o,{icon:"fa-solid fa-pencil-alt",class:"w-3 h-3 text-white self-center"})]),w("button",{onClick:e[2]||(e[2]=Vt(a=>t.$emit("itemHapus"),["stop"])),class:"bg-red-500 rounded-full px-1.5 flex hover:bg-red-700 transition duration-150 ease-in-out"},[U(o,{icon:"fa-solid fa-trash",class:"w-3 h-3 text-white self-center"})])])])])}const cC=Pe(nC,[["render",aC]]);const lC={name:"ScrollLoading",props:{isLoading:{type:Boolean,default:!1}}},b0=t=>(X1("data-v-878fae1a"),t=t(),J1(),t),uC={key:0,class:"absolute top-0 left-0 right-0 bottom-0 bg-emerald-400 max-w-max max-h-max m-auto py-2 px-4 rounded-sm flex items-center justify-center shadow-lg"},hC=b0(()=>w("h1",{class:"font-semibold text-white tracking-wider mr-3"},"Loading..",-1)),fC=b0(()=>w("svg",{class:"animate-spin h-4 w-4 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[w("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),w("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1)),dC=[hC,fC];function mC(t,e,n,r,s,i){return V(),Zn(Pr,null,{default:Or(()=>[n.isLoading?(V(),Q("div",uC,dC)):Ot("",!0)]),_:1})}const pC=Pe(lC,[["render",mC],["__scopeId","data-v-878fae1a"]]),Mm=Ch(kr,"components"),gC={name:"ListKomponenView2",components:{PageTitle:ao,ItemKomponen:cC,PageContainer:Qh,ScrollLoading:pC,AlertDialog:ug},data(){return{components:[],isLoading:!1,isLastData:!1,showAlert:!1,hapusData:null,isPageLoading:!1}},async mounted(){this.isPageLoading=!0;try{const t=await Ea(wa(Mm,_a("type","==",this.$route.params.type),Jd("createdAt","asc"),Ql(10)));this.components=t.docs.map(e=>{const n={...e.data(),id:e.id,ref:e.ref};return n.prices.sort((r,s)=>r.checkedAt<s.checkedAt?1:-1),n}),this.isPageLoading=!1}catch(t){console.log(t),this.isPageLoading=!1}},methods:{async loadMore(t){if(t.target.scrollTop+t.target.clientHeight>=t.target.scrollHeight&&!this.isLastData){this.isLoading=!0;try{const e=this.components[this.components.length-1].ref,n=await $h(e),r=this.$route.params.type,s=await Ea(wa(Mm,_a("type","==",r),Jd("createdAt","asc"),yk(n),Ql(10)));s.empty?this.isLastData=!0:this.components.push(...s.docs.map(i=>{const o={...i.data(),id:i.id,ref:i.ref};return o.prices.sort((a,c)=>a.checkedAt<c.checkedAt?1:-1),o})),this.isLoading=!1}catch(e){console.log("firebase err: ",e),this.isLoading=!1}}},showAlertHapus(t,e){this.showAlert=!0,this.hapusData={id:t,ref:e}},async hapusKomponen(){await Ik(this.hapusData.ref),this.components=this.components.filter(t=>t.id!==this.hapusData.id),this.showAlert=!1,this.hapusData=null}}},yC={class:"flex justify-between items-center mb-4"},vC={class:"flex items-center justify-between mb-4"},bC={key:1,class:"flex justify-center items-center h-full"},wC={key:0,class:"font-normal text-base text-gray-600 tracking-wider"},_C={key:1,class:"animate-spin h-10 w-10 text-emerald-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},EC=w("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),IC=w("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1),TC=[EC,IC];function kC(t,e,n,r,s,i){const o=ce("PageTitle"),a=ce("font-awesome-icon"),c=ce("ItemKomponen"),l=ce("ScrollLoading"),u=ce("PageContainer"),h=ce("AlertDialog");return V(),Q(Qe,null,[U(u,{class:"flex flex-col"},{default:Or(()=>[w("div",yC,[U(o,{text:"Data Komponen",withBack:!0,path:"/komponen"})]),w("div",vC,[w("button",{type:"button",class:"bg-emerald-500 text-sm text-white px-2 rounded-sm hover:bg-emerald-700 transition duration-150 ease-in-out tracking-wide",onClick:e[0]||(e[0]=f=>t.$router.push({name:"manage-komponen-view",params:{type:t.$route.params.type}}))},[U(a,{icon:"fa-solid fa-plus"}),rn(" Tambah Komponen ")])]),s.components.length>0?(V(),Q("div",{key:0,onScroll:e[1]||(e[1]=(...f)=>i.loadMore&&i.loadMore(...f)),class:"flex-1 flex flex-col divide-y scrollbar pr-3 overflow-y-scroll pb-2.5 mb-12"},[(V(!0),Q(Qe,null,Li(s.components,f=>(V(),Zn(c,{key:f.id,name:f.name,harga:f.prices[0].price,link:f.prices[0].linkSource,"komponen-id":f.id,"price-id":f.prices[0].id,onItemHapus:m=>i.showAlertHapus(f.id,f.ref)},null,8,["name","harga","link","komponen-id","price-id","onItemHapus"]))),128))],32)):(V(),Q("div",bC,[s.isPageLoading?(V(),Q("svg",_C,TC)):(V(),Q("h3",wC,"Belum ada data"))])),U(l,{isLoading:s.isLoading},null,8,["isLoading"])]),_:1}),U(h,{message:"Hapus Komponen?",showing:s.showAlert,onClose:e[2]||(e[2]=f=>s.showAlert=!1),onYes:i.hapusKomponen},null,8,["showing","onYes"])],64)}const xC=Pe(gC,[["render",kC]]),SC={name:"FormInput",props:{modelValue:{type:String,default:""},labelText:{type:String,required:!0},required:{type:Boolean,default:!0},placeholderText:{type:String,default:""},helperText:{type:String,default:""},inputType:{type:String,default:"text"},hasError:{type:Boolean,default:!1},errorMessage:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","inputBlur","inputFocus","typingKeyUp","typingKeyDown"]},AC={class:"flex flex-col"},CC={class:"font-semibold text-sm"},NC={key:0,class:"text-red-500"},RC=["type","placeholder","value","disabled"],DC={key:0,class:"text-[11px] italic font-semibold text-gray-400"},OC={key:1,class:"text-[11px] font-semibold text-red-500"};function PC(t,e,n,r,s,i){return V(),Q("div",AC,[w("label",CC,[rn(Re(n.labelText),1),n.required?(V(),Q("span",NC,"*")):Ot("",!0)]),w("input",{type:n.inputType,class:Je(["mt-1 rounded-sm border-gray-300 shadow-sm focus:border-emerald-500 text-sm focus:ring-0",{"border-red-500 focus:border-red-500":n.hasError,"text-gray-500":n.disabled}]),placeholder:n.placeholderText,value:n.modelValue,onInput:e[0]||(e[0]=o=>t.$emit("update:modelValue",o.target.value)),onBlur:e[1]||(e[1]=o=>t.$emit("inputBlur")),onFocus:e[2]||(e[2]=o=>t.$emit("inputFocus")),onKeyup:e[3]||(e[3]=o=>t.$emit("typingKeyUp")),onKeydown:e[4]||(e[4]=o=>t.$emit("typingKeyDown")),disabled:n.disabled},null,42,RC),n.hasError?(V(),Q("p",OC,Re(n.errorMessage),1)):(V(),Q("p",DC,Re(n.helperText),1))])}const Xh=Pe(SC,[["render",PC]]),MC={name:"FormTextarea",props:{modelValue:{type:String,default:""},labelText:{type:String,required:!0},required:{type:Boolean,default:!0},placeholderText:{type:String,default:""},width:{type:Number,default:30},height:{type:Number,default:10},helperText:{type:String,default:""},hasError:{type:Boolean,default:!1},errorMessage:{type:String,default:""}},emits:["update:modelValue"]},LC={class:"flex flex-col"},$C={class:"font-semibold text-sm"},FC={key:0,class:"text-red-500"},UC=["cols","rows","value","placeholder"],VC={key:0,class:"text-[11px] italic font-semibold text-gray-400"},BC={key:1,class:"text-[11px] font-semibold text-red-500"};function jC(t,e,n,r,s,i){return V(),Q("div",LC,[w("label",$C,[rn(Re(n.labelText),1),n.required?(V(),Q("span",FC,"*")):Ot("",!0)]),w("textarea",{class:Je(["mt-1 rounded-sm border-gray-300 shadow-sm focus:border-emerald-500 text-sm focus:ring-0",{"border-red-500 focus:border-red-500":n.hasError}]),cols:n.width,rows:n.height,value:n.modelValue,onInput:e[0]||(e[0]=o=>t.$emit("update:modelValue",o.target.value)),placeholder:n.placeholderText},null,42,UC),n.hasError?(V(),Q("p",BC,Re(n.errorMessage),1)):(V(),Q("p",VC,Re(n.helperText),1))])}const HC=Pe(MC,[["render",jC]]),zC={name:"FormInputHarga",props:{modelValue:{type:String,default:""},labelText:{type:String,required:!0},required:{type:Boolean,default:!0},placeholderText:{type:String,default:""},helperText:{type:String,default:""},hasError:{type:Boolean,default:!1},errorMessage:{type:String,default:""}},components:{FormInput:Xh},watch:{formInputModel(t){t!==null&&t.indexOf(",00")===-1&&t.indexOf("Rp. ")===-1&&this.$emit("update:modelValue",this.formatNumber(t))}},methods:{formatNumber(t){return t.replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,".")},addRupiah(){this.modelValue!==null&&this.modelValue!==""&&this.$emit("update:modelValue",`Rp. ${this.modelValue},00`)},removeRupiah(){this.modelValue!==null&&this.modelValue!==""&&this.$emit("update:modelValue",this.modelValue.replace(",00","").replace("Rp. ",""))}},computed:{formInputModel:{get(){return this.modelValue},set(t){this.$emit("update:modelValue",t)}}},emits:["update:modelValue"]};function qC(t,e,n,r,s,i){const o=ce("FormInput");return V(),Zn(o,{modelValue:i.formInputModel,"onUpdate:modelValue":e[0]||(e[0]=a=>i.formInputModel=a),labelText:n.labelText,placeholderText:n.placeholderText,helperText:n.helperText,required:n.required,hasError:n.hasError,"error-message":n.errorMessage,onInputBlur:i.addRupiah,onInputFocus:i.removeRupiah},null,8,["modelValue","labelText","placeholderText","helperText","required","hasError","error-message","onInputBlur","onInputFocus"])}const KC=Pe(zC,[["render",qC]]),WC={name:"FormInputSuggestion",components:{FormInput:Xh},props:{modelValue:{type:String,default:""},suggestionLoading:{type:Boolean,default:!1},labelText:{type:String,required:!0},required:{type:Boolean,default:!0},placeholderText:{type:String,default:""},helperText:{type:String,default:""},suggestions:{type:Array,required:!0},hasError:{type:Boolean,default:!1},errorMessage:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","findSuggestions"],data(){return{showSuggestion:!1,isTyping:!1,typingTimer:null,matchedText:""}},methods:{suggestionClick(t){this.$emit("update:modelValue",t),this.showSuggestion=!1},suggestionBold(t){let e="";return t.substr(0,this.modelValue.length).toLowerCase()===this.modelValue.toLowerCase()?(e+=`<span class="font-bold">${t.substr(0,this.modelValue.length)}</span>`,e+=`<span>${t.substr(this.modelValue.length)}</span>`):e+=`<span>${t}</span>`,e},inputTypingKeyUp(){clearTimeout(this.typingTimer),this.typingTimer=setTimeout(()=>{this.showSuggestion||(this.showSuggestion=!0),this.$emit("findSuggestions")},1e3)},inputTypingKeyDown(){clearTimeout(this.typingTimer)}},computed:{formInputModel:{get(){return this.modelValue},set(t){this.$emit("update:modelValue",t)}}}},GC={class:"relative"},YC={key:0,class:"absolute border border-emerald-500 -mt-4 bg-white w-full p-2 rounded-sm shadow-lg"},QC={class:"flex justify-between border-b pb-1 items-center"},XC={class:"text-sm text-gray-700 font-semibold"},JC=["onClick","innerHTML"],ZC={key:0,class:"text-sm"},e3={key:1,class:"text-sm"};function t3(t,e,n,r,s,i){const o=ce("FormInput"),a=ce("font-awesome-icon");return V(),Q("div",GC,[U(o,{modelValue:i.formInputModel,"onUpdate:modelValue":e[0]||(e[0]=c=>i.formInputModel=c),labelText:n.labelText,placeholderText:n.placeholderText,helperText:n.helperText,required:n.required,hasError:n.hasError,"error-message":n.errorMessage,onTypingKeyUp:i.inputTypingKeyUp,onTypingKeyDown:i.inputTypingKeyDown,disabled:n.disabled},null,8,["modelValue","labelText","placeholderText","helperText","required","hasError","error-message","onTypingKeyUp","onTypingKeyDown","disabled"]),s.showSuggestion?(V(),Q("div",YC,[w("div",QC,[w("span",XC,"Showing "+Re(n.suggestions.length)+" suggestions",1),U(a,{icon:"fa-solid fa-close",class:"w-3 h-3 hover:bg-red-100 text-red-500 hover:text-red-800 transition duration-150 ease-in-out cursor-pointer p-1 rounded-full",onClick:e[1]||(e[1]=c=>s.showSuggestion=!1)})]),w("div",{class:Je(["flex flex-col",{"border-b":n.suggestionLoading}])},[(V(!0),Q(Qe,null,Li(n.suggestions,(c,l)=>(V(),Q("h3",{onClick:u=>i.suggestionClick(c.name),class:"text-sm hover:bg-gray-100 cursor-pointer px-2 py-1",key:l,innerHTML:i.suggestionBold(c.name)},null,8,JC))),128))],2),n.suggestionLoading?(V(),Q("span",ZC,"Loading...")):(V(),Q("span",e3,Re(n.suggestions.length===0?"Not Found":""),1))])):Ot("",!0)])}const n3=Pe(WC,[["render",t3]]),r3={name:"FormDropdown",props:{modelValue:{type:String,default:""},options:{type:Array,required:!0},labelText:{type:String,required:!0},required:{type:Boolean,default:!0},placeholderOption:{type:String,required:!0},hasError:{type:Boolean,default:!1},errorMessage:{type:String,default:""},disabled:{type:Boolean,default:!1}}},s3={class:"flex flex-col"},i3={class:"font-semibold text-sm"},o3={key:0,class:"text-red-500"},a3=["disabled","value"],c3={disabled:"",value:""},l3=["value"],u3={key:0,class:"text-[11px] font-semibold text-red-500"};function h3(t,e,n,r,s,i){return V(),Q("div",s3,[w("label",i3,[rn(Re(n.labelText),1),n.required?(V(),Q("span",o3,"*")):Ot("",!0)]),w("select",{disabled:n.disabled,value:n.modelValue,onChange:e[0]||(e[0]=o=>t.$emit("update:modelValue",o.target.value)),class:Je(["mt-1 rounded-sm border-gray-300 shadow-sm focus:border-emerald-500 transition duration-150 ease-in-out text-sm focus:ring-0",{"border-red-500 focus:border-red-500":n.hasError}])},[w("option",c3,Re(n.placeholderOption),1),(V(!0),Q(Qe,null,Li(n.options,(o,a)=>(V(),Q("option",{value:o.value,key:a},Re(o.text),9,l3))),128))],42,a3),n.hasError?(V(),Q("p",u3,Re(n.errorMessage),1)):Ot("",!0)])}const f3=Pe(r3,[["render",h3]]),d3={name:"FormButton",props:{text:{type:String,required:!0},loading:{type:Boolean,default:!1}}},m3=["disabled"],p3={key:0,class:"animate-spin -ml-1 mr-3 h-4 w-4 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},g3=w("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),y3=w("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1),v3=[g3,y3];function b3(t,e,n,r,s,i){return V(),Q("button",{disabled:n.loading,class:Je([{"cursor-not-allowed bg-emerald-800":n.loading},"bg-emerald-500 max-w-max p-0 text-sm text-white px-5 py-1 uppercase font-semibold rounded-sm tracking-wider hover:bg-emerald-800 transition duration-150 ease-in-out focus:outline-none focus:ring-0 inline-flex items-center"])},[n.loading?(V(),Q("svg",p3,v3)):Ot("",!0),rn(" "+Re(n.loading?"Loading...":n.text),1)],10,m3)}const w3=Pe(d3,[["render",b3]]),_3={name:"NotificationPopup",props:{message:{type:String,required:!0,default:"Default message"},type:{type:String,required:!0,default:""}},data(){return{isTimerFinished:!1}},computed:{notifIcon(){switch(this.type){case"success":return"fa-solid fa-check";case"error":return"fa-solid fa-close";case"warning":return"fa-solid fa-warning";case"info":return"fa-solid fa-info";default:return"fa-solid fa-question"}},notifIconColor(){switch(this.type){case"success":return{"border-green-600 text-green-600":!0};case"error":return{"border-red-600 text-red-600":!0};case"warning":return{"border-orange-600 text-orange-600":!0};case"info":return{"border-blue-600 text-blue-600":!0};default:return{"border-gray-600 text-gray-600":!0}}},timerBarColor(){switch(this.type){case"success":return{"bg-green-500":!0};case"error":return{"bg-red-500":!0};case"warning":return{"bg-orange-500":!0};case"info":return{"bg-blue-500":!0};default:return{"bg-gray-500":!0}}}},watch:{isTimerFinished(t){t&&this.$emit("timerFinished")}},components:{Transition:Pr},methods:{beforeEnter(t){t.style.width=100},enter(t){t.style.width="0%",t.style.transition="width 3s linear",setTimeout(()=>{this.isTimerFinished=!0},3e3)}},emits:["timerFinished","close"]},E3={class:"absolute bg-white shadow-lg top-0 left-0 right-0 bottom-0 z-20 max-w-max max-h-max m-auto flex flex-col rounded-sm"},I3={class:"py-6 px-5 flex flex-col gap-3"},T3={class:"text-base tracking-wide text-gray-700"};function k3(t,e,n,r,s,i){const o=ce("font-awesome-icon");return V(),Q("div",E3,[w("div",I3,[U(o,{icon:i.notifIcon,class:Je(["border p-2 w-5 h-5 rounded-full mx-auto",i.notifIconColor])},null,8,["icon","class"]),w("p",T3,Re(n.message),1),w("button",{class:"w-20 rounded-md border bg-red-500 text-white font-semibold hover:bg-red-700 transition duration-150 ease-in-out mx-auto",onClick:e[0]||(e[0]=Vt(a=>t.$emit("close"),["prevent"]))}," Tutup ")]),U(Pr,{appear:"",onBeforeAppear:i.beforeEnter,onAfterAppear:i.enter},{default:Or(()=>[w("div",{class:Je(["w-full h-1 transition duration-500 ease-linear",i.timerBarColor])},null,2)]),_:1},8,["onBeforeAppear","onAfterAppear"])])}const x3=Pe(_3,[["render",k3]]);const Lm=Ch(kr,"components"),S3={name:"TambahKomponenView",components:{PageTitle:ao,FormInput:Xh,FormInputHarga:KC,FormDropdown:f3,FormTextarea:HC,FormButton:w3,FormInputSuggestion:n3,NotificationPopup:x3,Transition:Pr},data(){return{form:{komponen:{value:"",hasError:!1,rules:[{required:"Pilih salah satu komponen!"}]},nama:{value:null,hasError:!1,errMessage:"",rules:[{required:"Nama tidak boleh kosong!"}]},harga:{value:null,hasError:!1,errMessage:"",rules:[{required:"Harga tidak boleh kosong!"}]},checkedDate:{value:null,hasError:!1,errMessage:"",rules:[{required:"Tanggal Cek tidak boleh kosong!"}]},linkSource:{value:null,hasError:!1,errMessage:"",rules:[{required:"Link Sumber tidak boleh kosong!"}]}},formLoading:!1,formHasError:!1,nameSuggestions:[],suggestionLoading:!1,notification:{isShow:!1,message:"",type:""},komponenOptions:[{text:"Processor",value:"processor"},{text:"Motherboard",value:"motherboard"},{text:"VGA",value:"vga"},{text:"PSU",value:"psu"},{text:"RAM",value:"ram"},{text:"Storage",value:"storage"}],suggestions:{vgaList:[],processorList:[],storageList:[],motherboardList:[],ramList:[],psuList:[]}}},watch:{"form.komponen.value"(t){t.length>0&&(this.form.komponen.hasError&&(this.form.komponen.hasError=!1,this.form.komponen.errMessage=""),this.suggestions[`${t}List`].length===0&&(this.suggestionLoading=!0,Ea(wa(Lm,_a("type","==",t))).then(e=>{e.docs.length>0&&e.docs.forEach(n=>{this.suggestions[`${t}List`].push({...n.data(),id:n.id})}),this.suggestionLoading=!1}).catch(e=>{console.log("Firebase error: ",e),this.suggestionLoading=!1})))},"form.nama.value"(t){this.form.nama.hasError&&t.length>0&&(this.form.nama.hasError=!1,this.form.nama.errMessage="")},"form.harga.value"(t){this.form.harga.hasError&&t.length>0&&(this.form.harga.hasError=!1,this.form.harga.errMessage="")},"form.checkedDate.value"(t){this.form.checkedDate.hasError&&t.length>0&&(this.form.checkedDate.hasError=!1,this.form.checkedDate.errMessage="")},"form.linkSource.value"(t){this.form.linkSource.hasError&&t.length>0&&(this.form.linkSource.hasError=!1,this.form.linkSource.errMessage="")}},methods:{async createData(t){try{const e=await Tk(Lm,t);console.log("Doc created with ID:",e.id),this.suggestions[`${t.type}List`].push(t),this.showNotification("success","Data berhasil ditambahkan!"),this.formLoading=!1}catch(e){console.log("firebase err: ",e),this.showNotification("error","Something went wrong!"),this.formLoading=!1}},async updateKomponenPrice(t,e){const n=t.prices[0],r=this.suggestions[`${t.type}List`][e];if(r.prices.find(i=>this.isPriceEqual(i,n))){this.showNotification("error","Komponen sudah ada!"),this.formLoading=!1;return}try{await tm(Zs(kr,"components",r.id),{prices:[...r.prices,n]}),this.suggestions[`${t.type}List`][e].prices.push(n),this.showNotification("success","Harga berhasil ditambahkan!"),this.formLoading=!1}catch{console.log("update error: ",err),this.showNotification("error","Something went wrong!"),this.formLoading=!1}},async updateData(t){try{const e=this.suggestions[`${t.type}List`].findIndex(n=>n.id===this.komponenId);if(e!==-1){const n=this.suggestions[`${t.type}List`][e],r=n.prices.findIndex(s=>s.id==this.priceId);if(r!==-1)n.prices[r]=t.prices[0],t.prices=[...n.prices],await tm(Zs(kr,"components",this.komponenId),t),this.suggestions[`${t.type}List`][e]=t,this.showNotification("success","Data berhasil diperbaharui!"),this.formLoading=!1;else throw"priceIndex not found"}else throw"komponenIndex not found"}catch(e){console.log("firebase err: ",e),this.showNotification("error","Something went wrong!"),this.formLoading=!1}},async submitForm(){if(this.formLoading=!0,!this.formValidate()){this.formLoading=!1;return}const t=new Date,e={type:this.form.komponen.value,name:this.form.nama.value,prices:[{id:Math.round(t.getTime()/1e3),price:parseInt(this.form.harga.value.replace(/\D/g,"").slice(0,-2)),linkSource:this.form.linkSource.value,checkedAt:new Date(`${this.form.checkedDate.value} ${this.getCurrentTime()}`)}],createdAt:t,updatedAt:t};if(this.komponenId){await this.updateData(e);return}else{const n=this.suggestions[`${e.type}List`].findIndex(r=>r.name===e.name);if(n!==-1){this.updateKomponenPrice(e,n);return}await this.createData(e)}},findSuggestions(){this.form.komponen.value.length>0&&this.form.nama.value!=null&&this.form.nama.value.length>0&&(this.nameSuggestions=[...this.suggestions[`${this.form.komponen.value}List`].filter(t=>t.name.toLowerCase().indexOf(this.form.nama.value.toLowerCase())>=0).slice(0,10)])},formValidate(){let t=!0;return Object.keys(this.form).forEach(e=>{"rules"in this.form[e]&&this.form[e].rules.forEach(n=>{Object.keys(n)[0]==="required"&&(this.form[e].value===null||this.form[e].value.length===0)&&(this.form[e].hasError=!0,this.form[e].errMessage=n.required,t=!1)})}),t},isPriceEqual(t,e){return t.price===e.price&&t.linkSource===e.linkSource&&this.isDateEqual(this.getCheckedAt(t.checkedAt),e.checkedAt)},isDateEqual(t,e){return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()},getCheckedAt(t){return"seconds"in t?new Date(t.seconds*1e3):t},showNotification(t,e){this.notification.isShow=!0,this.notification.type=t,this.notification.message=e},hideNotification(){this.notification.isShow=!1},closeNotification(){this.notification.type==="success"&&this.clearForm(),this.notification.isShow=!1},clearForm(){this.form.komponen.value=this.$route.params.type,this.form.nama.value=null,this.form.harga.value=null,this.form.checkedDate.value=null,this.form.linkSource.value=null},getCurrentTime(){const t=new Date,e=t.getHours()<10?`0${t.getHours()}`:t.getHours(),n=t.getMinutes()<10?`0${t.getMinutes()}`:t.getMinutes(),r=t.getSeconds()<10?`0${t.getSeconds()}`:t.getSeconds();return`${e}:${n}:${r}`},formatNumber(t){return t.replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,".")},async getEditData(){const t=await $h(Zs(kr,"components",this.komponenId));if(!t.exists())this.$router.push({name:"notfound-view"});else{const e=t.data();e.prices.sort((i,o)=>i.checkedAt<o.checkedAt?1:-1),this.form.nama.value=e.name;const n=e.prices[0].price;this.form.harga.value=`Rp. ${this.formatNumber(n.toString())},00`;const r=new Date(e.prices[0].checkedAt.seconds*1e3),s={dd:r.getDate()<10?`0${r.getDate()}`:r.getDate(),mm:r.getMonth()<10?`0${r.getMonth()+1}`:r.getMonth()+1,yyyy:r.getFullYear()};this.form.checkedDate.value=`${s.yyyy}-${s.mm}-${s.dd}`,this.form.linkSource.value=e.prices[0].linkSource}}},async mounted(){var t;this.form.komponen.value=this.$route.params.type,this.komponenId?await this.getEditData():this.form.nama.value=(t=this.$route.query.nama)!=null?t:null},computed:{komponenId(){return this.$route.query.komponenId},priceId(){return this.$route.query.priceId}}},A3={class:"p-5 h-full relative"},C3={class:"h-4/5 flex flex-col gap-3 overflow-y-scroll scrollbar pr-3 py-3"};function N3(t,e,n,r,s,i){const o=ce("NotificationPopup"),a=ce("PageTitle"),c=ce("FormDropdown"),l=ce("FormInputSuggestion"),u=ce("FormInputHarga"),h=ce("FormInput"),f=ce("FormTextarea"),m=ce("FormButton");return V(),Q("div",A3,[U(Pr,null,{default:Or(()=>[s.notification.isShow?(V(),Zn(o,{key:0,message:s.notification.message,onClose:i.closeNotification,onTimerFinished:i.closeNotification,type:s.notification.type},null,8,["message","onClose","onTimerFinished","type"])):Ot("",!0)]),_:1}),U(a,{text:`${i.komponenId?"Edit":"Tambah"} Komponen`,withBack:!0,path:t.$route.query.nama?"":`/komponen/${t.$route.params.type}`,class:"mb-5"},null,8,["text","path"]),w("div",C3,[U(c,{modelValue:s.form.komponen.value,"onUpdate:modelValue":e[0]||(e[0]=g=>s.form.komponen.value=g),"label-text":"Komponen","placeholder-option":"Pilih Komponen","has-error":s.form.komponen.hasError,"error-message":s.form.komponen.errMessage,options:s.komponenOptions,disabled:!0},null,8,["modelValue","has-error","error-message","options"]),U(l,{modelValue:s.form.nama.value,"onUpdate:modelValue":e[1]||(e[1]=g=>s.form.nama.value=g),onFindSuggestions:i.findSuggestions,suggestionLoading:s.suggestionLoading,"label-text":"Nama","placeholder-text":"Masukkan Nama","helper-text":"Contoh: GTX 770 2GB DDR5",suggestions:s.nameSuggestions,"has-error":s.form.nama.hasError,"error-message":s.form.nama.errMessage,disabled:!!t.$route.query.nama},null,8,["modelValue","onFindSuggestions","suggestionLoading","suggestions","has-error","error-message","disabled"]),U(u,{modelValue:s.form.harga.value,"onUpdate:modelValue":e[2]||(e[2]=g=>s.form.harga.value=g),labelText:"Harga",placeholderText:"Masukkan Harga",helperText:"Contoh: Rp. 1.100.000,00","has-error":s.form.harga.hasError,"error-message":s.form.harga.errMessage},null,8,["modelValue","helperText","has-error","error-message"]),U(h,{modelValue:s.form.checkedDate.value,"onUpdate:modelValue":e[3]||(e[3]=g=>s.form.checkedDate.value=g),inputType:"date",labelText:"Tanggal Cek",placeholderText:"Masukkan Tanggal Cek",helperText:"Contoh: 01/01/1970","has-error":s.form.checkedDate.hasError,"error-message":s.form.checkedDate.errMessage},null,8,["modelValue","has-error","error-message"]),U(f,{modelValue:s.form.linkSource.value,"onUpdate:modelValue":e[4]||(e[4]=g=>s.form.linkSource.value=g),labelText:"Link Sumber",placeholderText:"Masukkan Link Sumber",helperText:"Contoh: https://web.facebook.com/marketplace/item/426730202979181",height:3,"has-error":s.form.linkSource.hasError,"error-message":s.form.linkSource.errMessage},null,8,["modelValue","helperText","has-error","error-message"]),U(m,{onClick:i.submitForm,loading:s.formLoading,text:"Submit",class:"mx-auto"},null,8,["onClick","loading"])])])}const R3=Pe(S3,[["render",N3],["__scopeId","data-v-6bbbcce3"]]),D3={name:"DetailKomponenView",components:{PageContainer:Qh,PageTitle:ao},data(){return{komponen:null}},methods:{goToURL(t){window.open(t,"_blank")},rupiahFormat(t){return`Rp. ${t.toString().replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,".")}`}},async mounted(){const t=this.$route.params.komponenId;try{const e=await $h(Zs(kr,"/components",t));e.exists()&&(this.komponen={...e.data(),id:e.id},this.komponen.prices.sort((n,r)=>n.checkedAt>r.checkedAt?1:-1))}catch(e){console.log("Firebase err: ",e)}}},O3={key:0,class:"flex flex-col mt-5 gap-3 border py-2 px-4 border-emerald-300 rounded-sm h-4/5"},P3=w("h2",{class:"font-bold"},"Komponen",-1),M3=w("h2",{class:"font-bold"},"Nama",-1),L3={class:"flex justify-between items-center mb-1"},$3=w("h2",{class:"font-bold"},"Harga",-1),F3={class:"flex flex-col border py-2 px-4 border-emerald-300 divide-y divide-dashed divide-emerald-400"},U3={class:"flex-1 py-1"},V3={class:"font-medium text-emerald-500"},B3={key:1,class:"mt-5"};function j3(t,e,n,r,s,i){const o=ce("PageTitle"),a=ce("font-awesome-icon"),c=ce("PageContainer");return V(),Zn(c,null,{default:Or(()=>[U(o,{text:"Detail Komponen","with-back":!0,path:`/komponen/${t.$route.params.type}`},null,8,["path"]),s.komponen?(V(),Q("div",O3,[w("div",null,[P3,w("p",null,Re(t.$route.params.type.toUpperCase()),1)]),w("div",null,[M3,w("p",null,Re(s.komponen.name),1)]),w("div",null,[w("div",L3,[$3,w("button",{onClick:e[0]||(e[0]=l=>t.$router.push({name:"manage-komponen-view",params:{type:t.$route.params.type},query:{nama:s.komponen.name}})),class:"text-[12px] bg-emerald-500 text-white font-semibold px-2 rounded-sm hover:bg-emerald-800 transition duration-150 ease-in-out"},[U(a,{icon:"fa-solid fa-add"}),rn(" Tambah Harga ")])]),w("div",F3,[(V(!0),Q(Qe,null,Li(s.komponen.prices,(l,u)=>(V(),Q("div",{key:u,class:"flex"},[w("div",U3,[U(a,{onClick:Vt(h=>i.goToURL(l.linkSource),["stop"]),icon:"fa-solid fa-link",class:"mr-2 text-blue-500 cursor-pointer hover:text-blue-300 transition duration-150 ease-in-out"},null,8,["onClick"]),w("span",V3,Re(i.rupiahFormat(l.price)),1)]),w("h5",null,Re(new Date(l.checkedAt.seconds*1e3).toLocaleDateString()),1)]))),128))])])])):(V(),Q("div",B3," No data found "))]),_:1})}const H3=Pe(D3,[["render",j3]]),z3={name:"ItemRencana"},q3={class:"px-10 py-3 active:bg-gray-200 transition duration-300 ease-in-out"},K3=w("h3",{class:"font-bold uppercase"},"Rakitan PC - INTEL CORE I9 13722K - GTX 4090 - 64 GB RAM",-1),W3={class:"flex justify-between py-2"},G3=w("h4",{class:"font-light"},[rn("Estimasi Harga: "),w("span",{class:"font-bold text-emerald-700 tracking-wider"},"13jt - 23jt")],-1);function Y3(t,e,n,r,s,i){const o=ce("font-awesome-icon");return V(),Q("div",q3,[K3,w("div",W3,[G3,w("div",null,[U(o,{icon:"fa-solid fa-pencil",class:"text-orange-500 text-xl mr-4 cursor-pointer hover:text-orange-700 transition duration-150 ease-in-out"}),U(o,{icon:"fa-solid fa-trash",class:"text-red-500 text-xl cursor-pointer hover:text-red-700 transition duration-150 ease-in-out"})])])])}const w0=Pe(z3,[["render",Y3]]),Q3={name:"HomeView",components:{ItemRencana:w0},data(){return{isActive:!0}}},X3={class:"pt-10 h-full"},J3={class:"flex justify-between px-10"},Z3=w("div",{class:"max-w-max"},[w("h1",{class:"text-xl font-normal uppercase tracking-wide"},"List Ide"),w("div",{class:"h-1 w-full bg-emerald-500 mt-1"})],-1),e4={class:"self-center"},t4={type:"button",class:"px-2 py-1.5 bg-emerald-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-emerald-700 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out tracking-wider"},n4={class:"mt-5 divide-y h-4/5 flex flex-col overflow-y-scroll scrollbar"};function r4(t,e,n,r,s,i){const o=ce("font-awesome-icon"),a=ce("ItemRencana");return V(),Q("div",X3,[w("div",J3,[Z3,w("div",e4,[w("button",t4,[U(o,{icon:"fa-solid fa-plus",class:"mr-2"}),rn(" Tambah ")])])]),w("div",n4,[(V(),Q(Qe,null,Li(10,c=>U(a,{key:c})),64))])])}const s4=Pe(Q3,[["render",r4]]),i4={name:"PrimaryButton",props:{text:{type:String,required:!0},isLoading:{type:Boolean,default:!1},isSubmit:{type:Boolean,default:!1}},computed:{buttonClass(){return{"cursor-not-allowed":this.isLoading,"bg-emerald-700":this.isLoading,"bg-emerald-500":!this.isLoading}},buttonType(){return this.isSubmit?"submit":"button"}}},o4=["type","disabled"],a4={key:0,class:"animate-spin -ml-1 mr-3 h-4 w-4 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},c4=w("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),l4=w("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1),u4=[c4,l4],h4={class:"mx-auto"};function f4(t,e,n,r,s,i){return V(),Q("button",{type:i.buttonType,disabled:n.isLoading,class:Je([i.buttonClass,"inline-flex items-center mx-auto px-5 py-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md my-5 hover:bg-emerald-700 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out tracking-wider sm:px-12"])},[n.isLoading?(V(),Q("svg",a4,u4)):Ot("",!0),w("span",h4,Re(n.isLoading?"Loading...":n.text),1)],10,o4)}const _0=Pe(i4,[["render",f4]]),d4=wa(Ch(kr,"plans"),_a("is_active","==",!0),Ql(1)),m4={name:"RencanaView",components:{ItemRencana:w0,PrimaryButton:_0,PageTitle:ao},data(){return{isEmpty:!0,plans:[]}},methods:{goToBuatRencana(){this.$router.push("/tambah-rencana")}},mounted(){Ea(d4).then(t=>{t.forEach(e=>{this.plans.push(e.data())})}).catch(t=>{console.log(t)})}},p4={key:0,class:"m-auto text-center"},g4=w("h3",{class:"font-light mb-2"},"Belum Ada Rencana!",-1),y4={key:1,class:"h-4/5 flex flex-col justify-between gap-3 p-4 border border-gray-200 rounded-lg"},v4=w("h3",{class:"text-lg uppercase font-bold text-gray-800"},"RAKITAN PC - INTEL CORE I7 7700K - GTX 3070TI - 32 GB RAM",-1),b4=w("h1",{class:"text-2xl font-bold uppercase text-center text-gray-800"},"17 Hari Lagi",-1),w4={class:"bg-emerald-100 border-0 p-4 rounded-lg flex flex-col gap-3 relative"},_4={class:"absolute -top-2 right-4"},E4={class:"flex flex-row max-w-max gap-1"},I4={class:"bg-orange-500 rounded-full p-1 flex"},T4={class:"bg-red-500 rounded-full p-1 flex"},k4=w("div",null,[w("h4",{class:"font-bold text-sm text-gray-800"},"Rencana Tanggal Pembelian"),w("p",null,"17 November 2022")],-1),x4={class:"flex justify-between mb-1"},S4=w("h4",{class:"font-bold text-sm text-gray-800"},"Dana Terkumpul",-1),A4={class:"bg-emerald-500 rounded-full px-1 flex"},C4=w("div",{class:"w-full bg-gray-100 rounded-full h-2.5"},[w("div",{class:"bg-emerald-500 h-2.5 rounded-full",style:{width:"45%"}})],-1),N4=w("div",{class:"flex justify-between font-bold text-emerald-500"},[w("span",null,"0"),w("span",null,"9.5jt"),w("span",null,"20jt")],-1);function R4(t,e,n,r,s,i){const o=ce("PageTitle"),a=ce("font-awesome-icon");return V(),Q("div",{class:Je(["p-10 h-full flex-col",{flex:s.isEmpty}])},[U(o,{text:"Rencana Saat Ini",class:"mb-4"}),s.isEmpty?(V(),Q("div",p4,[g4,w("button",{class:"text-sm text-emerald-500 font-bold hover:bg-emerald-100 px-3 py-1 rounded-lg transition duration-150 ease-in-out",onClick:e[0]||(e[0]=Vt(c=>i.goToBuatRencana(),["prevent"]))},"Buat Rencana")])):(V(),Q("div",y4,[v4,b4,w("div",null,[w("div",w4,[w("div",_4,[w("div",E4,[w("button",I4,[U(a,{icon:"fa-solid fa-pencil-alt",class:"w-3 h-3 text-white self-center"})]),w("button",T4,[U(a,{icon:"fa-solid fa-trash",class:"w-3 h-3 text-white self-center"})])])]),k4,w("div",null,[w("div",x4,[S4,w("button",A4,[U(a,{icon:"fa-solid fa-add",class:"w-3 h-3 text-white self-center"})])]),C4,N4])])])]))],2)}const D4=Pe(m4,[["render",R4]]),O4={name:"LoginView",components:{PrimaryButton:_0},data(){return{form:{user:null,pass:null,userHasError:!1,passHasError:!1,errorMsg:""},isLoading:!1}},methods:{login(){if(this.form.user===null||this.form.pass===null){console.log("cannot be empty");return}this.isLoading=!0,setTimeout(()=>{this.form.userHasError=!1,this.form.passHasError=!1,ux(Si,`${this.form.user}@gmail.com`,this.form.pass).then(t=>{this.$router.push("/")}).catch(t=>{switch(t.code){case"auth/user-not-found":this.form.errorMsg="User not found!",this.form.userHasError=!0;break;case"auth/wrong-password":this.form.errorMsg="Wrong password!",this.form.passHasError=!0;break;default:this.form.errorMsg="Something went wrong!"}}).finally(()=>{this.isLoading=!1})},1e3)}}},P4={class:"p-10 h-full"},M4={class:"sm:w-9/12 sm:mx-auto md:w-4/6 lg:w-2/4"},L4=w("label",{for:"username"},"Username",-1),$4={class:"sm:w-9/12 sm:mx-auto md:w-4/6 lg:w-2/4"},F4=w("label",{for:"password"},"Password",-1),U4={key:0,class:"-mt-36 text-center text-red-500"};function V4(t,e,n,r,s,i){const o=ce("PrimaryButton");return V(),Q("div",P4,[w("form",{onSubmit:e[2]||(e[2]=Vt(a=>i.login(),["prevent"])),class:"h-full grid grid-cols-1 gap-5 content-center"},[w("div",M4,[L4,Cf(w("input",{type:"text",name:"username",autocomplete:"username","onUpdate:modelValue":e[0]||(e[0]=a=>s.form.user=a),class:Je([{"border-red-500":s.form.userHasError},"mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 transition duration-150 ease-in-out"])},null,2),[[Zf,s.form.user]])]),w("div",$4,[F4,Cf(w("input",{type:"password",name:"password",autocomplete:"current-password","onUpdate:modelValue":e[1]||(e[1]=a=>s.form.pass=a),class:Je([{"border-red-500":s.form.passHasError},"mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 transition duration-150 ease-in-out"])},null,2),[[Zf,s.form.pass]])]),U(o,{text:"Login",isLoading:s.isLoading,isSubmit:!0},null,8,["isLoading"])],32),s.form.userHasError||s.form.passHasError?(V(),Q("p",U4,Re(s.form.errorMsg),1)):Ot("",!0)])}const B4=Pe(O4,[["render",V4]]),j4={name:"NotFoundView"},H4={class:"h-full flex"},z4=w("div",{class:"m-auto"},[w("h1",{class:"text-2xl font-bold uppercase text-center text-rose-500"},"404"),w("p",{class:"text-gray-700 font-thin"},"Page you are looking for is not exist")],-1),q4=[z4];function K4(t,e,n,r,s,i){return V(),Q("div",H4,q4)}const W4=Pe(j4,[["render",K4]]);function il(t){return t.meta&&["motherboard","processor","ram","vga","storage","psu"].includes(t.params.type)?!0:{name:"notfound-view"}}const G4=[{path:"/komponen",name:"komponen-grid-view",component:tC,meta:{requiredAuth:!0,module:"komponen"}},{path:"/komponen/:type",name:"list-komponen-view2",component:xC,meta:{requiredAuth:!0,validateType:!0,module:"komponen"},beforeEnter:[il]},{path:"/komponen/:type/manage",name:"manage-komponen-view",component:R3,meta:{requiredAuth:!0,validateType:!0,module:"komponen"},beforeEnter:[il]},{path:"/komponen/:type/:komponenId",name:"detail-komponen-view",component:H3,meta:{requiredAuth:!0,validateType:!0,module:"komponen"},beforeEnter:[il]},{path:"/ide",name:"list-ide-view",component:s4,meta:{requiredAuth:!0,module:"ide"}},{path:"/",name:"rencana-view",component:D4,meta:{requiredAuth:!0,module:"rencana"}},{path:"/login",name:"login-view",component:B4,meta:{guest:!0}},{path:"/:pathMatch(.*)*",name:"notfound-view",component:W4}],Jh=LA({history:JS(),routes:G4});Jh.beforeEach((t,e,n)=>{t.matched.some(r=>r.meta.requiredAuth)?Si.onAuthStateChanged(r=>{r?n():n("/login")}):n()});Jh.beforeEach((t,e,n)=>{t.matched.some(r=>r.meta.guest)?Si.onAuthStateChanged(r=>{r?n("/"):n()}):n()});function $m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function $(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?$m(Object(n),!0).forEach(function(r){Ge(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$m(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Aa(t){return Aa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Aa(t)}function Y4(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Fm(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Q4(t,e,n){return e&&Fm(t.prototype,e),n&&Fm(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ge(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Zh(t,e){return J4(t)||eN(t,e)||E0(t,e)||nN()}function co(t){return X4(t)||Z4(t)||E0(t)||tN()}function X4(t){if(Array.isArray(t))return nu(t)}function J4(t){if(Array.isArray(t))return t}function Z4(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function eN(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],s=!0,i=!1,o,a;try{for(n=n.call(t);!(s=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));s=!0);}catch(c){i=!0,a=c}finally{try{!s&&n.return!=null&&n.return()}finally{if(i)throw a}}return r}}function E0(t,e){if(!!t){if(typeof t=="string")return nu(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return nu(t,e)}}function nu(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function tN(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nN(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Um=function(){},ef={},I0={},T0=null,k0={mark:Um,measure:Um};try{typeof window<"u"&&(ef=window),typeof document<"u"&&(I0=document),typeof MutationObserver<"u"&&(T0=MutationObserver),typeof performance<"u"&&(k0=performance)}catch{}var rN=ef.navigator||{},Vm=rN.userAgent,Bm=Vm===void 0?"":Vm,Qn=ef,De=I0,jm=T0,ko=k0;Qn.document;var Tn=!!De.documentElement&&!!De.head&&typeof De.addEventListener=="function"&&typeof De.createElement=="function",x0=~Bm.indexOf("MSIE")||~Bm.indexOf("Trident/"),xo,So,Ao,Co,No,bn="___FONT_AWESOME___",ru=16,S0="fa",A0="svg-inline--fa",Rr="data-fa-i2svg",su="data-fa-pseudo-element",sN="data-fa-pseudo-element-pending",tf="data-prefix",nf="data-icon",Hm="fontawesome-i2svg",iN="async",oN=["HTML","HEAD","STYLE","SCRIPT"],C0=function(){try{return!0}catch{return!1}}(),Ne="classic",Ue="sharp",rf=[Ne,Ue];function lo(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Ne]}})}var Ci=lo((xo={},Ge(xo,Ne,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ge(xo,Ue,{fa:"solid",fass:"solid","fa-solid":"solid"}),xo)),Ni=lo((So={},Ge(So,Ne,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ge(So,Ue,{solid:"fass"}),So)),Ri=lo((Ao={},Ge(Ao,Ne,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ge(Ao,Ue,{fass:"fa-solid"}),Ao)),aN=lo((Co={},Ge(Co,Ne,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ge(Co,Ue,{"fa-solid":"fass"}),Co)),cN=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,N0="fa-layers-text",lN=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,uN=lo((No={},Ge(No,Ne,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ge(No,Ue,{900:"fass"}),No)),R0=[1,2,3,4,5,6,7,8,9,10],hN=R0.concat([11,12,13,14,15,16,17,18,19,20]),fN=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],vr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Di=new Set;Object.keys(Ni[Ne]).map(Di.add.bind(Di));Object.keys(Ni[Ue]).map(Di.add.bind(Di));var dN=[].concat(rf,co(Di),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",vr.GROUP,vr.SWAP_OPACITY,vr.PRIMARY,vr.SECONDARY]).concat(R0.map(function(t){return"".concat(t,"x")})).concat(hN.map(function(t){return"w-".concat(t)})),ri=Qn.FontAwesomeConfig||{};function mN(t){var e=De.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function pN(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(De&&typeof De.querySelector=="function"){var gN=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];gN.forEach(function(t){var e=Zh(t,2),n=e[0],r=e[1],s=pN(mN(n));s!=null&&(ri[r]=s)})}var D0={styleDefault:"solid",familyDefault:"classic",cssPrefix:S0,replacementClass:A0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ri.familyPrefix&&(ri.cssPrefix=ri.familyPrefix);var Es=$($({},D0),ri);Es.autoReplaceSvg||(Es.observeMutations=!1);var H={};Object.keys(D0).forEach(function(t){Object.defineProperty(H,t,{enumerable:!0,set:function(n){Es[t]=n,si.forEach(function(r){return r(H)})},get:function(){return Es[t]}})});Object.defineProperty(H,"familyPrefix",{enumerable:!0,set:function(e){Es.cssPrefix=e,si.forEach(function(n){return n(H)})},get:function(){return Es.cssPrefix}});Qn.FontAwesomeConfig=H;var si=[];function yN(t){return si.push(t),function(){si.splice(si.indexOf(t),1)}}var Rn=ru,Jt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function vN(t){if(!(!t||!Tn)){var e=De.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=De.head.childNodes,r=null,s=n.length-1;s>-1;s--){var i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return De.head.insertBefore(e,r),t}}var bN="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Oi(){for(var t=12,e="";t-- >0;)e+=bN[Math.random()*62|0];return e}function Os(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function sf(t){return t.classList?Os(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function O0(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function wN(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(O0(t[n]),'" ')},"").trim()}function Ac(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function of(t){return t.size!==Jt.size||t.x!==Jt.x||t.y!==Jt.y||t.rotate!==Jt.rotate||t.flipX||t.flipY}function _N(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(a)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:c,path:l}}function EN(t){var e=t.transform,n=t.width,r=n===void 0?ru:n,s=t.height,i=s===void 0?ru:s,o=t.startCentered,a=o===void 0?!1:o,c="";return a&&x0?c+="translate(".concat(e.x/Rn-r/2,"em, ").concat(e.y/Rn-i/2,"em) "):a?c+="translate(calc(-50% + ".concat(e.x/Rn,"em), calc(-50% + ").concat(e.y/Rn,"em)) "):c+="translate(".concat(e.x/Rn,"em, ").concat(e.y/Rn,"em) "),c+="scale(".concat(e.size/Rn*(e.flipX?-1:1),", ").concat(e.size/Rn*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var IN=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function P0(){var t=S0,e=A0,n=H.cssPrefix,r=H.replacementClass,s=IN;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return s}var zm=!1;function ol(){H.autoAddCss&&!zm&&(vN(P0()),zm=!0)}var TN={mixout:function(){return{dom:{css:P0,insertCss:ol}}},hooks:function(){return{beforeDOMElementCreation:function(){ol()},beforeI2svg:function(){ol()}}}},wn=Qn||{};wn[bn]||(wn[bn]={});wn[bn].styles||(wn[bn].styles={});wn[bn].hooks||(wn[bn].hooks={});wn[bn].shims||(wn[bn].shims=[]);var Bt=wn[bn],M0=[],kN=function t(){De.removeEventListener("DOMContentLoaded",t),Ca=1,M0.map(function(e){return e()})},Ca=!1;Tn&&(Ca=(De.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(De.readyState),Ca||De.addEventListener("DOMContentLoaded",kN));function xN(t){!Tn||(Ca?setTimeout(t,0):M0.push(t))}function uo(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,s=t.children,i=s===void 0?[]:s;return typeof t=="string"?O0(t):"<".concat(e," ").concat(wN(r),">").concat(i.map(uo).join(""),"</").concat(e,">")}function qm(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var SN=function(e,n){return function(r,s,i,o){return e.call(n,r,s,i,o)}},al=function(e,n,r,s){var i=Object.keys(e),o=i.length,a=s!==void 0?SN(n,s):n,c,l,u;for(r===void 0?(c=1,u=e[i[0]]):(c=0,u=r);c<o;c++)l=i[c],u=a(u,e[l],l,e);return u};function AN(t){for(var e=[],n=0,r=t.length;n<r;){var s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function iu(t){var e=AN(t);return e.length===1?e[0].toString(16):null}function CN(t,e){var n=t.length,r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function Km(t){return Object.keys(t).reduce(function(e,n){var r=t[n],s=!!r.icon;return s?e[r.iconName]=r.icon:e[n]=r,e},{})}function ou(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,s=r===void 0?!1:r,i=Km(e);typeof Bt.hooks.addPack=="function"&&!s?Bt.hooks.addPack(t,Km(e)):Bt.styles[t]=$($({},Bt.styles[t]||{}),i),t==="fas"&&ou("fa",e)}var Ro,Do,Oo,Gr=Bt.styles,NN=Bt.shims,RN=(Ro={},Ge(Ro,Ne,Object.values(Ri[Ne])),Ge(Ro,Ue,Object.values(Ri[Ue])),Ro),af=null,L0={},$0={},F0={},U0={},V0={},DN=(Do={},Ge(Do,Ne,Object.keys(Ci[Ne])),Ge(Do,Ue,Object.keys(Ci[Ue])),Do);function ON(t){return~dN.indexOf(t)}function PN(t,e){var n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!ON(s)?s:null}var B0=function(){var e=function(i){return al(Gr,function(o,a,c){return o[c]=al(a,i,{}),o},{})};L0=e(function(s,i,o){if(i[3]&&(s[i[3]]=o),i[2]){var a=i[2].filter(function(c){return typeof c=="number"});a.forEach(function(c){s[c.toString(16)]=o})}return s}),$0=e(function(s,i,o){if(s[o]=o,i[2]){var a=i[2].filter(function(c){return typeof c=="string"});a.forEach(function(c){s[c]=o})}return s}),V0=e(function(s,i,o){var a=i[2];return s[o]=o,a.forEach(function(c){s[c]=o}),s});var n="far"in Gr||H.autoFetchSvg,r=al(NN,function(s,i){var o=i[0],a=i[1],c=i[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(s.names[o]={prefix:a,iconName:c}),typeof o=="number"&&(s.unicodes[o.toString(16)]={prefix:a,iconName:c}),s},{names:{},unicodes:{}});F0=r.names,U0=r.unicodes,af=Cc(H.styleDefault,{family:H.familyDefault})};yN(function(t){af=Cc(t.styleDefault,{family:H.familyDefault})});B0();function cf(t,e){return(L0[t]||{})[e]}function MN(t,e){return($0[t]||{})[e]}function br(t,e){return(V0[t]||{})[e]}function j0(t){return F0[t]||{prefix:null,iconName:null}}function LN(t){var e=U0[t],n=cf("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Xn(){return af}var lf=function(){return{prefix:null,iconName:null,rest:[]}};function Cc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Ne:n,s=Ci[r][t],i=Ni[r][t]||Ni[r][s],o=t in Bt.styles?t:null;return i||o||null}var Wm=(Oo={},Ge(Oo,Ne,Object.keys(Ri[Ne])),Ge(Oo,Ue,Object.keys(Ri[Ue])),Oo);function Nc(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,s=r===void 0?!1:r,i=(e={},Ge(e,Ne,"".concat(H.cssPrefix,"-").concat(Ne)),Ge(e,Ue,"".concat(H.cssPrefix,"-").concat(Ue)),e),o=null,a=Ne;(t.includes(i[Ne])||t.some(function(l){return Wm[Ne].includes(l)}))&&(a=Ne),(t.includes(i[Ue])||t.some(function(l){return Wm[Ue].includes(l)}))&&(a=Ue);var c=t.reduce(function(l,u){var h=PN(H.cssPrefix,u);if(Gr[u]?(u=RN[a].includes(u)?aN[a][u]:u,o=u,l.prefix=u):DN[a].indexOf(u)>-1?(o=u,l.prefix=Cc(u,{family:a})):h?l.iconName=h:u!==H.replacementClass&&u!==i[Ne]&&u!==i[Ue]&&l.rest.push(u),!s&&l.prefix&&l.iconName){var f=o==="fa"?j0(l.iconName):{},m=br(l.prefix,l.iconName);f.prefix&&(o=null),l.iconName=f.iconName||m||l.iconName,l.prefix=f.prefix||l.prefix,l.prefix==="far"&&!Gr.far&&Gr.fas&&!H.autoFetchSvg&&(l.prefix="fas")}return l},lf());return(t.includes("fa-brands")||t.includes("fab"))&&(c.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(c.prefix="fad"),!c.prefix&&a===Ue&&(Gr.fass||H.autoFetchSvg)&&(c.prefix="fass",c.iconName=br(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=Xn()||"fas"),c}var $N=function(){function t(){Y4(this,t),this.definitions={}}return Q4(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];var o=s.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=$($({},n.definitions[a]||{}),o[a]),ou(a,o[a]);var c=Ri[Ne][a];c&&ou(c,o[a]),B0()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(i){var o=s[i],a=o.prefix,c=o.iconName,l=o.icon,u=l[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(h){typeof h=="string"&&(n[a][h]=l)}),n[a][c]=l}),n}}]),t}(),Gm=[],Yr={},os={},FN=Object.keys(os);function UN(t,e){var n=e.mixoutsTo;return Gm=t,Yr={},Object.keys(os).forEach(function(r){FN.indexOf(r)===-1&&delete os[r]}),Gm.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(o){typeof s[o]=="function"&&(n[o]=s[o]),Aa(s[o])==="object"&&Object.keys(s[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=s[o][a]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Yr[o]||(Yr[o]=[]),Yr[o].push(i[o])})}r.provides&&r.provides(os)}),n}function au(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];var i=Yr[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Dr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var s=Yr[t]||[];s.forEach(function(i){i.apply(null,n)})}function _n(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return os[t]?os[t].apply(null,e):void 0}function cu(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Xn();if(!!e)return e=br(n,e)||e,qm(H0.definitions,n,e)||qm(Bt.styles,n,e)}var H0=new $N,VN=function(){H.autoReplaceSvg=!1,H.observeMutations=!1,Dr("noAuto")},BN={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Tn?(Dr("beforeI2svg",e),_n("pseudoElements2svg",e),_n("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;H.autoReplaceSvg===!1&&(H.autoReplaceSvg=!0),H.observeMutations=!0,xN(function(){HN({autoReplaceSvgRoot:n}),Dr("watch",e)})}},jN={icon:function(e){if(e===null)return null;if(Aa(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:br(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Cc(e[0]);return{prefix:r,iconName:br(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(H.cssPrefix,"-"))>-1||e.match(cN))){var s=Nc(e.split(" "),{skipLookups:!0});return{prefix:s.prefix||Xn(),iconName:br(s.prefix,s.iconName)||s.iconName}}if(typeof e=="string"){var i=Xn();return{prefix:i,iconName:br(i,e)||e}}}},At={noAuto:VN,config:H,dom:BN,parse:jN,library:H0,findIconDefinition:cu,toHtml:uo},HN=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?De:n;(Object.keys(Bt.styles).length>0||H.autoFetchSvg)&&Tn&&H.autoReplaceSvg&&At.dom.i2svg({node:r})};function Rc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return uo(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!Tn){var r=De.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function zN(t){var e=t.children,n=t.main,r=t.mask,s=t.attributes,i=t.styles,o=t.transform;if(of(o)&&n.found&&!r.found){var a=n.width,c=n.height,l={x:a/c/2,y:.5};s.style=Ac($($({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function qN(t){var e=t.prefix,n=t.iconName,r=t.children,s=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(H.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:$($({},s),{},{id:o}),children:r}]}]}function uf(t){var e=t.icons,n=e.main,r=e.mask,s=t.prefix,i=t.iconName,o=t.transform,a=t.symbol,c=t.title,l=t.maskId,u=t.titleId,h=t.extra,f=t.watchable,m=f===void 0?!1:f,g=r.found?r:n,v=g.width,T=g.height,y=s==="fak",_=[H.replacementClass,i?"".concat(H.cssPrefix,"-").concat(i):""].filter(function(oe){return h.classes.indexOf(oe)===-1}).filter(function(oe){return oe!==""||!!oe}).concat(h.classes).join(" "),D={children:[],attributes:$($({},h.attributes),{},{"data-prefix":s,"data-icon":i,class:_,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(T)})},F=y&&!~h.classes.indexOf("fa-fw")?{width:"".concat(v/T*16*.0625,"em")}:{};m&&(D.attributes[Rr]=""),c&&(D.children.push({tag:"title",attributes:{id:D.attributes["aria-labelledby"]||"title-".concat(u||Oi())},children:[c]}),delete D.attributes.title);var X=$($({},D),{},{prefix:s,iconName:i,main:n,mask:r,maskId:l,transform:o,symbol:a,styles:$($({},F),h.styles)}),fe=r.found&&n.found?_n("generateAbstractMask",X)||{children:[],attributes:{}}:_n("generateAbstractIcon",X)||{children:[],attributes:{}},me=fe.children,Z=fe.attributes;return X.children=me,X.attributes=Z,a?qN(X):zN(X)}function Ym(t){var e=t.content,n=t.width,r=t.height,s=t.transform,i=t.title,o=t.extra,a=t.watchable,c=a===void 0?!1:a,l=$($($({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});c&&(l[Rr]="");var u=$({},o.styles);of(s)&&(u.transform=EN({transform:s,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var h=Ac(u);h.length>0&&(l.style=h);var f=[];return f.push({tag:"span",attributes:l,children:[e]}),i&&f.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),f}function KN(t){var e=t.content,n=t.title,r=t.extra,s=$($($({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Ac(r.styles);i.length>0&&(s.style=i);var o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var cl=Bt.styles;function lu(t){var e=t[0],n=t[1],r=t.slice(4),s=Zh(r,1),i=s[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(H.cssPrefix,"-").concat(vr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(vr.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(vr.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var WN={found:!1,width:512,height:512};function GN(t,e){!C0&&!H.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function uu(t,e){var n=e;return e==="fa"&&H.styleDefault!==null&&(e=Xn()),new Promise(function(r,s){if(_n("missingIconAbstract"),n==="fa"){var i=j0(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&cl[e]&&cl[e][t]){var o=cl[e][t];return r(lu(o))}GN(t,e),r($($({},WN),{},{icon:H.showMissingIcons&&t?_n("missingIconAbstract")||{}:{}}))})}var Qm=function(){},hu=H.measurePerformance&&ko&&ko.mark&&ko.measure?ko:{mark:Qm,measure:Qm},qs='FA "6.2.0"',YN=function(e){return hu.mark("".concat(qs," ").concat(e," begins")),function(){return z0(e)}},z0=function(e){hu.mark("".concat(qs," ").concat(e," ends")),hu.measure("".concat(qs," ").concat(e),"".concat(qs," ").concat(e," begins"),"".concat(qs," ").concat(e," ends"))},hf={begin:YN,end:z0},Ko=function(){};function Xm(t){var e=t.getAttribute?t.getAttribute(Rr):null;return typeof e=="string"}function QN(t){var e=t.getAttribute?t.getAttribute(tf):null,n=t.getAttribute?t.getAttribute(nf):null;return e&&n}function XN(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(H.replacementClass)}function JN(){if(H.autoReplaceSvg===!0)return Wo.replace;var t=Wo[H.autoReplaceSvg];return t||Wo.replace}function ZN(t){return De.createElementNS("http://www.w3.org/2000/svg",t)}function eR(t){return De.createElement(t)}function q0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?ZN:eR:n;if(typeof t=="string")return De.createTextNode(t);var s=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){s.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){s.appendChild(q0(o,{ceFn:r}))}),s}function tR(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Wo={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(s){n.parentNode.insertBefore(q0(s),n)}),n.getAttribute(Rr)===null&&H.keepOriginalSource){var r=De.createComment(tR(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~sf(n).indexOf(H.replacementClass))return Wo.replace(e);var s=new RegExp("".concat(H.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(a,c){return c===H.replacementClass||c.match(s)?a.toSvg.push(c):a.toNode.push(c),a},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(a){return uo(a)}).join(`
`);n.setAttribute(Rr,""),n.innerHTML=o}};function Jm(t){t()}function K0(t,e){var n=typeof e=="function"?e:Ko;if(t.length===0)n();else{var r=Jm;H.mutateApproach===iN&&(r=Qn.requestAnimationFrame||Jm),r(function(){var s=JN(),i=hf.begin("mutate");t.map(s),i(),n()})}}var ff=!1;function W0(){ff=!0}function fu(){ff=!1}var Na=null;function Zm(t){if(!!jm&&!!H.observeMutations){var e=t.treeCallback,n=e===void 0?Ko:e,r=t.nodeCallback,s=r===void 0?Ko:r,i=t.pseudoElementsCallback,o=i===void 0?Ko:i,a=t.observeMutationsRoot,c=a===void 0?De:a;Na=new jm(function(l){if(!ff){var u=Xn();Os(l).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!Xm(h.addedNodes[0])&&(H.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&H.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&Xm(h.target)&&~fN.indexOf(h.attributeName))if(h.attributeName==="class"&&QN(h.target)){var f=Nc(sf(h.target)),m=f.prefix,g=f.iconName;h.target.setAttribute(tf,m||u),g&&h.target.setAttribute(nf,g)}else XN(h.target)&&s(h.target)})}}),Tn&&Na.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function nR(){!Na||Na.disconnect()}function rR(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,s){var i=s.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function sR(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",s=Nc(sf(t));return s.prefix||(s.prefix=Xn()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=MN(s.prefix,t.innerText)||cf(s.prefix,iu(t.innerText))),!s.iconName&&H.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function iR(t){var e=Os(t.attributes).reduce(function(s,i){return s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return H.autoA11y&&(n?e["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(r||Oi()):(e["aria-hidden"]="true",e.focusable="false")),e}function oR(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Jt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ep(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=sR(t),r=n.iconName,s=n.prefix,i=n.rest,o=iR(t),a=au("parseNodeAttributes",{},t),c=e.styleParser?rR(t):[];return $({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:s,transform:Jt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:c,attributes:o}},a)}var aR=Bt.styles;function G0(t){var e=H.autoReplaceSvg==="nest"?ep(t,{styleParser:!1}):ep(t);return~e.extra.classes.indexOf(N0)?_n("generateLayersText",t,e):_n("generateSvgReplacementMutation",t,e)}var Jn=new Set;rf.map(function(t){Jn.add("fa-".concat(t))});Object.keys(Ci[Ne]).map(Jn.add.bind(Jn));Object.keys(Ci[Ue]).map(Jn.add.bind(Jn));Jn=co(Jn);function tp(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Tn)return Promise.resolve();var n=De.documentElement.classList,r=function(h){return n.add("".concat(Hm,"-").concat(h))},s=function(h){return n.remove("".concat(Hm,"-").concat(h))},i=H.autoFetchSvg?Jn:rf.map(function(u){return"fa-".concat(u)}).concat(Object.keys(aR));i.includes("fa")||i.push("fa");var o=[".".concat(N0,":not([").concat(Rr,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(Rr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Os(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),s("complete");else return Promise.resolve();var c=hf.begin("onTree"),l=a.reduce(function(u,h){try{var f=G0(h);f&&u.push(f)}catch(m){C0||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise(function(u,h){Promise.all(l).then(function(f){K0(f,function(){r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),c(),u()})}).catch(function(f){c(),h(f)})})}function cR(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;G0(t).then(function(n){n&&K0([n],e)})}function lR(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:cu(e||{}),s=n.mask;return s&&(s=(s||{}).icon?s:cu(s||{})),t(r,$($({},n),{},{mask:s}))}}var uR=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,s=r===void 0?Jt:r,i=n.symbol,o=i===void 0?!1:i,a=n.mask,c=a===void 0?null:a,l=n.maskId,u=l===void 0?null:l,h=n.title,f=h===void 0?null:h,m=n.titleId,g=m===void 0?null:m,v=n.classes,T=v===void 0?[]:v,y=n.attributes,_=y===void 0?{}:y,D=n.styles,F=D===void 0?{}:D;if(!!e){var X=e.prefix,fe=e.iconName,me=e.icon;return Rc($({type:"icon"},e),function(){return Dr("beforeDOMElementCreation",{iconDefinition:e,params:n}),H.autoA11y&&(f?_["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(g||Oi()):(_["aria-hidden"]="true",_.focusable="false")),uf({icons:{main:lu(me),mask:c?lu(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:X,iconName:fe,transform:$($({},Jt),s),symbol:o,title:f,maskId:u,titleId:g,extra:{attributes:_,styles:F,classes:T}})})}},hR={mixout:function(){return{icon:lR(uR)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=tp,n.nodeCallback=cR,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,s=r===void 0?De:r,i=n.callback,o=i===void 0?function(){}:i;return tp(s,o)},e.generateSvgReplacementMutation=function(n,r){var s=r.iconName,i=r.title,o=r.titleId,a=r.prefix,c=r.transform,l=r.symbol,u=r.mask,h=r.maskId,f=r.extra;return new Promise(function(m,g){Promise.all([uu(s,a),u.iconName?uu(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var T=Zh(v,2),y=T[0],_=T[1];m([n,uf({icons:{main:y,mask:_},prefix:a,iconName:s,transform:c,symbol:l,maskId:h,title:i,titleId:o,extra:f,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){var r=n.children,s=n.attributes,i=n.main,o=n.transform,a=n.styles,c=Ac(a);c.length>0&&(s.style=c);var l;return of(o)&&(l=_n("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(l||i.icon),{children:r,attributes:s}}}},fR={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,i=s===void 0?[]:s;return Rc({type:"layer"},function(){Dr("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(c){o=o.concat(c.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(H.cssPrefix,"-layers")].concat(co(i)).join(" ")},children:o}]})}}}},dR={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,i=s===void 0?null:s,o=r.classes,a=o===void 0?[]:o,c=r.attributes,l=c===void 0?{}:c,u=r.styles,h=u===void 0?{}:u;return Rc({type:"counter",content:n},function(){return Dr("beforeDOMElementCreation",{content:n,params:r}),KN({content:n.toString(),title:i,extra:{attributes:l,styles:h,classes:["".concat(H.cssPrefix,"-layers-counter")].concat(co(a))}})})}}}},mR={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,i=s===void 0?Jt:s,o=r.title,a=o===void 0?null:o,c=r.classes,l=c===void 0?[]:c,u=r.attributes,h=u===void 0?{}:u,f=r.styles,m=f===void 0?{}:f;return Rc({type:"text",content:n},function(){return Dr("beforeDOMElementCreation",{content:n,params:r}),Ym({content:n,transform:$($({},Jt),i),title:a,extra:{attributes:h,styles:m,classes:["".concat(H.cssPrefix,"-layers-text")].concat(co(l))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var s=r.title,i=r.transform,o=r.extra,a=null,c=null;if(x0){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/l,c=u.height/l}return H.autoA11y&&!s&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ym({content:n.innerHTML,width:a,height:c,transform:i,title:s,extra:o,watchable:!0})])}}},pR=new RegExp('"',"ug"),np=[1105920,1112319];function gR(t){var e=t.replace(pR,""),n=CN(e,0),r=n>=np[0]&&n<=np[1],s=e.length===2?e[0]===e[1]:!1;return{value:iu(s?e[0]:e),isSecondary:r||s}}function rp(t,e){var n="".concat(sN).concat(e.replace(":","-"));return new Promise(function(r,s){if(t.getAttribute(n)!==null)return r();var i=Os(t.children),o=i.filter(function(me){return me.getAttribute(su)===e})[0],a=Qn.getComputedStyle(t,e),c=a.getPropertyValue("font-family").match(lN),l=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&u!=="none"&&u!==""){var h=a.getPropertyValue("content"),f=~["Sharp"].indexOf(c[2])?Ue:Ne,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?Ni[f][c[2].toLowerCase()]:uN[f][l],g=gR(h),v=g.value,T=g.isSecondary,y=c[0].startsWith("FontAwesome"),_=cf(m,v),D=_;if(y){var F=LN(v);F.iconName&&F.prefix&&(_=F.iconName,m=F.prefix)}if(_&&!T&&(!o||o.getAttribute(tf)!==m||o.getAttribute(nf)!==D)){t.setAttribute(n,D),o&&t.removeChild(o);var X=oR(),fe=X.extra;fe.attributes[su]=e,uu(_,m).then(function(me){var Z=uf($($({},X),{},{icons:{main:me,mask:lf()},prefix:m,iconName:D,extra:fe,watchable:!0})),oe=De.createElement("svg");e==="::before"?t.insertBefore(oe,t.firstChild):t.appendChild(oe),oe.outerHTML=Z.map(function(ye){return uo(ye)}).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function yR(t){return Promise.all([rp(t,"::before"),rp(t,"::after")])}function vR(t){return t.parentNode!==document.head&&!~oN.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(su)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function sp(t){if(!!Tn)return new Promise(function(e,n){var r=Os(t.querySelectorAll("*")).filter(vR).map(yR),s=hf.begin("searchPseudoElements");W0(),Promise.all(r).then(function(){s(),fu(),e()}).catch(function(){s(),fu(),n()})})}var bR={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=sp,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,s=r===void 0?De:r;H.searchPseudoElements&&sp(s)}}},ip=!1,wR={mixout:function(){return{dom:{unwatch:function(){W0(),ip=!0}}}},hooks:function(){return{bootstrap:function(){Zm(au("mutationObserverCallbacks",{}))},noAuto:function(){nR()},watch:function(n){var r=n.observeMutationsRoot;ip?fu():Zm(au("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},op=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,s){var i=s.toLowerCase().split("-"),o=i[0],a=i.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},_R={mixout:function(){return{parse:{transform:function(n){return op(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-transform");return s&&(n.transform=op(s)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,s=n.transform,i=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(i/2," 256)")},c="translate(".concat(s.x*32,", ").concat(s.y*32,") "),l="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),u="rotate(".concat(s.rotate," 0 0)"),h={transform:"".concat(c," ").concat(l," ").concat(u)},f={transform:"translate(".concat(o/2*-1," -256)")},m={outer:a,inner:h,path:f};return{tag:"g",attributes:$({},m.outer),children:[{tag:"g",attributes:$({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:$($({},r.icon.attributes),m.path)}]}]}}}},ll={x:0,y:0,width:"100%",height:"100%"};function ap(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function ER(t){return t.tag==="g"?t.children:[t]}var IR={hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-mask"),i=s?Nc(s.split(" ").map(function(o){return o.trim()})):lf();return i.prefix||(i.prefix=Xn()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,s=n.attributes,i=n.main,o=n.mask,a=n.maskId,c=n.transform,l=i.width,u=i.icon,h=o.width,f=o.icon,m=_N({transform:c,containerWidth:h,iconWidth:l}),g={tag:"rect",attributes:$($({},ll),{},{fill:"white"})},v=u.children?{children:u.children.map(ap)}:{},T={tag:"g",attributes:$({},m.inner),children:[ap($({tag:u.tag,attributes:$($({},u.attributes),m.path)},v))]},y={tag:"g",attributes:$({},m.outer),children:[T]},_="mask-".concat(a||Oi()),D="clip-".concat(a||Oi()),F={tag:"mask",attributes:$($({},ll),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,y]},X={tag:"defs",children:[{tag:"clipPath",attributes:{id:D},children:ER(f)},F]};return r.push(X,{tag:"rect",attributes:$({fill:"currentColor","clip-path":"url(#".concat(D,")"),mask:"url(#".concat(_,")")},ll)}),{children:r,attributes:s}}}},TR={provides:function(e){var n=!1;Qn.matchMedia&&(n=Qn.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],s={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:$($({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=$($({},i),{},{attributeName:"opacity"}),a={tag:"circle",attributes:$($({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:$($({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:$($({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:$($({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:$($({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:$($({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:$($({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},kR={hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-symbol"),i=s===null?!1:s===""?!0:s;return n.symbol=i,n}}}},xR=[TN,hR,fR,dR,mR,bR,wR,_R,IR,TR,kR];UN(xR,{mixoutsTo:At});At.noAuto;var Y0=At.config,SR=At.library;At.dom;var Ra=At.parse;At.findIconDefinition;At.toHtml;var AR=At.icon;At.layer;var CR=At.text;At.counter;function cp(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Ft(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?cp(Object(n),!0).forEach(function(r){_t(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):cp(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Da(t){return Da=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Da(t)}function _t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function NR(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function RR(t,e){if(t==null)return{};var n=NR(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function du(t){return DR(t)||OR(t)||PR(t)||MR()}function DR(t){if(Array.isArray(t))return mu(t)}function OR(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function PR(t,e){if(!!t){if(typeof t=="string")return mu(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return mu(t,e)}}function mu(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function MR(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var LR=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Q0={exports:{}};(function(t){(function(e){var n=function(y,_,D){if(!l(_)||h(_)||f(_)||m(_)||c(_))return _;var F,X=0,fe=0;if(u(_))for(F=[],fe=_.length;X<fe;X++)F.push(n(y,_[X],D));else{F={};for(var me in _)Object.prototype.hasOwnProperty.call(_,me)&&(F[y(me,D)]=n(y,_[me],D))}return F},r=function(y,_){_=_||{};var D=_.separator||"_",F=_.split||/(?=[A-Z])/;return y.split(F).join(D)},s=function(y){return g(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(_,D){return D?D.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var _=s(y);return _.substr(0,1).toUpperCase()+_.substr(1)},o=function(y,_){return r(y,_).toLowerCase()},a=Object.prototype.toString,c=function(y){return typeof y=="function"},l=function(y){return y===Object(y)},u=function(y){return a.call(y)=="[object Array]"},h=function(y){return a.call(y)=="[object Date]"},f=function(y){return a.call(y)=="[object RegExp]"},m=function(y){return a.call(y)=="[object Boolean]"},g=function(y){return y=y-0,y===y},v=function(y,_){var D=_&&"process"in _?_.process:_;return typeof D!="function"?y:function(F,X){return D(F,y,X)}},T={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,_){return n(v(s,_),y)},decamelizeKeys:function(y,_){return n(v(o,_),y,_)},pascalizeKeys:function(y,_){return n(v(i,_),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=T:e.humps=T})(LR)})(Q0);var $R=Q0.exports,FR=["class","style"];function UR(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=$R.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function VR(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function df(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return df(c)}),s=Object.keys(t.attributes||{}).reduce(function(c,l){var u=t.attributes[l];switch(l){case"class":c.class=VR(u);break;case"style":c.style=UR(u);break;default:c.attrs[l]=u}return c},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,a=RR(n,FR);return $i(t.tag,Ft(Ft(Ft({},e),{},{class:s.class,style:Ft(Ft({},s.style),o)},s.attrs),a),r)}var X0=!1;try{X0=!0}catch{}function BR(){if(!X0&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ii(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?_t({},t,e):{}}function jR(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},_t(e,"fa-".concat(t.size),t.size!==null),_t(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),_t(e,"fa-pull-".concat(t.pull),t.pull!==null),_t(e,"fa-swap-opacity",t.swapOpacity),_t(e,"fa-bounce",t.bounce),_t(e,"fa-shake",t.shake),_t(e,"fa-beat",t.beat),_t(e,"fa-fade",t.fade),_t(e,"fa-beat-fade",t.beatFade),_t(e,"fa-flash",t.flash),_t(e,"fa-spin-pulse",t.spinPulse),_t(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function lp(t){if(t&&Da(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ra.icon)return Ra.icon(t);if(t===null)return null;if(Da(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var HR=Mi({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=Fe(function(){return lp(e.icon)}),i=Fe(function(){return ii("classes",jR(e))}),o=Fe(function(){return ii("transform",typeof e.transform=="string"?Ra.transform(e.transform):e.transform)}),a=Fe(function(){return ii("mask",lp(e.mask))}),c=Fe(function(){return AR(s.value,Ft(Ft(Ft(Ft({},i.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});Ks(c,function(u){if(!u)return BR("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var l=Fe(function(){return c.value?df(c.value.abstract[0],{},r):null});return function(){return l.value}}});Mi({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var r=n.slots,s=Y0.familyPrefix,i=Fe(function(){return["".concat(s,"-layers")].concat(du(e.fixedWidth?["".concat(s,"-fw")]:[]))});return function(){return $i("div",{class:i.value},r.default?r.default():[])}}});Mi({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var r=n.attrs,s=Y0.familyPrefix,i=Fe(function(){return ii("classes",[].concat(du(e.counter?["".concat(s,"-layers-counter")]:[]),du(e.position?["".concat(s,"-layers-").concat(e.position)]:[])))}),o=Fe(function(){return ii("transform",typeof e.transform=="string"?Ra.transform(e.transform):e.transform)}),a=Fe(function(){var l=CR(e.value.toString(),Ft(Ft({},o.value),i.value)),u=l.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),c=Fe(function(){return df(a.value,{},r)});return function(){return c.value}}});var zR={prefix:"fas",iconName:"info",icon:[192,512,[],"f129","M144 80c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"]},J0={prefix:"fas",iconName:"pencil",icon:[512,512,[9999,61504,"pencil-alt"],"f303","M421.7 220.3l-11.3 11.3-22.6 22.6-205 205c-6.6 6.6-14.8 11.5-23.8 14.1L30.8 511c-8.4 2.5-17.5 .2-23.7-6.1S-1.5 489.7 1 481.2L38.7 353.1c2.6-9 7.5-17.2 14.1-23.8l205-205 22.6-22.6 11.3-11.3 33.9 33.9 62.1 62.1 33.9 33.9zM96 353.9l-9.3 9.3c-.9 .9-1.6 2.1-2 3.4l-25.3 86 86-25.3c1.3-.4 2.5-1.1 3.4-2l9.3-9.3H112c-8.8 0-16-7.2-16-16V353.9zM453.3 19.3l39.4 39.4c25 25 25 65.5 0 90.5l-14.5 14.5-22.6 22.6-11.3 11.3-33.9-33.9-62.1-62.1L314.3 67.7l11.3-11.3 22.6-22.6 14.5-14.5c25-25 65.5-25 90.5 0z"]},qR=J0,KR={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},WR={prefix:"fas",iconName:"lightbulb",icon:[384,512,[128161],"f0eb","M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"]},GR={prefix:"fas",iconName:"arrow-right-from-bracket",icon:[576,512,["sign-out"],"f08b","M534.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L434.7 224 224 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM192 96c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-53 0-96 43-96 96l0 256c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"]},YR=GR,QR={prefix:"fas",iconName:"memory",icon:[576,512,[],"f538","M64 64C28.7 64 0 92.7 0 128v7.4c0 6.8 4.4 12.6 10.1 16.3C23.3 160.3 32 175.1 32 192s-8.7 31.7-21.9 40.3C4.4 236 0 241.8 0 248.6V320H576V248.6c0-6.8-4.4-12.6-10.1-16.3C552.7 223.7 544 208.9 544 192s8.7-31.7 21.9-40.3c5.7-3.7 10.1-9.5 10.1-16.3V128c0-35.3-28.7-64-64-64H64zM576 352H0v64c0 17.7 14.3 32 32 32H80V416c0-8.8 7.2-16 16-16s16 7.2 16 16v32h96V416c0-8.8 7.2-16 16-16s16 7.2 16 16v32h96V416c0-8.8 7.2-16 16-16s16 7.2 16 16v32h96V416c0-8.8 7.2-16 16-16s16 7.2 16 16v32h48c17.7 0 32-14.3 32-32V352zM192 160v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32z"]},XR={prefix:"fas",iconName:"microchip",icon:[512,512,[],"f2db","M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64c-35.3 0-64 28.7-64 64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64c0 35.3 28.7 64 64 64v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448c35.3 0 64-28.7 64-64h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V176h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448c0-35.3-28.7-64-64-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H176V24zM160 128H352c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm192 32H160V352H352V160z"]},JR={prefix:"fas",iconName:"question",icon:[320,512,[10067,10068,61736],"3f","M96 96c-17.7 0-32 14.3-32 32s-14.3 32-32 32s-32-14.3-32-32C0 75 43 32 96 32h97c70.1 0 127 56.9 127 127c0 52.4-32.2 99.4-81 118.4l-63 24.5 0 18.1c0 17.7-14.3 32-32 32s-32-14.3-32-32V301.9c0-26.4 16.2-50.1 40.8-59.6l63-24.5C240 208.3 256 185 256 159c0-34.8-28.2-63-63-63H96zm48 384c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40z"]},ZR={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},eD={prefix:"fas",iconName:"hard-drive",icon:[512,512,[128436,"hdd"],"f0a0","M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V280.4c-17-15.2-39.4-24.4-64-24.4H64c-24.6 0-47 9.2-64 24.4V96zM64 288H448c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V352c0-35.3 28.7-64 64-64zM320 416c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32zm128-32c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z"]},tD={prefix:"fas",iconName:"keyboard",icon:[576,512,[9e3],"f11c","M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm16 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm80-176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V144zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zM160 336c0-8.8 7.2-16 16-16H400c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V336zM272 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM256 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM368 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM352 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V240zM464 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM448 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V240zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16z"]},nD={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},rD=nD,sD={prefix:"fas",iconName:"bolt",icon:[448,512,[9889,"zap"],"f0e7","M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"]},iD={prefix:"fas",iconName:"link",icon:[640,512,[128279,"chain"],"f0c1","M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]},oD={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"]},aD={prefix:"fas",iconName:"square-pen",icon:[448,512,["pen-square","pencil-square"],"f14b","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM325.8 139.7l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-21.4 21.4-71-71 21.4-21.4c15.6-15.6 40.9-15.6 56.6 0zM119.9 289L225.1 183.8l71 71L190.9 359.9c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9z"]},cD=aD,lD={prefix:"fas",iconName:"battery-full",icon:[576,512,[128267,"battery","battery-5"],"f240","M0 176c0-44.2 35.8-80 80-80H464c44.2 0 80 35.8 80 80v16c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32v16c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V176zm80-16c-8.8 0-16 7.2-16 16V336c0 8.8 7.2 16 16 16H464c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H80zm368 32V320H96V192H448z"]},uD=lD,hD={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},fD={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]},dD=fD,mD={prefix:"fas",iconName:"chevron-left",icon:[384,512,[9001],"f053","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},pD={prefix:"fas",iconName:"chevron-right",icon:[384,512,[9002],"f054","M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},gD={prefix:"fas",iconName:"display",icon:[576,512,[],"e163","M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V352H64V64H512z"]},yD={prefix:"fas",iconName:"check",icon:[512,512,[10003,10004],"f00c","M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},vD={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z"]},bD=vD,wD={prefix:"fas",iconName:"database",icon:[448,512,[],"f1c0","M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"]};SR.add(mD,pD,KR,hD,rD,wD,YR,J0,ZR,qR,cD,WR,dD,bD,iD,oD,yD,JR,zR,XR,QR,gD,eD,uD,tD,sD);kw(OS).use(Jh).component("font-awesome-icon",HR).mount("#app");
