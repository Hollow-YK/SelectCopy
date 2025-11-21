// ==UserScript==
// @name                 选择复制
// @name:zh-CN           选择复制
// @name:en              Select & Copy
// @namespace            https://github.com/Hollow-YK
// @version              1.0.0
// @author               域空Hollow
// @description          允许你选择，允许你复制。支持通过CSS允许选择、通过影响监听器等方案实现允许选择和复制。
// @description:zh-CN    允许你选择，允许你复制。支持通过CSS允许选择、通过影响监听器等方案实现允许选择和复制。
// @description:en       Allow you to select and copy. Supports allowing selection through CSS and allowing selection and copying through affecting listeners.
// @license              AGPL-3.0-only
// @homepage             https://github.com/Hollow-YK/SelectCopy/
// @homepageURL          https://github.com/Hollow-YK/SelectCopy/
// @support              https://github.com/Hollow-YK/SelectCopy/issues
// @supportURL           https://github.com/Hollow-YK/SelectCopy/issues
// @updateURL            https://raw.githubusercontent.com/Hollow-YK/SelectCopy/main/SelectCopy.min.user.js
// @downloadURL          https://raw.githubusercontent.com/Hollow-YK/SelectCopy/main/SelectCopy.min.user.js
// @connect              *://*/*
// @grant                GM_registerMenuCommand
// @grant                GM_unregisterMenuCommand
// @compatible	         Chrome
// @compatible	         Edge
// @compatible	         Firefox
// @compatible	         Safari
// @compatible	         Opera
// ==/UserScript==
/**
 * Minified by jsDelivr using Terser v5.39.0.
 * Original file: /gh/Hollow-YK/SelectCopy@main/SelectCopy_jsDelivr.user.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
// @license              AGPL-3.0-only
!function(){"use strict";let t={allowSelect_CSS:null,allowSelect:null,allowCopy:null,forceAllowSelect:null,forceAllowCopy:null},e=[],n=[];function o(){e.forEach((t=>{document.head.contains(t)&&document.head.removeChild(t)})),e=[]}function a(){n.length>0&&(n.forEach((t=>{t.target[t.method]=t.original})),n=[])}function l(){o(),a();const t=document.createElement("style");t.textContent="\n            * {\n                user-select: auto !important;\n                -webkit-user-select: auto !important;\n                -moz-user-select: auto !important;\n                -ms-user-select: auto !important;\n            }\n        ",document.head.appendChild(t),e.push(t),alert("已启用CSS允许选择")}function r(){o(),a();const t=document.createElement("style");t.textContent="\n            * {\n                user-select: auto !important;\n                -webkit-user-select: auto !important;\n                -moz-user-select: auto !important; \n                -ms-user-select: auto !important;\n            }\n        ",document.head.appendChild(t),e.push(t),document.addEventListener("selectstart",(function(t){t.stopPropagation()}),!0),document.addEventListener("mousedown",(function(t){t.stopPropagation()}),!0),alert("已启用允许选择")}function u(){o(),a();const t=document.createElement("style");t.textContent="\n            * {\n                user-select: auto !important;\n                -webkit-user-select: auto !important;\n                -moz-user-select: auto !important;\n                -ms-user-select: auto !important;\n            }\n        ",document.head.appendChild(t),e.push(t),document.addEventListener("copy",(function(t){t.stopPropagation()}),!0),document.addEventListener("cut",(function(t){t.stopPropagation()}),!0),alert("已启用允许复制")}function s(){o(),a();const t=document.createElement("style");t.textContent="\n            * {\n                user-select: auto !important;\n                -webkit-user-select: auto !important;\n                -moz-user-select: auto !important;\n                -ms-user-select: auto !important;\n                pointer-events: auto !important;\n                -webkit-touch-callout: default !important;\n            }\n            body {\n                all: initial !important;\n            }\n            body * {\n                all: unset !important;\n                display: block !important;\n            }\n        ",document.head.appendChild(t),e.push(t),i(["selectstart","mousedown","mouseup","dragstart"]),alert("已启用强制允许选择，可能会影响页面样式与功能。")}function c(){o(),a();const t=document.createElement("style");t.textContent="\n            * {\n                user-select: auto !important;\n                -webkit-user-select: auto !important;\n                -moz-user-select: auto !important;\n                -ms-user-select: auto !important;\n                pointer-events: auto !important;\n                -webkit-touch-callout: default !important;\n            }\n            body {\n                all: initial !important;\n            }\n            body * {\n                all: unset !important;\n                display: block !important;\n            }\n        ",document.head.appendChild(t),e.push(t),i(["copy","cut","contextmenu"]),alert("已启用强制复制模式，可能会影响页面样式与功能。")}function i(t){const e=EventTarget.prototype.addEventListener;n.push({target:EventTarget.prototype,method:"addEventListener",original:e}),EventTarget.prototype.addEventListener=function(n,o,a){t.includes(n)?console.log("Blocked event listener for:",n):e.call(this,n,o,a)}}t.allowSelect_CSS=GM_registerMenuCommand("CSS允许选择",l),t.allowSelect=GM_registerMenuCommand("允许选择",r),t.allowCopy=GM_registerMenuCommand("允许复制",u),t.forceAllowSelect=GM_registerMenuCommand("强制允许选择",s),t.forceAllowCopy=GM_registerMenuCommand("强制允许复制",c)}();
//# sourceMappingURL=/sm/9b940a1e015ed86ff15f577b93a17b57eaa7b5847ef7cf11f89e79eefda5319b.map