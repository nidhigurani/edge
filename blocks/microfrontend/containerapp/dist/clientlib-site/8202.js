(self.webpackChunkskyplus_container_app=self.webpackChunkskyplus_container_app||[]).push([[8202,9940,8363,5664],{79940:function(e,n,o){"use strict";o.r(n);o(60228),o(12826),o(76801),o(43843);var t=o(28416),r=o.n(t),s=o(45697),i=o.n(s),a=function(e){var n,o,s=e.children,i=e.onCloseHandler,a=e.overlayClickClose,c=e.closeButtonIconClass,l=e.className,u=void 0===l?"":l,p=e.modalTitle,m=void 0===p?"":p,d=e.modalTitleDisplay,f=e.onOutsideClickClose,_=e.customPopupContentClassName,h=e.hideHead,v=void 0!==h&&h,y=e.isLoginForm,g=void 0!==y&&y,C=e.id,b=null==s||null===(n=s.type)||void 0===n||null===(o=n.toString())||void 0===o?void 0:o.includes("react");(0,t.useEffect)((function(){return document.body.classList.add("no-scroll-session-timeout-container-app"),function(){document.body.classList.remove("no-scroll-session-timeout-container-app")}}),[]);var w=function(e,n){n.addEventListener("keydown",(function(n){n.preventDefault(),e.focus()}))};return(0,t.useEffect)((function(){var e=null,n=null,o=document.querySelector(".popup-modal-with-content-session-timeout-container-app-login-form");g&&o&&(o.classList.contains("Member")||o.classList.contains("member")?(e=document.querySelector(".popup-modal-with-content-session-timeout-container-app__close-overlay-button"),n=document.querySelector(".login-form__wrapper__form > .login-form__sign-up-new-user > p > a"),w(e,n)):o.classList.contains("Agent")?(e=document.querySelector(".login-form > .login-form__sign-up-new-user > p > a"),n=document.querySelector(".login-form__wrapper__form > .login-form__sign-up-new-user > p > a:last-child"),w(e,n)):o.classList.contains("CorpConnectAdmin")?(e=document.querySelector(".login-form > .login-form__sign-up-new-user > p > a"),n=document.querySelector(".login-form__wrapper__form > .login-form__sign-up-new-user > p > a"),w(e,n)):o.classList.contains("CorpConnectUser")?(e=document.querySelector(".login-form > .login-form__sign-up-new-user > p > a"),n=document.querySelector(".login-form__wrapper__form > .submit-btn > button"),w(e,n)):o.classList.contains("CAPF")?(e=document.querySelector(".custom-form-control > .input-text-field__input"),n=document.querySelector(".login-form__wrapper__form > .submit-btn > button"),w(e,n)):o.classList.contains("Staff")&&(e=document.querySelector(".cmp-custom-drop-down__btn"),n=document.querySelector(".login-form__wrapper__form > .login-form__sign-up-new-user > p > a"),w(e,n)))}),[u,g]),r().createElement("div",{className:"popup-modal-with-content-session-timeout-container-app "+u,onClick:f},r().createElement("div",{className:"popup-modal-with-content-session-timeout-container-app__bg-overlay",onClick:a?i:null},r().createElement("div",{id:C,className:"popup-modal-with-content-session-timeout-container-app__content "+_},!v&&r().createElement("div",{className:"popup-modal-with-content-session-timeout-container-app__header"},r().createElement("button",{onClick:i,className:"popup-modal-with-content-session-timeout-container-app__close-overlay-button d-none"},r().createElement("i",{className:"popup-modal-with-content-session-timeout-container-app__close-overlay-button__icon skp-iconmoon-icon "+(c||"popup-modal-with-content-session-timeout-container-app__close-overlay-button__icon--close")})),r().createElement("h3",{className:"popup-modal-with-content-session-timeout-container-app__header__title "+(d?"":"visibility-hidden")},m)),b?r().cloneElement(s,{onCloseHandler:i}):s)))};a.propTypes={onCloseHandler:i().func,overlayClickClose:i().bool,hideHead:i().bool,children:i().any.isRequired},a.defaultProps={children:null,onCloseHandler:function(){},overlayClickClose:!1},n.default=a},48363:function(e,n,o){"use strict";o.r(n),o.d(n,{ModalWrapperSessionTimeout:function(){return t.default}});var t=o(79940)},25664:function(e,n,o){"use strict";o.r(n);var t=o(28416),r=o.n(t),s=o(45697),i=o.n(s),a=o(48363),c=function(e){var n=e.labels,o=e.onAfreshClick,t=e.onCloseHandler,s=e.onContinueClick,i=e.startAfreshCtaPath;return r().createElement(a.ModalWrapperSessionTimeout,{className:"sessiontimeoutmodal",onCloseHandler:t},r().createElement("div",{className:"session-generic-modal"},r().createElement("div",{className:"session-generic-modal__content"},r().createElement("div",{className:"session-generic-modal__header"}),r().createElement("div",{className:"session-generic-modal__body"},r().createElement("img",{alt:"loading",loading:"lazy",src:(null==n?void 0:n.timerImage)||"",className:"session-modal__image"}),r().createElement("h4",{className:"message",dangerouslySetInnerHTML:{__html:(null==n?void 0:n.titleText)||""}})),r().createElement("div",{className:"session-generic-modal__footer"},r().createElement("div",{className:"btn-group"},r().createElement("a",{onClick:o,href:i||"#",className:"anchor-btn anchor-btn--refresh"},(null==n?void 0:n.startAfreshCtaLabel)||""),r().createElement("a",{onClick:s,className:"anchor-btn anchor-btn--continue"},(null==n?void 0:n.continueCtaLabel)||"")),r().createElement("div",{className:"paragraph",dangerouslySetInnerHTML:{__html:(null==n?void 0:n.noteText)||""}})))))};c.propTypes={onAfreshClick:i().func,onContinueClick:i().func,onCloseHandler:i().func.isRequired,labels:i().any},n.default=c},18202:function(e,n,o){"use strict";o.r(n),o.d(n,{SessionTimeoutModalContainerApp:function(){return t.default}});var t=o(25664)},92703:function(e,n,o){"use strict";var t=o(50414);function r(){}function s(){}s.resetWarningCache=r,e.exports=function(){function e(e,n,o,r,s,i){if(i!==t){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function n(){return e}e.isRequired=e;var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:s,resetWarningCache:r};return o.PropTypes=o,o}},45697:function(e,n,o){e.exports=o(92703)()},50414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},27413:function(e,n,o){"use strict";var t=o(44201)("match");e.exports=function(e){var n=/./;try{"/./"[e](n)}catch(o){try{return n[t]=!1,"/./"[e](n)}catch(e){}}return!1}},91245:function(e,n,o){"use strict";var t=o(48999),r=o(6648),s=o(44201)("match");e.exports=function(e){var n;return t(e)&&(void 0!==(n=e[s])?!!n:"RegExp"===r(e))}},42124:function(e,n,o){"use strict";var t=o(91245),r=TypeError;e.exports=function(e){if(t(e))throw new r("The method doesn't accept regular expressions");return e}},76801:function(e,n,o){"use strict";var t=o(79989),r=o(84328).includes,s=o(3689),i=o(87370);t({target:"Array",proto:!0,forced:s((function(){return!Array(1).includes()}))},{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),i("includes")},43843:function(e,n,o){"use strict";var t=o(79989),r=o(68844),s=o(42124),i=o(74684),a=o(34327),c=o(27413),l=r("".indexOf);t({target:"String",proto:!0,forced:!c("includes")},{includes:function(e){return!!~l(a(i(this)),a(s(e)),arguments.length>1?arguments[1]:void 0)}})}}]);