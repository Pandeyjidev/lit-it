/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
(function(){var e=["exports","require","vs/base/common/uri","vs/base/common/winjs.base","vs/base/common/objects","vs/base/common/arrays","vs/base/common/platform","vs/nls!vs/platform/environment/node/argv","vs/base/common/types","vs/platform/environment/node/argv","vs/platform/node/package","path","vs/platform/node/product","os","minimist","assert","vs/base/common/winjs.base.raw","vs/nls!vs/code/node/cli","child_process","vs/code/node/cli","vs/nls"],t=function(t){for(var n=[],r=0,i=t.length;r<i;r++)n[r]=e[t[r]];return n};define(e[5],t([1,0]),function(e,t){"use strict";function n(e,t){var n=0,r=e.length;if(0===r)return 0;for(;n<r;){var i=Math.floor((n+r)/2);t(e[i])?r=i:n=i+1}return n}function r(e,t){if(!(e.length<=1)){var n=e.length/2|0,i=e.slice(0,n),o=e.slice(n);r(i,t),r(o,t);for(var a=0,s=0,u=0;a<i.length&&s<o.length;){var c=t(i[a],o[s]);e[u++]=c<=0?i[a++]:o[s++]}for(;a<i.length;)e[u++]=i[a++];for(;s<o.length;)e[u++]=o[s++]}}function i(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n;return-1}Object.defineProperty(t,"__esModule",{value:!0}),t.tail=function(e,t){return void 0===t&&(t=0),e[e.length-(1+t)]},t.equals=function(e,t,n){if(void 0===n&&(n=function(e,t){return e===t}),e.length!==t.length)return!1;for(var r=0,i=e.length;r<i;r++)if(!n(e[r],t[r]))return!1;return!0},t.binarySearch=function(e,t,n){for(var r=0,i=e.length-1;r<=i;){var o=(r+i)/2|0,a=n(e[o],t);if(a<0)r=o+1;else{if(!(a>0))return o;i=o-1}}return-(r+1)},t.findFirst=n,t.mergeSort=function(e,t){return r(e,t),e},t.groupBy=function(e,t){for(var n,r=[],i=0,o=e.slice(0).sort(t);i<o.length;i++){var a=o[i];n&&0===t(n[0],a)?n.push(a):(n=[a],r.push(n))}return r},t.delta=function(e,t,n){for(var r=[],i=[],o=0,a=0;;){if(o===e.length){i.push.apply(i,t.slice(a));break}if(a===t.length){r.push.apply(r,e.slice(o));break}var s=e[o],u=t[a],c=n(s,u);0===c?(o+=1,a+=1):c<0?(r.push(s),o+=1):c>0&&(i.push(u),a+=1)}return{removed:r,added:i}},t.top=function(e,t,r){if(0===r)return[];for(var i=e.slice(0,r).sort(t),o=r,a=e.length;o<a;o++)!function(o,a){var s=e[o];if(t(s,i[r-1])<0){i.pop();var u=n(i,function(e){return t(s,e)<0});i.splice(u,0,s)}}(o);return i},t.coalesce=function(e){return e?e.filter(function(e){return!!e}):e},t.move=function(e,t,n){e.splice(n,0,e.splice(t,1)[0])},t.isFalsyOrEmpty=function(e){return!Array.isArray(e)||0===e.length},t.distinct=function(e,t){if(!t)return e.filter(function(t,n){return e.indexOf(t)===n});var n=Object.create(null);return e.filter(function(e){var r=t(e);return!n[r]&&(n[r]=!0,!0)})},t.uniqueFilter=function(e){var t=Object.create(null);return function(n){var r=e(n);return!t[r]&&(t[r]=!0,!0)}},t.firstIndex=i,t.first=function(e,t,n){void 0===n&&(n=null);var r=i(e,t);return r<0?n:e[r]},t.commonPrefixLength=function(e,t,n){void 0===n&&(n=function(e,t){return e===t});for(var r=0,i=0,o=Math.min(e.length,t.length);i<o&&n(e[i],t[i]);i++)r++;return r},t.flatten=function(e){return e.reduce(function(e,t){return e.concat(t)},[])},t.range=function(e,t){void 0===t&&(t=0);for(var n=[],r=t;r<e;r++)n.push(r);return n},t.fill=function(e,t,n){void 0===n&&(n=[]);for(var r=0;r<e;r++)n[r]=t();return n},t.index=function(e,t,n){return void 0===n&&(n=function(e){return e}),e.reduce(function(e,r){var i=t(r);return e[i]=n(r,e[i]),e},Object.create(null))},t.insert=function(e,t){return e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}},t.arrayInsert=function(e,t,n){var r=e.slice(0,t),i=e.slice(t);return r.concat(n,i)}}),define(e[6],t([1,0]),function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=!1,r=!1,i=!1,o=!1,a=!1,s=!1,u=void 0,c=void 0;if(t.LANGUAGE_DEFAULT="en","object"==typeof process){n="win32"===process.platform,r="darwin"===process.platform,i="linux"===process.platform,o=!n&&0===process.getuid();var l=process.env.VSCODE_NLS_CONFIG;if(l)try{var f=JSON.parse(l),p=f.availableLanguages["*"];u=f.locale,c=p||t.LANGUAGE_DEFAULT}catch(e){}a=!0}else if("object"==typeof navigator){var h=navigator.userAgent;n=h.indexOf("Windows")>=0,r=h.indexOf("Macintosh")>=0,i=h.indexOf("Linux")>=0,s=!0,c=u=navigator.language}var _;!function(e){e[e.Web=0]="Web",e[e.Mac=1]="Mac",e[e.Linux=2]="Linux",e[e.Windows=3]="Windows"}(_=t.Platform||(t.Platform={}));var d=_.Web;a&&(r?d=_.Mac:n?d=_.Windows:i&&(d=_.Linux)),t.isWindows=n,t.isMacintosh=r,t.isLinux=i,t.isRootUser=o,t.isNative=a,t.isWeb=s,t.platform=d,t.language=c,t.locale=u;var v="object"==typeof self?self:global;t.globals=v,t.hasWebWorkerSupport=function(){return void 0!==v.Worker},t.setTimeout=v.setTimeout.bind(v),t.clearTimeout=v.clearTimeout.bind(v),t.setInterval=v.setInterval.bind(v),t.clearInterval=v.clearInterval.bind(v);!function(e){e[e.Windows=1]="Windows",e[e.Macintosh=2]="Macintosh",e[e.Linux=3]="Linux"}(t.OperatingSystem||(t.OperatingSystem={})),t.OS=r?2:n?1:3;!function(e){e[e.Unknown=0]="Unknown",e[e.Disabled=1]="Disabled",e[e.Enabled=2]="Enabled"}(t.AccessibilitySupport||(t.AccessibilitySupport={}))}),define(e[8],t([1,0]),function(e,t){"use strict";function n(e){return Array.isArray?Array.isArray(e):!(!e||typeof e.length!==u.number||e.constructor!==Array)}function r(e){return typeof e===u.string||e instanceof String}function i(e){return!(typeof e!==u.object||null===e||Array.isArray(e)||e instanceof RegExp||e instanceof Date)}function o(e){return typeof e===u.undefined}function a(e){return typeof e===u.function}function s(e,t){if(r(t)){if(typeof e!==t)throw new Error("argument does not match constraint: typeof "+t)}else if(a(t)){if(e instanceof t)return;if(e&&e.constructor===t)return;if(1===t.length&&!0===t.call(void 0,e))return;throw new Error("argument does not match one of these constraints: arg instanceof constraint, arg.constructor === constraint, nor constraint(arg) === true")}}Object.defineProperty(t,"__esModule",{value:!0});var u={number:"number",string:"string",undefined:"undefined",object:"object",function:"function"};t.isArray=n,t.isString=r,t.isStringArray=function(e){return n(e)&&e.every(function(e){return r(e)})},t.isObject=i,t.isNumber=function(e){return(typeof e===u.number||e instanceof Number)&&!isNaN(e)},t.isBoolean=function(e){return!0===e||!1===e},t.isUndefined=o,t.isUndefinedOrNull=function(e){return o(e)||null===e};var c=Object.prototype.hasOwnProperty;t.isEmptyObject=function(e){if(!i(e))return!1;for(var t in e)if(c.call(e,t))return!1;return!0},t.isFunction=a,t.areFunctions=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e&&e.length>0&&e.every(a)},t.validateConstraints=function(e,t){for(var n=Math.min(e.length,t.length),r=0;r<n;r++)s(e[r],t[r])},t.validateConstraint=s,t.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Object.create(e.prototype);return e.apply(r,t),r}}),define(e[4],t([1,0,8]),function(e,t,n){"use strict";function r(e){if(!e||"object"!=typeof e)return e;if(e instanceof RegExp)return e;var t=Array.isArray(e)?[]:{};return Object.keys(e).forEach(function(n){e[n]&&"object"==typeof e[n]?t[n]=r(e[n]):t[n]=e[n]}),t}function i(e){if(!e||"object"!=typeof e)return e;var t=Array.isArray(e)?[]:{};return Object.getOwnPropertyNames(e).forEach(function(n){e[n]&&"object"==typeof e[n]?t[n]=i(e[n]):t[n]=e[n]}),t}function o(e,t,r){if(n.isUndefinedOrNull(e))return e;var i=t(e);if(void 0!==i)return i;if(n.isArray(e)){for(var a=[],s=0;s<e.length;s++)a.push(o(e[s],t,r));return a}if(n.isObject(e)){if(r.indexOf(e)>=0)throw new Error("Cannot clone recursive data-structure");r.push(e);var u={};for(var c in e)l.call(e,c)&&(u[c]=o(e[c],t,r));return r.pop(),u}return e}function a(e,t,r){return void 0===r&&(r=!0),n.isObject(e)?(n.isObject(t)&&Object.keys(t).forEach(function(i){i in e?r&&(n.isObject(e[i])&&n.isObject(t[i])?a(e[i],t[i],r):e[i]=t[i]):e[i]=t[i]}),e):t}function s(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.forEach(function(t){return Object.keys(t).forEach(function(n){return e[n]=t[n]})}),e}function u(e,t){if(e===t)return!0;if(null===e||void 0===e||null===t||void 0===t)return!1;if(typeof e!=typeof t)return!1;if("object"!=typeof e)return!1;if(Array.isArray(e)!==Array.isArray(t))return!1;var n,r;if(Array.isArray(e)){if(e.length!==t.length)return!1;for(n=0;n<e.length;n++)if(!u(e[n],t[n]))return!1}else{var i=[];for(r in e)i.push(r);i.sort();var o=[];for(r in t)o.push(r);if(o.sort(),!u(i,o))return!1;for(n=0;n<i.length;n++)if(!u(e[i[n]],t[i[n]]))return!1}return!0}function c(e){for(var t={},n=0;n<e.length;++n)t[e[n]]=!0;return t}Object.defineProperty(t,"__esModule",{value:!0}),t.clone=r,t.deepClone=i;var l=Object.prototype.hasOwnProperty;t.cloneAndChange=function(e,t){return o(e,t,[])},t.mixin=a,t.assign=s,t.toObject=function(e,t){return e.reduce(function(e,n){return s(e,(r={},r[t(n)]=n,r));var r},Object.create(null))},t.equals=u,t.ensureProperty=function(e,t,n){void 0===e[t]&&(e[t]=n)},t.arrayToHash=c,t.createKeywordMatcher=function(e,t){void 0===t&&(t=!1),t&&(e=e.map(function(e){return e.toLowerCase()}));var n=c(e);return t?function(e){return void 0!==n[e.toLowerCase()]&&n.hasOwnProperty(e.toLowerCase())}:function(e){return void 0!==n[e]&&n.hasOwnProperty(e)}},t.derive=function(e,t){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t=t||function(){};var r=e.prototype,i=t.prototype;t.prototype=Object.create(r);for(var n in i)i.hasOwnProperty(n)&&Object.defineProperty(t.prototype,n,Object.getOwnPropertyDescriptor(i,n));Object.defineProperty(t.prototype,"constructor",{value:t,writable:!0,configurable:!0,enumerable:!0})},t.safeStringify=function(e){var t=[];return JSON.stringify(e,function(e,r){if(n.isObject(r)||Array.isArray(r)){if(-1!==t.indexOf(r))return"[Circular]";t.push(r)}return r})},t.getOrDefault=function(e,t,n){void 0===n&&(n=null);var r=t(e);return void 0===r?n:r},t.distinct=function(e,t){var n=Object.create(null);return e&&t?(Object.keys(t).forEach(function(r){var i=e[r],o=t[r];u(i,o)||(n[r]=o)}),n):n}}),define(e[2],t([1,0,6]),function(e,t,n){"use strict";function r(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}function i(e){return encodeURIComponent(e).replace(/[!'()*]/g,r)}function o(e){return e.replace(/[#?]/,r)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(){this._scheme=e._empty,this._authority=e._empty,this._path=e._empty,this._query=e._empty,this._fragment=e._empty,this._formatted=null,this._fsPath=null}return e.isUri=function(t){return t instanceof e||!!t&&("string"==typeof t.authority&&"string"==typeof t.fragment&&"string"==typeof t.path&&"string"==typeof t.query&&"string"==typeof t.scheme)},Object.defineProperty(e.prototype,"scheme",{get:function(){return this._scheme},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"authority",{get:function(){return this._authority},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"path",{get:function(){return this._path},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"query",{get:function(){return this._query},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"fragment",{get:function(){return this._fragment},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"fsPath",{get:function(){if(!this._fsPath){var t;t=this._authority&&this._path&&"file"===this.scheme?"//"+this._authority+this._path:e._driveLetterPath.test(this._path)?this._path[1].toLowerCase()+this._path.substr(2):this._path,n.isWindows&&(t=t.replace(/\//g,"\\")),this._fsPath=t}return this._fsPath},enumerable:!0,configurable:!0}),e.prototype.with=function(t){if(!t)return this;var n=t.scheme,r=t.authority,i=t.path,o=t.query,a=t.fragment;if(void 0===n?n=this.scheme:null===n&&(n=""),void 0===r?r=this.authority:null===r&&(r=""),void 0===i?i=this.path:null===i&&(i=""),void 0===o?o=this.query:null===o&&(o=""),void 0===a?a=this.fragment:null===a&&(a=""),n===this.scheme&&r===this.authority&&i===this.path&&o===this.query&&a===this.fragment)return this;var s=new e;return s._scheme=n,s._authority=r,s._path=i,s._query=o,s._fragment=a,e._validate(s),s},e.parse=function(t){var n=new e,r=e._parseComponents(t);return n._scheme=r.scheme,n._authority=decodeURIComponent(r.authority),n._path=decodeURIComponent(r.path),n._query=decodeURIComponent(r.query),n._fragment=decodeURIComponent(r.fragment),e._validate(n),n},e.file=function(t){var r=new e;if(r._scheme="file",n.isWindows&&(t=t.replace(/\\/g,e._slash)),t[0]===e._slash&&t[0]===t[1]){var i=t.indexOf(e._slash,2);-1===i?r._authority=t.substring(2):(r._authority=t.substring(2,i),r._path=t.substring(i))}else r._path=t;return r._path[0]!==e._slash&&(r._path=e._slash+r._path),e._validate(r),r},e._parseComponents=function(t){var n={scheme:e._empty,authority:e._empty,path:e._empty,query:e._empty,fragment:e._empty},r=e._regexp.exec(t);return r&&(n.scheme=r[2]||n.scheme,n.authority=r[4]||n.authority,n.path=r[5]||n.path,n.query=r[7]||n.query,n.fragment=r[9]||n.fragment),n},e.from=function(t){return(new e).with(t)},e._validate=function(t){if(t.scheme&&!e._schemePattern.test(t.scheme))throw new Error("[UriError]: Scheme contains illegal characters.");if(t.path)if(t.authority){if(!e._singleSlashStart.test(t.path))throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(e._doubleSlashStart.test(t.path))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')},e.prototype.toString=function(t){return void 0===t&&(t=!1),t?e._asFormatted(this,!0):(this._formatted||(this._formatted=e._asFormatted(this,!1)),this._formatted)},e._asFormatted=function(t,n){var r=n?o:i,a=[],s=t.scheme,u=t.authority,c=t.path,l=t.query,f=t.fragment;if(s&&a.push(s,":"),(u||"file"===s)&&a.push("//"),u&&(-1===(_=(u=u.toLowerCase()).indexOf(":"))?a.push(r(u)):a.push(r(u.substr(0,_)),u.substr(_))),c){var p=e._upperCaseDrive.exec(c);p&&(c=p[1]?"/"+p[2].toLowerCase()+c.substr(3):p[2].toLowerCase()+c.substr(2));for(var h=0;;){var _=c.indexOf(e._slash,h);if(-1===_){a.push(r(c.substring(h)));break}a.push(r(c.substring(h,_)),e._slash),h=_+1}}return l&&a.push("?",r(l)),f&&a.push("#",r(f)),a.join(e._empty)},e.prototype.toJSON=function(){var e={fsPath:this.fsPath,external:this.toString(),$mid:1};return this.path&&(e.path=this.path),this.scheme&&(e.scheme=this.scheme),this.authority&&(e.authority=this.authority),this.query&&(e.query=this.query),this.fragment&&(e.fragment=this.fragment),e},e.revive=function(t){var n=new e;return n._scheme=t.scheme||e._empty,n._authority=t.authority||e._empty,n._path=t.path||e._empty,n._query=t.query||e._empty,n._fragment=t.fragment||e._empty,n._fsPath=t.fsPath,n._formatted=t.external,e._validate(n),n},e}();a._empty="",a._slash="/",a._regexp=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,a._driveLetterPath=/^\/[a-zA-z]:/,a._upperCaseDrive=/^(\/)?([A-Z]:)/,a._schemePattern=/^\w[\w\d+.-]*$/,a._singleSlashStart=/^\//,a._doubleSlashStart=/^\/\//,t.default=a}),function(){var e={};e["WinJS/Core/_WinJS"]={};var t=function(t,n,r){var i={},o=!1,a=n.map(function(t){return"exports"===t?(o=!0,i):e[t]}),s=r.apply({},a);e[t]=o?i:s};t("WinJS/Core/_Global",[],function(){"use strict";return"undefined"!=typeof window?window:"undefined"!=typeof self?self:"undefined"!=typeof global?global:{}}),t("WinJS/Core/_BaseCoreUtils",["WinJS/Core/_Global"],function(e){"use strict";return{hasWinRT:!!e.Windows,markSupportedForProcessing:function(e){return e.supportedForProcessing=!0,e},_setImmediate:e.setImmediate?e.setImmediate.bind(e):function(t){e.setTimeout(t,0)}}}),t("WinJS/Core/_WriteProfilerMark",["WinJS/Core/_Global"],function(e){"use strict";return e.msWriteProfilerMark||function(){}}),t("WinJS/Core/_Base",["WinJS/Core/_WinJS","WinJS/Core/_Global","WinJS/Core/_BaseCoreUtils","WinJS/Core/_WriteProfilerMark"],function(e,t,n,r){"use strict";function i(e,t,n){var r,i,o,a=Object.keys(t),s=Array.isArray(e);for(i=0,o=a.length;i<o;i++){var u=a[i],c=95!==u.charCodeAt(0),l=t[u];!l||"object"!=typeof l||void 0===l.value&&"function"!=typeof l.get&&"function"!=typeof l.set?c?s?e.forEach(function(e){e[u]=l}):e[u]=l:(r=r||{})[u]={value:l,enumerable:c,configurable:!0,writable:!0}:(void 0===l.enumerable&&(l.enumerable=c),n&&l.setName&&"function"==typeof l.setName&&l.setName(n+"."+u),(r=r||{})[u]=l)}r&&(s?e.forEach(function(e){Object.defineProperties(e,r)}):Object.defineProperties(e,r))}return function(){function n(n,r){var i=n||{};if(r){var o=r.split(".");i===t&&"WinJS"===o[0]&&(i=e,o.splice(0,1));for(var a=0,s=o.length;a<s;a++){var u=o[a];i[u]||Object.defineProperty(i,u,{value:{},writable:!1,enumerable:!0,configurable:!0}),i=i[u]}}return i}function o(e,t,r){var o=n(e,t);return r&&i(o,r,t||"<ANONYMOUS>"),o}var a=e;a.Namespace||(a.Namespace=Object.create(Object.prototype));var s={uninitialized:1,working:2,initialized:3};Object.defineProperties(a.Namespace,{defineWithParent:{value:o,writable:!0,enumerable:!0,configurable:!0},define:{value:function(e,n){return o(t,e,n)},writable:!0,enumerable:!0,configurable:!0},_lazy:{value:function(e){var t,n,i=s.uninitialized;return{setName:function(e){t=e},get:function(){switch(i){case s.initialized:return n;case s.uninitialized:i=s.working;try{r("WinJS.Namespace._lazy:"+t+",StartTM"),n=e()}finally{r("WinJS.Namespace._lazy:"+t+",StopTM"),i=s.uninitialized}return e=null,i=s.initialized,n;case s.working:throw"Illegal: reentrancy on initialization";default:throw"Illegal"}},set:function(e){switch(i){case s.working:throw"Illegal: reentrancy on initialization";default:i=s.initialized,n=e}},enumerable:!0,configurable:!0}},writable:!0,enumerable:!0,configurable:!0},_moduleDefine:{value:function(e,r,o){var a=[e],s=null;return r&&(s=n(t,r),a.push(s)),i(a,o,r||"<ANONYMOUS>"),s},writable:!0,enumerable:!0,configurable:!0}})}(),function(){function t(e,t,r){return e=e||function(){},n.markSupportedForProcessing(e),t&&i(e.prototype,t),r&&i(e,r),e}e.Namespace.define("WinJS.Class",{define:t,derive:function(e,r,o,a){if(e){r=r||function(){};var s=e.prototype;return r.prototype=Object.create(s),n.markSupportedForProcessing(r),Object.defineProperty(r.prototype,"constructor",{value:r,writable:!0,configurable:!0,enumerable:!0}),o&&i(r.prototype,o),a&&i(r,a),r}return t(r,o,a)},mix:function(e){e=e||function(){};var t,n;for(t=1,n=arguments.length;t<n;t++)i(e.prototype,arguments[t]);return e}})}(),{Namespace:e.Namespace,Class:e.Class}}),t("WinJS/Core/_ErrorFromName",["WinJS/Core/_Base"],function(e){"use strict";var t=e.Class.derive(Error,function(e,t){this.name=e,this.message=t||e},{},{supportedForProcessing:!1});return e.Namespace.define("WinJS",{ErrorFromName:t}),t}),t("WinJS/Core/_Events",["exports","WinJS/Core/_Base"],function(e,t){"use strict";function n(e){var t="_on"+e+"state";return{get:function(){var e=this[t];return e&&e.userHandler},set:function(n){var r=this[t];n?(r||(r={wrapper:function(e){return r.userHandler(e)},userHandler:n},Object.defineProperty(this,t,{value:r,enumerable:!1,writable:!0,configurable:!0}),this.addEventListener(e,r.wrapper,!1)),r.userHandler=n):r&&(this.removeEventListener(e,r.wrapper,!1),this[t]=null)},enumerable:!0}}var r=t.Class.define(function(e,t,n){this.detail=t,this.target=n,this.timeStamp=Date.now(),this.type=e},{bubbles:{value:!1,writable:!1},cancelable:{value:!1,writable:!1},currentTarget:{get:function(){return this.target}},defaultPrevented:{get:function(){return this._preventDefaultCalled}},trusted:{value:!1,writable:!1},eventPhase:{value:0,writable:!1},target:null,timeStamp:null,type:null,preventDefault:function(){this._preventDefaultCalled=!0},stopImmediatePropagation:function(){this._stopImmediatePropagationCalled=!0},stopPropagation:function(){}},{supportedForProcessing:!1}),i={_listeners:null,addEventListener:function(e,t,n){n=n||!1,this._listeners=this._listeners||{};for(var r=this._listeners[e]=this._listeners[e]||[],i=0,o=r.length;i<o;i++){var a=r[i];if(a.useCapture===n&&a.listener===t)return}r.push({listener:t,useCapture:n})},dispatchEvent:function(e,t){var n=this._listeners&&this._listeners[e];if(n){for(var i=new r(e,t,this),o=0,a=(n=n.slice(0,n.length)).length;o<a&&!i._stopImmediatePropagationCalled;o++)n[o].listener(i);return i.defaultPrevented||!1}return!1},removeEventListener:function(e,t,n){n=n||!1;var r=this._listeners&&this._listeners[e];if(r)for(var i=0,o=r.length;i<o;i++){var a=r[i];if(a.listener===t&&a.useCapture===n){r.splice(i,1),0===r.length&&delete this._listeners[e];break}}}};t.Namespace._moduleDefine(e,"WinJS.Utilities",{_createEventProperty:n,createEventProperties:function(){for(var e={},t=0,r=arguments.length;t<r;t++){var i=arguments[t];e["on"+i]=n(i)}return e},eventMixin:i})}),t("WinJS/Core/_Trace",["WinJS/Core/_Global"],function(e){"use strict";function t(e){return e}return{_traceAsyncOperationStarting:e.Debug&&e.Debug.msTraceAsyncOperationStarting&&e.Debug.msTraceAsyncOperationStarting.bind(e.Debug)||t,_traceAsyncOperationCompleted:e.Debug&&e.Debug.msTraceAsyncOperationCompleted&&e.Debug.msTraceAsyncOperationCompleted.bind(e.Debug)||t,_traceAsyncCallbackStarting:e.Debug&&e.Debug.msTraceAsyncCallbackStarting&&e.Debug.msTraceAsyncCallbackStarting.bind(e.Debug)||t,_traceAsyncCallbackCompleted:e.Debug&&e.Debug.msTraceAsyncCallbackCompleted&&e.Debug.msTraceAsyncCallbackCompleted.bind(e.Debug)||t}}),t("WinJS/Promise/_StateMachine",["WinJS/Core/_Global","WinJS/Core/_BaseCoreUtils","WinJS/Core/_Base","WinJS/Core/_ErrorFromName","WinJS/Core/_Events","WinJS/Core/_Trace"],function(e,t,n,r,i,o){"use strict";function a(){}function s(e,t){var n;n=t&&"object"==typeof t&&"function"==typeof t.then?N:L,e._value=t,e._setState(n)}function u(e,t,n,r,i,o){return{exception:e,error:t,promise:n,handler:o,id:r,parent:i}}function c(e,t,n,r){var i=n._isException,o=n._errorId;return u(i?t:null,i?null:t,e,o,n,r)}function l(e,t,n){var r=n._isException,i=n._errorId;return b(e,i,r),u(r?t:null,r?null:t,e,i,n)}function f(e,t){var n=++U;return b(e,n),u(null,t,e,n)}function p(e,t){var n=++U;return b(e,n,!0),u(t,null,e,n)}function h(e,t,n,r){g(e,{c:t,e:n,p:r,asyncOpID:o._traceAsyncOperationStarting("WinJS.Promise.done")})}function _(e,t,n,r){e._value=t,m(e,t,n,r),e._setState(V)}function d(t,n){var r=t._value,i=t._listeners;if(i){t._listeners=null;var a,s;for(a=0,s=Array.isArray(i)?i.length:1;a<s;a++){var u=1===s?i:i[a],c=u.c,l=u.promise;if(o._traceAsyncOperationCompleted(u.asyncOpID,e.Debug&&e.Debug.MS_ASYNC_OP_STATUS_SUCCESS),l){o._traceAsyncCallbackStarting(u.asyncOpID);try{l._setCompleteValue(c?c(r):r)}catch(e){l._setExceptionValue(e)}finally{o._traceAsyncCallbackCompleted()}l._state!==N&&l._listeners&&n.push(l)}else G.prototype.done.call(t,c)}}}function v(t,n){var r=t._value,i=t._listeners;if(i){t._listeners=null;var a,s;for(a=0,s=Array.isArray(i)?i.length:1;a<s;a++){var u=1===s?i:i[a],l=u.e,f=u.promise,p=e.Debug&&(r&&r.name===j?e.Debug.MS_ASYNC_OP_STATUS_CANCELED:e.Debug.MS_ASYNC_OP_STATUS_ERROR);if(o._traceAsyncOperationCompleted(u.asyncOpID,p),f){var h=!1;try{l?(o._traceAsyncCallbackStarting(u.asyncOpID),h=!0,l.handlesOnError||m(f,r,c,t,l),f._setCompleteValue(l(r))):f._setChainedErrorValue(r,t)}catch(e){f._setExceptionValue(e)}finally{h&&o._traceAsyncCallbackCompleted()}f._state!==N&&f._listeners&&n.push(f)}else H.prototype.done.call(t,null,l)}}}function m(e,t,n,r,i){if(E._listeners[A]){if(t instanceof Error&&t.message===j)return;E.dispatchEvent(A,n(e,t,r,i))}}function y(e,t){var n=e._listeners;if(n){var r,i;for(r=0,i=Array.isArray(n)?n.length:1;r<i;r++){var o=1===i?n:n[r],a=o.p;if(a)try{a(t)}catch(e){}o.c||o.e||!o.promise||o.promise._progress(t)}}}function g(e,t){var n=e._listeners;n?(n=Array.isArray(n)?n:[n]).push(t):n=t,e._listeners=n}function b(e,t,n){e._isException=n||!1,e._errorId=t}function w(e,t,n,r){e._value=t,m(e,t,n,r),e._setState(M)}function S(e,t){var n;n=t&&"object"==typeof t&&"function"==typeof t.then?N:z,e._value=t,e._setState(n)}function C(e,t,n,r){var i=new R(e);return g(e,{promise:i,c:t,e:n,p:r,asyncOpID:o._traceAsyncOperationStarting("WinJS.Promise.then")}),i}function O(n){var r;return new Y(function(i){n?r=e.setTimeout(i,n):t._setImmediate(i)},function(){r&&e.clearTimeout(r)})}function P(e,t){var n=function(){e.cancel()};return e.then(function(){t.cancel()}),t.then(n,n),t}e.Debug&&(e.Debug.setNonUserCodeExceptions=!0);var E=new(n.Class.mix(n.Class.define(null,{},{supportedForProcessing:!1}),i.eventMixin));E._listeners={};var A="error",j="Canceled",x=!1,k={promise:1,thenPromise:2,errorPromise:4,exceptionPromise:8,completePromise:16};k.all=k.promise|k.thenPromise|k.errorPromise|k.exceptionPromise|k.completePromise;var W,D,N,T,I,J,L,z,V,M,U=1;W={name:"created",enter:function(e){e._setState(D)},cancel:a,done:a,then:a,_completed:a,_error:a,_notify:a,_progress:a,_setCompleteValue:a,_setErrorValue:a},D={name:"working",enter:a,cancel:function(e){e._setState(I)},done:h,then:C,_completed:s,_error:_,_notify:a,_progress:y,_setCompleteValue:S,_setErrorValue:w},N={name:"waiting",enter:function(e){var t=e._value;if(t instanceof R&&t._state!==M&&t._state!==z)g(t,{promise:e});else{var n=function(r){t._errorId?e._chainedError(r,t):(m(e,r,c,t,n),e._error(r))};n.handlesOnError=!0,t.then(e._completed.bind(e),n,e._progress.bind(e))}},cancel:function(e){e._setState(T)},done:h,then:C,_completed:s,_error:_,_notify:a,_progress:y,_setCompleteValue:S,_setErrorValue:w},T={name:"waiting_canceled",enter:function(e){e._setState(J);var t=e._value;t.cancel&&t.cancel()},cancel:a,done:h,then:C,_completed:s,_error:_,_notify:a,_progress:y,_setCompleteValue:S,_setErrorValue:w},I={name:"canceled",enter:function(e){e._setState(J),e._cancelAction()},cancel:a,done:h,then:C,_completed:s,_error:_,_notify:a,_progress:y,_setCompleteValue:S,_setErrorValue:w},J={name:"canceling",enter:function(e){var t=new Error(j);t.name=t.message,e._value=t,e._setState(V)},cancel:a,done:a,then:a,_completed:a,_error:a,_notify:a,_progress:a,_setCompleteValue:a,_setErrorValue:a},L={name:"complete_notify",enter:function(e){if(e.done=G.prototype.done,e.then=G.prototype.then,e._listeners)for(var t,n=[e];n.length;)(t=n.shift())._state._notify(t,n);e._setState(z)},cancel:a,done:null,then:null,_completed:a,_error:a,_notify:d,_progress:a,_setCompleteValue:a,_setErrorValue:a},z={name:"success",enter:function(e){e.done=G.prototype.done,e.then=G.prototype.then,e._cleanupAction()},cancel:a,done:null,then:null,_completed:a,_error:a,_notify:d,_progress:a,_setCompleteValue:a,_setErrorValue:a},V={name:"error_notify",enter:function(e){if(e.done=H.prototype.done,e.then=H.prototype.then,e._listeners)for(var t,n=[e];n.length;)(t=n.shift())._state._notify(t,n);e._setState(M)},cancel:a,done:null,then:null,_completed:a,_error:a,_notify:v,_progress:a,_setCompleteValue:a,_setErrorValue:a},M={name:"error",enter:function(e){e.done=H.prototype.done,e.then=H.prototype.then,e._cleanupAction()},cancel:a,done:null,then:null,_completed:a,_error:a,_notify:v,_progress:a,_setCompleteValue:a,_setErrorValue:a};var F,q=n.Class.define(null,{_listeners:null,_nextState:null,_state:null,_value:null,cancel:function(){this._state.cancel(this),this._run()},done:function(e,t,n){this._state.done(this,e,t,n)},then:function(e,t,n){return this._state.then(this,e,t,n)},_chainedError:function(e,t){var n=this._state._error(this,e,l,t);return this._run(),n},_completed:function(e){var t=this._state._completed(this,e);return this._run(),t},_error:function(e){var t=this._state._error(this,e,f);return this._run(),t},_progress:function(e){this._state._progress(this,e)},_setState:function(e){this._nextState=e},_setCompleteValue:function(e){this._state._setCompleteValue(this,e),this._run()},_setChainedErrorValue:function(e,t){var n=this._state._setErrorValue(this,e,l,t);return this._run(),n},_setExceptionValue:function(e){var t=this._state._setErrorValue(this,e,p);return this._run(),t},_run:function(){for(;this._nextState;)this._state=this._nextState,this._nextState=null,this._state.enter(this)}},{supportedForProcessing:!1}),R=n.Class.derive(q,function(e){x&&(!0===x||x&k.thenPromise)&&(this._stack=Y._getStack()),this._creator=e,this._setState(W),this._run()},{_creator:null,_cancelAction:function(){this._creator&&this._creator.cancel()},_cleanupAction:function(){this._creator=null}},{supportedForProcessing:!1}),H=n.Class.define(function(e){x&&(!0===x||x&k.errorPromise)&&(this._stack=Y._getStack()),this._value=e,m(this,e,f)},{cancel:function(){},done:function(e,t){var n=this._value;if(t)try{t.handlesOnError||m(null,n,c,this,t);var r=t(n);return void(r&&"object"==typeof r&&"function"==typeof r.done&&r.done())}catch(e){n=e}n instanceof Error&&n.message===j||Y._doneHandler(n)},then:function(e,t){if(!t)return this;var n,r=this._value;try{t.handlesOnError||m(null,r,c,this,t),n=new G(t(r))}catch(e){n=e===r?this:new B(e)}return n}},{supportedForProcessing:!1}),B=n.Class.derive(H,function(e){x&&(!0===x||x&k.exceptionPromise)&&(this._stack=Y._getStack()),this._value=e,m(this,e,p)},{},{supportedForProcessing:!1}),G=n.Class.define(function(e){if(x&&(!0===x||x&k.completePromise)&&(this._stack=Y._getStack()),e&&"object"==typeof e&&"function"==typeof e.then){var t=new R(null);return t._setCompleteValue(e),t}this._value=e},{cancel:function(){},done:function(e){if(e)try{var t=e(this._value);t&&"object"==typeof t&&"function"==typeof t.done&&t.done()}catch(e){Y._doneHandler(e)}},then:function(e){try{var t=e?e(this._value):this._value;return t===this._value?this:new G(t)}catch(e){return new B(e)}}},{supportedForProcessing:!1}),Y=n.Class.derive(q,function(e,t){x&&(!0===x||x&k.promise)&&(this._stack=Y._getStack()),this._oncancel=t,this._setState(W),this._run();try{e(this._completed.bind(this),this._error.bind(this),this._progress.bind(this))}catch(e){this._setExceptionValue(e)}},{_oncancel:null,_cancelAction:function(){try{if(!this._oncancel)throw new Error("Promise did not implement oncancel");this._oncancel()}catch(e){e.message,e.stack;E.dispatchEvent("error",e)}},_cleanupAction:function(){this._oncancel=null}},{addEventListener:function(e,t,n){E.addEventListener(e,t,n)},any:function(e){return new Y(function(t,n){var r=Object.keys(e);0===r.length&&t();var i=0;r.forEach(function(o){Y.as(e[o]).then(function(){t({key:o,value:e[o]})},function(a){a instanceof Error&&a.name===j?++i===r.length&&t(Y.cancel):n({key:o,value:e[o]})})})},function(){Object.keys(e).forEach(function(t){var n=Y.as(e[t]);"function"==typeof n.cancel&&n.cancel()})})},as:function(e){return e&&"object"==typeof e&&"function"==typeof e.then?e:new G(e)},cancel:{get:function(){return F=F||new H(new r(j))}},dispatchEvent:function(e,t){return E.dispatchEvent(e,t)},is:function(e){return e&&"object"==typeof e&&"function"==typeof e.then},join:function(e){return new Y(function(t,n,r){var i=Object.keys(e),o=Array.isArray(e)?[]:{},a=Array.isArray(e)?[]:{},s=0,u=i.length,c=function(e){if(0==--u){var s=Object.keys(o).length;if(0===s)t(a);else{var c=0;i.forEach(function(e){var t=o[e];t instanceof Error&&t.name===j&&c++}),c===s?t(Y.cancel):n(o)}}else r({Key:e,Done:!0})};i.forEach(function(t){var n=e[t];void 0===n?s++:Y.then(n,function(e){a[t]=e,c(t)},function(e){o[t]=e,c(t)})}),0!==(u-=s)||t(a)},function(){Object.keys(e).forEach(function(t){var n=Y.as(e[t]);"function"==typeof n.cancel&&n.cancel()})})},removeEventListener:function(e,t,n){E.removeEventListener(e,t,n)},supportedForProcessing:!1,then:function(e,t,n,r){return Y.as(e).then(t,n,r)},thenEach:function(e,t,n,r){var i=Array.isArray(e)?[]:{};return Object.keys(e).forEach(function(o){i[o]=Y.as(e[o]).then(t,n,r)}),Y.join(i)},timeout:function(e,t){var n=O(e);return t?P(n,t):n},wrap:function(e){return new G(e)},wrapError:function(e){return new H(e)},_veryExpensiveTagWithStack:{get:function(){return x},set:function(e){x=e}},_veryExpensiveTagWithStack_tag:k,_getStack:function(){if(e.Debug&&e.Debug.debuggerEnabled)try{throw new Error}catch(e){return e.stack}},_cancelBlocker:function(e,t){if(!Y.is(e))return Y.wrap(e);var n,r,i=new Y(function(e,t){n=e,r=t},function(){n=null,r=null,t&&t()});return e.then(function(e){n&&n(e)},function(e){r&&r(e)}),i}});return Object.defineProperties(Y,i.createEventProperties(A)),Y._doneHandler=function(e){t._setImmediate(function(){throw e})},{PromiseStateMachine:q,Promise:Y,state_created:W}}),t("WinJS/Promise",["WinJS/Core/_Base","WinJS/Promise/_StateMachine"],function(e,t){"use strict";return e.Namespace.define("WinJS",{Promise:t.Promise}),t.Promise});var n=e["WinJS/Core/_WinJS"];"undefined"==typeof exports&&"function"==typeof define&&define.amd?define("vs/base/common/winjs.base.raw",n):module.exports=n,"undefined"!=typeof process&&"function"==typeof process.nextTick&&(e["WinJS/Core/_BaseCoreUtils"]._setImmediate=function(e){return process.nextTick(e)})}(),define(e[3],t([16]),function(e){"use strict";return{Promise:e.Promise,TPromise:e.Promise,PPromise:e.Promise}}),define(e[7],t([20,17]),function(e,t){return e.create("vs/platform/environment/node/argv",t)}),define(e[9],t([1,0,13,14,15,5,7]),function(e,t,n,r,i,o,a){"use strict";function s(e){return e.goto&&e._.forEach(function(e){return i(/^(\w:)?[^:]+(:\d*){0,2}$/.test(e),a.localize(0,null))}),e}function u(e){var t=o.firstIndex(e,function(e){return!/^-/.test(e)});if(t>-1)return e.slice(0,t).concat(e.slice(t+1))}function c(e){return r(e,p)}function l(e,t){var n=Object.keys(e),r=Math.max.apply(null,n.map(function(e){return e.length}))+2+1;if(t-r<25)return n.reduce(function(t,n){return t.concat(["  "+n,"      "+e[n]])},[]).join("\n");var i=t-r-1,o="";return n.forEach(function(t){var n=f(e[t],i),a=" ".repeat(r-t.length-2);o.length>0&&(o+="\n"),o+="  "+t+a+n[0];for(var s=1;s<n.length;s++)o+="\n"+" ".repeat(r)+n[s]}),o}function f(e,t){for(var n=[];e.length;){var r=e.length<t?e.length:e.lastIndexOf(" ",t),i=e.slice(0,r).trim();e=e.slice(r),n.push(i)}return n}Object.defineProperty(t,"__esModule",{value:!0});var p={string:["locale","user-data-dir","extensions-dir","extensionDevelopmentPath","extensionTestsPath","install-extension","uninstall-extension","debugBrkPluginHost","debugPluginHost","open-url","enable-proposed-api"],boolean:["help","version","wait","diff","goto","new-window","unity-launch","reuse-window","performance","prof-startup","verbose","logExtensionHostCommunication","disable-extensions","list-extensions","show-versions","nolazy","skip-getting-started"],alias:{help:"h",version:"v",wait:"w",diff:"d",goto:"g","new-window":"n","reuse-window":"r",performance:"p","disable-extensions":"disableExtensions","extensions-dir":"extensionHomePath"}};t.parseMainProcessArgv=function(e){var t=e.slice(1);return process.env.VSCODE_DEV&&(t=u(t)),s(c(t))},t.parseCLIProcessArgv=function(e){var t=e.slice(2);return process.env.VSCODE_DEV&&(t=u(t)),s(c(t))},t.parseArgs=c,t.optionsHelp={"-d, --diff":a.localize(1,null),"-g, --goto":a.localize(2,null),"--locale <locale>":a.localize(3,null),"-n, --new-window":a.localize(4,null),"-p, --performance":a.localize(5,null),"--prof-startup":a.localize(6,null),"-r, --reuse-window":a.localize(7,null),"--user-data-dir <dir>":a.localize(8,null),"--verbose":a.localize(9,null),"-w, --wait":a.localize(10,null),"--extensions-dir <dir>":a.localize(11,null),"--list-extensions":a.localize(12,null),"--show-versions":a.localize(13,null),"--install-extension <ext>":a.localize(14,null),"--uninstall-extension <ext>":a.localize(15,null),"--enable-proposed-api <ext>":a.localize(16,null),"--disable-extensions":a.localize(17,null),"--disable-gpu":a.localize(18,null),"-v, --version":a.localize(19,null),"-h, --help":a.localize(20,null)},t.formatOptions=l,t.buildHelpMessage=function(e,r,i){var o=process.stdout.isTTY?process.stdout.columns:80,s=r+("win32"===n.platform()?".exe":"");return e+" "+i+"\n\n"+a.localize(21,null)+": "+s+" ["+a.localize(22,null)+"] ["+a.localize(23,null)+"...]\n\n"+a.localize(24,null)+":\n"+l(t.optionsHelp,o)}}),define(e[10],t([1,0,11,2]),function(e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n.dirname(r.default.parse(e.toUrl("")).fsPath),o=n.join(i,"package.json");t.default=e.__$__nodeRequire(o)}),define(e[12],t([1,0,11,2]),function(e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n.dirname(r.default.parse(e.toUrl("")).fsPath),o=n.join(i,"product.json"),a=e.__$__nodeRequire(o);process.env.VSCODE_DEV&&(a.nameShort+=" Dev",a.nameLong+=" Dev",a.dataFolderName+="-dev"),t.default=a}),define(e[19],t([1,0,18,3,4,9,12,10]),function(e,t,n,r,i,o,a,s){"use strict";function u(e){return e["list-extensions"]||!!e["install-extension"]||!!e["uninstall-extension"]}function c(t){var c;try{c=o.parseCLIProcessArgv(t)}catch(e){return console.error(e.message),r.TPromise.as(null)}if(c.help)console.log(o.buildHelpMessage(a.default.nameLong,a.default.applicationName,s.default.version));else if(c.version)console.log(s.default.version+"\n"+a.default.commit);else{if(u(c))return new r.TPromise(function(t){return e(["vs/code/node/cliProcessMain"],t)}).then(function(e){return e.main(c)});var l=i.assign({},process.env,{VSCODE_CLI:"1",ELECTRON_NO_ATTACH_CONSOLE:"1"});delete l.ELECTRON_RUN_AS_NODE,c.verbose&&(l.ELECTRON_ENABLE_LOGGING="1");var f={detached:!0,env:l};c.verbose||(f.stdio="ignore");var p=n.spawn(process.execPath,t.slice(2),f);if(c.verbose&&(p.stdout.on("data",function(e){return console.log(e.toString("utf8").trim())}),p.stderr.on("data",function(e){return console.log(e.toString("utf8").trim())})),c.wait||c.verbose)return new r.TPromise(function(e){return p.once("exit",function(){return e(null)})})}return r.TPromise.as(null)}function l(e){setTimeout(function(){return process.exit(e)},0)}Object.defineProperty(t,"__esModule",{value:!0}),t.main=c,c(process.argv).then(function(){return l(0)}).then(null,function(e){console.error(e.stack?e.stack:e),l(1)})})}).call(this);
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/2648980a697a4c8fb5777dcfb2ab110cec8a2f58/core/vs/code/node/cli.js.map
