(this.webpackJsonpinstabug=this.webpackJsonpinstabug||[]).push([[3],{40:function(t,e,r){},41:function(t,e,r){t.exports=r(42)},42:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(T){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new G(n||[]);return a._invoke=function(t,e,r){var n=l;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return k()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=h(t,e,r);if("normal"===u.type){if(n=r.done?d:f,u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(T){return{type:"throw",arg:T}}}t.wrap=s;var l="suspendedStart",f="suspendedYield",p="executing",d="completed",m={};function v(){}function y(){}function g(){}var b={};b[a]=function(){return this};var w=Object.getPrototypeOf,j=w&&w(w(S([])));j&&j!==r&&n.call(j,a)&&(b=j);var x=g.prototype=v.prototype=Object.create(b);function O(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,a,i,c){var u=h(t[o],t,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"===typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=h(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function S(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:k}}function k(){return{value:e,done:!0}}return y.prototype=x.constructor=g,g.constructor=y,y.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},O(L.prototype),L.prototype[i]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new L(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},O(x),u(x,c,"Generator"),x[a]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:S(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},43:function(t,e,r){"use strict";function n(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,u,"next",t)}function u(t){n(i,o,a,c,u,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return o}))},44:function(t,e,r){"use strict";r.d(e,"a",(function(){return u})),r.d(e,"b",(function(){return s}));var n=r(41),o=r.n(n),a=r(43),i=[{email:"mohamed@instabug.com",password:"12345678"},{email:"mohamed1@instabug.com",password:"12345678"},{email:"mohamed2@instabug.com",password:"12345678"},{email:"mohamed3@instabug.com",password:"12345678"},{email:"mohamed4@instabug.com",password:"12345678"},{email:"mohamed5@instabug.com",password:"12345678"},{email:"mohamed6@instabug.com",password:"12345678"},{email:"mohamed7@instabug.com",password:"12345678"}],c=function(t,e){var r=null;return i.forEach((function(n){n.email==t&&n.password==e&&(r=n)})),{authenticatedUser:r}},u=function(t,e){return function(){var r=Object(a.a)(o.a.mark((function r(n){var a;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n({type:"LOGIN_REQUEST"}),r.next=3,c(t,e);case 3:(a=r.sent)&&n({type:"LOGIN_SUCCESS",payload:a.authenticatedUser}),null===a.authenticatedUser&&("Your email and/or password are incorrect",n({type:"LOGIN_FAIL",payload:"Your email and/or password are incorrect"}));case 6:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},s=function(){return function(){var t=Object(a.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e({type:"LOGOUT_REQUEST"}),null,e({type:"LOGOUT_SUCCESS"});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},45:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));r(0);var n=r(21),o=(r(40),r(9)),a=r.p+"static/media/logo.4c164b27.svg",i=r(3),c=function(t){var e=t.onLogout,r=t.btnText;return Object(i.jsxs)("header",{className:"header_container",children:[Object(i.jsx)("div",{className:"icon_container",children:Object(i.jsx)(n.b,{to:o.b,"aria-label":"instaGo logo",children:Object(i.jsx)("img",{src:a,alt:"logo",className:""})})}),Object(i.jsx)("div",{className:"btn_container",children:Object(i.jsx)("button",{className:"btn_header",onClick:e,children:r})})]})}},51:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return f}));var n=r(22),o=r(0),a=r(13),i=(r(40),r(3)),c=function(t){var e=t.h1,r=t.h2,n=t.img;return Object(i.jsxs)("div",{className:"main_container",children:[Object(i.jsxs)("div",{className:"container_text",children:[Object(i.jsx)("h1",{className:"header",children:e}),Object(i.jsxs)("h2",{className:"para",children:["Your Email : ",r]})]}),Object(i.jsx)("div",{className:"container_img",children:Object(i.jsx)("img",{src:n})})]})},u=r(23),s=r(44),h=r.p+"static/media/home.b6a43782.svg",l=r(45);function f(){var t=Object(u.a)().activeUser,e=Object(o.useState)(""),r=Object(n.a)(e,2),f=r[0],p=r[1],d=Object(a.b)();Object(o.useEffect)((function(){p(t?t.email:"")}));return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l.a,{onLogout:function(t){t.preventDefault(),d(Object(s.b)())},btnText:"LOGOUT"}),Object(i.jsx)(c,{h1:"Hello ,",h2:f,img:h})]})}}}]);
//# sourceMappingURL=3.be68c383.chunk.js.map