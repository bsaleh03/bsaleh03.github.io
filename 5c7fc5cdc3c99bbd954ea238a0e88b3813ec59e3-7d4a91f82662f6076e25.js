(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"3Hwf":function(e,t,n){"use strict";function r(e){return e&&e.ownerDocument||document}n.d(t,"a",(function(){return r}))},"4opw":function(e,t,n){"use strict";var r=n("vxNi"),o=!1,a=!1;try{var i={get passive(){return o=!0},get once(){return a=o=!0}};r.a&&(window.addEventListener("test",i,i),window.removeEventListener("test",i,!0))}catch(u){}var c=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!a){var i=r.once,c=r.capture,s=n;!a&&i&&(s=n.__once||function e(r){this.removeEventListener(t,e,c),n.call(this,r)},n.__once=s),e.addEventListener(t,s,o?r:c)}e.addEventListener(t,n,r)};var s=function(e,t,n,r){var o=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)};t.a=function(e,t,n,r){return c(e,t,n,r),function(){s(e,t,n,r)}}},"7A6N":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI");function o(){return Object(r.useState)(null)}},"97+O":function(e,t,n){"use strict";var r,o=n("wx14"),a=n("zLVn"),i=n("TSYQ"),c=n.n(i),s=n("q1tI"),u=n.n(s);var l=Function.prototype.bind.call(Function.prototype.call,[].slice);function f(e,t){return l(e.querySelectorAll(t))}var d=n("JCAc"),p=n("qvwu"),m=n("7A6N"),v=n("YGJp"),b=n("ZCiN"),h=u.a.createContext(null),g=n("XcHJ");var O=function(e){var t=Object(g.a)();return[e[0],Object(s.useCallback)((function(n){if(t())return e[1](n)}),[t,e[1]])]};function y(e){return e.split("-")[0]}function w(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function j(e){if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function x(e){return e instanceof j(e).Element||e instanceof Element}function E(e){return e instanceof j(e).HTMLElement||e instanceof HTMLElement}function M(e,t){var n,r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if((n=r)instanceof j(n).ShadowRoot||n instanceof ShadowRoot){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function D(e){return e?(e.nodeName||"").toLowerCase():null}function C(e){return j(e).getComputedStyle(e)}function P(e){return["table","td","th"].indexOf(D(e))>=0}function k(e){return((x(e)?e.ownerDocument:e.document)||window.document).documentElement}function R(e){return"html"===D(e)?e:e.assignedSlot||e.parentNode||e.host||k(e)}function S(e){if(!E(e)||"fixed"===C(e).position)return null;var t=e.offsetParent;if(t){var n=k(t);if("body"===D(t)&&"static"===C(t).position&&"static"!==C(n).position)return n}return t}function L(e){for(var t=j(e),n=S(e);n&&P(n)&&"static"===C(n).position;)n=S(n);return n&&"body"===D(n)&&"static"===C(n).position?t:n||function(e){for(var t=R(e);E(t)&&["html","body"].indexOf(D(t))<0;){var n=C(t);if("none"!==n.transform||"none"!==n.perspective||n.willChange&&"auto"!==n.willChange)return t;t=t.parentNode}return null}(e)||t}function T(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function N(e,t,n){return Math.max(e,Math.min(t,n))}function A(e){return Object.assign(Object.assign({},{top:0,right:0,bottom:0,left:0}),e)}function I(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var B="top",W="bottom",q="right",H="left",F=[B,W,q,H],_=F.reduce((function(e,t){return e.concat([t+"-start",t+"-end"])}),[]),z=[].concat(F,["auto"]).reduce((function(e,t){return e.concat([t,t+"-start",t+"-end"])}),[]),K=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];var U={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=n.elements.arrow,a=n.modifiersData.popperOffsets,i=y(n.placement),c=T(i),s=[H,q].indexOf(i)>=0?"height":"width";if(o&&a){var u=n.modifiersData[r+"#persistent"].padding,l=w(o),f="y"===c?B:H,d="y"===c?W:q,p=n.rects.reference[s]+n.rects.reference[c]-a[c]-n.rects.popper[s],m=a[c]-n.rects.reference[c],v=L(o),b=v?"y"===c?v.clientHeight||0:v.clientWidth||0:0,h=p/2-m/2,g=u[f],O=b-l[s]-u[d],j=b/2-l[s]/2+h,x=N(g,j,O),E=c;n.modifiersData[r]=((t={})[E]=x,t.centerOffset=x-j,t)}},effect:function(e){var t=e.state,n=e.options,r=e.name,o=n.element,a=void 0===o?"[data-popper-arrow]":o,i=n.padding,c=void 0===i?0:i;null!=a&&("string"!=typeof a||(a=t.elements.popper.querySelector(a)))&&M(t.elements.popper,a)&&(t.elements.arrow=a,t.modifiersData[r+"#persistent"]={padding:A("number"!=typeof c?c:I(c,F))})},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},V={top:"auto",right:"auto",bottom:"auto",left:"auto"};function J(e){var t,n=e.popper,r=e.popperRect,o=e.placement,a=e.offsets,i=e.position,c=e.gpuAcceleration,s=e.adaptive,u=function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:Math.round(t*r)/r||0,y:Math.round(n*r)/r||0}}(a),l=u.x,f=u.y,d=a.hasOwnProperty("x"),p=a.hasOwnProperty("y"),m=H,v=B,b=window;if(s){var h=L(n);h===j(n)&&(h=k(n)),o===B&&(v=W,f-=h.clientHeight-r.height,f*=c?1:-1),o===H&&(m=q,l-=h.clientWidth-r.width,l*=c?1:-1)}var g,O=Object.assign({position:i},s&&V);return c?Object.assign(Object.assign({},O),{},((g={})[v]=p?"0":"",g[m]=d?"0":"",g.transform=(b.devicePixelRatio||1)<2?"translate("+l+"px, "+f+"px)":"translate3d("+l+"px, "+f+"px, 0)",g)):Object.assign(Object.assign({},O),{},((t={})[v]=p?f+"px":"",t[m]=d?l+"px":"",t.transform="",t))}var Y={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,a=n.adaptive,i=void 0===a||a,c={placement:y(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign(Object.assign({},t.styles.popper),J(Object.assign(Object.assign({},c),{},{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign(Object.assign({},t.styles.arrow),J(Object.assign(Object.assign({},c),{},{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1})))),t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-placement":t.placement})},data:{}},Q={passive:!0};var X={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,a=void 0===o||o,i=r.resize,c=void 0===i||i,s=j(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&u.forEach((function(e){e.addEventListener("scroll",n.update,Q)})),c&&s.addEventListener("resize",n.update,Q),function(){a&&u.forEach((function(e){e.removeEventListener("scroll",n.update,Q)})),c&&s.removeEventListener("resize",n.update,Q)}},data:{}},G={left:"right",right:"left",bottom:"top",top:"bottom"};function Z(e){return e.replace(/left|right|bottom|top/g,(function(e){return G[e]}))}var $={start:"end",end:"start"};function ee(e){return e.replace(/start|end/g,(function(e){return $[e]}))}function te(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function ne(e){var t=j(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function re(e){return te(k(e)).left+ne(e).scrollLeft}function oe(e){var t=C(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function ae(e,t){void 0===t&&(t=[]);var n=function e(t){return["html","body","#document"].indexOf(D(t))>=0?t.ownerDocument.body:E(t)&&oe(t)?t:e(R(t))}(e),r="body"===D(n),o=j(n),a=r?[o].concat(o.visualViewport||[],oe(n)?n:[]):n,i=t.concat(a);return r?i:i.concat(ae(R(a)))}function ie(e){return Object.assign(Object.assign({},e),{},{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ce(e,t){return"viewport"===t?ie(function(e){var t=j(e),n=k(e),r=t.visualViewport,o=n.clientWidth,a=n.clientHeight,i=0,c=0;return r&&(o=r.width,a=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(i=r.offsetLeft,c=r.offsetTop)),{width:o,height:a,x:i+re(e),y:c}}(e)):E(t)?function(e){var t=te(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ie(function(e){var t=k(e),n=ne(e),r=e.ownerDocument.body,o=Math.max(t.scrollWidth,t.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),a=Math.max(t.scrollHeight,t.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),i=-n.scrollLeft+re(e),c=-n.scrollTop;return"rtl"===C(r||t).direction&&(i+=Math.max(t.clientWidth,r?r.clientWidth:0)-o),{width:o,height:a,x:i,y:c}}(k(e)))}function se(e,t,n){var r="clippingParents"===t?function(e){var t=ae(R(e)),n=["absolute","fixed"].indexOf(C(e).position)>=0&&E(e)?L(e):e;return x(n)?t.filter((function(e){return x(e)&&M(e,n)&&"body"!==D(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),a=o[0],i=o.reduce((function(t,n){var r=ce(e,n);return t.top=Math.max(r.top,t.top),t.right=Math.min(r.right,t.right),t.bottom=Math.min(r.bottom,t.bottom),t.left=Math.max(r.left,t.left),t}),ce(e,a));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function ue(e){return e.split("-")[1]}function le(e){var t,n=e.reference,r=e.element,o=e.placement,a=o?y(o):null,i=o?ue(o):null,c=n.x+n.width/2-r.width/2,s=n.y+n.height/2-r.height/2;switch(a){case B:t={x:c,y:n.y-r.height};break;case W:t={x:c,y:n.y+n.height};break;case q:t={x:n.x+n.width,y:s};break;case H:t={x:n.x-r.width,y:s};break;default:t={x:n.x,y:n.y}}var u=a?T(a):null;if(null!=u){var l="y"===u?"height":"width";switch(i){case"start":t[u]=Math.floor(t[u])-Math.floor(n[l]/2-r[l]/2);break;case"end":t[u]=Math.floor(t[u])+Math.ceil(n[l]/2-r[l]/2)}}return t}function fe(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,a=n.boundary,i=void 0===a?"clippingParents":a,c=n.rootBoundary,s=void 0===c?"viewport":c,u=n.elementContext,l=void 0===u?"popper":u,f=n.altBoundary,d=void 0!==f&&f,p=n.padding,m=void 0===p?0:p,v=A("number"!=typeof m?m:I(m,F)),b="popper"===l?"reference":"popper",h=e.elements.reference,g=e.rects.popper,O=e.elements[d?b:l],y=se(x(O)?O:O.contextElement||k(e.elements.popper),i,s),w=te(h),j=le({reference:w,element:g,strategy:"absolute",placement:o}),E=ie(Object.assign(Object.assign({},g),j)),M="popper"===l?E:w,D={top:y.top-M.top+v.top,bottom:M.bottom-y.bottom+v.bottom,left:y.left-M.left+v.left,right:M.right-y.right+v.right},C=e.modifiersData.offset;if("popper"===l&&C){var P=C[o];Object.keys(D).forEach((function(e){var t=[q,W].indexOf(e)>=0?1:-1,n=[B,W].indexOf(e)>=0?"y":"x";D[e]+=P[n]*t}))}return D}var de={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,a=void 0===o||o,i=n.altAxis,c=void 0===i||i,s=n.fallbackPlacements,u=n.padding,l=n.boundary,f=n.rootBoundary,d=n.altBoundary,p=n.flipVariations,m=void 0===p||p,v=n.allowedAutoPlacements,b=t.options.placement,h=y(b),g=s||(h===b||!m?[Z(b)]:function(e){if("auto"===y(e))return[];var t=Z(e);return[ee(e),t,ee(t)]}(b)),O=[b].concat(g).reduce((function(e,n){return e.concat("auto"===y(n)?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,a=n.rootBoundary,i=n.padding,c=n.flipVariations,s=n.allowedAutoPlacements,u=void 0===s?z:s,l=ue(r),f=l?c?_:_.filter((function(e){return ue(e)===l})):F,d=f.filter((function(e){return u.indexOf(e)>=0}));0===d.length&&(d=f);var p=d.reduce((function(t,n){return t[n]=fe(e,{placement:n,boundary:o,rootBoundary:a,padding:i})[y(n)],t}),{});return Object.keys(p).sort((function(e,t){return p[e]-p[t]}))}(t,{placement:n,boundary:l,rootBoundary:f,padding:u,flipVariations:m,allowedAutoPlacements:v}):n)}),[]),w=t.rects.reference,j=t.rects.popper,x=new Map,E=!0,M=O[0],D=0;D<O.length;D++){var C=O[D],P=y(C),k="start"===ue(C),R=[B,W].indexOf(P)>=0,S=R?"width":"height",L=fe(t,{placement:C,boundary:l,rootBoundary:f,altBoundary:d,padding:u}),T=R?k?q:H:k?W:B;w[S]>j[S]&&(T=Z(T));var N=Z(T),A=[];if(a&&A.push(L[P]<=0),c&&A.push(L[T]<=0,L[N]<=0),A.every((function(e){return e}))){M=C,E=!1;break}x.set(C,A)}if(E)for(var I=function(e){var t=O.find((function(t){var n=x.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return M=t,"break"},K=m?3:1;K>0;K--){if("break"===I(K))break}t.placement!==M&&(t.modifiersData[r]._skip=!0,t.placement=M,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function pe(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function me(e){return[B,q,W,H].some((function(t){return e[t]>=0}))}var ve={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,a=t.modifiersData.preventOverflow,i=fe(t,{elementContext:"reference"}),c=fe(t,{altBoundary:!0}),s=pe(i,r),u=pe(c,o,a),l=me(s),f=me(u);t.modifiersData[n]={referenceClippingOffsets:s,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:f},t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-reference-hidden":l,"data-popper-escaped":f})}};var be={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,a=void 0===o?[0,0]:o,i=z.reduce((function(e,n){return e[n]=function(e,t,n){var r=y(e),o=[H,B].indexOf(r)>=0?-1:1,a="function"==typeof n?n(Object.assign(Object.assign({},t),{},{placement:e})):n,i=a[0],c=a[1];return i=i||0,c=(c||0)*o,[H,q].indexOf(r)>=0?{x:c,y:i}:{x:i,y:c}}(n,t.rects,a),e}),{}),c=i[t.placement],s=c.x,u=c.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=i}};var he={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=le({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}};var ge={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,a=void 0===o||o,i=n.altAxis,c=void 0!==i&&i,s=n.boundary,u=n.rootBoundary,l=n.altBoundary,f=n.padding,d=n.tether,p=void 0===d||d,m=n.tetherOffset,v=void 0===m?0:m,b=fe(t,{boundary:s,rootBoundary:u,padding:f,altBoundary:l}),h=y(t.placement),g=ue(t.placement),O=!g,j=T(h),x="x"===j?"y":"x",E=t.modifiersData.popperOffsets,M=t.rects.reference,D=t.rects.popper,C="function"==typeof v?v(Object.assign(Object.assign({},t.rects),{},{placement:t.placement})):v,P={x:0,y:0};if(E){if(a){var k="y"===j?B:H,R="y"===j?W:q,S="y"===j?"height":"width",A=E[j],I=E[j]+b[k],F=E[j]-b[R],_=p?-D[S]/2:0,z="start"===g?M[S]:D[S],K="start"===g?-D[S]:-M[S],U=t.elements.arrow,V=p&&U?w(U):{width:0,height:0},J=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Y=J[k],Q=J[R],X=N(0,M[S],V[S]),G=O?M[S]/2-_-X-Y-C:z-X-Y-C,Z=O?-M[S]/2+_+X+Q+C:K+X+Q+C,$=t.elements.arrow&&L(t.elements.arrow),ee=$?"y"===j?$.clientTop||0:$.clientLeft||0:0,te=t.modifiersData.offset?t.modifiersData.offset[t.placement][j]:0,ne=E[j]+G-te-ee,re=E[j]+Z-te,oe=N(p?Math.min(I,ne):I,A,p?Math.max(F,re):F);E[j]=oe,P[j]=oe-A}if(c){var ae="x"===j?B:H,ie="x"===j?W:q,ce=E[x],se=N(ce+b[ae],ce,ce-b[ie]);E[x]=se,P[x]=se-ce}t.modifiersData[r]=P}},requiresIfExists:["offset"]};function Oe(e,t,n){void 0===n&&(n=!1);var r,o,a=k(t),i=te(e),c=E(t),s={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(c||!c&&!n)&&(("body"!==D(t)||oe(a))&&(s=(r=t)!==j(r)&&E(r)?{scrollLeft:(o=r).scrollLeft,scrollTop:o.scrollTop}:ne(r)),E(t)?((u=te(t)).x+=t.clientLeft,u.y+=t.clientTop):a&&(u.x=re(a))),{x:i.left+s.scrollLeft-u.x,y:i.top+s.scrollTop-u.y,width:i.width,height:i.height}}function ye(e){var t=new Map,n=new Set,r=[];return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||function e(o){n.add(o.name),[].concat(o.requires||[],o.requiresIfExists||[]).forEach((function(r){if(!n.has(r)){var o=t.get(r);o&&e(o)}})),r.push(o)}(e)})),r}var we={placement:"bottom",modifiers:[],strategy:"absolute"};function je(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function xe(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,a=void 0===o?we:o;return function(e,t,n){void 0===n&&(n=a);var o,i,c={placement:"bottom",orderedModifiers:[],options:Object.assign(Object.assign({},we),a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},s=[],u=!1,l={state:c,setOptions:function(n){f(),c.options=Object.assign(Object.assign(Object.assign({},a),c.options),n),c.scrollParents={reference:x(e)?ae(e):e.contextElement?ae(e.contextElement):[],popper:ae(t)};var o=function(e){var t=ye(e);return K.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign(Object.assign(Object.assign({},n),t),{},{options:Object.assign(Object.assign({},n.options),t.options),data:Object.assign(Object.assign({},n.data),t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,c.options.modifiers)));return c.orderedModifiers=o.filter((function(e){return e.enabled})),c.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var a=o({state:c,name:t,instance:l,options:r});s.push(a||function(){})}})),l.update()},forceUpdate:function(){if(!u){var e=c.elements,t=e.reference,n=e.popper;if(je(t,n)){c.rects={reference:Oe(t,L(n),"fixed"===c.options.strategy),popper:w(n)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach((function(e){return c.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<c.orderedModifiers.length;r++)if(!0!==c.reset){var o=c.orderedModifiers[r],a=o.fn,i=o.options,s=void 0===i?{}:i,f=o.name;"function"==typeof a&&(c=a({state:c,options:s,name:f,instance:l})||c)}else c.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){l.forceUpdate(),e(c)}))},function(){return i||(i=new Promise((function(e){Promise.resolve().then((function(){i=void 0,e(o())}))}))),i}),destroy:function(){f(),u=!0}};if(!je(e,t))return l;function f(){s.forEach((function(e){return e()})),s=[]}return l.setOptions(n).then((function(e){!u&&n.onFirstUpdate&&n.onFirstUpdate(e)})),l}}var Ee=xe({defaultModifiers:[ve,he,Y,X,be,de,ge,U]}),Me=function(e){return{position:e,top:"0",left:"0",opacity:"0",pointerEvents:"none"}},De={name:"applyStyles",enabled:!1},Ce={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:function(e){var t=e.state;return function(){var e=t.elements,n=e.reference,r=e.popper;if("removeAttribute"in n){var o=(n.getAttribute("aria-describedby")||"").split(",").filter((function(e){return e.trim()!==r.id}));o.length?n.setAttribute("aria-describedby",o.join(",")):n.removeAttribute("aria-describedby")}}},fn:function(e){var t,n=e.state.elements,r=n.popper,o=n.reference,a=null==(t=r.getAttribute("role"))?void 0:t.toLowerCase();if(r.id&&"tooltip"===a&&"setAttribute"in o){var i=o.getAttribute("aria-describedby");o.setAttribute("aria-describedby",i?i+","+r.id:r.id)}}},Pe=[];var ke=function(e,t,n){var r=void 0===n?{}:n,i=r.enabled,c=void 0===i||i,u=r.placement,l=void 0===u?"bottom":u,f=r.strategy,d=void 0===f?"absolute":f,p=r.modifiers,m=void 0===p?Pe:p,v=Object(a.a)(r,["enabled","placement","strategy","modifiers"]),b=Object(s.useRef)(),h=Object(s.useCallback)((function(){var e;null==(e=b.current)||e.update()}),[]),g=Object(s.useCallback)((function(){var e;null==(e=b.current)||e.forceUpdate()}),[]),y=O(Object(s.useState)({placement:l,update:h,forceUpdate:g,attributes:{},styles:{popper:Me(d),arrow:{}}})),w=y[0],j=y[1],x=Object(s.useMemo)((function(){return{name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:function(e){var t=e.state,n={},r={};Object.keys(t.elements).forEach((function(e){n[e]=t.styles[e],r[e]=t.attributes[e]})),j({state:t,styles:n,attributes:r,update:h,forceUpdate:g,placement:t.placement})}}}),[h,g,j]);return Object(s.useEffect)((function(){b.current&&c&&b.current.setOptions({placement:l,strategy:d,modifiers:[].concat(m,[x,De])})}),[d,l,x,c]),Object(s.useEffect)((function(){if(c&&null!=e&&null!=t)return b.current=Ee(e,t,Object(o.a)({},v,{placement:l,strategy:d,modifiers:[].concat(m,[Ce,x])})),function(){null!=b.current&&(b.current.destroy(),b.current=void 0,j((function(e){return Object(o.a)({},e,{attributes:{},styles:{popper:Me(d)}})})))}}),[c,e,t]),w},Re=n("kvSq"),Se=n("4opw"),Le=n("2W6z"),Te=n.n(Le),Ne=n("3Hwf"),Ae=n("i8i4"),Ie=n.n(Ae);var Be=function(e){return Object(Ne.a)(function(e){return e&&"setState"in e?Ie.a.findDOMNode(e):null!=e?e:null}(e))},We=function(){};var qe=function(e){return e&&("current"in e?e.current:e)};var He=function(e,t,n){var r=void 0===n?{}:n,o=r.disabled,a=r.clickTrigger,i=void 0===a?"click":a,c=Object(s.useRef)(!1),u=t||We,l=Object(s.useCallback)((function(t){var n,r=qe(e);Te()(!!r,"RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"),c.current=!(r&&(n=t,!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey))&&function(e){return 0===e.button}(t)&&!Object(Re.a)(r,t.target))}),[e]),f=Object(b.a)((function(e){c.current||u(e)})),d=Object(b.a)((function(e){27===e.keyCode&&u(e)}));Object(s.useEffect)((function(){if(!o&&null!=e){var t=Be(qe(e)),n=Object(Se.a)(t,i,l,!0),r=Object(Se.a)(t,i,f),a=Object(Se.a)(t,"keyup",d),c=[];return"ontouchstart"in t.documentElement&&(c=[].slice.call(t.body.children).map((function(e){return Object(Se.a)(e,"mousemove",We)}))),function(){n(),r(),a(),c.forEach((function(e){return e()}))}}}),[e,o,i,l,f,d])};function Fe(e){var t,n,r,a,i,c=e.enabled,s=e.enableEvents,u=e.placement,l=e.flip,f=e.offset,d=e.containerPadding,p=e.arrowElement,m=e.popperConfig,v=void 0===m?{}:m,b=function(e){var t={};return Array.isArray(e)?(null==e||e.forEach((function(e){t[e.name]=e})),t):e||t}(v.modifiers);return Object(o.a)({},v,{placement:u,enabled:c,modifiers:(i=Object(o.a)({},b,{eventListeners:{enabled:s},preventOverflow:Object(o.a)({},b.preventOverflow,{options:d?Object(o.a)({padding:d},null==(t=b.preventOverflow)?void 0:t.options):null==(n=b.preventOverflow)?void 0:n.options}),offset:{options:Object(o.a)({offset:f},null==(r=b.offset)?void 0:r.options)},arrow:Object(o.a)({},b.arrow,{enabled:!!p,options:Object(o.a)({},null==(a=b.arrow)?void 0:a.options,{element:p})}),flip:Object(o.a)({enabled:!!l},b.flip)}),void 0===i&&(i={}),Array.isArray(i)?i:Object.keys(i).map((function(e){return i[e].name=e,i[e]})))})}var _e=function(){};function ze(e){void 0===e&&(e={});var t=Object(s.useContext)(h),n=Object(m.a)(),r=n[0],i=n[1],c=Object(s.useRef)(!1),u=e,l=u.flip,f=u.offset,d=u.rootCloseEvent,p=u.popperConfig,v=void 0===p?{}:p,b=u.usePopper,g=void 0===b?!!t:b,O=null==(null==t?void 0:t.show)?e.show:t.show,y=null==(null==t?void 0:t.alignEnd)?e.alignEnd:t.alignEnd;O&&!c.current&&(c.current=!0);var w=function(e){null==t||t.toggle(!1,e)},j=t||{},x=j.drop,E=j.setMenu,M=j.menuElement,D=j.toggleElement,C=y?"bottom-end":"bottom-start";"up"===x?C=y?"top-end":"top-start":"right"===x?C=y?"right-end":"right-start":"left"===x&&(C=y?"left-end":"left-start");var P,k=ke(D,M,Fe({placement:C,enabled:!(!g||!O),enableEvents:O,offset:f,flip:l,arrowElement:r,popperConfig:v})),R=k.styles,S=k.attributes,L=Object(a.a)(k,["styles","attributes"]),T={ref:E||_e,"aria-labelledby":null==D?void 0:D.id},N={show:O,alignEnd:y,hasShown:c.current,close:w};return P=g?Object(o.a)({},L,N,{props:Object(o.a)({},T,S.popper,{style:R.popper}),arrowProps:Object(o.a)({ref:i},S.arrow,{style:R.arrow})}):Object(o.a)({},N,{props:T}),He(M,w,{clickTrigger:d,disabled:!(P&&O)}),P}function Ke(e){var t=e.children,n=ze(Object(a.a)(e,["children"]));return u.a.createElement(u.a.Fragment,null,n.hasShown?t(n):null)}Ke.displayName="ReactOverlaysDropdownMenu",Ke.defaultProps={usePopper:!0};var Ue=Ke,Ve=function(){};function Je(){var e=Object(s.useContext)(h)||{},t=e.show,n=void 0!==t&&t,r=e.toggle,o=void 0===r?Ve:r;return[{ref:e.setToggle||Ve,"aria-haspopup":!0,"aria-expanded":!!n},{show:n,toggle:o}]}function Ye(e){var t=e.children,n=Je(),r=n[0],o=n[1],a=o.show,i=o.toggle;return u.a.createElement(u.a.Fragment,null,t({show:a,toggle:i,props:r}))}Ye.displayName="ReactOverlaysDropdownToggle";var Qe=Ye;function Xe(e){var t=e.drop,n=e.alignEnd,o=e.defaultShow,a=e.show,i=e.onToggle,c=e.itemSelector,l=void 0===c?"* > *":c,g=e.focusFirstItemOnShow,O=e.children,y=Object(v.a)(),w=Object(d.b)(a,o,i),j=w[0],x=w[1],E=Object(m.a)(),M=E[0],D=E[1],C=Object(s.useRef)(null),P=C.current,k=Object(s.useCallback)((function(e){C.current=e,y()}),[y]),R=Object(p.a)(j),S=Object(s.useRef)(null),L=Object(s.useRef)(!1),T=Object(s.useCallback)((function(e){x(!j,e)}),[x,j]),N=Object(s.useMemo)((function(){return{toggle:T,drop:t,show:j,alignEnd:n,menuElement:P,toggleElement:M,setMenu:k,setToggle:D}}),[T,t,j,n,P,M,k,D]);P&&R&&!j&&(L.current=P.contains(document.activeElement));var A=Object(b.a)((function(){M&&M.focus&&M.focus()})),I=Object(b.a)((function(){var e=S.current,t=g;if(null==t&&(t=!(!C.current||!function(e,t){if(!r){var n=document.body,o=n.matches||n.matchesSelector||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector;r=function(e,t){return o.call(e,t)}}return r(e,t)}(C.current,"[role=menu]"))&&"keyboard"),!1!==t&&("keyboard"!==t||/^key.+$/.test(e))){var n=f(C.current,l)[0];n&&n.focus&&n.focus()}}));Object(s.useEffect)((function(){j?I():L.current&&(L.current=!1,A())}),[j,L,A,I]),Object(s.useEffect)((function(){S.current=null}));var B=function(e,t){if(!C.current)return null;var n=f(C.current,l),r=n.indexOf(e)+t;return n[r=Math.max(0,Math.min(r,n.length))]};return u.a.createElement(h.Provider,{value:N},O({props:{onKeyDown:function(e){var t=e.key,n=e.target;if(!/input|textarea/i.test(n.tagName)||!(" "===t||"Escape"!==t&&C.current&&C.current.contains(n)))switch(S.current=e.type,t){case"ArrowUp":var r=B(n,-1);return r&&r.focus&&r.focus(),void e.preventDefault();case"ArrowDown":if(e.preventDefault(),j){var o=B(n,1);o&&o.focus&&o.focus()}else T(e);return;case"Escape":case"Tab":x(!1,e)}}}}))}Xe.displayName="ReactOverlaysDropdown",Xe.Menu=Ue,Xe.Toggle=Qe;var Ge=Xe,Ze=n("ILyh"),$e=n("vUet"),et=n("F9IU"),tt={as:n("dbZe").a,disabled:!1},nt=u.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,i=e.children,l=e.eventKey,f=e.disabled,d=e.href,p=e.onClick,m=e.onSelect,v=e.active,h=e.as,g=Object(a.a)(e,["bsPrefix","className","children","eventKey","disabled","href","onClick","onSelect","active","as"]),O=Object($e.a)(n,"dropdown-item"),y=Object(s.useContext)(Ze.a),w=(Object(s.useContext)(et.a)||{}).activeKey,j=Object(Ze.b)(l||null,d),x=null==v&&null!=j?Object(Ze.b)(w)===j:v,E=Object(b.a)((function(e){f||(p&&p(e),y&&y(j,e),m&&m(j,e))}));return u.a.createElement(h,Object(o.a)({},g,{ref:t,href:d,disabled:f,className:c()(r,O,x&&"active",f&&"disabled"),onClick:E}),i)}));nt.displayName="DropdownItem",nt.defaultProps=tt;var rt=nt,ot=n("lcWJ"),at=n("qUpC");n("QLaP");function it(e,t){return e}function ct(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}function st(e){var t=window.getComputedStyle(e);return{top:parseFloat(t.marginTop)||0,right:parseFloat(t.marginRight)||0,bottom:parseFloat(t.marginBottom)||0,left:parseFloat(t.marginLeft)||0}}var ut=u.a.forwardRef((function(e,t){var n,r,i=e.bsPrefix,l=e.className,f=e.alignRight,d=e.rootCloseEvent,p=e.flip,m=e.show,v=e.renderOnMount,b=e.as,h=void 0===b?"div":b,g=e.popperConfig,O=Object(a.a)(e,["bsPrefix","className","alignRight","rootCloseEvent","flip","show","renderOnMount","as","popperConfig"]),y=Object(s.useContext)(at.a),w=Object($e.a)(i,"dropdown-menu"),j=(n=Object(s.useRef)(null),r=Object(s.useRef)(null),[Object(s.useCallback)((function(e){e&&(ct(e,"popover")||ct(e,"dropdown-menu"))&&(r.current=st(e),e.style.margin="0",n.current=e)}),[]),[Object(s.useMemo)((function(){return{name:"offset",options:{offset:function(e){var t=e.placement;if(!r.current)return[0,0];var n=r.current,o=n.top,a=n.left,i=n.bottom,c=n.right;switch(t.split("-")[0]){case"top":return[0,i];case"left":return[0,c];case"bottom":return[0,o];case"right":return[0,a];default:return[0,0]}}}}}),[r]),Object(s.useMemo)((function(){return{name:"popoverArrowMargins",enabled:!0,phase:"main",requiresIfExists:["arrow"],effect:function(e){var t=e.state;if(n.current&&t.elements.arrow&&ct(n.current,"popover")&&t.modifiersData["arrow#persistent"]){var r=st(t.elements.arrow),o=r.top,a=r.right,i=o||a;return t.modifiersData["arrow#persistent"].padding={top:i,left:i,right:i,bottom:i},t.elements.arrow.style.margin="0",function(){t.elements.arrow&&(t.elements.arrow.style.margin="")}}}}}),[])]]),x=j[0],E=j[1],M=ze({flip:p,rootCloseEvent:d,show:m,alignEnd:f,usePopper:!y,popperConfig:Object(o.a)({},g,{modifiers:E.concat((null==g?void 0:g.modifiers)||[])})}),D=M.hasShown,C=M.placement,P=M.show,k=M.alignEnd,R=M.close,S=M.props;return S.ref=Object(ot.a)(x,Object(ot.a)(it(t),S.ref)),D||v?("string"!=typeof h&&(S.show=P,S.close=R,S.alignRight=k),C&&(O.style=Object(o.a)({},O.style,{},S.style),O["x-placement"]=C),u.a.createElement(h,Object(o.a)({},O,S,{className:c()(l,w,P&&"show",k&&w+"-right")}))):null}));ut.displayName="DropdownMenu",ut.defaultProps={alignRight:!1,flip:!0};var lt=ut,ft=(n("BO/t"),n("cWnB")),dt=u.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.split,i=e.className,s=e.children,l=e.childBsPrefix,f=e.as,d=void 0===f?ft.a:f,p=Object(a.a)(e,["bsPrefix","split","className","children","childBsPrefix","as"]),m=Object($e.a)(n,"dropdown-toggle");void 0!==l&&(p.bsPrefix=l);var v=Je(),b=v[0],h=v[1].toggle;return b.ref=Object(ot.a)(b.ref,it(t)),u.a.createElement(d,Object(o.a)({onClick:h,className:c()(i,m,r&&m+"-split")},b,p),s)}));dt.displayName="DropdownToggle";var pt=dt,mt=n("YdCC"),vt=Object(mt.a)("dropdown-header",{defaultProps:{role:"heading"}}),bt=Object(mt.a)("dropdown-divider",{defaultProps:{role:"separator"}}),ht=Object(mt.a)("dropdown-item-text",{Component:"span"}),gt=u.a.forwardRef((function(e,t){var n=Object(d.a)(e,{show:"onToggle"}),r=n.bsPrefix,i=n.drop,l=n.show,f=n.className,p=n.alignRight,m=n.onSelect,v=n.onToggle,h=n.focusFirstItemOnShow,g=n.as,O=void 0===g?"div":g,y=(n.navbar,Object(a.a)(n,["bsPrefix","drop","show","className","alignRight","onSelect","onToggle","focusFirstItemOnShow","as","navbar"])),w=Object(s.useContext)(Ze.a),j=Object($e.a)(r,"dropdown"),x=Object(b.a)((function(e,t,n){void 0===n&&(n=t.type),t.currentTarget===document&&(n="rootClose"),v&&v(e,t,{source:n})})),E=Object(b.a)((function(e,t){w&&w(e,t),m&&m(e,t),x(!1,t,"select")}));return u.a.createElement(Ze.a.Provider,{value:E},u.a.createElement(Ge,{drop:i,show:l,alignEnd:p,onToggle:x,focusFirstItemOnShow:h,itemSelector:"."+j+"-item:not(.disabled):not(:disabled)"},(function(e){var n=e.props;return u.a.createElement(O,Object(o.a)({},y,n,{ref:t,className:c()(f,l&&"show",(!i||"down"===i)&&j,"up"===i&&"dropup","right"===i&&"dropright","left"===i&&"dropleft")}))})))}));gt.displayName="Dropdown",gt.defaultProps={navbar:!1},gt.Divider=bt,gt.Header=vt,gt.Item=rt,gt.ItemText=ht,gt.Menu=lt,gt.Toggle=pt;t.a=gt},"BO/t":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n,r,o,a){var i=r||"<<anonymous>>",c=a||n;if(null==t[n])return new Error("The "+o+" `"+c+"` is required to make `"+i+"` accessible for users of assistive technologies such as screen readers.");for(var s=arguments.length,u=Array(s>5?s-5:0),l=5;l<s;l++)u[l-5]=arguments[l];return e.apply(void 0,[t,n,r,o,a].concat(u))}},e.exports=t.default},Bl7J:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("Wbzz"),i=n("PQoA"),c=n.n(i),s=n("6ctO"),u=n("+YzT"),l=n("GWEY"),f=n("QojX"),d=n("cWnB"),p=n("jDKy"),m=function(e){e.siteTitle;return o.a.createElement("header",null,o.a.createElement(s.a,{collapseOnSelect:!0,expand:"lg",bg:"light",variant:"light"},o.a.createElement(s.a.Brand,{href:"/"},o.a.createElement("img",{src:c.a,width:"160",height:"30",style:{margin:0,padding:0},alt:"Aladdin International"})),o.a.createElement(s.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),o.a.createElement(s.a.Collapse,{id:"responsive-navbar-nav"},o.a.createElement(u.a,{className:"mr-auto"},o.a.createElement(u.a.Link,{href:"#features"},"Weekly Ad"),o.a.createElement(u.a.Link,{href:"/hours"},"Hours & Location"),o.a.createElement(l.a,{title:"Products",id:"collasible-nav-dropdown"},o.a.createElement(l.a.Item,{href:"/produce"},"Produce"),o.a.createElement(l.a.Item,{href:"/meat"},"Meat and Poultry"),o.a.createElement(l.a.Item,{href:"/bakery"},"Bakery"),o.a.createElement(l.a.Item,{href:"/deli"},"Deli"),o.a.createElement(l.a.Item,{href:"/frozen"},"Frozen Goods"),o.a.createElement(l.a.Item,{href:"/health"},"Health and Beauty"))),o.a.createElement(f.a,{inline:!0,style:{margin:0,padding:0}},o.a.createElement(p.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),o.a.createElement(d.a,{variant:"outline-primary"},"Search")),o.a.createElement(u.a,null,o.a.createElement(u.a.Link,{href:"/"},"About us"),o.a.createElement(u.a.Link,{eventKey:2,href:"/contact"},"Contact us")))))};m.defaultProps={siteTitle:""};var v=m;n("8ypT"),t.a=function(e){var t=e.children,n=Object(a.useStaticQuery)("3649515864");return o.a.createElement(o.a.Fragment,null,o.a.createElement(v,{siteTitle:n.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem"}},o.a.createElement("main",null,t)))}},GWEY:function(e,t,n){"use strict";var r=n("wx14"),o=n("zLVn"),a=n("q1tI"),i=n.n(a),c=n("97+O"),s=n("Mj5q"),u=n("iKII"),l=i.a.forwardRef((function(e,t){var n=e.id,a=e.title,l=e.children,f=e.bsPrefix,d=e.rootCloseEvent,p=e.menuRole,m=e.disabled,v=e.active,b=e.renderMenuOnMount,h=Object(o.a)(e,["id","title","children","bsPrefix","rootCloseEvent","menuRole","disabled","active","renderMenuOnMount"]);return i.a.createElement(c.a,Object(r.a)({ref:t},h,{as:s.a}),i.a.createElement(c.a.Toggle,{id:n,eventKey:null,active:v,disabled:m,childBsPrefix:f,as:u.a},a),i.a.createElement(c.a.Menu,{role:p,renderOnMount:b,rootCloseEvent:d},l))}));l.displayName="NavDropdown",l.Item=c.a.Item,l.ItemText=c.a.ItemText,l.Divider=c.a.Divider,l.Header=c.a.Header,t.a=l},XcHJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI");function o(){var e=Object(r.useRef)(!0),t=Object(r.useRef)((function(){return e.current}));return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},kvSq:function(e,t,n){"use strict";function r(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}n.d(t,"a",(function(){return r}))},qvwu:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI");function o(e){var t=Object(r.useRef)(null);return Object(r.useEffect)((function(){t.current=e})),t.current}},vxNi:function(e,t,n){"use strict";t.a=!("undefined"==typeof window||!window.document||!window.document.createElement)}}]);
//# sourceMappingURL=5c7fc5cdc3c99bbd954ea238a0e88b3813ec59e3-7d4a91f82662f6076e25.js.map