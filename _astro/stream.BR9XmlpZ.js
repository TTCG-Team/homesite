import{E as Le,G as Be,r as Me,J as Ve,L as $e,ag as Ge,u as qe}from"./solana-wallets-vue.D4BdGiPg.js";import{s as ze,p as Ye}from"./_plugin-vue_export-helper.CDg0sgxn.js";var z=function(e,r){return z=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},z(e,r)};function g(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");z(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}function Ze(e,r,t,n){function i(o){return o instanceof t?o:new t(function(u){u(o)})}return new(t||(t=Promise))(function(o,u){function a(f){try{s(n.next(f))}catch(l){u(l)}}function c(f){try{s(n.throw(f))}catch(l){u(l)}}function s(f){f.done?o(f.value):i(f.value).then(a,c)}s((n=n.apply(e,r||[])).next())})}function fe(e,r){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,u;return u={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function a(s){return function(f){return c([s,f])}}function c(s){if(n)throw new TypeError("Generator is already executing.");for(;u&&(u=0,s[0]&&(t=0)),t;)try{if(n=1,i&&(o=s[0]&2?i.return:s[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,s[1])).done)return o;switch(i=0,o&&(s=[s[0]&2,o.value]),s[0]){case 0:case 1:o=s;break;case 4:return t.label++,{value:s[1],done:!1};case 5:t.label++,i=s[1],s=[0];continue;case 7:s=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){t.label=s[1];break}if(s[0]===6&&t.label<o[1]){t.label=o[1],o=s;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(s);break}o[2]&&t.ops.pop(),t.trys.pop();continue}s=r.call(e,t)}catch(f){s=[6,f],i=0}finally{n=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}}function T(e){var r=typeof Symbol=="function"&&Symbol.iterator,t=r&&e[r],n=0;if(t)return t.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")}function E(e,r){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var n=t.call(e),i,o=[],u;try{for(;(r===void 0||r-- >0)&&!(i=n.next()).done;)o.push(i.value)}catch(a){u={error:a}}finally{try{i&&!i.done&&(t=n.return)&&t.call(n)}finally{if(u)throw u.error}}return o}function A(e,r,t){if(t||arguments.length===2)for(var n=0,i=r.length,o;n<i;n++)(o||!(n in r))&&(o||(o=Array.prototype.slice.call(r,0,n)),o[n]=r[n]);return e.concat(o||Array.prototype.slice.call(r))}function O(e){return this instanceof O?(this.v=e,this):new O(e)}function He(e,r,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t.apply(e,r||[]),i,o=[];return i={},u("next"),u("throw"),u("return"),i[Symbol.asyncIterator]=function(){return this},i;function u(h){n[h]&&(i[h]=function(d){return new Promise(function(y,v){o.push([h,d,y,v])>1||a(h,d)})})}function a(h,d){try{c(n[h](d))}catch(y){l(o[0][3],y)}}function c(h){h.value instanceof O?Promise.resolve(h.value.v).then(s,f):l(o[0][2],h)}function s(h){a("next",h)}function f(h){a("throw",h)}function l(h,d){h(d),o.shift(),o.length&&a(o[0][0],o[0][1])}}function Je(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=e[Symbol.asyncIterator],t;return r?r.call(e):(e=typeof T=="function"?T(e):e[Symbol.iterator](),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(o){t[o]=e[o]&&function(u){return new Promise(function(a,c){u=e[o](u),i(a,c,u.done,u.value)})}}function i(o,u,a,c){Promise.resolve(c).then(function(s){o({value:s,done:a})},u)}}function p(e){return typeof e=="function"}function le(e){var r=function(n){Error.call(n),n.stack=new Error().stack},t=e(r);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var $=le(function(e){return function(t){e(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(n,i){return i+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function L(e,r){if(e){var t=e.indexOf(r);0<=t&&e.splice(t,1)}}var j=function(){function e(r){this.initialTeardown=r,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var r,t,n,i,o;if(!this.closed){this.closed=!0;var u=this._parentage;if(u)if(this._parentage=null,Array.isArray(u))try{for(var a=T(u),c=a.next();!c.done;c=a.next()){var s=c.value;s.remove(this)}}catch(v){r={error:v}}finally{try{c&&!c.done&&(t=a.return)&&t.call(a)}finally{if(r)throw r.error}}else u.remove(this);var f=this.initialTeardown;if(p(f))try{f()}catch(v){o=v instanceof $?v.errors:[v]}var l=this._finalizers;if(l){this._finalizers=null;try{for(var h=T(l),d=h.next();!d.done;d=h.next()){var y=d.value;try{ne(y)}catch(v){o=o??[],v instanceof $?o=A(A([],E(o)),E(v.errors)):o.push(v)}}}catch(v){n={error:v}}finally{try{d&&!d.done&&(i=h.return)&&i.call(h)}finally{if(n)throw n.error}}}if(o)throw new $(o)}},e.prototype.add=function(r){var t;if(r&&r!==this)if(this.closed)ne(r);else{if(r instanceof e){if(r.closed||r._hasParent(this))return;r._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(r)}},e.prototype._hasParent=function(r){var t=this._parentage;return t===r||Array.isArray(t)&&t.includes(r)},e.prototype._addParent=function(r){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(r),t):t?[t,r]:r},e.prototype._removeParent=function(r){var t=this._parentage;t===r?this._parentage=null:Array.isArray(t)&&L(t,r)},e.prototype.remove=function(r){var t=this._finalizers;t&&L(t,r),r instanceof e&&r._removeParent(this)},e.EMPTY=function(){var r=new e;return r.closed=!0,r}(),e}(),he=j.EMPTY;function ve(e){return e instanceof j||e&&"closed"in e&&p(e.remove)&&p(e.add)&&p(e.unsubscribe)}function ne(e){p(e)?e():e.unsubscribe()}var de={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},pe={setTimeout:function(e,r){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];return setTimeout.apply(void 0,A([e,r],E(t)))},clearTimeout:function(e){var r=pe.delegate;return(r?.clearTimeout||clearTimeout)(e)},delegate:void 0};function ye(e){pe.setTimeout(function(){throw e})}function ie(){}function D(e){e()}var H=function(e){g(r,e);function r(t){var n=e.call(this)||this;return n.isStopped=!1,t?(n.destination=t,ve(t)&&t.add(n)):n.destination=Ne,n}return r.create=function(t,n,i){return new C(t,n,i)},r.prototype.next=function(t){this.isStopped||this._next(t)},r.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},r.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},r.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},r.prototype._next=function(t){this.destination.next(t)},r.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},r.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},r}(j),Ke=Function.prototype.bind;function G(e,r){return Ke.call(e,r)}var Qe=function(){function e(r){this.partialObserver=r}return e.prototype.next=function(r){var t=this.partialObserver;if(t.next)try{t.next(r)}catch(n){F(n)}},e.prototype.error=function(r){var t=this.partialObserver;if(t.error)try{t.error(r)}catch(n){F(n)}else F(r)},e.prototype.complete=function(){var r=this.partialObserver;if(r.complete)try{r.complete()}catch(t){F(t)}},e}(),C=function(e){g(r,e);function r(t,n,i){var o=e.call(this)||this,u;if(p(t)||!t)u={next:t??void 0,error:n??void 0,complete:i??void 0};else{var a;o&&de.useDeprecatedNextContext?(a=Object.create(t),a.unsubscribe=function(){return o.unsubscribe()},u={next:t.next&&G(t.next,a),error:t.error&&G(t.error,a),complete:t.complete&&G(t.complete,a)}):u=t}return o.destination=new Qe(u),o}return r}(H);function F(e){ye(e)}function Xe(e){throw e}var Ne={closed:!0,next:ie,error:Xe,complete:ie},J=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function K(e){return e}function et(e){return e.length===0?K:e.length===1?e[0]:function(t){return e.reduce(function(n,i){return i(n)},t)}}var w=function(){function e(r){r&&(this._subscribe=r)}return e.prototype.lift=function(r){var t=new e;return t.source=this,t.operator=r,t},e.prototype.subscribe=function(r,t,n){var i=this,o=rt(r)?r:new C(r,t,n);return D(function(){var u=i,a=u.operator,c=u.source;o.add(a?a.call(o,c):c?i._subscribe(o):i._trySubscribe(o))}),o},e.prototype._trySubscribe=function(r){try{return this._subscribe(r)}catch(t){r.error(t)}},e.prototype.forEach=function(r,t){var n=this;return t=oe(t),new t(function(i,o){var u=new C({next:function(a){try{r(a)}catch(c){o(c),u.unsubscribe()}},error:o,complete:i});n.subscribe(u)})},e.prototype._subscribe=function(r){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(r)},e.prototype[J]=function(){return this},e.prototype.pipe=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return et(r)(this)},e.prototype.toPromise=function(r){var t=this;return r=oe(r),new r(function(n,i){var o;t.subscribe(function(u){return o=u},function(u){return i(u)},function(){return n(o)})})},e.create=function(r){return new e(r)},e}();function oe(e){var r;return(r=e??de.Promise)!==null&&r!==void 0?r:Promise}function tt(e){return e&&p(e.next)&&p(e.error)&&p(e.complete)}function rt(e){return e&&e instanceof H||tt(e)&&ve(e)}function nt(e){return p(e?.lift)}function _(e){return function(r){if(nt(r))return r.lift(function(t){try{return e(t,this)}catch(n){this.error(n)}});throw new TypeError("Unable to lift unknown Observable type")}}function S(e,r,t,n,i){return new it(e,r,t,n,i)}var it=function(e){g(r,e);function r(t,n,i,o,u,a){var c=e.call(this,t)||this;return c.onFinalize=u,c.shouldUnsubscribe=a,c._next=n?function(s){try{n(s)}catch(f){t.error(f)}}:e.prototype._next,c._error=o?function(s){try{o(s)}catch(f){t.error(f)}finally{this.unsubscribe()}}:e.prototype._error,c._complete=i?function(){try{i()}catch(s){t.error(s)}finally{this.unsubscribe()}}:e.prototype._complete,c}return r.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var n=this.closed;e.prototype.unsubscribe.call(this),!n&&((t=this.onFinalize)===null||t===void 0||t.call(this))}},r}(H),ot=le(function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),R=function(e){g(r,e);function r(){var t=e.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return r.prototype.lift=function(t){var n=new ue(this,this);return n.operator=t,n},r.prototype._throwIfClosed=function(){if(this.closed)throw new ot},r.prototype.next=function(t){var n=this;D(function(){var i,o;if(n._throwIfClosed(),!n.isStopped){n.currentObservers||(n.currentObservers=Array.from(n.observers));try{for(var u=T(n.currentObservers),a=u.next();!a.done;a=u.next()){var c=a.value;c.next(t)}}catch(s){i={error:s}}finally{try{a&&!a.done&&(o=u.return)&&o.call(u)}finally{if(i)throw i.error}}}})},r.prototype.error=function(t){var n=this;D(function(){if(n._throwIfClosed(),!n.isStopped){n.hasError=n.isStopped=!0,n.thrownError=t;for(var i=n.observers;i.length;)i.shift().error(t)}})},r.prototype.complete=function(){var t=this;D(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var n=t.observers;n.length;)n.shift().complete()}})},r.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(r.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),r.prototype._trySubscribe=function(t){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,t)},r.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},r.prototype._innerSubscribe=function(t){var n=this,i=this,o=i.hasError,u=i.isStopped,a=i.observers;return o||u?he:(this.currentObservers=null,a.push(t),new j(function(){n.currentObservers=null,L(a,t)}))},r.prototype._checkFinalizedStatuses=function(t){var n=this,i=n.hasError,o=n.thrownError,u=n.isStopped;i?t.error(o):u&&t.complete()},r.prototype.asObservable=function(){var t=new w;return t.source=this,t},r.create=function(t,n){return new ue(t,n)},r}(w),ue=function(e){g(r,e);function r(t,n){var i=e.call(this)||this;return i.destination=t,i.source=n,i}return r.prototype.next=function(t){var n,i;(i=(n=this.destination)===null||n===void 0?void 0:n.next)===null||i===void 0||i.call(n,t)},r.prototype.error=function(t){var n,i;(i=(n=this.destination)===null||n===void 0?void 0:n.error)===null||i===void 0||i.call(n,t)},r.prototype.complete=function(){var t,n;(n=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||n===void 0||n.call(t)},r.prototype._subscribe=function(t){var n,i;return(i=(n=this.source)===null||n===void 0?void 0:n.subscribe(t))!==null&&i!==void 0?i:he},r}(R),Q=function(e){g(r,e);function r(t){var n=e.call(this)||this;return n._value=t,n}return Object.defineProperty(r.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),r.prototype._subscribe=function(t){var n=e.prototype._subscribe.call(this,t);return!n.closed&&t.next(this._value),n},r.prototype.getValue=function(){var t=this,n=t.hasError,i=t.thrownError,o=t._value;if(n)throw i;return this._throwIfClosed(),o},r.prototype.next=function(t){e.prototype.next.call(this,this._value=t)},r}(R),X={now:function(){return(X.delegate||Date).now()},delegate:void 0},ut=function(e){g(r,e);function r(t,n,i){t===void 0&&(t=1/0),n===void 0&&(n=1/0),i===void 0&&(i=X);var o=e.call(this)||this;return o._bufferSize=t,o._windowTime=n,o._timestampProvider=i,o._buffer=[],o._infiniteTimeWindow=!0,o._infiniteTimeWindow=n===1/0,o._bufferSize=Math.max(1,t),o._windowTime=Math.max(1,n),o}return r.prototype.next=function(t){var n=this,i=n.isStopped,o=n._buffer,u=n._infiniteTimeWindow,a=n._timestampProvider,c=n._windowTime;i||(o.push(t),!u&&o.push(a.now()+c)),this._trimBuffer(),e.prototype.next.call(this,t)},r.prototype._subscribe=function(t){this._throwIfClosed(),this._trimBuffer();for(var n=this._innerSubscribe(t),i=this,o=i._infiniteTimeWindow,u=i._buffer,a=u.slice(),c=0;c<a.length&&!t.closed;c+=o?1:2)t.next(a[c]);return this._checkFinalizedStatuses(t),n},r.prototype._trimBuffer=function(){var t=this,n=t._bufferSize,i=t._timestampProvider,o=t._buffer,u=t._infiniteTimeWindow,a=(u?1:2)*n;if(n<1/0&&a<o.length&&o.splice(0,o.length-a),!u){for(var c=i.now(),s=0,f=1;f<o.length&&o[f]<=c;f+=2)s=f;s&&o.splice(0,s+1)}},r}(R),at=function(e){g(r,e);function r(t,n){return e.call(this)||this}return r.prototype.schedule=function(t,n){return this},r}(j),Y={setInterval:function(e,r){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];return setInterval.apply(void 0,A([e,r],E(t)))},clearInterval:function(e){var r=Y.delegate;return(r?.clearInterval||clearInterval)(e)},delegate:void 0},st=function(e){g(r,e);function r(t,n){var i=e.call(this,t,n)||this;return i.scheduler=t,i.work=n,i.pending=!1,i}return r.prototype.schedule=function(t,n){var i;if(n===void 0&&(n=0),this.closed)return this;this.state=t;var o=this.id,u=this.scheduler;return o!=null&&(this.id=this.recycleAsyncId(u,o,n)),this.pending=!0,this.delay=n,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(u,this.id,n),this},r.prototype.requestAsyncId=function(t,n,i){return i===void 0&&(i=0),Y.setInterval(t.flush.bind(t,this),i)},r.prototype.recycleAsyncId=function(t,n,i){if(i===void 0&&(i=0),i!=null&&this.delay===i&&this.pending===!1)return n;n!=null&&Y.clearInterval(n)},r.prototype.execute=function(t,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var i=this._execute(t,n);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},r.prototype._execute=function(t,n){var i=!1,o;try{this.work(t)}catch(u){i=!0,o=u||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),o},r.prototype.unsubscribe=function(){if(!this.closed){var t=this,n=t.id,i=t.scheduler,o=i.actions;this.work=this.state=this.scheduler=null,this.pending=!1,L(o,this),n!=null&&(this.id=this.recycleAsyncId(i,n,null)),this.delay=null,e.prototype.unsubscribe.call(this)}},r}(at),ae=function(){function e(r,t){t===void 0&&(t=e.now),this.schedulerActionCtor=r,this.now=t}return e.prototype.schedule=function(r,t,n){return t===void 0&&(t=0),new this.schedulerActionCtor(this,r).schedule(n,t)},e.now=X.now,e}(),ct=function(e){g(r,e);function r(t,n){n===void 0&&(n=ae.now);var i=e.call(this,t,n)||this;return i.actions=[],i._active=!1,i}return r.prototype.flush=function(t){var n=this.actions;if(this._active){n.push(t);return}var i;this._active=!0;do if(i=t.execute(t.state,t.delay))break;while(t=n.shift());if(this._active=!1,i){for(;t=n.shift();)t.unsubscribe();throw i}},r}(ae),N=new ct(st),ft=N;function be(e){return e&&p(e.schedule)}function me(e){return e[e.length-1]}function V(e){return be(me(e))?e.pop():void 0}function lt(e,r){return typeof me(e)=="number"?e.pop():r}var we=function(e){return e&&typeof e.length=="number"&&typeof e!="function"};function Se(e){return p(e?.then)}function ge(e){return p(e[J])}function _e(e){return Symbol.asyncIterator&&p(e?.[Symbol.asyncIterator])}function xe(e){return new TypeError("You provided "+(e!==null&&typeof e=="object"?"an invalid object":"'"+e+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function ht(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Ie=ht();function Ee(e){return p(e?.[Ie])}function Ae(e){return He(this,arguments,function(){var t,n,i,o;return fe(this,function(u){switch(u.label){case 0:t=e.getReader(),u.label=1;case 1:u.trys.push([1,,9,10]),u.label=2;case 2:return[4,O(t.read())];case 3:return n=u.sent(),i=n.value,o=n.done,o?[4,O(void 0)]:[3,5];case 4:return[2,u.sent()];case 5:return[4,O(i)];case 6:return[4,u.sent()];case 7:return u.sent(),[3,2];case 8:return[3,10];case 9:return t.releaseLock(),[7];case 10:return[2]}})})}function Oe(e){return p(e?.getReader)}function x(e){if(e instanceof w)return e;if(e!=null){if(ge(e))return vt(e);if(we(e))return dt(e);if(Se(e))return pt(e);if(_e(e))return Te(e);if(Ee(e))return yt(e);if(Oe(e))return bt(e)}throw xe(e)}function vt(e){return new w(function(r){var t=e[J]();if(p(t.subscribe))return t.subscribe(r);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function dt(e){return new w(function(r){for(var t=0;t<e.length&&!r.closed;t++)r.next(e[t]);r.complete()})}function pt(e){return new w(function(r){e.then(function(t){r.closed||(r.next(t),r.complete())},function(t){return r.error(t)}).then(null,ye)})}function yt(e){return new w(function(r){var t,n;try{for(var i=T(e),o=i.next();!o.done;o=i.next()){var u=o.value;if(r.next(u),r.closed)return}}catch(a){t={error:a}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}r.complete()})}function Te(e){return new w(function(r){mt(e,r).catch(function(t){return r.error(t)})})}function bt(e){return Te(Ae(e))}function mt(e,r){var t,n,i,o;return Ze(this,void 0,void 0,function(){var u,a;return fe(this,function(c){switch(c.label){case 0:c.trys.push([0,5,6,11]),t=Je(e),c.label=1;case 1:return[4,t.next()];case 2:if(n=c.sent(),!!n.done)return[3,4];if(u=n.value,r.next(u),r.closed)return[2];c.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=c.sent(),i={error:a},[3,11];case 6:return c.trys.push([6,,9,10]),n&&!n.done&&(o=t.return)?[4,o.call(t)]:[3,8];case 7:c.sent(),c.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return r.complete(),[2]}})})}function I(e,r,t,n,i){n===void 0&&(n=0),i===void 0&&(i=!1);var o=r.schedule(function(){t(),i?e.add(this.schedule(null,n)):this.unsubscribe()},n);if(e.add(o),!i)return o}function Pe(e,r){return r===void 0&&(r=0),_(function(t,n){t.subscribe(S(n,function(i){return I(n,e,function(){return n.next(i)},r)},function(){return I(n,e,function(){return n.complete()},r)},function(i){return I(n,e,function(){return n.error(i)},r)}))})}function ke(e,r){return r===void 0&&(r=0),_(function(t,n){n.add(e.schedule(function(){return t.subscribe(n)},r))})}function wt(e,r){return x(e).pipe(ke(r),Pe(r))}function St(e,r){return x(e).pipe(ke(r),Pe(r))}function gt(e,r){return new w(function(t){var n=0;return r.schedule(function(){n===e.length?t.complete():(t.next(e[n++]),t.closed||this.schedule())})})}function _t(e,r){return new w(function(t){var n;return I(t,r,function(){n=e[Ie](),I(t,r,function(){var i,o,u;try{i=n.next(),o=i.value,u=i.done}catch(a){t.error(a);return}u?t.complete():t.next(o)},0,!0)}),function(){return p(n?.return)&&n.return()}})}function Ce(e,r){if(!e)throw new Error("Iterable cannot be null");return new w(function(t){I(t,r,function(){var n=e[Symbol.asyncIterator]();I(t,r,function(){n.next().then(function(i){i.done?t.complete():t.next(i.value)})},0,!0)})})}function xt(e,r){return Ce(Ae(e),r)}function It(e,r){if(e!=null){if(ge(e))return wt(e,r);if(we(e))return gt(e,r);if(Se(e))return St(e,r);if(_e(e))return Ce(e,r);if(Ee(e))return _t(e,r);if(Oe(e))return xt(e,r)}throw xe(e)}function ee(e,r){return r?It(e,r):x(e)}function Et(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var t=V(e);return ee(e,t)}function At(e){return e instanceof Date&&!isNaN(e)}function B(e,r){return _(function(t,n){var i=0;t.subscribe(S(n,function(o){n.next(e.call(r,o,i++))}))})}function Ot(e,r,t,n,i,o,u,a){var c=[],s=0,f=0,l=!1,h=function(){l&&!c.length&&!s&&r.complete()},d=function(v){return s<n?y(v):c.push(v)},y=function(v){s++;var m=!1;x(t(v,f++)).subscribe(S(r,function(b){r.next(b)},function(){m=!0},void 0,function(){if(m)try{s--;for(var b=function(){var P=c.shift();u||y(P)};c.length&&s<n;)b();h()}catch(P){r.error(P)}}))};return e.subscribe(S(r,d,function(){l=!0,h()})),function(){}}function je(e,r,t){return t===void 0&&(t=1/0),p(r)?je(function(n,i){return B(function(o,u){return r(n,o,i,u)})(x(e(n,i)))},t):(typeof r=="number"&&(t=r),_(function(n,i){return Ot(n,i,e,t)}))}function Re(e){return e===void 0&&(e=1/0),je(K,e)}function Tt(){return Re(1)}function se(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return Tt()(ee(e,V(e)))}function te(e,r,t){e===void 0&&(e=0),t===void 0&&(t=ft);var n=-1;return r!=null&&(be(r)?t=r:n=r),new w(function(i){var o=At(e)?+e-t.now():e;o<0&&(o=0);var u=0;return t.schedule(function(){i.closed||(i.next(u++),0<=n?this.schedule(void 0,n):i.complete())},o)})}function Ue(e,r){return e===void 0&&(e=0),r===void 0&&(r=N),e<0&&(e=0),te(e,e,r)}var Pt=Array.isArray;function kt(e){return e.length===1&&Pt(e[0])?e[0]:e}function Ct(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var t=V(e),n=lt(e,1/0);return e=kt(e),_(function(i,o){Re(n)(ee(A([i],E(e)),t)).subscribe(o)})}function jt(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return Ct.apply(void 0,A([],E(e)))}function Rt(e){e===void 0&&(e=1/0);var r;e&&typeof e=="object"?r=e:r={count:e};var t=r.count,n=t===void 0?1/0:t,i=r.delay,o=r.resetOnSuccess,u=o===void 0?!1:o;return n<=0?K:_(function(a,c){var s=0,f,l=function(){var h=!1;f=a.subscribe(S(c,function(d){u&&(s=0),c.next(d)},void 0,function(d){if(s++<n){var y=function(){f?(f.unsubscribe(),f=null,l()):h=!0};if(i!=null){var v=typeof i=="number"?te(i):x(i(d,s)),m=S(c,function(){m.unsubscribe(),y()},function(){c.complete()});v.subscribe(m)}else y()}else c.error(d)})),h&&(f.unsubscribe(),f=null,l())};l()})}function Ut(e){e===void 0&&(e={});var r=e.connector,t=r===void 0?function(){return new R}:r,n=e.resetOnError,i=n===void 0?!0:n,o=e.resetOnComplete,u=o===void 0?!0:o,a=e.resetOnRefCountZero,c=a===void 0?!0:a;return function(s){var f,l,h,d=0,y=!1,v=!1,m=function(){l?.unsubscribe(),l=void 0},b=function(){m(),f=h=void 0,y=v=!1},P=function(){var k=f;b(),k?.unsubscribe()};return _(function(k,re){d++,!v&&!y&&m();var U=h=h??t();re.add(function(){d--,d===0&&!v&&!y&&(l=q(P,c))}),U.subscribe(re),!f&&d>0&&(f=new C({next:function(W){return U.next(W)},error:function(W){v=!0,m(),l=q(b,i,W),U.error(W)},complete:function(){y=!0,m(),l=q(b,u),U.complete()}}),x(k).subscribe(f))})(s)}}function q(e,r){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];if(r===!0){e();return}if(r!==!1){var i=new C({next:function(){i.unsubscribe(),e()}});return x(r.apply(void 0,A([],E(t)))).subscribe(i)}}function We(e,r,t){var n,i=!1;return n=e,Ut({connector:function(){return new ut(n,r,t)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:i})}function Fe(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var t=V(e);return _(function(n,i){(t?se(e,n,t):se(e,n)).subscribe(i)})}function Z(e,r){return _(function(t,n){var i=null,o=0,u=!1,a=function(){return u&&!i&&n.complete()};t.subscribe(S(n,function(c){i?.unsubscribe();var s=0,f=o++;x(e(c,f)).subscribe(i=S(n,function(l){return n.next(r?r(c,l,f,s++):l)},function(){i=null,a()}))},function(){u=!0,a()}))})}function Wt(e,r){return _(function(t,n){var i=r??{},o=i.leading,u=o===void 0?!0:o,a=i.trailing,c=a===void 0?!1:a,s=!1,f=null,l=null,h=!1,d=function(){l?.unsubscribe(),l=null,c&&(m(),h&&n.complete())},y=function(){l=null,h&&n.complete()},v=function(b){return l=x(e(b)).subscribe(S(n,d,y))},m=function(){if(s){s=!1;var b=f;f=null,n.next(b),!h&&v(b)}};t.subscribe(S(n,function(b){s=!0,f=b,!(l&&!l.closed)&&(u?m():v(b))},function(){h=!0,!(c&&s&&l&&!l.closed)&&n.complete()}))})}function ce(e,r,t){r===void 0&&(r=N);var n=te(e,r);return Wt(function(){return n},t)}function Ft(e){return Le()?(Be(e),!0):!1}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;function zt(e,r){const t=Me(void 0),n=e.subscribe({next:i=>t.value=i,error:void 0});return Ft(()=>{n.unsubscribe()}),t}function Dt(e,r,t,n,i){const o=6e4*i;return e.pipe(ce(1e3),Z(()=>Ue(o).pipe(Fe(0),jt(r.pipe(ce(5*1e3))),Z(()=>(console.log(">> query mine state"),t.next(!0),e.value.getAccountInfo(ze.publicKey))),B(a=>(t.next(!1),n.next(Date.now()/1e3|0),a?Ye(a):null)),Rt({delay:.1*o}))))}function Lt(e){return e.pipe(Z(t=>{let{start_time:n,last_reward_time:i,pending_reward:o,reward_per_second:u}=t.mine,a=Date.now()/1e3;return a<n?Et(0):Ue(1e3).pipe(B(c=>c+1),Fe(0),B(c=>{let s=a+c-i;return(o+s*u)/1e9|0}))}))}let M=window.connectionData;if(!M){let e=new Q(new Ve($e("devnet")));Ge({}),M={connection:e,wallet:qe()}}const Bt=M.connection,Yt=M.wallet,De=new R,Zt=()=>De.next(0),Mt=new Q(0),Vt=new Q(!1),$t=Dt(Bt,De,Vt,Mt,5).pipe(We(1)),Ht=Lt($t).pipe(We(1));export{$t as $,Vt as a,Ht as b,Bt as c,Yt as d,Zt as r,zt as u};
