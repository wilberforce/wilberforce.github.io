var At=Object.defineProperty,wt=Object.defineProperties;var xt=Object.getOwnPropertyDescriptors;var et=Object.getOwnPropertySymbols;var Et=Object.prototype.hasOwnProperty,St=Object.prototype.propertyIsEnumerable;var st=(r,t,e)=>t in r?At(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,q=(r,t)=>{for(var e in t||(t={}))Et.call(t,e)&&st(r,e,t[e]);if(et)for(var e of et(t))St.call(t,e)&&st(r,e,t[e]);return r},V=(r,t)=>wt(r,xt(t));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,F=Symbol(),it=new Map;class rt{constructor(t,e){if(this._$cssResult$=!0,e!==F)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=it.get(this.cssText);return W&&t===void 0&&(it.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const kt=r=>new rt(typeof r=="string"?r:r+"",F),x=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new rt(e,F)},Ct=(r,t)=>{W?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const s=document.createElement("style"),i=window.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)})},ot=W?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return kt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var K;const nt=window.reactiveElementPolyfillSupport,J={toAttribute(r,t){switch(t){case Boolean:r=r?"":null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},lt=(r,t)=>t!==r&&(t==t||r==r),Q={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:lt};class E extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,s)=>{const i=this._$Eh(s,e);i!==void 0&&(this._$Eu.set(i,s),t.push(i))}),t}static createProperty(t,e=Q){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const o=this[t];this[e]=i,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Q}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of s)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(ot(i))}else t!==void 0&&e.push(ot(t));return e}static _$Eh(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Ep(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$Em)!==null&&e!==void 0?e:this._$Em=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$Em)===null||e===void 0||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Ct(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Em)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Em)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$Eg(t,e,s=Q){var i,o;const n=this.constructor._$Eh(t,s);if(n!==void 0&&s.reflect===!0){const h=((o=(i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==null&&o!==void 0?o:J.toAttribute)(e,s.type);this._$Ei=t,h==null?this.removeAttribute(n):this.setAttribute(n,h),this._$Ei=null}}_$AK(t,e){var s,i,o;const n=this.constructor,h=n._$Eu.get(t);if(h!==void 0&&this._$Ei!==h){const l=n.getPropertyOptions(h),a=l.converter,v=(o=(i=(s=a)===null||s===void 0?void 0:s.fromAttribute)!==null&&i!==void 0?i:typeof a=="function"?a:null)!==null&&o!==void 0?o:J.fromAttribute;this._$Ei=h,this[h]=v(e,l.type),this._$Ei=null}}requestUpdate(t,e,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||lt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Ei!==t&&(this._$ES===void 0&&(this._$ES=new Map),this._$ES.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((i,o)=>this[o]=i),this._$Et=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$Em)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostUpdate)===null||o===void 0?void 0:o.call(i)}),this.update(s)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$Em)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){this._$ES!==void 0&&(this._$ES.forEach((e,s)=>this._$Eg(s,this[s],e)),this._$ES=void 0),this._$EU()}updated(t){}firstUpdated(t){}}E.finalized=!0,E.elementProperties=new Map,E.elementStyles=[],E.shadowRootOptions={mode:"open"},nt==null||nt({ReactiveElement:E}),((K=globalThis.reactiveElementVersions)!==null&&K!==void 0?K:globalThis.reactiveElementVersions=[]).push("1.0.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Z;const L=globalThis.trustedTypes,at=L?L.createPolicy("lit-html",{createHTML:r=>r}):void 0,_=`lit$${(Math.random()+"").slice(9)}$`,ht="?"+_,Ot=`<${ht}>`,S=document,P=(r="")=>S.createComment(r),U=r=>r===null||typeof r!="object"&&typeof r!="function",ct=Array.isArray,Pt=r=>{var t;return ct(r)||typeof((t=r)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,dt=/-->/g,pt=/>/g,A=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,ut=/'/g,vt=/"/g,ft=/^(?:script|style|textarea)$/i,gt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),g=gt(1),Ut=gt(2),k=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),bt=new WeakMap,Tt=(r,t,e)=>{var s,i;const o=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t;let n=o._$litPart$;if(n===void 0){const h=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=n=new N(t.insertBefore(P(),h),h,void 0,e!=null?e:{})}return n._$AI(r),n},C=S.createTreeWalker(S,129,null,!1),Ht=(r,t)=>{const e=r.length-1,s=[];let i,o=t===2?"<svg>":"",n=T;for(let l=0;l<e;l++){const a=r[l];let v,c,d=-1,f=0;for(;f<a.length&&(n.lastIndex=f,c=n.exec(a),c!==null);)f=n.lastIndex,n===T?c[1]==="!--"?n=dt:c[1]!==void 0?n=pt:c[2]!==void 0?(ft.test(c[2])&&(i=RegExp("</"+c[2],"g")),n=A):c[3]!==void 0&&(n=A):n===A?c[0]===">"?(n=i!=null?i:T,d=-1):c[1]===void 0?d=-2:(d=n.lastIndex-c[2].length,v=c[1],n=c[3]===void 0?A:c[3]==='"'?vt:ut):n===vt||n===ut?n=A:n===dt||n===pt?n=T:(n=A,i=void 0);const D=n===A&&r[l+1].startsWith("/>")?" ":"";o+=n===T?a+Ot:d>=0?(s.push(v),a.slice(0,d)+"$lit$"+a.slice(d)+_+D):a+_+(d===-2?(s.push(void 0),l):D)}const h=o+(r[e]||"<?>")+(t===2?"</svg>":"");return[at!==void 0?at.createHTML(h):h,s]};class H{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const h=t.length-1,l=this.parts,[a,v]=Ht(t,e);if(this.el=H.createElement(a,s),C.currentNode=this.el.content,e===2){const c=this.el.content,d=c.firstChild;d.remove(),c.append(...d.childNodes)}for(;(i=C.nextNode())!==null&&l.length<h;){if(i.nodeType===1){if(i.hasAttributes()){const c=[];for(const d of i.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(_)){const f=v[n++];if(c.push(d),f!==void 0){const D=i.getAttribute(f.toLowerCase()+"$lit$").split(_),B=/([.?@])?(.*)/.exec(f);l.push({type:1,index:o,name:B[2],strings:D,ctor:B[1]==="."?Mt:B[1]==="?"?Rt:B[1]==="@"?Dt:j})}else l.push({type:6,index:o})}for(const d of c)i.removeAttribute(d)}if(ft.test(i.tagName)){const c=i.textContent.split(_),d=c.length-1;if(d>0){i.textContent=L?L.emptyScript:"";for(let f=0;f<d;f++)i.append(c[f],P()),C.nextNode(),l.push({type:2,index:++o});i.append(c[d],P())}}}else if(i.nodeType===8)if(i.data===ht)l.push({type:2,index:o});else{let c=-1;for(;(c=i.data.indexOf(_,c+1))!==-1;)l.push({type:7,index:o}),c+=_.length-1}o++}}static createElement(t,e){const s=S.createElement("template");return s.innerHTML=t,s}}function O(r,t,e=r,s){var i,o,n,h;if(t===k)return t;let l=s!==void 0?(i=e._$Cl)===null||i===void 0?void 0:i[s]:e._$Cu;const a=U(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(r),l._$AT(r,e,s)),s!==void 0?((n=(h=e)._$Cl)!==null&&n!==void 0?n:h._$Cl=[])[s]=l:e._$Cu=l),l!==void 0&&(t=O(r,l._$AS(r,t.values),l,s)),t}class Nt{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:i}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:S).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),h=0,l=0,a=i[0];for(;a!==void 0;){if(h===a.index){let v;a.type===2?v=new N(n,n.nextSibling,this,t):a.type===1?v=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(v=new Bt(n,this,t)),this.v.push(v),a=i[++l]}h!==(a==null?void 0:a.index)&&(n=C.nextNode(),h++)}return o}m(t){let e=0;for(const s of this.v)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class N{constructor(t,e,s,i){var o;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cg=(o=i==null?void 0:i.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),U(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==k&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.S(t):Pt(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==p&&U(this._$AH)?this._$AA.nextSibling.data=t:this.S(S.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=H.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.m(s);else{const n=new Nt(o,this),h=n.p(this.options);n.m(s),this.S(h),this._$AH=n}}_$AC(t){let e=bt.get(t.strings);return e===void 0&&bt.set(t.strings,e=new H(t)),e}M(t){ct(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new N(this.A(P()),this.A(P()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class j{constructor(t,e,s,i,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(o===void 0)t=O(this,t,e,0),n=!U(t)||t!==this._$AH&&t!==k,n&&(this._$AH=t);else{const h=t;let l,a;for(t=o[0],l=0;l<o.length-1;l++)a=O(this,h[s+l],e,l),a===k&&(a=this._$AH[l]),n||(n=!U(a)||a!==this._$AH[l]),a===p?t=p:t!==p&&(t+=(a!=null?a:"")+o[l+1]),this._$AH[l]=a}n&&!i&&this.k(t)}k(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Mt extends j{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===p?void 0:t}}class Rt extends j{constructor(){super(...arguments),this.type=4}k(t){t&&t!==p?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class Dt extends j{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){var s;if((t=(s=O(this,t,e,0))!==null&&s!==void 0?s:p)===k)return;const i=this._$AH,o=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==p&&(i===p||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class Bt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}}const $t=window.litHtmlPolyfillSupport;$t==null||$t(H,N),((Z=globalThis.litHtmlVersions)!==null&&Z!==void 0?Z:globalThis.litHtmlVersions=[]).push("2.0.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Y,G;class $ extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Tt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return k}}$.finalized=!0,$._$litElement$=!0,(Y=globalThis.litElementHydrateSupport)===null||Y===void 0||Y.call(globalThis,{LitElement:$});const mt=globalThis.litElementPolyfillSupport;mt==null||mt({LitElement:$});((G=globalThis.litElementVersions)!==null&&G!==void 0?G:globalThis.litElementVersions=[]).push("3.0.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=r=>t=>typeof t=="function"?((e,s)=>(window.customElements.define(e,s),s))(r,t):((e,s)=>{const{kind:i,elements:o}=s;return{kind:i,elements:o,finisher(n){window.customElements.define(e,n)}}})(r,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt=(r,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?V(q({},t),{finisher(e){e.createProperty(t.key,r)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,r)}};function u(r){return(t,e)=>e!==void 0?((s,i,o)=>{i.constructor.createProperty(o,s)})(r,t,e):Lt(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jt=({finisher:r,descriptor:t})=>(e,s)=>{var i;if(s===void 0){const o=(i=e.originalKey)!==null&&i!==void 0?i:e.key,n=t!=null?{kind:"method",placement:"prototype",key:o,descriptor:t(e.key)}:V(q({},e),{key:o});return r!=null&&(n.finisher=function(h){r(h,o)}),n}{const o=e.constructor;t!==void 0&&Object.defineProperty(e,s,t(s)),r==null||r(o,s)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function zt(r,t){return jt({descriptor:e=>{const s={get(){var i,o;return(o=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(r))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0};if(t){const i=typeof e=="symbol"?Symbol():"__"+e;s.get=function(){var o,n;return this[i]===void 0&&(this[i]=(n=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(r))!==null&&n!==void 0?n:null),this[i]}}return s}})}var X=x`:host{font-family:ui-monospace,system-ui,Helvetica,"Arial Narrow",Roboto,Oxygen,Ubuntu,sans-serif;color-scheme:light dark;--primary-color:#03a9f4;transition:all 350ms!important}`,yt=x`.btn,button{cursor:pointer;border-radius:4px;background-color:inherit;background-image:linear-gradient(0deg,rgba(127,127,127,.5) 0,rgba(127,127,127,.5) 100%);color:inherit;border:1px solid rgba(127,127,127,.5);height:1.2rem;padding-left:.25rem;padding-right:.25rem}.btn:active,button:active{background-image:linear-gradient(0deg,rgba(127,127,127,.8) 0,rgba(127,127,127,.2) 100%);transition-duration:1s}.btn:hover,button:hover{background-image:linear-gradient(0deg,rgba(127,127,127,.2) 0,rgba(127,127,127,.8) 100%);transition-duration:1s}`,It=Object.defineProperty,qt=Object.getOwnPropertyDescriptor,tt=(r,t,e,s)=>{for(var i=s>1?void 0:s?qt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&It(t,e,i),i};let z=class extends ${constructor(){super();this.entities=[]}connectedCallback(){super.connectedCallback(),this.source.addEventListener("state",r=>{const t=r,e=JSON.parse(t.data);let s=this.entities.findIndex(i=>i.unique_id===e.id);if(s===-1){let i=e.id.split("-"),o={unique_id:e.id,domain:i[0],id:i.slice(1).join("-"),state:e.state,value:e.value,name:e.name||e.id,icon:e.icon||null};this.entities.push(o),this.requestUpdate()}else this.entities[s].state=e.state,this.entities[s].value=e.value,this.requestUpdate()})}actionButton(r,t,e){let s=e||t.toLowerCase();return g`<button class="btn" @click="${()=>this.restAction(r,s)}">${t}</button>`}actionButtonOn(r){return this.actionButton(r,"On","turn_on")}actionButtonOff(r){return this.actionButton(r,"Off","turn_off")}actionButtonToggle(r){return this.actionButton(r,"Toggle")}control(r){return r.domain==="fan"||r.domain==="switch"||r.domain==="light"?g`<esp-switch color="var(--primary-color,currentColor)" .state="${r.state}" @state="${t=>{let e="turn_"+t.detail.state;this.restAction(r,e.toLowerCase())}}"></esp-switch>`:r.domain==="cover"?g`${this.actionButton(r,"Open")} ${this.actionButton(r,"Close")} ${this.actionButton(r,"Stop")}`:g``}restAction(r,t){fetch(`/${r.domain}/${r.id}/${t}`,{method:"POST",body:"true"}).then(e=>{console.log(e)})}render(){return g`<table><thead><tr><th>Name</th><th>State</th><th>Actions</th></tr></thead><tbody>${this.entities.map(r=>g`<tr><td>${r.name}</td><td>${r.state}</td><td>${this.control(r)}</td></tr>`)}</tbody></table>`}static get styles(){return[X,yt,x`table{border-spacing:0;border-collapse:collapse;width:100%;border:1px solid currentColor}th{font-weight:600;text-align:left}td,th{padding:.25rem .5rem;border:1px solid currentColor}tr th,tr:nth-child(2n){background-color:rgba(127,127,127,.3)}`]}};tt([u({type:Array})],z.prototype,"entities",2);tt([u({attribute:!1})],z.prototype,"source",2);z=tt([M("esp-entity-table")],z);var Vt=Object.defineProperty,Wt=Object.getOwnPropertyDescriptor,I=(r,t,e,s)=>{for(var i=s>1?void 0:s?Wt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&Vt(t,e,i),i};let R=class extends ${constructor(){super();this.rows=10,this.logs=[],this.logs=[]}connectedCallback(){super.connectedCallback(),this.source.addEventListener("log",r=>{const e=r.data;let s=e.slice(10,e.length-4).split(":");const o={type:{"[1;31m":"e","[0;33m":"w","[0;32m":"i","[0;35m":"c","[0;36m":"d","[0;37m":"v"}[e.slice(0,7)],level:e.slice(7,10),tag:`${s[0]}:${s[1]}`,detail:s[2],when:new Date().toTimeString().split(" ")[0]};this.logs.unshift(o),this.logs=this.logs.slice(0,this.rows)})}render(){return g`<div style="overflow-x:auto"><table><thead><tr><th>Debug</th><th style="width:50%">Detail</th><th>Time</th><th>level</th></tr></thead><tbody>${this.logs.map(r=>g`<tr class="${r.type}"><td>${r.tag}</td><td><pre>${r.detail}</pre></td><td>${r.when}</td><td>${r.level}</td></tr>`)}</tbody></table></div>`}static get styles(){return x`table{font-family:monospace;background-color:#1c1c1c;color:#fff;width:100%;border:1px solid #dfe2e5;line-height:1}thead{border:1px solid #dfe2e5;line-height:1rem}th{text-align:left}td,th{padding:.25rem .5rem}pre{margin:0}.v{color:#888}.d{color:#0dd}.c{color:#ff00ff}.i{color:#32cd32}.w{color:#ff0}.e{color:red;font-weight:700}`}};I([u({type:Number})],R.prototype,"rows",2);I([u({type:Array})],R.prototype,"logs",2);I([u({attribute:!1})],R.prototype,"source",2);R=I([M("esp-log")],R);var Ft=Object.defineProperty,Kt=Object.getOwnPropertyDescriptor,m=(r,t,e,s)=>{for(var i=s>1?void 0:s?Kt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&Ft(t,e,i),i};let b=class extends ${constructor(){super(...arguments);this.labelOn="On",this.labelOff="Off",this.stateOn="ON",this.stateOff="OFF",this.state="OFF",this.color="currentColor",this.checked=!1,this.disabled=!1}toggle(){this.checked=!this.checked,this.state=this.checked?this.stateOn:this.stateOff;let r=new CustomEvent("state",{detail:{state:this.state,id:this.id}});this.dispatchEvent(r)}requestUpdate(r,t){return r&&r=="state"&&this.state!==t&&(this.checked=this.state===this.stateOn),super.requestUpdate(r,t)}connectedCallback(){super.connectedCallback(),this.checked=this.state===this.stateOn}render(){return g`<div class="sw"><label>${this.labelOff} <input type="checkbox" ?checked="${this.checked}" ?disabled="${this.disabled}" @click="${this.toggle}"> <span style="color:${this.color}" class="lever"></span> ${this.labelOn}</label></div>`}static get styles(){return[X,x`.sw,.sw *{-webkit-tap-highlight-color:transparent;user-select:none}.sw label{cursor:pointer}.sw label input[type=checkbox]{opacity:0;width:0;height:0}.sw label input[type=checkbox]:checked+.lever{background-color:currentColor;background-image:linear-gradient(0deg,rgba(255,255,255,.5) 0,rgba(255,255,255,.5) 100%)}.sw label input[type=checkbox]:checked+.lever:after,.sw label input[type=checkbox]:checked+.lever:before{left:18px}.sw label input[type=checkbox]:checked+.lever:after{background-color:currentColor}.sw label .lever{content:"";display:inline-block;position:relative;width:36px;height:14px;background-image:linear-gradient(0deg,rgba(127,127,127,.5) 0,rgba(127,127,127,.5) 100%);background-color:inherit;border-radius:15px;margin-right:10px;transition:background .3s ease;vertical-align:middle;margin:0 16px}.sw label .lever:after,.sw label .lever:before{content:"";position:absolute;display:inline-block;width:20px;height:20px;border-radius:50%;left:0;top:-3px;transition:left .3s ease,background .3s ease,box-shadow .1s ease,transform .1s ease}.sw label .lever:before{background-color:currentColor;background-image:linear-gradient(0deg,rgba(255,255,255,.9) 0,rgba(255,255,255,.9) 100%)}.sw label .lever:after{background-color:#f1f1f1;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}input[type=checkbox]:checked:not(:disabled).tabbed:focus~.lever::before,input[type=checkbox]:checked:not(:disabled)~.lever:active::before{transform:scale(2.4);background-color:currentColor;background-image:linear-gradient(0deg,rgba(255,255,255,.9) 0,rgba(255,255,255,.9) 100%)}input[type=checkbox]:not(:disabled).tabbed:focus~.lever::before,input[type=checkbox]:not(:disabled)~.lever:active:before{transform:scale(2.4);background-color:rgba(0,0,0,.08)}.sw input[type=checkbox][disabled]+.lever{cursor:default;background-color:rgba(0,0,0,.12)}.sw label input[type=checkbox][disabled]+.lever:after,.sw label input[type=checkbox][disabled]:checked+.lever:after{background-color:#949494}`]}};m([u({type:String})],b.prototype,"labelOn",2);m([u({type:String})],b.prototype,"labelOff",2);m([u({type:String})],b.prototype,"stateOn",2);m([u({type:String})],b.prototype,"stateOff",2);m([u({type:String})],b.prototype,"state",2);m([u({type:String})],b.prototype,"color",2);m([u({type:Boolean})],b.prototype,"checked",2);m([u({type:Boolean})],b.prototype,"disabled",2);b=m([M("esp-switch")],b);var Jt='<svg xmlns="http://www.w3.org/2000/svg" viewBox="7 8 73 56" width="73" height="56"><g style="fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"><g id="b"><path d="M27 16v-4c0-1 1-2.7 2-2.7 2 0 3 1.7 3 2.7v4" id="a"/><use x="9" href="#a"/><use x="18" href="#a"/><use x="27" href="#a"/><use x="36" href="#a"/><use x="45" href="#a"/></g><use transform="matrix(1 0 0 -1 0 72)" href="#b"/><path d="M78 16H26c-1 0-1 1-1 1v38c0 1 0 1 1 1h52c1 0 1 0 1-1V17s0-1-1-1z" class="box"/><path d="M40 38h2.9v7.8h17V38h2.9l-2.9-2.9V30h-1.8v3.3l-6.8-6.8z" class="home" fill="currentColor"/><path d="M24 54H8v-4h12v-4H8v-4h12v-4H8v-4h12v-4H8V18" class="aerial"/></g></svg>',Qt=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,Yt=(r,t,e,s)=>{for(var i=s>1?void 0:s?Zt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&Qt(t,e,i),i};let _t=class extends ${render(){return Ut([Jt])}};_t=Yt([M("esp-logo")],_t);var Gt=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,w=(r,t,e,s)=>{for(var i=s>1?void 0:s?Xt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&Gt(t,e,i),i};let y=class extends ${constructor(){super();this.scheme="",this.version="1.9.9",this.schemeChecked=!1,this.ping="",this.source=new EventSource("/events"),this.darkQuery=window.matchMedia("(prefers-color-scheme: dark)"),this.frames=[{color:"inherit"},{color:"red",transform:"scale(1.25) translateY(-30%)"},{color:"inherit"}],this.darkQuery.addEventListener("change",()=>{this.scheme=this.isDark()}),this.scheme=this.isDark(),this.source.addEventListener("ping",r=>{const t=r;this.ping=t.lastEventId}),this.source.onerror=function(r){console.dir(r)}}isDark(){return this.darkQuery.matches?"dark":"light"}updated(r){r.has("scheme")&&document.documentElement.style.setProperty("color-scheme",this.scheme),r.has("ping")&&this.beat.animate(this.frames,1e3)}render(){return g`<h1><a href="https://esphome.io/web-api" style="width:6rem;height:4rem;float:left;color:inherit"><esp-logo></esp-logo>${document.title} <span id="beat" style="float:right;height:1rem" title="${this.version}">❤</span></h1><main class="flex-grid-half"><section class="col"><esp-entity-table .source="${this.source}"></esp-entity-table><h2><esp-switch color="var(--primary-color,currentColor)" style="float:right" .state="${this.scheme}" @state="${r=>this.scheme=r.detail.state}" labelOn="🌒" labelOff="☀️" stateOn="dark" stateOff="light"></esp-switch>Scheme</h2><h2>OTA Update</h2><form method="POST" action="/update" enctype="multipart/form-data"><input class="btn" type="file" name="update"> <input class="btn" type="submit" value="Update"></form></section><section class="col"><esp-log rows="50" .source="${this.source}"></esp-log></section></main>`}static get styles(){return[X,yt,x`.flex-grid{display:flex}.flex-grid .col{flex:2}.flex-grid-half{display:flex;justify-content:space-evenly}.col{width:48%}@media (max-width:600px){.flex-grid,.flex-grid-half{display:block}.col{width:100%;margin:0 0 10px 0}}*{box-sizing:border-box}.flex-grid{margin:0 0 20px 0}h1{text-align:center;width:100%;line-height:4rem}h1,h2{border-bottom:1px solid #eaecef;margin-bottom:.25rem}`]}};y.properties={scheme:{}};w([u({type:String})],y.prototype,"scheme",2);w([u({type:String})],y.prototype,"version",2);w([u({type:Boolean})],y.prototype,"schemeChecked",2);w([u({type:String})],y.prototype,"ping",2);w([u({attribute:!1})],y.prototype,"source",2);w([zt("#beat")],y.prototype,"beat",2);y=w([M("esp-app")],y);
