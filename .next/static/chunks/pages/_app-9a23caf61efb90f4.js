(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(4431)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,o=n(7273).Z,l=r(n(7294)),u=n(1978),a=n(2139),i=n(7795),c=n(670),f=n(4465),s=n(2692),d=n(8245),p=n(9246),h=n(227),v=n(3468);let _=new Set;function y(e,t,n,r,o){if(o||a.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+o;if(_.has(l))return;_.add(l)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function b(e){return"string"==typeof e?e:i.formatUrl(e)}let g=l.default.forwardRef(function(e,t){let n,r;let{href:i,as:_,children:g,prefetch:j,passHref:m,replace:M,shallow:x,scroll:C,locale:E,onClick:k,onMouseEnter:w,onTouchStart:O,legacyBehavior:P=!1}=e,N=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=g,P&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let L=!1!==j,R=l.default.useContext(s.RouterContext),T=l.default.useContext(d.AppRouterContext),I=null!=R?R:T,S=!R,{href:A,as:D}=l.default.useMemo(()=>{if(!R){let e=b(i);return{href:e,as:_?b(_):e}}let[e,t]=u.resolveHref(R,i,!0);return{href:e,as:_?u.resolveHref(R,_):t||e}},[R,i,_]),U=l.default.useRef(A),K=l.default.useRef(D);P&&(r=l.default.Children.only(n));let H=P?r&&"object"==typeof r&&r.ref:t,[X,q,z]=p.useIntersection({rootMargin:"200px"}),B=l.default.useCallback(e=>{(K.current!==D||U.current!==A)&&(z(),K.current=D,U.current=A),X(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[D,H,A,z,X]);l.default.useEffect(()=>{I&&q&&L&&y(I,A,D,{locale:E},S)},[D,A,q,E,L,null==R?void 0:R.locale,I,S]);let Z={ref:B,onClick(e){P||"function"!=typeof k||k(e),P&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,n,r,o,u,i,c,f,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!f&&!a.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:u,locale:c,scroll:i}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!s})};f?l.default.startTransition(h):h()}(e,I,A,D,M,x,C,E,S,L)},onMouseEnter(e){P||"function"!=typeof w||w(e),P&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),I&&(L||!S)&&y(I,A,D,{locale:E,priority:!0,bypassPrefetchedCheck:!0},S)},onTouchStart(e){P||"function"!=typeof O||O(e),P&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),I&&(L||!S)&&y(I,A,D,{locale:E,priority:!0,bypassPrefetchedCheck:!0},S)}};if(c.isAbsoluteUrl(D))Z.href=D;else if(!P||m||"a"===r.type&&!("href"in r.props)){let e=void 0!==E?E:null==R?void 0:R.locale,t=(null==R?void 0:R.isLocaleDomain)&&h.getDomainLocale(D,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);Z.href=t||v.addBasePath(f.addLocale(D,e,null==R?void 0:R.defaultLocale))}return P?l.default.cloneElement(r,Z):l.default.createElement("a",Object.assign({},N,Z),n)});t.default=g,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:i}=e,c=i||!l,[f,s]=r.useState(!1),d=r.useRef(null),p=r.useCallback(e=>{d.current=e},[]);r.useEffect(()=>{if(l){if(c||f)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=u.get(r)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:o},a.push(n),u.set(n,t),t}(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),u.delete(r);let e=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!f){let e=o.requestIdleCallback(()=>s(!0));return()=>o.cancelIdleCallback(e)}},[c,n,t,f,d.current]);let h=r.useCallback(()=>{s(!1)},[]);return[p,f,h]};var r=n(7294),o=n(4686);let l="function"==typeof IntersectionObserver,u=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4431:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(5893),o=n(1664),l=n.n(o),u=n(3154),a=n.n(u),i=function(){return(0,r.jsxs)("header",{className:a().header,children:[(0,r.jsx)("div",{className:a().logo,children:"React Meetups"}),(0,r.jsx)("nav",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(l(),{href:"/",children:"All Meetups"})}),(0,r.jsx)("li",{children:(0,r.jsx)(l(),{href:"/new-meetup",children:"Add New Meetup"})})]})})]})},c=function(e){return(0,r.jsxs)("div",{children:[(0,r.jsx)(i,{}),(0,r.jsx)("main",{className:"main",children:e.children})]})};function f(e){let{Component:t,pageProps:n}=e;return(0,r.jsx)(c,{children:(0,r.jsx)(t,{...n})})}n(1712)},1712:function(){},3154:function(e){e.exports={header:"MainNavigation_header__6DDqX",logo:"MainNavigation_logo__t_4J_",active:"MainNavigation_active__zFSI7"}},1664:function(e,t,n){e.exports=n(1551)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(880)}),_N_E=e.O()}]);