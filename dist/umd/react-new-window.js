!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","react-dom"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).ReactNewWindow=t(e.React,e.ReactDOM)}(this,(function(e,t){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=n(e),i=n(t);function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function l(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=s(e);if(t){var i=s(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return l(this,n)}}var d,f,w,p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(l,e);var t,n,o,u=a(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=u.call(this,e)).container=null,t.window=null,t.windowCheckerInterval=null,t.released=!1,t.state={mounted:!1},t}return t=l,(n=[{key:"render",value:function(){return this.state.mounted?i.default.createPortal(this.props.children,this.container):null}},{key:"componentDidMount",value:function(){this.openChild(),this.setState({mounted:!0})}},{key:"openChild",value:function(){var e,t=this,n=this.props,o=n.url,i=n.title,r=n.name,c=n.features,u=n.onBlock,l=n.onOpen,s=n.center;if("string"!=typeof s||void 0!==c.width&&void 0!==c.height){if("parent"===s)c.left=window.top.outerWidth/2+window.top.screenX-c.width/2,c.top=window.top.outerHeight/2+window.top.screenY-c.height/2;else if("screen"===s){var a=void 0!==window.screenLeft?window.screenLeft:window.screen.left,d=void 0!==window.screenTop?window.screenTop:window.screen.top,f=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:window.screen.width,w=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:window.screen.height;c.left=f/2-c.width/2+a,c.top=w/2-c.height/2+d}}else console.warn("width and height window features must be present when a center prop is provided");if(this.window=window.open(o,r,(e=c,Object.keys(e).reduce((function(t,n){var o=e[n];return"boolean"==typeof o?t.push("".concat(n,"=").concat(o?"yes":"no")):t.push("".concat(n,"=").concat(o)),t}),[]).join(","))),this.container=this.window.document.createElement("div"),this.windowCheckerInterval=setInterval((function(){t.window&&!t.window.closed||t.release()}),50),this.window){if(this.window.document.title=i,this.container=this.window.document.getElementById("new-window-container"),null===this.container)this.container=this.window.document.createElement("div"),this.container.setAttribute("id","new-window-container"),this.window.document.body.appendChild(this.container);else{var p=this.window.document.getElementById("new-window-container-static");this.window.document.body.removeChild(p)}this.props.copyStyles&&setTimeout((function(){return e=document,n=t.window.document,o=n.createDocumentFragment(),Array.from(e.styleSheets).forEach((function(e){var t;try{t=e.cssRules}catch(e){console.error(e)}if(t){var i=[];Array.from(e.cssRules).forEach((function(e){var t=e.type;if(t!==CSSRule.UNKNOWN_RULE){var n="";n=t===CSSRule.KEYFRAMES_RULE?function(e){var t=["@keyframes",e.name,"{"];return Array.from(e.cssRules).forEach((function(e){t.push(e.keyText,"{",e.style.cssText,"}")})),t.push("}"),t.join(" ")}(e):[CSSRule.IMPORT_RULE,CSSRule.FONT_FACE_RULE].includes(t)?function(e){return e.cssText.split("url(").map((function(e){return"/"===e[1]?"".concat(e.slice(0,1)).concat(window.location.origin).concat(e.slice(1)):e})).join("url(")}(e):e.cssText,i.push(n)}}));var r=n.createElement("style");r.textContent=i.join("\n"),o.appendChild(r)}else if(e.href){var c=n.createElement("link");c.rel="stylesheet",c.href=e.href,o.appendChild(c)}})),void n.head.appendChild(o);var e,n,o}),0),"function"==typeof l&&l(this.window),this.window.addEventListener("beforeunload",(function(){return t.release()}))}else"function"==typeof u?u(null):console.warn("A new window could not be opened. Maybe it was blocked.")}},{key:"componentWillUnmount",value:function(){if(this.window)if(this.props.closeOnUnmount)this.window.close();else if(this.props.children){var e=this.container.cloneNode(!0);e.setAttribute("id","new-window-container-static"),this.window.document.body.appendChild(e)}}},{key:"release",value:function(){if(!this.released){this.released=!0,clearInterval(this.windowCheckerInterval);var e=this.props.onUnload;"function"==typeof e&&e(null)}}}])&&r(t.prototype,n),o&&r(t,o),Object.defineProperty(t,"prototype",{writable:!1}),l}(o.default.PureComponent);return w={url:"",name:"",title:"",features:{width:"600px",height:"640px"},onBlock:null,onOpen:null,onUnload:null,center:"parent",copyStyles:!0,closeOnUnmount:!0},(f="defaultProps")in(d=p)?Object.defineProperty(d,f,{value:w,enumerable:!0,configurable:!0,writable:!0}):d[f]=w,p}));
//# sourceMappingURL=react-new-window.js.map
