(self.webpackChunkskyplus_container_app=self.webpackChunkskyplus_container_app||[]).push([[8104,1540],{1540:function(t,r,e){"use strict";e.r(r),e.d(r,{localStorageKeys:function(){return n}});var n={USER_NATIONALITY:"usr_nlty",RECENT_SOURCE_CITIES:"src_list",RECENT_DESTINATION_CITIES:"dest_list",NEARBY_DESTINATION_LIST:"nrby_dest_list",NEARBY_STATION:"nrby_stat",BOOKING_CONTEXT_VALUES:"bw_cntxt_val",FLIGHT_SEARCH_PAYLOAD:"flght_srch_d",LOCATION:"location",SPECIALFARE_ID_DATA:"speci_pa_dat",GENERIC_DATA_CONTAINER_APP:"generic_data_container_app",ERROR_CODE_AEM_MAPPING:"info_errorMessageItemList"}},8104:function(t,r,e){"use strict";e.r(r),e.d(r,{getErrorMsgForCode:function(){return u}});var n=e(1609),o=e.n(n),c=e(1540);function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",r={type:"Error",code:"default",message:"Something went wrong, please try later"};try{var e,n=JSON.parse(localStorage.getItem(c.localStorageKeys.GENERIC_DATA_CONTAINER_APP)),u=n?n[c.localStorageKeys.ERROR_CODE_AEM_MAPPING]:[];if((null==u||null===(e=u.items)||void 0===e?void 0:e.length)>0){var i,a,s=null==u||null===(i=u.items)||void 0===i?void 0:i.find((function(r){var e;return(null==r||null===(e=r.code)||void 0===e?void 0:e.toLowerCase())===t.toLowerCase()}));if(r=(null==u||null===(a=u.items)||void 0===a?void 0:a.find((function(t){var r;return"default"===(null==t||null===(r=t.code)||void 0===r?void 0:r.toLowerCase())})))||r,s)return s}else if(!o()(null==u?void 0:u.items)){var f=null==u?void 0:u.items[t];if(f)return f}return r}catch(s){return console.log("---catch error:getErrorMsgForCode::::",s),r}}},8552:function(t,r,e){var n=e(852)(e(5639),"DataView");t.exports=n},7071:function(t,r,e){var n=e(852)(e(5639),"Map");t.exports=n},3818:function(t,r,e){var n=e(852)(e(5639),"Promise");t.exports=n},8525:function(t,r,e){var n=e(852)(e(5639),"Set");t.exports=n},2705:function(t,r,e){var n=e(5639).Symbol;t.exports=n},577:function(t,r,e){var n=e(852)(e(5639),"WeakMap");t.exports=n},4239:function(t,r,e){var n=e(2705),o=e(9607),c=e(2333),u=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":u&&u in Object(t)?o(t):c(t)}},9454:function(t,r,e){var n=e(4239),o=e(7005);t.exports=function(t){return o(t)&&"[object Arguments]"==n(t)}},8458:function(t,r,e){var n=e(3560),o=e(5346),c=e(3218),u=e(346),i=/^\[object .+?Constructor\]$/,a=Function.prototype,s=Object.prototype,f=a.toString,l=s.hasOwnProperty,p=RegExp("^"+f.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!c(t)||o(t))&&(n(t)?p:i).test(u(t))}},8749:function(t,r,e){var n=e(4239),o=e(1780),c=e(7005),u={};u["[object Float32Array]"]=u["[object Float64Array]"]=u["[object Int8Array]"]=u["[object Int16Array]"]=u["[object Int32Array]"]=u["[object Uint8Array]"]=u["[object Uint8ClampedArray]"]=u["[object Uint16Array]"]=u["[object Uint32Array]"]=!0,u["[object Arguments]"]=u["[object Array]"]=u["[object ArrayBuffer]"]=u["[object Boolean]"]=u["[object DataView]"]=u["[object Date]"]=u["[object Error]"]=u["[object Function]"]=u["[object Map]"]=u["[object Number]"]=u["[object Object]"]=u["[object RegExp]"]=u["[object Set]"]=u["[object String]"]=u["[object WeakMap]"]=!1,t.exports=function(t){return c(t)&&o(t.length)&&!!u[n(t)]}},280:function(t,r,e){var n=e(5726),o=e(6916),c=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return o(t);var r=[];for(var e in Object(t))c.call(t,e)&&"constructor"!=e&&r.push(e);return r}},1717:function(t){t.exports=function(t){return function(r){return t(r)}}},4429:function(t,r,e){var n=e(5639)["__core-js_shared__"];t.exports=n},1957:function(t,r,e){var n="object"==typeof e.g&&e.g&&e.g.Object===Object&&e.g;t.exports=n},852:function(t,r,e){var n=e(8458),o=e(7801);t.exports=function(t,r){var e=o(t,r);return n(e)?e:void 0}},9607:function(t,r,e){var n=e(2705),o=Object.prototype,c=o.hasOwnProperty,u=o.toString,i=n?n.toStringTag:void 0;t.exports=function(t){var r=c.call(t,i),e=t[i];try{t[i]=void 0;var n=!0}catch(t){}var o=u.call(t);return n&&(r?t[i]=e:delete t[i]),o}},4160:function(t,r,e){var n=e(8552),o=e(7071),c=e(3818),u=e(8525),i=e(577),a=e(4239),s=e(346),f="[object Map]",l="[object Promise]",p="[object Set]",v="[object WeakMap]",b="[object DataView]",y=s(n),j=s(o),d=s(c),_=s(u),A=s(i),g=a;(n&&g(new n(new ArrayBuffer(1)))!=b||o&&g(new o)!=f||c&&g(c.resolve())!=l||u&&g(new u)!=p||i&&g(new i)!=v)&&(g=function(t){var r=a(t),e="[object Object]"==r?t.constructor:void 0,n=e?s(e):"";if(n)switch(n){case y:return b;case j:return f;case d:return l;case _:return p;case A:return v}return r}),t.exports=g},7801:function(t){t.exports=function(t,r){return null==t?void 0:t[r]}},5346:function(t,r,e){var n,o=e(4429),c=(n=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";t.exports=function(t){return!!c&&c in t}},5726:function(t){var r=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||r)}},6916:function(t,r,e){var n=e(5569)(Object.keys,Object);t.exports=n},1167:function(t,r,e){t=e.nmd(t);var n=e(1957),o=r&&!r.nodeType&&r,c=o&&t&&!t.nodeType&&t,u=c&&c.exports===o&&n.process,i=function(){try{var t=c&&c.require&&c.require("util").types;return t||u&&u.binding&&u.binding("util")}catch(t){}}();t.exports=i},2333:function(t){var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},5569:function(t){t.exports=function(t,r){return function(e){return t(r(e))}}},5639:function(t,r,e){var n=e(1957),o="object"==typeof self&&self&&self.Object===Object&&self,c=n||o||Function("return this")();t.exports=c},346:function(t){var r=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return r.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},5694:function(t,r,e){var n=e(9454),o=e(7005),c=Object.prototype,u=c.hasOwnProperty,i=c.propertyIsEnumerable,a=n(function(){return arguments}())?n:function(t){return o(t)&&u.call(t,"callee")&&!i.call(t,"callee")};t.exports=a},1469:function(t){var r=Array.isArray;t.exports=r},8612:function(t,r,e){var n=e(3560),o=e(1780);t.exports=function(t){return null!=t&&o(t.length)&&!n(t)}},4144:function(t,r,e){t=e.nmd(t);var n=e(5639),o=e(5062),c=r&&!r.nodeType&&r,u=c&&t&&!t.nodeType&&t,i=u&&u.exports===c?n.Buffer:void 0,a=(i?i.isBuffer:void 0)||o;t.exports=a},1609:function(t,r,e){var n=e(280),o=e(4160),c=e(5694),u=e(1469),i=e(8612),a=e(4144),s=e(5726),f=e(6719),l=Object.prototype.hasOwnProperty;t.exports=function(t){if(null==t)return!0;if(i(t)&&(u(t)||"string"==typeof t||"function"==typeof t.splice||a(t)||f(t)||c(t)))return!t.length;var r=o(t);if("[object Map]"==r||"[object Set]"==r)return!t.size;if(s(t))return!n(t).length;for(var e in t)if(l.call(t,e))return!1;return!0}},3560:function(t,r,e){var n=e(4239),o=e(3218);t.exports=function(t){if(!o(t))return!1;var r=n(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r}},1780:function(t){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},3218:function(t){t.exports=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)}},7005:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},6719:function(t,r,e){var n=e(8749),o=e(1717),c=e(1167),u=c&&c.isTypedArray,i=u?o(u):n;t.exports=i},5062:function(t){t.exports=function(){return!1}}}]);