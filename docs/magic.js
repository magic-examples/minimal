function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function t(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r,o;r=e,o=n[t],t in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o})}return e}function n(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}!function(){var o,i,a,l,u,s,c,f,p,d,h,m,v,g,y,b,w,O,j,k,P=(o={},a=(i=[]).map,l=Array.isArray,u="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout,s=function(e){var t="";if("string"==typeof e)return e;if(l(e)&&e.length>0)for(var n,r=0;r<e.length;r++)""!==(n=s(e[r]))&&(t+=(t&&" ")+n);else for(var r in e)e[r]&&(t+=(t&&" ")+r);return t},c=function(e,t){var n={};for(var r in e)n[r]=e[r];for(var r in t)n[r]=t[r];return n},f=function(e){return e.reduce(function(e,t){return e.concat(t&&!0!==t?"function"==typeof t[0]?[t]:f(t):0)},i)},p=function(e,t){if(e!==t)for(var n in c(e,t)){var r,o;if(e[n]!==t[n]&&(r=e[n],o=t[n],!(l(r)&&l(o))||r[0]!==o[0]||"function"!=typeof r[0]))return!0;t[n]=e[n]}},d=function(e,t,n){for(var r,o,i=0,a=[];i<e.length||i<t.length;i++)r=e[i],a.push((o=t[i])?!r||o[0]!==r[0]||p(o[1],r[1])?[o[0],o[1],o[0](n,o[1]),r&&r[2]()]:r:r&&r[2]());return a},h=function(e,t,n,r,o,i){if("key"===t);else if("style"===t)for(var a in c(n,r))n=null==r||null==r[a]?"":r[a],"-"===a[0]?e[t].setProperty(a,n):e[t][a]=n;else"o"===t[0]&&"n"===t[1]?((e.actions||(e.actions={}))[t=t.slice(2)]=r)?n||e.addEventListener(t,o):e.removeEventListener(t,o):!i&&"list"!==t&&t in e?e[t]=null==r?"":r:null!=r&&!1!==r&&("class"!==t||(r=s(r)))?e.setAttribute(t,r):e.removeAttribute(t)},m=function(e,t,n){var r=e.props,o=3===e.type?document.createTextNode(e.name):(n=n||"svg"===e.name)?document.createElementNS("http://www.w3.org/2000/svg",e.name,{is:r.is}):document.createElement(e.name,{is:r.is});for(var i in r)h(o,i,null,r[i],t,n);for(var a=0,l=e.children.length;a<l;a++)o.appendChild(m(e.children[a]=w(e.children[a]),t,n));return e.node=o},v=function(e){return null==e?null:e.key},g=function(e,t,n,r,o,i){if(n===r);else if(null!=n&&3===n.type&&3===r.type)n.name!==r.name&&(t.nodeValue=r.name);else if(null==n||n.name!==r.name)t=e.insertBefore(m(r=w(r),o,i),t),null!=n&&e.removeChild(n.node);else{var a,l,u,s,f=n.props,p=r.props,d=n.children,y=r.children,b=0,O=0,j=d.length-1,k=y.length-1;for(var P in i=i||"svg"===r.name,c(f,p))("value"===P||"selected"===P||"checked"===P?t[P]:f[P])!==p[P]&&h(t,P,f[P],p[P],o,i);for(;O<=k&&b<=j&&null!=(u=v(d[b]))&&u===v(y[O]);)g(t,d[b].node,d[b],y[O]=w(y[O++],d[b++]),o,i);for(;O<=k&&b<=j&&null!=(u=v(d[j]))&&u===v(y[k]);)g(t,d[j].node,d[j],y[k]=w(y[k--],d[j--]),o,i);if(b>j)for(;O<=k;)t.insertBefore(m(y[O]=w(y[O++]),o,i),(l=d[b])&&l.node);else if(O>k)for(;b<=j;)t.removeChild(d[b++].node);else{for(var P=b,S={},x={};P<=j;P++)null!=(u=d[P].key)&&(S[u]=d[P]);for(;O<=k;){if(u=v(l=d[b]),s=v(y[O]=w(y[O],l)),x[u]||null!=s&&s===v(d[b+1])){null==u&&t.removeChild(l.node),b++;continue}null==s||1===n.type?(null==u&&(g(t,l&&l.node,l,y[O],o,i),O++),b++):(u===s?(g(t,l.node,l,y[O],o,i),x[s]=!0,b++):null!=(a=S[s])?(g(t,t.insertBefore(a.node,l&&l.node),a,y[O],o,i),x[s]=!0):g(t,l&&l.node,null,y[O],o,i),O++)}for(;b<=j;)null==v(l=d[b++])&&t.removeChild(l.node);for(var P in S)null==x[P]&&t.removeChild(S[P].node)}}return r.node=t},y=function(e,t){for(var n in e)if(e[n]!==t[n])return!0;for(var n in t)if(e[n]!==t[n])return!0},b=function(e){return"object"==typeof e?e:j(e)},w=function(e,t){return 2===e.type?((!t||!t.lazy||y(t.lazy,e.lazy))&&((t=b(e.lazy.view(e.lazy))).lazy=e.lazy),t):e},O=function(e,t,n,r,o,i){return{name:e,props:t,children:n,node:r,type:i,key:o}},j=function(e,t){return O(e,o,i,t,void 0,3)},k=function(e){return 3===e.nodeType?j(e.nodeValue,e):O(e.nodeName.toLowerCase(),o,a.call(e.childNodes,k),e,void 0,1)},{h:function(e,t){for(var n,r=[],i=[],a=arguments.length;a-- >2;)r.push(arguments[a]);for(;r.length>0;)if(l(n=r.pop()))for(var a=n.length;a-- >0;)r.push(n[a]);else!1===n||!0===n||null==n||i.push(b(n));return t=t||o,"function"==typeof e?e(t,i):O(e,t,i,void 0,t.key)},app:function(e){var t={},n=!1,r=e.view,o=e.node,i=o&&k(o),a=e.subscriptions,s=[],c=function(e){m(this.actions[e.type],e)},p=function(e){return t!==e&&(t=e,a&&(s=d(s,f([a(t)]),m)),r&&!n&&u(v,n=!0)),t},h=e.middleware,m=(void 0===h?function(e){return e}:h)(function(e,n){return"function"==typeof e?m(e(t,n)):l(e)?"function"==typeof e[0]||l(e[0])?m(e[0],"function"==typeof e[1]?e[1](n):e[1]):(f(e.slice(1)).map(function(e){e&&e[0](m,e[1])},p(e[0])),t):p(e)}),v=function(){n=!1,o=g(o.parentNode,o,i,i=b(r(t)),c)};m(e.init)}}),S=P.h,x=P.app,A=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.some(function(t){return t===(void 0===e?"undefined":e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e)})};if(r(n,"undefined")){if(t.props)return S(e,{},[t]);r(t,"string","number","function")||Array.isArray(t)?(n=t,t={}):r(t.View,"function")&&(n=t.View,t={})}return S(e,t,n)}},C=A("a");A("abbr"),A("address"),A("animate"),A("animateMotion"),A("animateTransform"),A("area"),A("article"),A("aside"),A("audio"),A("b"),A("base"),A("bdi"),A("bdo"),A("blockquote"),A("body"),A("br"),A("button"),A("canvas"),A("caption"),A("circle"),A("cite"),A("clipPath"),A("code"),A("col"),A("colgroup"),A("data"),A("datalist"),A("dd"),A("defs"),A("del"),A("desc"),A("description"),A("details"),A("dfn"),A("dialog"),A("discard");var E=A("div");A("dl"),A("dt"),A("ellipse"),A("em"),A("embed"),A("feBlend"),A("feColorMatrix"),A("feComponentTransfer"),A("feComposite"),A("feConvolveMatrix"),A("feDiffuseLighting"),A("feDisplacementMap"),A("feDistantLight"),A("feDropShadow"),A("feFlood"),A("feFuncA"),A("feFuncB"),A("feFuncG"),A("feFuncR"),A("feGaussianBlur"),A("feImage"),A("feMerge"),A("feMergeNode"),A("feMorphology"),A("feOffset"),A("fePointLight"),A("feSpecularLighting"),A("feSpotLight"),A("feTile"),A("feTurbulence"),A("fieldset"),A("figcaption"),A("figure"),A("filter");var M=A("footer");A("foreignObject"),A("form"),A("g");var D=A("h1");A("h2"),A("h3"),A("h4"),A("h5"),A("h6"),A("hatch"),A("hatchpath"),A("head");var L=A("header");A("hgroup"),A("hr"),A("html"),A("i"),A("iframe"),A("image");var T=A("img");A("input"),A("ins"),A("kbd"),A("label"),A("legend");var z=A("li");A("line"),A("linearGradient"),A("link");var F=A("main");A("map"),A("mark"),A("marker"),A("mask"),A("mesh"),A("meshgradient"),A("meshpatch"),A("meshrow"),A("meta"),A("metadata"),A("meter"),A("mpath");var B=A("nav");A("noscript"),A("object"),A("ol"),A("optgroup"),A("option"),A("output");var N=A("p");A("param"),A("path"),A("pattern"),A("picture"),A("polygon"),A("polyline"),A("pre"),A("progress"),A("q"),A("radialGradient"),A("rb"),A("rect"),A("rp"),A("rt"),A("rtc"),A("ruby"),A("s"),A("samp"),A("script"),A("section"),A("select"),A("set"),A("small"),A("solidcolor"),A("source");var I=A("span");A("stop"),A("strong"),A("style"),A("sub"),A("summary"),A("sup"),A("svg"),A("symbol"),A("table"),A("tbody"),A("td"),A("template"),A("text"),A("textPath"),A("textarea"),A("tfoot"),A("th"),A("thead"),A("time"),A("title"),A("tr"),A("track"),A("tspan"),A("u");var q=A("ul");A("unknown"),A("use"),A("video"),A("view"),A("wbr");var G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return M({class:"Footer"},[E({class:"Container"},[E({class:"Credits"},["made with a few bits of ",W({to:"https://magic.github.io/",target:"_blank",rel:"noopener"},"magic")]),t])])},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=e.logo,r=e.menu,o=e.logotext,i=e.root,a=e.theme,l=e.hash,u=e.url;if(n||r||o)return L({class:"Header"},[(n||o)&&_({root:i,theme:a,logo:n,logotext:o}),r&&H({url:u,hash:l,menu:r}),t])},Y=function(e){if("string"==typeof e&&(e={src:e}),e.src)return e.alt||(e.title?e.alt=e.title:(e.role="presentation",e.alt="",e.loading=e.loading||"lazy")),T(e)},W=function(e,t){var n=e.to,o=e.action,i=void 0===o?J.go:o,a=e.text,l=r(e,["to","action","text"]),u=l.href,s=l.nofollow,c=l.noreferrer,f=r(l,["href","nofollow","noreferrer"]);return n=n||u||"",f.href=n,a&&t?a=[a,t]:a||(a=t||n),"/"===n[0]||"#"===n[0]?f.onclick=[i,$.preventDefault]:(f.target="_blank",f.rel="noopener",s&&(f.rel+=" nofollow"),c&&(f.rel+=" noreferrer")),C(f,a)},_=function(e){var t=e.logo,n=e.logotext;return W({to:e.root,class:"Logo"},[t&&Y(t),n&&I(n)])},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.collapse,o=void 0===r||r,i=e.menu,a=e.hash,l=e.class,u=void 0===l?"":l,s=e.url;return u.includes("Menu")||(u="Menu ".concat(u).trim()),a&&!s.endsWith(a)&&(s+="#".concat(a)),B({className:u},q(i.map(function(e){return R(n(t({},e),{url:s,collapse:o}))})))},R=function(e){var n=e.collapse,o=e.items,i=void 0===o?[]:o,a=e.text,l=e.url,u=r(e,["collapse","items","text","url"]),s={class:{}},c=u.to;c===l&&(s.class.active=!0);var f=[];return(!n||l.includes(c))&&i.length&&(f=q(i.map(function(e){return R(t({url:l,collapse:n},e))}))),z(s,[c?W(u,a):I(u,a),f])},U=function(e,t){var n=e.page,r=e.state;return F({id:"Magic",class:r.pageClass},E({class:{Wrapper:!0}},[V(r),E({class:"Page",id:"page"},n(r)),G(r),t]))},$={preventDefault:function(e){return e.preventDefault(),e}},J={go:function(r,o){var i,a=o.currentTarget.href.replace(window.location.origin,""),l=function(e){if(Array.isArray(e))return e}(i=a.split("#"))||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,l=!1;try{for(o=o.call(e);!(a=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){l=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(l)throw r}}return i}}(i,2)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}}(i,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),u=l[0],s=l[1],c=void 0===s?"":s;if(u===r.url&&c===r.hash)return c&&(window.location.hash=c),r;var f=r.pages&&r.pages[u]&&r.pages[u].title;f&&(document.title=r.title=f),u!==r.url?c||window.scrollTo({top:0}):window.location.hash=c;var p=window.scrollY;return window.history.pushState({url:u,hash:c,scrollY:p},r.title,a),n(t({},r),{url:u,hash:c,prev:r.url})},nospy:{toggle:function(e){return e.nospy.show=!e.nospy.show,t({},e)}},pop:function(e,r){var o=window.location,i=o.pathname,a=o.hash;a=a.substring(1);var l=0;return r.state&&(i=r.state.url,a=r.state.hash,l=r.state.scrollY||0),a?window.location.hash=a:window.scroll({top:l}),n(t({},e),{url:i,hash:a})}},K={listenPopState:function(e,t){var n=function(n){return e(t,n)};return addEventListener("popstate",n),function(){return removeEventListener("popstate",n)}}},Q={"/minimal/":function(e){return[D({id:"magic"},"@magic"),N({class:"hello"},"hello, world")]},"/minimal/404/":function(){return E("404 - not found.")}};x({init:n(t({},{description:"hello, world",nospy:{show:!1},pageClass:{},pages:{"/minimal/":{},"/minimal/404/":{description:"404 - not found.",title:"404 - not found"}},root:"/minimal/",title:"@magic",url:"/minimal/"}),{url:window.location.pathname,hash:window.location.hash.substr(1)}),subscriptions:function(e){return[[K.listenPopState,J.pop]]},view:function(e){var t=Q[e.url]?e.url:"/404/",n=Q[t],r=e.pages&&e.pages[t];return r&&Object.keys(r).forEach(function(t){e[t]=r[t]}),e.url=t,U({page:n,state:e})},node:document.getElementById("Magic")})}();