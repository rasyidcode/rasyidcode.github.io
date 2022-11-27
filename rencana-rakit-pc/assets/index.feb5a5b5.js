(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function bu(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const n1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",r1=bu(n1);function up(t){return!!t||t===""}function wu(t){if(te(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Je(r)?o1(r):wu(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Je(t))return t;if(Pe(t))return t}}const s1=/;(?![^(]*\))/g,i1=/:(.+)/;function o1(t){const e={};return t.split(s1).forEach(n=>{if(n){const r=n.split(i1);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function rt(t){let e="";if(Je(t))e=t;else if(te(t))for(let n=0;n<t.length;n++){const r=rt(t[n]);r&&(e+=r+" ")}else if(Pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Te=t=>Je(t)?t:t==null?"":te(t)||Pe(t)&&(t.toString===mp||!oe(t.toString))?JSON.stringify(t,hp,2):String(t),hp=(t,e)=>e&&e.__v_isRef?hp(t,e.value):Jr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:fp(e)?{[`Set(${e.size})`]:[...e.values()]}:Pe(e)&&!te(e)&&!pp(e)?String(e):e,ke={},Xr=[],Ht=()=>{},a1=()=>!1,l1=/^on[^a-z]/,La=t=>l1.test(t),_u=t=>t.startsWith("onUpdate:"),it=Object.assign,Eu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},c1=Object.prototype.hasOwnProperty,de=(t,e)=>c1.call(t,e),te=Array.isArray,Jr=t=>Fa(t)==="[object Map]",fp=t=>Fa(t)==="[object Set]",oe=t=>typeof t=="function",Je=t=>typeof t=="string",Iu=t=>typeof t=="symbol",Pe=t=>t!==null&&typeof t=="object",dp=t=>Pe(t)&&oe(t.then)&&oe(t.catch),mp=Object.prototype.toString,Fa=t=>mp.call(t),u1=t=>Fa(t).slice(8,-1),pp=t=>Fa(t)==="[object Object]",Tu=t=>Je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Vo=bu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$a=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},h1=/-(\w)/g,on=$a(t=>t.replace(h1,(e,n)=>n?n.toUpperCase():"")),f1=/\B([A-Z])/g,Ss=$a(t=>t.replace(f1,"-$1").toLowerCase()),Va=$a(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ll=$a(t=>t?`on${Va(t)}`:""),hi=(t,e)=>!Object.is(t,e),Uo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Zo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ea=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let vf;const d1=()=>vf||(vf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Xt;class m1{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Xt,!e&&Xt&&(this.index=(Xt.scopes||(Xt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Xt;try{return Xt=this,e()}finally{Xt=n}}}on(){Xt=this}off(){Xt=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this.active=!1}}}function p1(t,e=Xt){e&&e.active&&e.effects.push(t)}const ku=t=>{const e=new Set(t);return e.w=0,e.n=0,e},gp=t=>(t.w&Gn)>0,yp=t=>(t.n&Gn)>0,g1=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Gn},y1=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];gp(s)&&!yp(s)?s.delete(t):e[n++]=s,s.w&=~Gn,s.n&=~Gn}e.length=n}},mc=new WeakMap;let Hs=0,Gn=1;const pc=30;let $t;const Ir=Symbol(""),gc=Symbol("");class xu{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,p1(this,r)}run(){if(!this.active)return this.fn();let e=$t,n=Bn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=$t,$t=this,Bn=!0,Gn=1<<++Hs,Hs<=pc?g1(this):bf(this),this.fn()}finally{Hs<=pc&&y1(this),Gn=1<<--Hs,$t=this.parent,Bn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){$t===this?this.deferStop=!0:this.active&&(bf(this),this.onStop&&this.onStop(),this.active=!1)}}function bf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Bn=!0;const vp=[];function As(){vp.push(Bn),Bn=!1}function Cs(){const t=vp.pop();Bn=t===void 0?!0:t}function xt(t,e,n){if(Bn&&$t){let r=mc.get(t);r||mc.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=ku()),bp(s)}}function bp(t,e){let n=!1;Hs<=pc?yp(t)||(t.n|=Gn,n=!gp(t)):n=!t.has($t),n&&(t.add($t),$t.deps.push(t))}function pn(t,e,n,r,s,i){const o=mc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&te(t))o.forEach((l,c)=>{(c==="length"||c>=r)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":te(t)?Tu(n)&&a.push(o.get("length")):(a.push(o.get(Ir)),Jr(t)&&a.push(o.get(gc)));break;case"delete":te(t)||(a.push(o.get(Ir)),Jr(t)&&a.push(o.get(gc)));break;case"set":Jr(t)&&a.push(o.get(Ir));break}if(a.length===1)a[0]&&yc(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);yc(ku(l))}}function yc(t,e){const n=te(t)?t:[...t];for(const r of n)r.computed&&wf(r);for(const r of n)r.computed||wf(r)}function wf(t,e){(t!==$t||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const v1=bu("__proto__,__v_isRef,__isVue"),wp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Iu)),b1=Su(),w1=Su(!1,!0),_1=Su(!0),_f=E1();function E1(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=be(this);for(let i=0,o=this.length;i<o;i++)xt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(be)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){As();const r=be(this)[e].apply(this,n);return Cs(),r}}),t}function Su(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?$1:kp:e?Tp:Ip).get(r))return r;const o=te(r);if(!t&&o&&de(_f,s))return Reflect.get(_f,s,i);const a=Reflect.get(r,s,i);return(Iu(s)?wp.has(s):v1(s))||(t||xt(r,"get",s),e)?a:ht(a)?o&&Tu(s)?a:a.value:Pe(a)?t?xp(a):Ui(a):a}}const I1=_p(),T1=_p(!0);function _p(t=!1){return function(n,r,s,i){let o=n[r];if(ls(o)&&ht(o)&&!ht(s))return!1;if(!t&&(!ta(s)&&!ls(s)&&(o=be(o),s=be(s)),!te(n)&&ht(o)&&!ht(s)))return o.value=s,!0;const a=te(n)&&Tu(r)?Number(r)<n.length:de(n,r),l=Reflect.set(n,r,s,i);return n===be(i)&&(a?hi(s,o)&&pn(n,"set",r,s):pn(n,"add",r,s)),l}}function k1(t,e){const n=de(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&pn(t,"delete",e,void 0),r}function x1(t,e){const n=Reflect.has(t,e);return(!Iu(e)||!wp.has(e))&&xt(t,"has",e),n}function S1(t){return xt(t,"iterate",te(t)?"length":Ir),Reflect.ownKeys(t)}const Ep={get:b1,set:I1,deleteProperty:k1,has:x1,ownKeys:S1},A1={get:_1,set(t,e){return!0},deleteProperty(t,e){return!0}},C1=it({},Ep,{get:w1,set:T1}),Au=t=>t,Ua=t=>Reflect.getPrototypeOf(t);function vo(t,e,n=!1,r=!1){t=t.__v_raw;const s=be(t),i=be(e);n||(e!==i&&xt(s,"get",e),xt(s,"get",i));const{has:o}=Ua(s),a=r?Au:n?Ru:fi;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function bo(t,e=!1){const n=this.__v_raw,r=be(n),s=be(t);return e||(t!==s&&xt(r,"has",t),xt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function wo(t,e=!1){return t=t.__v_raw,!e&&xt(be(t),"iterate",Ir),Reflect.get(t,"size",t)}function Ef(t){t=be(t);const e=be(this);return Ua(e).has.call(e,t)||(e.add(t),pn(e,"add",t,t)),this}function If(t,e){e=be(e);const n=be(this),{has:r,get:s}=Ua(n);let i=r.call(n,t);i||(t=be(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?hi(e,o)&&pn(n,"set",t,e):pn(n,"add",t,e),this}function Tf(t){const e=be(this),{has:n,get:r}=Ua(e);let s=n.call(e,t);s||(t=be(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&pn(e,"delete",t,void 0),i}function kf(){const t=be(this),e=t.size!==0,n=t.clear();return e&&pn(t,"clear",void 0,void 0),n}function _o(t,e){return function(r,s){const i=this,o=i.__v_raw,a=be(o),l=e?Au:t?Ru:fi;return!t&&xt(a,"iterate",Ir),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function Eo(t,e,n){return function(...r){const s=this.__v_raw,i=be(s),o=Jr(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?Au:e?Ru:fi;return!e&&xt(i,"iterate",l?gc:Ir),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Cn(t){return function(...e){return t==="delete"?!1:this}}function N1(){const t={get(i){return vo(this,i)},get size(){return wo(this)},has:bo,add:Ef,set:If,delete:Tf,clear:kf,forEach:_o(!1,!1)},e={get(i){return vo(this,i,!1,!0)},get size(){return wo(this)},has:bo,add:Ef,set:If,delete:Tf,clear:kf,forEach:_o(!1,!0)},n={get(i){return vo(this,i,!0)},get size(){return wo(this,!0)},has(i){return bo.call(this,i,!0)},add:Cn("add"),set:Cn("set"),delete:Cn("delete"),clear:Cn("clear"),forEach:_o(!0,!1)},r={get(i){return vo(this,i,!0,!0)},get size(){return wo(this,!0)},has(i){return bo.call(this,i,!0)},add:Cn("add"),set:Cn("set"),delete:Cn("delete"),clear:Cn("clear"),forEach:_o(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Eo(i,!1,!1),n[i]=Eo(i,!0,!1),e[i]=Eo(i,!1,!0),r[i]=Eo(i,!0,!0)}),[t,n,e,r]}const[R1,D1,O1,P1]=N1();function Cu(t,e){const n=e?t?P1:O1:t?D1:R1;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(de(n,s)&&s in r?n:r,s,i)}const M1={get:Cu(!1,!1)},L1={get:Cu(!1,!0)},F1={get:Cu(!0,!1)},Ip=new WeakMap,Tp=new WeakMap,kp=new WeakMap,$1=new WeakMap;function V1(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function U1(t){return t.__v_skip||!Object.isExtensible(t)?0:V1(u1(t))}function Ui(t){return ls(t)?t:Nu(t,!1,Ep,M1,Ip)}function B1(t){return Nu(t,!1,C1,L1,Tp)}function xp(t){return Nu(t,!0,A1,F1,kp)}function Nu(t,e,n,r,s){if(!Pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=U1(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Zr(t){return ls(t)?Zr(t.__v_raw):!!(t&&t.__v_isReactive)}function ls(t){return!!(t&&t.__v_isReadonly)}function ta(t){return!!(t&&t.__v_isShallow)}function Sp(t){return Zr(t)||ls(t)}function be(t){const e=t&&t.__v_raw;return e?be(e):t}function Ap(t){return Zo(t,"__v_skip",!0),t}const fi=t=>Pe(t)?Ui(t):t,Ru=t=>Pe(t)?xp(t):t;function Cp(t){Bn&&$t&&(t=be(t),bp(t.dep||(t.dep=ku())))}function Np(t,e){t=be(t),t.dep&&yc(t.dep)}function ht(t){return!!(t&&t.__v_isRef===!0)}function j1(t){return Rp(t,!1)}function H1(t){return Rp(t,!0)}function Rp(t,e){return ht(t)?t:new q1(t,e)}class q1{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:be(e),this._value=n?e:fi(e)}get value(){return Cp(this),this._value}set value(e){const n=this.__v_isShallow||ta(e)||ls(e);e=n?e:be(e),hi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:fi(e),Np(this))}}function es(t){return ht(t)?t.value:t}const z1={get:(t,e,n)=>es(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ht(s)&&!ht(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Dp(t){return Zr(t)?t:new Proxy(t,z1)}var Op;class K1{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Op]=!1,this._dirty=!0,this.effect=new xu(e,()=>{this._dirty||(this._dirty=!0,Np(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=be(this);return Cp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Op="__v_isReadonly";function W1(t,e,n=!1){let r,s;const i=oe(t);return i?(r=t,s=Ht):(r=t.get,s=t.set),new K1(r,s,i||!s,n)}function jn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Ba(i,e,n)}return s}function Dt(t,e,n,r){if(oe(t)){const i=jn(t,e,n,r);return i&&dp(i)&&i.catch(o=>{Ba(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Dt(t[i],e,n,r));return s}function Ba(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){jn(l,null,10,[t,o,a]);return}}G1(t,n,s,r)}function G1(t,e,n,r=!0){console.error(t)}let di=!1,vc=!1;const ct=[];let Zt=0;const ts=[];let cn=null,mr=0;const Pp=Promise.resolve();let Du=null;function Mp(t){const e=Du||Pp;return t?e.then(this?t.bind(this):t):e}function Y1(t){let e=Zt+1,n=ct.length;for(;e<n;){const r=e+n>>>1;mi(ct[r])<t?e=r+1:n=r}return e}function Ou(t){(!ct.length||!ct.includes(t,di&&t.allowRecurse?Zt+1:Zt))&&(t.id==null?ct.push(t):ct.splice(Y1(t.id),0,t),Lp())}function Lp(){!di&&!vc&&(vc=!0,Du=Pp.then($p))}function Q1(t){const e=ct.indexOf(t);e>Zt&&ct.splice(e,1)}function X1(t){te(t)?ts.push(...t):(!cn||!cn.includes(t,t.allowRecurse?mr+1:mr))&&ts.push(t),Lp()}function xf(t,e=di?Zt+1:0){for(;e<ct.length;e++){const n=ct[e];n&&n.pre&&(ct.splice(e,1),e--,n())}}function Fp(t){if(ts.length){const e=[...new Set(ts)];if(ts.length=0,cn){cn.push(...e);return}for(cn=e,cn.sort((n,r)=>mi(n)-mi(r)),mr=0;mr<cn.length;mr++)cn[mr]();cn=null,mr=0}}const mi=t=>t.id==null?1/0:t.id,J1=(t,e)=>{const n=mi(t)-mi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function $p(t){vc=!1,di=!0,ct.sort(J1);const e=Ht;try{for(Zt=0;Zt<ct.length;Zt++){const n=ct[Zt];n&&n.active!==!1&&jn(n,null,14)}}finally{Zt=0,ct.length=0,Fp(),di=!1,Du=null,(ct.length||ts.length)&&$p()}}function Z1(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ke;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||ke;f&&(s=n.map(m=>m.trim())),h&&(s=n.map(ea))}let a,l=r[a=Ll(e)]||r[a=Ll(on(e))];!l&&i&&(l=r[a=Ll(Ss(e))]),l&&Dt(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Dt(c,t,6,s)}}function Vp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!oe(t)){const l=c=>{const u=Vp(c,e,!0);u&&(a=!0,it(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Pe(t)&&r.set(t,null),null):(te(i)?i.forEach(l=>o[l]=null):it(o,i),Pe(t)&&r.set(t,o),o)}function ja(t,e){return!t||!La(e)?!1:(e=e.slice(2).replace(/Once$/,""),de(t,e[0].toLowerCase()+e.slice(1))||de(t,Ss(e))||de(t,e))}let ft=null,Ha=null;function na(t){const e=ft;return ft=t,Ha=t&&t.type.__scopeId||null,e}function eb(t){Ha=t}function tb(){Ha=null}function zt(t,e=ft,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&$f(-1);const i=na(e);let o;try{o=t(...s)}finally{na(i),r._d&&$f(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Fl(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:m,ctx:g,inheritAttrs:v}=t;let T,y;const _=na(t);try{if(n.shapeFlag&4){const U=s||r;T=Jt(u.call(U,U,h,i,m,f,g)),y=l}else{const U=e;T=Jt(U.length>1?U(i,{attrs:l,slots:a,emit:c}):U(i,null)),y=e.props?l:nb(l)}}catch(U){Zs.length=0,Ba(U,t,1),T=D(Ot)}let O=T;if(y&&v!==!1){const U=Object.keys(y),{shapeFlag:X}=O;U.length&&X&7&&(o&&U.some(_u)&&(y=rb(y,o)),O=Yn(O,y))}return n.dirs&&(O=Yn(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),T=O,na(_),T}const nb=t=>{let e;for(const n in t)(n==="class"||n==="style"||La(n))&&((e||(e={}))[n]=t[n]);return e},rb=(t,e)=>{const n={};for(const r in t)(!_u(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function sb(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Sf(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!ja(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Sf(r,o,c):!0:!!o;return!1}function Sf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ja(n,i))return!0}return!1}function ib({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const ob=t=>t.__isSuspense;function ab(t,e){e&&e.pendingBranch?te(t)?e.effects.push(...t):e.effects.push(t):X1(t)}function Bo(t,e){if(Xe){let n=Xe.provides;const r=Xe.parent&&Xe.parent.provides;r===n&&(n=Xe.provides=Object.create(r)),n[t]=e}}function Hn(t,e,n=!1){const r=Xe||ft;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&oe(e)?e.call(r.proxy):e}}const Af={};function Xs(t,e,n){return Up(t,e,n)}function Up(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ke){const a=Xe;let l,c=!1,u=!1;if(ht(t)?(l=()=>t.value,c=ta(t)):Zr(t)?(l=()=>t,r=!0):te(t)?(u=!0,c=t.some(y=>Zr(y)||ta(y)),l=()=>t.map(y=>{if(ht(y))return y.value;if(Zr(y))return yr(y);if(oe(y))return jn(y,a,2)})):oe(t)?e?l=()=>jn(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),Dt(t,a,3,[f])}:l=Ht,e&&r){const y=l;l=()=>yr(y())}let h,f=y=>{h=T.onStop=()=>{jn(y,a,4)}};if(gi)return f=Ht,e?n&&Dt(e,a,3,[l(),u?[]:void 0,f]):l(),Ht;let m=u?[]:Af;const g=()=>{if(!!T.active)if(e){const y=T.run();(r||c||(u?y.some((_,O)=>hi(_,m[O])):hi(y,m)))&&(h&&h(),Dt(e,a,3,[y,m===Af?void 0:m,f]),m=y)}else T.run()};g.allowRecurse=!!e;let v;s==="sync"?v=g:s==="post"?v=()=>Et(g,a&&a.suspense):(g.pre=!0,a&&(g.id=a.uid),v=()=>Ou(g));const T=new xu(l,v);return e?n?g():m=T.run():s==="post"?Et(T.run.bind(T),a&&a.suspense):T.run(),()=>{T.stop(),a&&a.scope&&Eu(a.scope.effects,T)}}function lb(t,e,n){const r=this.proxy,s=Je(t)?t.includes(".")?Bp(r,t):()=>r[t]:t.bind(r,r);let i;oe(e)?i=e:(i=e.handler,n=e);const o=Xe;cs(this);const a=Up(s,i.bind(r),n);return o?cs(o):Tr(),a}function Bp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function yr(t,e){if(!Pe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ht(t))yr(t.value,e);else if(te(t))for(let n=0;n<t.length;n++)yr(t[n],e);else if(fp(t)||Jr(t))t.forEach(n=>{yr(n,e)});else if(pp(t))for(const n in t)yr(t[n],e);return t}function cb(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Kp(()=>{t.isMounted=!0}),Wp(()=>{t.isUnmounting=!0}),t}const Rt=[Function,Array],ub={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Rt,onEnter:Rt,onAfterEnter:Rt,onEnterCancelled:Rt,onBeforeLeave:Rt,onLeave:Rt,onAfterLeave:Rt,onLeaveCancelled:Rt,onBeforeAppear:Rt,onAppear:Rt,onAfterAppear:Rt,onAppearCancelled:Rt},setup(t,{slots:e}){const n=Gb(),r=cb();let s;return()=>{const i=e.default&&qp(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const v of i)if(v.type!==Ot){o=v;break}}const a=be(t),{mode:l}=a;if(r.isLeaving)return $l(o);const c=Cf(o);if(!c)return $l(o);const u=bc(c,a,r,n);wc(c,u);const h=n.subTree,f=h&&Cf(h);let m=!1;const{getTransitionKey:g}=c.type;if(g){const v=g();s===void 0?s=v:v!==s&&(s=v,m=!0)}if(f&&f.type!==Ot&&(!pr(c,f)||m)){const v=bc(f,a,r,n);if(wc(f,v),l==="out-in")return r.isLeaving=!0,v.afterLeave=()=>{r.isLeaving=!1,n.update()},$l(o);l==="in-out"&&c.type!==Ot&&(v.delayLeave=(T,y,_)=>{const O=Hp(r,f);O[String(f.key)]=f,T._leaveCb=()=>{y(),T._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=_})}return o}}},jp=ub;function Hp(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function bc(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:v,onAppear:T,onAfterAppear:y,onAppearCancelled:_}=e,O=String(t.key),U=Hp(n,t),X=(ee,ae)=>{ee&&Dt(ee,r,9,ae)},fe=(ee,ae)=>{const ye=ae[1];X(ee,ae),te(ee)?ee.every(qe=>qe.length<=1)&&ye():ee.length<=1&&ye()},me={mode:i,persisted:o,beforeEnter(ee){let ae=a;if(!n.isMounted)if(s)ae=v||a;else return;ee._leaveCb&&ee._leaveCb(!0);const ye=U[O];ye&&pr(t,ye)&&ye.el._leaveCb&&ye.el._leaveCb(),X(ae,[ee])},enter(ee){let ae=l,ye=c,qe=u;if(!n.isMounted)if(s)ae=T||l,ye=y||c,qe=_||u;else return;let B=!1;const Re=ee._enterCb=et=>{B||(B=!0,et?X(qe,[ee]):X(ye,[ee]),me.delayedLeave&&me.delayedLeave(),ee._enterCb=void 0)};ae?fe(ae,[ee,Re]):Re()},leave(ee,ae){const ye=String(t.key);if(ee._enterCb&&ee._enterCb(!0),n.isUnmounting)return ae();X(h,[ee]);let qe=!1;const B=ee._leaveCb=Re=>{qe||(qe=!0,ae(),Re?X(g,[ee]):X(m,[ee]),ee._leaveCb=void 0,U[ye]===t&&delete U[ye])};U[ye]=t,f?fe(f,[ee,B]):B()},clone(ee){return bc(ee,e,n,r)}};return me}function $l(t){if(qa(t))return t=Yn(t),t.children=null,t}function Cf(t){return qa(t)?t.children?t.children[0]:void 0:t}function wc(t,e){t.shapeFlag&6&&t.component?wc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function qp(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Qe?(o.patchFlag&128&&s++,r=r.concat(qp(o.children,e,a))):(e||o.type!==Ot)&&r.push(a!=null?Yn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Bi(t){return oe(t)?{setup:t,name:t.name}:t}const Js=t=>!!t.type.__asyncLoader,qa=t=>t.type.__isKeepAlive;function hb(t,e){zp(t,"a",e)}function fb(t,e){zp(t,"da",e)}function zp(t,e,n=Xe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(za(e,r,n),n){let s=n.parent;for(;s&&s.parent;)qa(s.parent.vnode)&&db(r,e,n,s),s=s.parent}}function db(t,e,n,r){const s=za(e,t,r,!0);Gp(()=>{Eu(r[e],s)},n)}function za(t,e,n=Xe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;As(),cs(n);const a=Dt(e,n,t,o);return Tr(),Cs(),a});return r?s.unshift(i):s.push(i),i}}const kn=t=>(e,n=Xe)=>(!gi||t==="sp")&&za(t,(...r)=>e(...r),n),mb=kn("bm"),Kp=kn("m"),pb=kn("bu"),gb=kn("u"),Wp=kn("bum"),Gp=kn("um"),yb=kn("sp"),vb=kn("rtg"),bb=kn("rtc");function wb(t,e=Xe){za("ec",t,e)}function Nf(t,e){const n=ft;if(n===null)return t;const r=Wa(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=ke]=e[i];oe(o)&&(o={mounted:o,updated:o}),o.deep&&yr(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function lr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(As(),Dt(l,n,8,[t.el,a,t,e]),Cs())}}const Yp="components";function J(t,e){return Eb(Yp,t,!0,e)||t}const _b=Symbol();function Eb(t,e,n=!0,r=!1){const s=ft||Xe;if(s){const i=s.type;if(t===Yp){const a=Zb(i,!1);if(a&&(a===e||a===on(e)||a===Va(on(e))))return i}const o=Rf(s[t]||i[t],e)||Rf(s.appContext[t],e);return!o&&r?i:o}}function Rf(t,e){return t&&(t[e]||t[on(e)]||t[Va(on(e))])}function ji(t,e,n,r){let s;const i=n&&n[r];if(te(t)||Je(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Pe(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function Ib(t,e,n={},r,s){if(ft.isCE||ft.parent&&Js(ft.parent)&&ft.parent.isCE)return D("slot",e==="default"?null:{name:e},r&&r());let i=t[e];i&&i._c&&(i._d=!1),F();const o=i&&Qp(i(n)),a=St(Qe,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Qp(t){return t.some(e=>ia(e)?!(e.type===Ot||e.type===Qe&&!Qp(e.children)):!0)?t:null}const _c=t=>t?ag(t)?Wa(t)||t.proxy:_c(t.parent):null,ra=it(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>_c(t.parent),$root:t=>_c(t.root),$emit:t=>t.emit,$options:t=>Pu(t),$forceUpdate:t=>t.f||(t.f=()=>Ou(t.update)),$nextTick:t=>t.n||(t.n=Mp.bind(t.proxy)),$watch:t=>lb.bind(t)}),Tb={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==ke&&de(r,e))return o[e]=1,r[e];if(s!==ke&&de(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&de(c,e))return o[e]=3,i[e];if(n!==ke&&de(n,e))return o[e]=4,n[e];Ec&&(o[e]=0)}}const u=ra[e];let h,f;if(u)return e==="$attrs"&&xt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ke&&de(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,de(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==ke&&de(s,e)?(s[e]=n,!0):r!==ke&&de(r,e)?(r[e]=n,!0):de(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ke&&de(t,o)||e!==ke&&de(e,o)||(a=i[0])&&de(a,o)||de(r,o)||de(ra,o)||de(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:de(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ec=!0;function kb(t){const e=Pu(t),n=t.proxy,r=t.ctx;Ec=!1,e.beforeCreate&&Df(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:m,updated:g,activated:v,deactivated:T,beforeDestroy:y,beforeUnmount:_,destroyed:O,unmounted:U,render:X,renderTracked:fe,renderTriggered:me,errorCaptured:ee,serverPrefetch:ae,expose:ye,inheritAttrs:qe,components:B,directives:Re,filters:et}=e;if(c&&xb(c,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Se in o){const Ee=o[Se];oe(Ee)&&(r[Se]=Ee.bind(n))}if(s){const Se=s.call(n,n);Pe(Se)&&(t.data=Ui(Se))}if(Ec=!0,i)for(const Se in i){const Ee=i[Se],Mt=oe(Ee)?Ee.bind(n,n):oe(Ee.get)?Ee.get.bind(n,n):Ht,ar=!oe(Ee)&&oe(Ee.set)?Ee.set.bind(n):Ht,Lt=$e({get:Mt,set:ar});Object.defineProperty(r,Se,{enumerable:!0,configurable:!0,get:()=>Lt.value,set:wt=>Lt.value=wt})}if(a)for(const Se in a)Xp(a[Se],r,n,Se);if(l){const Se=oe(l)?l.call(n):l;Reflect.ownKeys(Se).forEach(Ee=>{Bo(Ee,Se[Ee])})}u&&Df(u,t,"c");function Le(Se,Ee){te(Ee)?Ee.forEach(Mt=>Se(Mt.bind(n))):Ee&&Se(Ee.bind(n))}if(Le(mb,h),Le(Kp,f),Le(pb,m),Le(gb,g),Le(hb,v),Le(fb,T),Le(wb,ee),Le(bb,fe),Le(vb,me),Le(Wp,_),Le(Gp,U),Le(yb,ae),te(ye))if(ye.length){const Se=t.exposed||(t.exposed={});ye.forEach(Ee=>{Object.defineProperty(Se,Ee,{get:()=>n[Ee],set:Mt=>n[Ee]=Mt})})}else t.exposed||(t.exposed={});X&&t.render===Ht&&(t.render=X),qe!=null&&(t.inheritAttrs=qe),B&&(t.components=B),Re&&(t.directives=Re)}function xb(t,e,n=Ht,r=!1){te(t)&&(t=Ic(t));for(const s in t){const i=t[s];let o;Pe(i)?"default"in i?o=Hn(i.from||s,i.default,!0):o=Hn(i.from||s):o=Hn(i),ht(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Df(t,e,n){Dt(te(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Xp(t,e,n,r){const s=r.includes(".")?Bp(n,r):()=>n[r];if(Je(t)){const i=e[t];oe(i)&&Xs(s,i)}else if(oe(t))Xs(s,t.bind(n));else if(Pe(t))if(te(t))t.forEach(i=>Xp(i,e,n,r));else{const i=oe(t.handler)?t.handler.bind(n):e[t.handler];oe(i)&&Xs(s,i,t)}}function Pu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>sa(l,c,o,!0)),sa(l,e,o)),Pe(e)&&i.set(e,l),l}function sa(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&sa(t,i,n,!0),s&&s.forEach(o=>sa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Sb[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Sb={data:Of,props:fr,emits:fr,methods:fr,computed:fr,beforeCreate:yt,created:yt,beforeMount:yt,mounted:yt,beforeUpdate:yt,updated:yt,beforeDestroy:yt,beforeUnmount:yt,destroyed:yt,unmounted:yt,activated:yt,deactivated:yt,errorCaptured:yt,serverPrefetch:yt,components:fr,directives:fr,watch:Cb,provide:Of,inject:Ab};function Of(t,e){return e?t?function(){return it(oe(t)?t.call(this,this):t,oe(e)?e.call(this,this):e)}:e:t}function Ab(t,e){return fr(Ic(t),Ic(e))}function Ic(t){if(te(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function yt(t,e){return t?[...new Set([].concat(t,e))]:e}function fr(t,e){return t?it(it(Object.create(null),t),e):e}function Cb(t,e){if(!t)return e;if(!e)return t;const n=it(Object.create(null),t);for(const r in e)n[r]=yt(t[r],e[r]);return n}function Nb(t,e,n,r=!1){const s={},i={};Zo(i,Ka,1),t.propsDefaults=Object.create(null),Jp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:B1(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Rb(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=be(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(ja(t.emitsOptions,f))continue;const m=e[f];if(l)if(de(i,f))m!==i[f]&&(i[f]=m,c=!0);else{const g=on(f);s[g]=Tc(l,a,g,m,t,!1)}else m!==i[f]&&(i[f]=m,c=!0)}}}else{Jp(t,e,s,i)&&(c=!0);let u;for(const h in a)(!e||!de(e,h)&&((u=Ss(h))===h||!de(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Tc(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!de(e,h)&&!0)&&(delete i[h],c=!0)}c&&pn(t,"set","$attrs")}function Jp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Vo(l))continue;const c=e[l];let u;s&&de(s,u=on(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:ja(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=be(n),c=a||ke;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Tc(s,l,h,c[h],t,!de(c,h))}}return o}function Tc(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=de(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&oe(l)){const{propsDefaults:c}=s;n in c?r=c[n]:(cs(s),r=c[n]=l.call(null,e),Tr())}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Ss(n))&&(r=!0))}return r}function Zp(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!oe(t)){const u=h=>{l=!0;const[f,m]=Zp(h,e,!0);it(o,f),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return Pe(t)&&r.set(t,Xr),Xr;if(te(i))for(let u=0;u<i.length;u++){const h=on(i[u]);Pf(h)&&(o[h]=ke)}else if(i)for(const u in i){const h=on(u);if(Pf(h)){const f=i[u],m=o[h]=te(f)||oe(f)?{type:f}:f;if(m){const g=Ff(Boolean,m.type),v=Ff(String,m.type);m[0]=g>-1,m[1]=v<0||g<v,(g>-1||de(m,"default"))&&a.push(h)}}}const c=[o,a];return Pe(t)&&r.set(t,c),c}function Pf(t){return t[0]!=="$"}function Mf(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Lf(t,e){return Mf(t)===Mf(e)}function Ff(t,e){return te(e)?e.findIndex(n=>Lf(n,t)):oe(e)&&Lf(e,t)?0:-1}const eg=t=>t[0]==="_"||t==="$stable",Mu=t=>te(t)?t.map(Jt):[Jt(t)],Db=(t,e,n)=>{if(e._n)return e;const r=zt((...s)=>Mu(e(...s)),n);return r._c=!1,r},tg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(eg(s))continue;const i=t[s];if(oe(i))e[s]=Db(s,i,r);else if(i!=null){const o=Mu(i);e[s]=()=>o}}},ng=(t,e)=>{const n=Mu(e);t.slots.default=()=>n},Ob=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=be(e),Zo(e,"_",n)):tg(e,t.slots={})}else t.slots={},e&&ng(t,e);Zo(t.slots,Ka,1)},Pb=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ke;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(it(s,e),!n&&a===1&&delete s._):(i=!e.$stable,tg(e,s)),o=e}else e&&(ng(t,e),o={default:1});if(i)for(const a in s)!eg(a)&&!(a in o)&&delete s[a]};function rg(){return{app:null,config:{isNativeTag:a1,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Mb=0;function Lb(t,e){return function(r,s=null){oe(r)||(r=Object.assign({},r)),s!=null&&!Pe(s)&&(s=null);const i=rg(),o=new Set;let a=!1;const l=i.app={_uid:Mb++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:tw,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&oe(c.install)?(o.add(c),c.install(l,...u)):oe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const f=D(r,s);return f.appContext=i,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Wa(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l}};return l}}function kc(t,e,n,r,s=!1){if(te(t)){t.forEach((f,m)=>kc(f,e&&(te(e)?e[m]:e),n,r,s));return}if(Js(r)&&!s)return;const i=r.shapeFlag&4?Wa(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ke?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Je(c)?(u[c]=null,de(h,c)&&(h[c]=null)):ht(c)&&(c.value=null)),oe(l))jn(l,a,12,[o,u]);else{const f=Je(l),m=ht(l);if(f||m){const g=()=>{if(t.f){const v=f?de(h,l)?h[l]:u[l]:l.value;s?te(v)&&Eu(v,i):te(v)?v.includes(i)||v.push(i):f?(u[l]=[i],de(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,de(h,l)&&(h[l]=o)):m&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Et(g,n)):g()}}}const Et=ab;function Fb(t){return $b(t)}function $b(t,e){const n=d1();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:m=Ht,insertStaticContent:g}=t,v=(d,p,w,E=null,x=null,N=null,L=!1,C=null,R=!!p.dynamicChildren)=>{if(d===p)return;d&&!pr(d,p)&&(E=M(d),wt(d,x,N,!0),d=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:S,ref:Y,shapeFlag:j}=p;switch(S){case Lu:T(d,p,w,E);break;case Ot:y(d,p,w,E);break;case Vl:d==null&&_(p,w,E,L);break;case Qe:B(d,p,w,E,x,N,L,C,R);break;default:j&1?X(d,p,w,E,x,N,L,C,R):j&6?Re(d,p,w,E,x,N,L,C,R):(j&64||j&128)&&S.process(d,p,w,E,x,N,L,C,R,ge)}Y!=null&&x&&kc(Y,d&&d.ref,N,p||d,!p)},T=(d,p,w,E)=>{if(d==null)r(p.el=a(p.children),w,E);else{const x=p.el=d.el;p.children!==d.children&&c(x,p.children)}},y=(d,p,w,E)=>{d==null?r(p.el=l(p.children||""),w,E):p.el=d.el},_=(d,p,w,E)=>{[d.el,d.anchor]=g(d.children,p,w,E,d.el,d.anchor)},O=({el:d,anchor:p},w,E)=>{let x;for(;d&&d!==p;)x=f(d),r(d,w,E),d=x;r(p,w,E)},U=({el:d,anchor:p})=>{let w;for(;d&&d!==p;)w=f(d),s(d),d=w;s(p)},X=(d,p,w,E,x,N,L,C,R)=>{L=L||p.type==="svg",d==null?fe(p,w,E,x,N,L,C,R):ae(d,p,x,N,L,C,R)},fe=(d,p,w,E,x,N,L,C)=>{let R,S;const{type:Y,props:j,shapeFlag:Q,transition:re,dirs:ue}=d;if(R=d.el=o(d.type,N,j&&j.is,j),Q&8?u(R,d.children):Q&16&&ee(d.children,R,null,E,x,N&&Y!=="foreignObject",L,C),ue&&lr(d,null,E,"created"),j){for(const Ie in j)Ie!=="value"&&!Vo(Ie)&&i(R,Ie,null,j[Ie],N,d.children,E,x,$);"value"in j&&i(R,"value",null,j.value),(S=j.onVnodeBeforeMount)&&Qt(S,E,d)}me(R,d,d.scopeId,L,E),ue&&lr(d,null,E,"beforeMount");const Ae=(!x||x&&!x.pendingBranch)&&re&&!re.persisted;Ae&&re.beforeEnter(R),r(R,p,w),((S=j&&j.onVnodeMounted)||Ae||ue)&&Et(()=>{S&&Qt(S,E,d),Ae&&re.enter(R),ue&&lr(d,null,E,"mounted")},x)},me=(d,p,w,E,x)=>{if(w&&m(d,w),E)for(let N=0;N<E.length;N++)m(d,E[N]);if(x){let N=x.subTree;if(p===N){const L=x.vnode;me(d,L,L.scopeId,L.slotScopeIds,x.parent)}}},ee=(d,p,w,E,x,N,L,C,R=0)=>{for(let S=R;S<d.length;S++){const Y=d[S]=C?Mn(d[S]):Jt(d[S]);v(null,Y,p,w,E,x,N,L,C)}},ae=(d,p,w,E,x,N,L)=>{const C=p.el=d.el;let{patchFlag:R,dynamicChildren:S,dirs:Y}=p;R|=d.patchFlag&16;const j=d.props||ke,Q=p.props||ke;let re;w&&cr(w,!1),(re=Q.onVnodeBeforeUpdate)&&Qt(re,w,p,d),Y&&lr(p,d,w,"beforeUpdate"),w&&cr(w,!0);const ue=x&&p.type!=="foreignObject";if(S?ye(d.dynamicChildren,S,C,w,E,ue,N):L||Ee(d,p,C,null,w,E,ue,N,!1),R>0){if(R&16)qe(C,p,j,Q,w,E,x);else if(R&2&&j.class!==Q.class&&i(C,"class",null,Q.class,x),R&4&&i(C,"style",j.style,Q.style,x),R&8){const Ae=p.dynamicProps;for(let Ie=0;Ie<Ae.length;Ie++){const Be=Ae[Ie],Ft=j[Be],Br=Q[Be];(Br!==Ft||Be==="value")&&i(C,Be,Ft,Br,x,d.children,w,E,$)}}R&1&&d.children!==p.children&&u(C,p.children)}else!L&&S==null&&qe(C,p,j,Q,w,E,x);((re=Q.onVnodeUpdated)||Y)&&Et(()=>{re&&Qt(re,w,p,d),Y&&lr(p,d,w,"updated")},E)},ye=(d,p,w,E,x,N,L)=>{for(let C=0;C<p.length;C++){const R=d[C],S=p[C],Y=R.el&&(R.type===Qe||!pr(R,S)||R.shapeFlag&70)?h(R.el):w;v(R,S,Y,null,E,x,N,L,!0)}},qe=(d,p,w,E,x,N,L)=>{if(w!==E){if(w!==ke)for(const C in w)!Vo(C)&&!(C in E)&&i(d,C,w[C],null,L,p.children,x,N,$);for(const C in E){if(Vo(C))continue;const R=E[C],S=w[C];R!==S&&C!=="value"&&i(d,C,S,R,L,p.children,x,N,$)}"value"in E&&i(d,"value",w.value,E.value)}},B=(d,p,w,E,x,N,L,C,R)=>{const S=p.el=d?d.el:a(""),Y=p.anchor=d?d.anchor:a("");let{patchFlag:j,dynamicChildren:Q,slotScopeIds:re}=p;re&&(C=C?C.concat(re):re),d==null?(r(S,w,E),r(Y,w,E),ee(p.children,w,Y,x,N,L,C,R)):j>0&&j&64&&Q&&d.dynamicChildren?(ye(d.dynamicChildren,Q,w,x,N,L,C),(p.key!=null||x&&p===x.subTree)&&sg(d,p,!0)):Ee(d,p,w,Y,x,N,L,C,R)},Re=(d,p,w,E,x,N,L,C,R)=>{p.slotScopeIds=C,d==null?p.shapeFlag&512?x.ctx.activate(p,w,E,L,R):et(p,w,E,x,N,L,R):An(d,p,R)},et=(d,p,w,E,x,N,L)=>{const C=d.component=Wb(d,E,x);if(qa(d)&&(C.ctx.renderer=ge),Yb(C),C.asyncDep){if(x&&x.registerDep(C,Le),!d.el){const R=C.subTree=D(Ot);y(null,R,p,w)}return}Le(C,d,p,w,x,N,L)},An=(d,p,w)=>{const E=p.component=d.component;if(sb(d,p,w))if(E.asyncDep&&!E.asyncResolved){Se(E,p,w);return}else E.next=p,Q1(E.update),E.update();else p.el=d.el,E.vnode=p},Le=(d,p,w,E,x,N,L)=>{const C=()=>{if(d.isMounted){let{next:Y,bu:j,u:Q,parent:re,vnode:ue}=d,Ae=Y,Ie;cr(d,!1),Y?(Y.el=ue.el,Se(d,Y,L)):Y=ue,j&&Uo(j),(Ie=Y.props&&Y.props.onVnodeBeforeUpdate)&&Qt(Ie,re,Y,ue),cr(d,!0);const Be=Fl(d),Ft=d.subTree;d.subTree=Be,v(Ft,Be,h(Ft.el),M(Ft),d,x,N),Y.el=Be.el,Ae===null&&ib(d,Be.el),Q&&Et(Q,x),(Ie=Y.props&&Y.props.onVnodeUpdated)&&Et(()=>Qt(Ie,re,Y,ue),x)}else{let Y;const{el:j,props:Q}=p,{bm:re,m:ue,parent:Ae}=d,Ie=Js(p);if(cr(d,!1),re&&Uo(re),!Ie&&(Y=Q&&Q.onVnodeBeforeMount)&&Qt(Y,Ae,p),cr(d,!0),j&&le){const Be=()=>{d.subTree=Fl(d),le(j,d.subTree,d,x,null)};Ie?p.type.__asyncLoader().then(()=>!d.isUnmounted&&Be()):Be()}else{const Be=d.subTree=Fl(d);v(null,Be,w,E,d,x,N),p.el=Be.el}if(ue&&Et(ue,x),!Ie&&(Y=Q&&Q.onVnodeMounted)){const Be=p;Et(()=>Qt(Y,Ae,Be),x)}(p.shapeFlag&256||Ae&&Js(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&d.a&&Et(d.a,x),d.isMounted=!0,p=w=E=null}},R=d.effect=new xu(C,()=>Ou(S),d.scope),S=d.update=()=>R.run();S.id=d.uid,cr(d,!0),S()},Se=(d,p,w)=>{p.component=d;const E=d.vnode.props;d.vnode=p,d.next=null,Rb(d,p.props,E,w),Pb(d,p.children,w),As(),xf(),Cs()},Ee=(d,p,w,E,x,N,L,C,R=!1)=>{const S=d&&d.children,Y=d?d.shapeFlag:0,j=p.children,{patchFlag:Q,shapeFlag:re}=p;if(Q>0){if(Q&128){ar(S,j,w,E,x,N,L,C,R);return}else if(Q&256){Mt(S,j,w,E,x,N,L,C,R);return}}re&8?(Y&16&&$(S,x,N),j!==S&&u(w,j)):Y&16?re&16?ar(S,j,w,E,x,N,L,C,R):$(S,x,N,!0):(Y&8&&u(w,""),re&16&&ee(j,w,E,x,N,L,C,R))},Mt=(d,p,w,E,x,N,L,C,R)=>{d=d||Xr,p=p||Xr;const S=d.length,Y=p.length,j=Math.min(S,Y);let Q;for(Q=0;Q<j;Q++){const re=p[Q]=R?Mn(p[Q]):Jt(p[Q]);v(d[Q],re,w,null,x,N,L,C,R)}S>Y?$(d,x,N,!0,!1,j):ee(p,w,E,x,N,L,C,R,j)},ar=(d,p,w,E,x,N,L,C,R)=>{let S=0;const Y=p.length;let j=d.length-1,Q=Y-1;for(;S<=j&&S<=Q;){const re=d[S],ue=p[S]=R?Mn(p[S]):Jt(p[S]);if(pr(re,ue))v(re,ue,w,null,x,N,L,C,R);else break;S++}for(;S<=j&&S<=Q;){const re=d[j],ue=p[Q]=R?Mn(p[Q]):Jt(p[Q]);if(pr(re,ue))v(re,ue,w,null,x,N,L,C,R);else break;j--,Q--}if(S>j){if(S<=Q){const re=Q+1,ue=re<Y?p[re].el:E;for(;S<=Q;)v(null,p[S]=R?Mn(p[S]):Jt(p[S]),w,ue,x,N,L,C,R),S++}}else if(S>Q)for(;S<=j;)wt(d[S],x,N,!0),S++;else{const re=S,ue=S,Ae=new Map;for(S=ue;S<=Q;S++){const kt=p[S]=R?Mn(p[S]):Jt(p[S]);kt.key!=null&&Ae.set(kt.key,S)}let Ie,Be=0;const Ft=Q-ue+1;let Br=!1,pf=0;const Vs=new Array(Ft);for(S=0;S<Ft;S++)Vs[S]=0;for(S=re;S<=j;S++){const kt=d[S];if(Be>=Ft){wt(kt,x,N,!0);continue}let Yt;if(kt.key!=null)Yt=Ae.get(kt.key);else for(Ie=ue;Ie<=Q;Ie++)if(Vs[Ie-ue]===0&&pr(kt,p[Ie])){Yt=Ie;break}Yt===void 0?wt(kt,x,N,!0):(Vs[Yt-ue]=S+1,Yt>=pf?pf=Yt:Br=!0,v(kt,p[Yt],w,null,x,N,L,C,R),Be++)}const gf=Br?Vb(Vs):Xr;for(Ie=gf.length-1,S=Ft-1;S>=0;S--){const kt=ue+S,Yt=p[kt],yf=kt+1<Y?p[kt+1].el:E;Vs[S]===0?v(null,Yt,w,yf,x,N,L,C,R):Br&&(Ie<0||S!==gf[Ie]?Lt(Yt,w,yf,2):Ie--)}}},Lt=(d,p,w,E,x=null)=>{const{el:N,type:L,transition:C,children:R,shapeFlag:S}=d;if(S&6){Lt(d.component.subTree,p,w,E);return}if(S&128){d.suspense.move(p,w,E);return}if(S&64){L.move(d,p,w,ge);return}if(L===Qe){r(N,p,w);for(let j=0;j<R.length;j++)Lt(R[j],p,w,E);r(d.anchor,p,w);return}if(L===Vl){O(d,p,w);return}if(E!==2&&S&1&&C)if(E===0)C.beforeEnter(N),r(N,p,w),Et(()=>C.enter(N),x);else{const{leave:j,delayLeave:Q,afterLeave:re}=C,ue=()=>r(N,p,w),Ae=()=>{j(N,()=>{ue(),re&&re()})};Q?Q(N,ue,Ae):Ae()}else r(N,p,w)},wt=(d,p,w,E=!1,x=!1)=>{const{type:N,props:L,ref:C,children:R,dynamicChildren:S,shapeFlag:Y,patchFlag:j,dirs:Q}=d;if(C!=null&&kc(C,null,w,d,!0),Y&256){p.ctx.deactivate(d);return}const re=Y&1&&Q,ue=!Js(d);let Ae;if(ue&&(Ae=L&&L.onVnodeBeforeUnmount)&&Qt(Ae,p,d),Y&6)k(d.component,w,E);else{if(Y&128){d.suspense.unmount(w,E);return}re&&lr(d,null,p,"beforeUnmount"),Y&64?d.type.remove(d,p,w,x,ge,E):S&&(N!==Qe||j>0&&j&64)?$(S,p,w,!1,!0):(N===Qe&&j&384||!x&&Y&16)&&$(R,p,w),E&&Ur(d)}(ue&&(Ae=L&&L.onVnodeUnmounted)||re)&&Et(()=>{Ae&&Qt(Ae,p,d),re&&lr(d,null,p,"unmounted")},w)},Ur=d=>{const{type:p,el:w,anchor:E,transition:x}=d;if(p===Qe){yo(w,E);return}if(p===Vl){U(d);return}const N=()=>{s(w),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(d.shapeFlag&1&&x&&!x.persisted){const{leave:L,delayLeave:C}=x,R=()=>L(w,N);C?C(d.el,N,R):R()}else N()},yo=(d,p)=>{let w;for(;d!==p;)w=f(d),s(d),d=w;s(p)},k=(d,p,w)=>{const{bum:E,scope:x,update:N,subTree:L,um:C}=d;E&&Uo(E),x.stop(),N&&(N.active=!1,wt(L,d,p,w)),C&&Et(C,p),Et(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},$=(d,p,w,E=!1,x=!1,N=0)=>{for(let L=N;L<d.length;L++)wt(d[L],p,w,E,x)},M=d=>d.shapeFlag&6?M(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),G=(d,p,w)=>{d==null?p._vnode&&wt(p._vnode,null,null,!0):v(p._vnode||null,d,p,null,null,null,w),xf(),Fp(),p._vnode=d},ge={p:v,um:wt,m:Lt,r:Ur,mt:et,mc:ee,pc:Ee,pbc:ye,n:M,o:t};let Fe,le;return e&&([Fe,le]=e(ge)),{render:G,hydrate:Fe,createApp:Lb(G,Fe)}}function cr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function sg(t,e,n=!1){const r=t.children,s=e.children;if(te(r)&&te(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Mn(s[i]),a.el=o.el),n||sg(o,a))}}function Vb(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Ub=t=>t.__isTeleport,Qe=Symbol(void 0),Lu=Symbol(void 0),Ot=Symbol(void 0),Vl=Symbol(void 0),Zs=[];let Ut=null;function F(t=!1){Zs.push(Ut=t?null:[])}function Bb(){Zs.pop(),Ut=Zs[Zs.length-1]||null}let pi=1;function $f(t){pi+=t}function ig(t){return t.dynamicChildren=pi>0?Ut||Xr:null,Bb(),pi>0&&Ut&&Ut.push(t),t}function z(t,e,n,r,s,i){return ig(b(t,e,n,r,s,i,!0))}function St(t,e,n,r,s){return ig(D(t,e,n,r,s,!0))}function ia(t){return t?t.__v_isVNode===!0:!1}function pr(t,e){return t.type===e.type&&t.key===e.key}const Ka="__vInternal",og=({key:t})=>t!=null?t:null,jo=({ref:t,ref_key:e,ref_for:n})=>t!=null?Je(t)||ht(t)||oe(t)?{i:ft,r:t,k:e,f:!!n}:t:null;function b(t,e=null,n=null,r=0,s=null,i=t===Qe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&og(e),ref:e&&jo(e),scopeId:Ha,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(Fu(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Je(n)?8:16),pi>0&&!o&&Ut&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ut.push(l),l}const D=jb;function jb(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===_b)&&(t=Ot),ia(t)){const a=Yn(t,e,!0);return n&&Fu(a,n),pi>0&&!i&&Ut&&(a.shapeFlag&6?Ut[Ut.indexOf(t)]=a:Ut.push(a)),a.patchFlag|=-2,a}if(ew(t)&&(t=t.__vccOpts),e){e=Hb(e);let{class:a,style:l}=e;a&&!Je(a)&&(e.class=rt(a)),Pe(l)&&(Sp(l)&&!te(l)&&(l=it({},l)),e.style=wu(l))}const o=Je(t)?1:ob(t)?128:Ub(t)?64:Pe(t)?4:oe(t)?2:0;return b(t,e,n,r,s,o,i,!0)}function Hb(t){return t?Sp(t)||Ka in t?it({},t):t:null}function Yn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?qb(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&og(a),ref:e&&e.ref?n&&s?te(s)?s.concat(jo(e)):[s,jo(e)]:jo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Qe?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Yn(t.ssContent),ssFallback:t.ssFallback&&Yn(t.ssFallback),el:t.el,anchor:t.anchor}}function Gt(t=" ",e=0){return D(Lu,null,t,e)}function Ct(t="",e=!1){return e?(F(),St(Ot,null,t)):D(Ot,null,t)}function Jt(t){return t==null||typeof t=="boolean"?D(Ot):te(t)?D(Qe,null,t.slice()):typeof t=="object"?Mn(t):D(Lu,null,String(t))}function Mn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Yn(t)}function Fu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(te(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Fu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Ka in e)?e._ctx=ft:s===3&&ft&&(ft.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else oe(e)?(e={default:e,_ctx:ft},n=32):(e=String(e),r&64?(n=16,e=[Gt(e)]):n=8);t.children=e,t.shapeFlag|=n}function qb(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=rt([e.class,r.class]));else if(s==="style")e.style=wu([e.style,r.style]);else if(La(s)){const i=e[s],o=r[s];o&&i!==o&&!(te(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Qt(t,e,n,r=null){Dt(t,e,7,[n,r])}const zb=rg();let Kb=0;function Wb(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||zb,i={uid:Kb++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new m1(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zp(r,s),emitsOptions:Vp(r,s),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:r.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Z1.bind(null,i),t.ce&&t.ce(i),i}let Xe=null;const Gb=()=>Xe||ft,cs=t=>{Xe=t,t.scope.on()},Tr=()=>{Xe&&Xe.scope.off(),Xe=null};function ag(t){return t.vnode.shapeFlag&4}let gi=!1;function Yb(t,e=!1){gi=e;const{props:n,children:r}=t.vnode,s=ag(t);Nb(t,n,s,e),Ob(t,r);const i=s?Qb(t,e):void 0;return gi=!1,i}function Qb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ap(new Proxy(t.ctx,Tb));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Jb(t):null;cs(t),As();const i=jn(r,t,0,[t.props,s]);if(Cs(),Tr(),dp(i)){if(i.then(Tr,Tr),e)return i.then(o=>{Vf(t,o,e)}).catch(o=>{Ba(o,t,0)});t.asyncDep=i}else Vf(t,i,e)}else lg(t,e)}function Vf(t,e,n){oe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Pe(e)&&(t.setupState=Dp(e)),lg(t,n)}let Uf;function lg(t,e,n){const r=t.type;if(!t.render){if(!e&&Uf&&!r.render){const s=r.template||Pu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=it(it({isCustomElement:i,delimiters:a},o),l);r.render=Uf(s,c)}}t.render=r.render||Ht}cs(t),As(),kb(t),Cs(),Tr()}function Xb(t){return new Proxy(t.attrs,{get(e,n){return xt(t,"get","$attrs"),e[n]}})}function Jb(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Xb(t))},slots:t.slots,emit:t.emit,expose:e}}function Wa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Dp(Ap(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ra)return ra[n](t)}}))}function Zb(t,e=!0){return oe(t)?t.displayName||t.name:t.name||e&&t.__name}function ew(t){return oe(t)&&"__vccOpts"in t}const $e=(t,e)=>W1(t,e,gi);function Hi(t,e,n){const r=arguments.length;return r===2?Pe(e)&&!te(e)?ia(e)?D(t,null,[e]):D(t,e):D(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ia(n)&&(n=[n]),D(t,e,n))}const tw="3.2.41",nw="http://www.w3.org/2000/svg",gr=typeof document<"u"?document:null,Bf=gr&&gr.createElement("template"),rw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?gr.createElementNS(nw,t):gr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>gr.createTextNode(t),createComment:t=>gr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>gr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Bf.innerHTML=r?`<svg>${t}</svg>`:t;const a=Bf.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function sw(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function iw(t,e,n){const r=t.style,s=Je(n);if(n&&!s){for(const i in n)xc(r,i,n[i]);if(e&&!Je(e))for(const i in e)n[i]==null&&xc(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const jf=/\s*!important$/;function xc(t,e,n){if(te(n))n.forEach(r=>xc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=ow(t,e);jf.test(n)?t.setProperty(Ss(r),n.replace(jf,""),"important"):t[r]=n}}const Hf=["Webkit","Moz","ms"],Ul={};function ow(t,e){const n=Ul[e];if(n)return n;let r=on(e);if(r!=="filter"&&r in t)return Ul[e]=r;r=Va(r);for(let s=0;s<Hf.length;s++){const i=Hf[s]+r;if(i in t)return Ul[e]=i}return e}const qf="http://www.w3.org/1999/xlink";function aw(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(qf,e.slice(6,e.length)):t.setAttributeNS(qf,e,n);else{const i=r1(e);n==null||i&&!up(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function lw(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=up(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function qr(t,e,n,r){t.addEventListener(e,n,r)}function cw(t,e,n,r){t.removeEventListener(e,n,r)}function uw(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=hw(e);if(r){const c=i[e]=mw(r,s);qr(t,a,c,l)}else o&&(cw(t,a,o,l),i[e]=void 0)}}const zf=/(?:Once|Passive|Capture)$/;function hw(t){let e;if(zf.test(t)){e={};let r;for(;r=t.match(zf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ss(t.slice(2)),e]}let Bl=0;const fw=Promise.resolve(),dw=()=>Bl||(fw.then(()=>Bl=0),Bl=Date.now());function mw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Dt(pw(r,n.value),e,5,[r])};return n.value=t,n.attached=dw(),n}function pw(t,e){if(te(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Kf=/^on[a-z]/,gw=(t,e,n,r,s=!1,i,o,a,l)=>{e==="class"?sw(t,r,s):e==="style"?iw(t,n,r):La(e)?_u(e)||uw(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):yw(t,e,r,s))?lw(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),aw(t,e,r,s))};function yw(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Kf.test(e)&&oe(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Kf.test(e)&&Je(n)?!1:e in t}const Nn="transition",Us="animation",nr=(t,{slots:e})=>Hi(jp,vw(t),e);nr.displayName="Transition";const cg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};nr.props=it({},jp.props,cg);const ur=(t,e=[])=>{te(t)?t.forEach(n=>n(...e)):t&&t(...e)},Wf=t=>t?te(t)?t.some(e=>e.length>1):t.length>1:!1;function vw(t){const e={};for(const B in t)B in cg||(e[B]=t[B]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,g=bw(s),v=g&&g[0],T=g&&g[1],{onBeforeEnter:y,onEnter:_,onEnterCancelled:O,onLeave:U,onLeaveCancelled:X,onBeforeAppear:fe=y,onAppear:me=_,onAppearCancelled:ee=O}=e,ae=(B,Re,et)=>{hr(B,Re?u:a),hr(B,Re?c:o),et&&et()},ye=(B,Re)=>{B._isLeaving=!1,hr(B,h),hr(B,m),hr(B,f),Re&&Re()},qe=B=>(Re,et)=>{const An=B?me:_,Le=()=>ae(Re,B,et);ur(An,[Re,Le]),Gf(()=>{hr(Re,B?l:i),Rn(Re,B?u:a),Wf(An)||Yf(Re,r,v,Le)})};return it(e,{onBeforeEnter(B){ur(y,[B]),Rn(B,i),Rn(B,o)},onBeforeAppear(B){ur(fe,[B]),Rn(B,l),Rn(B,c)},onEnter:qe(!1),onAppear:qe(!0),onLeave(B,Re){B._isLeaving=!0;const et=()=>ye(B,Re);Rn(B,h),Ew(),Rn(B,f),Gf(()=>{!B._isLeaving||(hr(B,h),Rn(B,m),Wf(U)||Yf(B,r,T,et))}),ur(U,[B,et])},onEnterCancelled(B){ae(B,!1),ur(O,[B])},onAppearCancelled(B){ae(B,!0),ur(ee,[B])},onLeaveCancelled(B){ye(B),ur(X,[B])}})}function bw(t){if(t==null)return null;if(Pe(t))return[jl(t.enter),jl(t.leave)];{const e=jl(t);return[e,e]}}function jl(t){return ea(t)}function Rn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function hr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Gf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let ww=0;function Yf(t,e,n,r){const s=t._endId=++ww,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=_w(t,e);if(!o)return r();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,f),i()},f=m=>{m.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,f)}function _w(t,e){const n=window.getComputedStyle(t),r=g=>(n[g]||"").split(", "),s=r(Nn+"Delay"),i=r(Nn+"Duration"),o=Qf(s,i),a=r(Us+"Delay"),l=r(Us+"Duration"),c=Qf(a,l);let u=null,h=0,f=0;e===Nn?o>0&&(u=Nn,h=o,f=i.length):e===Us?c>0&&(u=Us,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?Nn:Us:null,f=u?u===Nn?i.length:l.length:0);const m=u===Nn&&/\b(transform|all)(,|$)/.test(n[Nn+"Property"]);return{type:u,timeout:h,propCount:f,hasTransform:m}}function Qf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Xf(n)+Xf(t[r])))}function Xf(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Ew(){return document.body.offsetHeight}const Jf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return te(e)?n=>Uo(e,n):e};function Iw(t){t.target.composing=!0}function Zf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ed={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Jf(s);const i=r||s.props&&s.props.type==="number";qr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=ea(a)),t._assign(a)}),n&&qr(t,"change",()=>{t.value=t.value.trim()}),e||(qr(t,"compositionstart",Iw),qr(t,"compositionend",Zf),qr(t,"change",Zf))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Jf(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&ea(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Tw=["ctrl","shift","alt","meta"],kw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Tw.some(n=>t[`${n}Key`]&&!e.includes(n))},Bt=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=kw[e[s]];if(i&&i(n,e))return}return t(n,...r)},xw=it({patchProp:gw},rw);let td;function Sw(){return td||(td=Fb(xw))}const Aw=(...t)=>{const e=Sw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Cw(r);if(!s)return;const i=e._component;!oe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Cw(t){return Je(t)?document.querySelector(t):t}const xe=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Nw={name:"NavigationBar",props:{isHide:{type:Boolean,default:!1}},methods:{logout(){this.$emit("logout")}}},Rw={key:0,class:"w-full py-1 px-5 bg-gradient-to-tl from-emerald-500 to-teal-500 rounded-b-lg flex justify-between relative"},Dw={class:"flex-1 flex gap-2 overflow-x-auto scrollbar-w"},Ow={class:"flex flex-col items-center group",title:"Home"},Pw=b("div",{class:"absolute -top-6 items-center group-hover:hidden hidden"},[b("span",{class:"z-10 p-2 bg-gray-700 text-xs leading-none text-white whitespace-nowrap shadow-lg rounded-sm"},"Home")],-1),Mw={class:"flex flex-col items-center group",title:"Ide"},Lw=b("div",{class:"absolute -top-6 flex-col items-center group-hover:hidden hidden"},[b("span",{class:"z-10 p-2 bg-gray-700 text-xs leading-none text-white whitespace-nowrap shadow-lg rounded-sm"},"Ide")],-1),Fw={class:"flex flex-col items-center group",title:"Komponen"},$w=b("div",{class:"absolute -top-6 flex-col items-center group-hover:hidden hidden"},[b("span",{class:"z-10 p-2 bg-gray-700 text-xs leading-none text-white whitespace-nowrap shadow-lg rounded-sm"},"Komponen")],-1),Vw={class:"flex flex-col items-center group",title:"Logout"},Uw=b("div",{class:"absolute -top-6 flex-col items-center group-hover:hidden hidden"},[b("span",{class:"z-10 p-2 bg-gray-700 text-xs leading-none text-white whitespace-nowrap shadow-lg rounded-sm"},"Logout")],-1);function Bw(t,e,n,r,s,i){const o=J("font-awesome-icon");return n.isHide?Ct("",!0):(F(),z("div",Rw,[b("div",Dw,[b("div",Ow,[D(o,{icon:"fa-solid fa-home",class:rt(["text-white w-5 h-5 cursor-pointer hover:bg-emerald-600 p-3 rounded-full transition duration-150 ease-in-out",{"text-emerald-900":t.$route.meta.module==="rencana"}]),onClick:e[0]||(e[0]=a=>t.$router.push({name:"rencana-view"}))},null,8,["class"]),Pw]),b("div",Mw,[D(o,{icon:"fa-solid fa-lightbulb",class:rt(["text-white w-5 h-5 cursor-pointer hover:bg-emerald-600 p-3 rounded-full transition duration-150 ease-in-out",{"text-emerald-900":t.$route.meta.module==="ide"}]),onClick:e[1]||(e[1]=a=>t.$router.push({name:"list-ide-view"}))},null,8,["class"]),Lw]),b("div",Fw,[D(o,{icon:"fa-solid fa-database",class:rt(["text-white w-5 h-5 cursor-pointer hover:bg-emerald-600 p-3 rounded-full transition duration-150 ease-in-out",{"text-emerald-900":t.$route.meta.module==="komponen"}]),onClick:e[2]||(e[2]=a=>t.$router.push({name:"komponen-grid-view"}))},null,8,["class"]),$w])]),b("div",Vw,[D(o,{icon:"fa-solid fa-sign-out",class:"text-white w-5 h-5 text-right cursor-pointer hover:bg-emerald-600 p-3 rounded-full transition duration-150 ease-in-out",onClick:i.logout},null,8,["onClick"]),Uw])]))}const jw=xe(Nw,[["render",Bw]]),Hw={name:"AlertDialog",props:{showing:{type:Boolean,required:!0},message:{type:String,required:!0}},methods:{close(){this.$emit("close")},yes(){this.$emit("yes")}}},qw={class:"relative w-8/12 max-w-2xl bg-white shadow-md rounded-lg p-5"},zw={class:"flex flex-col gap-3"},Kw={class:"text-center text-gray-800"},Ww={class:"flex justify-evenly"};function Gw(t,e,n,r,s,i){const o=J("font-awesome-icon");return n.showing?(F(),z("div",{key:0,class:"fixed inset-0 w-full h-screen flex items-center justify-center bg-semi-75",onClick:e[3]||(e[3]=Bt((...a)=>i.close&&i.close(...a),["self"]))},[b("div",qw,[b("button",{"aria-label":"close",class:"absolute top-2 right-2 text-gray-500 hover:bg-gray-200 p-1 rounded-full flex transition duration-150 ease-in-out",onClick:e[0]||(e[0]=Bt((...a)=>i.close&&i.close(...a),["prevent"]))},[D(o,{icon:"fa-solid fa-close",class:"w-3.5 h-3.5"})]),b("div",zw,[D(o,{icon:"fa-solid fa-warning",class:"w-10 h-10 text-center mx-auto text-gray-800"}),b("p",Kw,Te(n.message),1),b("div",Ww,[b("button",{class:"bg-red-500 w-20 rounded-md text-white font-semibold hover:bg-red-700 transition duration-150 ease-in-out",onClick:e[1]||(e[1]=Bt((...a)=>i.yes&&i.yes(...a),["prevent"]))}," Ya "),b("button",{class:"w-20 rounded-md border border-gray-300 text-gray-800 font-semibold hover:bg-gray-200 transition duration-150 ease-in-out",onClick:e[2]||(e[2]=Bt((...a)=>i.close&&i.close(...a),["prevent"]))}," Batal ")])])])])):Ct("",!0)}const ug=xe(Hw,[["render",Gw]]);/**
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
 */const hg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Yw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},fg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(f=64)),r.push(n[u],n[h],n[f],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Yw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw Error();const f=i<<2|a>>4;if(r.push(f),c!==64){const m=a<<4&240|c>>2;if(r.push(m),h!==64){const g=c<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Qw=function(t){const e=hg(t);return fg.encodeByteArray(e,!0)},oa=function(t){return Qw(t).replace(/\./g,"")},dg=function(t){try{return fg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function Jw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Zw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function e_(){const t=pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function t_(){return typeof indexedDB=="object"}function n_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function r_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const s_=()=>r_().__FIREBASE_DEFAULTS__,i_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},o_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&dg(t[1]);return e&&JSON.parse(e)},$u=()=>{try{return s_()||i_()||o_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},mg=t=>{var e,n;return(n=(e=$u())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},a_=t=>{const e=mg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},l_=()=>{var t;return(t=$u())===null||t===void 0?void 0:t.config},pg=t=>{var e;return(e=$u())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class c_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function u_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[oa(JSON.stringify(n)),oa(JSON.stringify(o)),a].join(".")}/**
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
 */const h_="FirebaseError";class xn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=h_,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qi.prototype.create)}}class qi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?f_(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new xn(s,a,r)}}function f_(t,e){return t.replace(d_,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const d_=/\{\$([^}]+)}/g;function m_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function aa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(nd(i)&&nd(o)){if(!aa(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function nd(t){return t!==null&&typeof t=="object"}/**
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
 */function zi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function qs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function zs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function p_(t,e){const n=new g_(t,e);return n.subscribe.bind(n)}class g_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");y_(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Hl),s.error===void 0&&(s.error=Hl),s.complete===void 0&&(s.complete=Hl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function y_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Hl(){}/**
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
 */function ot(t){return t&&t._delegate?t._delegate:t}class Ar{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const dr="[DEFAULT]";/**
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
 */class v_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new c_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(w_(e))try{this.getOrInitializeService({instanceIdentifier:dr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=dr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=dr){return this.instances.has(e)}getOptions(e=dr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:b_(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=dr){return this.component?this.component.multipleInstances?e:dr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function b_(t){return t===dr?void 0:t}function w_(t){return t.instantiationMode==="EAGER"}/**
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
 */class __{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new v_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const E_={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},I_=ve.INFO,T_={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},k_=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=T_[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vu{constructor(e){this.name=e,this._logLevel=I_,this._logHandler=k_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?E_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const x_=(t,e)=>e.some(n=>t instanceof n);let rd,sd;function S_(){return rd||(rd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function A_(){return sd||(sd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gg=new WeakMap,Sc=new WeakMap,yg=new WeakMap,ql=new WeakMap,Uu=new WeakMap;function C_(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(qn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&gg.set(n,t)}).catch(()=>{}),Uu.set(e,t),e}function N_(t){if(Sc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Sc.set(t,e)}let Ac={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||yg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function R_(t){Ac=t(Ac)}function D_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(zl(this),e,...n);return yg.set(r,e.sort?e.sort():[e]),qn(r)}:A_().includes(t)?function(...e){return t.apply(zl(this),e),qn(gg.get(this))}:function(...e){return qn(t.apply(zl(this),e))}}function O_(t){return typeof t=="function"?D_(t):(t instanceof IDBTransaction&&N_(t),x_(t,S_())?new Proxy(t,Ac):t)}function qn(t){if(t instanceof IDBRequest)return C_(t);if(ql.has(t))return ql.get(t);const e=O_(t);return e!==t&&(ql.set(t,e),Uu.set(e,t)),e}const zl=t=>Uu.get(t);function P_(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=qn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(qn(o.result),l.oldVersion,l.newVersion,qn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const M_=["get","getKey","getAll","getAllKeys","count"],L_=["put","add","delete","clear"],Kl=new Map;function id(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Kl.get(e))return Kl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=L_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||M_.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Kl.set(e,i),i}R_(t=>({...t,get:(e,n,r)=>id(e,n)||t.get(e,n,r),has:(e,n)=>!!id(e,n)||t.has(e,n)}));/**
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
 */class F_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cc="@firebase/app",od="0.8.3";/**
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
 */const Cr=new Vu("@firebase/app"),V_="@firebase/app-compat",U_="@firebase/analytics-compat",B_="@firebase/analytics",j_="@firebase/app-check-compat",H_="@firebase/app-check",q_="@firebase/auth",z_="@firebase/auth-compat",K_="@firebase/database",W_="@firebase/database-compat",G_="@firebase/functions",Y_="@firebase/functions-compat",Q_="@firebase/installations",X_="@firebase/installations-compat",J_="@firebase/messaging",Z_="@firebase/messaging-compat",eE="@firebase/performance",tE="@firebase/performance-compat",nE="@firebase/remote-config",rE="@firebase/remote-config-compat",sE="@firebase/storage",iE="@firebase/storage-compat",oE="@firebase/firestore",aE="@firebase/firestore-compat",lE="firebase",cE="9.13.0";/**
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
 */const Nc="[DEFAULT]",uE={[Cc]:"fire-core",[V_]:"fire-core-compat",[B_]:"fire-analytics",[U_]:"fire-analytics-compat",[H_]:"fire-app-check",[j_]:"fire-app-check-compat",[q_]:"fire-auth",[z_]:"fire-auth-compat",[K_]:"fire-rtdb",[W_]:"fire-rtdb-compat",[G_]:"fire-fn",[Y_]:"fire-fn-compat",[Q_]:"fire-iid",[X_]:"fire-iid-compat",[J_]:"fire-fcm",[Z_]:"fire-fcm-compat",[eE]:"fire-perf",[tE]:"fire-perf-compat",[nE]:"fire-rc",[rE]:"fire-rc-compat",[sE]:"fire-gcs",[iE]:"fire-gcs-compat",[oE]:"fire-fst",[aE]:"fire-fst-compat","fire-js":"fire-js",[lE]:"fire-js-all"};/**
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
 */const la=new Map,Rc=new Map;function hE(t,e){try{t.container.addComponent(e)}catch(n){Cr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function us(t){const e=t.name;if(Rc.has(e))return Cr.debug(`There were multiple attempts to register component ${e}.`),!1;Rc.set(e,t);for(const n of la.values())hE(n,t);return!0}function Bu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const fE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},zn=new qi("app","Firebase",fE);/**
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
 */class dE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ki=cE;function vg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Nc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw zn.create("bad-app-name",{appName:String(s)});if(n||(n=l_()),!n)throw zn.create("no-options");const i=la.get(s);if(i){if(aa(n,i.options)&&aa(r,i.config))return i;throw zn.create("duplicate-app",{appName:s})}const o=new __(s);for(const l of Rc.values())o.addComponent(l);const a=new dE(n,r,o);return la.set(s,a),a}function bg(t=Nc){const e=la.get(t);if(!e&&t===Nc)return vg();if(!e)throw zn.create("no-app",{appName:t});return e}function Kn(t,e,n){var r;let s=(r=uE[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cr.warn(a.join(" "));return}us(new Ar(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const mE="firebase-heartbeat-database",pE=1,yi="firebase-heartbeat-store";let Wl=null;function wg(){return Wl||(Wl=P_(mE,pE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(yi)}}}).catch(t=>{throw zn.create("idb-open",{originalErrorMessage:t.message})})),Wl}async function gE(t){var e;try{return(await wg()).transaction(yi).objectStore(yi).get(_g(t))}catch(n){if(n instanceof xn)Cr.warn(n.message);else{const r=zn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Cr.warn(r.message)}}}async function ad(t,e){var n;try{const s=(await wg()).transaction(yi,"readwrite");return await s.objectStore(yi).put(e,_g(t)),s.done}catch(r){if(r instanceof xn)Cr.warn(r.message);else{const s=zn.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Cr.warn(s.message)}}}function _g(t){return`${t.name}!${t.options.appId}`}/**
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
 */const yE=1024,vE=30*24*60*60*1e3;class bE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _E(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ld();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=vE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ld(),{heartbeatsToSend:n,unsentEntries:r}=wE(this._heartbeatsCache.heartbeats),s=oa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ld(){return new Date().toISOString().substring(0,10)}function wE(t,e=yE){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),cd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),cd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _E{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return t_()?n_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await gE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ad(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ad(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function cd(t){return oa(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function EE(t){us(new Ar("platform-logger",e=>new F_(e),"PRIVATE")),us(new Ar("heartbeat",e=>new bE(e),"PRIVATE")),Kn(Cc,od,t),Kn(Cc,od,"esm2017"),Kn("fire-js","")}EE("");var IE="firebase",TE="9.13.0";/**
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
 */Kn(IE,TE,"app");var kE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},q,ju=ju||{},ne=kE||self;function ca(){}function Ga(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Wi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function xE(t){return Object.prototype.hasOwnProperty.call(t,Gl)&&t[Gl]||(t[Gl]=++SE)}var Gl="closure_uid_"+(1e9*Math.random()>>>0),SE=0;function AE(t,e,n){return t.call.apply(t.bind,arguments)}function CE(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function dt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?dt=AE:dt=CE,dt.apply(null,arguments)}function Io(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function at(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function rr(){this.s=this.s,this.o=this.o}var NE=0;rr.prototype.s=!1;rr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),NE!=0)&&xE(this)};rr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Eg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Hu(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function ud(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ga(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function mt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}mt.prototype.h=function(){this.defaultPrevented=!0};var RE=function(){if(!ne.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ne.addEventListener("test",ca,e),ne.removeEventListener("test",ca,e)}catch{}return t}();function ua(t){return/^[\s\xa0]*$/.test(t)}var hd=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Yl(t,e){return t<e?-1:t>e?1:0}function Ya(){var t=ne.navigator;return t&&(t=t.userAgent)?t:""}function en(t){return Ya().indexOf(t)!=-1}function qu(t){return qu[" "](t),t}qu[" "]=ca;function DE(t){var e=ME;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var OE=en("Opera"),hs=en("Trident")||en("MSIE"),Ig=en("Edge"),Dc=Ig||hs,Tg=en("Gecko")&&!(Ya().toLowerCase().indexOf("webkit")!=-1&&!en("Edge"))&&!(en("Trident")||en("MSIE"))&&!en("Edge"),PE=Ya().toLowerCase().indexOf("webkit")!=-1&&!en("Edge");function kg(){var t=ne.document;return t?t.documentMode:void 0}var ha;e:{var Ql="",Xl=function(){var t=Ya();if(Tg)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ig)return/Edge\/([\d\.]+)/.exec(t);if(hs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(PE)return/WebKit\/(\S+)/.exec(t);if(OE)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Xl&&(Ql=Xl?Xl[1]:""),hs){var Jl=kg();if(Jl!=null&&Jl>parseFloat(Ql)){ha=String(Jl);break e}}ha=Ql}var ME={};function LE(){return DE(function(){let t=0;const e=hd(String(ha)).split("."),n=hd("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=Yl(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||Yl(s[2].length==0,i[2].length==0)||Yl(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var Oc;if(ne.document&&hs){var fd=kg();Oc=fd||parseInt(ha,10)||void 0}else Oc=void 0;var FE=Oc;function vi(t,e){if(mt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Tg){e:{try{qu(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:$E[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&vi.X.h.call(this)}}at(vi,mt);var $E={2:"touch",3:"pen",4:"mouse"};vi.prototype.h=function(){vi.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Gi="closure_listenable_"+(1e6*Math.random()|0),VE=0;function UE(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=s,this.key=++VE,this.ba=this.ea=!1}function Qa(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function zu(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function xg(t){const e={};for(const n in t)e[n]=t[n];return e}const dd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Sg(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<dd.length;i++)n=dd[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Xa(t){this.src=t,this.g={},this.h=0}Xa.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Mc(t,e,r,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new UE(e,this.src,i,!!r,s),e.ea=n,t.push(e)),e};function Pc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Eg(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Qa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Mc(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==r)return s}return-1}var Ku="closure_lm_"+(1e6*Math.random()|0),Zl={};function Ag(t,e,n,r,s){if(r&&r.once)return Ng(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ag(t,e[i],n,r,s);return null}return n=Yu(n),t&&t[Gi]?t.N(e,n,Wi(r)?!!r.capture:!!r,s):Cg(t,e,n,!1,r,s)}function Cg(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Wi(s)?!!s.capture:!!s,a=Gu(t);if(a||(t[Ku]=a=new Xa(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=BE(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)RE||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Dg(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function BE(){function t(n){return e.call(t.src,t.listener,n)}const e=jE;return t}function Ng(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ng(t,e[i],n,r,s);return null}return n=Yu(n),t&&t[Gi]?t.O(e,n,Wi(r)?!!r.capture:!!r,s):Cg(t,e,n,!0,r,s)}function Rg(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Rg(t,e[i],n,r,s);else r=Wi(r)?!!r.capture:!!r,n=Yu(n),t&&t[Gi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Mc(i,n,r,s),-1<n&&(Qa(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Gu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Mc(e,n,r,s)),(n=-1<t?e[t]:null)&&Wu(n))}function Wu(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Gi])Pc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Dg(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Gu(e))?(Pc(n,t),n.h==0&&(n.src=null,e[Ku]=null)):Qa(t)}}}function Dg(t){return t in Zl?Zl[t]:Zl[t]="on"+t}function jE(t,e){if(t.ba)t=!0;else{e=new vi(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Wu(t),t=n.call(r,e)}return t}function Gu(t){return t=t[Ku],t instanceof Xa?t:null}var ec="__closure_events_fn_"+(1e9*Math.random()>>>0);function Yu(t){return typeof t=="function"?t:(t[ec]||(t[ec]=function(e){return t.handleEvent(e)}),t[ec])}function Ze(){rr.call(this),this.i=new Xa(this),this.P=this,this.I=null}at(Ze,rr);Ze.prototype[Gi]=!0;Ze.prototype.removeEventListener=function(t,e,n,r){Rg(this,t,e,n,r)};function st(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new mt(e,t);else if(e instanceof mt)e.target=e.target||t;else{var s=e;e=new mt(r,t),Sg(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=To(o,r,!0,e)&&s}if(o=e.g=t,s=To(o,r,!0,e)&&s,s=To(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=To(o,r,!1,e)&&s}Ze.prototype.M=function(){if(Ze.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Qa(n[r]);delete t.g[e],t.h--}}this.I=null};Ze.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ze.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function To(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Pc(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var Qu=ne.JSON.stringify;function HE(){var t=Mg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class qE{constructor(){this.h=this.g=null}add(e,n){const r=Og.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Og=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new zE,t=>t.reset());class zE{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function KE(t){ne.setTimeout(()=>{throw t},0)}function Pg(t,e){Lc||WE(),Fc||(Lc(),Fc=!0),Mg.add(t,e)}var Lc;function WE(){var t=ne.Promise.resolve(void 0);Lc=function(){t.then(GE)}}var Fc=!1,Mg=new qE;function GE(){for(var t;t=HE();){try{t.h.call(t.g)}catch(n){KE(n)}var e=Og;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Fc=!1}function Ja(t,e){Ze.call(this),this.h=t||1,this.g=e||ne,this.j=dt(this.lb,this),this.l=Date.now()}at(Ja,Ze);q=Ja.prototype;q.ca=!1;q.R=null;q.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),st(this,"tick"),this.ca&&(Xu(this),this.start()))}};q.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Xu(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}q.M=function(){Ja.X.M.call(this),Xu(this),delete this.g};function Ju(t,e,n){if(typeof t=="function")n&&(t=dt(t,n));else if(t&&typeof t.handleEvent=="function")t=dt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ne.setTimeout(t,e||0)}function Lg(t){t.g=Ju(()=>{t.g=null,t.i&&(t.i=!1,Lg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class YE extends rr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Lg(this)}M(){super.M(),this.g&&(ne.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bi(t){rr.call(this),this.h=t,this.g={}}at(bi,rr);var md=[];function Fg(t,e,n,r){Array.isArray(n)||(n&&(md[0]=n.toString()),n=md);for(var s=0;s<n.length;s++){var i=Ag(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function $g(t){zu(t.g,function(e,n){this.g.hasOwnProperty(n)&&Wu(e)},t),t.g={}}bi.prototype.M=function(){bi.X.M.call(this),$g(this)};bi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Za(){this.g=!0}Za.prototype.Aa=function(){this.g=!1};function QE(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function XE(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Kr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+ZE(t,n)+(r?" "+r:"")})}function JE(t,e){t.info(function(){return"TIMEOUT: "+e})}Za.prototype.info=function(){};function ZE(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Qu(n)}catch{return e}}var Mr={},pd=null;function el(){return pd=pd||new Ze}Mr.Pa="serverreachability";function Vg(t){mt.call(this,Mr.Pa,t)}at(Vg,mt);function wi(t){const e=el();st(e,new Vg(e))}Mr.STAT_EVENT="statevent";function Ug(t,e){mt.call(this,Mr.STAT_EVENT,t),this.stat=e}at(Ug,mt);function vt(t){const e=el();st(e,new Ug(e,t))}Mr.Qa="timingevent";function Bg(t,e){mt.call(this,Mr.Qa,t),this.size=e}at(Bg,mt);function Yi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ne.setTimeout(function(){t()},e)}var tl={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},jg={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Zu(){}Zu.prototype.h=null;function gd(t){return t.h||(t.h=t.i())}function Hg(){}var Qi={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function eh(){mt.call(this,"d")}at(eh,mt);function th(){mt.call(this,"c")}at(th,mt);var $c;function nl(){}at(nl,Zu);nl.prototype.g=function(){return new XMLHttpRequest};nl.prototype.i=function(){return{}};$c=new nl;function Xi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new bi(this),this.O=e2,t=Dc?125:void 0,this.T=new Ja(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new qg}function qg(){this.i=null,this.g="",this.h=!1}var e2=45e3,Vc={},fa={};q=Xi.prototype;q.setTimeout=function(t){this.O=t};function Uc(t,e,n){t.K=1,t.v=sl(gn(e)),t.s=n,t.P=!0,zg(t,null)}function zg(t,e){t.F=Date.now(),Ji(t),t.A=gn(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),Zg(n.i,"t",r),t.C=0,n=t.l.H,t.h=new qg,t.g=wy(t.l,n?e:null,!t.s),0<t.N&&(t.L=new YE(dt(t.La,t,t.g),t.N)),Fg(t.S,t.g,"readystatechange",t.ib),e=t.H?xg(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),wi(),QE(t.j,t.u,t.A,t.m,t.U,t.s)}q.ib=function(t){t=t.target;const e=this.L;e&&un(t)==3?e.l():this.La(t)};q.La=function(t){try{if(t==this.g)e:{const u=un(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Dc||this.g&&(this.h.h||this.g.fa()||wd(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?wi(3):wi(2)),rl(this);var n=this.g.aa();this.Y=n;t:if(Kg(this)){var r=wd(this.g);t="";var s=r.length,i=un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vr(this),ei(this);var o="";break t}this.h.i=new ne.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,XE(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ua(a)){var c=a;break t}}c=null}if(n=c)Kr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Bc(this,n);else{this.i=!1,this.o=3,vt(12),vr(this),ei(this);break e}}this.P?(Wg(this,u,o),Dc&&this.i&&u==3&&(Fg(this.S,this.T,"tick",this.hb),this.T.start())):(Kr(this.j,this.m,o,null),Bc(this,o)),u==4&&vr(this),this.i&&!this.I&&(u==4?gy(this.l,this):(this.i=!1,Ji(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,vt(12)):(this.o=0,vt(13)),vr(this),ei(this)}}}catch{}finally{}};function Kg(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Wg(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=t2(t,n),s==fa){e==4&&(t.o=4,vt(14),r=!1),Kr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Vc){t.o=4,vt(15),Kr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Kr(t.j,t.m,s,null),Bc(t,s);Kg(t)&&s!=fa&&s!=Vc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,vt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),lh(e),e.K=!0,vt(11))):(Kr(t.j,t.m,n,"[Invalid Chunked Response]"),vr(t),ei(t))}q.hb=function(){if(this.g){var t=un(this.g),e=this.g.fa();this.C<e.length&&(rl(this),Wg(this,t,e),this.i&&t!=4&&Ji(this))}};function t2(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?fa:(n=Number(e.substring(n,r)),isNaN(n)?Vc:(r+=1,r+n>e.length?fa:(e=e.substr(r,n),t.C=r+n,e)))}q.cancel=function(){this.I=!0,vr(this)};function Ji(t){t.V=Date.now()+t.O,Gg(t,t.O)}function Gg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Yi(dt(t.gb,t),e)}function rl(t){t.B&&(ne.clearTimeout(t.B),t.B=null)}q.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(JE(this.j,this.A),this.K!=2&&(wi(),vt(17)),vr(this),this.o=2,ei(this)):Gg(this,this.V-t)};function ei(t){t.l.G==0||t.I||gy(t.l,t)}function vr(t){rl(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Xu(t.T),$g(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Bc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||jc(n.h,t))){if(!t.J&&jc(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)pa(n),al(n);else break e;ah(n),vt(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=Yi(dt(n.cb,n),6e3));if(1>=ny(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else br(n,11)}else if((t.J||n.g==t)&&pa(n),!ua(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const g=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=r.h;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(nh(i,i.h),i.h=null))}if(r.D){const v=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,Me(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=by(r,r.H?r.ka:null,r.V),o.J){ry(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(rl(a),Ji(a)),r.g=o}else my(r);0<n.i.length&&ll(n)}else c[0]!="stop"&&c[0]!="close"||br(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?br(n,7):oh(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}wi(4)}catch{}}function n2(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ga(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function r2(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ga(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Yg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ga(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=r2(t),r=n2(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Qg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function s2(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function kr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof kr){this.h=e!==void 0?e:t.h,da(this,t.j),this.s=t.s,this.g=t.g,ma(this,t.m),this.l=t.l,e=t.i;var n=new _i;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),yd(this,n),this.o=t.o}else t&&(n=String(t).match(Qg))?(this.h=!!e,da(this,n[1]||"",!0),this.s=Ks(n[2]||""),this.g=Ks(n[3]||"",!0),ma(this,n[4]),this.l=Ks(n[5]||"",!0),yd(this,n[6]||"",!0),this.o=Ks(n[7]||"")):(this.h=!!e,this.i=new _i(null,this.h))}kr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ws(e,vd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ws(e,vd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ws(n,n.charAt(0)=="/"?a2:o2,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ws(n,c2)),t.join("")};function gn(t){return new kr(t)}function da(t,e,n){t.j=n?Ks(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ma(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function yd(t,e,n){e instanceof _i?(t.i=e,u2(t.i,t.h)):(n||(e=Ws(e,l2)),t.i=new _i(e,t.h))}function Me(t,e,n){t.i.set(e,n)}function sl(t){return Me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ks(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ws(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,i2),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function i2(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var vd=/[#\/\?@]/g,o2=/[#\?:]/g,a2=/[#\?]/g,l2=/[#\?@]/g,c2=/#/g;function _i(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function sr(t){t.g||(t.g=new Map,t.h=0,t.i&&s2(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}q=_i.prototype;q.add=function(t,e){sr(this),this.i=null,t=Ns(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Xg(t,e){sr(t),e=Ns(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Jg(t,e){return sr(t),e=Ns(t,e),t.g.has(e)}q.forEach=function(t,e){sr(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};q.oa=function(){sr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};q.W=function(t){sr(this);let e=[];if(typeof t=="string")Jg(this,t)&&(e=e.concat(this.g.get(Ns(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};q.set=function(t,e){return sr(this),this.i=null,t=Ns(this,t),Jg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};q.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Zg(t,e,n){Xg(t,e),0<n.length&&(t.i=null,t.g.set(Ns(t,e),Hu(n)),t.h+=n.length)}q.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Ns(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function u2(t,e){e&&!t.j&&(sr(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Xg(this,r),Zg(this,s,n))},t)),t.j=e}var h2=class{constructor(t,e){this.h=t,this.g=e}};function ey(t){this.l=t||f2,ne.PerformanceNavigationTiming?(t=ne.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ne.g&&ne.g.Ga&&ne.g.Ga()&&ne.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var f2=10;function ty(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ny(t){return t.h?1:t.g?t.g.size:0}function jc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function nh(t,e){t.g?t.g.add(e):t.h=e}function ry(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ey.prototype.cancel=function(){if(this.i=sy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function sy(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Hu(t.i)}function rh(){}rh.prototype.stringify=function(t){return ne.JSON.stringify(t,void 0)};rh.prototype.parse=function(t){return ne.JSON.parse(t,void 0)};function d2(){this.g=new rh}function m2(t,e,n){const r=n||"";try{Yg(t,function(s,i){let o=s;Wi(s)&&(o=Qu(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function p2(t,e){const n=new Za;if(ne.Image){const r=new Image;r.onload=Io(ko,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Io(ko,n,r,"TestLoadImage: error",!1,e),r.onabort=Io(ko,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Io(ko,n,r,"TestLoadImage: timeout",!1,e),ne.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ko(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Zi(t){this.l=t.ac||null,this.j=t.jb||!1}at(Zi,Zu);Zi.prototype.g=function(){return new il(this.l,this.j)};Zi.prototype.i=function(t){return function(){return t}}({});function il(t,e){Ze.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=sh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}at(il,Ze);var sh=0;q=il.prototype;q.open=function(t,e){if(this.readyState!=sh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ei(this)};q.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ne).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};q.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,eo(this)),this.readyState=sh};q.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ei(this)),this.g&&(this.readyState=3,Ei(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof ne.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;iy(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function iy(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}q.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?eo(this):Ei(this),this.readyState==3&&iy(this)}};q.Va=function(t){this.g&&(this.response=this.responseText=t,eo(this))};q.Ua=function(t){this.g&&(this.response=t,eo(this))};q.ga=function(){this.g&&eo(this)};function eo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ei(t)}q.setRequestHeader=function(t,e){this.v.append(t,e)};q.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};q.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ei(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(il.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var g2=ne.JSON.parse;function Ue(t){Ze.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=oy,this.K=this.L=!1}at(Ue,Ze);var oy="",y2=/^https?$/i,v2=["POST","PUT"];q=Ue.prototype;q.Ka=function(t){this.L=t};q.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():$c.g(),this.C=this.u?gd(this.u):gd($c),this.g.onreadystatechange=dt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){bd(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=ne.FormData&&t instanceof ne.FormData,!(0<=Eg(v2,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{cy(this),0<this.B&&((this.K=b2(this.g))?(this.g.timeout=this.B,this.g.ontimeout=dt(this.qa,this)):this.A=Ju(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){bd(this,i)}};function b2(t){return hs&&LE()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}q.qa=function(){typeof ju<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,st(this,"timeout"),this.abort(8))};function bd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ay(t),ol(t)}function ay(t){t.D||(t.D=!0,st(t,"complete"),st(t,"error"))}q.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,st(this,"complete"),st(this,"abort"),ol(this))};q.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ol(this,!0)),Ue.X.M.call(this)};q.Ha=function(){this.s||(this.F||this.v||this.l?ly(this):this.fb())};q.fb=function(){ly(this)};function ly(t){if(t.h&&typeof ju<"u"&&(!t.C[1]||un(t)!=4||t.aa()!=2)){if(t.v&&un(t)==4)Ju(t.Ha,0,t);else if(st(t,"readystatechange"),un(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(Qg)[1]||null;if(!s&&ne.self&&ne.self.location){var i=ne.self.location.protocol;s=i.substr(0,i.length-1)}r=!y2.test(s?s.toLowerCase():"")}n=r}if(n)st(t,"complete"),st(t,"success");else{t.m=6;try{var o=2<un(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",ay(t)}}finally{ol(t)}}}}function ol(t,e){if(t.g){cy(t);const n=t.g,r=t.C[0]?ca:null;t.g=null,t.C=null,e||st(t,"ready");try{n.onreadystatechange=r}catch{}}}function cy(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ne.clearTimeout(t.A),t.A=null)}function un(t){return t.g?t.g.readyState:0}q.aa=function(){try{return 2<un(this)?this.g.status:-1}catch{return-1}};q.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};q.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),g2(e)}};function wd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case oy:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}q.Ea=function(){return this.m};q.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function uy(t){let e="";return zu(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function ih(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=uy(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Me(t,e,n))}function Bs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function hy(t){this.Ca=0,this.i=[],this.j=new Za,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Bs("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Bs("baseRetryDelayMs",5e3,t),this.bb=Bs("retryDelaySeedMs",1e4,t),this.$a=Bs("forwardChannelMaxRetries",2,t),this.ta=Bs("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new ey(t&&t.concurrentRequestLimit),this.Fa=new d2,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}q=hy.prototype;q.ma=8;q.G=1;function oh(t){if(fy(t),t.G==3){var e=t.U++,n=gn(t.F);Me(n,"SID",t.I),Me(n,"RID",e),Me(n,"TYPE","terminate"),to(t,n),e=new Xi(t,t.j,e,void 0),e.K=2,e.v=sl(gn(n)),n=!1,ne.navigator&&ne.navigator.sendBeacon&&(n=ne.navigator.sendBeacon(e.v.toString(),"")),!n&&ne.Image&&(new Image().src=e.v,n=!0),n||(e.g=wy(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ji(e)}vy(t)}function al(t){t.g&&(lh(t),t.g.cancel(),t.g=null)}function fy(t){al(t),t.u&&(ne.clearTimeout(t.u),t.u=null),pa(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&ne.clearTimeout(t.m),t.m=null)}function ll(t){ty(t.h)||t.m||(t.m=!0,Pg(t.Ja,t),t.C=0)}function w2(t,e){return ny(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Yi(dt(t.Ja,t,e),yy(t,t.C)),t.C++,!0)}q.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new Xi(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=xg(i),Sg(i,this.S)):i=this.S),this.o!==null||this.N||(s.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=dy(this,s,e),n=gn(this.F),Me(n,"RID",t),Me(n,"CVER",22),this.D&&Me(n,"X-HTTP-Session-Id",this.D),to(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(uy(i)))+"&"+e:this.o&&ih(n,this.o,i)),nh(this.h,s),this.Ya&&Me(n,"TYPE","init"),this.O?(Me(n,"$req",e),Me(n,"SID","null"),s.Z=!0,Uc(s,n,null)):Uc(s,n,e),this.G=2}}else this.G==3&&(t?_d(this,t):this.i.length==0||ty(this.h)||_d(this))};function _d(t,e){var n;e?n=e.m:n=t.U++;const r=gn(t.F);Me(r,"SID",t.I),Me(r,"RID",n),Me(r,"AID",t.T),to(t,r),t.o&&t.s&&ih(r,t.o,t.s),n=new Xi(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=dy(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),nh(t.h,n),Uc(n,r,e)}function to(t,e){t.ia&&zu(t.ia,function(n,r){Me(e,r,n)}),t.l&&Yg({},function(n,r){Me(e,r,n)})}function dy(t,e,n){n=Math.min(t.i.length,n);var r=t.l?dt(t.l.Ra,t.l,t):null;e:{var s=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].h;const u=s[l].g;if(c-=i,0>c)i=Math.max(0,s[l].h-100),a=!1;else try{m2(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function my(t){t.g||t.u||(t.Z=1,Pg(t.Ia,t),t.A=0)}function ah(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Yi(dt(t.Ia,t),yy(t,t.A)),t.A++,!0)}q.Ia=function(){if(this.u=null,py(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Yi(dt(this.eb,this),t)}};q.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,vt(10),al(this),py(this))};function lh(t){t.B!=null&&(ne.clearTimeout(t.B),t.B=null)}function py(t){t.g=new Xi(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=gn(t.sa);Me(e,"RID","rpc"),Me(e,"SID",t.I),Me(e,"CI",t.L?"0":"1"),Me(e,"AID",t.T),Me(e,"TYPE","xmlhttp"),to(t,e),t.o&&t.s&&ih(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=sl(gn(e)),n.s=null,n.P=!0,zg(n,t)}q.cb=function(){this.v!=null&&(this.v=null,al(this),ah(this),vt(19))};function pa(t){t.v!=null&&(ne.clearTimeout(t.v),t.v=null)}function gy(t,e){var n=null;if(t.g==e){pa(t),lh(t),t.g=null;var r=2}else if(jc(t.h,e))n=e.D,ry(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=el(),st(r,new Bg(r,n)),ll(t)}else my(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(r==1&&w2(t,e)||r==2&&ah(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:br(t,5);break;case 4:br(t,10);break;case 3:br(t,6);break;default:br(t,2)}}}function yy(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function br(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=dt(t.kb,t);n||(n=new kr("//www.google.com/images/cleardot.gif"),ne.location&&ne.location.protocol=="http"||da(n,"https"),sl(n)),p2(n.toString(),r)}else vt(2);t.G=0,t.l&&t.l.va(e),vy(t),fy(t)}q.kb=function(t){t?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function vy(t){if(t.G=0,t.la=[],t.l){const e=sy(t.h);(e.length!=0||t.i.length!=0)&&(ud(t.la,e),ud(t.la,t.i),t.h.i.length=0,Hu(t.i),t.i.length=0),t.l.ua()}}function by(t,e,n){var r=n instanceof kr?gn(n):new kr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),ma(r,r.m);else{var s=ne.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new kr(null,void 0);r&&da(i,r),e&&(i.g=e),s&&ma(i,s),n&&(i.l=n),r=i}return n=t.D,e=t.za,n&&e&&Me(r,n,e),Me(r,"VER",t.ma),to(t,r),r}function wy(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ue(new Zi({jb:!0})):new Ue(t.ra),e.Ka(t.H),e}function _y(){}q=_y.prototype;q.xa=function(){};q.wa=function(){};q.va=function(){};q.ua=function(){};q.Ra=function(){};function ga(){if(hs&&!(10<=Number(FE)))throw Error("Environmental error: no available transport.")}ga.prototype.g=function(t,e){return new At(t,e)};function At(t,e){Ze.call(this),this.g=new hy(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!ua(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ua(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Rs(this)}at(At,Ze);At.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;vt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=by(t,null,t.V),ll(t)};At.prototype.close=function(){oh(this.g)};At.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Qu(t),t=n);e.i.push(new h2(e.ab++,t)),e.G==3&&ll(e)};At.prototype.M=function(){this.g.l=null,delete this.j,oh(this.g),delete this.g,At.X.M.call(this)};function Ey(t){eh.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}at(Ey,eh);function Iy(){th.call(this),this.status=1}at(Iy,th);function Rs(t){this.g=t}at(Rs,_y);Rs.prototype.xa=function(){st(this.g,"a")};Rs.prototype.wa=function(t){st(this.g,new Ey(t))};Rs.prototype.va=function(t){st(this.g,new Iy)};Rs.prototype.ua=function(){st(this.g,"b")};ga.prototype.createWebChannel=ga.prototype.g;At.prototype.send=At.prototype.u;At.prototype.open=At.prototype.m;At.prototype.close=At.prototype.close;tl.NO_ERROR=0;tl.TIMEOUT=8;tl.HTTP_ERROR=6;jg.COMPLETE="complete";Hg.EventType=Qi;Qi.OPEN="a";Qi.CLOSE="b";Qi.ERROR="c";Qi.MESSAGE="d";Ze.prototype.listen=Ze.prototype.N;Ue.prototype.listenOnce=Ue.prototype.O;Ue.prototype.getLastError=Ue.prototype.Oa;Ue.prototype.getLastErrorCode=Ue.prototype.Ea;Ue.prototype.getStatus=Ue.prototype.aa;Ue.prototype.getResponseJson=Ue.prototype.Sa;Ue.prototype.getResponseText=Ue.prototype.fa;Ue.prototype.send=Ue.prototype.da;Ue.prototype.setWithCredentials=Ue.prototype.Ka;var _2=function(){return new ga},E2=function(){return el()},tc=tl,I2=jg,T2=Mr,Ed={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},k2=Zi,xo=Hg,x2=Ue;const Id="@firebase/firestore";/**
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
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
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
 */let Ds="9.13.0";/**
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
 */const Nr=new Vu("@firebase/firestore");function Td(){return Nr.logLevel}function K(t,...e){if(Nr.logLevel<=ve.DEBUG){const n=e.map(ch);Nr.debug(`Firestore (${Ds}): ${t}`,...n)}}function yn(t,...e){if(Nr.logLevel<=ve.ERROR){const n=e.map(ch);Nr.error(`Firestore (${Ds}): ${t}`,...n)}}function Hc(t,...e){if(Nr.logLevel<=ve.WARN){const n=e.map(ch);Nr.warn(`Firestore (${Ds}): ${t}`,...n)}}function ch(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function se(t="Unexpected state"){const e=`FIRESTORE (${Ds}) INTERNAL ASSERTION FAILED: `+t;throw yn(e),new Error(e)}function Ne(t,e){t||se()}function ie(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends xn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class dn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Ty{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class S2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class A2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class C2{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new dn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new dn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new dn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ne(typeof r.accessToken=="string"),new Ty(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string"),new lt(e)}}class N2{constructor(e,n,r,s){this.h=e,this.l=n,this.m=r,this.g=s,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Ne(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class R2{constructor(e,n,r,s){this.h=e,this.l=n,this.m=r,this.g=s}getToken(){return Promise.resolve(new N2(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class D2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class O2{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?s(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ne(typeof n.token=="string"),this.A=n.token,new D2(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function P2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class ky{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=P2(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function fs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class ze{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new P(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new P(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new P(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new P(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ze.fromMillis(Date.now())}static fromDate(e){return ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ze(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ce{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ce(e)}static min(){return new ce(new ze(0,0))}static max(){return new ce(new ze(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ii{constructor(e,n,r){n===void 0?n=0:n>e.length&&se(),r===void 0?r=e.length-n:r>e.length-n&&se(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ii.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ii?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ce extends Ii{construct(e,n,r){return new Ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new P(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ce(n)}static emptyPath(){return new Ce([])}}const M2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends Ii{construct(e,n,r){return new ut(e,n,r)}static isValidIdentifier(e){return M2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new P(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new P(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new P(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new P(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ut(n)}static emptyPath(){return new ut([])}}/**
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
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(Ce.fromString(e))}static fromName(e){return new W(Ce.fromString(e).popFirst(5))}static empty(){return new W(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new Ce(e.slice()))}}function L2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ce.fromTimestamp(r===1e9?new ze(n+1,0):new ze(n,r));return new Qn(s,W.empty(),e)}function F2(t){return new Qn(t.readTime,t.key,-1)}class Qn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Qn(ce.min(),W.empty(),-1)}static max(){return new Qn(ce.max(),W.empty(),-1)}}function $2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
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
 */const V2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class U2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function no(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==V2)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,r)=>{n(e)})}static reject(e){return new A((n,r)=>{r(e)})}static waitFor(e){return new A((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=A.resolve(!1);for(const r of e)n=n.next(s=>s?A.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new A((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new A((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function ro(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class uh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function kd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Lr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function xy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */uh.at=-1;class We{constructor(e,n){this.comparator=e,this.root=n||tt.EMPTY}insert(e,n){return new We(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(e){return new We(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new So(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new So(this.root,e,this.comparator,!1)}getReverseIterator(){return new So(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new So(this.root,e,this.comparator,!0)}}class So{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:tt.RED,this.left=s!=null?s:tt.EMPTY,this.right=i!=null?i:tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new tt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return tt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw se();const e=this.left.check();if(e!==this.right.check())throw se();return e+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw se()}get value(){throw se()}get color(){throw se()}get left(){throw se()}get right(){throw se()}copy(t,e,n,r,s){return this}insert(t,e,n){return new tt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ke{constructor(e){this.comparator=e,this.data=new We(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new xd(this.data.getIterator())}getIteratorFrom(e){return new xd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ke(this.comparator);return n.data=e,n}}class xd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Pt{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new Pt([])}unionWith(e){let n=new Ke(ut.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Pt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return fs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class gt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new gt(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new gt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const B2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xn(t){if(Ne(!!t),typeof t=="string"){let e=0;const n=B2.exec(t);if(Ne(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ds(t){return typeof t=="string"?gt.fromBase64String(t):gt.fromUint8Array(t)}/**
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
 */function hh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Sy(t){const e=t.mapValue.fields.__previous_value__;return hh(e)?Sy(e):e}function Ti(t){const e=Xn(t.mapValue.fields.__local_write_time__.timestampValue);return new ze(e.seconds,e.nanos)}/**
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
 */class j2{constructor(e,n,r,s,i,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class ki{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ki("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ki&&e.projectId===this.projectId&&e.database===this.database}}function cl(t){return t==null}function ya(t){return t===0&&1/t==-1/0}function H2(t){return typeof t=="number"&&Number.isInteger(t)&&!ya(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Ao={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Rr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?hh(t)?4:q2(t)?9007199254740991:10:se()}function an(t,e){if(t===e)return!0;const n=Rr(t);if(n!==Rr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ti(t).isEqual(Ti(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Xn(r.timestampValue),o=Xn(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return ds(r.bytesValue).isEqual(ds(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return He(r.geoPointValue.latitude)===He(s.geoPointValue.latitude)&&He(r.geoPointValue.longitude)===He(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return He(r.integerValue)===He(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=He(r.doubleValue),o=He(s.doubleValue);return i===o?ya(i)===ya(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return fs(t.arrayValue.values||[],e.arrayValue.values||[],an);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(kd(i)!==kd(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!an(i[a],o[a])))return!1;return!0}(t,e);default:return se()}}function xi(t,e){return(t.values||[]).find(n=>an(n,e))!==void 0}function ms(t,e){if(t===e)return 0;const n=Rr(t),r=Rr(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=He(s.integerValue||s.doubleValue),a=He(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Sd(t.timestampValue,e.timestampValue);case 4:return Sd(Ti(t),Ti(e));case 5:return we(t.stringValue,e.stringValue);case 6:return function(s,i){const o=ds(s),a=ds(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=we(o[l],a[l]);if(c!==0)return c}return we(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=we(He(s.latitude),He(i.latitude));return o!==0?o:we(He(s.longitude),He(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=ms(o[l],a[l]);if(c)return c}return we(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===Ao.mapValue&&i===Ao.mapValue)return 0;if(s===Ao.mapValue)return 1;if(i===Ao.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),l=i.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=we(a[u],c[u]);if(h!==0)return h;const f=ms(o[a[u]],l[c[u]]);if(f!==0)return f}return we(a.length,c.length)}(t.mapValue,e.mapValue);default:throw se()}}function Sd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=Xn(t),r=Xn(e),s=we(n.seconds,r.seconds);return s!==0?s:we(n.nanos,r.nanos)}function ns(t){return qc(t)}function qc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=Xn(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ds(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,W.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=qc(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${qc(r.fields[a])}`;return i+"}"}(t.mapValue):se();var e,n}function va(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function zc(t){return!!t&&"integerValue"in t}function fh(t){return!!t&&"arrayValue"in t}function Ad(t){return!!t&&"nullValue"in t}function Cd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ho(t){return!!t&&"mapValue"in t}function ti(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Lr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ti(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ti(t.arrayValue.values[n]);return e}return Object.assign({},t)}function q2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ho(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ti(n)}setAll(e){let n=ut.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=ti(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ho(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return an(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ho(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Lr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new It(ti(this.value))}}function Ay(t){const e=[];return Lr(t.fields,(n,r)=>{const s=new ut([n]);if(Ho(r)){const i=Ay(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Pt(e)}/**
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
 */class nt{constructor(e,n,r,s,i,o){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new nt(e,0,ce.min(),ce.min(),It.empty(),0)}static newFoundDocument(e,n,r){return new nt(e,1,n,ce.min(),r,0)}static newNoDocument(e,n){return new nt(e,2,n,ce.min(),It.empty(),0)}static newUnknownDocument(e,n){return new nt(e,3,n,ce.min(),It.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class z2{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ht=null}}function Nd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new z2(t,e,n,r,s,i,o)}function dh(t){const e=ie(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(s=r).field.canonicalString()+s.op.toString()+ns(s.value);var s}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),cl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ns(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ns(r)).join(",")),e.ht=n}return e.ht}function K2(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${ns(r.value)}`;var r}).join(", ")}]`),cl(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>ns(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>ns(n)).join(",")),`Target(${e})`}function mh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!eI(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!an(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Dd(t.startAt,e.startAt)&&Dd(t.endAt,e.endAt)}function Kc(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class bt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new W2(e,n,r):n==="array-contains"?new Q2(e,r):n==="in"?new X2(e,r):n==="not-in"?new J2(e,r):n==="array-contains-any"?new Z2(e,r):new bt(e,n,r)}static lt(e,n,r){return n==="in"?new G2(e,r):new Y2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(ms(n,this.value)):n!==null&&Rr(this.value)===Rr(n)&&this.ft(ms(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class W2 extends bt{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.ft(n)}}class G2 extends bt{constructor(e,n){super(e,"in",n),this.keys=Cy("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Y2 extends bt{constructor(e,n){super(e,"not-in",n),this.keys=Cy("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Cy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class Q2 extends bt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return fh(n)&&xi(n.arrayValue,this.value)}}class X2 extends bt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&xi(this.value.arrayValue,n)}}class J2 extends bt{constructor(e,n){super(e,"not-in",n)}matches(e){if(xi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!xi(this.value.arrayValue,n)}}class Z2 extends bt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!fh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>xi(this.value.arrayValue,r))}}class ps{constructor(e,n){this.position=e,this.inclusive=n}}class rs{constructor(e,n="asc"){this.field=e,this.dir=n}}function eI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Rd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=ms(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Dd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!an(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Fr{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function tI(t,e,n,r,s,i,o,a){return new Fr(t,e,n,r,s,i,o,a)}function ph(t){return new Fr(t)}function Od(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function gh(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function yh(t){for(const e of t.filters)if(e.dt())return e.field;return null}function vh(t){return t.collectionGroup!==null}function gs(t){const e=ie(t);if(e._t===null){e._t=[];const n=yh(e),r=gh(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new rs(n)),e._t.push(new rs(ut.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e._t.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new rs(ut.keyField(),i))}}}return e._t}function vn(t){const e=ie(t);if(!e.wt)if(e.limitType==="F")e.wt=Nd(e.path,e.collectionGroup,gs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of gs(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new rs(i.field,o))}const r=e.endAt?new ps(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new ps(e.startAt.position,e.startAt.inclusive):null;e.wt=Nd(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.wt}function ba(t,e,n){return new Fr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ul(t,e){return mh(vn(t),vn(e))&&t.limitType===e.limitType}function Ny(t){return`${dh(vn(t))}|lt:${t.limitType}`}function Wc(t){return`Query(target=${K2(vn(t))}; limitType=${t.limitType})`}function bh(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):W.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=Rd(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,gs(n),r)||n.endAt&&!function(s,i,o){const a=Rd(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,gs(n),r))}(t,e)}function nI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ry(t){return(e,n)=>{let r=!1;for(const s of gs(t)){const i=rI(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function rI(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),l=o.data.field(s);return a!==null&&l!==null?ms(a,l):se()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return se()}}/**
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
 */function Dy(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ya(e)?"-0":e}}function Oy(t){return{integerValue:""+t}}function sI(t,e){return H2(e)?Oy(e):Dy(t,e)}/**
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
 */class hl{constructor(){this._=void 0}}function iI(t,e,n){return t instanceof wa?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof Si?My(t,e):t instanceof Ai?Ly(t,e):function(r,s){const i=Py(r,s),o=Pd(i)+Pd(r.yt);return zc(i)&&zc(r.yt)?Oy(o):Dy(r.It,o)}(t,e)}function oI(t,e,n){return t instanceof Si?My(t,e):t instanceof Ai?Ly(t,e):n}function Py(t,e){return t instanceof _a?zc(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class wa extends hl{}class Si extends hl{constructor(e){super(),this.elements=e}}function My(t,e){const n=Fy(e);for(const r of t.elements)n.some(s=>an(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ai extends hl{constructor(e){super(),this.elements=e}}function Ly(t,e){let n=Fy(e);for(const r of t.elements)n=n.filter(s=>!an(s,r));return{arrayValue:{values:n}}}class _a extends hl{constructor(e,n){super(),this.It=e,this.yt=n}}function Pd(t){return He(t.integerValue||t.doubleValue)}function Fy(t){return fh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function aI(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Si&&r instanceof Si||n instanceof Ai&&r instanceof Ai?fs(n.elements,r.elements,an):n instanceof _a&&r instanceof _a?an(n.yt,r.yt):n instanceof wa&&r instanceof wa}(t.transform,e.transform)}class lI{constructor(e,n){this.version=e,this.transformResults=n}}class qt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qt}static exists(e){return new qt(void 0,e)}static updateTime(e){return new qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class fl{}function $y(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wh(t.key,qt.none()):new so(t.key,t.data,qt.none());{const n=t.data,r=It.empty();let s=new Ke(ut.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ir(t.key,r,new Pt(s.toArray()),qt.none())}}function cI(t,e,n){t instanceof so?function(r,s,i){const o=r.value.clone(),a=Ld(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ir?function(r,s,i){if(!qo(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=Ld(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(Vy(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function ni(t,e,n,r){return t instanceof so?function(s,i,o,a){if(!qo(s.precondition,i))return o;const l=s.value.clone(),c=Fd(s.fieldTransforms,a,i);return l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof ir?function(s,i,o,a){if(!qo(s.precondition,i))return o;const l=Fd(s.fieldTransforms,a,i),c=i.data;return c.setAll(Vy(s)),c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(s,i,o){return qo(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function uI(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Py(r.transform,s||null);i!=null&&(n===null&&(n=It.empty()),n.set(r.field,i))}return n||null}function Md(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&fs(n,r,(s,i)=>aI(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class so extends fl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ir extends fl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Vy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ld(t,e,n){const r=new Map;Ne(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,oI(o,a,n[s]))}return r}function Fd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,iI(i,o,e))}return r}class wh extends fl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hI extends fl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class fI{constructor(e){this.count=e}}/**
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
 */var je,pe;function dI(t){switch(t){default:return se();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function Uy(t){if(t===void 0)return yn("GRPC error has no .code"),I.UNKNOWN;switch(t){case je.OK:return I.OK;case je.CANCELLED:return I.CANCELLED;case je.UNKNOWN:return I.UNKNOWN;case je.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case je.INTERNAL:return I.INTERNAL;case je.UNAVAILABLE:return I.UNAVAILABLE;case je.UNAUTHENTICATED:return I.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case je.NOT_FOUND:return I.NOT_FOUND;case je.ALREADY_EXISTS:return I.ALREADY_EXISTS;case je.PERMISSION_DENIED:return I.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case je.ABORTED:return I.ABORTED;case je.OUT_OF_RANGE:return I.OUT_OF_RANGE;case je.UNIMPLEMENTED:return I.UNIMPLEMENTED;case je.DATA_LOSS:return I.DATA_LOSS;default:return se()}}(pe=je||(je={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Os{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Lr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return xy(this.inner)}size(){return this.innerSize}}/**
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
 */const mI=new We(W.comparator);function bn(){return mI}const By=new We(W.comparator);function Gs(...t){let e=By;for(const n of t)e=e.insert(n.key,n);return e}function jy(t){let e=By;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function wr(){return ri()}function Hy(){return ri()}function ri(){return new Os(t=>t.toString(),(t,e)=>t.isEqual(e))}const pI=new We(W.comparator),gI=new Ke(W.comparator);function he(...t){let e=gI;for(const n of t)e=e.add(n);return e}const yI=new Ke(we);function qy(){return yI}/**
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
 */class dl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,io.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new dl(ce.min(),s,qy(),bn(),he())}}class io{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new io(r,n,he(),he(),he())}}/**
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
 */class zo{constructor(e,n,r,s){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=s}}class zy{constructor(e,n){this.targetId=e,this.At=n}}class Ky{constructor(e,n,r=gt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class $d{constructor(){this.Rt=0,this.bt=Ud(),this.Pt=gt.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=he(),n=he(),r=he();return this.bt.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:se()}}),new io(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=Ud()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class vI{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=bn(),this.qt=Vd(),this.Kt=new Ke(we)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:se()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,s)=>{this.Ht(s)&&n(s)})}Yt(e){const n=e.targetId,r=e.At.count,s=this.Xt(n);if(s){const i=s.target;if(Kc(i))if(r===0){const o=new W(i.path);this.jt(n,o,nt.newNoDocument(o,ce.min()))}else Ne(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&Kc(a.target)){const l=new W(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,nt.newNoDocument(l,e))}i.Dt&&(n.set(o,i.xt()),i.Nt())}});let r=he();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const s=new dl(e,n,this.Kt,this.Ut,r);return this.Ut=bn(),this.qt=Vd(),this.Kt=new Ke(we),s}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const s=this.zt(e);this.ee(e,n)?s.kt(n,1):s.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new $d,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new Ke(we),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new $d),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function Vd(){return new We(W.comparator)}function Ud(){return new We(W.comparator)}/**
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
 */const bI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),wI=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class _I{constructor(e,n){this.databaseId=e,this.gt=n}}function Ea(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Wy(t,e){return t.gt?e.toBase64():e.toUint8Array()}function EI(t,e){return Ea(t,e.toTimestamp())}function mn(t){return Ne(!!t),ce.fromTimestamp(function(e){const n=Xn(e);return new ze(n.seconds,n.nanos)}(t))}function _h(t,e){return function(n){return new Ce(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Gy(t){const e=Ce.fromString(t);return Ne(Xy(e)),e}function Gc(t,e){return _h(t.databaseId,e.path)}function nc(t,e){const n=Gy(e);if(n.get(1)!==t.databaseId.projectId)throw new P(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new P(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(Yy(n))}function Yc(t,e){return _h(t.databaseId,e)}function II(t){const e=Gy(t);return e.length===4?Ce.emptyPath():Yy(e)}function Qc(t){return new Ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Yy(t){return Ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Bd(t,e,n){return{name:Gc(t,e),fields:n.value.mapValue.fields}}function TI(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:se()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,c){return l.gt?(Ne(c===void 0||typeof c=="string"),gt.fromBase64String(c||"")):(Ne(c===void 0||c instanceof Uint8Array),gt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?I.UNKNOWN:Uy(l.code);return new P(c,l.message||"")}(o);n=new Ky(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=nc(t,r.document.name),i=mn(r.document.updateTime),o=new It({mapValue:{fields:r.document.fields}}),a=nt.newFoundDocument(s,i,o),l=r.targetIds||[],c=r.removedTargetIds||[];n=new zo(l,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=nc(t,r.document),i=r.readTime?mn(r.readTime):ce.min(),o=nt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new zo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=nc(t,r.document),i=r.removedTargetIds||[];n=new zo([],i,s,null)}else{if(!("filter"in e))return se();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new fI(s),o=r.targetId;n=new zy(o,i)}}return n}function kI(t,e){let n;if(e instanceof so)n={update:Bd(t,e.key,e.value)};else if(e instanceof wh)n={delete:Gc(t,e.key)};else if(e instanceof ir)n={update:Bd(t,e.key,e.data),updateMask:MI(e.fieldMask)};else{if(!(e instanceof hI))return se();n={verify:Gc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof wa)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Si)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ai)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof _a)return{fieldPath:i.field.canonicalString(),increment:o.yt};throw se()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:EI(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:se()}(t,e.precondition)),n}function xI(t,e){return t&&t.length>0?(Ne(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?mn(r.updateTime):mn(s);return i.isEqual(ce.min())&&(i=mn(s)),new lI(i,r.transformResults||[])}(n,e))):[]}function SI(t,e){return{documents:[Yc(t,e.path)]}}function AI(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Yc(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Yc(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length===0)return;const c=l.map(u=>function(h){if(h.op==="=="){if(Cd(h.value))return{unaryFilter:{field:jr(h.field),op:"IS_NAN"}};if(Ad(h.value))return{unaryFilter:{field:jr(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Cd(h.value))return{unaryFilter:{field:jr(h.field),op:"IS_NOT_NAN"}};if(Ad(h.value))return{unaryFilter:{field:jr(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jr(h.field),op:DI(h.op),value:h.value}}}(u));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:jr(u.field),direction:RI(u.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(l,c){return l.gt||cl(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function CI(t){let e=II(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ne(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Qy(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new rs(Wr(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,cl(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,f=u.values||[];return new ps(f,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,f=u.values||[];return new ps(f,h)}(n.endAt)),tI(e,s,o,i,a,"F",l,c)}function NI(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return se()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Qy(t){return t?t.unaryFilter!==void 0?[PI(t)]:t.fieldFilter!==void 0?[OI(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Qy(e)).reduce((e,n)=>e.concat(n)):se():[]}function RI(t){return bI[t]}function DI(t){return wI[t]}function jr(t){return{fieldPath:t.canonicalString()}}function Wr(t){return ut.fromServerFormat(t.fieldPath)}function OI(t){return bt.create(Wr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return se()}}(t.fieldFilter.op),t.fieldFilter.value)}function PI(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Wr(t.unaryFilter.field);return bt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Wr(t.unaryFilter.field);return bt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Wr(t.unaryFilter.field);return bt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Wr(t.unaryFilter.field);return bt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return se()}}function MI(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Xy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class LI{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&cI(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ni(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ni(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Hy();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=$y(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ce.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&fs(this.mutations,e.mutations,(n,r)=>Md(n,r))&&fs(this.baseMutations,e.baseMutations,(n,r)=>Md(n,r))}}class Eh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ne(e.mutations.length===r.length);let s=pI;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Eh(e,n,r,s)}}/**
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
 */class FI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class xr{constructor(e,n,r,s,i=ce.min(),o=ce.min(),a=gt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new xr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class $I{constructor(e){this.re=e}}function VI(t){const e=CI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ba(e,e.limit,"L"):e}/**
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
 */class UI{constructor(){this.Ye=new BI}addToCollectionParentIndex(e,n){return this.Ye.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(Qn.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(Qn.min())}updateCollectionGroup(e,n,r){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class BI{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ke(Ce.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ke(Ce.comparator)).toArray()}}/**
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
 */class ys{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new ys(0)}static vn(){return new ys(-1)}}/**
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
 */class jI{constructor(){this.changes=new Os(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class HI{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class qI{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.getBaseDocument(e,n,r))).next(s=>(r!==null&&ni(r.mutation,s,Pt.empty(),ze.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,n,r=he()){const s=wr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Gs();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=wr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,he()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=bn();const o=ri(),a=ri();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof ir)?i=i.insert(c.key,c):u!==void 0&&(o.set(c.key,u.mutation.getFieldMask()),ni(u.mutation,c,u.mutation.getFieldMask(),ze.now()))}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new HI(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ri();let s=new We((o,a)=>o-a),i=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||Pt.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||he()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=Hy();u.forEach(f=>{if(!i.has(f)){const m=$y(n.get(f),r.get(f));m!==null&&h.set(f,m),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return A.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return W.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):vh(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):A.resolve(wr());let a=-1,l=i;return o.next(c=>A.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?A.resolve():this.getBaseDocument(e,u,h).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,he())).next(u=>({batchId:a,changes:jy(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let s=Gs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=Gs();return this.indexManager.getCollectionParents(e,s).next(o=>A.forEach(o,a=>{const l=function(c,u){return new Fr(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(c=>{c.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(i=>(s=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(i=>{i.forEach((a,l)=>{const c=l.getKey();s.get(c)===null&&(s=s.insert(c,nt.newInvalidDocument(c)))});let o=Gs();return s.forEach((a,l)=>{const c=i.get(a);c!==void 0&&ni(c.mutation,l,Pt.empty(),ze.now()),bh(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):A.resolve(nt.newInvalidDocument(n))}}/**
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
 */class zI{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return A.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:mn(r.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:VI(r.bundledQuery),readTime:mn(r.readTime)}}(n)),A.resolve()}}/**
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
 */class KI{constructor(){this.overlays=new We(W.comparator),this.es=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const r=wr();return A.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ue(e,n,i)}),A.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.es.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(r)),A.resolve()}getOverlaysForCollection(e,n,r){const s=wr(),i=n.length+1,o=new W(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return A.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new We((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=wr(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=wr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return A.resolve(a)}ue(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.es.get(s.largestBatchId).delete(r.key);this.es.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new FI(n,r));let i=this.es.get(n);i===void 0&&(i=he(),this.es.set(n,i)),this.es.set(n,i.add(r.key))}}/**
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
 */class Ih{constructor(){this.ns=new Ke(Ye.ss),this.rs=new Ke(Ye.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new Ye(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new W(new Ce([])),r=new Ye(n,e),s=new Ye(n,e+1),i=[];return this.rs.forEachInRange([r,s],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new W(new Ce([])),r=new Ye(n,e),s=new Ye(n,e+1);let i=he();return this.rs.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ye(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return W.comparator(e.key,n.key)||we(e._s,n._s)}static os(e,n){return we(e._s,n._s)||W.comparator(e.key,n.key)}}/**
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
 */class WI{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Ke(Ye.ss)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new LI(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.gs=this.gs.add(new Ye(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ps(r),i=s<0?0:s;return A.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),s=new Ye(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([r,s],o=>{const a=this.ys(o._s);i.push(a)}),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ke(we);return n.forEach(s=>{const i=new Ye(s,0),o=new Ye(s,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{r=r.add(a._s)})}),A.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;W.isDocumentKey(i)||(i=i.child(""));const o=new Ye(new W(i),0);let a=new Ke(we);return this.gs.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l._s)),!0)},o),A.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const s=this.ys(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ne(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return A.forEach(n.mutations,s=>{const i=new Ye(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new Ye(n,0),s=this.gs.firstAfterOrEqual(r);return A.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class GI{constructor(e){this.Es=e,this.docs=new We(W.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(n))}getEntries(e,n){let r=bn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():nt.newInvalidDocument(s))}),A.resolve(r)}getAllFromCollection(e,n,r){let s=bn();const i=new W(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||$2(F2(l),r)<=0||(s=s.insert(l.key,l.mutableCopy()))}return A.resolve(s)}getAllFromCollectionGroup(e,n,r,s){se()}As(e,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new YI(this)}getSize(e){return A.resolve(this.size)}}class YI extends jI{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Yn.addEntry(e,s)):this.Yn.removeEntry(r)}),A.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class QI{constructor(e){this.persistence=e,this.Rs=new Os(n=>dh(n),mh),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Ih,this.targetCount=0,this.vs=ys.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,s)=>n(s)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),A.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new ys(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.Dn(n),A.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),A.waitFor(i).next(()=>s)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return A.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),A.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),A.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),A.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return A.resolve(r)}containsKey(e,n){return A.resolve(this.Ps.containsKey(n))}}/**
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
 */class XI{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new uh(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new QI(this),this.indexManager=new UI,this.remoteDocumentCache=function(r){return new GI(r)}(r=>this.referenceDelegate.xs(r)),this.It=new $I(n),this.Ns=new zI(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new KI,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new WI(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const s=new JI(this.Ss.next());return this.referenceDelegate.ks(),r(s).next(i=>this.referenceDelegate.Os(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ms(e,n){return A.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class JI extends U2{constructor(e){super(),this.currentSequenceNumber=e}}class Th{constructor(e){this.persistence=e,this.Fs=new Ih,this.$s=null}static Bs(e){return new Th(e)}get Ls(){if(this.$s)return this.$s;throw se()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),A.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),A.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(s=>this.Ls.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Ls.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Ls,r=>{const s=W.fromPath(r);return this.Us(e,s).next(i=>{i||n.removeEntry(s,ce.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return A.or([()=>A.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class kh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=s}static Ci(e,n){let r=he(),s=he();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new kh(e,n.fromCache,r,s)}}/**
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
 */class ZI{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,s){return this.ki(e,n).next(i=>i||this.Oi(e,n,s,r)).next(i=>i||this.Mi(e,n))}ki(e,n){if(Od(n))return A.resolve(null);let r=vn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ba(n,null,"F"),r=vn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=he(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Fi(n,a);return this.$i(n,c,o,l.readTime)?this.ki(e,ba(n,null,"F")):this.Bi(e,c,n,l)}))})))}Oi(e,n,r,s){return Od(n)||s.isEqual(ce.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,r,s)?this.Mi(e,n):(Td()<=ve.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Wc(n)),this.Bi(e,o,n,L2(s,-1)))})}Fi(e,n){let r=new Ke(Ry(e));return n.forEach((s,i)=>{bh(e,i)&&(r=r.add(i))}),r}$i(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Mi(e,n){return Td()<=ve.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Wc(n)),this.Ni.getDocumentsMatchingQuery(e,n,Qn.min())}Bi(e,n,r,s){return this.Ni.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class eT{constructor(e,n,r,s){this.persistence=e,this.Li=n,this.It=s,this.Ui=new We(we),this.qi=new Os(i=>dh(i),mh),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qI(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function tT(t,e,n,r){return new eT(t,e,n,r)}async function Jy(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=he();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({ji:c,removedBatchIds:o,addedBatchIds:a}))})})}function nT(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let f=A.resolve();return h.forEach(m=>{f=f.next(()=>c.getEntry(a,m)).next(g=>{const v=l.docVersions.get(m);Ne(v!==null),g.version.compareTo(v)<0&&(u.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),c.addEntry(g)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=he();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Zy(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function rT(t,e){const n=ie(t),r=e.snapshotVersion;let s=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});s=n.Ui;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.Cs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,u.addedDocuments,h)));let m=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?m=m.withResumeToken(gt.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,r)),s=s.insert(h,m),function(g,v,T){return g.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(f,m,u)&&a.push(n.Cs.updateTargetData(i,m))});let l=bn(),c=he();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(sT(i,o,e.documentUpdates).next(u=>{l=u.Wi,c=u.zi})),!r.isEqual(ce.min())){const u=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return A.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.Ui=s,i))}function sT(t,e,n){let r=he(),s=he();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=bn();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(ce.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):K("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Wi:o,zi:s}})}function iT(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function oT(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Cs.getTargetData(r,e).next(i=>i?(s=i,A.resolve(s)):n.Cs.allocateTargetId(r).next(o=>(s=new xr(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ui.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function Xc(t,e,n){const r=ie(t),s=r.Ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ro(o))throw o;K("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(s.target)}function jd(t,e,n){const r=ie(t);let s=ce.min(),i=he();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=ie(a),h=u.qi.get(c);return h!==void 0?A.resolve(u.Ui.get(h)):u.Cs.getTargetData(l,c)}(r,o,vn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?s:ce.min(),n?i:he())).next(a=>(aT(r,nI(e),a),{documents:a,Hi:i})))}function aT(t,e,n){let r=t.Ki.get(e)||ce.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ki.set(e,r)}class Hd{constructor(){this.activeTargetIds=qy()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lT{constructor(){this.Lr=new Hd,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Hd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class cT{qr(e){}shutdown(){}}/**
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
 */class qd{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){K("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){K("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const uT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class hT{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class fT extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,s,i){const o=this.ho(e,n);K("RestConnection","Sending: ",o,r);const a={};return this.lo(a,s,i),this.fo(e,o,a,r).then(l=>(K("RestConnection","Received: ",l),l),l=>{throw Hc("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}_o(e,n,r,s,i,o){return this.ao(e,n,r,s,i)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ds,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}ho(e,n){const r=uT[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,s){return new Promise((i,o)=>{const a=new x2;a.setWithCredentials(!0),a.listenOnce(I2.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case tc.NO_ERROR:const c=a.getResponseJson();K("Connection","XHR received:",JSON.stringify(c)),i(c);break;case tc.TIMEOUT:K("Connection",'RPC "'+e+'" timed out'),o(new P(I.DEADLINE_EXCEEDED,"Request time out"));break;case tc.HTTP_ERROR:const u=a.getStatus();if(K("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(m){const g=m.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(g)>=0?g:I.UNKNOWN}(h.status);o(new P(f,h.message))}else o(new P(I.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new P(I.UNAVAILABLE,"Connection failed."));break;default:se()}}finally{K("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(s);a.send(n,"POST",l,r,15)})}wo(e,n,r){const s=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=_2(),o=E2(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new k2({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=s.join("");K("Connection","Creating WebChannel: "+l,a);const c=i.createWebChannel(l,a);let u=!1,h=!1;const f=new hT({Hr:g=>{h?K("Connection","Not sending because WebChannel is closed:",g):(u||(K("Connection","Opening WebChannel transport."),c.open(),u=!0),K("Connection","WebChannel sending:",g),c.send(g))},Jr:()=>c.close()}),m=(g,v,T)=>{g.listen(v,y=>{try{T(y)}catch(_){setTimeout(()=>{throw _},0)}})};return m(c,xo.EventType.OPEN,()=>{h||K("Connection","WebChannel transport opened.")}),m(c,xo.EventType.CLOSE,()=>{h||(h=!0,K("Connection","WebChannel transport closed"),f.io())}),m(c,xo.EventType.ERROR,g=>{h||(h=!0,Hc("Connection","WebChannel transport errored:",g),f.io(new P(I.UNAVAILABLE,"The operation could not be completed")))}),m(c,xo.EventType.MESSAGE,g=>{var v;if(!h){const T=g.data[0];Ne(!!T);const y=T,_=y.error||((v=y[0])===null||v===void 0?void 0:v.error);if(_){K("Connection","WebChannel received error:",_);const O=_.status;let U=function(fe){const me=je[fe];if(me!==void 0)return Uy(me)}(O),X=_.message;U===void 0&&(U=I.INTERNAL,X="Unknown error status: "+O+" with message "+_.message),h=!0,f.io(new P(U,X)),c.close()}else K("Connection","WebChannel received:",T),f.ro(T)}}),m(o,T2.STAT_EVENT,g=>{g.stat===Ed.PROXY?K("Connection","Detected buffering proxy"):g.stat===Ed.NOPROXY&&K("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function rc(){return typeof document<"u"?document:null}/**
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
 */function ml(t){return new _I(t,!0)}class ev{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=s,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),s=Math.max(0,n-r);s>0&&K("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,s,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class tv{constructor(e,n,r,s,i,o,a,l){this.Hs=e,this.vo=r,this.Vo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new ev(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(yn(n.toString()),yn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.So===n&&this.Go(r,s)},r=>{e(()=>{const s=new P(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(s)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(s=>{r(()=>this.Qo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return K("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(K("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dT extends tv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.It=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=TI(this.It,e),r=function(s){if(!("targetChange"in s))return ce.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?ce.min():i.readTime?mn(i.readTime):ce.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=Qc(this.It),n.addTarget=function(s,i){let o;const a=i.target;return o=Kc(a)?{documents:SI(s,a)}:{query:AI(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Wy(s,i.resumeToken):i.snapshotVersion.compareTo(ce.min())>0&&(o.readTime=Ea(s,i.snapshotVersion.toTimestamp())),o}(this.It,e);const r=NI(this.It,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=Qc(this.It),n.removeTarget=e,this.Bo(n)}}class mT extends tv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=xI(e.writeResults,e.commitTime),r=mn(e.commitTime);return this.listener.Zo(r,n)}return Ne(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Qc(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>kI(this.It,r))};this.Bo(n)}}/**
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
 */class pT extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.It=s,this.nu=!1}su(){if(this.nu)throw new P(I.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.ao(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new P(I.UNKNOWN,s.toString())})}_o(e,n,r,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new P(I.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class gT{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(yn(n),this.ou=!1):K("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class yT{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr(o=>{r.enqueueAndForget(async()=>{$r(this)&&(K("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ie(a);l._u.add(4),await oo(l),l.gu.set("Unknown"),l._u.delete(4),await pl(l)}(this))})}),this.gu=new gT(r,s)}}async function pl(t){if($r(t))for(const e of t.wu)await e(!0)}async function oo(t){for(const e of t.wu)await e(!1)}function nv(t,e){const n=ie(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Ah(n)?Sh(n):Ps(n).ko()&&xh(n,e))}function rv(t,e){const n=ie(t),r=Ps(n);n.du.delete(e),r.ko()&&sv(n,e),n.du.size===0&&(r.ko()?r.Fo():$r(n)&&n.gu.set("Unknown"))}function xh(t,e){t.yu.Mt(e.targetId),Ps(t).zo(e)}function sv(t,e){t.yu.Mt(e),Ps(t).Ho(e)}function Sh(t){t.yu=new vI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),Ps(t).start(),t.gu.uu()}function Ah(t){return $r(t)&&!Ps(t).No()&&t.du.size>0}function $r(t){return ie(t)._u.size===0}function iv(t){t.yu=void 0}async function vT(t){t.du.forEach((e,n)=>{xh(t,e)})}async function bT(t,e){iv(t),Ah(t)?(t.gu.hu(e),Sh(t)):t.gu.set("Unknown")}async function wT(t,e,n){if(t.gu.set("Online"),e instanceof Ky&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){K("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ia(t,r)}else if(e instanceof zo?t.yu.Gt(e):e instanceof zy?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(ce.min()))try{const r=await Zy(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.yu.te(i);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=s.du.get(l);c&&s.du.set(l,c.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const l=s.du.get(a);if(!l)return;s.du.set(a,l.withResumeToken(gt.EMPTY_BYTE_STRING,l.snapshotVersion)),sv(s,a);const c=new xr(l.target,a,1,l.sequenceNumber);xh(s,c)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){K("RemoteStore","Failed to raise snapshot:",r),await Ia(t,r)}}async function Ia(t,e,n){if(!ro(e))throw e;t._u.add(1),await oo(t),t.gu.set("Offline"),n||(n=()=>Zy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await pl(t)})}function ov(t,e){return e().catch(n=>Ia(t,n,e))}async function gl(t){const e=ie(t),n=Jn(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;_T(e);)try{const s=await iT(e.localStore,r);if(s===null){e.fu.length===0&&n.Fo();break}r=s.batchId,ET(e,s)}catch(s){await Ia(e,s)}av(e)&&lv(e)}function _T(t){return $r(t)&&t.fu.length<10}function ET(t,e){t.fu.push(e);const n=Jn(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function av(t){return $r(t)&&!Jn(t).No()&&t.fu.length>0}function lv(t){Jn(t).start()}async function IT(t){Jn(t).eu()}async function TT(t){const e=Jn(t);for(const n of t.fu)e.Xo(n.mutations)}async function kT(t,e,n){const r=t.fu.shift(),s=Eh.from(r,e,n);await ov(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await gl(t)}async function xT(t,e){e&&Jn(t).Yo&&await async function(n,r){if(s=r.code,dI(s)&&s!==I.ABORTED){const i=n.fu.shift();Jn(n).Mo(),await ov(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await gl(n)}var s}(t,e),av(t)&&lv(t)}async function zd(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),K("RemoteStore","RemoteStore received new credentials");const r=$r(n);n._u.add(3),await oo(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await pl(n)}async function ST(t,e){const n=ie(t);e?(n._u.delete(2),await pl(n)):e||(n._u.add(2),await oo(n),n.gu.set("Unknown"))}function Ps(t){return t.pu||(t.pu=function(e,n,r){const s=ie(e);return s.su(),new dT(n,s.connection,s.authCredentials,s.appCheckCredentials,s.It,r)}(t.datastore,t.asyncQueue,{Yr:vT.bind(null,t),Zr:bT.bind(null,t),Wo:wT.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Ah(t)?Sh(t):t.gu.set("Unknown")):(await t.pu.stop(),iv(t))})),t.pu}function Jn(t){return t.Iu||(t.Iu=function(e,n,r){const s=ie(e);return s.su(),new mT(n,s.connection,s.authCredentials,s.appCheckCredentials,s.It,r)}(t.datastore,t.asyncQueue,{Yr:IT.bind(null,t),Zr:xT.bind(null,t),tu:TT.bind(null,t),Zo:kT.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await gl(t)):(await t.Iu.stop(),t.fu.length>0&&(K("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class Ch{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Ch(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new P(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Nh(t,e){if(yn("AsyncQueue",`${e}: ${t}`),ro(t))return new P(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ss{constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=Gs(),this.sortedSet=new We(this.comparator)}static emptySet(e){return new ss(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ss)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ss;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Kd{constructor(){this.Tu=new We(W.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):se():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class vs{constructor(e,n,r,s,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new vs(e,n,ss.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ul(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class AT{constructor(){this.Au=void 0,this.listeners=[]}}class CT{constructor(){this.queries=new Os(e=>Ny(e),ul),this.onlineState="Unknown",this.Ru=new Set}}async function cv(t,e){const n=ie(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new AT),s)try{i.Au=await n.onListen(r)}catch(o){const a=Nh(o,`Initialization of query '${Wc(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Rh(n)}async function uv(t,e){const n=ie(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function NT(t,e){const n=ie(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(s)&&(r=!0);o.Au=s}}r&&Rh(n)}function RT(t,e,n){const r=ie(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Rh(t){t.Ru.forEach(e=>{e.next()})}class hv{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new vs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=vs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class fv{constructor(e){this.key=e}}class dv{constructor(e){this.key=e}}class DT{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=he(),this.mutatedKeys=he(),this.Gu=Ry(e),this.Qu=new ss(this.Gu)}get ju(){return this.Uu}Wu(e,n){const r=n?n.zu:new Kd,s=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),m=bh(this.query,h)?h:null,g=!!f&&this.mutatedKeys.has(f.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let T=!1;f&&m?f.data.isEqual(m.data)?g!==v&&(r.track({type:3,doc:m}),T=!0):this.Hu(f,m)||(r.track({type:2,doc:m}),T=!0,(l&&this.Gu(m,l)>0||c&&this.Gu(m,c)<0)&&(a=!0)):!f&&m?(r.track({type:0,doc:m}),T=!0):f&&!m&&(r.track({type:1,doc:f}),T=!0,(l||c)&&(a=!0)),T&&(m?(o=o.add(m),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Qu:o,zu:r,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((c,u)=>function(h,f){const m=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se()}};return m(h)-m(f)}(c.type,u.type)||this.Gu(c.doc,u.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,i.length!==0||l?{snapshot:new vs(this.query,e.Qu,s,i,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Kd,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=he(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new dv(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new fv(r))}),n}tc(e){this.Uu=e.Hi,this.Ku=he();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return vs.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class OT{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class PT{constructor(e){this.key=e,this.nc=!1}}class MT{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Os(a=>Ny(a),ul),this.rc=new Map,this.oc=new Set,this.uc=new We(W.comparator),this.cc=new Map,this.ac=new Ih,this.hc={},this.lc=new Map,this.fc=ys.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function LT(t,e){const n=KT(t);let r,s;const i=n.ic.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.ec();else{const o=await oT(n.localStore,vn(e));n.isPrimaryClient&&nv(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await FT(n,e,r,a==="current",o.resumeToken)}return s}async function FT(t,e,n,r,s){t._c=(h,f,m)=>async function(g,v,T,y){let _=v.view.Wu(T);_.$i&&(_=await jd(g.localStore,v.query,!1).then(({documents:X})=>v.view.Wu(X,_)));const O=y&&y.targetChanges.get(v.targetId),U=v.view.applyChanges(_,g.isPrimaryClient,O);return Gd(g,v.targetId,U.Xu),U.snapshot}(t,h,f,m);const i=await jd(t.localStore,e,!0),o=new DT(e,i.Hi),a=o.Wu(i.documents),l=io.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);Gd(t,n,c.Xu);const u=new OT(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),c.snapshot}async function $T(t,e){const n=ie(t),r=n.ic.get(e),s=n.rc.get(r.targetId);if(s.length>1)return n.rc.set(r.targetId,s.filter(i=>!ul(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Xc(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),rv(n.remoteStore,r.targetId),Jc(n,r.targetId)}).catch(no)):(Jc(n,r.targetId),await Xc(n.localStore,r.targetId,!0))}async function VT(t,e,n){const r=WT(t);try{const s=await function(i,o){const a=ie(i),l=ze.now(),c=o.reduce((f,m)=>f.add(m.key),he());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let m=bn(),g=he();return a.Gi.getEntries(f,c).next(v=>{m=v,m.forEach((T,y)=>{y.isValidDocument()||(g=g.add(T))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,m)).next(v=>{u=v;const T=[];for(const y of o){const _=uI(y,u.get(y.key).overlayedDocument);_!=null&&T.push(new ir(y.key,_,Ay(_.value.mapValue),qt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,T,o)}).next(v=>{h=v;const T=v.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(f,v.batchId,T)})}).then(()=>({batchId:h.batchId,changes:jy(u)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let l=i.hc[i.currentUser.toKey()];l||(l=new We(we)),l=l.insert(o,a),i.hc[i.currentUser.toKey()]=l}(r,s.batchId,n),await ao(r,s.changes),await gl(r.remoteStore)}catch(s){const i=Nh(s,"Failed to persist write");n.reject(i)}}async function mv(t,e){const n=ie(t);try{const r=await rT(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.cc.get(i);o&&(Ne(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.nc=!0:s.modifiedDocuments.size>0?Ne(o.nc):s.removedDocuments.size>0&&(Ne(o.nc),o.nc=!1))}),await ao(n,r,e)}catch(r){await no(r)}}function Wd(t,e,n){const r=ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=ie(i);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.bu(o)&&(l=!0)}),l&&Rh(a)}(r.eventManager,e),s.length&&r.sc.Wo(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function UT(t,e,n){const r=ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.cc.get(e),i=s&&s.key;if(i){let o=new We(W.comparator);o=o.insert(i,nt.newNoDocument(i,ce.min()));const a=he().add(i),l=new dl(ce.min(),new Map,new Ke(we),o,a);await mv(r,l),r.uc=r.uc.remove(i),r.cc.delete(e),Dh(r)}else await Xc(r.localStore,e,!1).then(()=>Jc(r,e,n)).catch(no)}async function BT(t,e){const n=ie(t),r=e.batch.batchId;try{const s=await nT(n.localStore,e);gv(n,r,null),pv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ao(n,s)}catch(s){await no(s)}}async function jT(t,e,n){const r=ie(t);try{const s=await function(i,o){const a=ie(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(Ne(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(r.localStore,e);gv(r,e,n),pv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ao(r,s)}catch(s){await no(s)}}function pv(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function gv(t,e,n){const r=ie(t);let s=r.hc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.hc[r.currentUser.toKey()]=s}}function Jc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||yv(t,r)})}function yv(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(rv(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Dh(t))}function Gd(t,e,n){for(const r of n)r instanceof fv?(t.ac.addReference(r.key,e),HT(t,r)):r instanceof dv?(K("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||yv(t,r.key)):se()}function HT(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(K("SyncEngine","New document in limbo: "+n),t.oc.add(r),Dh(t))}function Dh(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new W(Ce.fromString(e)),r=t.fc.next();t.cc.set(r,new PT(n)),t.uc=t.uc.insert(n,r),nv(t.remoteStore,new xr(vn(ph(n.path)),r,2,uh.at))}}async function ao(t,e,n){const r=ie(t),s=[],i=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,l)=>{o.push(r._c(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=kh.Ci(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.sc.Wo(s),await async function(a,l){const c=ie(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>A.forEach(l,h=>A.forEach(h.Si,f=>c.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>A.forEach(h.Di,f=>c.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!ro(u))throw u;K("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const f=c.Ui.get(h),m=f.snapshotVersion,g=f.withLastLimboFreeSnapshotVersion(m);c.Ui=c.Ui.insert(h,g)}}}(r.localStore,i))}async function qT(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){K("SyncEngine","User change. New user:",e.toKey());const r=await Jy(n.localStore,e);n.currentUser=e,function(s,i){s.lc.forEach(o=>{o.forEach(a=>{a.reject(new P(I.CANCELLED,i))})}),s.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ao(n,r.ji)}}function zT(t,e){const n=ie(t),r=n.cc.get(e);if(r&&r.nc)return he().add(r.key);{let s=he();const i=n.rc.get(e);if(!i)return s;for(const o of i){const a=n.ic.get(o);s=s.unionWith(a.view.ju)}return s}}function KT(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=mv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=zT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=UT.bind(null,e),e.sc.Wo=NT.bind(null,e.eventManager),e.sc.wc=RT.bind(null,e.eventManager),e}function WT(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=BT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=jT.bind(null,e),e}class GT{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=ml(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return tT(this.persistence,new ZI,e.initialUser,this.It)}yc(e){return new XI(Th.Bs,this.It)}gc(e){return new lT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class YT{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Wd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=qT.bind(null,this.syncEngine),await ST(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new CT}createDatastore(e){const n=ml(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new fT(s));var s;return function(i,o,a,l){return new pT(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>Wd(this.syncEngine,a,0),o=qd.C()?new qd:new cT,new yT(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,l,c){const u=new MT(r,s,i,o,a,l);return c&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ie(e);K("RemoteStore","RemoteStore shutting down."),n._u.add(5),await oo(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function vv(t,e,n){if(!n)throw new P(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function QT(t,e,n,r){if(e===!0&&r===!0)throw new P(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Yd(t){if(!W.isDocumentKey(t))throw new P(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Qd(t){if(W.isDocumentKey(t))throw new P(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function yl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":se()}function wn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new P(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=yl(t);throw new P(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function XT(t,e){if(e<=0)throw new P(I.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */const Xd=new Map;class Jd{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new P(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new P(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,QT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class vl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new P(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new P(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jd(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new S2;switch(n.type){case"gapi":const r=n.client;return new R2(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new P(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Xd.get(e);n&&(K("ComponentProvider","Removing Datastore"),Xd.delete(e),n.terminate())}(this),Promise.resolve()}}function JT(t,e,n,r={}){var s;const i=(t=wn(t,vl))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Hc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=lt.MOCK_USER;else{o=u_(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new P(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new lt(l)}t._authCredentials=new A2(new Ty(o,a))}}/**
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
 */class Tt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tt(this.firestore,e,this._key)}}class or{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new or(this.firestore,e,this._query)}}class Wn extends or{constructor(e,n,r){super(e,n,ph(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new W(e))}withConverter(e){return new Wn(this.firestore,e,this._path)}}function bs(t,e,...n){if(t=ot(t),vv("collection","path",e),t instanceof vl){const r=Ce.fromString(e,...n);return Qd(r),new Wn(t,null,r)}{if(!(t instanceof Tt||t instanceof Wn))throw new P(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return Qd(r),new Wn(t.firestore,null,r)}}function si(t,e,...n){if(t=ot(t),arguments.length===1&&(e=ky.R()),vv("doc","path",e),t instanceof vl){const r=Ce.fromString(e,...n);return Yd(r),new Tt(t,null,new W(r))}{if(!(t instanceof Tt||t instanceof Wn))throw new P(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return Yd(r),new Tt(t.firestore,t instanceof Wn?t.converter:null,new W(r))}}/**
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
 */class bv{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):yn("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class ZT{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=lt.UNAUTHENTICATED,this.clientId=ky.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{K("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(K("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new P(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Nh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ek(t,e){t.asyncQueue.verifyOperationInProgress(),K("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Jy(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function tk(t,e){t.asyncQueue.verifyOperationInProgress();const n=await nk(t);K("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>zd(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>zd(e.remoteStore,i)),t.onlineComponents=e}async function nk(t){return t.offlineComponents||(K("FirestoreClient","Using default OfflineComponentProvider"),await ek(t,new GT)),t.offlineComponents}async function wv(t){return t.onlineComponents||(K("FirestoreClient","Using default OnlineComponentProvider"),await tk(t,new YT)),t.onlineComponents}function rk(t){return wv(t).then(e=>e.syncEngine)}async function _v(t){const e=await wv(t),n=e.eventManager;return n.onListen=LT.bind(null,e.syncEngine),n.onUnlisten=$T.bind(null,e.syncEngine),n}function sk(t,e,n={}){const r=new dn;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,l){const c=new bv({next:h=>{i.enqueueAndForget(()=>uv(s,u));const f=h.docs.has(o);!f&&h.fromCache?l.reject(new P(I.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?l.reject(new P(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new hv(ph(o.path),c,{includeMetadataChanges:!0,Nu:!0});return cv(s,u)}(await _v(t),t.asyncQueue,e,n,r)),r.promise}function ik(t,e,n={}){const r=new dn;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,l){const c=new bv({next:h=>{i.enqueueAndForget(()=>uv(s,u)),h.fromCache&&a.source==="server"?l.reject(new P(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new hv(o,c,{includeMetadataChanges:!0,Nu:!0});return cv(s,u)}(await _v(t),t.asyncQueue,e,n,r)),r.promise}class ok{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new ev(this,"async_queue_retry"),this.Wc=()=>{const n=rc();n&&K("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=rc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=rc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new dn;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!ro(e))throw e;K("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw yn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const s=Ch.createAndSchedule(this,e,n,r,i=>this.Yc(i));return this.qc.push(s),s}zc(){this.Kc&&se()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}class Ms extends vl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new ok,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ev(this),this._firestoreClient.terminate()}}function ak(t,e){const n=typeof t=="object"?t:bg(),r=typeof t=="string"?t:e||"(default)",s=Bu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=a_("firestore");i&&JT(s,...i)}return s}function Oh(t){return t._firestoreClient||Ev(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ev(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new j2(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new ZT(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 */class ws{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ws(gt.fromBase64String(e))}catch(n){throw new P(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ws(gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class bl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new P(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ph{constructor(e){this._methodName=e}}/**
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
 */class Mh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new P(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new P(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
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
 */const lk=/^__.*__$/;class ck{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ir(e,this.data,this.fieldMask,n,this.fieldTransforms):new so(e,this.data,n,this.fieldTransforms)}}class Iv{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ir(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Tv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se()}}class Lh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=s,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Lh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ia({path:r,oa:!1});return s.ua(e),s}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ia({path:r,oa:!1});return s.na(),s}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Ta(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Tv(this.sa)&&lk.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class uk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||ml(e)}da(e,n,r,s=!1){return new Lh({sa:e,methodName:n,fa:r,path:ut.emptyPath(),oa:!1,la:s},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function wl(t){const e=t._freezeSettings(),n=ml(t._databaseId);return new uk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hk(t,e,n,r,s,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,s);Fh("Data must be an object, but it was:",o,r);const a=xv(r,o);let l,c;if(i.merge)l=new Pt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=Zc(e,h,n);if(!o.contains(f))throw new P(I.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Av(u,f)||u.push(f)}l=new Pt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new ck(new It(a),l,c)}class _l extends Ph{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof _l}}function fk(t,e,n,r){const s=t.da(1,e,n);Fh("Data must be an object, but it was:",s,r);const i=[],o=It.empty();Lr(r,(l,c)=>{const u=$h(e,l,n);c=ot(c);const h=s.ca(u);if(c instanceof _l)i.push(u);else{const f=lo(c,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new Pt(i);return new Iv(o,a,s.fieldTransforms)}function dk(t,e,n,r,s,i){const o=t.da(1,e,n),a=[Zc(e,r,n)],l=[s];if(i.length%2!=0)throw new P(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Zc(e,i[f])),l.push(i[f+1]);const c=[],u=It.empty();for(let f=a.length-1;f>=0;--f)if(!Av(c,a[f])){const m=a[f];let g=l[f];g=ot(g);const v=o.ca(m);if(g instanceof _l)c.push(m);else{const T=lo(g,v);T!=null&&(c.push(m),u.set(m,T))}}const h=new Pt(c);return new Iv(u,h,o.fieldTransforms)}function kv(t,e,n,r=!1){return lo(n,t.da(r?4:3,e))}function lo(t,e){if(Sv(t=ot(t)))return Fh("Unsupported field value:",e,t),xv(t,e);if(t instanceof Ph)return function(n,r){if(!Tv(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=lo(o,r.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=ot(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return sI(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=ze.fromDate(n);return{timestampValue:Ea(r.It,s)}}if(n instanceof ze){const s=new ze(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ea(r.It,s)}}if(n instanceof Mh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ws)return{bytesValue:Wy(r.It,n._byteString)};if(n instanceof Tt){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:_h(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${yl(n)}`)}(t,e)}function xv(t,e){const n={};return xy(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Lr(t,(r,s)=>{const i=lo(s,e.ra(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Sv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ze||t instanceof Mh||t instanceof ws||t instanceof Tt||t instanceof Ph)}function Fh(t,e,n){if(!Sv(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=yl(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function Zc(t,e,n){if((e=ot(e))instanceof bl)return e._internalPath;if(typeof e=="string")return $h(t,e);throw Ta("Field path arguments must be of type string or ",t,!1,void 0,n)}const mk=new RegExp("[~\\*/\\[\\]]");function $h(t,e,n){if(e.search(mk)>=0)throw Ta(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new bl(...e.split("."))._internalPath}catch{throw Ta(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ta(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new P(I.INVALID_ARGUMENT,a+t+l)}function Av(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Vh{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(El("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class pk extends Vh{data(){return super.data()}}function El(t,e){return typeof e=="string"?$h(t,e):e instanceof bl?e._internalPath:e._delegate._internalPath}/**
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
 */function gk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new P(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Il{}function _s(t,...e){for(const n of e)t=n._apply(t);return t}class yk extends Il{constructor(e,n,r){super(),this.ma=e,this.ga=n,this.ya=r,this.type="where"}_apply(e){const n=wl(e.firestore),r=function(s,i,o,a,l,c,u){let h;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new P(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){em(u,c);const m=[];for(const g of u)m.push(Zd(a,s,g));h={arrayValue:{values:m}}}else h=Zd(a,s,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||em(u,c),h=kv(o,i,u,c==="in"||c==="not-in");const f=bt.create(l,c,h);return function(m,g){if(g.dt()){const T=yh(m);if(T!==null&&!T.isEqual(g.field))throw new P(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${T.toString()}' and '${g.field.toString()}'`);const y=gh(m);y!==null&&Cv(m,g.field,y)}const v=function(T,y){for(const _ of T.filters)if(y.indexOf(_.op)>=0)return _.op;return null}(m,function(T){switch(T){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(g.op));if(v!==null)throw v===g.op?new P(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${g.op.toString()}' filter.`):new P(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${g.op.toString()}' filters with '${v.toString()}' filters.`)}(s,f),f}(e._query,"where",n,e.firestore._databaseId,this.ma,this.ga,this.ya);return new or(e.firestore,e.converter,function(s,i){const o=s.filters.concat([i]);return new Fr(s.path,s.collectionGroup,s.explicitOrderBy.slice(),o,s.limit,s.limitType,s.startAt,s.endAt)}(e._query,r))}}function Ci(t,e,n){const r=e,s=El("where",t);return new yk(s,r,n)}class vk extends Il{constructor(e,n){super(),this.ma=e,this.pa=n,this.type="orderBy"}_apply(e){const n=function(r,s,i){if(r.startAt!==null)throw new P(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new P(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new rs(s,i);return function(a,l){if(gh(a)===null){const c=yh(a);c!==null&&Cv(a,c,l.field)}}(r,o),o}(e._query,this.ma,this.pa);return new or(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new Fr(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function ka(t,e="asc"){const n=e,r=El("orderBy",t);return new vk(r,n)}class bk extends Il{constructor(e,n,r){super(),this.type=e,this.Ia=n,this.Ta=r}_apply(e){return new or(e.firestore,e.converter,ba(e._query,this.Ia,this.Ta))}}function eu(t){return XT("limit",t),new bk("limit",t,"F")}class wk extends Il{constructor(e,n,r){super(),this.type=e,this.Ea=n,this.Aa=r}_apply(e){const n=Ek(e,this.type,this.Ea,this.Aa);return new or(e.firestore,e.converter,function(r,s){return new Fr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,s,r.endAt)}(e._query,n))}}function _k(...t){return new wk("startAfter",t,!1)}function Ek(t,e,n,r){if(n[0]=ot(n[0]),n[0]instanceof Vh)return function(s,i,o,a,l){if(!a)throw new P(I.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const c=[];for(const u of gs(s))if(u.field.isKeyField())c.push(va(i,a.key));else{const h=a.data.field(u.field);if(hh(h))throw new P(I.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+u.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const f=u.field.canonicalString();throw new P(I.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}c.push(h)}return new ps(c,l)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const s=wl(t.firestore);return function(i,o,a,l,c,u){const h=i.explicitOrderBy;if(c.length>h.length)throw new P(I.INVALID_ARGUMENT,`Too many arguments provided to ${l}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let m=0;m<c.length;m++){const g=c[m];if(h[m].field.isKeyField()){if(typeof g!="string")throw new P(I.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${l}(), but got a ${typeof g}`);if(!vh(i)&&g.indexOf("/")!==-1)throw new P(I.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${l}() must be a plain document ID, but '${g}' contains a slash.`);const v=i.path.child(Ce.fromString(g));if(!W.isDocumentKey(v))throw new P(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${l}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const T=new W(v);f.push(va(o,T))}else{const v=kv(a,l,g);f.push(v)}}return new ps(f,u)}(t._query,t.firestore._databaseId,s,e,n,r)}}function Zd(t,e,n){if(typeof(n=ot(n))=="string"){if(n==="")throw new P(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!vh(e)&&n.indexOf("/")!==-1)throw new P(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ce.fromString(n));if(!W.isDocumentKey(r))throw new P(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return va(t,new W(r))}if(n instanceof Tt)return va(t,n._key);throw new P(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${yl(n)}.`)}function em(t,e){if(!Array.isArray(t)||t.length===0)throw new P(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new P(I.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Cv(t,e,n){if(!n.isEqual(e))throw new P(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class Ik{convertValue(e,n="none"){switch(Rr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ds(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw se()}}convertObject(e,n){const r={};return Lr(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Mh(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Sy(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ti(e));default:return null}}convertTimestamp(e){const n=Xn(e);return new ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ce.fromString(e);Ne(Xy(r));const s=new ki(r.get(1),r.get(3)),i=new W(r.popFirst(5));return s.isEqual(n)||yn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Tk(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Ys{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Nv extends Vh{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ko(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(El("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ko extends Nv{data(e={}){return super.data(e)}}class kk{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ys(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ko(this._firestore,this._userDataWriter,r.key,r,new Ys(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new P(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>{const a=new Ko(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ys(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Ko(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ys(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,c=-1;return o.type!==0&&(l=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),c=i.indexOf(o.doc.key)),{type:xk(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function xk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return se()}}/**
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
 */function Uh(t){t=wn(t,Tt);const e=wn(t.firestore,Ms);return sk(Oh(e),t._key).then(n=>Ak(e,t,n))}class Rv extends Ik{constructor(e){super(),this.firestore=e}convertBytes(e){return new ws(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,n)}}function Es(t){t=wn(t,or);const e=wn(t.firestore,Ms),n=Oh(e),r=new Rv(e);return gk(t._query),ik(n,t._query).then(s=>new kk(e,r,t,s))}function tm(t,e,n,...r){t=wn(t,Tt);const s=wn(t.firestore,Ms),i=wl(s);let o;return o=typeof(e=ot(e))=="string"||e instanceof bl?dk(i,"updateDoc",t._key,e,n,r):fk(i,"updateDoc",t._key,e),Bh(s,[o.toMutation(t._key,qt.exists(!0))])}function Sk(t){return Bh(wn(t.firestore,Ms),[new wh(t._key,qt.none())])}function Dv(t,e){const n=wn(t.firestore,Ms),r=si(t),s=Tk(t.converter,e);return Bh(n,[hk(wl(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,qt.exists(!1))]).then(()=>r)}function Bh(t,e){return function(n,r){const s=new dn;return n.asyncQueue.enqueueAndForget(async()=>VT(await rk(n),r,s)),s.promise}(Oh(t),e)}function Ak(t,e,n){const r=n.docs.get(e._key),s=new Rv(t);return new Nv(t,s,e._key,r,new Ys(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Ds=n})(Ki),us(new Ar("firestore",(n,{instanceIdentifier:r,options:s})=>{const i=n.getProvider("app").getImmediate(),o=new Ms(new C2(n.getProvider("auth-internal")),new O2(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new P(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ki(a.options.projectId,l)}(i,r),i);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),Kn(Id,"3.7.2",t),Kn(Id,"3.7.2","esm2017")})();function jh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Ov(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ck=Ov,Pv=new qi("auth","Firebase",Ov());/**
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
 */const nm=new Vu("@firebase/auth");function Wo(t,...e){nm.logLevel<=ve.ERROR&&nm.error(`Auth (${Ki}): ${t}`,...e)}/**
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
 */function Kt(t,...e){throw Hh(t,...e)}function nn(t,...e){return Hh(t,...e)}function Nk(t,e,n){const r=Object.assign(Object.assign({},Ck()),{[e]:n});return new qi("auth","Firebase",r).create(e,{appName:t.name})}function Hh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Pv.create(t,...e)}function Z(t,e,...n){if(!t)throw Hh(e,...n)}function hn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wo(e),new Error(e)}function _n(t,e){t||hn(e)}/**
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
 */const rm=new Map;function fn(t){_n(t instanceof Function,"Expected a class definition");let e=rm.get(t);return e?(_n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,rm.set(t,e),e)}/**
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
 */function Rk(t,e){const n=Bu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(aa(i,e!=null?e:{}))return s;Kt(s,"already-initialized")}return n.initialize({options:e})}function Dk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function tu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ok(){return sm()==="http:"||sm()==="https:"}function sm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Pk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ok()||Jw()||"connection"in navigator)?navigator.onLine:!0}function Mk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class co{constructor(e,n){this.shortDelay=e,this.longDelay=n,_n(n>e,"Short delay should be less than long delay!"),this.isMobile=Xw()||Zw()}get(){return Pk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function qh(t,e){_n(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Mv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Lk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Fk=new co(3e4,6e4);function Tl(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function uo(t,e,n,r,s={}){return Lv(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=zi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Mv.fetch()(Fv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Lv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Lk),e);try{const s=new $k(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Co(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Co(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Co(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Co(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Nk(t,u,c);Kt(t,u)}}catch(s){if(s instanceof xn)throw s;Kt(t,"network-request-failed")}}async function kl(t,e,n,r,s={}){const i=await uo(t,e,n,r,s);return"mfaPendingCredential"in i&&Kt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Fv(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?qh(t.config,s):`${t.config.apiScheme}://${s}`}class $k{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nn(this.auth,"network-request-failed")),Fk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Co(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=nn(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function Vk(t,e){return uo(t,"POST","/v1/accounts:delete",e)}async function Uk(t,e){return uo(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ii(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Bk(t,e=!1){const n=ot(t),r=await n.getIdToken(e),s=zh(r);Z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ii(sc(s.auth_time)),issuedAtTime:ii(sc(s.iat)),expirationTime:ii(sc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function sc(t){return Number(t)*1e3}function zh(t){var e;const[n,r,s]=t.split(".");if(n===void 0||r===void 0||s===void 0)return Wo("JWT malformed, contained fewer than 3 sections"),null;try{const i=dg(r);return i?JSON.parse(i):(Wo("Failed to decode base64 JWT payload"),null)}catch(i){return Wo("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function jk(t){const e=zh(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ni(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xn&&Hk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Hk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class qk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class $v{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ii(this.lastLoginAt),this.creationTime=ii(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xa(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ni(t,Uk(n,{idToken:r}));Z(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Wk(i.providerUserInfo):[],a=Kk(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new $v(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function zk(t){const e=ot(t);await xa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Kk(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Wk(t){return t.map(e=>{var{providerId:n}=e,r=jh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Gk(t,e){const n=await Lv(t,{},async()=>{const r=zi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Fv(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Mv.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ri{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Gk(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ri;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ri,this.toJSON())}_performRefresh(){return hn("not implemented")}}/**
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
 */function Dn(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Sr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=jh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new $v(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ni(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Bk(this,e)}reload(){return zk(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Sr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await xa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ni(this,Vk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,y=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:O,emailVerified:U,isAnonymous:X,providerData:fe,stsTokenManager:me}=n;Z(O&&me,e,"internal-error");const ee=Ri.fromJSON(this.name,me);Z(typeof O=="string",e,"internal-error"),Dn(h,e.name),Dn(f,e.name),Z(typeof U=="boolean",e,"internal-error"),Z(typeof X=="boolean",e,"internal-error"),Dn(m,e.name),Dn(g,e.name),Dn(v,e.name),Dn(T,e.name),Dn(y,e.name),Dn(_,e.name);const ae=new Sr({uid:O,auth:e,email:f,emailVerified:U,displayName:h,isAnonymous:X,photoURL:g,phoneNumber:m,tenantId:v,stsTokenManager:ee,createdAt:y,lastLoginAt:_});return fe&&Array.isArray(fe)&&(ae.providerData=fe.map(ye=>Object.assign({},ye))),T&&(ae._redirectEventId=T),ae}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ri;s.updateFromServerResponse(n);const i=new Sr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await xa(i),i}}/**
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
 */class Vv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Vv.type="NONE";const im=Vv;/**
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
 */function Go(t,e,n){return`firebase:${t}:${e}:${n}`}class is{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Go(this.userKey,s.apiKey,i),this.fullPersistenceKey=Go("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Sr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new is(fn(im),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||fn(im);const o=Go(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Sr._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new is(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new is(i,e,r))}}/**
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
 */function om(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Uv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qv(e))return"Blackberry";if(zv(e))return"Webos";if(Kh(e))return"Safari";if((e.includes("chrome/")||Bv(e))&&!e.includes("edge/"))return"Chrome";if(Hv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Uv(t=pt()){return/firefox\//i.test(t)}function Kh(t=pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Bv(t=pt()){return/crios\//i.test(t)}function jv(t=pt()){return/iemobile/i.test(t)}function Hv(t=pt()){return/android/i.test(t)}function qv(t=pt()){return/blackberry/i.test(t)}function zv(t=pt()){return/webos/i.test(t)}function xl(t=pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Yk(t=pt()){var e;return xl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Qk(){return e_()&&document.documentMode===10}function Kv(t=pt()){return xl(t)||Hv(t)||zv(t)||qv(t)||/windows phone/i.test(t)||jv(t)}function Xk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Wv(t,e=[]){let n;switch(t){case"Browser":n=om(pt());break;case"Worker":n=`${om(pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ki}/${r}`}/**
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
 */class Jk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
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
 */class Zk{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new am(this),this.idTokenSubscription=new am(this),this.beforeStateQueue=new Jk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pv,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await is.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await xa(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Mk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ot(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(fn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fn(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await is.create(this,[fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Z(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Sl(t){return ot(t)}class am{constructor(e){this.auth=e,this.observer=null,this.addObserver=p_(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ex(t,e,n){const r=Sl(t);Z(r._canInitEmulator,r,"emulator-config-failed"),Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Gv(e),{host:o,port:a}=tx(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||nx()}function Gv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function tx(t){const e=Gv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:lm(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:lm(o)}}}function lm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function nx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Wh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return hn("not implemented")}_getIdTokenResponse(e){return hn("not implemented")}_linkToIdToken(e,n){return hn("not implemented")}_getReauthenticationResolver(e){return hn("not implemented")}}async function rx(t,e){return uo(t,"POST","/v1/accounts:update",e)}/**
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
 */async function sx(t,e){return kl(t,"POST","/v1/accounts:signInWithPassword",Tl(t,e))}/**
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
 */async function ix(t,e){return kl(t,"POST","/v1/accounts:signInWithEmailLink",Tl(t,e))}async function ox(t,e){return kl(t,"POST","/v1/accounts:signInWithEmailLink",Tl(t,e))}/**
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
 */class Di extends Wh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Di(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Di(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return sx(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ix(e,{email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return rx(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ox(e,{idToken:n,email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function os(t,e){return kl(t,"POST","/v1/accounts:signInWithIdp",Tl(t,e))}/**
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
 */const ax="http://localhost";class Dr extends Wh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Dr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=jh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Dr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return os(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,os(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,os(e,n)}buildRequest(){const e={requestUri:ax,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zi(n)}return e}}/**
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
 */function lx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function cx(t){const e=qs(zs(t)).link,n=e?qs(zs(e)).deep_link_id:null,r=qs(zs(t)).deep_link_id;return(r?qs(zs(r)).link:null)||r||n||e||t}class Gh{constructor(e){var n,r,s,i,o,a;const l=qs(zs(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,h=lx((s=l.mode)!==null&&s!==void 0?s:null);Z(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=cx(e);try{return new Gh(n)}catch{return null}}}/**
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
 */class Ls{constructor(){this.providerId=Ls.PROVIDER_ID}static credential(e,n){return Di._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Gh.parseLink(n);return Z(r,"argument-error"),Di._fromEmailAndCode(e,r.code,r.tenantId)}}Ls.PROVIDER_ID="password";Ls.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ls.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Yv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ho extends Yv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Fn extends ho{constructor(){super("facebook.com")}static credential(e){return Dr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fn.PROVIDER_ID="facebook.com";/**
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
 */class $n extends ho{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Dr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return $n.credential(n,r)}catch{return null}}}$n.GOOGLE_SIGN_IN_METHOD="google.com";$n.PROVIDER_ID="google.com";/**
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
 */class Vn extends ho{constructor(){super("github.com")}static credential(e){return Dr._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vn.credential(e.oauthAccessToken)}catch{return null}}}Vn.GITHUB_SIGN_IN_METHOD="github.com";Vn.PROVIDER_ID="github.com";/**
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
 */class Un extends ho{constructor(){super("twitter.com")}static credential(e,n){return Dr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Un.credential(n,r)}catch{return null}}}Un.TWITTER_SIGN_IN_METHOD="twitter.com";Un.PROVIDER_ID="twitter.com";/**
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
 */class Is{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Sr._fromIdTokenResponse(e,r,s),o=cm(r);return new Is({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=cm(r);return new Is({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function cm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Sa extends xn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Sa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Sa(e,n,r,s)}}function Qv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Sa._fromErrorAndOperation(t,i,e,r):i})}async function ux(t,e,n=!1){const r=await Ni(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Is._forOperation(t,"link",r)}/**
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
 */async function hx(t,e,n=!1){var r;const{auth:s}=t,i="reauthenticate";try{const o=await Ni(t,Qv(s,i,e,t),n);Z(o.idToken,s,"internal-error");const a=zh(o.idToken);Z(a,s,"internal-error");const{sub:l}=a;return Z(t.uid===l,s,"user-mismatch"),Is._forOperation(t,i,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Kt(s,"user-mismatch"),o}}/**
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
 */async function Xv(t,e,n=!1){const r="signIn",s=await Qv(t,r,e),i=await Is._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function fx(t,e){return Xv(Sl(t),e)}function dx(t,e,n){return fx(ot(t),Ls.credential(e,n))}function mx(t,e,n,r){return ot(t).onIdTokenChanged(e,n,r)}function px(t,e,n){return ot(t).beforeAuthStateChanged(e,n)}const Aa="__sak";/**
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
 */class Jv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Aa,"1"),this.storage.removeItem(Aa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function gx(){const t=pt();return Kh(t)||xl(t)}const yx=1e3,vx=10;class Zv extends Jv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=gx()&&Xk(),this.fallbackToPolling=Kv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Qk()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,vx):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},yx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zv.type="LOCAL";const bx=Zv;/**
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
 */class e0 extends Jv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}e0.type="SESSION";const t0=e0;/**
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
 */function wx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Al{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Al(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await wx(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Al.receivers=[];/**
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
 */function Yh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class _x{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Yh("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function rn(){return window}function Ex(t){rn().location.href=t}/**
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
 */function n0(){return typeof rn().WorkerGlobalScope<"u"&&typeof rn().importScripts=="function"}async function Ix(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Tx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function kx(){return n0()?self:null}/**
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
 */const r0="firebaseLocalStorageDb",xx=1,Ca="firebaseLocalStorage",s0="fbase_key";class fo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Cl(t,e){return t.transaction([Ca],e?"readwrite":"readonly").objectStore(Ca)}function Sx(){const t=indexedDB.deleteDatabase(r0);return new fo(t).toPromise()}function nu(){const t=indexedDB.open(r0,xx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ca,{keyPath:s0})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ca)?e(r):(r.close(),await Sx(),e(await nu()))})})}async function um(t,e,n){const r=Cl(t,!0).put({[s0]:e,value:n});return new fo(r).toPromise()}async function Ax(t,e){const n=Cl(t,!1).get(e),r=await new fo(n).toPromise();return r===void 0?null:r.value}function hm(t,e){const n=Cl(t,!0).delete(e);return new fo(n).toPromise()}const Cx=800,Nx=3;class i0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Nx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return n0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Al._getInstance(kx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ix(),!this.activeServiceWorker)return;this.sender=new _x(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Tx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nu();return await um(e,Aa,"1"),await hm(e,Aa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>um(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ax(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>hm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Cl(s,!1).getAll();return new fo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Cx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}i0.type="LOCAL";const Rx=i0;/**
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
 */function Dx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ox(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=nn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Dx().appendChild(r)})}function Px(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new co(3e4,6e4);/**
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
 */function Mx(t,e){return e?fn(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Qh extends Wh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return os(e,this._buildIdpRequest())}_linkToIdToken(e,n){return os(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return os(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Lx(t){return Xv(t.auth,new Qh(t),t.bypassAuthState)}function Fx(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),hx(n,new Qh(t),t.bypassAuthState)}async function $x(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),ux(n,new Qh(t),t.bypassAuthState)}/**
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
 */class o0{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Lx;case"linkViaPopup":case"linkViaRedirect":return $x;case"reauthViaPopup":case"reauthViaRedirect":return Fx;default:Kt(this.auth,"internal-error")}}resolve(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Vx=new co(2e3,1e4);class Gr extends o0{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Gr.currentPopupAction&&Gr.currentPopupAction.cancel(),Gr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){_n(this.filter.length===1,"Popup operations only handle one event");const e=Yh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Vx.get())};e()}}Gr.currentPopupAction=null;/**
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
 */const Ux="pendingRedirect",Yo=new Map;class Bx extends o0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Yo.get(this.auth._key());if(!e){try{const r=await jx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Yo.set(this.auth._key(),e)}return this.bypassAuthState||Yo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jx(t,e){const n=zx(e),r=qx(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Hx(t,e){Yo.set(t._key(),e)}function qx(t){return fn(t._redirectPersistence)}function zx(t){return Go(Ux,t.config.apiKey,t.name)}async function Kx(t,e,n=!1){const r=Sl(t),s=Mx(r,e),o=await new Bx(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Wx=10*60*1e3;class Gx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Yx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!a0(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Wx&&this.cachedEventUids.clear(),this.cachedEventUids.has(fm(e))}saveEventToCache(e){this.cachedEventUids.add(fm(e)),this.lastProcessedEventTime=Date.now()}}function fm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function a0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Yx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return a0(t);default:return!1}}/**
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
 */async function Qx(t,e={}){return uo(t,"GET","/v1/projects",e)}/**
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
 */const Xx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Jx=/^https?/;async function Zx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Qx(t);for(const n of e)try{if(eS(n))return}catch{}Kt(t,"unauthorized-domain")}function eS(t){const e=tu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Jx.test(n))return!1;if(Xx.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const tS=new co(3e4,6e4);function dm(){const t=rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function nS(t){return new Promise((e,n)=>{var r,s,i;function o(){dm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dm(),n(nn(t,"network-request-failed"))},timeout:tS.get()})}if(!((s=(r=rn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=rn().gapi)===null||i===void 0)&&i.load)o();else{const a=Px("iframefcb");return rn()[a]=()=>{gapi.load?o():n(nn(t,"network-request-failed"))},Ox(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Qo=null,e})}let Qo=null;function rS(t){return Qo=Qo||nS(t),Qo}/**
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
 */const sS=new co(5e3,15e3),iS="__/auth/iframe",oS="emulator/auth/iframe",aS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cS(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?qh(e,oS):`https://${t.config.authDomain}/${iS}`,r={apiKey:e.apiKey,appName:t.name,v:Ki},s=lS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${zi(r).slice(1)}`}async function uS(t){const e=await rS(t),n=rn().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:cS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:aS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=nn(t,"network-request-failed"),a=rn().setTimeout(()=>{i(o)},sS.get());function l(){rn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const hS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fS=500,dS=600,mS="_blank",pS="http://localhost";class mm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gS(t,e,n,r=fS,s=dS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},hS),{width:r.toString(),height:s.toString(),top:i,left:o}),c=pt().toLowerCase();n&&(a=Bv(c)?mS:n),Uv(c)&&(e=e||pS,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[m,g])=>`${f}${m}=${g},`,"");if(Yk(c)&&a!=="_self")return yS(e||"",a),new mm(null);const h=window.open(e||"",a,u);Z(h,t,"popup-blocked");try{h.focus()}catch{}return new mm(h)}function yS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const vS="__/auth/handler",bS="emulator/auth/handler";function pm(t,e,n,r,s,i){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ki,eventId:s};if(e instanceof Yv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",m_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(i||{}))o[l]=c}if(e instanceof ho){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${wS(t)}?${zi(a).slice(1)}`}function wS({config:t}){return t.emulator?qh(t,bS):`https://${t.authDomain}/${vS}`}/**
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
 */const ic="webStorageSupport";class _S{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=t0,this._completeRedirectFn=Kx,this._overrideRedirectResult=Hx}async _openPopup(e,n,r,s){var i;_n((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=pm(e,n,r,tu(),s);return gS(e,o,Yh())}async _openRedirect(e,n,r,s){return await this._originValidation(e),Ex(pm(e,n,r,tu(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(_n(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await uS(e),r=new Gx(e);return n.register("authEvent",s=>(Z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ic,{type:ic},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ic];o!==void 0&&n(!!o),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Zx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Kv()||Kh()||xl()}}const ES=_S;var gm="@firebase/auth",ym="0.20.11";/**
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
 */class IS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function TS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function kS(t){us(new Ar("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,l)=>{Z(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),Z(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wv(t)},u=new Zk(a,l,c);return Dk(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),us(new Ar("auth-internal",e=>{const n=Sl(e.getProvider("auth").getImmediate());return(r=>new IS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kn(gm,ym,TS(t)),Kn(gm,ym,"esm2017")}/**
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
 */const xS=5*60,SS=pg("authIdTokenMaxAge")||xS;let vm=null;const AS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>SS)return;const s=n==null?void 0:n.token;vm!==s&&(vm=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function CS(t=bg()){const e=Bu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Rk(t,{popupRedirectResolver:ES,persistence:[Rx,bx,t0]}),r=pg("authTokenSyncURL");if(r){const i=AS(r);px(n,i,()=>i(n.currentUser)),mx(n,o=>i(o))}const s=mg("auth");return s&&ex(n,`http://${s}`),n}kS("Browser");const NS={apiKey:"AIzaSyA4C0hNEK3tgE6bTD2VqY1u4VRtjj0HZV0",authDomain:"vuejspractice-e2169.firebaseapp.com",projectId:"vuejspractice-e2169",storageBucket:"vuejspractice-e2169.appspot.com",messagingSenderId:"431420928789",appId:"1:431420928789:web:1b161f009d3f9a58ebaf1c"},l0=vg(NS),Oi=CS(l0),sn=ak(l0),RS={name:"App",components:{NavigationBar:jw,AlertDialog:ug},data(){return{isAuthenticated:!1,showingModal:!1}},beforeMount(){Oi.onAuthStateChanged(t=>{this.isAuthenticated=t!=null})},methods:{logout(){Oi.signOut(),this.$router.push("/login"),this.showingModal=!1},showModal(){this.showingModal=!0},closeModal(){this.showingModal=!1}}},DS={class:"h-screen"},OS=b("div",{class:"text-center bg-gradient-to-tl from-emerald-500 to-teal-500 py-20 h-80"},[b("h1",{class:"uppercase font-bold text-3xl text-white"},"rencana rakit pc"),b("h4",{class:"text-gray-50 py-2 leading-5 text-xl font-light tracking-wider"},"Bikin Rencana Rakitan PC Terbaikmu! ")],-1),PS={class:"mx-auto shadow-xl h-2/3 w-11/12 md:w-4/5 lg:w-3/5 xl:w-1/2 -mt-24 bg-white rounded-lg overflow-hidden flex flex-col"},MS={class:"flex-1 overflow-hidden"};function LS(t,e,n,r,s,i){const o=J("router-view"),a=J("NavigationBar"),l=J("AlertDialog");return F(),z("div",DS,[OS,b("div",PS,[b("div",MS,[D(o)]),D(a,{"is-hide":!s.isAuthenticated,onLogout:e[0]||(e[0]=c=>i.showModal())},null,8,["is-hide"])]),D(l,{message:"Anda yakin ingin logout?",showing:s.showingModal,onClose:e[1]||(e[1]=c=>i.closeModal()),onYes:e[2]||(e[2]=c=>i.logout())},null,8,["showing"])])}const FS=xe(RS,[["render",LS]]);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const zr=typeof window<"u";function $S(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const _e=Object.assign;function oc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Wt(s)?s.map(t):t(s)}return n}const oi=()=>{},Wt=Array.isArray,VS=/\/$/,US=t=>t.replace(VS,"");function ac(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=qS(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function BS(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function bm(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function jS(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ts(e.matched[r],n.matched[s])&&c0(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ts(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function c0(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!HS(t[n],e[n]))return!1;return!0}function HS(t,e){return Wt(t)?wm(t,e):Wt(e)?wm(e,t):t===e}function wm(t,e){return Wt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function qS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Pi;(function(t){t.pop="pop",t.push="push"})(Pi||(Pi={}));var ai;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ai||(ai={}));function zS(t){if(!t)if(zr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),US(t)}const KS=/^[^#]+#/;function WS(t,e){return t.replace(KS,"#")+e}function GS(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Nl=()=>({left:window.pageXOffset,top:window.pageYOffset});function YS(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=GS(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function _m(t,e){return(history.state?history.state.position-e:-1)+t}const ru=new Map;function QS(t,e){ru.set(t,e)}function XS(t){const e=ru.get(t);return ru.delete(t),e}let JS=()=>location.protocol+"//"+location.host;function u0(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),bm(l,"")}return bm(n,t)+r+s}function ZS(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const m=u0(t,location),g=n.value,v=e.value;let T=0;if(f){if(n.value=m,e.value=f,o&&o===g){o=null;return}T=v?f.position-v.position:0}else r(m);s.forEach(y=>{y(n.value,g,{delta:T,type:Pi.pop,direction:T?T>0?ai.forward:ai.back:ai.unknown})})};function l(){o=n.value}function c(f){s.push(f);const m=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return i.push(m),m}function u(){const{history:f}=window;!f.state||f.replaceState(_e({},f.state,{scroll:Nl()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function Em(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Nl():null}}function eA(t){const{history:e,location:n}=window,r={value:u0(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:JS()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(m){console.error(m),n[u?"replace":"assign"](f)}}function o(l,c){const u=_e({},e.state,Em(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=_e({},s.value,e.state,{forward:l,scroll:Nl()});i(u.current,u,!0);const h=_e({},Em(r.value,l,null),{position:u.position+1},c);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function tA(t){t=zS(t);const e=eA(t),n=ZS(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=_e({location:"",base:t,go:r,createHref:WS.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function nA(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),tA(t)}function rA(t){return typeof t=="string"||t&&typeof t=="object"}function h0(t){return typeof t=="string"||typeof t=="symbol"}const On={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},f0=Symbol("");var Im;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Im||(Im={}));function ks(t,e){return _e(new Error,{type:t,[f0]:!0},e)}function ln(t,e){return t instanceof Error&&f0 in t&&(e==null||!!(t.type&e))}const Tm="[^/]+?",sA={sensitive:!1,strict:!1,start:!0,end:!0},iA=/[.+*?^${}()[\]/\\]/g;function oA(t,e){const n=_e({},sA,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let m=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(iA,"\\$&"),m+=40;else if(f.type===1){const{value:g,repeatable:v,optional:T,regexp:y}=f;i.push({name:g,repeatable:v,optional:T});const _=y||Tm;if(_!==Tm){m+=10;try{new RegExp(`(${_})`)}catch(U){throw new Error(`Invalid custom RegExp for param "${g}" (${_}): `+U.message)}}let O=v?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;h||(O=T&&c.length<2?`(?:/${O})`:"/"+O),T&&(O+="?"),s+=O,m+=20,T&&(m+=-8),v&&(m+=-20),_===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const m=u[f]||"",g=i[f-1];h[g.name]=m&&g.repeatable?m.split("/"):m}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of f)if(m.type===0)u+=m.value;else if(m.type===1){const{value:g,repeatable:v,optional:T}=m,y=g in c?c[g]:"";if(Wt(y)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const _=Wt(y)?y.join("/"):y;if(!_)if(T)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=_}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function aA(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function lA(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=aA(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(km(r))return 1;if(km(s))return-1}return s.length-r.length}function km(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const cA={type:0,value:""},uA=/[a-zA-Z0-9_]/;function hA(t){if(!t)return[[]];if(t==="/")return[[cA]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function h(){!c||(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:l==="("?n=2:uA.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function fA(t,e,n){const r=oA(hA(t.path),n),s=_e(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function dA(t,e){const n=[],r=new Map;e=Am({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const m=!f,g=mA(u);g.aliasOf=f&&f.record;const v=Am(e,u),T=[g];if("alias"in u){const O=typeof u.alias=="string"?[u.alias]:u.alias;for(const U of O)T.push(_e({},g,{components:f?f.record.components:g.components,path:U,aliasOf:f?f.record:g}))}let y,_;for(const O of T){const{path:U}=O;if(h&&U[0]!=="/"){const X=h.record.path,fe=X[X.length-1]==="/"?"":"/";O.path=h.record.path+(U&&fe+U)}if(y=fA(O,h,v),f?f.alias.push(y):(_=_||y,_!==y&&_.alias.push(y),m&&u.name&&!Sm(y)&&o(u.name)),g.children){const X=g.children;for(let fe=0;fe<X.length;fe++)i(X[fe],y,f&&f.children[fe])}f=f||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&l(y)}return _?()=>{o(_)}:oi}function o(u){if(h0(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&lA(u,n[h])>=0&&(u.record.path!==n[h].record.path||!d0(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Sm(u)&&r.set(u.record.name,u)}function c(u,h){let f,m={},g,v;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw ks(1,{location:u});v=f.record.name,m=_e(xm(h.params,f.keys.filter(_=>!_.optional).map(_=>_.name)),u.params&&xm(u.params,f.keys.map(_=>_.name))),g=f.stringify(m)}else if("path"in u)g=u.path,f=n.find(_=>_.re.test(g)),f&&(m=f.parse(g),v=f.record.name);else{if(f=h.name?r.get(h.name):n.find(_=>_.re.test(h.path)),!f)throw ks(1,{location:u,currentLocation:h});v=f.record.name,m=_e({},h.params,u.params),g=f.stringify(m)}const T=[];let y=f;for(;y;)T.unshift(y.record),y=y.parent;return{name:v,path:g,params:m,matched:T,meta:gA(T)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function xm(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function mA(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:pA(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function pA(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Sm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function gA(t){return t.reduce((e,n)=>_e(e,n.meta),{})}function Am(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function d0(t,e){return e.children.some(n=>n===t||d0(t,n))}const m0=/#/g,yA=/&/g,vA=/\//g,bA=/=/g,wA=/\?/g,p0=/\+/g,_A=/%5B/g,EA=/%5D/g,g0=/%5E/g,IA=/%60/g,y0=/%7B/g,TA=/%7C/g,v0=/%7D/g,kA=/%20/g;function Xh(t){return encodeURI(""+t).replace(TA,"|").replace(_A,"[").replace(EA,"]")}function xA(t){return Xh(t).replace(y0,"{").replace(v0,"}").replace(g0,"^")}function su(t){return Xh(t).replace(p0,"%2B").replace(kA,"+").replace(m0,"%23").replace(yA,"%26").replace(IA,"`").replace(y0,"{").replace(v0,"}").replace(g0,"^")}function SA(t){return su(t).replace(bA,"%3D")}function AA(t){return Xh(t).replace(m0,"%23").replace(wA,"%3F")}function CA(t){return t==null?"":AA(t).replace(vA,"%2F")}function Na(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function NA(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(p0," "),o=i.indexOf("="),a=Na(o<0?i:i.slice(0,o)),l=o<0?null:Na(i.slice(o+1));if(a in e){let c=e[a];Wt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Cm(t){let e="";for(let n in t){const r=t[n];if(n=SA(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Wt(r)?r.map(i=>i&&su(i)):[r&&su(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function RA(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Wt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const DA=Symbol(""),Nm=Symbol(""),Jh=Symbol(""),b0=Symbol(""),iu=Symbol("");function js(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Ln(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(ks(4,{from:n,to:e})):h instanceof Error?a(h):rA(h)?a(ks(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(r&&r.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function lc(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(OA(a)){const c=(a.__vccOpts||a)[e];c&&s.push(Ln(c,n,r,i,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=$S(c)?c.default:c;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Ln(f,n,r,i,o)()}))}}return s}function OA(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Rm(t){const e=Hn(Jh),n=Hn(b0),r=$e(()=>e.resolve(es(t.to))),s=$e(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Ts.bind(null,u));if(f>-1)return f;const m=Dm(l[c-2]);return c>1&&Dm(u)===m&&h[h.length-1].path!==m?h.findIndex(Ts.bind(null,l[c-2])):f}),i=$e(()=>s.value>-1&&FA(n.params,r.value.params)),o=$e(()=>s.value>-1&&s.value===n.matched.length-1&&c0(n.params,r.value.params));function a(l={}){return LA(l)?e[es(t.replace)?"replace":"push"](es(t.to)).catch(oi):Promise.resolve()}return{route:r,href:$e(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const PA=Bi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Rm,setup(t,{slots:e}){const n=Ui(Rm(t)),{options:r}=Hn(Jh),s=$e(()=>({[Om(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Om(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Hi("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),MA=PA;function LA(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function FA(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Wt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Dm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Om=(t,e,n)=>t!=null?t:e!=null?e:n,$A=Bi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Hn(iu),s=$e(()=>t.route||r.value),i=Hn(Nm,0),o=$e(()=>{let c=es(i);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=$e(()=>s.value.matched[o.value]);Bo(Nm,$e(()=>o.value+1)),Bo(DA,a),Bo(iu,s);const l=j1();return Xs(()=>[l.value,a.value,t.name],([c,u,h],[f,m,g])=>{u&&(u.instances[h]=c,m&&m!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!Ts(u,m)||!f)&&(u.enterCallbacks[h]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Pm(n.default,{Component:f,route:c});const m=h.props[u],g=m?m===!0?c.params:typeof m=="function"?m(c):m:null,T=Hi(f,_e({},g,e,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Pm(n.default,{Component:T,route:c})||T}}});function Pm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const VA=$A;function UA(t){const e=dA(t.routes,t),n=t.parseQuery||NA,r=t.stringifyQuery||Cm,s=t.history,i=js(),o=js(),a=js(),l=H1(On);let c=On;zr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=oc.bind(null,k=>""+k),h=oc.bind(null,CA),f=oc.bind(null,Na);function m(k,$){let M,G;return h0(k)?(M=e.getRecordMatcher(k),G=$):G=k,e.addRoute(G,M)}function g(k){const $=e.getRecordMatcher(k);$&&e.removeRoute($)}function v(){return e.getRoutes().map(k=>k.record)}function T(k){return!!e.getRecordMatcher(k)}function y(k,$){if($=_e({},$||l.value),typeof k=="string"){const d=ac(n,k,$.path),p=e.resolve({path:d.path},$),w=s.createHref(d.fullPath);return _e(d,p,{params:f(p.params),hash:Na(d.hash),redirectedFrom:void 0,href:w})}let M;if("path"in k)M=_e({},k,{path:ac(n,k.path,$.path).path});else{const d=_e({},k.params);for(const p in d)d[p]==null&&delete d[p];M=_e({},k,{params:h(k.params)}),$.params=h($.params)}const G=e.resolve(M,$),ge=k.hash||"";G.params=u(f(G.params));const Fe=BS(r,_e({},k,{hash:xA(ge),path:G.path})),le=s.createHref(Fe);return _e({fullPath:Fe,hash:ge,query:r===Cm?RA(k.query):k.query||{}},G,{redirectedFrom:void 0,href:le})}function _(k){return typeof k=="string"?ac(n,k,l.value.path):_e({},k)}function O(k,$){if(c!==k)return ks(8,{from:$,to:k})}function U(k){return me(k)}function X(k){return U(_e(_(k),{replace:!0}))}function fe(k){const $=k.matched[k.matched.length-1];if($&&$.redirect){const{redirect:M}=$;let G=typeof M=="function"?M(k):M;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=_(G):{path:G},G.params={}),_e({query:k.query,hash:k.hash,params:"path"in G?{}:k.params},G)}}function me(k,$){const M=c=y(k),G=l.value,ge=k.state,Fe=k.force,le=k.replace===!0,d=fe(M);if(d)return me(_e(_(d),{state:typeof d=="object"?_e({},ge,d.state):ge,force:Fe,replace:le}),$||M);const p=M;p.redirectedFrom=$;let w;return!Fe&&jS(r,G,M)&&(w=ks(16,{to:p,from:G}),ar(G,G,!0,!1)),(w?Promise.resolve(w):ae(p,G)).catch(E=>ln(E)?ln(E,2)?E:Mt(E):Se(E,p,G)).then(E=>{if(E){if(ln(E,2))return me(_e({replace:le},_(E.to),{state:typeof E.to=="object"?_e({},ge,E.to.state):ge,force:Fe}),$||p)}else E=qe(p,G,!0,le,ge);return ye(p,G,E),E})}function ee(k,$){const M=O(k,$);return M?Promise.reject(M):Promise.resolve()}function ae(k,$){let M;const[G,ge,Fe]=BA(k,$);M=lc(G.reverse(),"beforeRouteLeave",k,$);for(const d of G)d.leaveGuards.forEach(p=>{M.push(Ln(p,k,$))});const le=ee.bind(null,k,$);return M.push(le),Hr(M).then(()=>{M=[];for(const d of i.list())M.push(Ln(d,k,$));return M.push(le),Hr(M)}).then(()=>{M=lc(ge,"beforeRouteUpdate",k,$);for(const d of ge)d.updateGuards.forEach(p=>{M.push(Ln(p,k,$))});return M.push(le),Hr(M)}).then(()=>{M=[];for(const d of k.matched)if(d.beforeEnter&&!$.matched.includes(d))if(Wt(d.beforeEnter))for(const p of d.beforeEnter)M.push(Ln(p,k,$));else M.push(Ln(d.beforeEnter,k,$));return M.push(le),Hr(M)}).then(()=>(k.matched.forEach(d=>d.enterCallbacks={}),M=lc(Fe,"beforeRouteEnter",k,$),M.push(le),Hr(M))).then(()=>{M=[];for(const d of o.list())M.push(Ln(d,k,$));return M.push(le),Hr(M)}).catch(d=>ln(d,8)?d:Promise.reject(d))}function ye(k,$,M){for(const G of a.list())G(k,$,M)}function qe(k,$,M,G,ge){const Fe=O(k,$);if(Fe)return Fe;const le=$===On,d=zr?history.state:{};M&&(G||le?s.replace(k.fullPath,_e({scroll:le&&d&&d.scroll},ge)):s.push(k.fullPath,ge)),l.value=k,ar(k,$,M,le),Mt()}let B;function Re(){B||(B=s.listen((k,$,M)=>{if(!yo.listening)return;const G=y(k),ge=fe(G);if(ge){me(_e(ge,{replace:!0}),G).catch(oi);return}c=G;const Fe=l.value;zr&&QS(_m(Fe.fullPath,M.delta),Nl()),ae(G,Fe).catch(le=>ln(le,12)?le:ln(le,2)?(me(le.to,G).then(d=>{ln(d,20)&&!M.delta&&M.type===Pi.pop&&s.go(-1,!1)}).catch(oi),Promise.reject()):(M.delta&&s.go(-M.delta,!1),Se(le,G,Fe))).then(le=>{le=le||qe(G,Fe,!1),le&&(M.delta&&!ln(le,8)?s.go(-M.delta,!1):M.type===Pi.pop&&ln(le,20)&&s.go(-1,!1)),ye(G,Fe,le)}).catch(oi)}))}let et=js(),An=js(),Le;function Se(k,$,M){Mt(k);const G=An.list();return G.length?G.forEach(ge=>ge(k,$,M)):console.error(k),Promise.reject(k)}function Ee(){return Le&&l.value!==On?Promise.resolve():new Promise((k,$)=>{et.add([k,$])})}function Mt(k){return Le||(Le=!k,Re(),et.list().forEach(([$,M])=>k?M(k):$()),et.reset()),k}function ar(k,$,M,G){const{scrollBehavior:ge}=t;if(!zr||!ge)return Promise.resolve();const Fe=!M&&XS(_m(k.fullPath,0))||(G||!M)&&history.state&&history.state.scroll||null;return Mp().then(()=>ge(k,$,Fe)).then(le=>le&&YS(le)).catch(le=>Se(le,k,$))}const Lt=k=>s.go(k);let wt;const Ur=new Set,yo={currentRoute:l,listening:!0,addRoute:m,removeRoute:g,hasRoute:T,getRoutes:v,resolve:y,options:t,push:U,replace:X,go:Lt,back:()=>Lt(-1),forward:()=>Lt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:An.add,isReady:Ee,install(k){const $=this;k.component("RouterLink",MA),k.component("RouterView",VA),k.config.globalProperties.$router=$,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>es(l)}),zr&&!wt&&l.value===On&&(wt=!0,U(s.location).catch(ge=>{}));const M={};for(const ge in On)M[ge]=$e(()=>l.value[ge]);k.provide(Jh,$),k.provide(b0,Ui(M)),k.provide(iu,l);const G=k.unmount;Ur.add(k),k.unmount=function(){Ur.delete(k),Ur.size<1&&(c=On,B&&B(),B=null,l.value=On,wt=!1,Le=!1),G()}}};return yo}function Hr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function BA(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>Ts(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Ts(c,l))||s.push(l))}return[n,r,s]}const jA={name:"PageTitle",props:{text:{type:String,required:!0},withBack:{type:Boolean,default:!1},path:{type:String,default:""}},methods:{navBack(){this.path.length>0?this.$router.push(this.path):this.$router.back()}}},HA={class:"flex items-center"},qA={class:"max-w-max"},zA={class:"text-sm sm:text-base font-bold text-gray-800 uppercase tracking-wide"},KA=b("div",{class:"h-1 w-full bg-emerald-500 mt-1"},null,-1);function WA(t,e,n,r,s,i){const o=J("font-awesome-icon");return F(),z("div",HA,[n.withBack?(F(),z("button",{key:0,onClick:e[0]||(e[0]=(...a)=>i.navBack&&i.navBack(...a)),class:"text-emerald-500 p-2 mr-2 hover:bg-emerald-50 flex items-center justify-center rounded-full"},[D(o,{icon:"fa-solid fa-chevron-left",class:"mr-1"})])):Ct("",!0),b("div",qA,[b("h1",zA,Te(n.text),1),KA])])}const Vr=xe(jA,[["render",WA]]),GA={name:"PageContainer"},YA={class:"p-5 h-full"};function QA(t,e,n,r,s,i){return F(),z("div",YA,[Ib(t.$slots,"default")])}const Fs=xe(GA,[["render",QA]]),XA={name:"KategoriKomponenCard",props:{title:{type:String,required:!0},icon:{type:String,required:!0}}},JA={class:"bg-gradient-to-r from-emerald-500 to-teal-500 py-2 flex items-center justify-center cursor-pointer hover:from-emerald-700 hover:to-teal-700 transition duration-150 ease-in-out rounded-md flex-col shadow-md"},ZA={class:"font-bold text-white text-sm"};function eC(t,e,n,r,s,i){const o=J("font-awesome-icon");return F(),z("div",JA,[D(o,{icon:n.icon,class:"w-5 h-5 mb-1 text-white"},null,8,["icon"]),b("h1",ZA,Te(n.title),1)])}const tC=xe(XA,[["render",eC]]),nC={name:"KomponenGridView",components:{PageContainer:Fs,PageTitle:Vr,KategoriKomponenCard:tC}},rC={class:"grid grid-cols-2 gap-5 overflow-y-auto scrollbar px-5 py-5"};function sC(t,e,n,r,s,i){const o=J("PageTitle"),a=J("KategoriKomponenCard"),l=J("PageContainer");return F(),St(l,{class:"flex flex-col p-0"},{default:zt(()=>[D(o,{text:"Komponen",class:"mb-4 pt-5 px-5"}),b("div",rC,[D(a,{title:"Motherboard",icon:"fa-solid fa-keyboard",onClick:e[0]||(e[0]=c=>t.$router.push({name:"list-komponen-view2",params:{type:"motherboard"}}))}),D(a,{title:"Processor",icon:"fa-solid fa-microchip",onClick:e[1]||(e[1]=c=>t.$router.push({name:"list-komponen-view2",params:{type:"processor"}}))}),D(a,{title:"RAM",icon:"fa-solid fa-memory",onClick:e[2]||(e[2]=c=>t.$router.push({name:"list-komponen-view2",params:{type:"ram"}}))}),D(a,{title:"VGA",icon:"fa-solid fa-display",onClick:e[3]||(e[3]=c=>t.$router.push({name:"list-komponen-view2",params:{type:"vga"}}))}),D(a,{title:"Storage",icon:"fa-solid fa-hard-drive",onClick:e[4]||(e[4]=c=>t.$router.push("komponen/storage"))}),D(a,{title:"PSU",icon:"fa-solid fa-bolt",onClick:e[5]||(e[5]=c=>t.$router.push({name:"list-komponen-view2",params:{type:"psu"}}))})])]),_:1})}const iC=xe(nC,[["render",sC]]),oC={name:"ItemKomponen",props:{komponenId:{type:String,required:!0},priceId:{type:Number,required:!0},name:{type:String,required:!0},harga:{type:Number,required:!0},link:{type:String,required:!0}},emits:["itemHapus"],methods:{rupiahFormat(t){return"Rp. "+this.formatNumber(t.toString())},formatNumber(t){return t.replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,".")},goToLinkSourceURL(){window.open(this.link,"_blank")}}},aC={class:"font-bold truncate"},lC={class:"flex flex-row justify-between"},cC={class:"font-bold text-orange-500"},uC={class:"flex flex-row max-w-max gap-1"};function hC(t,e,n,r,s,i){const o=J("font-awesome-icon");return F(),z("div",{onClick:e[3]||(e[3]=a=>t.$router.push({name:"detail-komponen-view",params:{komponenId:n.komponenId,type:t.$route.params.type}})),class:"py-3 cursor-pointer hover:bg-gray-50 transition duration-150 ease-in-out"},[b("h1",aC,Te(n.name),1),b("div",lC,[b("h3",null,[Gt("Harga : "),b("span",cC,Te(i.rupiahFormat(n.harga)),1)]),b("div",uC,[b("button",{onClick:e[0]||(e[0]=Bt((...a)=>i.goToLinkSourceURL&&i.goToLinkSourceURL(...a),["stop"])),target:"_blank",class:"bg-blue-500 rounded-full px-1.5 flex hover:bg-blue-700 transition duration-150 ease-in-out"},[D(o,{icon:"fa-solid fa-link",class:"w-3 h-3 text-white self-center"})]),b("button",{onClick:e[1]||(e[1]=Bt(a=>t.$router.push({name:"manage-komponen-view",params:{type:t.$route.params.type},query:{komponenId:n.komponenId,priceId:n.priceId}}),["stop"])),class:"bg-orange-500 rounded-full px-1.5 flex hover:bg-orange-700 transition duration-150 ease-in-out"},[D(o,{icon:"fa-solid fa-pencil-alt",class:"w-3 h-3 text-white self-center"})]),b("button",{onClick:e[2]||(e[2]=Bt(a=>t.$emit("itemHapus"),["stop"])),class:"bg-red-500 rounded-full px-1.5 flex hover:bg-red-700 transition duration-150 ease-in-out"},[D(o,{icon:"fa-solid fa-trash",class:"w-3 h-3 text-white self-center"})])])])])}const fC=xe(oC,[["render",hC]]);const dC={name:"ScrollLoading",props:{isLoading:{type:Boolean,default:!1}}},w0=t=>(eb("data-v-878fae1a"),t=t(),tb(),t),mC={key:0,class:"absolute top-0 left-0 right-0 bottom-0 bg-emerald-400 max-w-max max-h-max m-auto py-2 px-4 rounded-sm flex items-center justify-center shadow-lg"},pC=w0(()=>b("h1",{class:"font-semibold text-white tracking-wider mr-3"},"Loading..",-1)),gC=w0(()=>b("svg",{class:"animate-spin h-4 w-4 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[b("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),b("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1)),yC=[pC,gC];function vC(t,e,n,r,s,i){return F(),St(nr,null,{default:zt(()=>[n.isLoading?(F(),z("div",mC,yC)):Ct("",!0)]),_:1})}const bC=xe(dC,[["render",vC],["__scopeId","data-v-878fae1a"]]),Mm=bs(sn,"components"),wC={name:"ListKomponenView2",components:{PageTitle:Vr,ItemKomponen:fC,PageContainer:Fs,ScrollLoading:bC,AlertDialog:ug},data(){return{components:[],isLoading:!1,isLastData:!1,showAlert:!1,hapusData:null,isPageLoading:!1}},async mounted(){this.isPageLoading=!0;try{const t=await Es(_s(Mm,Ci("type","==",this.$route.params.type),ka("createdAt","asc"),eu(10)));this.components=t.docs.map(e=>{const n={...e.data(),id:e.id,ref:e.ref};return n.prices.sort((r,s)=>r.checkedAt<s.checkedAt?1:-1),n}),this.isPageLoading=!1}catch(t){console.log(t),this.isPageLoading=!1}},methods:{async loadMore(t){if(t.target.scrollTop+t.target.clientHeight>=t.target.scrollHeight&&!this.isLastData){this.isLoading=!0;try{const e=this.components[this.components.length-1].ref,n=await Uh(e),r=this.$route.params.type,s=await Es(_s(Mm,Ci("type","==",r),ka("createdAt","asc"),_k(n),eu(10)));s.empty?this.isLastData=!0:this.components.push(...s.docs.map(i=>{const o={...i.data(),id:i.id,ref:i.ref};return o.prices.sort((a,l)=>a.checkedAt<l.checkedAt?1:-1),o})),this.isLoading=!1}catch(e){console.log("firebase err: ",e),this.isLoading=!1}}},showAlertHapus(t,e){this.showAlert=!0,this.hapusData={id:t,ref:e}},async hapusKomponen(){await Sk(this.hapusData.ref),this.components=this.components.filter(t=>t.id!==this.hapusData.id),this.showAlert=!1,this.hapusData=null}}},_C={class:"flex justify-between items-center mb-4"},EC={class:"flex items-center justify-between mb-4"},IC={key:1,class:"flex justify-center items-center h-full"},TC={key:0,class:"font-normal text-base text-gray-600 tracking-wider"},kC={key:1,class:"animate-spin h-10 w-10 text-emerald-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},xC=b("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),SC=b("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1),AC=[xC,SC];function CC(t,e,n,r,s,i){const o=J("PageTitle"),a=J("font-awesome-icon"),l=J("ItemKomponen"),c=J("ScrollLoading"),u=J("PageContainer"),h=J("AlertDialog");return F(),z(Qe,null,[D(u,{class:"flex flex-col"},{default:zt(()=>[b("div",_C,[D(o,{text:"Data Komponen",withBack:!0,path:"/komponen"})]),b("div",EC,[b("button",{type:"button",class:"bg-emerald-500 text-sm text-white px-2 rounded-sm hover:bg-emerald-700 transition duration-150 ease-in-out tracking-wide",onClick:e[0]||(e[0]=f=>t.$router.push({name:"manage-komponen-view",params:{type:t.$route.params.type}}))},[D(a,{icon:"fa-solid fa-plus"}),Gt(" Tambah Komponen ")])]),s.components.length>0?(F(),z("div",{key:0,onScroll:e[1]||(e[1]=(...f)=>i.loadMore&&i.loadMore(...f)),class:"flex-1 flex flex-col divide-y scrollbar pr-3 overflow-y-scroll pb-2.5 mb-12"},[(F(!0),z(Qe,null,ji(s.components,f=>(F(),St(l,{key:f.id,name:f.name,harga:f.prices[0].price,link:f.prices[0].linkSource,"komponen-id":f.id,"price-id":f.prices[0].id,onItemHapus:m=>i.showAlertHapus(f.id,f.ref)},null,8,["name","harga","link","komponen-id","price-id","onItemHapus"]))),128))],32)):(F(),z("div",IC,[s.isPageLoading?(F(),z("svg",kC,AC)):(F(),z("h3",TC,"Belum ada data"))])),D(c,{isLoading:s.isLoading},null,8,["isLoading"])]),_:1}),D(h,{message:"Hapus Komponen?",showing:s.showAlert,onClose:e[2]||(e[2]=f=>s.showAlert=!1),onYes:i.hapusKomponen},null,8,["showing","onYes"])],64)}const NC=xe(wC,[["render",CC]]),RC={name:"FormInput",props:{modelValue:{type:String,default:""},labelText:{type:String,required:!0},required:{type:Boolean,default:!0},placeholderText:{type:String,default:""},helperText:{type:String,default:""},inputType:{type:String,default:"text"},hasError:{type:Boolean,default:!1},errorMessage:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","inputBlur","inputFocus","typingKeyUp","typingKeyDown"]},DC={class:"flex flex-col"},OC={class:"font-semibold text-sm"},PC={key:0,class:"text-red-500"},MC=["type","placeholder","value","disabled"],LC={key:0,class:"text-[11px] italic font-semibold text-gray-400"},FC={key:1,class:"text-[11px] font-semibold text-red-500"};function $C(t,e,n,r,s,i){return F(),z("div",DC,[b("label",OC,[Gt(Te(n.labelText),1),n.required?(F(),z("span",PC,"*")):Ct("",!0)]),b("input",{type:n.inputType,class:rt(["mt-1 rounded-sm border-gray-300 shadow-sm focus:border-emerald-500 text-sm focus:ring-0",{"border-red-500 focus:border-red-500":n.hasError,"text-gray-500":n.disabled}]),placeholder:n.placeholderText,value:n.modelValue,onInput:e[0]||(e[0]=o=>t.$emit("update:modelValue",o.target.value)),onBlur:e[1]||(e[1]=o=>t.$emit("inputBlur")),onFocus:e[2]||(e[2]=o=>t.$emit("inputFocus")),onKeyup:e[3]||(e[3]=o=>t.$emit("typingKeyUp")),onKeydown:e[4]||(e[4]=o=>t.$emit("typingKeyDown")),disabled:n.disabled},null,42,MC),n.hasError?(F(),z("p",FC,Te(n.errorMessage),1)):(F(),z("p",LC,Te(n.helperText),1))])}const Rl=xe(RC,[["render",$C]]),VC={name:"FormTextarea",props:{modelValue:{type:String,default:""},labelText:{type:String,required:!0},required:{type:Boolean,default:!0},placeholderText:{type:String,default:""},width:{type:Number,default:30},height:{type:Number,default:10},helperText:{type:String,default:""},hasError:{type:Boolean,default:!1},errorMessage:{type:String,default:""}},emits:["update:modelValue"]},UC={class:"flex flex-col"},BC={class:"font-semibold text-sm"},jC={key:0,class:"text-red-500"},HC=["cols","rows","value","placeholder"],qC={key:0,class:"text-[11px] italic font-semibold text-gray-400"},zC={key:1,class:"text-[11px] font-semibold text-red-500"};function KC(t,e,n,r,s,i){return F(),z("div",UC,[b("label",BC,[Gt(Te(n.labelText),1),n.required?(F(),z("span",jC,"*")):Ct("",!0)]),b("textarea",{class:rt(["mt-1 rounded-sm border-gray-300 shadow-sm focus:border-emerald-500 text-sm focus:ring-0",{"border-red-500 focus:border-red-500":n.hasError}]),cols:n.width,rows:n.height,value:n.modelValue,onInput:e[0]||(e[0]=o=>t.$emit("update:modelValue",o.target.value)),placeholder:n.placeholderText},null,42,HC),n.hasError?(F(),z("p",zC,Te(n.errorMessage),1)):(F(),z("p",qC,Te(n.helperText),1))])}const WC=xe(VC,[["render",KC]]),GC={name:"FormInputHarga",props:{modelValue:{type:String,default:""},labelText:{type:String,required:!0},required:{type:Boolean,default:!0},placeholderText:{type:String,default:""},helperText:{type:String,default:""},hasError:{type:Boolean,default:!1},errorMessage:{type:String,default:""}},components:{FormInput:Rl},watch:{formInputModel(t){t!==null&&t.indexOf(",00")===-1&&t.indexOf("Rp. ")===-1&&this.$emit("update:modelValue",this.formatNumber(t))}},methods:{formatNumber(t){return t.replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,".")},addRupiah(){this.modelValue!==null&&this.modelValue!==""&&this.$emit("update:modelValue",`Rp. ${this.modelValue},00`)},removeRupiah(){this.modelValue!==null&&this.modelValue!==""&&this.$emit("update:modelValue",this.modelValue.replace(",00","").replace("Rp. ",""))}},computed:{formInputModel:{get(){return this.modelValue},set(t){this.$emit("update:modelValue",t)}}},emits:["update:modelValue"]};function YC(t,e,n,r,s,i){const o=J("FormInput");return F(),St(o,{modelValue:i.formInputModel,"onUpdate:modelValue":e[0]||(e[0]=a=>i.formInputModel=a),labelText:n.labelText,placeholderText:n.placeholderText,helperText:n.helperText,required:n.required,hasError:n.hasError,"error-message":n.errorMessage,onInputBlur:i.addRupiah,onInputFocus:i.removeRupiah},null,8,["modelValue","labelText","placeholderText","helperText","required","hasError","error-message","onInputBlur","onInputFocus"])}const QC=xe(GC,[["render",YC]]),XC={name:"FormInputSuggestion",components:{FormInput:Rl},props:{modelValue:{type:String,default:""},suggestionLoading:{type:Boolean,default:!1},labelText:{type:String,required:!0},required:{type:Boolean,default:!0},placeholderText:{type:String,default:""},helperText:{type:String,default:""},suggestions:{type:Array,required:!0},hasError:{type:Boolean,default:!1},errorMessage:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","findSuggestions"],data(){return{showSuggestion:!1,isTyping:!1,typingTimer:null,matchedText:""}},methods:{suggestionClick(t){this.$emit("update:modelValue",t),this.showSuggestion=!1},suggestionBold(t){let e="";return t.substr(0,this.modelValue.length).toLowerCase()===this.modelValue.toLowerCase()?(e+=`<span class="font-bold">${t.substr(0,this.modelValue.length)}</span>`,e+=`<span>${t.substr(this.modelValue.length)}</span>`):e+=`<span>${t}</span>`,e},inputTypingKeyUp(){clearTimeout(this.typingTimer),this.typingTimer=setTimeout(()=>{this.showSuggestion||(this.showSuggestion=!0),this.$emit("findSuggestions")},1e3)},inputTypingKeyDown(){clearTimeout(this.typingTimer)}},computed:{formInputModel:{get(){return this.modelValue},set(t){this.$emit("update:modelValue",t)}}}},JC={class:"relative"},ZC={key:0,class:"absolute border border-emerald-500 -mt-4 bg-white w-full p-2 rounded-sm shadow-lg"},e3={class:"flex justify-between border-b pb-1 items-center"},t3={class:"text-sm text-gray-700 font-semibold"},n3=["onClick","innerHTML"],r3={key:0,class:"text-sm"},s3={key:1,class:"text-sm"};function i3(t,e,n,r,s,i){const o=J("FormInput"),a=J("font-awesome-icon");return F(),z("div",JC,[D(o,{modelValue:i.formInputModel,"onUpdate:modelValue":e[0]||(e[0]=l=>i.formInputModel=l),labelText:n.labelText,placeholderText:n.placeholderText,helperText:n.helperText,required:n.required,hasError:n.hasError,"error-message":n.errorMessage,onTypingKeyUp:i.inputTypingKeyUp,onTypingKeyDown:i.inputTypingKeyDown,disabled:n.disabled},null,8,["modelValue","labelText","placeholderText","helperText","required","hasError","error-message","onTypingKeyUp","onTypingKeyDown","disabled"]),s.showSuggestion?(F(),z("div",ZC,[b("div",e3,[b("span",t3,"Showing "+Te(n.suggestions.length)+" suggestions",1),D(a,{icon:"fa-solid fa-close",class:"w-3 h-3 hover:bg-red-100 text-red-500 hover:text-red-800 transition duration-150 ease-in-out cursor-pointer p-1 rounded-full",onClick:e[1]||(e[1]=l=>s.showSuggestion=!1)})]),b("div",{class:rt(["flex flex-col",{"border-b":n.suggestionLoading}])},[(F(!0),z(Qe,null,ji(n.suggestions,(l,c)=>(F(),z("h3",{onClick:u=>i.suggestionClick(l.name),class:"text-sm hover:bg-gray-100 cursor-pointer px-2 py-1",key:c,innerHTML:i.suggestionBold(l.name)},null,8,n3))),128))],2),n.suggestionLoading?(F(),z("span",r3,"Loading...")):(F(),z("span",s3,Te(n.suggestions.length===0?"Not Found":""),1))])):Ct("",!0)])}const o3=xe(XC,[["render",i3]]),a3={name:"FormDropdown",props:{modelValue:{type:String,default:""},options:{type:Array,required:!0},labelText:{type:String,required:!0},required:{type:Boolean,default:!0},helperText:{type:String,default:""},placeholderOption:{type:String,required:!0},hasError:{type:Boolean,default:!1},errorMessage:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","selectClick"]},l3={class:"flex flex-col"},c3={class:"font-semibold text-sm"},u3={key:0,class:"text-red-500"},h3=["disabled","value"],f3={disabled:"",value:""},d3=["value"],m3={key:0,class:"text-[11px] italic font-semibold text-gray-400"},p3={key:1,class:"text-[11px] font-semibold text-red-500"};function g3(t,e,n,r,s,i){return F(),z("div",l3,[b("label",c3,[Gt(Te(n.labelText),1),n.required?(F(),z("span",u3,"*")):Ct("",!0)]),b("select",{onClick:e[0]||(e[0]=o=>t.$emit("selectClick")),disabled:n.disabled,value:n.modelValue,onChange:e[1]||(e[1]=o=>t.$emit("update:modelValue",o.target.value)),class:rt(["mt-1 rounded-sm border-gray-300 shadow-sm focus:border-emerald-500 transition duration-150 ease-in-out text-sm focus:ring-0",{"border-red-500 focus:border-red-500":n.hasError}])},[b("option",f3,Te(n.placeholderOption),1),(F(!0),z(Qe,null,ji(n.options,(o,a)=>(F(),z("option",{value:o.value,key:a},Te(o.text),9,d3))),128))],42,h3),n.hasError?(F(),z("p",p3,Te(n.errorMessage),1)):(F(),z("p",m3,Te(n.helperText),1))])}const _0=xe(a3,[["render",g3]]),y3={name:"FormButton",props:{text:{type:String,required:!0},loading:{type:Boolean,default:!1}}},v3=["disabled"],b3={key:0,class:"animate-spin -ml-1 mr-3 h-4 w-4 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},w3=b("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),_3=b("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1),E3=[w3,_3];function I3(t,e,n,r,s,i){return F(),z("button",{disabled:n.loading,class:rt([{"cursor-not-allowed bg-emerald-800":n.loading},"bg-emerald-500 max-w-max p-0 text-sm text-white px-5 py-1 uppercase font-semibold rounded-sm tracking-wider hover:bg-emerald-800 transition duration-150 ease-in-out focus:outline-none focus:ring-0 inline-flex items-center"])},[n.loading?(F(),z("svg",b3,E3)):Ct("",!0),Gt(" "+Te(n.loading?"Loading...":n.text),1)],10,v3)}const E0=xe(y3,[["render",I3]]),T3={name:"NotificationPopup",props:{message:{type:String,required:!0,default:"Default message"},type:{type:String,required:!0,default:""}},data(){return{isTimerFinished:!1}},computed:{notifIcon(){switch(this.type){case"success":return"fa-solid fa-check";case"error":return"fa-solid fa-close";case"warning":return"fa-solid fa-warning";case"info":return"fa-solid fa-info";default:return"fa-solid fa-question"}},notifIconColor(){switch(this.type){case"success":return{"border-green-600 text-green-600":!0};case"error":return{"border-red-600 text-red-600":!0};case"warning":return{"border-orange-600 text-orange-600":!0};case"info":return{"border-blue-600 text-blue-600":!0};default:return{"border-gray-600 text-gray-600":!0}}},timerBarColor(){switch(this.type){case"success":return{"bg-green-500":!0};case"error":return{"bg-red-500":!0};case"warning":return{"bg-orange-500":!0};case"info":return{"bg-blue-500":!0};default:return{"bg-gray-500":!0}}}},watch:{isTimerFinished(t){t&&this.$emit("timerFinished")}},components:{Transition:nr},methods:{beforeEnter(t){t.style.width=100},enter(t){t.style.width="0%",t.style.transition="width 3s linear",setTimeout(()=>{this.isTimerFinished=!0},3e3)}},emits:["timerFinished","close"]},k3={class:"absolute bg-white shadow-lg top-0 left-0 right-0 bottom-0 z-20 max-w-max max-h-max m-auto flex flex-col rounded-sm"},x3={class:"py-6 px-5 flex flex-col gap-3"},S3={class:"text-base tracking-wide text-gray-700"};function A3(t,e,n,r,s,i){const o=J("font-awesome-icon");return F(),z("div",k3,[b("div",x3,[D(o,{icon:i.notifIcon,class:rt(["border p-2 w-5 h-5 rounded-full mx-auto",i.notifIconColor])},null,8,["icon","class"]),b("p",S3,Te(n.message),1),b("button",{class:"w-20 rounded-md border bg-red-500 text-white font-semibold hover:bg-red-700 transition duration-150 ease-in-out mx-auto",onClick:e[0]||(e[0]=Bt(a=>t.$emit("close"),["prevent"]))}," Tutup ")]),D(nr,{appear:"",onBeforeAppear:i.beforeEnter,onAfterAppear:i.enter},{default:zt(()=>[b("div",{class:rt(["w-full h-1 transition duration-500 ease-linear",i.timerBarColor])},null,2)]),_:1},8,["onBeforeAppear","onAfterAppear"])])}const I0=xe(T3,[["render",A3]]);const Lm=bs(sn,"components"),C3={name:"TambahKomponenView",components:{PageTitle:Vr,FormInput:Rl,FormInputHarga:QC,FormDropdown:_0,FormTextarea:WC,FormButton:E0,FormInputSuggestion:o3,NotificationPopup:I0,Transition:nr,PageContainer:Fs},data(){return{form:{komponen:{value:"",hasError:!1,errMessage:"",rules:[{required:"Pilih salah satu komponen!"}]},nama:{value:null,hasError:!1,errMessage:"",rules:[{required:"Nama tidak boleh kosong!"}]},harga:{value:null,hasError:!1,errMessage:"",rules:[{required:"Harga tidak boleh kosong!"}]},checkedDate:{value:null,hasError:!1,errMessage:"",rules:[{required:"Tanggal Cek tidak boleh kosong!"}]},linkSource:{value:null,hasError:!1,errMessage:"",rules:[{required:"Link Sumber tidak boleh kosong!"}]}},formLoading:!1,formHasError:!1,nameSuggestions:[],suggestionLoading:!1,notification:{isShow:!1,message:"",type:""},komponenOptions:[{text:"Processor",value:"processor"},{text:"Motherboard",value:"motherboard"},{text:"VGA",value:"vga"},{text:"PSU",value:"psu"},{text:"RAM",value:"ram"},{text:"Storage",value:"storage"}],suggestions:{vgaList:[],processorList:[],storageList:[],motherboardList:[],ramList:[],psuList:[]}}},watch:{"form.komponen.value"(t){t.length>0&&(this.form.komponen.hasError&&(this.form.komponen.hasError=!1,this.form.komponen.errMessage=""),this.suggestions[`${t}List`].length===0&&(this.suggestionLoading=!0,Es(_s(Lm,Ci("type","==",t))).then(e=>{e.docs.length>0&&e.docs.forEach(n=>{this.suggestions[`${t}List`].push({...n.data(),id:n.id})}),this.suggestionLoading=!1}).catch(e=>{console.log("Firebase error: ",e),this.suggestionLoading=!1})))},"form.nama.value"(t){this.form.nama.hasError&&t.length>0&&(this.form.nama.hasError=!1,this.form.nama.errMessage="")},"form.harga.value"(t){this.form.harga.hasError&&t.length>0&&(this.form.harga.hasError=!1,this.form.harga.errMessage="")},"form.checkedDate.value"(t){this.form.checkedDate.hasError&&t.length>0&&(this.form.checkedDate.hasError=!1,this.form.checkedDate.errMessage="")},"form.linkSource.value"(t){this.form.linkSource.hasError&&t.length>0&&(this.form.linkSource.hasError=!1,this.form.linkSource.errMessage="")}},methods:{async createData(t){try{const e=await Dv(Lm,t);console.log("Doc created with ID:",e.id),this.suggestions[`${t.type}List`].push(t),this.showNotification("success","Data berhasil ditambahkan!")}catch(e){console.log("firebase err: ",e),this.showNotification("error","Something went wrong!")}this.formLoading=!1},async updateKomponenPrice(t,e){const n=t.prices[0],r=this.suggestions[`${t.type}List`][e];if(r.prices.find(i=>this.isPriceEqual(i,n))){this.showNotification("error","Komponen sudah ada!"),this.formLoading=!1;return}try{await tm(si(sn,"components",r.id),{prices:[...r.prices,n]}),this.suggestions[`${t.type}List`][e].prices.push(n),this.showNotification("success","Harga berhasil ditambahkan!"),this.formLoading=!1}catch{console.log("update error: ",err),this.showNotification("error","Something went wrong!"),this.formLoading=!1}},async updateData(t){try{"createdAt"in t&&delete t.createdAt;const e=this.suggestions[`${t.type}List`].findIndex(n=>n.id===this.komponenId);if(e!==-1){const n=this.suggestions[`${t.type}List`][e],r=n.prices.findIndex(s=>s.id==this.priceId);if(r!==-1)n.prices[r]=t.prices[0],t.prices=[...n.prices],await tm(si(sn,"components",this.komponenId),t),this.suggestions[`${t.type}List`][e]=t,this.showNotification("success","Data berhasil diperbaharui!");else throw"priceIndex not found"}else throw"komponenIndex not found"}catch(e){console.log("firebase err: ",e),this.showNotification("error","Something went wrong!")}this.formLoading=!1},async submitForm(){if(this.formLoading=!0,!this.formValidate()){this.formLoading=!1;return}const t=new Date,e={type:this.form.komponen.value,name:this.form.nama.value,prices:[{id:Math.round(t.getTime()/1e3),price:parseInt(this.form.harga.value.replace(/\D/g,"").slice(0,-2)),linkSource:this.form.linkSource.value,checkedAt:new Date(`${this.form.checkedDate.value} ${this.getCurrentTime()}`)}],createdAt:t,updatedAt:t};if(this.komponenId){await this.updateData(e);return}else{const n=this.suggestions[`${e.type}List`].findIndex(r=>r.name===e.name);if(n!==-1){this.updateKomponenPrice(e,n);return}await this.createData(e)}},findSuggestions(){this.form.komponen.value.length>0&&this.form.nama.value!=null&&this.form.nama.value.length>0&&(this.nameSuggestions=[...this.suggestions[`${this.form.komponen.value}List`].filter(t=>t.name.toLowerCase().indexOf(this.form.nama.value.toLowerCase())>=0).slice(0,10)])},formValidate(){let t=!0;return Object.keys(this.form).forEach(e=>{"rules"in this.form[e]&&this.form[e].rules.forEach(n=>{Object.keys(n)[0]==="required"&&(this.form[e].value===null||this.form[e].value.length===0)&&(this.form[e].hasError=!0,this.form[e].errMessage=n.required,t=!1)})}),t},isPriceEqual(t,e){return t.price===e.price&&t.linkSource===e.linkSource&&this.isDateEqual(this.getCheckedAt(t.checkedAt),e.checkedAt)},isDateEqual(t,e){return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()},getCheckedAt(t){return"seconds"in t?new Date(t.seconds*1e3):t},showNotification(t,e){this.notification.isShow=!0,this.notification.type=t,this.notification.message=e},hideNotification(){this.notification.isShow=!1},closeNotification(){this.notification.type==="success"&&this.clearForm(),this.notification.isShow=!1},clearForm(){this.form.komponen.value=this.$route.params.type,this.form.nama.value=null,this.form.harga.value=null,this.form.checkedDate.value=null,this.form.linkSource.value=null},getCurrentTime(){const t=new Date,e=t.getHours()<10?`0${t.getHours()}`:t.getHours(),n=t.getMinutes()<10?`0${t.getMinutes()}`:t.getMinutes(),r=t.getSeconds()<10?`0${t.getSeconds()}`:t.getSeconds();return`${e}:${n}:${r}`},formatNumber(t){return t.replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,".")},async getEditData(){const t=await Uh(si(sn,"components",this.komponenId));if(!t.exists())this.$router.push({name:"notfound-view"});else{const e=t.data();e.prices.sort((i,o)=>i.checkedAt<o.checkedAt?1:-1),this.form.nama.value=e.name;const n=e.prices[0].price;this.form.harga.value=`Rp. ${this.formatNumber(n.toString())},00`;const r=new Date(e.prices[0].checkedAt.seconds*1e3),s={dd:r.getDate()<10?`0${r.getDate()}`:r.getDate(),mm:r.getMonth()<10?`0${r.getMonth()+1}`:r.getMonth()+1,yyyy:r.getFullYear()};this.form.checkedDate.value=`${s.yyyy}-${s.mm}-${s.dd}`,this.form.linkSource.value=e.prices[0].linkSource}}},async mounted(){var t;this.form.komponen.value=this.$route.params.type,this.komponenId?await this.getEditData():this.form.nama.value=(t=this.$route.query.nama)!=null?t:null},computed:{komponenId(){return this.$route.query.komponenId},priceId(){return this.$route.query.priceId}}},N3={class:"flex flex-col gap-3 overflow-y-auto scrollbar pr-3 py-3"};function R3(t,e,n,r,s,i){const o=J("NotificationPopup"),a=J("PageTitle"),l=J("FormDropdown"),c=J("FormInputSuggestion"),u=J("FormInputHarga"),h=J("FormInput"),f=J("FormTextarea"),m=J("FormButton"),g=J("PageContainer");return F(),St(g,{class:"relative flex flex-col"},{default:zt(()=>[D(nr,null,{default:zt(()=>[s.notification.isShow?(F(),St(o,{key:0,message:s.notification.message,onClose:i.closeNotification,onTimerFinished:i.closeNotification,type:s.notification.type},null,8,["message","onClose","onTimerFinished","type"])):Ct("",!0)]),_:1}),D(a,{text:`${i.komponenId?"Edit":"Tambah"} Komponen`,withBack:!0,path:t.$route.query.nama?"":`/komponen/${t.$route.params.type}`,class:"mb-5"},null,8,["text","path"]),b("div",N3,[D(l,{modelValue:s.form.komponen.value,"onUpdate:modelValue":e[0]||(e[0]=v=>s.form.komponen.value=v),"label-text":"Komponen","placeholder-option":"Pilih Komponen","has-error":s.form.komponen.hasError,"error-message":s.form.komponen.errMessage,options:s.komponenOptions,disabled:!0},null,8,["modelValue","has-error","error-message","options"]),D(c,{modelValue:s.form.nama.value,"onUpdate:modelValue":e[1]||(e[1]=v=>s.form.nama.value=v),onFindSuggestions:i.findSuggestions,suggestionLoading:s.suggestionLoading,"label-text":"Nama","placeholder-text":"Masukkan Nama","helper-text":"Contoh: GTX 770 2GB DDR5",suggestions:s.nameSuggestions,"has-error":s.form.nama.hasError,"error-message":s.form.nama.errMessage,disabled:!!t.$route.query.nama},null,8,["modelValue","onFindSuggestions","suggestionLoading","suggestions","has-error","error-message","disabled"]),D(u,{modelValue:s.form.harga.value,"onUpdate:modelValue":e[2]||(e[2]=v=>s.form.harga.value=v),labelText:"Harga",placeholderText:"Masukkan Harga",helperText:"Contoh: Rp. 1.100.000,00","has-error":s.form.harga.hasError,"error-message":s.form.harga.errMessage},null,8,["modelValue","helperText","has-error","error-message"]),D(h,{modelValue:s.form.checkedDate.value,"onUpdate:modelValue":e[3]||(e[3]=v=>s.form.checkedDate.value=v),inputType:"date",labelText:"Tanggal Cek",placeholderText:"Masukkan Tanggal Cek",helperText:"Contoh: 01/01/1970","has-error":s.form.checkedDate.hasError,"error-message":s.form.checkedDate.errMessage},null,8,["modelValue","has-error","error-message"]),D(f,{modelValue:s.form.linkSource.value,"onUpdate:modelValue":e[4]||(e[4]=v=>s.form.linkSource.value=v),labelText:"Link Sumber",placeholderText:"Masukkan Link Sumber",helperText:"Contoh: https://web.facebook.com/marketplace/item/426730202979181",height:3,"has-error":s.form.linkSource.hasError,"error-message":s.form.linkSource.errMessage},null,8,["modelValue","helperText","has-error","error-message"]),D(m,{onClick:i.submitForm,loading:s.formLoading,text:"Submit",class:"mx-auto"},null,8,["onClick","loading"])])]),_:1})}const D3=xe(C3,[["render",R3],["__scopeId","data-v-a97bb3f6"]]),O3={name:"DetailKomponenView",components:{PageContainer:Fs,PageTitle:Vr},data(){return{komponen:null}},methods:{goToURL(t){window.open(t,"_blank")},rupiahFormat(t){return`Rp. ${t.toString().replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,".")}`}},async mounted(){const t=this.$route.params.komponenId;try{const e=await Uh(si(sn,"/components",t));e.exists()&&(this.komponen={...e.data(),id:e.id},this.komponen.prices.sort((n,r)=>n.checkedAt>r.checkedAt?1:-1))}catch(e){console.log("Firebase err: ",e)}}},P3={key:0,class:"flex flex-col mt-5 gap-3 border py-2 px-4 border-emerald-300 rounded-sm h-4/5"},M3=b("h2",{class:"font-bold"},"Komponen",-1),L3=b("h2",{class:"font-bold"},"Nama",-1),F3={class:"flex justify-between items-center mb-1"},$3=b("h2",{class:"font-bold"},"Harga",-1),V3={class:"flex flex-col border py-2 px-4 border-emerald-300 divide-y divide-dashed divide-emerald-400"},U3={class:"flex-1 py-1"},B3={class:"font-medium text-emerald-500"},j3={key:1,class:"mt-5"};function H3(t,e,n,r,s,i){const o=J("PageTitle"),a=J("font-awesome-icon"),l=J("PageContainer");return F(),St(l,null,{default:zt(()=>[D(o,{text:"Detail Komponen","with-back":!0,path:`/komponen/${t.$route.params.type}`},null,8,["path"]),s.komponen?(F(),z("div",P3,[b("div",null,[M3,b("p",null,Te(t.$route.params.type.toUpperCase()),1)]),b("div",null,[L3,b("p",null,Te(s.komponen.name),1)]),b("div",null,[b("div",F3,[$3,b("button",{onClick:e[0]||(e[0]=c=>t.$router.push({name:"manage-komponen-view",params:{type:t.$route.params.type},query:{nama:s.komponen.name}})),class:"text-[12px] bg-emerald-500 text-white font-semibold px-2 rounded-sm hover:bg-emerald-800 transition duration-150 ease-in-out"},[D(a,{icon:"fa-solid fa-add"}),Gt(" Tambah Harga ")])]),b("div",V3,[(F(!0),z(Qe,null,ji(s.komponen.prices,(c,u)=>(F(),z("div",{key:u,class:"flex"},[b("div",U3,[D(a,{onClick:Bt(h=>i.goToURL(c.linkSource),["stop"]),icon:"fa-solid fa-link",class:"mr-2 text-blue-500 cursor-pointer hover:text-blue-300 transition duration-150 ease-in-out"},null,8,["onClick"]),b("span",B3,Te(i.rupiahFormat(c.price)),1)]),b("h5",null,Te(new Date(c.checkedAt.seconds*1e3).toLocaleDateString()),1)]))),128))])])])):(F(),z("div",j3," No data found "))]),_:1})}const q3=xe(O3,[["render",H3]]),z3={name:"ItemRencana",props:{name:{type:String,required:!0},price:{type:String,required:!0}}},K3={class:"transition duration-300 ease-in-out py-2"},W3={class:"font-bold uppercase truncate"},G3={class:"flex justify-between items-center overflow-hidden"},Y3={class:"truncate font-light grow"},Q3={class:"font-bold text-emerald-700 tracking-wider"},X3={class:"flex"};function J3(t,e,n,r,s,i){const o=J("font-awesome-icon");return F(),z("div",K3,[b("h3",W3,Te(n.name),1),b("div",G3,[b("h4",Y3,[Gt("Estimasi Harga: "),b("span",Q3,Te(n.price),1)]),b("div",X3,[D(o,{icon:"fa-solid fa-pencil",class:"text-orange-500 text-xl mr-1 cursor-pointer hover:bg-orange-100 p-2 rounded-full transition duration-150 ease-in-out w-4 h-4"}),D(o,{icon:"fa-solid fa-trash",class:"text-red-500 text-xl cursor-pointer hover:bg-red-100 p-2 rounded-full transition duration-150 ease-in-out w-4 h-4"})])])])}const Z3=xe(z3,[["render",J3]]),e4={name:"HomeView",components:{PageContainer:Fs,PageTitle:Vr,ItemIde:Z3},data(){return{ideas:[],isPageLoading:!1}},async mounted(){this.isPageLoading=!0;try{const t=await Es(_s(bs(sn,"ideas"),ka("createdAt","asc")));t.empty||(this.ideas=[...t.docs.map(e=>({...e.data(),id:e.id}))])}catch(t){console.log("firebase err: ",t)}this.isPageLoading=!1},methods:{rupiahFormat(t){return t.replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,".")}}},t4={class:"flex items-center justify-between mb-4"},n4={key:0,class:"divide-y flex flex-col overflow-y-auto scrollbar grow pr-3"},r4={key:1,class:"flex justify-center items-center h-full"},s4={key:0,class:"font-normal text-base text-gray-600 tracking-wider"},i4={key:1,class:"animate-spin h-10 w-10 text-emerald-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},o4=b("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),a4=b("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1),l4=[o4,a4];function c4(t,e,n,r,s,i){const o=J("PageTitle"),a=J("font-awesome-icon"),l=J("ItemIde"),c=J("PageContainer");return F(),St(c,{class:"flex flex-col"},{default:zt(()=>[D(o,{text:"List Ide",class:"mb-4"}),b("div",t4,[b("button",{type:"button",class:"bg-emerald-500 text-sm text-white px-2 rounded-sm hover:bg-emerald-700 transition duration-150 ease-in-out tracking-wide",onClick:e[0]||(e[0]=u=>t.$router.push({name:"manage-ide-view"}))},[D(a,{icon:"fa-solid fa-plus"}),Gt(" Tambah Ide ")])]),s.ideas.length>0?(F(),z("div",n4,[(F(!0),z(Qe,null,ji(s.ideas,(u,h)=>(F(),St(l,{key:h,name:u.name,price:`Rp. ${i.rupiahFormat(u.totalPrice.toString())},00`},null,8,["name","price"]))),128))])):(F(),z("div",r4,[s.isPageLoading?(F(),z("svg",i4,l4)):(F(),z("h3",s4,"Belum ada data"))]))]),_:1})}const u4=xe(e4,[["render",c4]]),h4={name:"ManageIdeView",components:{PageContainer:Fs,PageTitle:Vr,FormDropdown:_0,FormButton:E0,FormInput:Rl,NotificationPopup:I0},data(){return{form:{name:{value:"",hasError:"",rules:[{required:"Masukkan Nama Rakitan!"}]},processor:{value:"",hasError:"",rules:[{required:"Pilih salah satu Processor!"}]},motherboard:{value:"",hasError:"",rules:[{required:"Pilih salah satu Motherboard!"}]},vga:{value:"",hasError:"",rules:[{required:"Pilih salah satu VGA!"}]},storage:{value:"",hasError:"",rules:[{required:"Pilih salah satu Storage!"}]},psu:{value:"",hasError:"",rules:[{required:"Pilih salah satu PSU!"}]},ram:{value:"",hasError:"",rules:[{required:"Pilih salah satu RAM!"}]},isLoading:!1},dropdownData:{processor:[{text:"",value:0}],motherboard:[{text:"",value:0}],vga:[{text:"",value:0}],ram:[{text:"",value:0}],psu:[{text:"",value:0}],storage:[{text:"",value:0}]},notification:{isShow:!1,message:"",type:""}}},methods:{formValidate(){let t=!0;return Object.keys(this.form).forEach(e=>{typeof this.form[e]=="object"&&"rules"in this.form[e]&&this.form[e].rules.forEach(n=>{Object.keys(n)[0]==="required"&&(this.form[e].value===null||this.form[e].value.length===0)&&(this.form[e].hasError=!0,this.form[e].errMessage=n.required,t=!1)})}),t},async submitForm(){if(this.form.isLoading=!0,!this.formValidate()){this.form.isLoading=!1;return}const t=new Date,e={name:this.form.name.value,totalPrice:[this.getPrice("processor"),this.getPrice("motherboard"),this.getPrice("vga"),this.getPrice("psu"),this.getPrice("storage"),this.getPrice("ram")].reduce((n,r)=>n+r),komponen:{processor:this.form.processor.value,motherboard:this.form.motherboard.value,vga:this.form.vga.value,storage:this.form.storage.value,ram:this.form.ram.value},createdAt:t,updatedAt:t};try{const n=await Dv(bs(sn,"ideas"),e);console.log("Document created with ID: ",n.id),this.showNotification("success","Data berhasil ditambahkan!")}catch(n){console.log("firebase err:",n),this.showNotification("error","Something went wrong!")}this.form.isLoading=!1},async getComponents(t){if(this.dropdownData[t].length===1)try{const e=await Es(_s(bs(sn,"components"),Ci("type","==",t),ka("createdAt","asc")));e.empty||(this.dropdownData[t]=[...e.docs.map(n=>{const r=n.data().prices.sort((s,i)=>s.checkedAt<i.checkedAt?1:-1);return{text:`${n.data().name} - Rp. ${this.rupiahFormat(r[0].price.toString())},00`,value:n.id,doc:{...n.data(),prices:r,id:n.id}}})])}catch(e){console.log("firebase err: ",e)}},rupiahFormat(t){return t.replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,".")},closeNotification(){this.notification.type==="success"&&this.clearForm(),this.notification.isShow=!1},showNotification(t,e){this.notification.isShow=!0,this.notification.type=t,this.notification.message=e},clearForm(){this.form.name.value="",this.form.processor.value="",this.form.motherboard.value="",this.form.vga.value="",this.form.psu.value="",this.form.ram.value="",this.form.storage.value=""},getPrice(t){return this.dropdownData[t][this.dropdownData[t].findIndex(e=>e.value===this.form[t].value)].doc.prices[0].price}}},f4={class:"flex flex-col gap-3 overflow-y-auto scrollbar pr-3"};function d4(t,e,n,r,s,i){const o=J("NotificationPopup"),a=J("page-title"),l=J("form-input"),c=J("form-dropdown"),u=J("form-button"),h=J("page-container");return F(),St(h,{class:"flex flex-col"},{default:zt(()=>[D(nr,null,{default:zt(()=>[s.notification.isShow?(F(),St(o,{key:0,message:s.notification.message,onClose:i.closeNotification,onTimerFinished:i.closeNotification,type:s.notification.type},null,8,["message","onClose","onTimerFinished","type"])):Ct("",!0)]),_:1}),D(a,{text:"Tambah Ide",withBack:!0,path:"/ide",class:"mb-5"}),b("div",f4,[D(l,{modelValue:s.form.name.value,"onUpdate:modelValue":e[0]||(e[0]=f=>s.form.name.value=f),"label-text":"Nama Rakitan","placeholder-text":"Nama Rakitan","helper-text":"Contoh: Rakitan Kere Hore - Part #1"},null,8,["modelValue"]),D(c,{modelValue:s.form.processor.value,"onUpdate:modelValue":e[1]||(e[1]=f=>s.form.processor.value=f),"label-text":"Processor","placeholder-option":"Pilih Processor",options:s.dropdownData.processor,onSelectClick:e[2]||(e[2]=f=>i.getComponents("processor")),"helper-text":"Pilih salah satu processor"},null,8,["modelValue","options"]),D(c,{modelValue:s.form.motherboard.value,"onUpdate:modelValue":e[3]||(e[3]=f=>s.form.motherboard.value=f),"label-text":"Motherboard","placeholder-option":"Pilih Motherboard",options:s.dropdownData.motherboard,onSelectClick:e[4]||(e[4]=f=>i.getComponents("motherboard")),"helper-text":"Pilih salah satu motherboard"},null,8,["modelValue","options"]),D(c,{modelValue:s.form.vga.value,"onUpdate:modelValue":e[5]||(e[5]=f=>s.form.vga.value=f),"label-text":"VGA","placeholder-option":"Pilih VGA",options:s.dropdownData.vga,onSelectClick:e[6]||(e[6]=f=>i.getComponents("vga")),"helper-text":"Pilih salah satu vga"},null,8,["modelValue","options"]),D(c,{modelValue:s.form.ram.value,"onUpdate:modelValue":e[7]||(e[7]=f=>s.form.ram.value=f),"label-text":"RAM","placeholder-option":"Pilih RAM",options:s.dropdownData.ram,onSelectClick:e[8]||(e[8]=f=>i.getComponents("ram")),"helper-text":"Pilih salah satu ram"},null,8,["modelValue","options"]),D(c,{modelValue:s.form.psu.value,"onUpdate:modelValue":e[9]||(e[9]=f=>s.form.psu.value=f),"label-text":"PSU","placeholder-option":"Pilih PSU",options:s.dropdownData.psu,onSelectClick:e[10]||(e[10]=f=>i.getComponents("psu")),"helper-text":"Pilih salah satu psu"},null,8,["modelValue","options"]),D(c,{modelValue:s.form.storage.value,"onUpdate:modelValue":e[11]||(e[11]=f=>s.form.storage.value=f),"label-text":"Storage","placeholder-option":"Pilih Storage",options:s.dropdownData.storage,onSelectClick:e[12]||(e[12]=f=>i.getComponents("storage")),"helper-text":"Pilih salah satu storage"},null,8,["modelValue","options"]),D(u,{onClick:i.submitForm,loading:s.form.isLoading,text:"Submit",class:"mx-auto"},null,8,["onClick","loading"])])]),_:1})}const m4=xe(h4,[["render",d4]]),p4={name:"PrimaryButton",props:{text:{type:String,required:!0},isLoading:{type:Boolean,default:!1},isSubmit:{type:Boolean,default:!1}},computed:{buttonClass(){return{"cursor-not-allowed":this.isLoading,"bg-emerald-700":this.isLoading,"bg-emerald-500":!this.isLoading}},buttonType(){return this.isSubmit?"submit":"button"}}},g4=["type","disabled"],y4={key:0,class:"animate-spin -ml-1 mr-3 h-4 w-4 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},v4=b("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),b4=b("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1),w4=[v4,b4],_4={class:"mx-auto"};function E4(t,e,n,r,s,i){return F(),z("button",{type:i.buttonType,disabled:n.isLoading,class:rt([i.buttonClass,"inline-flex items-center mx-auto px-5 py-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md my-5 hover:bg-emerald-700 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out tracking-wider sm:px-12"])},[n.isLoading?(F(),z("svg",y4,w4)):Ct("",!0),b("span",_4,Te(n.isLoading?"Loading...":n.text),1)],10,g4)}const T0=xe(p4,[["render",E4]]),I4={name:"ItemRencana"},T4={class:"px-10 py-3 active:bg-gray-200 transition duration-300 ease-in-out"},k4=b("h3",{class:"font-bold uppercase"},"Rakitan PC - INTEL CORE I9 13722K - GTX 4090 - 64 GB RAM",-1),x4={class:"flex justify-between py-2"},S4=b("h4",{class:"font-light"},[Gt("Estimasi Harga: "),b("span",{class:"font-bold text-emerald-700 tracking-wider"},"13jt - 23jt")],-1);function A4(t,e,n,r,s,i){const o=J("font-awesome-icon");return F(),z("div",T4,[k4,b("div",x4,[S4,b("div",null,[D(o,{icon:"fa-solid fa-pencil",class:"text-orange-500 text-xl mr-4 cursor-pointer hover:text-orange-700 transition duration-150 ease-in-out"}),D(o,{icon:"fa-solid fa-trash",class:"text-red-500 text-xl cursor-pointer hover:text-red-700 transition duration-150 ease-in-out"})])])])}const C4=xe(I4,[["render",A4]]),N4=_s(bs(sn,"plans"),Ci("is_active","==",!0),eu(1)),R4={name:"RencanaView",components:{ItemRencana:C4,PrimaryButton:T0,PageTitle:Vr},data(){return{isEmpty:!0,plans:[]}},methods:{goToBuatRencana(){this.$router.push("/tambah-rencana")}},mounted(){Es(N4).then(t=>{t.forEach(e=>{this.plans.push(e.data())})}).catch(t=>{console.log(t)})}},D4={key:0,class:"m-auto text-center"},O4=b("h3",{class:"font-light mb-2"},"Belum Ada Rencana!",-1),P4={key:1,class:"h-4/5 flex flex-col justify-between gap-3 p-4 border border-gray-200 rounded-lg"},M4=b("h3",{class:"text-lg uppercase font-bold text-gray-800"},"RAKITAN PC - INTEL CORE I7 7700K - GTX 3070TI - 32 GB RAM",-1),L4=b("h1",{class:"text-2xl font-bold uppercase text-center text-gray-800"},"17 Hari Lagi",-1),F4={class:"bg-emerald-100 border-0 p-4 rounded-lg flex flex-col gap-3 relative"},$4={class:"absolute -top-2 right-4"},V4={class:"flex flex-row max-w-max gap-1"},U4={class:"bg-orange-500 rounded-full p-1 flex"},B4={class:"bg-red-500 rounded-full p-1 flex"},j4=b("div",null,[b("h4",{class:"font-bold text-sm text-gray-800"},"Rencana Tanggal Pembelian"),b("p",null,"17 November 2022")],-1),H4={class:"flex justify-between mb-1"},q4=b("h4",{class:"font-bold text-sm text-gray-800"},"Dana Terkumpul",-1),z4={class:"bg-emerald-500 rounded-full px-1 flex"},K4=b("div",{class:"w-full bg-gray-100 rounded-full h-2.5"},[b("div",{class:"bg-emerald-500 h-2.5 rounded-full",style:{width:"45%"}})],-1),W4=b("div",{class:"flex justify-between font-bold text-emerald-500"},[b("span",null,"0"),b("span",null,"9.5jt"),b("span",null,"20jt")],-1);function G4(t,e,n,r,s,i){const o=J("PageTitle"),a=J("font-awesome-icon");return F(),z("div",{class:rt(["p-10 h-full flex-col",{flex:s.isEmpty}])},[D(o,{text:"Rencana Saat Ini",class:"mb-4"}),s.isEmpty?(F(),z("div",D4,[O4,b("button",{class:"text-sm text-emerald-500 font-bold hover:bg-emerald-100 px-3 py-1 rounded-lg transition duration-150 ease-in-out",onClick:e[0]||(e[0]=Bt(l=>i.goToBuatRencana(),["prevent"]))},"Buat Rencana")])):(F(),z("div",P4,[M4,L4,b("div",null,[b("div",F4,[b("div",$4,[b("div",V4,[b("button",U4,[D(a,{icon:"fa-solid fa-pencil-alt",class:"w-3 h-3 text-white self-center"})]),b("button",B4,[D(a,{icon:"fa-solid fa-trash",class:"w-3 h-3 text-white self-center"})])])]),j4,b("div",null,[b("div",H4,[q4,b("button",z4,[D(a,{icon:"fa-solid fa-add",class:"w-3 h-3 text-white self-center"})])]),K4,W4])])])]))],2)}const Y4=xe(R4,[["render",G4]]),Q4={name:"LoginView",components:{PrimaryButton:T0},data(){return{form:{user:null,pass:null,userHasError:!1,passHasError:!1,errorMsg:""},isLoading:!1}},methods:{login(){if(this.form.user===null||this.form.pass===null){console.log("cannot be empty");return}this.isLoading=!0,setTimeout(()=>{this.form.userHasError=!1,this.form.passHasError=!1,dx(Oi,`${this.form.user}@gmail.com`,this.form.pass).then(t=>{this.$router.push("/")}).catch(t=>{switch(t.code){case"auth/user-not-found":this.form.errorMsg="User not found!",this.form.userHasError=!0;break;case"auth/wrong-password":this.form.errorMsg="Wrong password!",this.form.passHasError=!0;break;default:this.form.errorMsg="Something went wrong!"}}).finally(()=>{this.isLoading=!1})},1e3)}}},X4={class:"p-10 h-full"},J4={class:"sm:w-9/12 sm:mx-auto md:w-4/6 lg:w-2/4"},Z4=b("label",{for:"username"},"Username",-1),eN={class:"sm:w-9/12 sm:mx-auto md:w-4/6 lg:w-2/4"},tN=b("label",{for:"password"},"Password",-1),nN={key:0,class:"-mt-36 text-center text-red-500"};function rN(t,e,n,r,s,i){const o=J("PrimaryButton");return F(),z("div",X4,[b("form",{onSubmit:e[2]||(e[2]=Bt(a=>i.login(),["prevent"])),class:"h-full grid grid-cols-1 gap-5 content-center"},[b("div",J4,[Z4,Nf(b("input",{type:"text",name:"username",autocomplete:"username","onUpdate:modelValue":e[0]||(e[0]=a=>s.form.user=a),class:rt([{"border-red-500":s.form.userHasError},"mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 transition duration-150 ease-in-out"])},null,2),[[ed,s.form.user]])]),b("div",eN,[tN,Nf(b("input",{type:"password",name:"password",autocomplete:"current-password","onUpdate:modelValue":e[1]||(e[1]=a=>s.form.pass=a),class:rt([{"border-red-500":s.form.passHasError},"mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 transition duration-150 ease-in-out"])},null,2),[[ed,s.form.pass]])]),D(o,{text:"Login",isLoading:s.isLoading,isSubmit:!0},null,8,["isLoading"])],32),s.form.userHasError||s.form.passHasError?(F(),z("p",nN,Te(s.form.errorMsg),1)):Ct("",!0)])}const sN=xe(Q4,[["render",rN]]),iN={name:"NotFoundView"},oN={class:"h-full flex"},aN=b("div",{class:"m-auto"},[b("h1",{class:"text-2xl font-bold uppercase text-center text-rose-500"},"404"),b("p",{class:"text-gray-700 font-thin"},"Page you are looking for is not exist")],-1),lN=[aN];function cN(t,e,n,r,s,i){return F(),z("div",oN,lN)}const uN=xe(iN,[["render",cN]]);function cc(t){return t.meta&&["motherboard","processor","ram","vga","storage","psu"].includes(t.params.type)?!0:{name:"notfound-view"}}const hN=[{path:"/komponen",name:"komponen-grid-view",component:iC,meta:{requiredAuth:!0,module:"komponen"}},{path:"/komponen/:type",name:"list-komponen-view2",component:NC,meta:{requiredAuth:!0,validateType:!0,module:"komponen"},beforeEnter:[cc]},{path:"/komponen/:type/manage",name:"manage-komponen-view",component:D3,meta:{requiredAuth:!0,validateType:!0,module:"komponen"},beforeEnter:[cc]},{path:"/komponen/:type/:komponenId",name:"detail-komponen-view",component:q3,meta:{requiredAuth:!0,validateType:!0,module:"komponen"},beforeEnter:[cc]},{path:"/ide",name:"list-ide-view",component:u4,meta:{requiredAuth:!0,module:"ide"}},{path:"/ide/manage",name:"manage-ide-view",component:m4,meta:{requiredAuth:!0,module:"ide"}},{path:"/",name:"rencana-view",component:Y4,meta:{requiredAuth:!0,module:"rencana"}},{path:"/login",name:"login-view",component:sN,meta:{guest:!0}},{path:"/:pathMatch(.*)*",name:"notfound-view",component:uN}],Zh=UA({history:nA(),routes:hN});Zh.beforeEach((t,e,n)=>{t.matched.some(r=>r.meta.requiredAuth)?Oi.onAuthStateChanged(r=>{r?n():n({name:"login-view"})}):n()});Zh.beforeEach((t,e,n)=>{t.matched.some(r=>r.meta.guest)?Oi.onAuthStateChanged(r=>{r?n({name:"rencana-view"}):n()}):n()});function Fm(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function V(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Fm(Object(n),!0).forEach(function(r){Ge(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Fm(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ra(t){return Ra=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ra(t)}function fN(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function $m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function dN(t,e,n){return e&&$m(t.prototype,e),n&&$m(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ge(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ef(t,e){return pN(t)||yN(t,e)||k0(t,e)||bN()}function mo(t){return mN(t)||gN(t)||k0(t)||vN()}function mN(t){if(Array.isArray(t))return ou(t)}function pN(t){if(Array.isArray(t))return t}function gN(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function yN(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],s=!0,i=!1,o,a;try{for(n=n.call(t);!(s=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));s=!0);}catch(l){i=!0,a=l}finally{try{!s&&n.return!=null&&n.return()}finally{if(i)throw a}}return r}}function k0(t,e){if(!!t){if(typeof t=="string")return ou(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ou(t,e)}}function ou(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function vN(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bN(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Vm=function(){},tf={},x0={},S0=null,A0={mark:Vm,measure:Vm};try{typeof window<"u"&&(tf=window),typeof document<"u"&&(x0=document),typeof MutationObserver<"u"&&(S0=MutationObserver),typeof performance<"u"&&(A0=performance)}catch{}var wN=tf.navigator||{},Um=wN.userAgent,Bm=Um===void 0?"":Um,Zn=tf,Oe=x0,jm=S0,No=A0;Zn.document;var Sn=!!Oe.documentElement&&!!Oe.head&&typeof Oe.addEventListener=="function"&&typeof Oe.createElement=="function",C0=~Bm.indexOf("MSIE")||~Bm.indexOf("Trident/"),Ro,Do,Oo,Po,Mo,En="___FONT_AWESOME___",au=16,N0="fa",R0="svg-inline--fa",Or="data-fa-i2svg",lu="data-fa-pseudo-element",_N="data-fa-pseudo-element-pending",nf="data-prefix",rf="data-icon",Hm="fontawesome-i2svg",EN="async",IN=["HTML","HEAD","STYLE","SCRIPT"],D0=function(){try{return!0}catch{return!1}}(),De="classic",Ve="sharp",sf=[De,Ve];function po(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[De]}})}var Mi=po((Ro={},Ge(Ro,De,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ge(Ro,Ve,{fa:"solid",fass:"solid","fa-solid":"solid"}),Ro)),Li=po((Do={},Ge(Do,De,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ge(Do,Ve,{solid:"fass"}),Do)),Fi=po((Oo={},Ge(Oo,De,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ge(Oo,Ve,{fass:"fa-solid"}),Oo)),TN=po((Po={},Ge(Po,De,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ge(Po,Ve,{"fa-solid":"fass"}),Po)),kN=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,O0="fa-layers-text",xN=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,SN=po((Mo={},Ge(Mo,De,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ge(Mo,Ve,{900:"fass"}),Mo)),P0=[1,2,3,4,5,6,7,8,9,10],AN=P0.concat([11,12,13,14,15,16,17,18,19,20]),CN=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],_r={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},$i=new Set;Object.keys(Li[De]).map($i.add.bind($i));Object.keys(Li[Ve]).map($i.add.bind($i));var NN=[].concat(sf,mo($i),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",_r.GROUP,_r.SWAP_OPACITY,_r.PRIMARY,_r.SECONDARY]).concat(P0.map(function(t){return"".concat(t,"x")})).concat(AN.map(function(t){return"w-".concat(t)})),li=Zn.FontAwesomeConfig||{};function RN(t){var e=Oe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function DN(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Oe&&typeof Oe.querySelector=="function"){var ON=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ON.forEach(function(t){var e=ef(t,2),n=e[0],r=e[1],s=DN(RN(n));s!=null&&(li[r]=s)})}var M0={styleDefault:"solid",familyDefault:"classic",cssPrefix:N0,replacementClass:R0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};li.familyPrefix&&(li.cssPrefix=li.familyPrefix);var xs=V(V({},M0),li);xs.autoReplaceSvg||(xs.observeMutations=!1);var H={};Object.keys(M0).forEach(function(t){Object.defineProperty(H,t,{enumerable:!0,set:function(n){xs[t]=n,ci.forEach(function(r){return r(H)})},get:function(){return xs[t]}})});Object.defineProperty(H,"familyPrefix",{enumerable:!0,set:function(e){xs.cssPrefix=e,ci.forEach(function(n){return n(H)})},get:function(){return xs.cssPrefix}});Zn.FontAwesomeConfig=H;var ci=[];function PN(t){return ci.push(t),function(){ci.splice(ci.indexOf(t),1)}}var Pn=au,tn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function MN(t){if(!(!t||!Sn)){var e=Oe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Oe.head.childNodes,r=null,s=n.length-1;s>-1;s--){var i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return Oe.head.insertBefore(e,r),t}}var LN="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Vi(){for(var t=12,e="";t-- >0;)e+=LN[Math.random()*62|0];return e}function $s(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function of(t){return t.classList?$s(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function L0(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function FN(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(L0(t[n]),'" ')},"").trim()}function Dl(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function af(t){return t.size!==tn.size||t.x!==tn.x||t.y!==tn.y||t.rotate!==tn.rotate||t.flipX||t.flipY}function $N(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:c}}function VN(t){var e=t.transform,n=t.width,r=n===void 0?au:n,s=t.height,i=s===void 0?au:s,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&C0?l+="translate(".concat(e.x/Pn-r/2,"em, ").concat(e.y/Pn-i/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Pn,"em), calc(-50% + ").concat(e.y/Pn,"em)) "):l+="translate(".concat(e.x/Pn,"em, ").concat(e.y/Pn,"em) "),l+="scale(".concat(e.size/Pn*(e.flipX?-1:1),", ").concat(e.size/Pn*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var UN=`:root, :host {
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
}`;function F0(){var t=N0,e=R0,n=H.cssPrefix,r=H.replacementClass,s=UN;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return s}var qm=!1;function uc(){H.autoAddCss&&!qm&&(MN(F0()),qm=!0)}var BN={mixout:function(){return{dom:{css:F0,insertCss:uc}}},hooks:function(){return{beforeDOMElementCreation:function(){uc()},beforeI2svg:function(){uc()}}}},In=Zn||{};In[En]||(In[En]={});In[En].styles||(In[En].styles={});In[En].hooks||(In[En].hooks={});In[En].shims||(In[En].shims=[]);var jt=In[En],$0=[],jN=function t(){Oe.removeEventListener("DOMContentLoaded",t),Da=1,$0.map(function(e){return e()})},Da=!1;Sn&&(Da=(Oe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Oe.readyState),Da||Oe.addEventListener("DOMContentLoaded",jN));function HN(t){!Sn||(Da?setTimeout(t,0):$0.push(t))}function go(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,s=t.children,i=s===void 0?[]:s;return typeof t=="string"?L0(t):"<".concat(e," ").concat(FN(r),">").concat(i.map(go).join(""),"</").concat(e,">")}function zm(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var qN=function(e,n){return function(r,s,i,o){return e.call(n,r,s,i,o)}},hc=function(e,n,r,s){var i=Object.keys(e),o=i.length,a=s!==void 0?qN(n,s):n,l,c,u;for(r===void 0?(l=1,u=e[i[0]]):(l=0,u=r);l<o;l++)c=i[l],u=a(u,e[c],c,e);return u};function zN(t){for(var e=[],n=0,r=t.length;n<r;){var s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function cu(t){var e=zN(t);return e.length===1?e[0].toString(16):null}function KN(t,e){var n=t.length,r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function Km(t){return Object.keys(t).reduce(function(e,n){var r=t[n],s=!!r.icon;return s?e[r.iconName]=r.icon:e[n]=r,e},{})}function uu(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,s=r===void 0?!1:r,i=Km(e);typeof jt.hooks.addPack=="function"&&!s?jt.hooks.addPack(t,Km(e)):jt.styles[t]=V(V({},jt.styles[t]||{}),i),t==="fas"&&uu("fa",e)}var Lo,Fo,$o,Yr=jt.styles,WN=jt.shims,GN=(Lo={},Ge(Lo,De,Object.values(Fi[De])),Ge(Lo,Ve,Object.values(Fi[Ve])),Lo),lf=null,V0={},U0={},B0={},j0={},H0={},YN=(Fo={},Ge(Fo,De,Object.keys(Mi[De])),Ge(Fo,Ve,Object.keys(Mi[Ve])),Fo);function QN(t){return~NN.indexOf(t)}function XN(t,e){var n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!QN(s)?s:null}var q0=function(){var e=function(i){return hc(Yr,function(o,a,l){return o[l]=hc(a,i,{}),o},{})};V0=e(function(s,i,o){if(i[3]&&(s[i[3]]=o),i[2]){var a=i[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){s[l.toString(16)]=o})}return s}),U0=e(function(s,i,o){if(s[o]=o,i[2]){var a=i[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){s[l]=o})}return s}),H0=e(function(s,i,o){var a=i[2];return s[o]=o,a.forEach(function(l){s[l]=o}),s});var n="far"in Yr||H.autoFetchSvg,r=hc(WN,function(s,i){var o=i[0],a=i[1],l=i[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(s.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(s.unicodes[o.toString(16)]={prefix:a,iconName:l}),s},{names:{},unicodes:{}});B0=r.names,j0=r.unicodes,lf=Ol(H.styleDefault,{family:H.familyDefault})};PN(function(t){lf=Ol(t.styleDefault,{family:H.familyDefault})});q0();function cf(t,e){return(V0[t]||{})[e]}function JN(t,e){return(U0[t]||{})[e]}function Er(t,e){return(H0[t]||{})[e]}function z0(t){return B0[t]||{prefix:null,iconName:null}}function ZN(t){var e=j0[t],n=cf("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function er(){return lf}var uf=function(){return{prefix:null,iconName:null,rest:[]}};function Ol(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?De:n,s=Mi[r][t],i=Li[r][t]||Li[r][s],o=t in jt.styles?t:null;return i||o||null}var Wm=($o={},Ge($o,De,Object.keys(Fi[De])),Ge($o,Ve,Object.keys(Fi[Ve])),$o);function Pl(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,s=r===void 0?!1:r,i=(e={},Ge(e,De,"".concat(H.cssPrefix,"-").concat(De)),Ge(e,Ve,"".concat(H.cssPrefix,"-").concat(Ve)),e),o=null,a=De;(t.includes(i[De])||t.some(function(c){return Wm[De].includes(c)}))&&(a=De),(t.includes(i[Ve])||t.some(function(c){return Wm[Ve].includes(c)}))&&(a=Ve);var l=t.reduce(function(c,u){var h=XN(H.cssPrefix,u);if(Yr[u]?(u=GN[a].includes(u)?TN[a][u]:u,o=u,c.prefix=u):YN[a].indexOf(u)>-1?(o=u,c.prefix=Ol(u,{family:a})):h?c.iconName=h:u!==H.replacementClass&&u!==i[De]&&u!==i[Ve]&&c.rest.push(u),!s&&c.prefix&&c.iconName){var f=o==="fa"?z0(c.iconName):{},m=Er(c.prefix,c.iconName);f.prefix&&(o=null),c.iconName=f.iconName||m||c.iconName,c.prefix=f.prefix||c.prefix,c.prefix==="far"&&!Yr.far&&Yr.fas&&!H.autoFetchSvg&&(c.prefix="fas")}return c},uf());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Ve&&(Yr.fass||H.autoFetchSvg)&&(l.prefix="fass",l.iconName=Er(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=er()||"fas"),l}var eR=function(){function t(){fN(this,t),this.definitions={}}return dN(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];var o=s.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=V(V({},n.definitions[a]||{}),o[a]),uu(a,o[a]);var l=Fi[De][a];l&&uu(l,o[a]),q0()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(i){var o=s[i],a=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(h){typeof h=="string"&&(n[a][h]=c)}),n[a][l]=c}),n}}]),t}(),Gm=[],Qr={},as={},tR=Object.keys(as);function nR(t,e){var n=e.mixoutsTo;return Gm=t,Qr={},Object.keys(as).forEach(function(r){tR.indexOf(r)===-1&&delete as[r]}),Gm.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(o){typeof s[o]=="function"&&(n[o]=s[o]),Ra(s[o])==="object"&&Object.keys(s[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=s[o][a]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Qr[o]||(Qr[o]=[]),Qr[o].push(i[o])})}r.provides&&r.provides(as)}),n}function hu(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];var i=Qr[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Pr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var s=Qr[t]||[];s.forEach(function(i){i.apply(null,n)})}function Tn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return as[t]?as[t].apply(null,e):void 0}function fu(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||er();if(!!e)return e=Er(n,e)||e,zm(K0.definitions,n,e)||zm(jt.styles,n,e)}var K0=new eR,rR=function(){H.autoReplaceSvg=!1,H.observeMutations=!1,Pr("noAuto")},sR={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Sn?(Pr("beforeI2svg",e),Tn("pseudoElements2svg",e),Tn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;H.autoReplaceSvg===!1&&(H.autoReplaceSvg=!0),H.observeMutations=!0,HN(function(){oR({autoReplaceSvgRoot:n}),Pr("watch",e)})}},iR={icon:function(e){if(e===null)return null;if(Ra(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Er(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Ol(e[0]);return{prefix:r,iconName:Er(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(H.cssPrefix,"-"))>-1||e.match(kN))){var s=Pl(e.split(" "),{skipLookups:!0});return{prefix:s.prefix||er(),iconName:Er(s.prefix,s.iconName)||s.iconName}}if(typeof e=="string"){var i=er();return{prefix:i,iconName:Er(i,e)||e}}}},Nt={noAuto:rR,config:H,dom:sR,parse:iR,library:K0,findIconDefinition:fu,toHtml:go},oR=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Oe:n;(Object.keys(jt.styles).length>0||H.autoFetchSvg)&&Sn&&H.autoReplaceSvg&&Nt.dom.i2svg({node:r})};function Ml(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return go(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!Sn){var r=Oe.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function aR(t){var e=t.children,n=t.main,r=t.mask,s=t.attributes,i=t.styles,o=t.transform;if(af(o)&&n.found&&!r.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};s.style=Dl(V(V({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function lR(t){var e=t.prefix,n=t.iconName,r=t.children,s=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(H.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:V(V({},s),{},{id:o}),children:r}]}]}function hf(t){var e=t.icons,n=e.main,r=e.mask,s=t.prefix,i=t.iconName,o=t.transform,a=t.symbol,l=t.title,c=t.maskId,u=t.titleId,h=t.extra,f=t.watchable,m=f===void 0?!1:f,g=r.found?r:n,v=g.width,T=g.height,y=s==="fak",_=[H.replacementClass,i?"".concat(H.cssPrefix,"-").concat(i):""].filter(function(ae){return h.classes.indexOf(ae)===-1}).filter(function(ae){return ae!==""||!!ae}).concat(h.classes).join(" "),O={children:[],attributes:V(V({},h.attributes),{},{"data-prefix":s,"data-icon":i,class:_,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(T)})},U=y&&!~h.classes.indexOf("fa-fw")?{width:"".concat(v/T*16*.0625,"em")}:{};m&&(O.attributes[Or]=""),l&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(u||Vi())},children:[l]}),delete O.attributes.title);var X=V(V({},O),{},{prefix:s,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:a,styles:V(V({},U),h.styles)}),fe=r.found&&n.found?Tn("generateAbstractMask",X)||{children:[],attributes:{}}:Tn("generateAbstractIcon",X)||{children:[],attributes:{}},me=fe.children,ee=fe.attributes;return X.children=me,X.attributes=ee,a?lR(X):aR(X)}function Ym(t){var e=t.content,n=t.width,r=t.height,s=t.transform,i=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,c=V(V(V({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[Or]="");var u=V({},o.styles);af(s)&&(u.transform=VN({transform:s,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var h=Dl(u);h.length>0&&(c.style=h);var f=[];return f.push({tag:"span",attributes:c,children:[e]}),i&&f.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),f}function cR(t){var e=t.content,n=t.title,r=t.extra,s=V(V(V({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Dl(r.styles);i.length>0&&(s.style=i);var o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var fc=jt.styles;function du(t){var e=t[0],n=t[1],r=t.slice(4),s=ef(r,1),i=s[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(H.cssPrefix,"-").concat(_r.GROUP)},children:[{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(_r.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(_r.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var uR={found:!1,width:512,height:512};function hR(t,e){!D0&&!H.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function mu(t,e){var n=e;return e==="fa"&&H.styleDefault!==null&&(e=er()),new Promise(function(r,s){if(Tn("missingIconAbstract"),n==="fa"){var i=z0(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&fc[e]&&fc[e][t]){var o=fc[e][t];return r(du(o))}hR(t,e),r(V(V({},uR),{},{icon:H.showMissingIcons&&t?Tn("missingIconAbstract")||{}:{}}))})}var Qm=function(){},pu=H.measurePerformance&&No&&No.mark&&No.measure?No:{mark:Qm,measure:Qm},Qs='FA "6.2.0"',fR=function(e){return pu.mark("".concat(Qs," ").concat(e," begins")),function(){return W0(e)}},W0=function(e){pu.mark("".concat(Qs," ").concat(e," ends")),pu.measure("".concat(Qs," ").concat(e),"".concat(Qs," ").concat(e," begins"),"".concat(Qs," ").concat(e," ends"))},ff={begin:fR,end:W0},Xo=function(){};function Xm(t){var e=t.getAttribute?t.getAttribute(Or):null;return typeof e=="string"}function dR(t){var e=t.getAttribute?t.getAttribute(nf):null,n=t.getAttribute?t.getAttribute(rf):null;return e&&n}function mR(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(H.replacementClass)}function pR(){if(H.autoReplaceSvg===!0)return Jo.replace;var t=Jo[H.autoReplaceSvg];return t||Jo.replace}function gR(t){return Oe.createElementNS("http://www.w3.org/2000/svg",t)}function yR(t){return Oe.createElement(t)}function G0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?gR:yR:n;if(typeof t=="string")return Oe.createTextNode(t);var s=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){s.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){s.appendChild(G0(o,{ceFn:r}))}),s}function vR(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Jo={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(s){n.parentNode.insertBefore(G0(s),n)}),n.getAttribute(Or)===null&&H.keepOriginalSource){var r=Oe.createComment(vR(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~of(n).indexOf(H.replacementClass))return Jo.replace(e);var s=new RegExp("".concat(H.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(a,l){return l===H.replacementClass||l.match(s)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(a){return go(a)}).join(`
`);n.setAttribute(Or,""),n.innerHTML=o}};function Jm(t){t()}function Y0(t,e){var n=typeof e=="function"?e:Xo;if(t.length===0)n();else{var r=Jm;H.mutateApproach===EN&&(r=Zn.requestAnimationFrame||Jm),r(function(){var s=pR(),i=ff.begin("mutate");t.map(s),i(),n()})}}var df=!1;function Q0(){df=!0}function gu(){df=!1}var Oa=null;function Zm(t){if(!!jm&&!!H.observeMutations){var e=t.treeCallback,n=e===void 0?Xo:e,r=t.nodeCallback,s=r===void 0?Xo:r,i=t.pseudoElementsCallback,o=i===void 0?Xo:i,a=t.observeMutationsRoot,l=a===void 0?Oe:a;Oa=new jm(function(c){if(!df){var u=er();$s(c).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!Xm(h.addedNodes[0])&&(H.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&H.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&Xm(h.target)&&~CN.indexOf(h.attributeName))if(h.attributeName==="class"&&dR(h.target)){var f=Pl(of(h.target)),m=f.prefix,g=f.iconName;h.target.setAttribute(nf,m||u),g&&h.target.setAttribute(rf,g)}else mR(h.target)&&s(h.target)})}}),Sn&&Oa.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function bR(){!Oa||Oa.disconnect()}function wR(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,s){var i=s.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function _R(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",s=Pl(of(t));return s.prefix||(s.prefix=er()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=JN(s.prefix,t.innerText)||cf(s.prefix,cu(t.innerText))),!s.iconName&&H.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function ER(t){var e=$s(t.attributes).reduce(function(s,i){return s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return H.autoA11y&&(n?e["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(r||Vi()):(e["aria-hidden"]="true",e.focusable="false")),e}function IR(){return{iconName:null,title:null,titleId:null,prefix:null,transform:tn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ep(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=_R(t),r=n.iconName,s=n.prefix,i=n.rest,o=ER(t),a=hu("parseNodeAttributes",{},t),l=e.styleParser?wR(t):[];return V({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:s,transform:tn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},a)}var TR=jt.styles;function X0(t){var e=H.autoReplaceSvg==="nest"?ep(t,{styleParser:!1}):ep(t);return~e.extra.classes.indexOf(O0)?Tn("generateLayersText",t,e):Tn("generateSvgReplacementMutation",t,e)}var tr=new Set;sf.map(function(t){tr.add("fa-".concat(t))});Object.keys(Mi[De]).map(tr.add.bind(tr));Object.keys(Mi[Ve]).map(tr.add.bind(tr));tr=mo(tr);function tp(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Sn)return Promise.resolve();var n=Oe.documentElement.classList,r=function(h){return n.add("".concat(Hm,"-").concat(h))},s=function(h){return n.remove("".concat(Hm,"-").concat(h))},i=H.autoFetchSvg?tr:sf.map(function(u){return"fa-".concat(u)}).concat(Object.keys(TR));i.includes("fa")||i.push("fa");var o=[".".concat(O0,":not([").concat(Or,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(Or,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=$s(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),s("complete");else return Promise.resolve();var l=ff.begin("onTree"),c=a.reduce(function(u,h){try{var f=X0(h);f&&u.push(f)}catch(m){D0||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise(function(u,h){Promise.all(c).then(function(f){Y0(f,function(){r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(f){l(),h(f)})})}function kR(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;X0(t).then(function(n){n&&Y0([n],e)})}function xR(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:fu(e||{}),s=n.mask;return s&&(s=(s||{}).icon?s:fu(s||{})),t(r,V(V({},n),{},{mask:s}))}}var SR=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,s=r===void 0?tn:r,i=n.symbol,o=i===void 0?!1:i,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,h=n.title,f=h===void 0?null:h,m=n.titleId,g=m===void 0?null:m,v=n.classes,T=v===void 0?[]:v,y=n.attributes,_=y===void 0?{}:y,O=n.styles,U=O===void 0?{}:O;if(!!e){var X=e.prefix,fe=e.iconName,me=e.icon;return Ml(V({type:"icon"},e),function(){return Pr("beforeDOMElementCreation",{iconDefinition:e,params:n}),H.autoA11y&&(f?_["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(g||Vi()):(_["aria-hidden"]="true",_.focusable="false")),hf({icons:{main:du(me),mask:l?du(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:X,iconName:fe,transform:V(V({},tn),s),symbol:o,title:f,maskId:u,titleId:g,extra:{attributes:_,styles:U,classes:T}})})}},AR={mixout:function(){return{icon:xR(SR)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=tp,n.nodeCallback=kR,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,s=r===void 0?Oe:r,i=n.callback,o=i===void 0?function(){}:i;return tp(s,o)},e.generateSvgReplacementMutation=function(n,r){var s=r.iconName,i=r.title,o=r.titleId,a=r.prefix,l=r.transform,c=r.symbol,u=r.mask,h=r.maskId,f=r.extra;return new Promise(function(m,g){Promise.all([mu(s,a),u.iconName?mu(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var T=ef(v,2),y=T[0],_=T[1];m([n,hf({icons:{main:y,mask:_},prefix:a,iconName:s,transform:l,symbol:c,maskId:h,title:i,titleId:o,extra:f,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){var r=n.children,s=n.attributes,i=n.main,o=n.transform,a=n.styles,l=Dl(a);l.length>0&&(s.style=l);var c;return af(o)&&(c=Tn("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:s}}}},CR={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,i=s===void 0?[]:s;return Ml({type:"layer"},function(){Pr("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(H.cssPrefix,"-layers")].concat(mo(i)).join(" ")},children:o}]})}}}},NR={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,i=s===void 0?null:s,o=r.classes,a=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,h=u===void 0?{}:u;return Ml({type:"counter",content:n},function(){return Pr("beforeDOMElementCreation",{content:n,params:r}),cR({content:n.toString(),title:i,extra:{attributes:c,styles:h,classes:["".concat(H.cssPrefix,"-layers-counter")].concat(mo(a))}})})}}}},RR={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,i=s===void 0?tn:s,o=r.title,a=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,h=u===void 0?{}:u,f=r.styles,m=f===void 0?{}:f;return Ml({type:"text",content:n},function(){return Pr("beforeDOMElementCreation",{content:n,params:r}),Ym({content:n,transform:V(V({},tn),i),title:a,extra:{attributes:h,styles:m,classes:["".concat(H.cssPrefix,"-layers-text")].concat(mo(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var s=r.title,i=r.transform,o=r.extra,a=null,l=null;if(C0){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return H.autoA11y&&!s&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ym({content:n.innerHTML,width:a,height:l,transform:i,title:s,extra:o,watchable:!0})])}}},DR=new RegExp('"',"ug"),np=[1105920,1112319];function OR(t){var e=t.replace(DR,""),n=KN(e,0),r=n>=np[0]&&n<=np[1],s=e.length===2?e[0]===e[1]:!1;return{value:cu(s?e[0]:e),isSecondary:r||s}}function rp(t,e){var n="".concat(_N).concat(e.replace(":","-"));return new Promise(function(r,s){if(t.getAttribute(n)!==null)return r();var i=$s(t.children),o=i.filter(function(me){return me.getAttribute(lu)===e})[0],a=Zn.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(xN),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&u!=="none"&&u!==""){var h=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?Ve:De,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Li[f][l[2].toLowerCase()]:SN[f][c],g=OR(h),v=g.value,T=g.isSecondary,y=l[0].startsWith("FontAwesome"),_=cf(m,v),O=_;if(y){var U=ZN(v);U.iconName&&U.prefix&&(_=U.iconName,m=U.prefix)}if(_&&!T&&(!o||o.getAttribute(nf)!==m||o.getAttribute(rf)!==O)){t.setAttribute(n,O),o&&t.removeChild(o);var X=IR(),fe=X.extra;fe.attributes[lu]=e,mu(_,m).then(function(me){var ee=hf(V(V({},X),{},{icons:{main:me,mask:uf()},prefix:m,iconName:O,extra:fe,watchable:!0})),ae=Oe.createElement("svg");e==="::before"?t.insertBefore(ae,t.firstChild):t.appendChild(ae),ae.outerHTML=ee.map(function(ye){return go(ye)}).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function PR(t){return Promise.all([rp(t,"::before"),rp(t,"::after")])}function MR(t){return t.parentNode!==document.head&&!~IN.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(lu)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function sp(t){if(!!Sn)return new Promise(function(e,n){var r=$s(t.querySelectorAll("*")).filter(MR).map(PR),s=ff.begin("searchPseudoElements");Q0(),Promise.all(r).then(function(){s(),gu(),e()}).catch(function(){s(),gu(),n()})})}var LR={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=sp,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,s=r===void 0?Oe:r;H.searchPseudoElements&&sp(s)}}},ip=!1,FR={mixout:function(){return{dom:{unwatch:function(){Q0(),ip=!0}}}},hooks:function(){return{bootstrap:function(){Zm(hu("mutationObserverCallbacks",{}))},noAuto:function(){bR()},watch:function(n){var r=n.observeMutationsRoot;ip?gu():Zm(hu("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},op=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,s){var i=s.toLowerCase().split("-"),o=i[0],a=i.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},$R={mixout:function(){return{parse:{transform:function(n){return op(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-transform");return s&&(n.transform=op(s)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,s=n.transform,i=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(s.x*32,", ").concat(s.y*32,") "),c="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),u="rotate(".concat(s.rotate," 0 0)"),h={transform:"".concat(l," ").concat(c," ").concat(u)},f={transform:"translate(".concat(o/2*-1," -256)")},m={outer:a,inner:h,path:f};return{tag:"g",attributes:V({},m.outer),children:[{tag:"g",attributes:V({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:V(V({},r.icon.attributes),m.path)}]}]}}}},dc={x:0,y:0,width:"100%",height:"100%"};function ap(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function VR(t){return t.tag==="g"?t.children:[t]}var UR={hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-mask"),i=s?Pl(s.split(" ").map(function(o){return o.trim()})):uf();return i.prefix||(i.prefix=er()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,s=n.attributes,i=n.main,o=n.mask,a=n.maskId,l=n.transform,c=i.width,u=i.icon,h=o.width,f=o.icon,m=$N({transform:l,containerWidth:h,iconWidth:c}),g={tag:"rect",attributes:V(V({},dc),{},{fill:"white"})},v=u.children?{children:u.children.map(ap)}:{},T={tag:"g",attributes:V({},m.inner),children:[ap(V({tag:u.tag,attributes:V(V({},u.attributes),m.path)},v))]},y={tag:"g",attributes:V({},m.outer),children:[T]},_="mask-".concat(a||Vi()),O="clip-".concat(a||Vi()),U={tag:"mask",attributes:V(V({},dc),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,y]},X={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:VR(f)},U]};return r.push(X,{tag:"rect",attributes:V({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(_,")")},dc)}),{children:r,attributes:s}}}},BR={provides:function(e){var n=!1;Zn.matchMedia&&(n=Zn.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],s={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:V(V({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=V(V({},i),{},{attributeName:"opacity"}),a={tag:"circle",attributes:V(V({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:V(V({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:V(V({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:V(V({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:V(V({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:V(V({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:V(V({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},jR={hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-symbol"),i=s===null?!1:s===""?!0:s;return n.symbol=i,n}}}},HR=[BN,AR,CR,NR,RR,LR,FR,$R,UR,BR,jR];nR(HR,{mixoutsTo:Nt});Nt.noAuto;var J0=Nt.config,qR=Nt.library;Nt.dom;var Pa=Nt.parse;Nt.findIconDefinition;Nt.toHtml;var zR=Nt.icon;Nt.layer;var KR=Nt.text;Nt.counter;function lp(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Vt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?lp(Object(n),!0).forEach(function(r){_t(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):lp(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ma(t){return Ma=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ma(t)}function _t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function WR(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function GR(t,e){if(t==null)return{};var n=WR(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function yu(t){return YR(t)||QR(t)||XR(t)||JR()}function YR(t){if(Array.isArray(t))return vu(t)}function QR(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function XR(t,e){if(!!t){if(typeof t=="string")return vu(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return vu(t,e)}}function vu(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function JR(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ZR=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Z0={exports:{}};(function(t){(function(e){var n=function(y,_,O){if(!c(_)||h(_)||f(_)||m(_)||l(_))return _;var U,X=0,fe=0;if(u(_))for(U=[],fe=_.length;X<fe;X++)U.push(n(y,_[X],O));else{U={};for(var me in _)Object.prototype.hasOwnProperty.call(_,me)&&(U[y(me,O)]=n(y,_[me],O))}return U},r=function(y,_){_=_||{};var O=_.separator||"_",U=_.split||/(?=[A-Z])/;return y.split(U).join(O)},s=function(y){return g(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(_,O){return O?O.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var _=s(y);return _.substr(0,1).toUpperCase()+_.substr(1)},o=function(y,_){return r(y,_).toLowerCase()},a=Object.prototype.toString,l=function(y){return typeof y=="function"},c=function(y){return y===Object(y)},u=function(y){return a.call(y)=="[object Array]"},h=function(y){return a.call(y)=="[object Date]"},f=function(y){return a.call(y)=="[object RegExp]"},m=function(y){return a.call(y)=="[object Boolean]"},g=function(y){return y=y-0,y===y},v=function(y,_){var O=_&&"process"in _?_.process:_;return typeof O!="function"?y:function(U,X){return O(U,y,X)}},T={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,_){return n(v(s,_),y)},decamelizeKeys:function(y,_){return n(v(o,_),y,_)},pascalizeKeys:function(y,_){return n(v(i,_),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=T:e.humps=T})(ZR)})(Z0);var eD=Z0.exports,tD=["class","style"];function nD(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=eD.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function rD(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function mf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return mf(l)}),s=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=rD(u);break;case"style":l.style=nD(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,a=GR(n,tD);return Hi(t.tag,Vt(Vt(Vt({},e),{},{class:s.class,style:Vt(Vt({},s.style),o)},s.attrs),a),r)}var e1=!1;try{e1=!0}catch{}function sD(){if(!e1&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ui(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?_t({},t,e):{}}function iD(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},_t(e,"fa-".concat(t.size),t.size!==null),_t(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),_t(e,"fa-pull-".concat(t.pull),t.pull!==null),_t(e,"fa-swap-opacity",t.swapOpacity),_t(e,"fa-bounce",t.bounce),_t(e,"fa-shake",t.shake),_t(e,"fa-beat",t.beat),_t(e,"fa-fade",t.fade),_t(e,"fa-beat-fade",t.beatFade),_t(e,"fa-flash",t.flash),_t(e,"fa-spin-pulse",t.spinPulse),_t(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function cp(t){if(t&&Ma(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Pa.icon)return Pa.icon(t);if(t===null)return null;if(Ma(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var oD=Bi({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=$e(function(){return cp(e.icon)}),i=$e(function(){return ui("classes",iD(e))}),o=$e(function(){return ui("transform",typeof e.transform=="string"?Pa.transform(e.transform):e.transform)}),a=$e(function(){return ui("mask",cp(e.mask))}),l=$e(function(){return zR(s.value,Vt(Vt(Vt(Vt({},i.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});Xs(l,function(u){if(!u)return sD("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var c=$e(function(){return l.value?mf(l.value.abstract[0],{},r):null});return function(){return c.value}}});Bi({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var r=n.slots,s=J0.familyPrefix,i=$e(function(){return["".concat(s,"-layers")].concat(yu(e.fixedWidth?["".concat(s,"-fw")]:[]))});return function(){return Hi("div",{class:i.value},r.default?r.default():[])}}});Bi({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var r=n.attrs,s=J0.familyPrefix,i=$e(function(){return ui("classes",[].concat(yu(e.counter?["".concat(s,"-layers-counter")]:[]),yu(e.position?["".concat(s,"-layers-").concat(e.position)]:[])))}),o=$e(function(){return ui("transform",typeof e.transform=="string"?Pa.transform(e.transform):e.transform)}),a=$e(function(){var c=KR(e.value.toString(),Vt(Vt({},o.value),i.value)),u=c.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=$e(function(){return mf(a.value,{},r)});return function(){return l.value}}});var aD={prefix:"fas",iconName:"info",icon:[192,512,[],"f129","M144 80c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"]},t1={prefix:"fas",iconName:"pencil",icon:[512,512,[9999,61504,"pencil-alt"],"f303","M421.7 220.3l-11.3 11.3-22.6 22.6-205 205c-6.6 6.6-14.8 11.5-23.8 14.1L30.8 511c-8.4 2.5-17.5 .2-23.7-6.1S-1.5 489.7 1 481.2L38.7 353.1c2.6-9 7.5-17.2 14.1-23.8l205-205 22.6-22.6 11.3-11.3 33.9 33.9 62.1 62.1 33.9 33.9zM96 353.9l-9.3 9.3c-.9 .9-1.6 2.1-2 3.4l-25.3 86 86-25.3c1.3-.4 2.5-1.1 3.4-2l9.3-9.3H112c-8.8 0-16-7.2-16-16V353.9zM453.3 19.3l39.4 39.4c25 25 25 65.5 0 90.5l-14.5 14.5-22.6 22.6-11.3 11.3-33.9-33.9-62.1-62.1L314.3 67.7l11.3-11.3 22.6-22.6 14.5-14.5c25-25 65.5-25 90.5 0z"]},lD=t1,cD={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},uD={prefix:"fas",iconName:"lightbulb",icon:[384,512,[128161],"f0eb","M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"]},hD={prefix:"fas",iconName:"arrow-right-from-bracket",icon:[576,512,["sign-out"],"f08b","M534.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L434.7 224 224 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM192 96c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-53 0-96 43-96 96l0 256c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"]},fD=hD,dD={prefix:"fas",iconName:"memory",icon:[576,512,[],"f538","M64 64C28.7 64 0 92.7 0 128v7.4c0 6.8 4.4 12.6 10.1 16.3C23.3 160.3 32 175.1 32 192s-8.7 31.7-21.9 40.3C4.4 236 0 241.8 0 248.6V320H576V248.6c0-6.8-4.4-12.6-10.1-16.3C552.7 223.7 544 208.9 544 192s8.7-31.7 21.9-40.3c5.7-3.7 10.1-9.5 10.1-16.3V128c0-35.3-28.7-64-64-64H64zM576 352H0v64c0 17.7 14.3 32 32 32H80V416c0-8.8 7.2-16 16-16s16 7.2 16 16v32h96V416c0-8.8 7.2-16 16-16s16 7.2 16 16v32h96V416c0-8.8 7.2-16 16-16s16 7.2 16 16v32h96V416c0-8.8 7.2-16 16-16s16 7.2 16 16v32h48c17.7 0 32-14.3 32-32V352zM192 160v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32z"]},mD={prefix:"fas",iconName:"microchip",icon:[512,512,[],"f2db","M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64c-35.3 0-64 28.7-64 64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64c0 35.3 28.7 64 64 64v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448c35.3 0 64-28.7 64-64h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V176h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448c0-35.3-28.7-64-64-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H176V24zM160 128H352c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm192 32H160V352H352V160z"]},pD={prefix:"fas",iconName:"question",icon:[320,512,[10067,10068,61736],"3f","M96 96c-17.7 0-32 14.3-32 32s-14.3 32-32 32s-32-14.3-32-32C0 75 43 32 96 32h97c70.1 0 127 56.9 127 127c0 52.4-32.2 99.4-81 118.4l-63 24.5 0 18.1c0 17.7-14.3 32-32 32s-32-14.3-32-32V301.9c0-26.4 16.2-50.1 40.8-59.6l63-24.5C240 208.3 256 185 256 159c0-34.8-28.2-63-63-63H96zm48 384c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40z"]},gD={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},yD={prefix:"fas",iconName:"hard-drive",icon:[512,512,[128436,"hdd"],"f0a0","M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V280.4c-17-15.2-39.4-24.4-64-24.4H64c-24.6 0-47 9.2-64 24.4V96zM64 288H448c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V352c0-35.3 28.7-64 64-64zM320 416c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32zm128-32c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z"]},vD={prefix:"fas",iconName:"keyboard",icon:[576,512,[9e3],"f11c","M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm16 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm80-176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V144zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zM160 336c0-8.8 7.2-16 16-16H400c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V336zM272 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM256 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM368 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM352 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V240zM464 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM448 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V240zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16z"]},bD={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},wD=bD,_D={prefix:"fas",iconName:"bolt",icon:[448,512,[9889,"zap"],"f0e7","M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"]},ED={prefix:"fas",iconName:"link",icon:[640,512,[128279,"chain"],"f0c1","M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]},ID={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"]},TD={prefix:"fas",iconName:"square-pen",icon:[448,512,["pen-square","pencil-square"],"f14b","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM325.8 139.7l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-21.4 21.4-71-71 21.4-21.4c15.6-15.6 40.9-15.6 56.6 0zM119.9 289L225.1 183.8l71 71L190.9 359.9c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9z"]},kD=TD,xD={prefix:"fas",iconName:"battery-full",icon:[576,512,[128267,"battery","battery-5"],"f240","M0 176c0-44.2 35.8-80 80-80H464c44.2 0 80 35.8 80 80v16c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32v16c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V176zm80-16c-8.8 0-16 7.2-16 16V336c0 8.8 7.2 16 16 16H464c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H80zm368 32V320H96V192H448z"]},SD=xD,AD={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},CD={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]},ND=CD,RD={prefix:"fas",iconName:"chevron-left",icon:[384,512,[9001],"f053","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},DD={prefix:"fas",iconName:"chevron-right",icon:[384,512,[9002],"f054","M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},OD={prefix:"fas",iconName:"display",icon:[576,512,[],"e163","M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V352H64V64H512z"]},PD={prefix:"fas",iconName:"check",icon:[512,512,[10003,10004],"f00c","M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},MD={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z"]},LD=MD,FD={prefix:"fas",iconName:"database",icon:[448,512,[],"f1c0","M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"]};qR.add(RD,DD,cD,AD,wD,FD,fD,t1,gD,lD,kD,uD,ND,LD,ED,ID,PD,pD,aD,mD,dD,OD,yD,SD,vD,_D);Aw(FS).use(Zh).component("font-awesome-icon",oD).mount("#app");
