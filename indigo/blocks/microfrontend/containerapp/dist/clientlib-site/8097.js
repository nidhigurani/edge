"use strict";(self.webpackChunkskyplus_container_app=self.webpackChunkskyplus_container_app||[]).push([[8097],{8097:function(t,e,i){function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,r(n.key),n)}}function r(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}i.r(e);var o=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.topics={}}var e,i,r;return e=t,(i=[{key:"subscribe",value:function(t,e){t&&e&&(this.topics[t]||(this.topics[t]=[]),this.topics[t].push(e))}},{key:"publish",value:function(t,e){!this.topics[t]||this.topics[t].length<1||this.topics[t].forEach((function(t){t(e||{})}))}}])&&n(e.prototype,i),r&&n(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}());e.default=o}}]);