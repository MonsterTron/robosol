(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2730:function(e,t,n){!function(e,t){"use strict";function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],s=!0,a=!1,r=void 0;try{for(var i,l=e[Symbol.iterator]();!(s=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);s=!0);}catch(e){a=!0,r=e}finally{try{s||null==l.return||l.return()}finally{if(a)throw r}}return n}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}function c(e){var t,n,s,r,l,o,c,d,m,f,h,p,g,j,b,v,w,y,N,S,k,_,M,O,A,T,E,X,C,P,F,L,D,I,q=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},H="data-keen-slider-moves",R="data-keen-slider-v",V=[],W=null,Q=!1,Y=!1,Z=0,z=[];function G(e,t,n){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};e.addEventListener(t,n,s),V.push([e,t,n,s])}function U(e){if(y&&N===$(e)&&ce()){var n=te(e).x;if(!se(e)&&O)return B(e);O&&(Qe(),S=n,O=!1),e.cancelable&&e.preventDefault();var s=S-n;A+=Math.abs(s),!T&&A>5&&(T=!0,t.setAttribute(H,!0)),Le(M(s,Ke)*(xe()?-1:1),e.timeStamp),S=n}}function K(e){y||!ce()||ne(e.target)||(y=!0,O=!0,N=$(e),T=!1,A=0,se(e),he(),w=f,S=te(e).x,Le(0,e.timeStamp),le("dragStart"))}function B(e){y&&N===$(e,!0)&&ce()&&(t.removeAttribute(H),y=!1,je(),le("dragEnd"))}function J(e){return e.changedTouches}function $(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?J(e):ee(e);return t?t[0]?t[0].identifier:"error":"default"}function ee(e){return e.targetTouches}function te(e){var t=ee(e);return{x:me()?t?t[0].screenY:e.pageY:t?t[0].screenX:e.pageX,timestamp:e.timeStamp}}function ne(e){return e.hasAttribute(v.preventEvent)}function se(e){var t=ee(e);if(!t)return!0;var n=t[0],s=me()?n.clientY:n.clientX,a=me()?n.clientX:n.clientY,r=void 0!==k&&void 0!==_&&Math.abs(_-a)<=Math.abs(k-s);return k=s,_=a,r}function ae(e){ce()&&y&&e.preventDefault()}function re(){G(window,"orientationchange",Ee),G(window,"resize",(function(){return Te()})),G(t,"dragstart",(function(e){ce()&&e.preventDefault()})),G(t,"mousedown",K),G(v.cancelOnLeave?t:window,"mousemove",U),v.cancelOnLeave&&G(t,"mouseleave",B),G(window,"mouseup",B),G(t,"touchstart",K,{passive:!0}),G(t,"touchmove",U,{passive:!1}),G(t,"touchend",B,{passive:!0}),G(t,"touchcancel",B,{passive:!0}),G(window,"wheel",ae,{passive:!1})}function ie(){V.forEach((function(e){e[0].removeEventListener(e[1],e[2],e[3])})),V=[]}function le(e){v[e]&&v[e](Ke)}function oe(){return v.centered}function ce(){return void 0!==n?n:v.controls}function de(){return v.loop&&s>1}function xe(){return v.rtl}function ue(){return!v.loop&&v.rubberband}function me(){return!!v.vertical}function fe(){E=window.requestAnimationFrame(pe)}function he(){E&&(window.cancelAnimationFrame(E),E=null),X=null}function pe(e){X||(X=e);var t=e-X,n=ge(t);if(t>=P)return Le(C-L,!1),I?I():void le("afterChange");var s=De(n);if(0===s||de()||ue()||D){if(0!==s&&ue()&&!D)return Ne();L+=n,Le(n,!1),fe()}else Le(n-s,!1)}function ge(e){return C*F(e/P)-L}function je(){switch(le("beforeChange"),v.mode){case"free":we();break;case"free-snap":ye();break;case"snap":default:be()}}function be(){ve((1===c&&0!==h?w:f)+Math.sign(h))}function ve(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:v.duration,s=function(e){return 1+--e*e*e*e*e};Se(Re(e=He(e,arguments.length>3&&void 0!==arguments[3]&&arguments[3],arguments.length>4&&void 0!==arguments[4]&&arguments[4])),n,s,t)}function we(){if(0===g)return!(!De(0)||de())&&ve(f);var e=v.friction/Math.pow(Math.abs(g),-.5);Se(Math.pow(g,2)/e*Math.sign(g),6*Math.abs(g/e),(function(e){return 1-Math.pow(1-e,5)}))}function ye(){if(0===g)return ve(f);var e=v.friction/Math.pow(Math.abs(g),-.5),t=Math.pow(g,2)/e*Math.sign(g),n=6*Math.abs(g/e),s=(Z+t)/(o/c);Se((-1===h?Math.floor(s):Math.ceil(s))*(o/c)-Z,n,(function(e){return 1-Math.pow(1-e,5)}))}function Ne(){if(he(),0===g)return ve(f,!0);var e=.04/Math.pow(Math.abs(g),-.5),t=Math.pow(g,2)/e*Math.sign(g),n=function(e){return--e*e*e+1},s=g;Se(t,3*Math.abs(s/e),n,!0,(function(){Se(Re(He(f)),500,n,!0)}))}function Se(e,t,n,s,a){he(),C=e,L=0,P=t,F=n,D=s,I=a,X=null,fe()}function ke(n){var s=x(e);s.length&&(t=s[0],Te(n),re(),le("mounted"))}function _e(){var e,t=q.breakpoints||[];for(var n in t)window.matchMedia(n).matches&&(e=n);if(e===W)return!0;var s=(W=e)?t[W]:q;s.breakpoints&&W&&delete s.breakpoints,v=a(a(a({},Ue),q),s),Q=!0,m=null,le("optionsChanged"),Ae()}function Me(e){if("function"==typeof e)return e();var t=v.autoAdjustSlidesPerView;t||(s=Math.max(e,s));var n=de()&&t?s-1:s;return u(e,1,Math.max(n,1))}function Oe(){_e(),Y=!0,le("created")}function Ae(e,t){e&&(q=e),t&&(W=null),Xe(),ke(t)}function Te(e){var n=window.innerWidth;if(_e()&&(n!==m||e)){m=n;var a=v.slides;"number"==typeof a?(l=null,s=a):(l=x(a,t),s=l?l.length:0);var i=v.dragSpeed;M="function"==typeof i?i:function(e){return e*i},o=me()?t.offsetHeight:t.offsetWidth,c=Me(v.slidesPerView),d=u(v.spacing,0,o/(c-1)-1),o+=d,r=oe()?(o/2-o/c/2)/o:0,Pe();var h=!Y||Q&&v.resetSlide?v.initial:f;Ge(de()?h:Ie(h)),me()&&t.setAttribute(R,!0),Q=!1}}function Ee(e){Te(),setTimeout(Te,500),setTimeout(Te,2e3)}function Xe(){ie(),Fe(),t&&t.hasAttribute(R)&&t.removeAttribute(R),le("destroyed")}function Ce(){l&&l.forEach((function(e,t){var n=j[t].distance*o-t*(o/c-d/c-d/c*(c-1)),s=me()?0:n,a=me()?n:0,r="translate3d(".concat(s,"px, ").concat(a,"px, 0)");e.style.transform=r,e.style["-webkit-transform"]=r}))}function Pe(){l&&l.forEach((function(e){var t="calc(".concat(100/c,"% - ").concat(d/c*(c-1),"px)");me()?(e.style["min-height"]=t,e.style["max-height"]=t):(e.style["min-width"]=t,e.style["max-width"]=t)}))}function Fe(){if(l){var e=["transform","-webkit-transform"];e=[].concat(i(e),me?["min-height","max-height"]:["min-width","max-width"]),l.forEach((function(t){e.forEach((function(e){t.style.removeProperty(e)}))}))}}function Le(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];We(e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:Date.now()),t&&(e=Ze(e)),Z+=e,Ye()}function De(e){var t=o*(s-1*(oe()?1:c))/c,n=Z+e;return n>t?n-t:n<0?n:0}function Ie(e){return u(e,0,s-1-(oe()?0:c-1))}function qe(){var e=Math.abs(b),t=Z<0?1-e:e;return{direction:h,progressTrack:t,progressSlides:t*s/(s-1),positions:j,position:Z,speed:g,relativeSlide:(f%s+s)%s,absoluteSlide:f,size:s,slidesPerView:c,widthOrHeight:o}}function He(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return de()?t?Ve(e,n):e:Ie(e)}function Re(e){return-(-o/c*e+Z)}function Ve(e,t){var n=(f%s+s)%s,a=n<(e=(e%s+s)%s)?-n-s+e:-(n-e),r=n>e?s-n+e:e-n,i=t?Math.abs(a)<=r?a:r:e<n?a:r;return f+i}function We(e,t){clearTimeout(p);var n=Math.sign(e);if(n!==h&&Qe(),h=n,z.push({distance:e,time:t}),p=setTimeout((function(){z=[],g=0}),50),(z=z.slice(-6)).length<=1||0===h)return g=0;var s=z.slice(0,-1).reduce((function(e,t){return e+t.distance}),0),a=z[z.length-1].time,r=z[0].time;g=u(s/(a-r),-10,10)}function Qe(){z=[]}function Ye(){b=de()?Z%(o*s/c)/(o*s/c):Z/(o*s/c),ze();for(var e=[],t=0;t<s;t++){var n=(1/s*t-(b<0&&de()?b+1:b))*s/c+r;de()&&(n+=n>(s-1)/c?-s/c:n<-s/c+1?s/c:0);var a=1/c,i=n+a,l=i<a?i/a:i>1?1-(i-1)*c/1:1;e.push({portion:l<0||l>1?0:l,distance:xe()?-1*n+1-a:n})}j=e,Ce(),le("move")}function Ze(e){if(de())return e;var t,n=De(e);return ue()?0===n?e:e*(t=n/o,(1-Math.abs(t))*(1-Math.abs(t))):e-n}function ze(){var e=Math.round(Z/(o/c));e!==f&&(!de()&&(e<0||e>s-1)||(f=e,le("slideChanged")))}function Ge(e){le("beforeChange"),Le(Re(e),!1),le("afterChange")}var Ue={autoAdjustSlidesPerView:!0,centered:!1,breakpoints:null,controls:!0,dragSpeed:1,friction:.0025,loop:!1,initial:0,duration:500,preventEvent:"data-keen-slider-pe",slides:".keen-slider__slide",vertical:!1,resetSlide:!1,slidesPerView:1,spacing:0,mode:"snap",rtl:!1,rubberband:!0,cancelOnLeave:!0},Ke={controls:function(e){n=e},destroy:Xe,refresh:function(e){Ae(e,!0)},next:function(){ve(f+1,!0)},prev:function(){ve(f-1,!0)},moveToSlide:function(e,t){ve(e,!0,t)},moveToSlideRelative:function(e){ve(e,!0,arguments.length>2?arguments[2]:void 0,!0,arguments.length>1&&void 0!==arguments[1]&&arguments[1])},resize:function(){Te(!0)},details:function(){return qe()},options:function(){var e=a({},v);return delete e.breakpoints,e}};return Oe(),Ke}function d(e){return Array.prototype.slice.call(e)}function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return"function"==typeof e?d(e()):"string"==typeof e?d(t.querySelectorAll(e)):e instanceof HTMLElement!=0?[e]:e instanceof NodeList!=0?e:[]}function u(e,t,n){return Math.min(Math.max(e,t),n)}Math.sign||(Math.sign=function(e){return(e>0)-(e<0)||+e});var m=function e(t,n){var s=Object.prototype.toString.call(t);if(s!==Object.prototype.toString.call(n))return!1;if(["[object Array]","[object Object]"].indexOf(s)<0)return!1;var a="[object Array]"===s?t.length:Object.keys(t).length;if(a!==("[object Array]"===s?n.length:Object.keys(n).length))return!1;var r=function(t,n){var s=Object.prototype.toString.call(t);if(["[object Array]","[object Object]"].indexOf(s)>=0){if(!e(t,n))return!1}else{if(s!==Object.prototype.toString.call(n))return!1;if("[object Function]"===s){if(t.toString()!==n.toString())return!1}else if(t!==n)return!1}};if("[object Array]"===s){for(var i=0;i<a;i++)if(!1===r(t[i],n[i]))return!1}else for(var l in t)if(t.hasOwnProperty(l)&&!1===r(t[l],n[l]))return!1;return!0};e.default=c,e.useKeenSlider=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.useRef(),s=t.useRef();function a(e){return m(s.current,e)||(s.current=e),s.current}var i=r(t.useState(null),2),l=i[0],o=i[1];return t.useEffect((function(){var e=new c(n.current,s.current);return o(e),function(){e.destroy()}}),[a(e)]),[n,l]},Object.defineProperty(e,"__esModule",{value:!0})}(t,n(7294))},1706:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var s=n(5893),a=n(5988),r=n(9008),i=n(4298),l=["h1{text-shadow:5px 5px 15px #37b4bf;}"];l.__hash="1910995817";var o=l,c=n(1664),d=n(5675),x=n(7294),u=n(809),m=n.n(u),f=n(266),h=n(8216),p=n(5997),g=n(4695),j=n(1131),b=n(1044),v=n(2953),w=n(2809),y=n(4436);function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,s=(0,v.Z)(e);if(t){var a=(0,v.Z)(this).constructor;n=Reflect.construct(s,arguments,a)}else n=s.apply(this,arguments);return(0,b.Z)(this,n)}}x.Component;var S=function(){var e=(0,x.useState)(!1),t=e[0];e[1];return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("nav",{className:"flex items-center flex-wrap bg-green-300 opacity-95 p-3",children:[(0,s.jsx)(c.default,{href:"/",children:(0,s.jsxs)("a",{className:"inline-flex items-center p-2 mr-4 ",children:[(0,s.jsx)(d.default,{className:"bg-green-900 rounded-xl",alt:"Solamanders Logo - very solamandery!",src:"/img/icons/solamanders-logo.svg",height:30,width:30}),(0,s.jsx)("span",{className:"font-pixel text-2xl md:text-3xl text-black font-bold tracking-wide mx-2",children:"Solamanders"})]})}),(0,s.jsxs)("div",{className:"".concat(t?"":"hidden","   w-full lg:inline-flex lg:flex-grow lg:w-auto"),children:[(0,s.jsx)("div",{className:"flex-grow"}),(0,s.jsx)("div",{className:"lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto"})]}),(0,s.jsx)("div",{className:"flex-grow lg:flex-grow-0"}),(0,s.jsx)("button",{className:"mx-1 md:mx-3 relative w-9 h-9",children:(0,s.jsx)(c.default,{href:"https://discord.gg/ZSVcCHaQVC",children:(0,s.jsx)(d.default,{alt:"Discord Icon - Links to the Solamanders Discord server",src:"/img/icons/discord-icon.svg",layout:"fill"})})}),(0,s.jsx)("button",{className:"mx-1 md:mx-3 relative w-9 h-9",children:(0,s.jsx)(c.default,{href:"https://twitter.com/SolamandersNFT",children:(0,s.jsx)(d.default,{alt:"Twitter Icon - Links to the Solamanders twitter",src:"/img/icons/twitter-icon.svg",layout:"fill"})})}),(0,s.jsx)("div",{children:(0,s.jsx)("ul",{children:(0,s.jsx)("li",{class:"group relative dropdown  px-4 text-purple-500 hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide"})})})]})})};function k(e){return(0,s.jsxs)("div",{className:"page-layout",children:[(0,s.jsxs)(r.default,{children:[(0,s.jsx)("link",{href:"/fonts/style.css",rel:"stylesheet"}),(0,s.jsx)("title",{children:"Solamanders NFT"}),(0,s.jsx)("meta",{name:"description",content:"10,000 unique Solamanders living on the Solana chain"}),(0,s.jsx)("meta",{name:"description",content:"The Description"}),(0,s.jsx)("meta",{property:"og:title",content:"Solamanders"}),(0,s.jsx)("meta",{property:"og:description",content:"10,000 unique Solamanders living on the Solana chain"}),(0,s.jsx)("meta",{property:"og:site_name",content:"Solamanders NFT"}),(0,s.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,s.jsx)("meta",{property:"og:type",content:"website"}),(0,s.jsx)("meta",{property:"og:url",content:"https://www.solamanders.com"}),(0,s.jsx)("meta",{property:"og:image",content:"https://www.solamanders.com/img/OG_img.png"}),(0,s.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,s.jsx)("meta",{property:"twitter:domain",content:"solamanders-nft-bhc9friux-koenrad.vercel.app"}),(0,s.jsx)("meta",{property:"twitter:url",content:"https://www.solamanders.com"}),(0,s.jsx)("meta",{name:"twitter:title",content:"Solamanders"}),(0,s.jsx)("meta",{name:"twitter:description",content:"10,000 unique Solamanders living on the Solana chain"}),(0,s.jsx)("meta",{name:"twitter:image",content:"https://www.solamanders.com/img/OG_img.png"}),(0,s.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,s.jsx)("link",{rel:"manifest",href:"/site.webmanifest"}),(0,s.jsx)("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#4cd795"}),(0,s.jsx)("meta",{name:"msapplication-TileColor",content:"#00aba9"}),(0,s.jsx)("meta",{name:"theme-color",content:"#ffffff"})]}),(0,s.jsx)(i.default,{src:"https://www.googletagmanager.com/gtag/js?id=G-2F2HNL4YJX",strategy:"lazyOnload"}),(0,s.jsx)(i.default,{dangerouslySetInnerHTML:{__html:"window.dataLayer = window.dataLayer || [];   function gtag(){dataLayer.push(arguments);}   gtag('js', new Date());    gtag('config', 'G-2F2HNL4YJX');"}}),(0,s.jsxs)("div",{className:"flex flex-col h-full",children:[(0,s.jsx)(S,{}),(0,s.jsx)("section",{className:"flex-grow",children:e.children})]}),(0,s.jsx)(a.default,{id:o.__hash,children:o})]})}},343:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var s=n(5893),a=n(5988),r=n(5675),i=n(4298),l=n(1706);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],s=!0,a=!1,r=void 0;try{for(var i,l=e[Symbol.iterator]();!(s=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);s=!0);}catch(o){a=!0,r=o}finally{try{s||null==l.return||l.return()}finally{if(a)throw r}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=n(7294),x=n(2730),u=(n(2323),function(e){var t=c(d.useState(!1),2),n=t[0],a=t[1],r=d.useRef(),i=c((0,x.useKeenSlider)({loop:!0,duration:1e3,dragStart:function(){a(!0)},dragEnd:function(){a(!1)},slidesPerView:5}),2),l=i[0],o=i[1];return d.useEffect((function(){l.current.addEventListener("mouseover",(function(){a(!0)})),l.current.addEventListener("mouseout",(function(){a(!1)}))}),[l]),d.useEffect((function(){return r.current=setInterval((function(){!n&&o&&o.next()}),2e3),function(){clearInterval(r.current)}}),[n,o]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{ref:l,className:"keen-slider",children:[(0,s.jsx)("div",{className:"keen-slider__slide number-slide1",children:(0,s.jsx)("img",{className:"px-2",src:"/img/slider/goldcity.jpg"})}),(0,s.jsx)("div",{className:"keen-slider__slide number-slide2",children:(0,s.jsx)("img",{className:"px-2",src:"/img/slider/war.png"})}),(0,s.jsx)("div",{className:"keen-slider__slide number-slide3",children:(0,s.jsx)("img",{className:"px-2",src:"/img/slider/space.png"})}),(0,s.jsx)("div",{className:"keen-slider__slide number-slide4",children:(0,s.jsx)("img",{className:"px-2",src:"/img/slider/soccer.png"})}),(0,s.jsx)("div",{className:"keen-slider__slide number-slide5",children:(0,s.jsx)("img",{className:"px-2",src:"/img/slider/newimages_0280.jpg"})}),(0,s.jsx)("div",{className:"keen-slider__slide number-slide6",children:(0,s.jsx)("img",{className:"px-2",src:"/img/slider/newimages_0400.jpg"})}),(0,s.jsx)("div",{className:"keen-slider__slide number-slide7",children:(0,s.jsx)("img",{className:"px-2",src:"/img/slider/Firespots_RandomGen.png"})}),(0,s.jsx)("div",{className:"keen-slider__slide number-slide8",children:(0,s.jsx)("img",{className:"px-2",src:"/img/slider/Vibin_RandomGen.png"})})]})})}),m=n(1664),f=(n(7812),function(){!function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"animate__";new Promise((function(s,a){var r="".concat(n).concat(t),i=document.querySelector(e);i.classList.add("".concat(n,"animated"),r),console.log("ANIMATED!"),i.addEventListener("animationend",(function(e){e.stopPropagation(),i.classList.remove("".concat(n,"animated"),r),s("Animation ended")}),{once:!0})}))}(".mascott","bounce")});function h(){return(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(i.default,{src:"/js/mascott.js",strategy:"beforeInteractive"}),(0,s.jsxs)("div",{className:"jsx-1451042784 flex flex-col flex-wrap content-center justify-center font-pixel",children:[(0,s.jsxs)("div",{className:"jsx-1451042784 tank flex flex-row flex-wrap w-full text-center ",children:[(0,s.jsx)("div",{className:"jsx-1451042784 ",children:(0,s.jsx)("img",{src:"/img/backgrounds/desk.jpg",className:"jsx-1451042784 "})}),(0,s.jsx)("div",{className:"jsx-1451042784 absolute left-0 right-0 margin-left margin-right h-full pt-20",children:(0,s.jsxs)("div",{className:"jsx-1451042784 flex flex-row",children:[(0,s.jsx)("div",{className:"jsx-1451042784 flex-grow"}),(0,s.jsxs)("div",{className:"jsx-1451042784 flex flex-row bg-green-200 p-4 rounded-xl  bg-opacity-80 lg:text-6xl md:text5xl text-2xl",children:["Solamanders Drop ",(0,s.jsx)("br",{className:"jsx-1451042784"})," September 3rd, 2021 20:00 UTC"]}),(0,s.jsx)("div",{className:"jsx-1451042784 flex-grow"})]})})]}),(0,s.jsxs)("div",{className:"jsx-1451042784 roadmap flex flex-row flex-wrap w-full text-center bg-green-200 py-10",children:[(0,s.jsx)("div",{className:"jsx-1451042784 section-title w-full text-center pb-10",children:(0,s.jsx)("h1",{className:"jsx-1451042784 font-bold text-5xl md:text-7l subpixel-antialiased select-none p-1",children:"Solamanders NFT"})}),(0,s.jsxs)("div",{className:"jsx-1451042784 flex-grow sm:flex-basis-0 mx-3 text-center",children:[(0,s.jsx)("h2",{className:"jsx-1451042784 font-bold text-3xl subpixel-antialiased select-none p-1",children:"Inspiration"}),(0,s.jsx)("p",{className:"jsx-1451042784  font-bold text-xl subpixel-antialiased select-none mx-10",children:"We are inspired by DeFi technology and the concept of trustless transactions."})]}),(0,s.jsxs)("div",{className:"jsx-1451042784 flex-grow sm:flex-basis-0 mx-3",children:[(0,s.jsx)("h2",{className:"jsx-1451042784 font-bold text-3xl subpixel-antialiased select-none p-1",children:"Challenge"}),(0,s.jsx)("p",{className:"jsx-1451042784 font-bold text-xl subpixel-antialiased select-none mx-10",children:"Moving the random assignment process to an on-chain smart contract so you can verify your Solamander was assigned randomly"})]}),(0,s.jsxs)("div",{className:"jsx-1451042784 flex-grow sm:flex-basis-0 mx-3",children:[(0,s.jsx)("h2",{className:"jsx-1451042784 font-bold text-3xl subpixel-antialiased select-none p-1",children:"Impact"}),(0,s.jsx)("p",{className:"jsx-1451042784 font-bold text-xl subpixel-antialiased select-none mx-10",children:"Our vision is for anyone to be able to distribute NFT's randomly using a trustless on-chain contract"})]})]}),(0,s.jsxs)("div",{className:"jsx-1451042784 overview-section flex flex-col md:flex-row w-full py-4",children:[(0,s.jsx)("div",{className:"jsx-1451042784 lg:w-1/4 md:w-1/3 mx-20 md:mx-10 py-2",children:(0,s.jsx)("img",{src:"/img/slider/newimages_0007.jpg",className:"jsx-1451042784 border-4"})}),(0,s.jsxs)("div",{className:"jsx-1451042784 flex flex-col justify-center px-10  text-center",children:[(0,s.jsxs)("div",{className:"jsx-1451042784 sm:flex-basis-0 py-2 lg:py-5",children:[(0,s.jsx)("h2",{className:"jsx-1451042784 font-bold underline text-center  text-3xl select-none",children:(0,s.jsx)("a",{href:"#roadmap",className:"jsx-1451042784",children:"Road Map"})}),(0,s.jsx)("p",{className:"jsx-1451042784 text-xl select-none",children:"Solamanders is not your average NFT drop."})]}),(0,s.jsxs)("div",{className:"jsx-1451042784 sm:flex-basis-0 py-2 md:py-5",children:[(0,s.jsx)("h2",{className:"jsx-1451042784 font-bold underline text-center  text-3xl select-none ",children:(0,s.jsx)("a",{href:"#faq",className:"jsx-1451042784",children:"FAQ"})}),(0,s.jsx)("p",{className:"jsx-1451042784 text-xl select-none",children:"You have questions, we have answers."})]}),(0,s.jsxs)("div",{className:"jsx-1451042784 sm:flex-basis-0 py-2 md:py-5",children:[(0,s.jsx)("h2",{className:"jsx-1451042784 font-bold text-center  text-3xl select-none underline ",children:(0,s.jsx)(m.default,{href:"https://discord.com/invite/ZSVcCHaQVC",target:"_blank",children:(0,s.jsx)("a",{target:"_blank",className:"jsx-1451042784 underline",children:"Contact"})})}),(0,s.jsxs)("p",{className:"jsx-1451042784 text-xl select-none",children:["The best way to get in touch with us is ",(0,s.jsx)(m.default,{href:"https://twitter.com/SolamandersNFT",children:(0,s.jsx)("a",{target:"_blank",className:"jsx-1451042784 underline",children:"twitter"})})," and ",(0,s.jsx)(m.default,{href:"https://discord.com/invite/ZSVcCHaQVC",target:"_blank",children:(0,s.jsx)("a",{target:"_blank",className:"jsx-1451042784 underline",children:"discord!"})})]})]})]}),(0,s.jsx)("div",{className:"jsx-1451042784 lg:w-1/4 md:w-1/3 mx-20 md:mx-10 py-2",children:(0,s.jsx)("img",{src:"/img/slider/goldcity.jpg",className:"jsx-1451042784 border-4"})})]}),(0,s.jsx)("div",{className:"jsx-1451042784  mascott px-10 mx-8",children:(0,s.jsx)("div",{id:"sl2",className:"jsx-1451042784 w-auto inset-x-0 bottom-0 h-full",children:(0,s.jsx)("div",{onClick:f,className:"jsx-1451042784 relative w-mascott-sm lg:w-mascott-lg",children:(0,s.jsx)(r.default,{src:"/img/mascott.gif",width:"134",height:"81"})})})}),(0,s.jsx)("div",{className:"jsx-1451042784 shadow-xl flex flex-row flex-wrap bg-green-300 md:px-4 py-2 md:py-8",children:(0,s.jsx)("div",{className:"jsx-1451042784 relative",children:(0,s.jsx)(u,{})})}),(0,s.jsx)("div",{id:"roadmap",lassName:"roadmap-section-header flex flex-row flex-wrap w-full text-center bg-green-100",className:"jsx-1451042784",children:(0,s.jsx)("div",{className:"jsx-1451042784 section-title w-full text-center py-6",children:(0,s.jsx)("h1",{className:"jsx-1451042784 font-bold text-5xl md:text-7l subpixel-antialiased select-none p-1",children:"Road Map LifeCycle"})})}),(0,s.jsxs)("div",{className:"jsx-1451042784 roadmap-content flex flex-col lg:flex-row lg:justify-center flex-wrap mb-8 px-8 lg:py-20 lg:bg-tank lg:bg-fit lg:bg-no-repeata lg:bg-center",children:[(0,s.jsxs)("div",{className:"jsx-1451042784 m-4 p-1 bg-green-100 lg:max-w-1/3 rounded-lg bg-opacity-75",children:[(0,s.jsx)("h2",{className:"jsx-1451042784 text-center font-bold text-7xl subpixel-antialiased select-none ",children:"15%"}),(0,s.jsx)("p",{className:"jsx-1451042784 text-xl select-none",children:" During this time, 10 pre-launch giveaways will be announced. We will adopt from the Solamander nest, pick random participants from the discord and reward our lucky winners on the official launch day. Anyone of you Solamander\u2019s stand a chance to win!"})]}),(0,s.jsxs)("div",{className:"jsx-1451042784 m-4 p-1 bg-green-100 lg:max-w-1/3 rounded-lg bg-opacity-75",children:[(0,s.jsx)("h2",{className:"jsx-1451042784 text-center font-bold text-7xl subpixel-antialiased select-none p-1",children:"35%"}),(0,s.jsx)("p",{className:"jsx-1451042784 text-xl select-none",children:" The release of 10,000 algorithmically generated Solamander\u2019s Onto the Solana blockchain. After minting and receiving your solamander you may proceed to release him into the wild (trade them on a marketplace) or give him a home (Keep in your wallet)."})]}),(0,s.jsxs)("div",{className:"jsx-1451042784 m-4 p-1 bg-green-100 lg:max-w-1/3 rounded-lg bg-opacity-75",children:[(0,s.jsx)("h2",{className:"jsx-1451042784 text-center font-bold text-7xl subpixel-antialiased select-none p-1",children:"50%"}),(0,s.jsx)("p",{className:"jsx-1451042784 text-xl select-none",children:" Hold onto your Solamander\u2019s tight! Anyone who has Solamander\u2019s in their wallet at the time of the airdrop will be eligible for exotic and unique items. The more Solamander\u2019s you hold the better chance you have!"})]}),(0,s.jsxs)("div",{className:"jsx-1451042784 m-4 p-1 bg-green-100 lg:max-w-1/3 rounded-lg bg-opacity-75",children:[(0,s.jsx)("h2",{className:"jsx-1451042784 text-center font-bold text-7xl subpixel-antialiased select-none p-1",children:"65%"}),(0,s.jsx)("p",{className:"jsx-1451042784 text-xl select-none",children:" During this cycle we will be allowing owners to name their Solamander. That name will stick with the solamander throughout its lifespan. At the point of naming your solamander, a new feature will be come available on the website called \u201cMating\u201d."})]}),(0,s.jsxs)("div",{className:"jsx-1451042784 m-4 p-1 bg-green-100 lg:max-w-1/3 rounded-lg bg-opacity-75",children:[(0,s.jsx)("h2",{className:"jsx-1451042784 text-center font-bold text-7xl subpixel-antialiased select-none p-1",children:"85%"}),(0,s.jsx)("p",{className:"jsx-1451042784 text-xl select-none",children:" Upon reaching this lifecycle, solamander\u2019s receive an update as new features will go live including the start of \u201cTerrarium Tanks\u201d and the activation of the voting system."})]}),(0,s.jsxs)("div",{className:"jsx-1451042784 m-4 p-1 bg-green-100 lg:max-w-1/3 rounded-lg bg-opacity-75",children:[(0,s.jsx)("h2",{className:"jsx-1451042784 text-center font-bold text-7xl subpixel-antialiased select-none p-1",children:"100%"}),(0,s.jsx)("p",{className:"jsx-1451042784 text-xl select-none",children:" During this final Period of the lifecycle, we will be introducing the main new Feature \u201cshedding\u201d That will create an interactive experience like never before."})]})]}),(0,s.jsx)("div",{id:"faq",className:"jsx-1451042784 roadmap flex flex-row flex-wrap w-full text-center bg-green-200 py-6",children:(0,s.jsx)("div",{className:"jsx-1451042784 section-title w-full text-center",children:(0,s.jsx)("h1",{className:"jsx-1451042784 font-bold text-5xl md:text-7l subpixel-antialiased select-none p-1",children:"FAQ"})})}),(0,s.jsxs)("div",{className:"jsx-1451042784 roadmap flex flex-col flex-wrap w-full p-5 md:px-20",children:[(0,s.jsxs)("div",{className:"jsx-1451042784 flex-grow sm:flex-basis-0 py-2 mx-3",children:[(0,s.jsx)("h2",{className:"jsx-1451042784 font-bold text-3xl subpixel-antialiased select-none p-1",children:"Q: What are Solamander NFTs?"}),(0,s.jsx)("p",{className:"jsx-1451042784 text-left font-bold text-xl subpixel-antialiased select-none mx-10",children:"Solamanders are 10,000 algorithmically generated unique and collectible Solamanders stored on the Solana blockchain!"}),(0,s.jsx)("p",{className:"jsx-1451042784 text-left font-bold text-xl subpixel-antialiased select-none mx-10",children:"We have big plans for unique interactions between Solamanders and other NFTs."})]}),(0,s.jsxs)("div",{className:"jsx-1451042784 flex-grow sm:flex-basis-0 py-2 mx-3",children:[(0,s.jsx)("h2",{className:"jsx-1451042784 font-bold text-3xl subpixel-antialiased select-none p-1",children:"Q: When is launch??!!"}),(0,s.jsx)("p",{className:"jsx-1451042784 text-left font-bold text-xl subpixel-antialiased select-none mx-10",children:"September 3rd, 2021."})]}),(0,s.jsxs)("div",{className:"jsx-1451042784 flex-grow sm:flex-basis-0 py-2 mx-3",children:[(0,s.jsx)("h2",{className:"jsx-1451042784 font-bold text-3xl subpixel-antialiased select-none p-1",children:"Q: What Solana wallets can I use?"}),(0,s.jsx)("p",{className:"jsx-1451042784 text-left font-bold text-xl subpixel-antialiased select-none mx-10",children:"You will be able to use two of Solana\u2019s main wallets Phantom and Sollet."})]}),(0,s.jsxs)("div",{className:"jsx-1451042784 flex-grow sm:flex-basis-0 py-2 mx-3",children:[(0,s.jsx)("h2",{className:"jsx-1451042784 font-bold text-3xl subpixel-antialiased select-none p-1",children:"Q: How can distribution be verifiably random?"}),(0,s.jsx)("p",{className:"jsx-1451042784 text-left font-bold text-xl subpixel-antialiased select-none mx-10",children:"We will be using a smart contract deployed on the Solana chain to distribute the Solamanders. We will be releasing the source code for this smart contract 1 hour before the launch. This means that anyone can decompile the bytecode on the chain and verify that it was built from the source code we release. With the advent of Candy Machine, things may change and we may use CM directly!"})]}),(0,s.jsxs)("div",{className:"jsx-1451042784 flex-grow sm:flex-basis-0 py-2 mx-3",children:[(0,s.jsx)("h2",{className:"jsx-1451042784 font-bold text-3xl subpixel-antialiased select-none p-1",children:"Q: How much does it cost to mint a Solamander?"}),(0,s.jsx)("p",{className:"jsx-1451042784 text-left font-bold text-xl subpixel-antialiased select-none mx-10",children:"Each Solamander will cost 5 Solana to mint."})]}),(0,s.jsxs)("div",{className:"jsx-1451042784 flex-grow sm:flex-basis-0 py-2 mx-3",children:[(0,s.jsx)("h2",{className:"jsx-1451042784 font-bold text-3xl subpixel-antialiased select-none p-1",children:"Q: How were the Solamanders generated?"}),(0,s.jsx)("p",{className:"jsx-1451042784 text-left font-bold text-xl subpixel-antialiased select-none mx-10",children:"All Solamanders have been algorithmically generated using base layers created by our resident artist @Soljack. There are over 100 attributes across 8 categories: These categories include background, body color, eye color, eyewear, headwear, mouth, spot color and more! With these attributes, it gives millions of unique Solamanders combinations but with only 10,000 being minted, some are more unique and rare than others."})]}),(0,s.jsxs)("div",{className:"jsx-1451042784 flex-grow sm:flex-basis-0 py-2 mx-3",children:[(0,s.jsx)("h2",{className:"jsx-1451042784 font-bold text-3xl subpixel-antialiased select-none p-1",children:"Q: Will there be royalties?"}),(0,s.jsx)("p",{className:"jsx-1451042784 text-left font-bold text-xl subpixel-antialiased select-none mx-10",children:"5% royalties will be applied to all resales."})]})]}),(0,s.jsx)("div",{className:"jsx-1451042784 flex-grow"})]}),(0,s.jsx)(a.default,{id:"1451042784",children:["@-webkit-keyframes BackAndForth{0%,100%{left:-75px;}49%{-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);}50%{left:95%;-webkit-transform:scaleX(-1);-ms-transform:scaleX(-1);transform:scaleX(-1);}99%{-webkit-transform:scaleX(-1);-ms-transform:scaleX(-1);transform:scaleX(-1);}}","@keyframes BackAndForth{0%,100%{left:-75px;}49%{-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);}50%{left:95%;-webkit-transform:scaleX(-1);-ms-transform:scaleX(-1);transform:scaleX(-1);}99%{-webkit-transform:scaleX(-1);-ms-transform:scaleX(-1);transform:scaleX(-1);}}","@-webkit-keyframes rotate{0%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}100%{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}}","@keyframes rotate{0%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}100%{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}}"]})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(343)}])},2323:function(){},6601:function(){},9214:function(){},5568:function(){},5024:function(){}},function(e){e.O(0,[766,319,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);