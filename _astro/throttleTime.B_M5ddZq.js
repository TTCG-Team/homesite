var L=function(t,r){return L=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},L(t,r)};function g(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");L(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}function xt(t,r,e,n){function i(o){return o instanceof e?o:new e(function(u){u(o)})}return new(e||(e=Promise))(function(o,u){function c(l){try{s(n.next(l))}catch(h){u(h)}}function a(l){try{s(n.throw(l))}catch(h){u(h)}}function s(l){l.done?o(l.value):i(l.value).then(c,a)}s((n=n.apply(t,r||[])).next())})}function X(t,r){var e={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,u;return u={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function c(s){return function(l){return a([s,l])}}function a(s){if(n)throw new TypeError("Generator is already executing.");for(;u&&(u=0,s[0]&&(e=0)),e;)try{if(n=1,i&&(o=s[0]&2?i.return:s[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,s[1])).done)return o;switch(i=0,o&&(s=[s[0]&2,o.value]),s[0]){case 0:case 1:o=s;break;case 4:return e.label++,{value:s[1],done:!1};case 5:e.label++,i=s[1],s=[0];continue;case 7:s=e.ops.pop(),e.trys.pop();continue;default:if(o=e.trys,!(o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){e=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){e.label=s[1];break}if(s[0]===6&&e.label<o[1]){e.label=o[1],o=s;break}if(o&&e.label<o[2]){e.label=o[2],e.ops.push(s);break}o[2]&&e.ops.pop(),e.trys.pop();continue}s=r.call(t,e)}catch(l){s=[6,l],i=0}finally{n=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}}function A(t){var r=typeof Symbol=="function"&&Symbol.iterator,e=r&&t[r],n=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")}function k(t,r){var e=typeof Symbol=="function"&&t[Symbol.iterator];if(!e)return t;var n=e.call(t),i,o=[],u;try{for(;(r===void 0||r-- >0)&&!(i=n.next()).done;)o.push(i.value)}catch(c){u={error:c}}finally{try{i&&!i.done&&(e=n.return)&&e.call(n)}finally{if(u)throw u.error}}return o}function j(t,r,e){if(e||arguments.length===2)for(var n=0,i=r.length,o;n<i;n++)(o||!(n in r))&&(o||(o=Array.prototype.slice.call(r,0,n)),o[n]=r[n]);return t.concat(o||Array.prototype.slice.call(r))}function E(t){return this instanceof E?(this.v=t,this):new E(t)}function It(t,r,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=e.apply(t,r||[]),i,o=[];return i={},u("next"),u("throw"),u("return"),i[Symbol.asyncIterator]=function(){return this},i;function u(f){n[f]&&(i[f]=function(d){return new Promise(function(y,v){o.push([f,d,y,v])>1||c(f,d)})})}function c(f,d){try{a(n[f](d))}catch(y){h(o[0][3],y)}}function a(f){f.value instanceof E?Promise.resolve(f.value.v).then(s,l):h(o[0][2],f)}function s(f){c("next",f)}function l(f){c("throw",f)}function h(f,d){f(d),o.shift(),o.length&&c(o[0][0],o[0][1])}}function _t(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=t[Symbol.asyncIterator],e;return r?r.call(t):(t=typeof A=="function"?A(t):t[Symbol.iterator](),e={},n("next"),n("throw"),n("return"),e[Symbol.asyncIterator]=function(){return this},e);function n(o){e[o]=t[o]&&function(u){return new Promise(function(c,a){u=t[o](u),i(c,a,u.done,u.value)})}}function i(o,u,c,a){Promise.resolve(a).then(function(s){o({value:s,done:c})},u)}}function p(t){return typeof t=="function"}function Z(t){var r=function(n){Error.call(n),n.stack=new Error().stack},e=t(r);return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var R=Z(function(t){return function(e){t(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(n,i){return i+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function U(t,r){if(t){var e=t.indexOf(r);0<=e&&t.splice(e,1)}}var P=function(){function t(r){this.initialTeardown=r,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var r,e,n,i,o;if(!this.closed){this.closed=!0;var u=this._parentage;if(u)if(this._parentage=null,Array.isArray(u))try{for(var c=A(u),a=c.next();!a.done;a=c.next()){var s=a.value;s.remove(this)}}catch(v){r={error:v}}finally{try{a&&!a.done&&(e=c.return)&&e.call(c)}finally{if(r)throw r.error}}else u.remove(this);var l=this.initialTeardown;if(p(l))try{l()}catch(v){o=v instanceof R?v.errors:[v]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var f=A(h),d=f.next();!d.done;d=f.next()){var y=d.value;try{H(y)}catch(v){o=o??[],v instanceof R?o=j(j([],k(o)),k(v.errors)):o.push(v)}}}catch(v){n={error:v}}finally{try{d&&!d.done&&(i=f.return)&&i.call(f)}finally{if(n)throw n.error}}}if(o)throw new R(o)}},t.prototype.add=function(r){var e;if(r&&r!==this)if(this.closed)H(r);else{if(r instanceof t){if(r.closed||r._hasParent(this))return;r._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(r)}},t.prototype._hasParent=function(r){var e=this._parentage;return e===r||Array.isArray(e)&&e.includes(r)},t.prototype._addParent=function(r){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(r),e):e?[e,r]:r},t.prototype._removeParent=function(r){var e=this._parentage;e===r?this._parentage=null:Array.isArray(e)&&U(e,r)},t.prototype.remove=function(r){var e=this._finalizers;e&&U(e,r),r instanceof t&&r._removeParent(this)},t.EMPTY=function(){var r=new t;return r.closed=!0,r}(),t}(),N=P.EMPTY;function tt(t){return t instanceof P||t&&"closed"in t&&p(t.remove)&&p(t.add)&&p(t.unsubscribe)}function H(t){p(t)?t():t.unsubscribe()}var et={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},rt={setTimeout:function(t,r){for(var e=[],n=2;n<arguments.length;n++)e[n-2]=arguments[n];return setTimeout.apply(void 0,j([t,r],k(e)))},clearTimeout:function(t){var r=rt.delegate;return(r?.clearTimeout||clearTimeout)(t)},delegate:void 0};function nt(t){rt.setTimeout(function(){throw t})}function $(){}function T(t){t()}var Y=function(t){g(r,t);function r(e){var n=t.call(this)||this;return n.isStopped=!1,e?(n.destination=e,tt(e)&&e.add(n)):n.destination=Ot,n}return r.create=function(e,n,i){return new D(e,n,i)},r.prototype.next=function(e){this.isStopped||this._next(e)},r.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},r.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},r.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},r.prototype._next=function(e){this.destination.next(e)},r.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},r.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},r}(P),Et=Function.prototype.bind;function C(t,r){return Et.call(t,r)}var At=function(){function t(r){this.partialObserver=r}return t.prototype.next=function(r){var e=this.partialObserver;if(e.next)try{e.next(r)}catch(n){O(n)}},t.prototype.error=function(r){var e=this.partialObserver;if(e.error)try{e.error(r)}catch(n){O(n)}else O(r)},t.prototype.complete=function(){var r=this.partialObserver;if(r.complete)try{r.complete()}catch(e){O(e)}},t}(),D=function(t){g(r,t);function r(e,n,i){var o=t.call(this)||this,u;if(p(e)||!e)u={next:e??void 0,error:n??void 0,complete:i??void 0};else{var c;o&&et.useDeprecatedNextContext?(c=Object.create(e),c.unsubscribe=function(){return o.unsubscribe()},u={next:e.next&&C(e.next,c),error:e.error&&C(e.error,c),complete:e.complete&&C(e.complete,c)}):u=e}return o.destination=new At(u),o}return r}(Y);function O(t){nt(t)}function Pt(t){throw t}var Ot={closed:!0,next:$,error:Pt,complete:$},M=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function G(t){return t}function Tt(t){return t.length===0?G:t.length===1?t[0]:function(e){return t.reduce(function(n,i){return i(n)},e)}}var b=function(){function t(r){r&&(this._subscribe=r)}return t.prototype.lift=function(r){var e=new t;return e.source=this,e.operator=r,e},t.prototype.subscribe=function(r,e,n){var i=this,o=jt(r)?r:new D(r,e,n);return T(function(){var u=i,c=u.operator,a=u.source;o.add(c?c.call(o,a):a?i._subscribe(o):i._trySubscribe(o))}),o},t.prototype._trySubscribe=function(r){try{return this._subscribe(r)}catch(e){r.error(e)}},t.prototype.forEach=function(r,e){var n=this;return e=W(e),new e(function(i,o){var u=new D({next:function(c){try{r(c)}catch(a){o(a),u.unsubscribe()}},error:o,complete:i});n.subscribe(u)})},t.prototype._subscribe=function(r){var e;return(e=this.source)===null||e===void 0?void 0:e.subscribe(r)},t.prototype[M]=function(){return this},t.prototype.pipe=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return Tt(r)(this)},t.prototype.toPromise=function(r){var e=this;return r=W(r),new r(function(n,i){var o;e.subscribe(function(u){return o=u},function(u){return i(u)},function(){return n(o)})})},t.create=function(r){return new t(r)},t}();function W(t){var r;return(r=t??et.Promise)!==null&&r!==void 0?r:Promise}function kt(t){return t&&p(t.next)&&p(t.error)&&p(t.complete)}function jt(t){return t&&t instanceof Y||kt(t)&&tt(t)}function Ut(t){return p(t?.lift)}function I(t){return function(r){if(Ut(r))return r.lift(function(e){try{return t(e,this)}catch(n){this.error(n)}});throw new TypeError("Unable to lift unknown Observable type")}}function S(t,r,e,n,i){return new Ft(t,r,e,n,i)}var Ft=function(t){g(r,t);function r(e,n,i,o,u,c){var a=t.call(this,e)||this;return a.onFinalize=u,a.shouldUnsubscribe=c,a._next=n?function(s){try{n(s)}catch(l){e.error(l)}}:t.prototype._next,a._error=o?function(s){try{o(s)}catch(l){e.error(l)}finally{this.unsubscribe()}}:t.prototype._error,a._complete=i?function(){try{i()}catch(s){e.error(s)}finally{this.unsubscribe()}}:t.prototype._complete,a}return r.prototype.unsubscribe=function(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var n=this.closed;t.prototype.unsubscribe.call(this),!n&&((e=this.onFinalize)===null||e===void 0||e.call(this))}},r}(Y),Rt=Z(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),Ct=function(t){g(r,t);function r(){var e=t.call(this)||this;return e.closed=!1,e.currentObservers=null,e.observers=[],e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return r.prototype.lift=function(e){var n=new J(this,this);return n.operator=e,n},r.prototype._throwIfClosed=function(){if(this.closed)throw new Rt},r.prototype.next=function(e){var n=this;T(function(){var i,o;if(n._throwIfClosed(),!n.isStopped){n.currentObservers||(n.currentObservers=Array.from(n.observers));try{for(var u=A(n.currentObservers),c=u.next();!c.done;c=u.next()){var a=c.value;a.next(e)}}catch(s){i={error:s}}finally{try{c&&!c.done&&(o=u.return)&&o.call(u)}finally{if(i)throw i.error}}}})},r.prototype.error=function(e){var n=this;T(function(){if(n._throwIfClosed(),!n.isStopped){n.hasError=n.isStopped=!0,n.thrownError=e;for(var i=n.observers;i.length;)i.shift().error(e)}})},r.prototype.complete=function(){var e=this;T(function(){if(e._throwIfClosed(),!e.isStopped){e.isStopped=!0;for(var n=e.observers;n.length;)n.shift().complete()}})},r.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(r.prototype,"observed",{get:function(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0},enumerable:!1,configurable:!0}),r.prototype._trySubscribe=function(e){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,e)},r.prototype._subscribe=function(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)},r.prototype._innerSubscribe=function(e){var n=this,i=this,o=i.hasError,u=i.isStopped,c=i.observers;return o||u?N:(this.currentObservers=null,c.push(e),new P(function(){n.currentObservers=null,U(c,e)}))},r.prototype._checkFinalizedStatuses=function(e){var n=this,i=n.hasError,o=n.thrownError,u=n.isStopped;i?e.error(o):u&&e.complete()},r.prototype.asObservable=function(){var e=new b;return e.source=this,e},r.create=function(e,n){return new J(e,n)},r}(b),J=function(t){g(r,t);function r(e,n){var i=t.call(this)||this;return i.destination=e,i.source=n,i}return r.prototype.next=function(e){var n,i;(i=(n=this.destination)===null||n===void 0?void 0:n.next)===null||i===void 0||i.call(n,e)},r.prototype.error=function(e){var n,i;(i=(n=this.destination)===null||n===void 0?void 0:n.error)===null||i===void 0||i.call(n,e)},r.prototype.complete=function(){var e,n;(n=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||n===void 0||n.call(e)},r.prototype._subscribe=function(e){var n,i;return(i=(n=this.source)===null||n===void 0?void 0:n.subscribe(e))!==null&&i!==void 0?i:N},r}(Ct),it={now:function(){return(it.delegate||Date).now()},delegate:void 0},Lt=function(t){g(r,t);function r(e,n){return t.call(this)||this}return r.prototype.schedule=function(e,n){return this},r}(P),V={setInterval:function(t,r){for(var e=[],n=2;n<arguments.length;n++)e[n-2]=arguments[n];return setInterval.apply(void 0,j([t,r],k(e)))},clearInterval:function(t){var r=V.delegate;return(r?.clearInterval||clearInterval)(t)},delegate:void 0},Dt=function(t){g(r,t);function r(e,n){var i=t.call(this,e,n)||this;return i.scheduler=e,i.work=n,i.pending=!1,i}return r.prototype.schedule=function(e,n){var i;if(n===void 0&&(n=0),this.closed)return this;this.state=e;var o=this.id,u=this.scheduler;return o!=null&&(this.id=this.recycleAsyncId(u,o,n)),this.pending=!0,this.delay=n,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(u,this.id,n),this},r.prototype.requestAsyncId=function(e,n,i){return i===void 0&&(i=0),V.setInterval(e.flush.bind(e,this),i)},r.prototype.recycleAsyncId=function(e,n,i){if(i===void 0&&(i=0),i!=null&&this.delay===i&&this.pending===!1)return n;n!=null&&V.clearInterval(n)},r.prototype.execute=function(e,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var i=this._execute(e,n);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},r.prototype._execute=function(e,n){var i=!1,o;try{this.work(e)}catch(u){i=!0,o=u||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),o},r.prototype.unsubscribe=function(){if(!this.closed){var e=this,n=e.id,i=e.scheduler,o=i.actions;this.work=this.state=this.scheduler=null,this.pending=!1,U(o,this),n!=null&&(this.id=this.recycleAsyncId(i,n,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},r}(Lt),K=function(){function t(r,e){e===void 0&&(e=t.now),this.schedulerActionCtor=r,this.now=e}return t.prototype.schedule=function(r,e,n){return e===void 0&&(e=0),new this.schedulerActionCtor(this,r).schedule(n,e)},t.now=it.now,t}(),Vt=function(t){g(r,t);function r(e,n){n===void 0&&(n=K.now);var i=t.call(this,e,n)||this;return i.actions=[],i._active=!1,i}return r.prototype.flush=function(e){var n=this.actions;if(this._active){n.push(e);return}var i;this._active=!0;do if(i=e.execute(e.state,e.delay))break;while(e=n.shift());if(this._active=!1,i){for(;e=n.shift();)e.unsubscribe();throw i}},r}(K),q=new Vt(Dt),Yt=q;function ot(t){return t&&p(t.schedule)}function ut(t){return t[t.length-1]}function B(t){return ot(ut(t))?t.pop():void 0}function oe(t,r){return typeof ut(t)=="number"?t.pop():r}var st=function(t){return t&&typeof t.length=="number"&&typeof t!="function"};function ct(t){return p(t?.then)}function at(t){return p(t[M])}function lt(t){return Symbol.asyncIterator&&p(t?.[Symbol.asyncIterator])}function ft(t){return new TypeError("You provided "+(t!==null&&typeof t=="object"?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function Mt(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var ht=Mt();function vt(t){return p(t?.[ht])}function dt(t){return It(this,arguments,function(){var e,n,i,o;return X(this,function(u){switch(u.label){case 0:e=t.getReader(),u.label=1;case 1:u.trys.push([1,,9,10]),u.label=2;case 2:return[4,E(e.read())];case 3:return n=u.sent(),i=n.value,o=n.done,o?[4,E(void 0)]:[3,5];case 4:return[2,u.sent()];case 5:return[4,E(i)];case 6:return[4,u.sent()];case 7:return u.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}})})}function pt(t){return p(t?.getReader)}function _(t){if(t instanceof b)return t;if(t!=null){if(at(t))return Gt(t);if(st(t))return qt(t);if(ct(t))return Bt(t);if(lt(t))return yt(t);if(vt(t))return zt(t);if(pt(t))return Ht(t)}throw ft(t)}function Gt(t){return new b(function(r){var e=t[M]();if(p(e.subscribe))return e.subscribe(r);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function qt(t){return new b(function(r){for(var e=0;e<t.length&&!r.closed;e++)r.next(t[e]);r.complete()})}function Bt(t){return new b(function(r){t.then(function(e){r.closed||(r.next(e),r.complete())},function(e){return r.error(e)}).then(null,nt)})}function zt(t){return new b(function(r){var e,n;try{for(var i=A(t),o=i.next();!o.done;o=i.next()){var u=o.value;if(r.next(u),r.closed)return}}catch(c){e={error:c}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}r.complete()})}function yt(t){return new b(function(r){$t(t,r).catch(function(e){return r.error(e)})})}function Ht(t){return yt(dt(t))}function $t(t,r){var e,n,i,o;return xt(this,void 0,void 0,function(){var u,c;return X(this,function(a){switch(a.label){case 0:a.trys.push([0,5,6,11]),e=_t(t),a.label=1;case 1:return[4,e.next()];case 2:if(n=a.sent(),!!n.done)return[3,4];if(u=n.value,r.next(u),r.closed)return[2];a.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return c=a.sent(),i={error:c},[3,11];case 6:return a.trys.push([6,,9,10]),n&&!n.done&&(o=e.return)?[4,o.call(e)]:[3,8];case 7:a.sent(),a.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return r.complete(),[2]}})})}function x(t,r,e,n,i){n===void 0&&(n=0),i===void 0&&(i=!1);var o=r.schedule(function(){e(),i?t.add(this.schedule(null,n)):this.unsubscribe()},n);if(t.add(o),!i)return o}function bt(t,r){return r===void 0&&(r=0),I(function(e,n){e.subscribe(S(n,function(i){return x(n,t,function(){return n.next(i)},r)},function(){return x(n,t,function(){return n.complete()},r)},function(i){return x(n,t,function(){return n.error(i)},r)}))})}function mt(t,r){return r===void 0&&(r=0),I(function(e,n){n.add(t.schedule(function(){return e.subscribe(n)},r))})}function Wt(t,r){return _(t).pipe(mt(r),bt(r))}function Jt(t,r){return _(t).pipe(mt(r),bt(r))}function Kt(t,r){return new b(function(e){var n=0;return r.schedule(function(){n===t.length?e.complete():(e.next(t[n++]),e.closed||this.schedule())})})}function Qt(t,r){return new b(function(e){var n;return x(e,r,function(){n=t[ht](),x(e,r,function(){var i,o,u;try{i=n.next(),o=i.value,u=i.done}catch(c){e.error(c);return}u?e.complete():e.next(o)},0,!0)}),function(){return p(n?.return)&&n.return()}})}function wt(t,r){if(!t)throw new Error("Iterable cannot be null");return new b(function(e){x(e,r,function(){var n=t[Symbol.asyncIterator]();x(e,r,function(){n.next().then(function(i){i.done?e.complete():e.next(i.value)})},0,!0)})})}function Xt(t,r){return wt(dt(t),r)}function Zt(t,r){if(t!=null){if(at(t))return Wt(t,r);if(st(t))return Kt(t,r);if(ct(t))return Jt(t,r);if(lt(t))return wt(t,r);if(vt(t))return Qt(t,r);if(pt(t))return Xt(t,r)}throw ft(t)}function St(t,r){return r?Zt(t,r):_(t)}function ue(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var e=B(t);return St(t,e)}function Nt(t){return t instanceof Date&&!isNaN(t)}function te(t,r){return I(function(e,n){var i=0;e.subscribe(S(n,function(o){n.next(t.call(r,o,i++))}))})}function ee(t,r,e,n,i,o,u,c){var a=[],s=0,l=0,h=!1,f=function(){h&&!a.length&&!s&&r.complete()},d=function(v){return s<n?y(v):a.push(v)},y=function(v){s++;var w=!1;_(e(v,l++)).subscribe(S(r,function(m){r.next(m)},function(){w=!0},void 0,function(){if(w)try{s--;for(var m=function(){var F=a.shift();u||y(F)};a.length&&s<n;)m();f()}catch(F){r.error(F)}}))};return t.subscribe(S(r,d,function(){h=!0,f()})),function(){}}function gt(t,r,e){return e===void 0&&(e=1/0),p(r)?gt(function(n,i){return te(function(o,u){return r(n,o,i,u)})(_(t(n,i)))},e):(typeof r=="number"&&(e=r),I(function(n,i){return ee(n,i,t,e)}))}function re(t){return t===void 0&&(t=1/0),gt(G,t)}function ne(){return re(1)}function Q(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return ne()(St(t,B(t)))}function z(t,r,e){t===void 0&&(t=0),e===void 0&&(e=Yt);var n=-1;return r!=null&&(ot(r)?e=r:n=r),new b(function(i){var o=Nt(t)?+t-e.now():t;o<0&&(o=0);var u=0;return e.schedule(function(){i.closed||(i.next(u++),0<=n?this.schedule(void 0,n):i.complete())},o)})}function se(t,r){return t===void 0&&(t=0),r===void 0&&(r=q),t<0&&(t=0),z(t,t,r)}function ce(t){t===void 0&&(t=1/0);var r;t&&typeof t=="object"?r=t:r={count:t};var e=r.count,n=e===void 0?1/0:e,i=r.delay,o=r.resetOnSuccess,u=o===void 0?!1:o;return n<=0?G:I(function(c,a){var s=0,l,h=function(){var f=!1;l=c.subscribe(S(a,function(d){u&&(s=0),a.next(d)},void 0,function(d){if(s++<n){var y=function(){l?(l.unsubscribe(),l=null,h()):f=!0};if(i!=null){var v=typeof i=="number"?z(i):_(i(d,s)),w=S(a,function(){w.unsubscribe(),y()},function(){a.complete()});v.subscribe(w)}else y()}else a.error(d)})),f&&(l.unsubscribe(),l=null,h())};h()})}function ae(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var e=B(t);return I(function(n,i){(e?Q(t,n,e):Q(t,n)).subscribe(i)})}function ie(t,r){return I(function(e,n){var i=r??{},o=i.leading,u=o===void 0?!0:o,c=i.trailing,a=c===void 0?!1:c,s=!1,l=null,h=null,f=!1,d=function(){h?.unsubscribe(),h=null,a&&(w(),f&&n.complete())},y=function(){h=null,f&&n.complete()},v=function(m){return h=_(t(m)).subscribe(S(n,d,y))},w=function(){if(s){s=!1;var m=l;l=null,n.next(m),!f&&v(m)}};e.subscribe(S(n,function(m){s=!0,l=m,!(h&&!h.closed)&&(u?w():v(m))},function(){f=!0,!(a&&s&&h&&!h.closed)&&n.complete()}))})}function le(t,r,e){r===void 0&&(r=q);var n=z(t,r);return ie(function(){return n},e)}export{Ct as S,g as _,oe as a,j as b,k as c,it as d,D as e,St as f,S as g,se as h,_ as i,te as j,ue as k,xt as l,re as m,X as n,I as o,B as p,ce as r,ae as s,le as t};
