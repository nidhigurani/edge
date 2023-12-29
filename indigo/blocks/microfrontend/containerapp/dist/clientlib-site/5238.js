/*! For license information please see 5238.js.LICENSE.txt */
(self.webpackChunkskyplus_container_app=self.webpackChunkskyplus_container_app||[]).push([[5238,9940,8363,5664,1540,8361],{5238:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var r=n(8416),o=n.n(r),i=n(745),a=n(1257),c=n(5664),u=null,l=n(8361),s=n(9313),f=n(674),p=n(475),d=n(5612),m=n(8104),h=n(4661);function v(){v=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var i=t&&t.prototype instanceof g?t:g,a=Object.create(i.prototype),c=new x(r||[]);return o(a,"_invoke",{value:L(e,n,c)}),a}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var p="suspendedStart",d="suspendedYield",m="executing",h="completed",y={};function g(){}function _(){}function E(){}var b={};l(b,a,(function(){return this}));var w=Object.getPrototypeOf,C=w&&w(w(I([])));C&&C!==n&&r.call(C,a)&&(b=C);var O=E.prototype=g.prototype=Object.create(b);function S(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function T(e,t){function n(o,i,a,c){var u=f(e[o],e,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&r.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,a,c)}),(function(e){n("throw",e,a,c)})):t.resolve(s).then((function(e){l.value=e,a(l)}),(function(e){return n("throw",e,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return i=i?i.then(o,o):o()}})}function L(t,n,r){var o=p;return function(i,a){if(o===m)throw new Error("Generator is already running");if(o===h){if("throw"===i)throw a;return{value:e,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var u=A(c,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=m;var l=f(t,n,r);if("normal"===l.type){if(o=r.done?h:d,l.arg===y)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=h,r.method="throw",r.arg=l.arg)}}}function A(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,A(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var i=f(o,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,y;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,y):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function I(t){if(t||""===t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}throw new TypeError(typeof t+" is not iterable")}return _.prototype=E,o(O,"constructor",{value:E,configurable:!0}),o(E,"constructor",{value:_,configurable:!0}),_.displayName=l(E,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===_||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,l(e,u,"GeneratorFunction")),e.prototype=Object.create(O),e},t.awrap=function(e){return{__await:e}},S(T.prototype),l(T.prototype,c,(function(){return this})),t.AsyncIterator=T,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new T(s(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},S(O),l(O,u,"Generator"),l(O,a,(function(){return this})),l(O,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=I,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),P(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:I(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),y}},t}function y(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,c=[],u=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function E(e){var t=e.mfData,n=(0,r.useRef)(null),_=(0,r.useRef)(null),E=g((0,r.useState)(!1),2),b=E[0],w=E[1],C={};try{C=JSON.parse(t)}catch(e){C={}}var O=function(){var e;!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.2;clearTimeout(_.current),_.current=null,_.current=setTimeout((function(){w((function(e){return!0}))}),60*e*1e3)}(parseInt(null===(e=C)||void 0===e?void 0:e.sessionTimeoutDuration))},S=function(e,t){var n={type:"error",code:e,title:"Error",message:t};document.dispatchEvent(new CustomEvent("genericToastMessageEvent",{bubbles:!0,detail:n})),setTimeout((function(){window.location.href=(0,l.getPersonaBasedLogoRedirectHomePage)()}),3e3)},T=function(){var e,t=(e=v().mark((function e(){var t,n,r,o,i,c,u,l,y,g,_,E,b,w,O,T,L;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.default.get(p.COOKIE_KEYS.AUTH,!0),n=s.default.get(p.COOKIE_KEYS.ROLE_DETAILS,!0),r=s.default.get(p.COOKIE_KEYS.USER,!0,!0),o=""+f.BASE_API_URL+f.KEEP_ALIVE_AUTH_TOKEN,e.prev=4,e.next=7,a.Z.put(o,"{}",{headers:Object.assign({authorization:t.token},f.CONTENT_TYPE_HEADER)});case 7:(c=e.sent)&&c.data&&c.data.data&&c.data.data.success?(l={token:(null==t?void 0:t.token)||"",idleTimeoutInMinutes:p.REFRESH_TOKEN_IDLE_TIME},y=(0,d.addExpirationDataToToken)(l),g=n.roleName,_=void 0===g?"":g,E=n.roleCode,b=void 0===E?"":E,(0,h.setAuthTokenCookie)(y,_,b,r),window.location.href=(null===(u=C)||void 0===u?void 0:u.continueCtaPath)||"#"):null!=c&&null!==(i=c.data)&&void 0!==i&&i.errors&&(O=null==c||null===(w=c.data)||void 0===w?void 0:w.errors,T=O.code,L=(0,m.getErrorMsgForCode)(T),S(T,L)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),S("",(0,m.getErrorMsgForCode)());case 14:case"end":return e.stop()}}),e,null,[[4,11]])})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){y(i,r,o,a,c,"next",e)}function c(e){y(i,r,o,a,c,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}();return(0,r.useEffect)((function(){O();var e=function(e){b||O()},t=function(e){b||O()};return document.addEventListener("keypress",t),document.addEventListener("mousemove",e),document.addEventListener("hurryupSessionExpiredEvent",(function(e){clearTimeout(_.current),_.current=null,w((function(e){return!0}))})),function(){document.removeEventListener("keypress",t),document.removeEventListener("mousemove",e)}}),[]),(0,r.useEffect)((function(){n.current&&function(e,t){null!=e&&(null===u&&(u=(0,i.s)(e)),u.render(t.showPopup?o().createElement(c.default,t):null))}(n.current,Object.assign({},{labels:C,startAfreshCtaPath:(0,l.getPersonaBasedLogoRedirectHomePage)(),onAfreshClick:function(){w(!1),O()},onContinueClick:function(){w(!1),O(),T()},onCloseHandler:function(){w(!1),O(),T(),window.location.reload()},showPopup:b}))}),[b]),o().createElement("div",{ref:n})}E.defaultProps={mfData:JSON.stringify({sessionTimeoutDuration:0,continueCtaLabel:"Continue",startAfreshCtaLabel:"Start Afresh",noteText:"<p>Fares may get affected..</p>\n",titleText:"<p>Still there? Session has timed out</p>\n",startAfreshCtaPath:"/content/skyplus6e/language-masters/en/home/homepage.html",continueCtaPath:"/content/skyplus6e/language-masters/en/home/homepage.html",timerImage:"https://www.goindigo.in/etc/designs/indigo-reservation-v2/clientlibs-react/images/Session-Timed-Out.gif"})};var b=E;function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,C(r.key),r)}}function C(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}var O=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"init",value:function(e){var t=JSON.parse(JSON.stringify(e.dataset));(0,i.s)(e).render(o().createElement(b,t))}}],(n=null)&&w(t.prototype,n),r&&w(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}()},9940:function(e,t,n){"use strict";n.r(t);var r=n(8416),o=n.n(r),i=n(5697),a=n.n(i),c=function(e){var t,n,i=e.children,a=e.onCloseHandler,c=e.overlayClickClose,u=e.closeButtonIconClass,l=e.className,s=void 0===l?"":l,f=e.modalTitle,p=void 0===f?"":f,d=e.modalTitleDisplay,m=e.onOutsideClickClose,h=e.customPopupContentClassName,v=e.hideHead,y=void 0!==v&&v,g=e.isLoginForm,_=void 0!==g&&g,E=e.id,b=null==i||null===(t=i.type)||void 0===t||null===(n=t.toString())||void 0===n?void 0:n.includes("react");(0,r.useEffect)((function(){return document.body.classList.add("no-scroll-session-timeout-container-app"),function(){document.body.classList.remove("no-scroll-session-timeout-container-app")}}),[]);var w=function(e,t){t.addEventListener("keydown",(function(t){t.preventDefault(),e.focus()}))};return(0,r.useEffect)((function(){var e=null,t=null,n=document.querySelector(".popup-modal-with-content-session-timeout-container-app-login-form");_&&n&&(n.classList.contains("Member")||n.classList.contains("member")?(e=document.querySelector(".popup-modal-with-content-session-timeout-container-app__close-overlay-button"),t=document.querySelector(".login-form__wrapper__form > .login-form__sign-up-new-user > p > a"),w(e,t)):n.classList.contains("Agent")?(e=document.querySelector(".login-form > .login-form__sign-up-new-user > p > a"),t=document.querySelector(".login-form__wrapper__form > .login-form__sign-up-new-user > p > a:last-child"),w(e,t)):n.classList.contains("CorpConnectAdmin")?(e=document.querySelector(".login-form > .login-form__sign-up-new-user > p > a"),t=document.querySelector(".login-form__wrapper__form > .login-form__sign-up-new-user > p > a"),w(e,t)):n.classList.contains("CorpConnectUser")?(e=document.querySelector(".login-form > .login-form__sign-up-new-user > p > a"),t=document.querySelector(".login-form__wrapper__form > .submit-btn > button"),w(e,t)):n.classList.contains("CAPF")?(e=document.querySelector(".custom-form-control > .input-text-field__input"),t=document.querySelector(".login-form__wrapper__form > .submit-btn > button"),w(e,t)):n.classList.contains("Staff")&&(e=document.querySelector(".cmp-custom-drop-down__btn"),t=document.querySelector(".login-form__wrapper__form > .login-form__sign-up-new-user > p > a"),w(e,t)))}),[s,_]),o().createElement("div",{className:"popup-modal-with-content-session-timeout-container-app "+s,onClick:m},o().createElement("div",{className:"popup-modal-with-content-session-timeout-container-app__bg-overlay",onClick:c?a:null},o().createElement("div",{id:E,className:"popup-modal-with-content-session-timeout-container-app__content "+h},!y&&o().createElement("div",{className:"popup-modal-with-content-session-timeout-container-app__header"},o().createElement("button",{onClick:a,className:"popup-modal-with-content-session-timeout-container-app__close-overlay-button d-none"},o().createElement("i",{className:"popup-modal-with-content-session-timeout-container-app__close-overlay-button__icon skp-iconmoon-icon "+(u||"popup-modal-with-content-session-timeout-container-app__close-overlay-button__icon--close")})),o().createElement("h3",{className:"popup-modal-with-content-session-timeout-container-app__header__title "+(d?"":"visibility-hidden")},p)),b?o().cloneElement(i,{onCloseHandler:a}):i)))};c.propTypes={onCloseHandler:a().func,overlayClickClose:a().bool,hideHead:a().bool,children:a().any.isRequired},c.defaultProps={children:null,onCloseHandler:function(){},overlayClickClose:!1},t.default=c},627:function(e,t,n){"use strict";n.r(t),n.d(t,{ModalWrapperSessionTimeout:function(){return r.default}});var r=n(9940)},5664:function(e,t,n){"use strict";n.r(t);var r=n(8416),o=n.n(r),i=n(5697),a=n.n(i),c=n(627),u=function(e){var t=e.labels,n=e.onAfreshClick,r=e.onCloseHandler,i=e.onContinueClick,a=e.startAfreshCtaPath;return o().createElement(c.ModalWrapperSessionTimeout,{className:"sessiontimeoutmodal",onCloseHandler:r},o().createElement("div",{className:"session-generic-modal"},o().createElement("div",{className:"session-generic-modal__content"},o().createElement("div",{className:"session-generic-modal__header"}),o().createElement("div",{className:"session-generic-modal__body"},o().createElement("img",{alt:"loading",loading:"lazy",src:(null==t?void 0:t.timerImage)||"",className:"session-modal__image"}),o().createElement("h4",{className:"message",dangerouslySetInnerHTML:{__html:(null==t?void 0:t.titleText)||""}})),o().createElement("div",{className:"session-generic-modal__footer"},o().createElement("div",{className:"btn-group"},o().createElement("a",{onClick:n,href:a||"#",className:"anchor-btn anchor-btn--refresh"},(null==t?void 0:t.startAfreshCtaLabel)||""),o().createElement("a",{onClick:i,className:"anchor-btn anchor-btn--continue"},(null==t?void 0:t.continueCtaLabel)||"")),o().createElement("div",{className:"paragraph",dangerouslySetInnerHTML:{__html:(null==t?void 0:t.noteText)||""}})))))};u.propTypes={onAfreshClick:a().func,onContinueClick:a().func,onCloseHandler:a().func.isRequired,labels:a().any},t.default=u},1540:function(e,t,n){"use strict";n.r(t),n.d(t,{localStorageKeys:function(){return r}});var r={USER_NATIONALITY:"usr_nlty",RECENT_SOURCE_CITIES:"src_list",RECENT_DESTINATION_CITIES:"dest_list",NEARBY_DESTINATION_LIST:"nrby_dest_list",NEARBY_STATION:"nrby_stat",BOOKING_CONTEXT_VALUES:"bw_cntxt_val",FLIGHT_SEARCH_PAYLOAD:"flght_srch_d",LOCATION:"location",SPECIALFARE_ID_DATA:"speci_pa_dat",GENERIC_DATA_CONTAINER_APP:"generic_data_container_app",ERROR_CODE_AEM_MAPPING:"info_errorMessageItemList"}},8104:function(e,t,n){"use strict";n.r(t),n.d(t,{getErrorMsgForCode:function(){return a}});var r=n(1609),o=n.n(r),i=n(1540);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t={type:"Error",code:"default",message:"Something went wrong, please try later"};try{var n,r=JSON.parse(localStorage.getItem(i.localStorageKeys.GENERIC_DATA_CONTAINER_APP)),a=r?r[i.localStorageKeys.ERROR_CODE_AEM_MAPPING]:[];if((null==a||null===(n=a.items)||void 0===n?void 0:n.length)>0){var c,u,l=null==a||null===(c=a.items)||void 0===c?void 0:c.find((function(t){var n;return(null==t||null===(n=t.code)||void 0===n?void 0:n.toLowerCase())===e.toLowerCase()}));if(t=(null==a||null===(u=a.items)||void 0===u?void 0:u.find((function(e){var t;return"default"===(null==e||null===(t=e.code)||void 0===t?void 0:t.toLowerCase())})))||t,l)return l}else if(!o()(null==a?void 0:a.items)){var s=null==a?void 0:a.items[e];if(s)return s}return t}catch(l){return console.log("---catch error:getErrorMsgForCode::::",l),t}}},8361:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,c=[],u=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.r(t),n.d(t,{formattedMessage:function(){return s},getEnvObj:function(){return c},getParameterByName:function(){return u},getPersonaBasedLogoRedirectHomePage:function(){return a},removeParam:function(){return l},validator:function(){return i}});var i=function(e){return function(t){return!t||(t+"").match(e)}},a=function(){var e;return(null===(e=document.querySelector(".skyplus6e-header__logo > a"))||void 0===e?void 0:e.href)||"/"},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"_env_login",t={};try{return window[e]||t}catch(e){return console.log(e),t}},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.href;e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.href,n=t.split("?")[0],r=[],o=-1!==t.indexOf("?")?t.split("?")[1]:"";if(""!==o){for(var i=(r=o.split("&")).length-1;i>=0;i-=1)r[i].split("=")[0]===e&&r.splice(i,1);r.length&&(n=n+"?"+r.join("&"))}return n},s=function(e,t){return Object.entries(t).forEach((function(t){var n=r(t,2),o=n[0],i=n[1],a=new RegExp("{"+o+"}","g");e=e.replace(a,i)})),e}},8552:function(e,t,n){var r=n(852)(n(5639),"DataView");e.exports=r},3818:function(e,t,n){var r=n(852)(n(5639),"Promise");e.exports=r},8525:function(e,t,n){var r=n(852)(n(5639),"Set");e.exports=r},577:function(e,t,n){var r=n(852)(n(5639),"WeakMap");e.exports=r},280:function(e,t,n){var r=n(5726),o=n(6916),i=Object.prototype.hasOwnProperty;e.exports=function(e){if(!r(e))return o(e);var t=[];for(var n in Object(e))i.call(e,n)&&"constructor"!=n&&t.push(n);return t}},4160:function(e,t,n){var r=n(8552),o=n(7071),i=n(3818),a=n(8525),c=n(577),u=n(4239),l=n(346),s="[object Map]",f="[object Promise]",p="[object Set]",d="[object WeakMap]",m="[object DataView]",h=l(r),v=l(o),y=l(i),g=l(a),_=l(c),E=u;(r&&E(new r(new ArrayBuffer(1)))!=m||o&&E(new o)!=s||i&&E(i.resolve())!=f||a&&E(new a)!=p||c&&E(new c)!=d)&&(E=function(e){var t=u(e),n="[object Object]"==t?e.constructor:void 0,r=n?l(n):"";if(r)switch(r){case h:return m;case v:return s;case y:return f;case g:return p;case _:return d}return t}),e.exports=E},6916:function(e,t,n){var r=n(5569)(Object.keys,Object);e.exports=r},1609:function(e,t,n){var r=n(280),o=n(4160),i=n(5694),a=n(1469),c=n(8612),u=n(4144),l=n(5726),s=n(6719),f=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(c(e)&&(a(e)||"string"==typeof e||"function"==typeof e.splice||u(e)||s(e)||i(e)))return!e.length;var t=o(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(l(e))return!r(e).length;for(var n in e)if(f.call(e,n))return!1;return!0}},2703:function(e,t,n){"use strict";var r=n(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},745:function(e,t,n){"use strict";var r=n(1051);t.s=r.createRoot,r.hydrateRoot}}]);