"use strict";function b(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function c(a){for(var c,e=1;e<arguments.length;e++)c=null==arguments[e]?{}:arguments[e],e%2?b(c,!0).forEach(function(b){d(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):b(c).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))});return a}function d(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function e(a,b){if(null==a)return{};var c,d,e=f(a,b);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(a);for(d=0;d<g.length;d++)c=g[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function f(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function g(a,b){return l(a)||k(a,b)||j()}function j(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function k(a,b){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function l(a){if(Array.isArray(a))return a}function m(a){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},m(a)}var n=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,i=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=i(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(b&&!0!==b?"function"==typeof b[0]?[b]:k(b):0)},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},n=function(c,a){if(c!==a)for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},o=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||n(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},p=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2).toLowerCase()]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=i(d)))?a.setAttribute(b,d):a.removeAttribute(b)},q=function(a,c,d){var e=a.props,f=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name,{is:e.is}):document.createElement(a.name,{is:e.is});for(var g in e)p(f,g,null,e[g],c,d);for(var h=0,j=a.children.length;h<j;h++)f.appendChild(q(a.children[h]=u(a.children[h]),c,d));return a.node=f},r=function(a){return null==a?null:a.key},s=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(q(e=u(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,o=e.props,t=d.children,v=e.children,w=0,x=0,y=t.length-1,z=v.length-1;for(var A in g=g||"svg"===e.name,j(n,o))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==o[A]&&p(c,A,n[A],o[A],f,g);for(;x<=z&&w<=y&&null!=(l=r(t[w]))&&l===r(v[x]);)s(c,t[w].node,t[w],v[x]=u(v[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=r(t[y]))&&l===r(v[z]);)s(c,t[y].node,t[y],v[z]=u(v[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(q(v[x]=u(v[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=r(k=t[w]),m=r(v[x]=u(v[x],k)),C[l]||null!=m&&m===r(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(s(c,k&&k.node,k,v[x],f,g),x++),w++):(l===m?(s(c,k.node,k,v[x],f,g),C[m]=!0,w++):null==(h=B[m])?s(c,k&&k.node,null,v[x],f,g):(s(c,c.insertBefore(h.node,k&&k.node),h,v[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==r(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},t=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},u=function(b,c){return b.type===a?((!c||t(c.lazy,b.lazy))&&((c=b.lazy.view(b.lazy)).lazy=b.lazy),c):b},v=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},w=function(a,e){return v(a,c,d,e,void 0,b)},x=function(a){return a.nodeType===b?w(a.nodeValue,a):v(a.nodeName.toLowerCase(),c,e.call(a.childNodes,x),a,void 0,1)},y=function(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push("object"===m(d)?d:w(d));return b=b||c,"function"==typeof a?a(b,g):v(a,b,g,void 0,b.key)};return{h:y,app:function app(a){var b={},c=!1,d=a.view,e=a.node,h=e&&x(e),i=a.subscriptions,j=[],l=function(a){n(this.actions[a.type],a)},m=function(a){return b!==a&&(b=a,i&&(j=o(j,k([i(b)]),n)),d&&!c&&g(p,c=!0)),b},n=(a.middleware||function(a){return a})(function(a,c){return"function"==typeof a?n(a(b,c)):f(a)?"function"==typeof a[0]?n(a[0],"function"==typeof a[1]?a[1](c):a[1]):(k(a.slice(1)).map(function(a){a&&a[0](n,a[1])},m(a[0])),b):m(a)}),p=function(){c=!1,e=s(e.parentNode,e,h,h="string"==typeof(h=d(b))?w(h):h,l)};n(a.init)}}}(),o=n.h,h=n.app,i=function(a){return function(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},d=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===m(a)})};return d||(e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})),o(a,b,d)}},q=i("a"),a=i("div"),r=i("footer"),s=i("h3"),t=i("header"),u=i("img"),v=i("input"),w=i("label"),x=i("li"),y=i("link"),z=i("main"),A=i("meta"),B=i("nav"),C=i("p"),p=i("script"),D=i("span"),E=i("title"),F=i("ul"),G={cookies:{},gdpr:{allowAllCookiesButtonText:"Allow all",allowCookieButtonText:"Allow selected",cookieButtonText:"Awesome.",cookieText:"We are using the following cookies on this page",denyCookieButtonText:"Deny all",noCookieButtonText:"Awesome.",noCookieText:"This page does neither save, collect, nor share any personal data about you.",show:!0,title:"Magic Privacy Information"},pageClass:{},root:"/example-minimal/",title:"@magic: hello, world",url:"/example-minimal/"},H={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}},mapClickToGo:function mapClickToGo(a){return a.preventDefault(),a}},I=function(b){var c=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return r({class:"Footer"},[a({class:"Container"},[c,a({class:"Credits"},["made with a few bits of ",M({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])]),J(b)])},J=function(b){var c=b.gdpr,d=b.cookies;if(c.show)return d=Object.entries(d),a({class:{Gdpr:!0,show:c.show}},[v({type:"checkbox",name:"show-hide",id:"show-hide",checked:!c.show}),a({class:"Container"},[c.title&&s(c.title),c.content&&C(c.content),d.length?[c.cookieText&&C(c.cookieText),F(d.sort(function(a){var b=g(a,2),c=b[0],d=b[1].required;return d?0:1}).map(function(a){var b=g(a,2),c=b[0],d=b[1],e=d.info,f=d.allowed;return x([v({type:"checkbox",title:"allow",checked:void 0!==f&&f,onchange:[R.gdpr.allow,{name:c}]}),w([c,e&&[" - ",e]])])}))]:C(c.noCookieText),d.length?[w({class:"button",for:"show-hide",onclick:[R.gdpr.close,{allowed:!0}]},c.allowAllCookiesButtonText),w({class:"button",for:"show-hide",onclick:R.gdpr.close},c.allowCookieButtonText),w({class:"button",for:"show-hide",onclick:[R.gdpr.close,{allowed:!1}]},c.denyCookieButtonText)]:w({class:"button",for:"show-hide",onclick:R.gdpr.close},c.noCookieButtonText)])])},K=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],c=a.logo,d=a.menu,f=a.logotext,g=e(a,["logo","menu","logotext"]);return c||d||f?t({class:"Header"},[(c||f)&&M({to:g.root,class:"Logo"},[c&&L(c),f&&D(f)]),d&&N({state:g,items:d}),b]):void 0},L=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),u(a)},M=function(a,b){var c=a.to,d=e(a,["to"]),f=d.href,g=d.text,h=d.nofollow,i=d.noreferrer,j=e(d,["href","text","nofollow","noreferrer"]);c=c||f||"",j.href=c;var k=c.startsWith("/");return k?j.onclick=[R.go,H.mapClickToGo]:(j.target="_blank",j.rel="noopener",h&&(j.rel+=" nofollow"),i&&(j.rel+=" noreferrer")),q(j,[g,b])},N=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a.items,d=a["class"],e=void 0===d?"Menu":d,f=a.collapse,g=a.state;if(b.length){var h=g.url||"";return g.hash&&!h.endsWith(g.hash)&&(h+="#".concat(g.hash)),B({className:e},F(b.map(function(a){return O(c({},a,{url:h,state:g,collapse:void 0===f||f}))})))}},O=function(a){var b=a.text,d=a.items,f=void 0===d?[]:d,g=a.url,h=a.state,i=a.parentTo,j=void 0===i?void 0:i,k=a.collapse,l=e(a,["text","items","url","state","parentTo","collapse"]),m=h.root;if(l.to||b){var n={class:{}},o=l.to;o.startsWith("/#")&&(o=o.substr(1));var p=l.to[0],q="/"===p||"-"===p||"#"===p;if(j&&q)if("-"===p||"#"===p)o=j+o;else{var u=o.split("/")[1];if(u){var v=j.endsWith("/".concat(u,"/"));!v&&q&&(o=j+o)}}("/"!==l.to&&g.endsWith(l.to)||l.to===g)&&(n["class"].active=!0);var r=o.startsWith(m);m&&q&&!r&&(o=m+o),l.to=o.replace(/\/\//g,"/");var s=[],t=g&&g.includes(l.to);return(f.length&&t||!k)&&(s=F(f.map(function(a){return O(c({parentTo:l.to,url:g,state:h,collapse:k},a))}))),x(n,[l.to?M(l,b):D(l,b),s])}},P=function(b){var c=b.page,d=b.state;c=c?c(d):"404 - not found";var e={id:"Magic",class:d.pageClass};return z(e,a({class:{Wrapper:!0}},Q({state:d,page:c})))},Q=function(b){var c=b.page,d=b.state;return[K(d),a({class:"Page"},c),I(d)]},R={gdpr:{allow:function allow(a,b){return a.cookies[b.name].allowed=!0,c({},a)},close:function close(a,b){var d=b.allowed,e=a.cookies;return"boolean"==typeof d&&Object.entries(a.cookies).forEach(function(a){var b=g(a,2),f=b[0],h=b[1];e[f]=c({},h,{allowed:d})}),[c({},a,{gdpr:c({},a.gdpr,{show:!1}),cookies:e}),[S.gdpr.writeLocalStorage,{key:"magic-gdpr",value:{cookies:a.cookies||[],show:!1}}]]},load:function load(a){return[a,[S.gdpr.readLocalStorage,{key:"magic-gdpr",action:R.gdpr.show}]]},show:function show(a,b){return c({},a,{gdpr:c({},a.gdpr,{},b.value)})}},go:function go(a,b){var d=b.currentTarget.href.replace(window.location.origin,""),e=d.split("#"),f=g(e,2),h=f[0],i=f[1],j=void 0===i?"":i;return h===a.url&&j===a.hash?a:(window.history.pushState({url:h,hash:j},"",d),j?window.location.hash=j:window.scroll(0,0),c({},a,{url:h,hash:j,prev:a.url}))},pop:function pop(a,b){var d=window.location,e=d.pathname,f=d.hash;return f=f.substring(1),b.state&&(e=b.state.url,f=b.state.hash),f?window.location.hash=f:window.scroll(0,0),c({},a,{url:e,hash:f})}},S={gdpr:{readLocalStorage:function readLocalStorage(a,b){var c=b.key,d=b.action,e=window.localStorage||{},f=e[c];"undefined"!=typeof f&&(f=JSON.parse(f)),a(d,{key:c,value:f})},writeLocalStorage:function writeLocalStorage(a,b){var c=b.key,d=b.value,e=window.localStorage||{};e[c]=JSON.stringify(d)}}},T={"/example-minimal/":function exampleMinimal(b){return a(b.title)},"/example-minimal/404/":function exampleMinimal404(){return a("404 - not found")}};h({init:function init(){return R.gdpr.load(c({},G,{url:window.location.pathname}))},subscriptions:function subscriptions(){return[[H.listenPopState,R.pop]]},view:function view(a){var b=T[a.url]?a.url:"/404/",c=T[b];return a.pages&&a.pages[b]&&Object.keys(a.pages[b]).forEach(function(c){a[c]=a.pages[b][c]}),P({page:c,state:a})},node:document.getElementById("Magic")});