(self.webpackChunkskyplus_container_app=self.webpackChunkskyplus_container_app||[]).push([[7634],{7634:function(e,t,n){"use strict";n.r(t);var r=n(8416),o=n.n(r),i=n(5697),a=n.n(i);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,s=[],c=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return s}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var l=function(e){var t=e.onClose,n=e.position,i=void 0===n?"top-bottom":n,a=e.isAnimate,c=void 0===a||a,l=e.autoDismissTimeer,u=e.renderToastContent,p=e.containerClass,f=e.title,m=e.description,y=e.variation,d=e.mainToastWrapperClass,b=s((0,r.useState)(!1),2),v=b[0],h=b[1];return(0,r.useEffect)((function(){l&&setTimeout((function(){h(!0),t&&t()}),l)}),[]),v?null:o().createElement("div",{className:"skyplus-design-toast "+d},o().createElement("div",{className:"skyplus-design-toast-container "+p+" "+y+" "+i+" "+(c?"":"no-animate")},t&&o().createElement("i",{className:"skyplus-design-toast__close icon-close-btn skp-iconmoon-icon",onClick:t}),o().createElement("div",null,u?u():o().createElement("div",{className:"notifi-variation-container"},o().createElement("div",{className:"notifi-variation-icon-wrapper"},o().createElement("i",{className:"icomoon-icon-information"})),o().createElement("div",{className:"col"},o().createElement("h5",{className:"title"},f),o().createElement("ul",{className:"content"},o().createElement("li",{className:"desc",dangerouslySetInnerHTML:{__html:m}})))))))};l.propTypes={onClose:a().func,position:a().oneOf(["top-bottom","bottom-top","top-right","bottom-right","top-left","bottom-left"]),isAnimate:a().bool,autoDismissTimeer:a().number,renderToastContent:a().func,containerClass:a().string,variation:a().oneOf(["notifi-variation--error","notifi-variation--info"]),title:a().string,description:a().string,mainToastWrapperClass:a().string},t.default=l},2703:function(e,t,n){"use strict";var r=n(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);