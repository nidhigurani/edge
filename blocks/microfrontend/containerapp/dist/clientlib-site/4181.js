(self.webpackChunkskyplus_container_app=self.webpackChunkskyplus_container_app||[]).push([[4181],{54181:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});r(69358),r(48324),r(69373),r(59903),r(59749),r(86544),r(60228),r(21057),r(79288);var n,o=r(28416),a=r.n(o),i=r(20745),c=(r(84254),r(752),r(21694),r(76265),r(70560),r(89730),r(12826),r(34284),r(77049),r(64043),r(7409),r(73964),r(60429),r(45697)),u=r.n(c),s=r(41609),f=r.n(s),l=r(26764),p=r(88415);function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,c=[],u=!0,s=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(c.push(n.value),c.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var b=null!==(n=window.aemGraphqlApiEndpoint)&&void 0!==n?n:"http://localhost:4502/graphql/execute.json/skyplus6e";function h(e){var t=e.component,r=e.pageType,n=(0,o.useRef)(null),i=y((0,o.useState)(null),2),c=i[0],u=i[1],s=y((0,o.useState)(!1),2),v=s[0],h=s[1];return(0,o.useEffect)((function(){var e=window.locale||"en",n=b+"/"+t+"-additional;locale="+e+";variation="+r+";.json";fetch(n,{method:"GET",headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(e){e&&(u(e),h(!0))})).catch((function(e){(0,p.pushAnalytic)({event:"error",error:{code:"500",message:e.message,url:n,type:"api",source:"api",statusCode:"500",statusMessage:e.message}}),u({}),h(!0)}))}),[]),a().useEffect((function(){n.current&&v&&!f()(c)&&((0,l.planBInit)(n.current,Object.assign({},e,{configJson:c})),h(!1))}),[c]),a().createElement("div",{ref:n})}h.propTypes={component:u().string,pageType:u().string},h.defaultProps={mfData:JSON.stringify({})};var m=h;function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,g(n.key),n)}}function g(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}var j=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,n;return t=e,n=[{key:"init",value:function(e){var t=JSON.parse(JSON.stringify(e.dataset));(0,i.s)(e).render(a().createElement(m,t))}}],(r=null)&&d(t.prototype,r),n&&d(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}()},18552:function(e,t,r){var n=r(10852)(r(55639),"DataView");e.exports=n},53818:function(e,t,r){var n=r(10852)(r(55639),"Promise");e.exports=n},58525:function(e,t,r){var n=r(10852)(r(55639),"Set");e.exports=n},70577:function(e,t,r){var n=r(10852)(r(55639),"WeakMap");e.exports=n},280:function(e,t,r){var n=r(25726),o=r(86916),a=Object.prototype.hasOwnProperty;e.exports=function(e){if(!n(e))return o(e);var t=[];for(var r in Object(e))a.call(e,r)&&"constructor"!=r&&t.push(r);return t}},64160:function(e,t,r){var n=r(18552),o=r(57071),a=r(53818),i=r(58525),c=r(70577),u=r(44239),s=r(80346),f="[object Map]",l="[object Promise]",p="[object Set]",y="[object WeakMap]",v="[object DataView]",b=s(n),h=s(o),m=s(a),d=s(i),g=s(c),j=u;(n&&j(new n(new ArrayBuffer(1)))!=v||o&&j(new o)!=f||a&&j(a.resolve())!=l||i&&j(new i)!=p||c&&j(new c)!=y)&&(j=function(e){var t=u(e),r="[object Object]"==t?e.constructor:void 0,n=r?s(r):"";if(n)switch(n){case b:return v;case h:return f;case m:return l;case d:return p;case g:return y}return t}),e.exports=j},86916:function(e,t,r){var n=r(5569)(Object.keys,Object);e.exports=n},41609:function(e,t,r){var n=r(280),o=r(64160),a=r(35694),i=r(1469),c=r(98612),u=r(44144),s=r(25726),f=r(36719),l=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(c(e)&&(i(e)||"string"==typeof e||"function"==typeof e.splice||u(e)||f(e)||a(e)))return!e.length;var t=o(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(s(e))return!n(e).length;for(var r in e)if(l.call(e,r))return!1;return!0}},92703:function(e,t,r){"use strict";var n=r(50414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},45697:function(e,t,r){e.exports=r(92703)()},50414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},20745:function(e,t,r){"use strict";var n=r(31051);t.s=n.createRoot,n.hydrateRoot}}]);