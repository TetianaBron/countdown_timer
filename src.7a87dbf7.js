parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");const t={days:document.querySelector('span[data-value="days"]'),hours:document.querySelector('span[data-value="hours"]'),mins:document.querySelector('span[data-value="mins"]'),secs:document.querySelector('span[data-value="secs"]')};class e{constructor({targetDate:t,onTick:e}){this.intervalId=null,this.targetDate=t,this.onTick=e,this.init()}init(){const t=this.getTimeComponents(0);this.onTick(t)}start(){this.intervalId=setInterval(()=>{const t=Date.now(),e=this.targetDate-t,s=this.getTimeComponents(e);s.days<1&&s.hours<1&&s.mins<1&&s.secs<1?clearInterval(this.intervalId):this.onTick(s)},1e3)}getTimeComponents(t){return{days:this.pad(Math.floor(t/864e5)),hours:this.pad(Math.floor(t%864e5/36e5)),mins:this.pad(Math.floor(t%36e5/6e4)),secs:this.pad(Math.floor(t%6e4/1e3))}}pad(t){return String(t).padStart(2,"0")}}const s=new e({selector:"#timer-1",targetDate:new Date("Jan 01, 2022"),onTick:n});function n({days:e,hours:s,mins:n,secs:a}){t.days.textContent=`${e}`,t.hours.textContent=`${s}`,t.mins.textContent=`${n}`,t.secs.textContent=`${a}`}s.start();
},{"./sass/main.scss":"clu1"}]},{},["Focm"], null)
//# sourceMappingURL=/countdown_timer/src.7a87dbf7.js.map