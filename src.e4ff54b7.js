parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"OQMG":[function(require,module,exports) {
module.exports="/countdown_timer/sound.d67dd951.mp3";
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");const t=require("./sound/sound.mp3"),e={datetime:document.querySelector("#datetime"),days:document.querySelector('span[data-value="days"]'),hours:document.querySelector('span[data-value="hours"]'),mins:document.querySelector('span[data-value="mins"]'),secs:document.querySelector('span[data-value="secs"]'),timeIsOver:document.querySelector(".timeIsOver")};function a(){let t=new Date,e=t.getDate(),a=t.getMonth()+1;const o=t.getFullYear();let s=t.getMinutes(),i=t.getHours();return e<10&&(e="0"+e),a<10&&(a="0"+a),i<10&&(i="0"+i),s<10&&(s="0"+s),t=o+"-"+a+"-"+e+"T"+i+":"+s}e.datetime.setAttribute("min",a());class o{constructor({audio:t,onTick:e,onTimeIsOver:a,removeStringTimeIsOver:o,setItemtoLocalStorage:s,getItemFromLocalStorage:i,clearLocalStorage:r,playAudio:n,stopAudio:u}){this.intervalId=null,this.targetDate=null,this.audio=t,this.onTick=e,this.onTimeIsOver=a,this.removeStringTimeIsOver=o,this.setItemtoLocalStorage=s,this.getItemFromLocalStorage=i,this.clearLocalStorage=r,this.playAudio=n,this.stopAudio=u,this.init()}get data(){return this.targetDate}set data(t){this.targetDate=t}init(){const t=this.getTimeComponents(0);this.onTick(t)}start(){this.stopAudio(),this.removeStringTimeIsOver(),this.setItemtoLocalStorage(),this.intervalId=setInterval(()=>{const t=Date.now()+72e5,e=this.targetDate-t,a=this.getTimeComponents(e);a.days<1&&a.hours<1&&a.mins<1&&a.secs<1?(clearInterval(this.intervalId),this.init(),this.onTimeIsOver(),this.targetDate>t&&(this.audio.muted=!1,this.audio.currentTime=0,this.playAudio())):this.onTick(a)},1e3)}stop(){clearInterval(this.intervalId),this.init(),this.clearLocalStorage(),this.stopAudio()}getTimeComponents(t){return{days:this.pad(Math.floor(t/864e5)),hours:this.pad(Math.floor(t%864e5/36e5)),mins:this.pad(Math.floor(t%36e5/6e4)),secs:this.pad(Math.floor(t%6e4/1e3))}}pad(t){return String(t).padStart(2,"0")}}const s=new o({selector:"#timer-1",onTick:n,audio:new Audio(t),onTimeIsOver:u,removeStringTimeIsOver:c,setItemtoLocalStorage:m,getItemFromLocalStorage:l,clearLocalStorage:d,playAudio:g,stopAudio:h});function i(t){t.target.value?(s.data=t.target.valueAsNumber,s.start()):(s.data=null,s.stop(),s.removeStringTimeIsOver())}function r(){localStorage.getItem("targetDate")&&(s.getItemFromLocalStorage(),e.datetime.valueAsNumber=s.data,s.start())}function n({days:t,hours:a,mins:o,secs:s}){e.days.textContent=`${t}`,e.hours.textContent=`${a}`,e.mins.textContent=`${o}`,e.secs.textContent=`${s}`}function u(){e.timeIsOver.textContent="Congrats! Time is over!"}function c(){""!==e.timeIsOver.textContent&&(e.timeIsOver.textContent="")}function m(){localStorage.setItem("targetDate",s.data)}function l(){s.data=localStorage.getItem("targetDate")}function d(){localStorage.removeItem("targetDate")}function g(){s.audio.play()}function h(){s.audio.pause()}e.datetime.addEventListener("input",i),r();
},{"./sass/main.scss":"clu1","./sound/sound.mp3":"OQMG"}]},{},["Focm"], null)
//# sourceMappingURL=/countdown_timer/src.e4ff54b7.js.map