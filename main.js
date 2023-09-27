(()=>{"use strict";var t={958:(t,e,i)=>{i.d(e,{Z:()=>s});var n=i(81),o=i.n(n),r=i(645),a=i.n(r)()(o());a.push([t.id,'html,body{margin:0;padding:0;width:100vw;height:100vh;margin:0;display:flex}body{overflow-x:hidden}.light-theme{color:pink}.dark-theme{color:#000}.dark-theme .img{-webkit-filter:invert(1);filter:invert(1)}#threescene{position:absolute;top:0;left:0;outline:none;z-index:-1}#dtscene{display:flex;position:absolute;width:100vw;height:100vh;top:0;left:0;z-index:1;align-items:center;justify-content:center;vertical-align:middle}#promptsleft{right:0;bottom:0;position:absolute;width:200px;height:20px;text-align:right;display:flex;padding:5%;text-transform:uppercase;font-family:Verdana,Geneva,Tahoma,sans-serif;font-size:12px;z-index:3}#promptsright{left:0;bottom:0;position:absolute;width:200px;height:20px;text-align:right;display:flex;padding:5%;text-transform:uppercase;font-family:Verdana,Geneva,Tahoma,sans-serif;font-size:12px;z-index:3}#promptsbottom{bottom:0;width:100vw;position:fixed;text-align:center;text-transform:uppercase;font-weight:bold;font-family:"Trebuchet MS","Lucida Sans Unicode","Lucida Grande","Lucida Sans",Arial,sans-serif;font-size:12px;z-index:3}#promptsbottom #btxt{bottom:0 !important}#promptscenter{display:flex;flex-direction:column;position:absolute;width:100vw;height:100vh;align-items:center;text-align:center;bottom:0 !important;font-family:Verdana,Geneva,Tahoma,sans-serif;text-transform:uppercase;font-size:8px;vertical-align:middle}.container{height:100vh}section{height:150vh}h1{text-transform:uppercase;font-size:small;font-family:Arial,Helvetica,sans-serif}#ui{display:flex;flex-direction:row;position:absolute;width:inherit;height:inherit;top:0;left:0;text-align:center;align-items:center;justify-content:center;margin:auto;padding-top:5%;z-index:1}#ui #logo{min-width:50px;width:5%;padding-bottom:10%}#ui p{font-size:100;animation:pulse 1s infinite}#navigation{display:flex;flex-direction:row;position:fixed;width:inherit;height:inherit;color:#fff;z-index:2}#navigation .m{display:flex;flex-direction:column !important;width:3%;height:100%}#navigation #controls{height:100%;padding-right:20px;padding-left:20px}#navigation #dropdown{top:0;left:0;position:absolute;padding:2vw;align-items:left;color:#000}#navigation #menu{top:0;right:0;position:absolute;padding:2vw;padding-right:4vw !important;display:flex;flex-direction:row !important}#navigation .circle{height:2px;width:2px;padding:2%;background-color:#fff;border-radius:50%;z-index:-2}.circle:hover{width:5px}.btn-toggle{background-color:pink;width:5px}.btn-toggle:hover{background-color:blue}.button{padding-top:5vh;visibility:hidden}@media only screen and (max-width: 600px){body{background-color:#add8e6}}@keyframes pulse{0%{opacity:100%}70%{opacity:70%}100%{opacity:100%}}@media only screen and (max-width: 600px){#ui{display:flex;flex-direction:column}#typebox{font-size:9px}}body::-webkit-scrollbar{width:12px}body::-webkit-scrollbar-track{background:none}body::-webkit-scrollbar-thumb{background-color:rgba(255,255,255,.61);border-radius:20px;border:none}',""]);const s=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i="",n=void 0!==e[5];return e[4]&&(i+="@supports (".concat(e[4],") {")),e[2]&&(i+="@media ".concat(e[2]," {")),n&&(i+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),i+=t(e),n&&(i+="}"),e[2]&&(i+="}"),e[4]&&(i+="}"),i})).join("")},e.i=function(t,i,n,o,r){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(n)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(a[d]=!0)}for(var l=0;l<t.length;l++){var c=[].concat(t[l]);n&&a[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),i&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=i):c[2]=i),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),e.push(c))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function i(t){for(var i=-1,n=0;n<e.length;n++)if(e[n].identifier===t){i=n;break}return i}function n(t,n){for(var r={},a=[],s=0;s<t.length;s++){var d=t[s],l=n.base?d[0]+n.base:d[0],c=r[l]||0,h="".concat(l," ").concat(c);r[l]=c+1;var p=i(h),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var f=o(u,n);n.byIndex=s,e.splice(s,0,{identifier:h,updater:f,references:1})}a.push(h)}return a}function o(t,e){var i=e.domAPI(e);return i.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;i.update(t=e)}else i.remove()}}t.exports=function(t,o){var r=n(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<r.length;a++){var s=i(r[a]);e[s].references--}for(var d=n(t,o),l=0;l<r.length;l++){var c=i(r[l]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}r=d}}},569:t=>{var e={};t.exports=function(t,i){var n=function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(i)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,i)=>{t.exports=function(t){var e=i.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(i){!function(t,e,i){var n="";i.supports&&(n+="@supports (".concat(i.supports,") {")),i.media&&(n+="@media ".concat(i.media," {"));var o=void 0!==i.layer;o&&(n+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),n+=i.css,o&&(n+="}"),i.media&&(n+="}"),i.supports&&(n+="}");var r=i.sourceMap;r&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,i)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function i(n){var o=e[n];if(void 0!==o)return o.exports;var r=e[n]={id:n,exports:{}};return t[n](r,r.exports,i),r.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.nc=void 0,(()=>{var t=i(379),e=i.n(t),n=i(795),o=i.n(n),r=i(569),a=i.n(r),s=i(565),d=i.n(s),l=i(216),c=i.n(l),h=i(589),p=i.n(h),u=i(958),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=c(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;const g=document.getElementById("bkg");window.addEventListener("load",(t=>{console.log("page has loaded"),function(t){console.log("text animations: executing script");const e=document.getElementById("dtscene"),i=e.getContext("2d");e.width=window.innerWidth,e.height=window.innerHeight;let n=[],o={x:null,y:null,radius:70};window.addEventListener("mousemove",(function(t){o.x=t.x+e.clientLeft/2,o.y=t.y+e.clientTop/2})),console.log(t),i.drawImage(t,0,0),function(){let r=t.width,a=t.height;const s=i.getImageData(0,0,r,a);i.clearRect(0,0,e.width,e.height);class d{constructor(i,n,o,r){this.x=i+e.width/2-2*t.width,this.y=n+e.height/2-2*t.height,this.color="rgba(0, 0, 0, 0.56)",this.size=.7,this.baseX=i+e.width/2-2*t.width,this.baseY=n+e.height/2-2*t.height,this.density=20*Math.random()+2}draw(){i.beginPath(),i.arc(this.x,this.y,this.size,0,2*Math.PI),i.closePath(),i.fill()}update(){let t=o.x-this.x,e=o.y-this.y,i=Math.sqrt(t*t+e*e),n=t/i,r=e/i,a=1.2*o.radius,s=(a-i)/a*1.1,d=n*s*this.density,l=r*s*this.density;if(i<o.radius)this.x-=d,this.y-=l;else{if(this.x!==this.baseX){let t=this.x-this.baseX;this.x-=t/10}if(this.y!==this.baseY){let t=this.y-this.baseY;this.y-=t/10}}this.draw()}}function l(){n=[];for(let t=0,e=s.height;t<e;t++)for(let e=0,i=s.width;e<i;e++)if(s.data[4*t*s.width+4*e+3]>128){let i=e,o=t,r="rgb("+s.data[4*t*s.width+4*e]+","+s.data[4*t*s.width+4*e+1]+","+s.data[4*t*s.width+4*e+2]+")";n.push(new d(4*i,4*o,r))}}l(),function t(){i.clearRect(0,0,e.width,e.height);for(let t=0;t<n.length;t++)n[t].draw(),n[t].update();!function(){for(let t=0;t<n.length;t++)for(let e=t;e<n.length;e++){let o=n[t].x-n[e].x,r=n[t].y-n[e].y;Math.sqrt(o*o+r*r)<10&&(i.strokeStyle="rgba(0, 0, 0, 0.56)",i.lineWidth=.2,i.beginPath(),i.moveTo(n[t].x,n[t].y),i.lineTo(n[e].x,n[e].y),i.stroke())}}(),requestAnimationFrame(t)}(),window.addEventListener("resize",(function(){e.width=innerWidth,e.height=innerHeight,l()}))}()}(g)}))})()})();