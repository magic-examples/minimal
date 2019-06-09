"use strict";function b(a){for(var b=1;b<arguments.length;b++){var d=null==arguments[b]?{}:arguments[b],e=Object.keys(d);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(d).filter(function(a){return Object.getOwnPropertyDescriptor(d,a).enumerable}))),e.forEach(function(b){c(a,b,d[b])})}return a}function c(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function d(a,b){if(null==a)return{};var c,d,f=e(a,b);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(a);for(d=0;d<g.length;d++)c=g[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(f[c]=a[c])}return f}function e(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function f(a,b){return k(a)||j(a,b)||g()}function g(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function j(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}function k(a){if(Array.isArray(a))return a}function l(a){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},l(a)}var m=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,i=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=i(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(!!(b&&!0!==b)&&("function"==typeof b[0]?[b]:k(b)))},d)},m=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},n=function(c,a){for(var b in j(c,a)){if(c[b]!==a[b]&&!m(c[b],a[b]))return!0;a[b]=c[b]}},o=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||n(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},p=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2).toLowerCase()]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=i(d)))?a.setAttribute(b,d):a.removeAttribute(b)},q=function(a,c,d){var e=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name):document.createElement(a.name),f=a.props;for(var g in f)p(e,g,null,f[g],c,d);for(var h=0,j=a.children.length;h<j;h++)e.appendChild(q(a.children[h]=u(a.children[h]),c,d));return a.node=e},r=function(a){return null==a?null:a.key},s=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(q(e=u(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,o=e.props,t=d.children,v=e.children,w=0,x=0,y=t.length-1,z=v.length-1;for(var A in g=g||"svg"===e.name,j(n,o))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==o[A]&&p(c,A,n[A],o[A],f,g);for(;x<=z&&w<=y&&null!=(l=r(t[w]))&&l===r(v[x]);)s(c,t[w].node,t[w],v[x]=u(v[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=r(t[y]))&&l===r(v[z]);)s(c,t[y].node,t[y],v[z]=u(v[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(q(v[x]=u(v[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=r(k=t[w]),m=r(v[x]=u(v[x],k)),C[l]||null!=m&&m===r(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(s(c,k&&k.node,k,v[x],f,g),x++),w++):(l===m?(s(c,k.node,k,v[x],f,g),C[m]=!0,w++):null==(h=B[m])?s(c,k&&k.node,null,v[x],f,g):(s(c,c.insertBefore(h.node,k&&k.node),h,v[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==r(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},t=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},u=function(b,c){return b.type===a?((!c||t(c.lazy,b.lazy))&&((c=b.lazy.view(b.lazy)).lazy=b.lazy),c):b},v=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},w=function(a,e){return v(a,c,d,e,null,b)},x=function(a){return a.nodeType===b?w(a.nodeValue,a):v(a.nodeName.toLowerCase(),c,e.call(a.childNodes,x),a,null,1)},y=function(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push("object"===l(d)?d:w(d));return b=b||c,"function"==typeof a?a(b,g):v(a,b,g,null,b.key)};return{h:y,app:function app(a,b){var c={},d=!1,e=a.view,h=a.node,i=h&&x(h),j=a.subscriptions,l=[],m=function(a){p(this.actions[a.type],a)},n=function(a){return c===a||d||g(q,d=!0),c=a},p=(b||function(a){return a})(function(a,b,d){return"function"==typeof a?p(a(c,b),d||b):f(a)?"function"==typeof a[0]?p(a[0],"function"==typeof(a=a[1])?a(b):a,b):(k(a.slice(1)).map(function(a){a&&a[0](p,a[1],b)},n(a[0])),c):n(a)}),q=function(){d=!1,j&&(l=o(l,k(j(c)),p)),e&&(h=s(h.parentNode,h,i,"string"==typeof(i=e(c))?w(i):i,m))};p(a.init)}}}(),o=m.h,h=m.app,i=function(a){return function(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},d=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===l(a)})};return d||(e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})),o(a,b,d)}},n=i("a"),a=i("div"),q=i("footer"),r=i("h3"),s=i("header"),t=i("img"),u=i("input"),v=i("label"),w=i("li"),x=i("main"),y=i("nav"),z=i("p"),A=i("span"),B=i("ul"),p={cookies:{},gdpr:{allowAllCookiesButtonText:"Allow all",allowCookieButtonText:"Allow selected",cookieButtonText:"Awesome.",cookieText:"We are using the following cookies on this page",denyCookieButtonText:"Deny all",noCookieButtonText:"Awesome.",noCookieText:"This page does neither save, collect, nor share any personal data about you.",show:!0,title:"Magic Privacy Information"},pageClass:{},root:"/example-minimal/",title:"@magic: hello, world",url:"/example-minimal/"},C={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}},mapClickToGo:function mapClickToGo(a){return a.preventDefault(),a}},D=function(b){var c=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return q({class:"Footer"},[a({class:"Container"},[c,a({class:"Credits"},["made with a few bits of ",H({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])]),E(b)])},E=function(b){var c=b.gdpr,d=b.cookies;if(c.show)return d=Object.entries(d),a({class:{Gdpr:!0,show:c.show}},[u({type:"checkbox",name:"show-hide",id:"show-hide",checked:!c.show}),a({class:"Container"},[c.title&&r(c.title),c.content&&z(c.content),d.length?[c.cookieText&&z(c.cookieText),B(d.sort(function(a){var b=f(a,2),c=b[0],d=b[1].required;return d?0:1}).map(function(a){var b=f(a,2),c=b[0],d=b[1],e=d.info,g=d.allowed;return w([u({type:"checkbox",title:"allow",checked:void 0!==g&&g,onchange:[M.gdpr.allow,{name:c}]}),v([c,e&&[" - ",e]])])}))]:z(c.noCookieText),d.length?[v({class:"button",for:"show-hide",onclick:[M.gdpr.close,{allowed:!0}]},c.allowAllCookiesButtonText),v({class:"button",for:"show-hide",onclick:M.gdpr.close},c.allowCookieButtonText),v({class:"button",for:"show-hide",onclick:[M.gdpr.close,{allowed:!1}]},c.denyCookieButtonText)]:v({class:"button",for:"show-hide",onclick:M.gdpr.close},c.noCookieButtonText)])])},F=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],c=a.logo,e=a.menu,f=a.logotext,g=d(a,["logo","menu","logotext"]);return c||e||f?s({class:"Header"},[(c||f)&&H({to:g.root,class:"Logo"},[c&&G(c),f&&A(f)]),e&&I({state:g,items:e}),b]):void 0},G=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),t(a)},H=function(a,b){var c=a.to,e=d(a,["to"]),f=e.href,g=e.text,h=e.nofollow,i=e.noreferrer,j=e.onclick,k=d(e,["href","text","nofollow","noreferrer","onclick"]);c=c||f||"",k.href=c;var l=c.startsWith("/");return l?k.onclick=[M.go,C.mapClickToGo]:(k.target="_blank",k.rel="noopener",h&&(k.rel+=" nofollow"),i&&(k.rel+=" noreferrer")),n(k,[g,b])},I=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},c=a.items,d=a["class"],e=void 0===d?"Menu":d,f=a.collapse,g=a.state;if(c.length){var h=g.url||"";return g.hash&&!h.endsWith(g.hash)&&(h+="#".concat(g.hash)),y({className:e},B(c.map(function(a){return J(b({},a,{url:h,state:g,collapse:void 0===f||f}))})))}},J=function(a){var c=a.text,e=a.items,f=void 0===e?[]:e,g=a.url,h=a.state,i=a.parentTo,j=void 0===i?void 0:i,k=a.collapse,l=d(a,["text","items","url","state","parentTo","collapse"]),m=h.root;if(l.to||c){var n={class:{}},o=l.to;o.startsWith("/#")&&(o=o.substr(1));var p=l.to[0],q="/"===p||"-"===p||"#"===p;if(j&&q)if("-"===p)o=j+o;else if("#"===p)o=j+o;else{var u=o.split("/")[1];if(u){var v=j.endsWith("/".concat(u,"/"));!v&&q&&(o=j+o)}}var r=o.startsWith(m);m&&q&&!r&&(o=m+o),l.to=o.replace(/\/\//g,"/");var s=g&&g.includes(l.to);g.endsWith(l.to)&&(n["class"].active=!0);var t=[];return(f.length&&s||!k)&&(t=B(f.map(function(a){return J(b({parentTo:l.to,url:g,state:h,collapse:k},a))}))),w(n,[l.to?H(l,c):A(l,c),t])}},K=function(b){var c=b.page,d=b.state;c=c?c(d):"404 - not found";var e={id:"Magic",class:d.pageClass};return x(e,a({class:{Wrapper:!0}},L({state:d,page:c})))},L=function(b){var c=b.page,d=b.state;return[F(d),a({class:"Page"},c),D(d)]},M={gdpr:{allow:function allow(a,c){return a.cookies[c.name].allowed=!0,b({},a)},close:function close(a,c){var d=c.allowed,e=a.cookies;return"boolean"==typeof d&&Object.entries(a.cookies).forEach(function(a){var c=f(a,2),g=c[0],h=c[1];e[g]=b({},h,{allowed:d})}),[b({},a,{gdpr:b({},a.gdpr,{show:!1}),cookies:e}),[N.gdpr.writeLocalStorage,{key:"gdpr",value:{cookies:a.cookies||[],show:!1}}]]},load:function load(a){return[a,[N.gdpr.readLocalStorage,{key:"gdpr",action:M.gdpr.show}]]},show:function show(a,c){return b({},a,{gdpr:b({},a.gdpr,c.value)})}},go:function go(a,c){var d=c.currentTarget.href.replace(window.location.origin,""),e=d.split("#"),g=f(e,2),h=g[0],i=g[1],j=void 0===i?"":i;if(h===a.url&&j===a.hash)return a;if(window.history.pushState({url:h,hash:j},"",d),j){var k=document.getElementById(j);k&&window.scrollTo(0,k.scrollTop),window.location.hash=j}else window.scrollTo(0,0);return b({},a,{url:h,hash:j,prev:a.url})},pop:function pop(a,c){var d=window.location,e=d.pathname,f=d.hash;return f=f.substring(1),c.state&&(e=c.state.url,f=c.state.hash),f?window.location.hash=f:window.scrollTo(0,0),b({},a,{url:e,hash:f})}},N={gdpr:{readLocalStorage:function readLocalStorage(a,b){var c=b.key,d=b.action,e=window.localStorage||{},f=e[c];"undefined"!=typeof f&&(f=JSON.parse(f)),a(d,{key:c,value:f})},writeLocalStorage:function writeLocalStorage(a,b){var c=b.key,d=b.value,e=window.localStorage||{};e[c]=JSON.stringify(d)}}},O={"/example-minimal/":function exampleMinimal(b){return a(b.title)},"/example-minimal/404/":function exampleMinimal404(){return a("404 - not found")}};h({init:function init(){return M.gdpr.load(b({},p,{url:window.location.pathname}))},subscriptions:function subscriptions(){return[[C.listenPopState,M.pop]]},view:function view(a){var b=O[a.url]?a.url:"/404/",c=O[b];return a.pages&&a.pages[b]&&Object.keys(a.pages[b]).forEach(function(c){a[c]=a.pages[b][c]}),K({page:c,state:a})},node:document.getElementById("Magic")});