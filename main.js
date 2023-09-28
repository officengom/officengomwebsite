(()=>{"use strict";var t,e,n,i,r,o,a,s,c,d,l,p,f,u,g={958:(t,e,n)=>{n.d(e,{Z:()=>s});var i=n(81),r=n.n(i),o=n(645),a=n.n(o)()(r());a.push([t.id,"html,body{margin:0;padding:0;width:100vw;height:100vh;margin:0;display:flex}body{overflow-x:hidden}#container{width:100vw;height:500vh;background-color:#a4c2f4;position:relative}#bubble{right:0;top:0;width:40vw;height:40vw;border-radius:50%;background:radial-gradient(circle, rgb(164, 194, 244) 0%, rgb(110, 151, 220) 100%);position:absolute}#canvas{width:100%;height:100%;position:absolute}#overlay{position:absolute}a{color:#fff;text-decoration:none}#menu{display:inline-block;position:sticky;height:5vh;width:100vw;padding-left:2%;padding-right:2%;padding-top:2%;z-index:5}#title{display:inline-block;width:5vw;padding-right:2vw}#center{position:absolute;padding-left:10%;padding-top:5%;padding-right:15%}#intro{padding-top:0%;width:45%;color:#fff;font-size:40px;font-weight:200;font-family:Arial,Helvetica,sans-serif}#descr{padding-top:15%;text-align:center;padding-left:20% !important;padding-right:20% !important;font-size:20px;padding-right:30%;font-family:Arial,Helvetica,sans-serif;color:#fff}#txt{text-align:left}#consultancy{padding-top:10%;width:50vw;text-align:right;font-family:Arial,Helvetica,sans-serif;color:#fff}#middle{display:inline-block;width:100vw;align-items:center;text-align:center}.head{margin:0 auto;display:inline-block;padding-left:5%}#about{margin:0 auto;display:inline-block;padding-left:5%}#contact{margin:0 auto;display:inline-block;padding-left:5%}h1{text-transform:uppercase;font-size:small;font-family:Arial,Helvetica,sans-serif;color:#fff}h2{font-size:100px;font-family:Arial,Helvetica,sans-serif;color:#fff}@media only screen and (max-width: 600px){#center{position:absolute;padding-left:5%;padding-top:8%;padding-right:3%}h2{font-size:60px}#intro{padding-top:0;width:80%;color:#fff;font-size:20px}#descr{padding-top:15%;text-align:center;padding-left:5% !important;padding-right:5% !important;font-size:16px;font-family:Arial,Helvetica,sans-serif;color:#fff}#consultancy{padding-top:10%;margin:0;width:100%;font-size:14px;font-family:Arial,Helvetica,sans-serif;color:#fff}}@keyframes pulse{0%{opacity:100%}70%{opacity:70%}100%{opacity:100%}}body::-webkit-scrollbar{width:12px}body::-webkit-scrollbar-track{background:none}body::-webkit-scrollbar-thumb{background-color:rgba(255,255,255,.61);border-radius:20px;border:none}",""]);const s=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,r,o){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(i)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);i&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var o={},a=[],s=0;s<t.length;s++){var c=t[s],d=i.base?c[0]+i.base:c[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var f=n(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)e[f].references++,e[f].updater(u);else{var g=r(u,i);i.byIndex=s,e.splice(s,0,{identifier:p,updater:g,references:1})}a.push(p)}return a}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var o=i(t=t||[],r=r||{});return function(t){t=t||[];for(var a=0;a<o.length;a++){var s=n(o[a]);e[s].references--}for(var c=i(t,r),d=0;d<o.length;d++){var l=n(o[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=c}}},569:t=>{var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,r&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},h={};function v(t){var e=h[t];if(void 0!==e)return e.exports;var n=h[t]={id:t,exports:{}};return g[t](n,n.exports,v),n.exports}v.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return v.d(e,{a:e}),e},v.d=(t,e)=>{for(var n in e)v.o(e,n)&&!v.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},v.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),v.nc=void 0,t=v(379),e=v.n(t),n=v(795),i=v.n(n),r=v(569),o=v.n(r),a=v(565),s=v.n(a),c=v(216),d=v.n(c),l=v(589),p=v.n(l),f=v(958),(u={}).styleTagTransform=p(),u.setAttributes=s(),u.insert=o().bind(null,"head"),u.domAPI=i(),u.insertStyleElement=d(),e()(f.Z,u),f.Z&&f.Z.locals&&f.Z.locals})();