/*! For license information please see 6053.js.LICENSE.txt */
(self.webpackChunkskyplus_container_app=self.webpackChunkskyplus_container_app||[]).push([[6053,674],{33236:function(t,e,n){"use strict";n.r(e),n.d(e,{getPayloadFromDeepLinkData:function(){return p},getSrpDeeplinkParms:function(){return d},ifDeepLinkCall:function(){return f}});n(89730),n(76801),n(43843),n(752),n(60228),n(21694),n(76265),n(79307),n(64043),n(61514),n(60429),n(69358),n(47522),n(59749),n(86544),n(70560),n(84254),n(12826),n(34284),n(77049),n(7409),n(21057);var r=n(41609),o=n.n(r),i=n(20475),a=n(36730);function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,u=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(u.push(r.value),u.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,e)||c(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var s={deepLinkQueryParamKey:"cid",deepLinkPromoCodeKeys:{googleflights:"Google",wego:"WEGO",skyscanner:"SKYSCN"}};function f(){var t=window.location.hash.slice(1).split("/");try{return!!(Array.isArray(t)&&t.length>=5)}catch(t){return!1}}function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,e=window.location.hash.slice(1).split("/"),n=e[0],r=e[1],i=e[2];i=i&&i.slice(0,4)+"-"+i.slice(4,6)+"-"+i.slice(6,8);var c=e[3],l=e[4].substring(0,e[4].includes("+")?e[4].indexOf("+"):3),f=e[4].includes("+")&&e[4].substring(e[4].indexOf("+")+1);f=f&&f.slice(0,4)+"-"+f.slice(4,6)+"-"+f.slice(6,8);var d=u(l.split(""),3),p=d[0],v=d[1],h=d[2],y="",g=new URLSearchParams(window.location.search),m=t?Object.assign({},t):{};if(g&&!o()(m)){var E=m.deepLinkQueryParamKey,S=m.deepLinkPromoCodeKeys,w=g.get(E),O=Object.keys(S);null!=O&&O.length&&O.forEach((function(t){null!=w&&w.toLowerCase().includes(t)&&S[t]&&(y=S[t]||"")}))}if(y){var _={promoCode:y,flightIdentifierKey:null==m?void 0:m.flightIdentifierKey};(0,a.setSessionStorageWithExp)("deepLinkPromoCode",_,null==m?void 0:m.promoCodeExpiryTime)}return{originCode:n,destinationCode:r,travelDate:i,currencyCode:c,adult:parseInt(p),children:parseInt(v),infant:parseInt(h),promoCode:y,returnDate:f}}var p=function(t,e){var n=t.originCode,r=t.destinationCode,a=t.travelDate,u=t.currencyCode,l=t.adult,s=t.children,f=t.infant,d=t.promoCode,p=t.returnDate;if(!o()(e)){var v=e.activeCurrencyModel,h=u,y=null;v.forEach((function(t){(null==t?void 0:t.currencyCode)===h&&(y=Object.assign({},t,{value:null==t?void 0:t.currencyCode,label:null==t?void 0:t.description}))}));var g,m=r,E=n,S=null,w=null,O=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=c(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}(e.masterDataModel);try{for(O.s();!(g=O.n()).done;){var _,b,L=g.value;(null==L||null===(_=L.stationCode)||void 0===_?void 0:_.toLowerCase())===(null==m?void 0:m.toLowerCase())&&(S=L),(null==L||null===(b=L.stationCode)||void 0===b?void 0:b.toLowerCase())===(null==E?void 0:E.toLowerCase())&&(w=L)}}catch(t){O.e(t)}finally{O.f()}var A={startDate:a||null,endDate:p||null},T={adultCount:l,childrenCount:s,seniorCitizenCount:0,infantCount:f,adultExtraDoubleSeat:0,adultExtraTripleSeat:0,seniorCitizenExtraDoubleSeat:0,seniorCitizenExtraTripleSeat:0,childrenExtraDoubleSeat:0,childrenExtraTripleSeat:0,totalAllowedCount:0,totalCount:l+s},C={types:[{type:i.paxCodes.adult.code,discountCode:"",count:l}]};Boolean(s)&&C.types.push({type:i.paxCodes.children.code,discountCode:"",count:s}),Boolean(f)&&C.types.push({type:i.paxCodes.infant.code,discountCode:"",count:f});return{nationality:null,seatWiseSelectedPaxInformation:T,selectedCurrency:y,selectedDestinationCityInfo:S,selectedJourneyType:p?{label:"Round Trip",value:"roundTrip",icon_id:"ROUND_TRIP"}:{label:"One Way",value:"oneWay",icon_id:"ONE_WAY"},selectedPaxInformation:C,selectedPromoInfo:d,selectedSourceCityInfo:w,selectedSpecialFare:null,selectedTravelDatesInfo:A}}}},56053:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return N}});n(69358),n(48324),n(69373),n(59903),n(59749),n(86544),n(60228),n(21057),n(79288);var r=n(28416),o=n.n(r),i=n(20745),a=(n(60429),n(28436),n(73964),n(12826),n(84254),n(752),n(21694),n(76265),n(70560),n(89730),n(34284),n(77049),n(64043),n(7409),n(58373),n(66793),n(7629),n(77509),n(88052),n(47522),n(5399),n(19330),n(45697)),u=n.n(a),c=n(41609),l=n.n(c),s=n(2757),f=n(20475),d=n(19313),p=n(40674),v=n(88415),h=n(44994),y=n(33236),g=n(36730);function m(){m=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),u=new k(r||[]);return o(a,"_invoke",{value:T(t,n,u)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var d="suspendedStart",p="suspendedYield",v="executing",h="completed",y={};function g(){}function E(){}function S(){}var w={};l(w,a,(function(){return this}));var O=Object.getPrototypeOf,_=O&&O(O(P([])));_&&_!==n&&r.call(_,a)&&(w=_);var b=S.prototype=g.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function A(t,e){function n(o,i,a,u){var c=f(t[o],t,i);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==typeof s&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,u)}))}u(c.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function T(e,n,r){var o=d;return function(i,a){if(o===v)throw new Error("Generator is already running");if(o===h){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var u=r.delegate;if(u){var c=C(u,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===d)throw o=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=v;var l=f(e,n,r);if("normal"===l.type){if(o=r.done?h:p,l.arg===y)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=h,r.method="throw",r.arg=l.arg)}}}function C(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,C(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var i=f(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,y;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,y):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function P(e){if(e||""===e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return E.prototype=S,o(b,"constructor",{value:S,configurable:!0}),o(S,"constructor",{value:E,configurable:!0}),E.displayName=l(S,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,l(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},e.awrap=function(t){return{__await:t}},L(A.prototype),l(A.prototype,u,(function(){return this})),e.AsyncIterator=A,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new A(s(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(b),l(b,c,"Generator"),l(b,a,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=P,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(x),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return u.type="throw",u.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:P(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),y}},e}function E(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function S(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){E(i,r,o,a,u,"next",t)}function u(t){E(i,r,o,a,u,"throw",t)}a(void 0)}))}}function w(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,u=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(u.push(r.value),u.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return O(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var _=p.BOOKING_BASE_URL,b=p.WIDGET_API,L=p.MS_BW_USER_KEY,A=window.aemGraphqlApiEndpoint?window.aemGraphqlApiEndpoint:"https://aem-dev-skyplus6e.goindigo.in/graphql/execute.json/skyplus6e",T=window.locale,C=function(t){return d.default.get(t)&&"string"==typeof d.default.get(t)?JSON.parse(d.default.get(t)):d.default.get(t)};function I(t){var e=(0,r.useRef)(null),n=C(f.COOKIE_KEYS.AUTH),i=C(f.COOKIE_KEYS.ROLE_DETAILS),a=w(o().useState(null),2),u=a[0],c=a[1],d=w(o().useState(null),2),p=d[0],E=d[1],O=w(o().useState(!1),2),I=O[0],x=O[1],k=w(o().useState(n),2),P=k[0],N=k[1],j=w(o().useState(i),2),D=j[0],R=j[1];return o().useEffect((function(){if(null!=t&&t.mfData&&t.pageType===f.variationCodes.HOME&&!p)(r=null===(n=JSON.parse(t.mfData))||void 0===n?void 0:n.jsonResponse)&&r.data?(E(r.data),x(!0)):(0,v.pushAnalytic)({event:"bookingMFDataLoad",isLoaded:!1,error:{code:"500",message:"AA: Something went wrong"}});else if(P&&D&&"object"==typeof P&&"object"==typeof D&&!p){var e=function(){var t=S(m().mark((function t(){return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e=void 0,n=void 0,e=""+_+b+"?roleName="+(null==D?void 0:D.roleName)+"&roleCode="+(null==D?void 0:D.roleCode),n={method:"GET",headers:Object.assign({"Content-Type":"application/json",Authorization:null==P?void 0:P.token},null!=L&&L.trim()?{user_key:L.trim()}:{})},void fetch(e,n).then((function(t){return t.json()})).then((function(t){if(t&&t.data){var e=t.data;e&&(E(e),x(!0))}else(0,v.pushAnalytic)({event:"bookingMFDataLoad",isLoaded:!1,error:{code:"500",message:"AA: Something went wrong"}})})).catch((function(t){(0,v.pushAnalytic)({event:"bookingMFDataLoad",isLoaded:!1,error:{code:"500",message:"AA: Something went wrong::: "+t}})}));case 2:case"end":return t.stop()}var e,n}),t)})));return function(){return t.apply(this,arguments)}}();e()}var n,r}),[P]),o().useEffect((function(){if(e.current&&I&&!l()(u)){if((0,s.bookingAppInit)(e.current,Object.assign({},t,{configJson:u,widgetApiData:p})),null==t||!t.pageType||(null==t?void 0:t.pageType)===f.variationCodes.HOME){var n=document.getElementsByClassName("placeholder-booking-widget")[0];n&&n.classList.remove("placeholder-booking-widget")}x(!1)}if(p&&u&&(null==t?void 0:t.pageType)===f.variationCodes.SRP&&(0,y.ifDeepLinkCall)()){var r,o,i=null==u||null===(r=u.data)||void 0===r||null===(o=r.bookingWidgetList)||void 0===o?void 0:o.items[0],a=(0,y.getSrpDeeplinkParms)(null==i?void 0:i.deepLinkData),c=(0,y.getPayloadFromDeepLinkData)(a,p);if(!l()(c)){(0,g.setLocalStorage)(f.localStorageKeys.BOOKING_CONTEXT_VALUES,c),document.dispatchEvent(new CustomEvent("ModifyBookingEvent",{bubbles:!0,detail:{bookingData:c,token:P}}));var d=window.location.href.split("#")[0];window.history.replaceState(null,document.title,d)}}}),[u,p]),o().useEffect((function(){var e=function(){var e=S(m().mark((function e(){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,void fetch(A+"/"+(null==t?void 0:t.component)+";locale="+T+";variation="+(null==t?void 0:t.pageType)+";.json",{method:"GET",headers:{"Access-Control-Allow-Origin":"*"}}).then((function(t){return t.ok?t.json():Promise.reject(t)})).then((function(t){t&&(c(t),x(!0))})).catch((function(t){c(null),x(!0);var e=JSON.parse(localStorage.getItem("generic_data_container_app")).info_errorMessageItemList.items[0],n={url:t.url,displayMessage:e.message,errorType:"network",errorCode:e.code.toString(),errorMessage:"Failded from AEM Graph_QL for homepage",errorSource:"AEM",statusCode:t.status.toString()},r={apiURL:t.url,displayMessage:e.message,statusMessage:"Failded from AEM Graph_QL for homepage ",code:e.code.toString(),type:"network",statusCode:t.status.toString(),source:"MS-API/AEM/MF"};(0,h.logEntry)(n),(0,v.pushAnalytic)({data:{_event:"pageload",isLoaded:!0},event:"click",error:Object.assign({},r)})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return e(),document.addEventListener("authTokenSetEvent",(function(t){N(t.detail.token),R(C(f.COOKIE_KEYS.ROLE_DETAILS))})),function(){document.removeEventListener("authTokenSetEvent",{})}}),[]),o().createElement("div",{ref:e})}I.defaultProps={pageType:"",persona:"wwc"},I.propTypes={pageType:u().string,component:u().string};var x=I;function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,P(r.key),r)}}function P(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}var N=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,r;return e=t,r=[{key:"init",value:function(t){var e=JSON.parse(JSON.stringify(t.dataset));(0,i.s)(t).render(o().createElement(x,e))}}],(n=null)&&k(e.prototype,n),r&&k(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}()},40674:function(t,e,n){"use strict";n.r(e),n.d(e,{AGENT_LOGOUT_OLD:function(){return y},ANONYMOUS:function(){return k},ANONYMOUS_USER_BODY:function(){return _},BASE_API_URL:function(){return f},BASE_API_URL_OLD:function(){return p},BOOKING_BASE_URL:function(){return E},CONTENT_TYPE_HEADER:function(){return d},CREATE_SESSION_API_ENDPOINT:function(){return i},CURRENCY_API:function(){return S},GENERIC_TOAST_MESSAGE_EVENT:function(){return A},GET_SESSION_API_ENDPOINT:function(){return c},KEEP_ALIVE_AUTH_TOKEN:function(){return u},KEEP_ALIVE_AUTH_TOKEN_OLD:function(){return l},LOGIN_SUCCESS:function(){return b},LOGOUT_SESSION_API_ENDPOINT:function(){return a},MAIN_LOADER_EVENT:function(){return T},MEMBER_LOGOUT_OLD:function(){return h},MS_BW_USER_KEY:function(){return O},SUB_BASE_API_URL_OLD:function(){return v},SUB_DOMAIN:function(){return g},TOGGLE_LOGIN_POPUP:function(){return L},WIDGET_API:function(){return w},dotRezAgentroleCk:function(){return I},dotRezLoginCk:function(){return C},dotRezUserCurrencyCk:function(){return x}});n(19755);var r,o,i="/v1/token/create",a="/v1/token/delete",u="/v1/token/refresh",c="/v1/token/get",l="/Application/Blank",s=window._env_login,f=null==s?void 0:s.BASE_API_URL,d=null==s?void 0:s.CONTENT_TYPE_HEADER,p=null==s?void 0:s.BASE_API_URL_OLD,v=null==s?void 0:s.SUB_BASE_API_URL_OLD,h=(null==s||s.MEMBER_LOGIN_OLD,null==s||s.AGENT_LOGIN_OLD,null==s||s.CAPF_LOGIN_OLD,null==s?void 0:s.MEMBER_LOGOUT_OLD),y=null==s?void 0:s.AGENT_LOGOUT_OLD,g=null==s?void 0:s.SUB_DOMAIN,m=null==s?void 0:s.SUBSCRIPTION,E=null===(r=window.msd)||void 0===r?void 0:r.msBookingApiUrl,S="/v1/setting/getcurrency",w="/v1/setting/indigowidgets",O=null===(o=window.msd)||void 0===o?void 0:o.msBookingUserKey,_={strToken:"",subscriptionKey:m},b="loginSuccessEvent",L="toggleLoginPopupEvent",A="genericToastMessageEvent",T="mainLoaderEvent",C="aemLoginStatus",I="aemOrgRole",x="aemOrgCurrency",k="Anonymous"},36730:function(t,e,n){"use strict";n.r(e),n.d(e,{clearLocalStorage:function(){return a},getLocalStorage:function(){return r},getSessionStorageWithExp:function(){return c},removeLocalStorage:function(){return i},setLocalStorage:function(){return o},setSessionStorageWithExp:function(){return u}});n(69358),n(48324);var r=function(t){try{return JSON.parse(localStorage.getItem(t))}catch(t){return console.log("catch getLocalStorage:::error",t),{}}},o=function(t,e){return localStorage.setItem(t,JSON.stringify(e)),!0},i=function(t){localStorage.removeItem(t)},a=function(){return localStorage.clear(),!0},u=function(t,e,n){var r={value:e,expiry:(new Date).getTime()+6e4*n};sessionStorage.setItem(t,JSON.stringify(r))},c=function(t){var e=sessionStorage.getItem(t);if(!e)return null;var n=JSON.parse(e);return(new Date).getTime()>n.expiry?(sessionStorage.removeItem(t),null):n.value}},18552:function(t,e,n){var r=n(10852)(n(55639),"DataView");t.exports=r},53818:function(t,e,n){var r=n(10852)(n(55639),"Promise");t.exports=r},58525:function(t,e,n){var r=n(10852)(n(55639),"Set");t.exports=r},70577:function(t,e,n){var r=n(10852)(n(55639),"WeakMap");t.exports=r},280:function(t,e,n){var r=n(25726),o=n(86916),i=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var e=[];for(var n in Object(t))i.call(t,n)&&"constructor"!=n&&e.push(n);return e}},64160:function(t,e,n){var r=n(18552),o=n(57071),i=n(53818),a=n(58525),u=n(70577),c=n(44239),l=n(80346),s="[object Map]",f="[object Promise]",d="[object Set]",p="[object WeakMap]",v="[object DataView]",h=l(r),y=l(o),g=l(i),m=l(a),E=l(u),S=c;(r&&S(new r(new ArrayBuffer(1)))!=v||o&&S(new o)!=s||i&&S(i.resolve())!=f||a&&S(new a)!=d||u&&S(new u)!=p)&&(S=function(t){var e=c(t),n="[object Object]"==e?t.constructor:void 0,r=n?l(n):"";if(r)switch(r){case h:return v;case y:return s;case g:return f;case m:return d;case E:return p}return e}),t.exports=S},86916:function(t,e,n){var r=n(5569)(Object.keys,Object);t.exports=r},41609:function(t,e,n){var r=n(280),o=n(64160),i=n(35694),a=n(1469),u=n(98612),c=n(44144),l=n(25726),s=n(36719),f=Object.prototype.hasOwnProperty;t.exports=function(t){if(null==t)return!0;if(u(t)&&(a(t)||"string"==typeof t||"function"==typeof t.splice||c(t)||s(t)||i(t)))return!t.length;var e=o(t);if("[object Map]"==e||"[object Set]"==e)return!t.size;if(l(t))return!r(t).length;for(var n in t)if(f.call(t,n))return!1;return!0}},92703:function(t,e,n){"use strict";var r=n(50414);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,i,a){if(a!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},45697:function(t,e,n){t.exports=n(92703)()},50414:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},20745:function(t,e,n){"use strict";var r=n(31051);e.s=r.createRoot,r.hydrateRoot},27413:function(t,e,n){"use strict";var r=n(44201)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,"/./"[t](e)}catch(t){}}return!1}},42124:function(t,e,n){"use strict";var r=n(91245),o=TypeError;t.exports=function(t){if(r(t))throw new o("The method doesn't accept regular expressions");return t}},70953:function(t){"use strict";t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},75984:function(t,e,n){"use strict";var r=n(41236).PROPER,o=n(3689),i=n(86350);t.exports=function(t){return o((function(){return!!i[t]()||"​᠎"!=="​᠎"[t]()||r&&i[t].name!==t}))}},76801:function(t,e,n){"use strict";var r=n(79989),o=n(84328).includes,i=n(3689),a=n(87370);r({target:"Array",proto:!0,forced:i((function(){return!Array(1).includes()}))},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),a("includes")},43843:function(t,e,n){"use strict";var r=n(79989),o=n(68844),i=n(42124),a=n(74684),u=n(34327),c=n(27413),l=o("".indexOf);r({target:"String",proto:!0,forced:!c("includes")},{includes:function(t){return!!~l(u(a(this)),u(i(t)),arguments.length>1?arguments[1]:void 0)}})},61514:function(t,e,n){"use strict";var r=n(22615),o=n(65773),i=n(85027),a=n(981),u=n(74684),c=n(70953),l=n(34327),s=n(54849),f=n(66100);o("search",(function(t,e,n){return[function(e){var n=u(this),o=a(e)?void 0:s(e,t);return o?r(o,e,n):new RegExp(e)[t](l(n))},function(t){var r=i(this),o=l(t),a=n(e,r,o);if(a.done)return a.value;var u=r.lastIndex;c(u,0)||(r.lastIndex=0);var s=f(r,o);return c(r.lastIndex,u)||(r.lastIndex=u),null===s?-1:s.index}]}))},28436:function(t,e,n){"use strict";var r=n(79989),o=n(61435).trim;r({target:"String",proto:!0,forced:n(75984)("trim")},{trim:function(){return o(this)}})}}]);