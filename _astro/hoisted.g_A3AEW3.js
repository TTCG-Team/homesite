/* empty css                                   */import{d as B,C as j,s as V,v as N,o as L,h as U,W as x,p as D}from"./solana-wallets-vue.BQV4QrwB.js";import{u as q,a as z}from"./index.9lYqut_W.js";import{_ as W}from"./_plugin-vue_export-helper.ByfqkwuR.js";import"./hoisted.CWHuPgaN.js";import"./index.pj2VwCcK.js";const G=B({__name:"WalletButton",setup(t,{expose:e}){e();const i=new j(V("devnet"));N({});const r=q(z),s={conn:i,counter:r,get WalletMultiButton(){return x}};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}});function $(t,e,i,r,s,n){return L(),U(r.WalletMultiButton,{dark:""})}const Q=W(G,[["render",$]]);var d=Object.freeze({Linear:Object.freeze({None:function(t){return t},In:function(t){return t},Out:function(t){return t},InOut:function(t){return t}}),Quadratic:Object.freeze({In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}}),Cubic:Object.freeze({In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}}),Quartic:Object.freeze({In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}}),Quintic:Object.freeze({In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}}),Sinusoidal:Object.freeze({In:function(t){return 1-Math.sin((1-t)*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return .5*(1-Math.sin(Math.PI*(.5-t)))}}),Exponential:Object.freeze({In:function(t){return t===0?0:Math.pow(1024,t-1)},Out:function(t){return t===1?1:1-Math.pow(2,-10*t)},InOut:function(t){return t===0?0:t===1?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)}}),Circular:Object.freeze({In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}}),Elastic:Object.freeze({In:function(t){return t===0?0:t===1?1:-Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI)},Out:function(t){return t===0?0:t===1?1:Math.pow(2,-10*t)*Math.sin((t-.1)*5*Math.PI)+1},InOut:function(t){return t===0?0:t===1?1:(t*=2,t<1?-.5*Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin((t-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(t){var e=1.70158;return t===1?1:t*t*((e+1)*t-e)},Out:function(t){var e=1.70158;return t===0?0:--t*t*((e+1)*t+e)+1},InOut:function(t){var e=2.5949095;return(t*=2)<1?.5*(t*t*((e+1)*t-e)):.5*((t-=2)*t*((e+1)*t+e)+2)}}),Bounce:Object.freeze({In:function(t){return 1-d.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?d.Bounce.In(t*2)*.5:d.Bounce.Out(t*2-1)*.5+.5}}),generatePow:function(t){return t===void 0&&(t=4),t=t<Number.EPSILON?Number.EPSILON:t,t=t>1e4?1e4:t,{In:function(e){return Math.pow(e,t)},Out:function(e){return 1-Math.pow(1-e,t)},InOut:function(e){return e<.5?Math.pow(e*2,t)/2:(1-Math.pow(2-e*2,t))/2+.5}}}}),g=function(){return performance.now()},H=function(){function t(){this._tweens={},this._tweensAddedDuringUpdate={}}return t.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(i){return e._tweens[i]})},t.prototype.removeAll=function(){this._tweens={}},t.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},t.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},t.prototype.update=function(e,i){e===void 0&&(e=g()),i===void 0&&(i=!1);var r=Object.keys(this._tweens);if(r.length===0)return!1;for(;r.length>0;){this._tweensAddedDuringUpdate={};for(var s=0;s<r.length;s++){var n=this._tweens[r[s]],o=!i;n&&n.update(e,o)===!1&&!i&&delete this._tweens[r[s]]}r=Object.keys(this._tweensAddedDuringUpdate)}return!0},t}(),p={Linear:function(t,e){var i=t.length-1,r=i*e,s=Math.floor(r),n=p.Utils.Linear;return e<0?n(t[0],t[1],r):e>1?n(t[i],t[i-1],i-r):n(t[s],t[s+1>i?i:s+1],r-s)},Bezier:function(t,e){for(var i=0,r=t.length-1,s=Math.pow,n=p.Utils.Bernstein,o=0;o<=r;o++)i+=s(1-e,r-o)*s(e,o)*t[o]*n(r,o);return i},CatmullRom:function(t,e){var i=t.length-1,r=i*e,s=Math.floor(r),n=p.Utils.CatmullRom;return t[0]===t[i]?(e<0&&(s=Math.floor(r=i*(1+e))),n(t[(s-1+i)%i],t[s],t[(s+1)%i],t[(s+2)%i],r-s)):e<0?t[0]-(n(t[0],t[0],t[1],t[1],-r)-t[0]):e>1?t[i]-(n(t[i],t[i],t[i-1],t[i-1],r-i)-t[i]):n(t[s?s-1:0],t[s],t[i<s+1?i:s+1],t[i<s+2?i:s+2],r-s)},Utils:{Linear:function(t,e,i){return(e-t)*i+t},Bernstein:function(t,e){var i=p.Utils.Factorial;return i(t)/i(e)/i(t-e)},Factorial:function(){var t=[1];return function(e){var i=1;if(t[e])return t[e];for(var r=e;r>1;r--)i*=r;return t[e]=i,i}}(),CatmullRom:function(t,e,i,r,s){var n=(i-t)*.5,o=(r-e)*.5,a=s*s,l=s*a;return(2*e-2*i+n+o)*l+(-3*e+3*i-2*n-o)*a+n*s+e}}},J=function(){function t(){}return t.nextId=function(){return t._nextId++},t._nextId=0,t}(),E=new H,M=function(){function t(e,i){i===void 0&&(i=E),this._object=e,this._group=i,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=d.Linear.None,this._interpolationFunction=p.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=J.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return t.prototype.getId=function(){return this._id},t.prototype.isPlaying=function(){return this._isPlaying},t.prototype.isPaused=function(){return this._isPaused},t.prototype.getDuration=function(){return this._duration},t.prototype.to=function(e,i){if(i===void 0&&(i=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=i<0?0:i,this},t.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e<0?0:e,this},t.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},t.prototype.start=function(e,i){if(e===void 0&&(e=g()),i===void 0&&(i=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var r in this._valuesStartRepeat)this._swapEndStartRepeatValues(r),this._valuesStart[r]=this._valuesStartRepeat[r]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||i){if(this._propertiesAreSetUp=!0,!this._isDynamic){var s={};for(var n in this._valuesEnd)s[n]=this._valuesEnd[n];this._valuesEnd=s}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,i)}return this},t.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},t.prototype._setupProperties=function(e,i,r,s,n){for(var o in r){var a=e[o],l=Array.isArray(a),f=l?"array":typeof a,h=!l&&Array.isArray(r[o]);if(!(f==="undefined"||f==="function")){if(h){var c=r[o];if(c.length===0)continue;for(var y=[a],b=0,F=c.length;b<F;b+=1){var m=this._handleRelativeValue(a,c[b]);if(isNaN(m)){h=!1,console.warn("Found invalid interpolation list. Skipping.");break}y.push(m)}h&&(r[o]=y)}if((f==="object"||l)&&a&&!h){i[o]=l?[]:{};var k=a;for(var _ in k)i[o][_]=k[_];s[o]=l?[]:{};var c=r[o];if(!this._isDynamic){var I={};for(var _ in c)I[_]=c[_];r[o]=c=I}this._setupProperties(k,i[o],c,s[o],n)}else(typeof i[o]>"u"||n)&&(i[o]=a),l||(i[o]*=1),h?s[o]=r[o].slice().reverse():s[o]=i[o]||0}}},t.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},t.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},t.prototype.pause=function(e){return e===void 0&&(e=g()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},t.prototype.resume=function(e){return e===void 0&&(e=g()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},t.prototype.stopChainedTweens=function(){for(var e=0,i=this._chainedTweens.length;e<i;e++)this._chainedTweens[e].stop();return this},t.prototype.group=function(e){return e===void 0&&(e=E),this._group=e,this},t.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},t.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},t.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},t.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},t.prototype.easing=function(e){return e===void 0&&(e=d.Linear.None),this._easingFunction=e,this},t.prototype.interpolation=function(e){return e===void 0&&(e=p.Linear),this._interpolationFunction=e,this},t.prototype.chain=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];return this._chainedTweens=e,this},t.prototype.onStart=function(e){return this._onStartCallback=e,this},t.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},t.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},t.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},t.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},t.prototype.onStop=function(e){return this._onStopCallback=e,this},t.prototype.update=function(e,i){var r;if(e===void 0&&(e=g()),i===void 0&&(i=!0),this._isPaused)return!0;var s=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>s)return!1;i&&this.start(e,!0)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var n=e-this._startTime,o=this._duration+((r=this._repeatDelayTime)!==null&&r!==void 0?r:this._delayTime),a=this._duration+this._repeat*o,l=this._calculateElapsedPortion(n,o,a),f=this._easingFunction(l),h=this._calculateCompletionStatus(n,o);if(h==="repeat"&&this._processRepetition(n,o),this._updateProperties(this._object,this._valuesStart,this._valuesEnd,f),h==="about-to-repeat"&&this._processRepetition(n,o),this._onUpdateCallback&&this._onUpdateCallback(this._object,l),h==="repeat"||h==="about-to-repeat")this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1;else if(h==="completed"){this._isPlaying=!1,this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var c=0,y=this._chainedTweens.length;c<y;c++)this._chainedTweens[c].start(this._startTime+this._duration,!1)}return h!=="completed"},t.prototype._calculateElapsedPortion=function(e,i,r){if(this._duration===0||e>r)return 1;var s=e%i,n=Math.min(s/this._duration,1);return n===0&&e!==0&&e%this._duration===0?1:n},t.prototype._calculateCompletionStatus=function(e,i){return this._duration!==0&&e<this._duration?"playing":this._repeat<=0?"completed":e===this._duration?"about-to-repeat":"repeat"},t.prototype._processRepetition=function(e,i){var r=Math.min(Math.trunc((e-this._duration)/i)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=r);for(var s in this._valuesStartRepeat){var n=this._valuesEnd[s];!this._yoyo&&typeof n=="string"&&(this._valuesStartRepeat[s]=this._valuesStartRepeat[s]+parseFloat(n)),this._yoyo&&this._swapEndStartRepeatValues(s),this._valuesStart[s]=this._valuesStartRepeat[s]}this._yoyo&&(this._reversed=!this._reversed),this._startTime+=i*r},t.prototype._updateProperties=function(e,i,r,s){for(var n in r)if(i[n]!==void 0){var o=i[n]||0,a=r[n],l=Array.isArray(e[n]),f=Array.isArray(a),h=!l&&f;h?e[n]=this._interpolationFunction(a,s):typeof a=="object"&&a?this._updateProperties(e[n],o,a,s):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(e[n]=o+(a-o)*s))}},t.prototype._handleRelativeValue=function(e,i){return typeof i!="string"?i:i.charAt(0)==="+"||i.charAt(0)==="-"?e+parseFloat(i):parseFloat(i)},t.prototype._swapEndStartRepeatValues=function(e){var i=this._valuesStartRepeat[e],r=this._valuesEnd[e];typeof r=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(r):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=i},t}(),u=E;u.getAll.bind(u);u.removeAll.bind(u);u.add.bind(u);u.remove.bind(u);var K=u.update.bind(u);class X{version;initialised;now;epoch;countdownEnded;hasEndedCallback;element;rotors;rotorLeafFront;rotorLeafRear;rotorTops;rotorBottoms;countdown;daysRemaining;clockValues;clockStrings;clockValuesAsString;prevClockValuesAsString;opts;constructor(e,i,r={}){if(typeof e!="number")throw new Error(`FlipDown: Constructor expected unix timestamp, got ${typeof e} instead.`);this.version="0.3.2",this.initialised=!1,this.now=this._getTime(),this.epoch=e,this.countdownEnded=!1,this.hasEndedCallback=null,typeof i=="string"?this.element=document.querySelector(i):this.element=i,this.rotors=[],this.rotorLeafFront=[],this.rotorLeafRear=[],this.rotorTops=[],this.rotorBottoms=[],this.countdown=null,this.daysRemaining=0,this.clockValues={},this.clockStrings={},this.clockValuesAsString=[],this.prevClockValuesAsString=[],this.opts=this._parseOptions(r),this._setOptions()}start(){return this.initialised||this._init(),this.countdown=setInterval(this._tick.bind(this),1e3),this}ifEnded(e){return this.hasEndedCallback=function(){e(),this.hasEndedCallback=null},this}_getTime(){return new Date().getTime()/1e3}_hasCountdownEnded(){return this.epoch-this.now<0?(this.countdownEnded=!0,this.hasEndedCallback!=null&&(this.hasEndedCallback(),this.hasEndedCallback=null),!0):(this.countdownEnded=!1,!1)}_parseOptions(e){let i=["Days","Hours","Minutes","Seconds"];return e.headings&&e.headings.length===4&&(i=e.headings),{theme:e.hasOwnProperty("theme")?e.theme:"dark",headings:i}}_setOptions(){this.element.classList.add(`flipdown__theme-${this.opts.theme}`)}_init(){let e;this.initialised=!0,this._hasCountdownEnded()?this.daysRemaining=0:this.daysRemaining=Math.floor((this.epoch-this.now)/86400).toString().length;var i=this.daysRemaining<=2?2:this.daysRemaining;for(e=0;e<i+6;e++)this.rotors.push(this._createRotor(0));const r=[];for(e=0;e<i;e++)r.push(this.rotors[e]);this.element.appendChild(this._createRotorGroup(r,0));let s=i;for(e=0;e<3;e++){for(var n=[],o=0;o<2;o++)n.push(this.rotors[s]),s++;this.element.appendChild(this._createRotorGroup(n,e+1))}return this.rotorLeafFront=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-leaf-front")),this.rotorLeafRear=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-leaf-rear")),this.rotorTops=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-top")),this.rotorBottoms=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-bottom")),this._tick(),this._updateClockValues(!0),this}_createRotorGroup(e,i){var r=document.createElement("div");r.className="rotor-group";var s=document.createElement("div");return s.className="rotor-group-heading",s.setAttribute("data-before",this.opts.headings[i]),r.appendChild(s),S(r,e),r}_createRotor(e=0){const i=document.createElement("div"),r=document.createElement("div"),s=document.createElement("figure"),n=document.createElement("figure"),o=document.createElement("div"),a=document.createElement("div");return i.className="rotor",r.className="rotor-leaf",s.className="rotor-leaf-rear",n.className="rotor-leaf-front",o.className="rotor-top",a.className="rotor-bottom",s.textContent=e.toString(),o.textContent=e.toString(),a.textContent=e.toString(),S(i,[r,o,a]),S(r,[s,n]),i}_tick(){this.now=this._getTime();var e=this.epoch-this.now<=0?0:this.epoch-this.now;this.clockValues.d=Math.floor(e/86400),e-=this.clockValues.d*86400,this.clockValues.h=Math.floor(e/3600),e-=this.clockValues.h*3600,this.clockValues.m=Math.floor(e/60),e-=this.clockValues.m*60,this.clockValues.s=Math.floor(e),this._updateClockValues(),this._hasCountdownEnded()}_updateClockValues(e=!1){this.clockStrings.d=v(this.clockValues.d,2),this.clockStrings.h=v(this.clockValues.h,2),this.clockStrings.m=v(this.clockValues.m,2),this.clockStrings.s=v(this.clockValues.s,2),this.clockValuesAsString=(this.clockStrings.d+this.clockStrings.h+this.clockStrings.m+this.clockStrings.s).split(""),this.rotorLeafFront.forEach((s,n)=>{s.textContent=this.prevClockValuesAsString[n]}),this.rotorBottoms.forEach((s,n)=>{s.textContent=this.prevClockValuesAsString[n]});const i=()=>{this.rotorTops.forEach((s,n)=>{s.textContent!=this.clockValuesAsString[n]&&(s.textContent=this.clockValuesAsString[n])})},r=()=>{this.rotorLeafRear.forEach((s,n)=>{if(s.textContent!=this.clockValuesAsString[n]){s.textContent=this.clockValuesAsString[n],s.parentElement.classList.add("flipped");const o=setInterval(function(){s.parentElement.classList.remove("flipped"),clearInterval(o)}.bind(this),500)}})};e?(i(),r()):(setTimeout(i,500),setTimeout(r,500)),this.prevClockValuesAsString=this.clockValuesAsString}}function v(t,e){return t=t.toString(),t.length<e?v("0"+t,e):t}function S(t,e){e.forEach(i=>{t.appendChild(i)})}let Y=35208,O={};const C={setItem(t,e,i){let r=`k${Y++}`;O[r]=i,t.dataset[e]=r},getItem(t,e){let i=t.dataset[e];return O[i]}};D(Q).mount("#wallet-button");new X(1717656948,"#flipdown").start();let Z=document.querySelector(".timeout"),T=document.querySelector(".link-wallet"),tt=document.querySelector(".standby"),et=document.querySelector(".mining"),w=T,it=[Z,T,tt,et];const A=900;function rt(t,e=!0){if(e){let i={opacity:0};t.style.display="block";let r=C.getItem(t,"tween");r&&r.stop(),r=new M(i).easing(d.Cubic.Out).to({opacity:1},A).onUpdate(()=>{t.style.opacity=`${i.opacity}`}).start(),C.setItem(t,"tween",r)}else t.style.opacity="1",t.style.display="block"}function st(t,e=!0){if(e){let i={opacity:parseFloat(t.style.opacity||"1.0")},r=C.getItem(t,"tween");r&&r.stop(),r=new M(i).to({opacity:0},A).easing(d.Cubic.Out).onUpdate(()=>{t.style.opacity=`${i.opacity}`}).onComplete(()=>{t.style.display="none"}).start(),C.setItem(t,"tween",r)}else t.style.opacity="0",t.style.display="none"}function nt(t,e=!0){let i=it[t];i!==w&&(st(w,e),rt(i,e),w=i)}let ot=document.getElementById("test-btns"),R=ot.querySelectorAll(".btn");for(let t=0,e=R.length;t<e;++t){let i=R[t];i.onclick=()=>{nt(t,!0)}}function P(t){K(t),requestAnimationFrame(P)}requestAnimationFrame(P);
