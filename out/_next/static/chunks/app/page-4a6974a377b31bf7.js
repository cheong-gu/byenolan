(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9457:function(n,t,e){"use strict";var r=e(2265);function i(n){return Array.prototype.slice.call(n)}function a(n,t){var e=Math.floor(n);return e===t||e+1===t?n:t}function o(){return Date.now()}function u(n,t,e){if(t="data-keen-slider-"+t,null===e)return n.removeAttribute(t);n.setAttribute(t,e||"")}function s(n,t){return t=t||document,"function"==typeof n&&(n=n(t)),Array.isArray(n)?n:"string"==typeof n?i(t.querySelectorAll(n)):n instanceof HTMLElement?[n]:n instanceof NodeList?i(n):[]}function c(n){n.raw&&(n=n.raw),n.cancelable&&!n.defaultPrevented&&n.preventDefault()}function d(n){n.raw&&(n=n.raw),n.stopPropagation&&n.stopPropagation()}function l(){var n=[];return{add:function(t,e,r,i){t.addListener?t.addListener(r):t.addEventListener(e,r,i),n.push([t,e,r,i])},input:function(n,t,e,r){this.add(n,t,function(n){n.nativeEvent&&(n=n.nativeEvent);var t=n.changedTouches||[],r=n.targetTouches||[],i=n.detail&&n.detail.x?n.detail:null;return e({id:i?i.identifier?i.identifier:"i":r[0]?r[0]?r[0].identifier:"e":"d",idChanged:i?i.identifier?i.identifier:"i":t[0]?t[0]?t[0].identifier:"e":"d",raw:n,x:i&&i.x?i.x:r[0]?r[0].screenX:i?i.x:n.pageX,y:i&&i.y?i.y:r[0]?r[0].screenY:i?i.y:n.pageY})},r)},purge:function(){n.forEach(function(n){n[0].removeListener?n[0].removeListener(n[2]):n[0].removeEventListener(n[1],n[2],n[3])}),n=[]}}}function f(n,t,e){return Math.min(Math.max(n,t),e)}function p(n){return(n>0?1:0)-(n<0?1:0)||+n}function g(n){var t=n.getBoundingClientRect();return{height:a(t.height,n.offsetHeight),width:a(t.width,n.offsetWidth)}}function h(n,t,e,r){var i=n&&n[t];return null==i?e:r&&"function"==typeof i?i():i}function v(n){return Math.round(1e6*n)/1e6}var m=function(){return(m=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var i in t=arguments[e])Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n}).apply(this,arguments)};function b(n,t,e){if(e||2==arguments.length)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return n.concat(r||Array.prototype.slice.call(t))}function k(n){var t,e,r,i,a,o,u,s;function c(n){return 1-Math.pow(1-n,3)}function d(){return r?n.track.velocity():0}function l(n,t){void 0===t&&(t=1e3);var e=147e-9+(n=Math.abs(n))/t;return{dist:Math.pow(n,2)/e,dur:n/e}}function g(){var t=n.track.details;t&&(a=t.min,o=t.max,u=t.minIdx,s=t.maxIdx)}function h(){n.animator.stop()}n.on("updated",g),n.on("optionsChanged",g),n.on("created",g),n.on("dragStarted",function(){r=!1,h(),t=e=n.track.details.abs}),n.on("dragChecked",function(){r=!0}),n.on("dragEnded",function(){var r,g,v,m,b,k,x=n.options.mode;"snap"===x&&(r=n.track,v=(g=n.track.details).position,m=p(d()),(v>o||v<a)&&(m=0),b=t+m,0===g.slides[r.absToRel(b)].portion&&(b-=m),t!==e&&(b=e),p(r.idxToDist(b,!0))!==m&&(b+=m),b=f(b,u,s),k=r.idxToDist(b,!0),n.animator.start([{distance:k,duration:500,easing:function(n){return 1+--n*n*n*n*n}}])),"free"!==x&&"free-snap"!==x||function(){h();var t="free-snap"===n.options.mode,e=n.track,r=d();i=p(r);var g=n.track.details,v=[];if(r||!t){var m=l(r),b=m.dist,k=m.dur;if(k*=2,b*=i,t){var x=e.idxToDist(e.distToIdx(b),!0);x&&(b=x)}v.push({distance:b,duration:k,easing:c});var y=g.position,w=y+b;if(w<a||w>o){var M=w<a?a-y:o-y,_=0,T=r;if(p(M)===i){var j=Math.min(Math.abs(M)/Math.abs(b),1),E=(1-Math.pow(1-j,1/3))*k;v[0].earlyExit=E,T=r*(1-j)}else v[0].earlyExit=0,_+=M;var C=l(T,100),z=C.dist*i;n.options.rubberband&&(v.push({distance:z,duration:2*C.dur,easing:c}),v.push({distance:-z+_,duration:500,easing:c}))}n.animator.start(v)}else n.moveToIdx(f(g.abs,u,s),!0,{duration:500,easing:function(n){return 1+--n*n*n*n*n}})}()}),n.on("dragged",function(){e=n.track.details.abs})}function x(n){var t,e,r,i,a,o,u,g,h,v,m,b,k,x,y,w,M,_,T=l();function j(t){if(o&&g===t.id){var s=N(t);if(h){if(!z(t))return C(t);v=s,h=!1,n.emit("dragChecked")}if(w)return v=s;c(t);var l=function(t){if(M===-1/0&&_===1/0)return t;var r=n.track.details,o=r.length,u=r.position,s=f(t,M-u,_-u);if(0===o)return 0;if(!n.options.rubberband)return s;if(u<=_&&u>=M||u<M&&e>0||u>_&&e<0)return t;var c=Math.max(0,1-Math.abs((u<M?u-M:u-_)/o*(i*o))/a*2);return c*c*t}(u(v-s)/i*r);e=p(l);var k=n.track.details.position;(k>M&&k<_||k===M&&e>0||k===_&&e<0)&&d(t),m+=l,!b&&Math.abs(m*i)>5&&(b=!0),n.track.add(l),v=s,n.emit("dragged")}}function E(t){!o&&n.track.details&&n.track.details.length&&(m=0,o=!0,b=!1,h=!0,g=t.id,z(t),v=N(t),n.emit("dragStarted"))}function C(t){o&&g===t.idChanged&&(o=!1,n.emit("dragEnded"))}function z(n){var t=I(),e=t?n.y:n.x,r=t?n.x:n.y,i=void 0!==k&&void 0!==x&&Math.abs(x-r)<=Math.abs(k-e);return k=e,x=r,i}function N(n){return I()?n.y:n.x}function I(){return n.options.vertical}function O(){i=n.size,a=I()?window.innerHeight:window.innerWidth;var t=n.track.details;t&&(M=t.min,_=t.max)}function A(n){b&&(d(n),c(n))}function L(){if(T.purge(),n.options.drag&&!n.options.disabled){u="function"==typeof(i=n.options.dragSpeed||1)?i:function(n){return n*i},r=n.options.rtl?-1:1,O(),t=n.container,e="data-keen-slider-clickable",s("[".concat(e,"]:not([").concat(e,"=false])"),t).map(function(n){T.add(n,"dragstart",d),T.add(n,"mousedown",d),T.add(n,"touchstart",d)}),T.add(t,"dragstart",function(n){c(n)}),T.add(t,"click",A,{capture:!0}),T.input(t,"ksDragStart",E),T.input(t,"ksDrag",j),T.input(t,"ksDragEnd",C),T.input(t,"mousedown",E),T.input(t,"mousemove",j),T.input(t,"mouseleave",C),T.input(t,"mouseup",C),T.input(t,"touchstart",E,{passive:!0}),T.input(t,"touchmove",j,{passive:!1}),T.input(t,"touchend",C),T.input(t,"touchcancel",C),T.add(window,"wheel",function(n){o&&c(n)});var e,i,a="data-keen-slider-scrollable";s("[".concat(a,"]:not([").concat(a,"=false])"),n.container).map(function(n){var t;T.input(n,"touchstart",function(n){t=N(n),w=!0,y=!0},{passive:!0}),T.input(n,"touchmove",function(e){var r=I(),i=r?n.scrollHeight-n.clientHeight:n.scrollWidth-n.clientWidth,a=t-N(e),o=r?n.scrollTop:n.scrollLeft,u=r&&"scroll"===n.style.overflowY||!r&&"scroll"===n.style.overflowX;if(t=N(e),(a<0&&o>0||a>0&&o<i)&&y&&u)return w=!0;y=!1,c(e),w=!1}),T.input(n,"touchend",function(){w=!1})})}}n.on("updated",O),n.on("optionsChanged",L),n.on("created",L),n.on("destroyed",T.purge)}function y(n){var t,e,r=null;function i(t,e,r){n.animator.active?o(t,e,r):requestAnimationFrame(function(){return o(t,e,r)})}function a(){i(!1,!1,e)}function o(e,i,a){var o=0,u=n.size,d=n.track.details;if(d&&t){var l=d.slides;t.forEach(function(n,t){if(e)!r&&i&&s(n,null,a),c(n,null,a);else{if(!l[t])return;var d=l[t].size*u;!r&&i&&s(n,d,a),c(n,l[t].distance*u-o,a),o+=d}})}}function u(t){return"performance"===n.options.renderMode?Math.round(t):t}function s(n,t,e){var r=e?"height":"width";null!==t&&(t=u(t)+"px"),n.style["min-"+r]=t,n.style["max-"+r]=t}function c(n,t,e){if(null!==t){t=u(t);var r=e?t:0;t="translate3d(".concat(e?0:t,"px, ").concat(r,"px, 0)")}n.style.transform=t,n.style["-webkit-transform"]=t}function d(){t&&(o(!0,!0,e),t=null),n.on("detailsChanged",a,!0)}function l(){i(!1,!0,e)}function f(){d(),e=n.options.vertical,n.options.disabled||"custom"===n.options.renderMode||(r="auto"===h(n.options.slides,"perView",null),n.on("detailsChanged",a),(t=n.slides).length&&l())}n.on("created",f),n.on("optionsChanged",f),n.on("beforeOptionsChanged",function(){d()}),n.on("updated",l),n.on("destroyed",d)}var w=function(n,t,e){try{var r,i,a,c;return i=b([(r={drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"},function(t){var e,i,a,o,c,d,f=l();function p(n){var e;u(t.container,"reverse","rtl"!==(e=t.container,window.getComputedStyle(e,null).getPropertyValue("direction"))||n?null:""),u(t.container,"v",t.options.vertical&&!n?"":null),u(t.container,"disabled",t.options.disabled&&!n?"":null)}function v(){b()&&w()}function b(){var n=null;if(o.forEach(function(t){t.matches&&(n=t.__media)}),n===e)return!1;e||t.emit("beforeOptionsChanged"),e=n;var r=n?a.breakpoints[n]:a;return t.options=m(m({},a),r),p(),E(),C(),_(),!0}function k(){return t.options.trackConfig.length}function x(n){for(var u in e=!1,a=m(m({},r),n),f.purge(),i=t.size,o=[],a.breakpoints||[]){var s=window.matchMedia(u);s.__media=u,o.push(s),f.add(s,"change",v)}f.add(window,"orientationchange",j),f.add(window,"resize",T),b()}function y(n){t.animator.stop();var e=t.track.details;t.track.init(null!=n?n:e?e.abs:0)}function w(n){y(n),t.emit("optionsChanged")}function M(n,e){if(n)return x(n),void w(e);E(),C();var r=k();_(),k()!==r?w(e):y(e),t.emit("updated")}function _(){var n=t.options.slides;if("function"==typeof n)return t.options.trackConfig=n(t.size,t.slides);for(var e=t.slides,r=e.length,i="number"==typeof n?n:h(n,"number",r,!0),a=[],o=h(n,"perView",1,!0),u=h(n,"spacing",0,!0)/t.size||0,s="auto"===o?u:u/o,c=h(n,"origin","auto"),d=0,l=0;l<i;l++){var f="auto"===o?function(n){var e=g(n);return(t.options.vertical?e.height:e.width)/t.size||1}(e[l]):1/o-u+s,p="center"===c?.5-f/2:"auto"===c?0:c;a.push({origin:p,size:f,spacing:u}),d+=f}if(d+=u*(i-1),"auto"===c&&!t.options.loop&&1!==o){var v=0;a.map(function(n){var t=d-v;return v+=n.size+u,t>=1||(n.origin=1-t-(d>1?0:1-d)),n})}t.options.trackConfig=a}function T(){E();var n=t.size;t.options.disabled||n===i||(i=n,M())}function j(){T(),setTimeout(T,500),setTimeout(T,2e3)}function E(){var n=g(t.container);t.size=(t.options.vertical?n.height:n.width)||1}function C(){t.slides=s(t.options.selector,t.container)}t.container=(d=s(n,c||document)).length?d[0]:null,t.destroy=function(){f.purge(),t.emit("destroyed"),p(!0)},t.prev=function(){t.moveToIdx(t.track.details.abs-1,!0)},t.next=function(){t.moveToIdx(t.track.details.abs+1,!0)},t.update=M,x(t.options)}),y,x,k],e||[],!0),c={},a={emit:function(n){c[n]&&c[n].forEach(function(n){n(a)});var t=a.options&&a.options[n];t&&t(a)},moveToIdx:function(n,t,e){var r=a.track.idxToDist(n,t);if(r){var i=a.options.defaultAnimation;a.animator.start([{distance:r,duration:h(e||i,"duration",500),easing:h(e||i,"easing",function(n){return 1+--n*n*n*n*n})}])}},on:function(n,t,e){void 0===e&&(e=!1),c[n]||(c[n]=[]);var r=c[n].indexOf(t);r>-1?e&&delete c[n][r]:e||c[n].push(t)},options:t},function(){if(a.track=function(n){var t,e,r,i,a,u,s,c,d,l,g,m,k,x,y=1/0,w=[],M=null,_=0;function T(n){O(_+n)}function j(n){var t=E(_+n).abs;return N(t)===t?t:null}function E(n){var t=Math.floor(Math.abs(v(n/e))),r=v((n%e+e)%e);r===e&&(r=0);var i=p(n),a=s.indexOf(b([],s,!0).reduce(function(n,t){return Math.abs(t-r)<Math.abs(n-r)?t:n})),o=a;return i<0&&t++,a===u&&(o=0,t+=i>0?1:-1),{abs:o+t*u*i,origin:a,rel:o}}function C(n,t,e){if(t||!i.loop)return z(n,e);if(N(n)!==n)return null;var r,a=E(null!=e?e:_),o=a.abs,s=n-a.rel,c=o+s;r=z(c);var d=z(c-u*p(s));return(null!==d&&Math.abs(d)<Math.abs(r)||null===r)&&(r=d),v(r)}function z(n,t){if(null==t&&(t=v(_)),r=n,N(r)!==r||null===n)return null;n=Math.round(n);var r,i=E(t),a=i.abs,o=i.rel,c=i.origin,d=I(n),l=(t%e+e)%e,f=s[c],p=Math.floor((n-(a-o))/u)*e;return v(f-l-f+s[d]+p+(c===u?e:0))}function N(n){return f(n,d,l)}function I(n){return(n%u+u)%u}function O(t){e=t-_,w.push({distance:e,timestamp:o()}),w.length>6&&(w=w.slice(-6)),_=v(t);var e,r=A().abs;if(r!==M){var i=null!==M;M=r,i&&n.emit("slideChanged")}}function A(o){var s=o?null:function(){if(u){var n=i.loop,t=n?(_%e+e)%e:_,o=(n?_%e:_)-a[0][2],s=0-(o<0&&n?e-Math.abs(o):o),c=0,f=E(_),h=f.abs,v=f.rel,b=a[v][2],y=a.map(function(t,r){var a=s+c;(a<0-t[0]||a>1)&&(a+=(Math.abs(a)>e-1&&n?e:0)*p(-a));var o=r-v,d=p(o),l=o+h;n&&(-1===d&&a>b&&(l+=u),1===d&&a<b&&(l-=u),null!==g&&l<g&&(a+=e),null!==m&&l>m&&(a-=e));var f=a+t[0]+t[1],k=Math.max(a>=0&&f<=1?1:f<0||a>1?0:a<0?Math.min(1,(t[0]+a)/t[0]):(1-a)/t[0],0);return c+=t[0]+t[1],{abs:l,distance:i.rtl?-1*a+1-t[0]:a,portion:k,size:t[0]}});return v=I(h=N(h)),{abs:N(h),length:r,max:x,maxIdx:l,min:k,minIdx:d,position:_,progress:n?t/e:_/r,rel:v,slides:y,slidesLength:e}}}();return t.details=s,n.emit("detailsChanged"),s}return t={absToRel:I,add:T,details:null,distToIdx:j,idxToDist:C,init:function(t){var o,f,p,b;if(function(){if(u=(a=((i=n.options).trackConfig||[]).map(function(n){return[h(n,"size",1),h(n,"spacing",0),h(n,"origin",0)]})).length){e=v(a.reduce(function(n,t){return n+t[0]+t[1]},0));var t,o=u-1;r=v(e+a[0][2]-a[o][0]-a[o][2]-a[o][1]),s=a.reduce(function(n,e){if(!n)return[0];var r=a[n.length-1],i=n[n.length-1]+(r[0]+r[2])+r[1];return i-=e[2],n[n.length-1]>i&&(i=n[n.length-1]),i=v(i),n.push(i),(!t||t<i)&&(c=n.length-1),t=i,n},null),0===r&&(c=0),s.push(v(e))}}(),!u)return A(!0);o=n.options.range,g=d=(f=n.options.loop)?h(f,"min",-1/0):0,m=l=f?h(f,"max",y):c,p=h(o,"min",null),b=h(o,"max",null),null!==p&&(d=p),null!==b&&(l=b),k=d===-1/0?d:n.track.idxToDist(d||0,!0,0),x=l===y?l:C(l,!0,0),null===b&&(m=l),h(o,"align",!1)&&l!==y&&0===a[I(l)][2]&&(x-=1-a[I(l)][0],l=j(x-_)),k=v(k),x=v(x),Number(t)===t?T(z(N(t))):A()},to:O,velocity:function(){var n=o(),t=w.reduce(function(t,e){var r=e.distance,i=e.timestamp;return n-i>200||(p(r)!==p(t.distance)&&t.distance&&(t={distance:0,lastTimestamp:0,time:0}),t.time&&(t.distance+=r),t.lastTimestamp&&(t.time+=i-t.lastTimestamp),t.lastTimestamp=i),t},{distance:0,lastTimestamp:0,time:0});return t.distance/t.time||0}}}(a),a.animator=function(n){var t,e,r,i,a,o;function u(n){t.active=n}function s(n){t.targetIdx=n}function c(){var t;t=a,window.cancelAnimationFrame(t),u(!1),s(null),o&&n.emit("animationStopped"),o=null}return t={active:!1,start:function(t){if(c(),n.track.details){var d=0,l=n.track.details.position;e=0,r=0,i=t.map(function(n){var t,e=Number(l),i=null!==(t=n.earlyExit)&&void 0!==t?t:n.duration,a=n.easing,o=n.distance*a(i/n.duration)||0;l+=o;var u=r;return r+=i,d+=o,[e,n.distance,u,r,n.duration,a]}),s(n.track.distToIdx(d)),function t(){a=window.requestAnimationFrame(function a(c){o||(o=c),u(!0);var d=c-o;d>r&&(d=r);var l=i[e];if(l[3]<d)return e++,a(c);var f=l[2],p=l[4],g=l[0],h=l[1]*(0,l[5])(0===p?1:(d-f)/p);if(h&&n.track.to(g+h),d<r)return t();o=null,u(!1),s(null),n.emit("animationEnded")})}(),n.emit("animationStarted")}},stop:c,targetIdx:null}}(a),i)for(var n=0;n<i.length;n++)(0,i[n])(a);a.track.init(a.options.initial||0),a.emit("created")}(),a}catch(n){console.error(n)}};t.E=function(n,t){var e=r.useRef(null),i=r.useRef(!1),a=r.useRef(n),o=r.useCallback(function(r){r?(a.current=n,e.current=new w(r,n,t),i.current=!1):(e.current&&e.current.destroy&&e.current.destroy(),e.current=null)},[]);return r.useEffect(function(){(function n(t,e){if(t===e)return!0;var r=typeof t;if(r!==typeof e)return!1;if("object"!==r||null===t||null===e)return"function"===r&&t.toString()===e.toString();if(t.length!==e.length||Object.getOwnPropertyNames(t).length!==Object.getOwnPropertyNames(e).length)return!1;for(var i in t)if(!n(t[i],e[i]))return!1;return!0})(a.current,n)||(a.current=n,e.current&&e.current.update(a.current))},[n]),[o,e]}},4239:function(n,t,e){Promise.resolve().then(e.bind(e,5003))},5003:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return b}});var r=e(230),i=e(7437),a=e(787),o=e(9457);function u(){let n=(0,r._)(["\n  background-color: white;\n  width: 440px;\n  margin: 0 auto;\n  height: 10vh;\n  overflow-y: auto;\n"]);return u=function(){return n},n}function s(){let n=(0,r._)(["\n  background-color: green;\n"]);return s=function(){return n},n}function c(){let n=(0,r._)(["\n  background: grey;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 50px;\n  color: #fff;\n  font-weight: 500;\n  height: 100px;\n  width: 380px;\n  max-height: 100vh;\n"]);return c=function(){return n},n}function d(){let n=(0,r._)(["\n  background: rgb(64, 175, 255);\n  background: linear-gradient(\n    128deg,\n    rgba(64, 175, 255, 1) 0%,\n    rgba(63, 97, 255, 1) 100%\n  );\n"]);return d=function(){return n},n}function l(){let n=(0,r._)(["\n  background: rgb(255, 75, 64);\n  background: linear-gradient(\n    128deg,\n    rgba(255, 154, 63, 1) 0%,\n    rgba(255, 75, 64, 1) 100%\n  );\n"]);return l=function(){return n},n}function f(){let n=(0,r._)(["\n  background: rgb(182, 255, 64);\n  background: linear-gradient(\n    128deg,\n    rgba(182, 255, 64, 1) 0%,\n    rgba(63, 255, 71, 1) 100%\n  );\n  background: linear-gradient(\n    128deg,\n    rgba(189, 255, 83, 1) 0%,\n    rgba(43, 250, 82, 1) 100%\n  );\n"]);return f=function(){return n},n}function p(){let n=(0,r._)(["\n  background: rgb(64, 255, 242);\n  background: linear-gradient(\n    128deg,\n    rgba(64, 255, 242, 1) 0%,\n    rgba(63, 188, 255, 1) 100%\n  );\n"]);return p=function(){return n},n}function g(){let n=(0,r._)(["\n  background: rgb(255, 64, 156);\n  background: linear-gradient(\n    128deg,\n    rgba(255, 64, 156, 1) 0%,\n    rgba(255, 63, 63, 1) 100%\n  );\n"]);return g=function(){return n},n}function h(){let n=(0,r._)(["\n  background: rgb(64, 76, 255);\n  background: linear-gradient(\n    128deg,\n    rgba(64, 76, 255, 1) 0%,\n    rgba(174, 63, 255, 1) 100%\n  );\n"]);return h=function(){return n},n}e(461);let v=a.Z.footer(u()),m=a.Z.div(s());function b(){let[n]=(0,o.E)({mode:"free-snap",loop:!0,slides:{origin:"center",perView:2,spacing:15}},[n=>{let t;let e=!1;function r(){clearTimeout(t)}function i(){clearTimeout(t),e||(t=setTimeout(()=>{n.next()},1e3))}n.on("created",()=>{n.container.addEventListener("mouseover",()=>{e=!0,r()}),n.container.addEventListener("mouseout",()=>{e=!1,i()}),i()}),n.on("dragStarted",r),n.on("animationEnded",i),n.on("updated",i)}]);return(0,i.jsxs)(m,{children:[(0,i.jsxs)("div",{children:["deploy test!!!!!!!!!",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"오늘의 논란",(0,i.jsxs)("div",{children:["사귄지 얼마 안된 연인이 ",(0,i.jsx)("br",{}),"형제를 보여준다고한다"]})]}),(0,i.jsx)("div",{children:"오늘의 질문 영역"}),(0,i.jsx)("div",{children:"테스트 시작 버튼 영역"}),(0,i.jsx)("div",{children:"참여한 사람 영역"}),(0,i.jsxs)("div",{ref:n,className:"keen-slider",children:[(0,i.jsx)(x,{className:"keen-slider__slide",children:"1"}),(0,i.jsx)(y,{className:"keen-slider__slide number-slide2",children:"2"}),(0,i.jsx)(w,{className:"keen-slider__slide number-slide3",children:"3"}),(0,i.jsx)(M,{className:"keen-slider__slide number-slide4",children:"4"}),(0,i.jsx)(_,{className:"keen-slider__slide number-slide5",children:"5"}),(0,i.jsx)(T,{className:"keen-slider__slide number-slide6",children:"6"})]}),(0,i.jsx)(v,{children:"개인정보 처리 방침"})]})}let k=a.Z.div(c()),x=(0,a.Z)(k)(d()),y=(0,a.Z)(k)(l()),w=(0,a.Z)(k)(f()),M=(0,a.Z)(k)(p()),_=(0,a.Z)(k)(g()),T=(0,a.Z)(k)(h())},461:function(){}},function(n){n.O(0,[139,971,596,744],function(){return n(n.s=4239)}),_N_E=n.O()}]);