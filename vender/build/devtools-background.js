(function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=128)})({128:function(e,n){var t,o=!1,r=!1,u=!1,i=0;chrome.devtools.network.onNavigated.addListener(c);var a=setInterval(c,1e3);function c(){u||i++>10||(o=!1,r=!1,chrome.devtools.inspectedWindow.eval("!!(window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue)",function(e){e&&!u&&(clearInterval(a),u=!0,chrome.devtools.panels.create("Vue","icons/128.png","devtools.html",e=>{e.onShown.addListener(v),e.onHidden.addListener(p)}))}))}function l(e){var n=e.id;if("vue-inspect-instance"===n){var o="window.__VUE_DEVTOOLS_CONTEXT_MENU_HAS_TARGET__";chrome.devtools.inspectedWindow.eval(o,function(e,n){n&&console.log(n),"undefined"!==typeof e&&e?d(()=>{chrome.runtime.sendMessage("vue-get-context-menu-target")},"Open Vue devtools to see component details"):(t=null,_("No Vue component was found","warn"))})}}function d(e,n=null){u&&o&&r?e():(t=e,n&&_(n))}function s(){t&&t(),t=null}function f(){s(),o=!0}function v(){chrome.runtime.sendMessage("vue-panel-shown"),r=!0,o&&s()}function p(){chrome.runtime.sendMessage("vue-panel-hidden"),r=!1}function _(e,n="normal"){var t=`(function() {\n    __VUE_DEVTOOLS_TOAST__(\`${e}\`, '${n}');\n  })()`;chrome.devtools.inspectedWindow.eval(t,function(e,n){n&&console.log(n)})}c(),chrome.runtime.onMessage.addListener(e=>{"vue-panel-load"===e?f():e.vueToast?_(e.vueToast.message,e.vueToast.type):e.vueContextMenu&&l(e.vueContextMenu)})}});