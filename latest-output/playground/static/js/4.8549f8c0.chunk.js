(this["webpackJsonpelectron-playground"]=this["webpackJsonpelectron-playground"]||[]).push([[4],{1031:function(t,e,r){var n=r(441),o=r(623),i=r(1037),c=r(1040),u=r(270),a=r(152),s=r(342),f=r(438),p="[object Object]",l=Object.prototype.hasOwnProperty;t.exports=function(t,e,r,v,h,b){var _=a(t),y=a(e),x=_?"[object Array]":u(t),j=y?"[object Array]":u(e),d=(x="[object Arguments]"==x?p:x)==p,g=(j="[object Arguments]"==j?p:j)==p,O=x==j;if(O&&s(t)){if(!s(e))return!1;_=!0,d=!1}if(O&&!d)return b||(b=new n),_||f(t)?o(t,e,r,v,h,b):i(t,e,x,r,v,h,b);if(!(1&r)){var w=d&&l.call(t,"__wrapped__"),m=g&&l.call(e,"__wrapped__");if(w||m){var A=w?t.value():t,z=m?e.value():e;return b||(b=new n),h(A,z,r,v,b)}}return!!O&&(b||(b=new n),c(t,e,r,v,h,b))}},1032:function(t,e,r){var n=r(431),o=r(1033),i=r(1034);function c(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new n;++e<r;)this.add(t[e])}c.prototype.add=c.prototype.push=o,c.prototype.has=i,t.exports=c},1033:function(t,e){t.exports=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this}},1034:function(t,e){t.exports=function(t){return this.__data__.has(t)}},1035:function(t,e){t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}},1036:function(t,e){t.exports=function(t,e){return t.has(e)}},1037:function(t,e,r){var n=r(237),o=r(608),i=r(337),c=r(623),u=r(1038),a=r(1039),s=n?n.prototype:void 0,f=s?s.valueOf:void 0;t.exports=function(t,e,r,n,s,p,l){switch(r){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!p(new o(t),new o(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return i(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var v=u;case"[object Set]":var h=1&n;if(v||(v=a),t.size!=e.size&&!h)return!1;var b=l.get(t);if(b)return b==e;n|=2,l.set(t,e);var _=c(v(t),v(e),n,s,p,l);return l.delete(t),_;case"[object Symbol]":if(f)return f.call(t)==f.call(e)}return!1}},1038:function(t,e){t.exports=function(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}},1039:function(t,e){t.exports=function(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}},1040:function(t,e,r){var n=r(605),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,r,i,c,u){var a=1&r,s=n(t),f=s.length;if(f!=n(e).length&&!a)return!1;for(var p=f;p--;){var l=s[p];if(!(a?l in e:o.call(e,l)))return!1}var v=u.get(t),h=u.get(e);if(v&&h)return v==e&&h==t;var b=!0;u.set(t,e),u.set(e,t);for(var _=a;++p<f;){var y=t[l=s[p]],x=e[l];if(i)var j=a?i(x,y,l,e,t,u):i(y,x,l,t,e,u);if(!(void 0===j?y===x||c(y,x,r,i,u):j)){b=!1;break}_||(_="constructor"==l)}if(b&&!_){var d=t.constructor,g=e.constructor;d==g||!("constructor"in t)||!("constructor"in e)||"function"==typeof d&&d instanceof d&&"function"==typeof g&&g instanceof g||(b=!1)}return u.delete(t),u.delete(e),b}},152:function(t,e){var r=Array.isArray;t.exports=r},160:function(t,e,r){var n=r(588),o="object"==typeof self&&self&&self.Object===Object&&self,i=n||o||Function("return this")();t.exports=i},161:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},182:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},200:function(t,e,r){var n=r(598),o=r(599),i=r(238);t.exports=function(t){return i(t)?n(t):o(t)}},216:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},217:function(t,e,r){var n=r(904),o=r(907);t.exports=function(t,e){var r=o(t,e);return n(r)?r:void 0}},237:function(t,e,r){var n=r(160).Symbol;t.exports=n},238:function(t,e,r){var n=r(589),o=r(435);t.exports=function(t){return null!=t&&o(t.length)&&!n(t)}},266:function(t,e,r){var n=r(237),o=r(896),i=r(897),c=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":c&&c in Object(t)?o(t):i(t)}},269:function(t,e){var r=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||r)}},270:function(t,e,r){var n=r(957),o=r(432),i=r(958),c=r(959),u=r(960),a=r(266),s=r(590),f=s(n),p=s(o),l=s(i),v=s(c),h=s(u),b=a;(n&&"[object DataView]"!=b(new n(new ArrayBuffer(1)))||o&&"[object Map]"!=b(new o)||i&&"[object Promise]"!=b(i.resolve())||c&&"[object Set]"!=b(new c)||u&&"[object WeakMap]"!=b(new u))&&(b=function(t){var e=a(t),r="[object Object]"==e?t.constructor:void 0,n=r?s(r):"";if(n)switch(n){case f:return"[object DataView]";case p:return"[object Map]";case l:return"[object Promise]";case v:return"[object Set]";case h:return"[object WeakMap]"}return e}),t.exports=b},334:function(t,e,r){var n=r(217)(Object,"create");t.exports=n},335:function(t,e,r){var n=r(912),o=r(913),i=r(914),c=r(915),u=r(916);function a(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}a.prototype.clear=n,a.prototype.delete=o,a.prototype.get=i,a.prototype.has=c,a.prototype.set=u,t.exports=a},336:function(t,e,r){var n=r(337);t.exports=function(t,e){for(var r=t.length;r--;)if(n(t[r][0],e))return r;return-1}},337:function(t,e){t.exports=function(t,e){return t===e||t!==t&&e!==e}},338:function(t,e,r){var n=r(918);t.exports=function(t,e){var r=t.__data__;return n(e)?r["string"==typeof e?"string":"hash"]:r.map}},340:function(t,e){var r=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&r.test(t))&&t>-1&&t%1==0&&t<e}},341:function(t,e,r){var n=r(926),o=r(216),i=Object.prototype,c=i.hasOwnProperty,u=i.propertyIsEnumerable,a=n(function(){return arguments}())?n:function(t){return o(t)&&c.call(t,"callee")&&!u.call(t,"callee")};t.exports=a},342:function(t,e,r){(function(t){var n=r(160),o=r(938),i=e&&!e.nodeType&&e,c=i&&"object"==typeof t&&t&&!t.nodeType&&t,u=c&&c.exports===i?n.Buffer:void 0,a=(u?u.isBuffer:void 0)||o;t.exports=a}).call(this,r(182)(t))},431:function(t,e,r){var n=r(901),o=r(917),i=r(919),c=r(920),u=r(921);function a(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}a.prototype.clear=n,a.prototype.delete=o,a.prototype.get=i,a.prototype.has=c,a.prototype.set=u,t.exports=a},432:function(t,e,r){var n=r(217)(r(160),"Map");t.exports=n},435:function(t,e){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},436:function(t,e){t.exports=function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}},438:function(t,e,r){var n=r(939),o=r(439),i=r(440),c=i&&i.isTypedArray,u=c?o(c):n;t.exports=u},439:function(t,e){t.exports=function(t){return function(e){return t(e)}}},440:function(t,e,r){(function(t){var n=r(588),o=e&&!e.nodeType&&e,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,c=i&&i.exports===o&&n.process,u=function(){try{var t=i&&i.require&&i.require("util").types;return t||c&&c.binding&&c.binding("util")}catch(e){}}();t.exports=u}).call(this,r(182)(t))},441:function(t,e,r){var n=r(335),o=r(942),i=r(943),c=r(944),u=r(945),a=r(946);function s(t){var e=this.__data__=new n(t);this.size=e.size}s.prototype.clear=o,s.prototype.delete=i,s.prototype.get=c,s.prototype.has=u,s.prototype.set=a,t.exports=s},443:function(t,e,r){var n=r(955),o=r(602),i=Object.prototype.propertyIsEnumerable,c=Object.getOwnPropertySymbols,u=c?function(t){return null==t?[]:(t=Object(t),n(c(t),(function(e){return i.call(t,e)})))}:o;t.exports=u},446:function(t,e,r){var n=r(1031),o=r(216);t.exports=function t(e,r,i,c,u){return e===r||(null==e||null==r||!o(e)&&!o(r)?e!==e&&r!==r:n(e,r,i,c,t,u))}},458:function(t,e,r){var n=r(446);t.exports=function(t,e){return n(t,e)}},588:function(t,e){var r="object"==typeof global&&global&&global.Object===Object&&global;t.exports=r},589:function(t,e,r){var n=r(266),o=r(161);t.exports=function(t){if(!o(t))return!1;var e=n(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},590:function(t,e){var r=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return r.call(t)}catch(e){}try{return t+""}catch(e){}}return""}},598:function(t,e,r){var n=r(937),o=r(341),i=r(152),c=r(342),u=r(340),a=r(438),s=Object.prototype.hasOwnProperty;t.exports=function(t,e){var r=i(t),f=!r&&o(t),p=!r&&!f&&c(t),l=!r&&!f&&!p&&a(t),v=r||f||p||l,h=v?n(t.length,String):[],b=h.length;for(var _ in t)!e&&!s.call(t,_)||v&&("length"==_||p&&("offset"==_||"parent"==_)||l&&("buffer"==_||"byteLength"==_||"byteOffset"==_)||u(_,b))||h.push(_);return h}},599:function(t,e,r){var n=r(269),o=r(940),i=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return o(t);var e=[];for(var r in Object(t))i.call(t,r)&&"constructor"!=r&&e.push(r);return e}},600:function(t,e){t.exports=function(t,e){return function(r){return t(e(r))}}},602:function(t,e){t.exports=function(){return[]}},605:function(t,e,r){var n=r(606),o=r(443),i=r(200);t.exports=function(t){return n(t,i,o)}},606:function(t,e,r){var n=r(436),o=r(152);t.exports=function(t,e,r){var i=e(t);return o(t)?i:n(i,r(t))}},608:function(t,e,r){var n=r(160).Uint8Array;t.exports=n},623:function(t,e,r){var n=r(1032),o=r(1035),i=r(1036);t.exports=function(t,e,r,c,u,a){var s=1&r,f=t.length,p=e.length;if(f!=p&&!(s&&p>f))return!1;var l=a.get(t),v=a.get(e);if(l&&v)return l==e&&v==t;var h=-1,b=!0,_=2&r?new n:void 0;for(a.set(t,e),a.set(e,t);++h<f;){var y=t[h],x=e[h];if(c)var j=s?c(x,y,h,e,t,a):c(y,x,h,t,e,a);if(void 0!==j){if(j)continue;b=!1;break}if(_){if(!o(e,(function(t,e){if(!i(_,e)&&(y===t||u(y,t,r,c,a)))return _.push(e)}))){b=!1;break}}else if(y!==x&&!u(y,x,r,c,a)){b=!1;break}}return a.delete(t),a.delete(e),b}},896:function(t,e,r){var n=r(237),o=Object.prototype,i=o.hasOwnProperty,c=o.toString,u=n?n.toStringTag:void 0;t.exports=function(t){var e=i.call(t,u),r=t[u];try{t[u]=void 0;var n=!0}catch(a){}var o=c.call(t);return n&&(e?t[u]=r:delete t[u]),o}},897:function(t,e){var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},901:function(t,e,r){var n=r(902),o=r(335),i=r(432);t.exports=function(){this.size=0,this.__data__={hash:new n,map:new(i||o),string:new n}}},902:function(t,e,r){var n=r(903),o=r(908),i=r(909),c=r(910),u=r(911);function a(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}a.prototype.clear=n,a.prototype.delete=o,a.prototype.get=i,a.prototype.has=c,a.prototype.set=u,t.exports=a},903:function(t,e,r){var n=r(334);t.exports=function(){this.__data__=n?n(null):{},this.size=0}},904:function(t,e,r){var n=r(589),o=r(905),i=r(161),c=r(590),u=/^\[object .+?Constructor\]$/,a=Function.prototype,s=Object.prototype,f=a.toString,p=s.hasOwnProperty,l=RegExp("^"+f.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||o(t))&&(n(t)?l:u).test(c(t))}},905:function(t,e,r){var n=r(906),o=function(){var t=/[^.]+$/.exec(n&&n.keys&&n.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();t.exports=function(t){return!!o&&o in t}},906:function(t,e,r){var n=r(160)["__core-js_shared__"];t.exports=n},907:function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},908:function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},909:function(t,e,r){var n=r(334),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(n){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return o.call(e,t)?e[t]:void 0}},910:function(t,e,r){var n=r(334),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return n?void 0!==e[t]:o.call(e,t)}},911:function(t,e,r){var n=r(334);t.exports=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=n&&void 0===e?"__lodash_hash_undefined__":e,this}},912:function(t,e){t.exports=function(){this.__data__=[],this.size=0}},913:function(t,e,r){var n=r(336),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,r=n(e,t);return!(r<0)&&(r==e.length-1?e.pop():o.call(e,r,1),--this.size,!0)}},914:function(t,e,r){var n=r(336);t.exports=function(t){var e=this.__data__,r=n(e,t);return r<0?void 0:e[r][1]}},915:function(t,e,r){var n=r(336);t.exports=function(t){return n(this.__data__,t)>-1}},916:function(t,e,r){var n=r(336);t.exports=function(t,e){var r=this.__data__,o=n(r,t);return o<0?(++this.size,r.push([t,e])):r[o][1]=e,this}},917:function(t,e,r){var n=r(338);t.exports=function(t){var e=n(this,t).delete(t);return this.size-=e?1:0,e}},918:function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},919:function(t,e,r){var n=r(338);t.exports=function(t){return n(this,t).get(t)}},920:function(t,e,r){var n=r(338);t.exports=function(t){return n(this,t).has(t)}},921:function(t,e,r){var n=r(338);t.exports=function(t,e){var r=n(this,t),o=r.size;return r.set(t,e),this.size+=r.size==o?0:1,this}},926:function(t,e,r){var n=r(266),o=r(216);t.exports=function(t){return o(t)&&"[object Arguments]"==n(t)}},937:function(t,e){t.exports=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}},938:function(t,e){t.exports=function(){return!1}},939:function(t,e,r){var n=r(266),o=r(435),i=r(216),c={};c["[object Float32Array]"]=c["[object Float64Array]"]=c["[object Int8Array]"]=c["[object Int16Array]"]=c["[object Int32Array]"]=c["[object Uint8Array]"]=c["[object Uint8ClampedArray]"]=c["[object Uint16Array]"]=c["[object Uint32Array]"]=!0,c["[object Arguments]"]=c["[object Array]"]=c["[object ArrayBuffer]"]=c["[object Boolean]"]=c["[object DataView]"]=c["[object Date]"]=c["[object Error]"]=c["[object Function]"]=c["[object Map]"]=c["[object Number]"]=c["[object Object]"]=c["[object RegExp]"]=c["[object Set]"]=c["[object String]"]=c["[object WeakMap]"]=!1,t.exports=function(t){return i(t)&&o(t.length)&&!!c[n(t)]}},940:function(t,e,r){var n=r(600)(Object.keys,Object);t.exports=n},942:function(t,e,r){var n=r(335);t.exports=function(){this.__data__=new n,this.size=0}},943:function(t,e){t.exports=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}},944:function(t,e){t.exports=function(t){return this.__data__.get(t)}},945:function(t,e){t.exports=function(t){return this.__data__.has(t)}},946:function(t,e,r){var n=r(335),o=r(432),i=r(431);t.exports=function(t,e){var r=this.__data__;if(r instanceof n){var c=r.__data__;if(!o||c.length<199)return c.push([t,e]),this.size=++r.size,this;r=this.__data__=new i(c)}return r.set(t,e),this.size=r.size,this}},955:function(t,e){t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,i=[];++r<n;){var c=t[r];e(c,r,t)&&(i[o++]=c)}return i}},957:function(t,e,r){var n=r(217)(r(160),"DataView");t.exports=n},958:function(t,e,r){var n=r(217)(r(160),"Promise");t.exports=n},959:function(t,e,r){var n=r(217)(r(160),"Set");t.exports=n},960:function(t,e,r){var n=r(217)(r(160),"WeakMap");t.exports=n}}]);