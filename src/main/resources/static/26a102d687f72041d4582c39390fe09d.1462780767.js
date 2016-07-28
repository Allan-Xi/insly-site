/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return v})})(window);

/*! jQuery UI - v1.9.1 - 2012-10-25
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.slider.js, jquery.ui.sortable.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
* Copyright (c) 2012 jQuery Foundation and other contributors Licensed MIT */
(function (e, t) {
    function n(t, n) {
        var i, s, o, u = t.nodeName.toLowerCase();
        return "area" === u ? (i = t.parentNode, s = i.name, !t.href || !s || i.nodeName.toLowerCase() !== "map" ? !1 : (o = e("img[usemap=#" + s + "]")[0], !! o && r(o))) : (/input|select|textarea|button|object/.test(u) ? !t.disabled : "a" === u ? t.href || n : n) && r(t)
    }

    function r(t) {
        return e.expr.filters.visible(t) && !e(t).parents().andSelf().filter(function () {
            return e.css(this, "visibility") === "hidden"
        }).length
    }
    var i = 0,
        s = /^ui-id-\d+$/;
    e.ui = e.ui || {};
    if (e.ui.version) return;
    e.extend(e.ui, {
        version: "1.9.1",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38  
        }
    }), e.fn.extend({
        _focus: e.fn.focus,
        focus: function (t, n) {
            return typeof t == "number" ? this.each(function () {
                var r = this;
                setTimeout(function () {
                    e(r).focus(), n && n.call(r)
                }, t)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function () {
            var t;
            return e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? t = this.parents().filter(function () {
                return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0) : t = this.parents().filter(function () {
                return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        },
        zIndex: function (n) {
            if (n !== t) return this.css("zIndex", n);
            if (this.length) {
                var r = e(this[0]),
                    i, s;
                while (r.length && r[0] !== document) {
                    i = r.css("position");
                    if (i === "absolute" || i === "relative" || i === "fixed") {
                        s = parseInt(r.css("zIndex"), 10);
                        if (!isNaN(s) && s !== 0) return s
                    }
                    r = r.parent()
                }
            }
            return 0
        },
        uniqueId: function () {
            return this.each(function () {
                this.id || (this.id = "ui-id-" + ++i)
            })
        },
        removeUniqueId: function () {
            return this.each(function () {
                s.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (n, r) {
        function i(t, n, r, i) {
            return e.each(s, function () {
                n -= parseFloat(e.css(t, "padding" + this)) || 0, r && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), i && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), n
        }
        var s = r === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
            o = r.toLowerCase(),
            u = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + r] = function (n) {
            return n === t ? u["inner" + r].call(this) : this.each(function () {
                e(this).css(o, i(this, n) + "px")
            })
        }, e.fn["outer" + r] = function (t, n) {
            return typeof t != "number" ? u["outer" + r].call(this, t) : this.each(function () {
                e(this).css(o, i(this, t, !0, n) + "px")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
            return function (n) {
                return !!e.data(n, t)
            }
        }) : function (t, n, r) {
            return !!e.data(t, r[3])
        },
        focusable: function (t) {
            return n(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function (t) {
            var r = e.attr(t, "tabindex"),
                i = isNaN(r);
            return (i || r >= 0) && n(t, !i)
        }
    }), e(function () {
        var t = document.body,
            n = t.appendChild(n = document.createElement("div"));
        n.offsetHeight, e.extend(n.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        }), e.support.minHeight = n.offsetHeight === 100, e.support.selectstart = "onselectstart" in n, t.removeChild(n).style.display = "none"
    }),
    function () {
        var t = /msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || [];
        e.ui.ie = t.length ? !0 : !1, e.ui.ie6 = parseFloat(t[1], 10) === 6
    }(), e.fn.extend({
        disableSelection: function () {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (e) {
                e.preventDefault()
            })
        },
        enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }
    }), e.extend(e.ui, {
        plugin: {
            add: function (t, n, r) {
                var i, s = e.ui[t].prototype;
                for (i in r) s.plugins[i] = s.plugins[i] || [], s.plugins[i].push([n, r[i]])
            },
            call: function (e, t, n) {
                var r, i = e.plugins[t];
                if (!i || !e.element[0].parentNode || e.element[0].parentNode.nodeType === 11) return;
                for (r = 0; r < i.length; r++) e.options[i[r][0]] && i[r][1].apply(e.element, n)
            }
        },
        contains: e.contains,
        hasScroll: function (t, n) {
            if (e(t).css("overflow") === "hidden") return !1;
            var r = n && n === "left" ? "scrollLeft" : "scrollTop",
                i = !1;
            return t[r] > 0 ? !0 : (t[r] = 1, i = t[r] > 0, t[r] = 0, i)
        },
        isOverAxis: function (e, t, n) {
            return e > t && e < t + n
        },
        isOver: function (t, n, r, i, s, o) {
            return e.ui.isOverAxis(t, r, s) && e.ui.isOverAxis(n, i, o)
        }
    })
})(jQuery);
(function (e, t) {
    var n = 0,
        r = Array.prototype.slice,
        i = e.cleanData;
    e.cleanData = function (t) {
        for (var n = 0, r;
            (r = t[n]) != null; n++) try {
            e(r).triggerHandler("remove")
        } catch (s) {}
        i(t)
    }, e.widget = function (t, n, r) {
        var i, s, o, u, a = t.split(".")[0];
        t = t.split(".")[1], i = a + "-" + t, r || (r = n, n = e.Widget), e.expr[":"][i.toLowerCase()] = function (t) {
            return !!e.data(t, i)
        }, e[a] = e[a] || {}, s = e[a][t], o = e[a][t] = function (e, t) {
            if (!this._createWidget) return new o(e, t);
            arguments.length && this._createWidget(e, t)
        }, e.extend(o, s, {
            version: r.version,
            _proto: e.extend({}, r),
            _childConstructors: []
        }), u = new n, u.options = e.widget.extend({}, u.options), e.each(r, function (t, i) {
            e.isFunction(i) && (r[t] = function () {
                var e = function () {
                    return n.prototype[t].apply(this, arguments)
                }, r = function (e) {
                        return n.prototype[t].apply(this, e)
                    };
                return function () {
                    var t = this._super,
                        n = this._superApply,
                        s;
                    return this._super = e, this._superApply = r, s = i.apply(this, arguments), this._super = t, this._superApply = n, s
                }
            }())
        }), o.prototype = e.widget.extend(u, {
            widgetEventPrefix: u.widgetEventPrefix || t
        }, r, {
            constructor: o,
            namespace: a,
            widgetName: t,
            widgetBaseClass: i,
            widgetFullName: i
        }), s ? (e.each(s._childConstructors, function (t, n) {
            var r = n.prototype;
            e.widget(r.namespace + "." + r.widgetName, o, n._proto)
        }), delete s._childConstructors) : n._childConstructors.push(o), e.widget.bridge(t, o)
    }, e.widget.extend = function (n) {
        var i = r.call(arguments, 1),
            s = 0,
            o = i.length,
            u, a;
        for (; s < o; s++)
            for (u in i[s]) a = i[s][u], i[s].hasOwnProperty(u) && a !== t && (e.isPlainObject(a) ? n[u] = e.isPlainObject(n[u]) ? e.widget.extend({}, n[u], a) : e.widget.extend({}, a) : n[u] = a);
        return n
    }, e.widget.bridge = function (n, i) {
        var s = i.prototype.widgetFullName;
        e.fn[n] = function (o) {
            var u = typeof o == "string",
                a = r.call(arguments, 1),
                f = this;
            return o = !u && a.length ? e.widget.extend.apply(null, [o].concat(a)) : o, u ? this.each(function () {
                var r, i = e.data(this, s);
                if (!i) return e.error("cannot call methods on " + n + " prior to initialization; " + "attempted to call method '" + o + "'");
                if (!e.isFunction(i[o]) || o.charAt(0) === "_") return e.error("no such method '" + o + "' for " + n + " widget instance");
                r = i[o].apply(i, a);
                if (r !== i && r !== t) return f = r && r.jquery ? f.pushStack(r.get()) : r, !1
            }) : this.each(function () {
                var t = e.data(this, s);
                t ? t.option(o || {})._init() : new i(o, this)
            }), f
        }
    }, e.Widget = function () {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function (t, r) {
            r = e(r || this.defaultElement || this)[0], this.element = e(r), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), r !== this && (e.data(r, this.widgetName, this), e.data(r, this.widgetFullName, this), this._on(this.element, {
                remove: function (e) {
                    e.target === r && this.destroy()
                }
            }), this.document = e(r.style ? r.ownerDocument : r.document || r), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function () {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function () {
            return this.element
        },
        option: function (n, r) {
            var i = n,
                s, o, u;
            if (arguments.length === 0) return e.widget.extend({}, this.options);
            if (typeof n == "string") {
                i = {}, s = n.split("."), n = s.shift();
                if (s.length) {
                    o = i[n] = e.widget.extend({}, this.options[n]);
                    for (u = 0; u < s.length - 1; u++) o[s[u]] = o[s[u]] || {}, o = o[s[u]];
                    n = s.pop();
                    if (r === t) return o[n] === t ? null : o[n];
                    o[n] = r
                } else {
                    if (r === t) return this.options[n] === t ? null : this.options[n];
                    i[n] = r
                }
            }
            return this._setOptions(i), this
        },
        _setOptions: function (e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function (e, t) {
            return this.options[e] = t, e === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !! t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function () {
            return this._setOption("disabled", !1)
        },
        disable: function () {
            return this._setOption("disabled", !0)
        },
        _on: function (t, n) {
            var r, i = this;
            n ? (t = r = e(t), this.bindings = this.bindings.add(t)) : (n = t, t = this.element, r = this.widget()), e.each(n, function (n, s) {
                function o() {
                    if (i.options.disabled === !0 || e(this).hasClass("ui-state-disabled")) return;
                    return (typeof s == "string" ? i[s] : s).apply(i, arguments)
                }
                typeof s != "string" && (o.guid = s.guid = s.guid || o.guid || e.guid++);
                var u = n.match(/^(\w+)\s*(.*)$/),
                    a = u[1] + i.eventNamespace,
                    f = u[2];
                f ? r.delegate(f, a, o) : t.bind(a, o)
            })
        },
        _off: function (e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
        },
        _delay: function (e, t) {
            function n() {
                return (typeof e == "string" ? r[e] : e).apply(r, arguments)
            }
            var r = this;
            return setTimeout(n, t || 0)
        },
        _hoverable: function (t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function (t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function (t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function (t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function (t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (t, n, r) {
            var i, s, o = this.options[t];
            r = r || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], s = n.originalEvent;
            if (s)
                for (i in s) i in n || (n[i] = s[i]);
            return this.element.trigger(n, r), !(e.isFunction(o) && o.apply(this.element[0], [n].concat(r)) === !1 || n.isDefaultPrevented())
        }
    }, e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function (t, n) {
        e.Widget.prototype["_" + t] = function (r, i, s) {
            typeof i == "string" && (i = {
                effect: i
            });
            var o, u = i ? i === !0 || typeof i == "number" ? n : i.effect || n : t;
            i = i || {}, typeof i == "number" && (i = {
                duration: i
            }), o = !e.isEmptyObject(i), i.complete = s, i.delay && r.delay(i.delay), o && e.effects && (e.effects.effect[u] || e.uiBackCompat !== !1 && e.effects[u]) ? r[t](i) : u !== t && r[u] ? r[u](i.duration, i.easing, s) : r.queue(function (n) {
                e(this)[t](), s && s.call(r[0]), n()
            })
        }
    }), e.uiBackCompat !== !1 && (e.Widget.prototype._getCreateOptions = function () {
        return e.metadata && e.metadata.get(this.element[0])[this.widgetName]
    })
})(jQuery);
(function (e, t) {
    var n = !1;
    e(document).mouseup(function (e) {
        n = !1
    }), e.widget("ui.mouse", {
        version: "1.9.1",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function () {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function (e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function (n) {
                if (!0 === e.data(n.target, t.widgetName + ".preventClickEvent")) return e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1
            }), this.started = !1
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function (t) {
            if (n) return;
            this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
            var r = this,
                i = t.which === 1,
                s = typeof this.options.cancel == "string" && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
            if (!i || s || !this._mouseCapture(t)) return !0;
            this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                r.mouseDelayMet = !0
            }, this.options.delay));
            if (this._mouseDistanceMet(t) && this._mouseDelayMet(t)) {
                this._mouseStarted = this._mouseStart(t) !== !1;
                if (!this._mouseStarted) return t.preventDefault(), !0
            }
            return !0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
                return r._mouseMove(e)
            }, this._mouseUpDelegate = function (e) {
                return r._mouseUp(e)
            }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), n = !0, !0
        },
        _mouseMove: function (t) {
            return !e.ui.ie || document.documentMode >= 9 || !! t.button ? this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) : this._mouseUp(t)
        },
        _mouseUp: function (t) {
            return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
        },
        _mouseDistanceMet: function (e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function (e) {
            return this.mouseDelayMet
        },
        _mouseStart: function (e) {},
        _mouseDrag: function (e) {},
        _mouseStop: function (e) {},
        _mouseCapture: function (e) {
            return !0
        }
    })
})(jQuery);
(function (e, t) {
    function n(e, t, n) {
        return [parseInt(e[0], 10) * (h.test(e[0]) ? t / 100 : 1), parseInt(e[1], 10) * (h.test(e[1]) ? n / 100 : 1)]
    }

    function r(t, n) {
        return parseInt(e.css(t, n), 10) || 0
    }
    e.ui = e.ui || {};
    var i, s = Math.max,
        o = Math.abs,
        u = Math.round,
        a = /left|center|right/,
        f = /top|center|bottom/,
        l = /[\+\-]\d+%?/,
        c = /^\w+/,
        h = /%$/,
        p = e.fn.position;
    e.position = {
        scrollbarWidth: function () {
            if (i !== t) return i;
            var n, r, s = e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                o = s.children()[0];
            return e("body").append(s), n = o.offsetWidth, s.css("overflow", "scroll"), r = o.offsetWidth, n === r && (r = s[0].clientWidth), s.remove(), i = n - r
        },
        getScrollInfo: function (t) {
            var n = t.isWindow ? "" : t.element.css("overflow-x"),
                r = t.isWindow ? "" : t.element.css("overflow-y"),
                i = n === "scroll" || n === "auto" && t.width < t.element[0].scrollWidth,
                s = r === "scroll" || r === "auto" && t.height < t.element[0].scrollHeight;
            return {
                width: i ? e.position.scrollbarWidth() : 0,
                height: s ? e.position.scrollbarWidth() : 0
            }
        },
        getWithinInfo: function (t) {
            var n = e(t || window),
                r = e.isWindow(n[0]);
            return {
                element: n,
                isWindow: r,
                offset: n.offset() || {
                    left: 0,
                    top: 0
                },
                scrollLeft: n.scrollLeft(),
                scrollTop: n.scrollTop(),
                width: r ? n.width() : n.outerWidth(),
                height: r ? n.height() : n.outerHeight()
            }
        }
    }, e.fn.position = function (t) {
        if (!t || !t.of) return p.apply(this, arguments);
        t = e.extend({}, t);
        var i, h, d, v, m, g = e(t.of),
            y = e.position.getWithinInfo(t.within),
            b = e.position.getScrollInfo(y),
            w = g[0],
            E = (t.collision || "flip").split(" "),
            S = {};
        return w.nodeType === 9 ? (h = g.width(), d = g.height(), v = {
            top: 0,
            left: 0
        }) : e.isWindow(w) ? (h = g.width(), d = g.height(), v = {
            top: g.scrollTop(),
            left: g.scrollLeft()
        }) : w.preventDefault ? (t.at = "left top", h = d = 0, v = {
            top: w.pageY,
            left: w.pageX
        }) : (h = g.outerWidth(), d = g.outerHeight(), v = g.offset()), m = e.extend({}, v), e.each(["my", "at"], function () {
            var e = (t[this] || "").split(" "),
                n, r;
            e.length === 1 && (e = a.test(e[0]) ? e.concat(["center"]) : f.test(e[0]) ? ["center"].concat(e) : ["center", "center"]), e[0] = a.test(e[0]) ? e[0] : "center", e[1] = f.test(e[1]) ? e[1] : "center", n = l.exec(e[0]), r = l.exec(e[1]), S[this] = [n ? n[0] : 0, r ? r[0] : 0], t[this] = [c.exec(e[0])[0], c.exec(e[1])[0]]
        }), E.length === 1 && (E[1] = E[0]), t.at[0] === "right" ? m.left += h : t.at[0] === "center" && (m.left += h / 2), t.at[1] === "bottom" ? m.top += d : t.at[1] === "center" && (m.top += d / 2), i = n(S.at, h, d), m.left += i[0], m.top += i[1], this.each(function () {
            var a, f, l = e(this),
                c = l.outerWidth(),
                p = l.outerHeight(),
                w = r(this, "marginLeft"),
                x = r(this, "marginTop"),
                T = c + w + r(this, "marginRight") + b.width,
                N = p + x + r(this, "marginBottom") + b.height,
                C = e.extend({}, m),
                k = n(S.my, l.outerWidth(), l.outerHeight());
            t.my[0] === "right" ? C.left -= c : t.my[0] === "center" && (C.left -= c / 2), t.my[1] === "bottom" ? C.top -= p : t.my[1] === "center" && (C.top -= p / 2), C.left += k[0], C.top += k[1], e.support.offsetFractions || (C.left = u(C.left), C.top = u(C.top)), a = {
                marginLeft: w,
                marginTop: x
            }, e.each(["left", "top"], function (n, r) {
                e.ui.position[E[n]] && e.ui.position[E[n]][r](C, {
                    targetWidth: h,
                    targetHeight: d,
                    elemWidth: c,
                    elemHeight: p,
                    collisionPosition: a,
                    collisionWidth: T,
                    collisionHeight: N,
                    offset: [i[0] + k[0], i[1] + k[1]],
                    my: t.my,
                    at: t.at,
                    within: y,
                    elem: l
                })
            }), e.fn.bgiframe && l.bgiframe(), t.using && (f = function (e) {
                var n = v.left - C.left,
                    r = n + h - c,
                    i = v.top - C.top,
                    u = i + d - p,
                    a = {
                        target: {
                            element: g,
                            left: v.left,
                            top: v.top,
                            width: h,
                            height: d
                        },
                        element: {
                            element: l,
                            left: C.left,
                            top: C.top,
                            width: c,
                            height: p
                        },
                        horizontal: r < 0 ? "left" : n > 0 ? "right" : "center",
                        vertical: u < 0 ? "top" : i > 0 ? "bottom" : "middle"
                    };
                h < c && o(n + r) < h && (a.horizontal = "center"), d < p && o(i + u) < d && (a.vertical = "middle"), s(o(n), o(r)) > s(o(i), o(u)) ? a.important = "horizontal" : a.important = "vertical", t.using.call(this, e, a)
            }), l.offset(e.extend(C, {
                using: f
            }))
        })
    }, e.ui.position = {
        fit: {
            left: function (e, t) {
                var n = t.within,
                    r = n.isWindow ? n.scrollLeft : n.offset.left,
                    i = n.width,
                    o = e.left - t.collisionPosition.marginLeft,
                    u = r - o,
                    a = o + t.collisionWidth - i - r,
                    f;
                t.collisionWidth > i ? u > 0 && a <= 0 ? (f = e.left + u + t.collisionWidth - i - r, e.left += u - f) : a > 0 && u <= 0 ? e.left = r : u > a ? e.left = r + i - t.collisionWidth : e.left = r : u > 0 ? e.left += u : a > 0 ? e.left -= a : e.left = s(e.left - o, e.left)
            },
            top: function (e, t) {
                var n = t.within,
                    r = n.isWindow ? n.scrollTop : n.offset.top,
                    i = t.within.height,
                    o = e.top - t.collisionPosition.marginTop,
                    u = r - o,
                    a = o + t.collisionHeight - i - r,
                    f;
                t.collisionHeight > i ? u > 0 && a <= 0 ? (f = e.top + u + t.collisionHeight - i - r, e.top += u - f) : a > 0 && u <= 0 ? e.top = r : u > a ? e.top = r + i - t.collisionHeight : e.top = r : u > 0 ? e.top += u : a > 0 ? e.top -= a : e.top = s(e.top - o, e.top)
            }
        },
        flip: {
            left: function (e, t) {
                var n = t.within,
                    r = n.offset.left + n.scrollLeft,
                    i = n.width,
                    s = n.isWindow ? n.scrollLeft : n.offset.left,
                    u = e.left - t.collisionPosition.marginLeft,
                    a = u - s,
                    f = u + t.collisionWidth - i - s,
                    l = t.my[0] === "left" ? -t.elemWidth : t.my[0] === "right" ? t.elemWidth : 0,
                    c = t.at[0] === "left" ? t.targetWidth : t.at[0] === "right" ? -t.targetWidth : 0,
                    h = -2 * t.offset[0],
                    p, d;
                if (a < 0) {
                    p = e.left + l + c + h + t.collisionWidth - i - r;
                    if (p < 0 || p < o(a)) e.left += l + c + h
                } else if (f > 0) {
                    d = e.left - t.collisionPosition.marginLeft + l + c + h - s;
                    if (d > 0 || o(d) < f) e.left += l + c + h
                }
            },
            top: function (e, t) {
                var n = t.within,
                    r = n.offset.top + n.scrollTop,
                    i = n.height,
                    s = n.isWindow ? n.scrollTop : n.offset.top,
                    u = e.top - t.collisionPosition.marginTop,
                    a = u - s,
                    f = u + t.collisionHeight - i - s,
                    l = t.my[1] === "top",
                    c = l ? -t.elemHeight : t.my[1] === "bottom" ? t.elemHeight : 0,
                    h = t.at[1] === "top" ? t.targetHeight : t.at[1] === "bottom" ? -t.targetHeight : 0,
                    p = -2 * t.offset[1],
                    d, v;
                a < 0 ? (v = e.top + c + h + p + t.collisionHeight - i - r, e.top + c + h + p > a && (v < 0 || v < o(a)) && (e.top += c + h + p)) : f > 0 && (d = e.top - t.collisionPosition.marginTop + c + h + p - s, e.top + c + h + p > f && (d > 0 || o(d) < f) && (e.top += c + h + p))
            }
        },
        flipfit: {
            left: function () {
                e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
            },
            top: function () {
                e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
            }
        }
    },
    function () {
        var t, n, r, i, s, o = document.getElementsByTagName("body")[0],
            u = document.createElement("div");
        t = document.createElement(o ? "div" : "body"), r = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        }, o && e.extend(r, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for (s in r) t.style[s] = r[s];
        t.appendChild(u), n = o || document.documentElement, n.insertBefore(t, n.firstChild), u.style.cssText = "position: absolute; left: 10.7432222px;", i = e(u).offset().left, e.support.offsetFractions = i > 10 && i < 11, t.innerHTML = "", n.removeChild(t)
    }(), e.uiBackCompat !== !1 && function (e) {
        var n = e.fn.position;
        e.fn.position = function (r) {
            if (!r || !r.offset) return n.call(this, r);
            var i = r.offset.split(" "),
                s = r.at.split(" ");
            return i.length === 1 && (i[1] = i[0]), /^\d/.test(i[0]) && (i[0] = "+" + i[0]), /^\d/.test(i[1]) && (i[1] = "+" + i[1]), s.length === 1 && (/left|center|right/.test(s[0]) ? s[1] = "center" : (s[1] = s[0], s[0] = "center")), n.call(this, e.extend(r, {
                at: s[0] + i[0] + " " + s[1] + i[1],
                offset: t
            }))
        }
    }(jQuery)
})(jQuery);
(function (e, t) {
    var n = 0,
        r = {}, i = {};
    r.height = r.paddingTop = r.paddingBottom = r.borderTopWidth = r.borderBottomWidth = "hide", i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "show", e.widget("ui.accordion", {
        version: "1.9.1",
        options: {
            active: 0,
            animate: {},
            collapsible: !1,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        _create: function () {
            var t = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++n),
                r = this.options;
            this.prevShow = this.prevHide = e(), this.element.addClass("ui-accordion ui-widget ui-helper-reset"), this.headers = this.element.find(r.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this._hoverable(this.headers), this._focusable(this.headers), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(), !r.collapsible && (r.active === !1 || r.active == null) && (r.active = 0), r.active < 0 && (r.active += this.headers.length), this.active = this._findActive(r.active).addClass("ui-accordion-header-active ui-state-active").toggleClass("ui-corner-all ui-corner-top"), this.active.next().addClass("ui-accordion-content-active").show(), this._createIcons(), this.refresh(), this.element.attr("role", "tablist"), this.headers.attr("role", "tab").each(function (n) {
                var r = e(this),
                    i = r.attr("id"),
                    s = r.next(),
                    o = s.attr("id");
                i || (i = t + "-header-" + n, r.attr("id", i)), o || (o = t + "-panel-" + n, s.attr("id", o)), r.attr("aria-controls", o), s.attr("aria-labelledby", i)
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }).next().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }).hide(), this.active.length ? this.active.attr({
                "aria-selected": "true",
                tabIndex: 0
            }).next().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0), this._on(this.headers, {
                keydown: "_keydown"
            }), this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }), this._setupEvents(r.event)
        },
        _getCreateEventData: function () {
            return {
                header: this.active,
                content: this.active.length ? this.active.next() : e()
            }
        },
        _createIcons: function () {
            var t = this.options.icons;
            t && (e("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function () {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
        },
        _destroy: function () {
            var e;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function () {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }), this._destroyIcons(), e = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function () {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }), this.options.heightStyle !== "content" && e.css("height", "")
        },
        _setOption: function (e, t) {
            if (e === "active") {
                this._activate(t);
                return
            }
            e === "event" && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), e === "collapsible" && !t && this.options.active === !1 && this._activate(0), e === "icons" && (this._destroyIcons(), t && this._createIcons()), e === "disabled" && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !! t)
        },
        _keydown: function (t) {
            if (t.altKey || t.ctrlKey) return;
            var n = e.ui.keyCode,
                r = this.headers.length,
                i = this.headers.index(t.target),
                s = !1;
            switch (t.keyCode) {
            case n.RIGHT:
            case n.DOWN:
                s = this.headers[(i + 1) % r];
                break;
            case n.LEFT:
            case n.UP:
                s = this.headers[(i - 1 + r) % r];
                break;
            case n.SPACE:
            case n.ENTER:
                this._eventHandler(t);
                break;
            case n.HOME:
                s = this.headers[0];
                break;
            case n.END:
                s = this.headers[r - 1]
            }
            s && (e(t.target).attr("tabIndex", -1), e(s).attr("tabIndex", 0), s.focus(), t.preventDefault())
        },
        _panelKeyDown: function (t) {
            t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().focus()
        },
        refresh: function () {
            var t, n, r = this.options.heightStyle,
                i = this.element.parent();
            r === "fill" ? (e.support.minHeight || (n = i.css("overflow"), i.css("overflow", "hidden")), t = i.height(), this.element.siblings(":visible").each(function () {
                var n = e(this),
                    r = n.css("position");
                if (r === "absolute" || r === "fixed") return;
                t -= n.outerHeight(!0)
            }), n && i.css("overflow", n), this.headers.each(function () {
                t -= e(this).outerHeight(!0)
            }), this.headers.next().each(function () {
                e(this).height(Math.max(0, t - e(this).innerHeight() + e(this).height()))
            }).css("overflow", "auto")) : r === "auto" && (t = 0, this.headers.next().each(function () {
                t = Math.max(t, e(this).height("").height())
            }).height(t))
        },
        _activate: function (t) {
            var n = this._findActive(t)[0];
            if (n === this.active[0]) return;
            n = n || this.active[0], this._eventHandler({
                target: n,
                currentTarget: n,
                preventDefault: e.noop
            })
        },
        _findActive: function (t) {
            return typeof t == "number" ? this.headers.eq(t) : e()
        },
        _setupEvents: function (t) {
            var n = {};
            if (!t) return;
            e.each(t.split(" "), function (e, t) {
                n[t] = "_eventHandler"
            }), this._on(this.headers, n)
        },
        _eventHandler: function (t) {
            var n = this.options,
                r = this.active,
                i = e(t.currentTarget),
                s = i[0] === r[0],
                o = s && n.collapsible,
                u = o ? e() : i.next(),
                a = r.next(),
                f = {
                    oldHeader: r,
                    oldPanel: a,
                    newHeader: o ? e() : i,
                    newPanel: u
                };
            t.preventDefault();
            if (s && !n.collapsible || this._trigger("beforeActivate", t, f) === !1) return;
            n.active = o ? !1 : this.headers.index(i), this.active = s ? e() : i, this._toggle(f), r.removeClass("ui-accordion-header-active ui-state-active"), n.icons && r.children(".ui-accordion-header-icon").removeClass(n.icons.activeHeader).addClass(n.icons.header), s || (i.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), n.icons && i.children(".ui-accordion-header-icon").removeClass(n.icons.header).addClass(n.icons.activeHeader), i.next().addClass("ui-accordion-content-active"))
        },
        _toggle: function (t) {
            var n = t.newPanel,
                r = this.prevShow.length ? this.prevShow : t.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = n, this.prevHide = r, this.options.animate ? this._animate(n, r, t) : (r.hide(), n.show(), this._toggleComplete(t)), r.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), r.prev().attr("aria-selected", "false"), n.length && r.length ? r.prev().attr("tabIndex", -1) : n.length && this.headers.filter(function () {
                return e(this).attr("tabIndex") === 0
            }).attr("tabIndex", -1), n.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }).prev().attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _animate: function (e, t, n) {
            var s, o, u, a = this,
                f = 0,
                l = e.length && (!t.length || e.index() < t.index()),
                c = this.options.animate || {}, h = l && c.down || c,
                p = function () {
                    a._toggleComplete(n)
                };
            typeof h == "number" && (u = h), typeof h == "string" && (o = h), o = o || h.easing || c.easing, u = u || h.duration || c.duration;
            if (!t.length) return e.animate(i, u, o, p);
            if (!e.length) return t.animate(r, u, o, p);
            s = e.show().outerHeight(), t.animate(r, {
                duration: u,
                easing: o,
                step: function (e, t) {
                    t.now = Math.round(e)
                }
            }), e.hide().animate(i, {
                duration: u,
                easing: o,
                complete: p,
                step: function (e, n) {
                    n.now = Math.round(e), n.prop !== "height" ? f += n.now : a.options.heightStyle !== "content" && (n.now = Math.round(s - t.outerHeight() - f), f = 0)
                }
            })
        },
        _toggleComplete: function (e) {
            var t = e.oldPanel;
            t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger("activate", null, e)
        }
    }), e.uiBackCompat !== !1 && (function (e, t) {
        e.extend(t.options, {
            navigation: !1,
            navigationFilter: function () {
                return this.href.toLowerCase() === location.href.toLowerCase()
            }
        });
        var n = t._create;
        t._create = function () {
            if (this.options.navigation) {
                var t = this,
                    r = this.element.find(this.options.header),
                    i = r.next(),
                    s = r.add(i).find("a").filter(this.options.navigationFilter)[0];
                s && r.add(i).each(function (n) {
                    if (e.contains(this, s)) return t.options.active = Math.floor(n / 2), !1
                })
            }
            n.call(this)
        }
    }(jQuery, jQuery.ui.accordion.prototype), function (e, t) {
        e.extend(t.options, {
            heightStyle: null,
            autoHeight: !0,
            clearStyle: !1,
            fillSpace: !1
        });
        var n = t._create,
            r = t._setOption;
        e.extend(t, {
            _create: function () {
                this.options.heightStyle = this.options.heightStyle || this._mergeHeightStyle(), n.call(this)
            },
            _setOption: function (e) {
                if (e === "autoHeight" || e === "clearStyle" || e === "fillSpace") this.options.heightStyle = this._mergeHeightStyle();
                r.apply(this, arguments)
            },
            _mergeHeightStyle: function () {
                var e = this.options;
                if (e.fillSpace) return "fill";
                if (e.clearStyle) return "content";
                if (e.autoHeight) return "auto"
            }
        })
    }(jQuery, jQuery.ui.accordion.prototype), function (e, t) {
        e.extend(t.options.icons, {
            activeHeader: null,
            headerSelected: "ui-icon-triangle-1-s"
        });
        var n = t._createIcons;
        t._createIcons = function () {
            this.options.icons && (this.options.icons.activeHeader = this.options.icons.activeHeader || this.options.icons.headerSelected), n.call(this)
        }
    }(jQuery, jQuery.ui.accordion.prototype), function (e, t) {
        t.activate = t._activate;
        var n = t._findActive;
        t._findActive = function (e) {
            return e === -1 && (e = !1), e && typeof e != "number" && (e = this.headers.index(this.headers.filter(e)), e === -1 && (e = !1)), n.call(this, e)
        }
    }(jQuery, jQuery.ui.accordion.prototype), jQuery.ui.accordion.prototype.resize = jQuery.ui.accordion.prototype.refresh, function (e, t) {
        e.extend(t.options, {
            change: null,
            changestart: null
        });
        var n = t._trigger;
        t._trigger = function (e, t, r) {
            var i = n.apply(this, arguments);
            return i ? (e === "beforeActivate" ? i = n.call(this, "changestart", t, {
                oldHeader: r.oldHeader,
                oldContent: r.oldPanel,
                newHeader: r.newHeader,
                newContent: r.newPanel
            }) : e === "activate" && (i = n.call(this, "change", t, {
                oldHeader: r.oldHeader,
                oldContent: r.oldPanel,
                newHeader: r.newHeader,
                newContent: r.newPanel
            })), i) : !1
        }
    }(jQuery, jQuery.ui.accordion.prototype), function (e, t) {
        e.extend(t.options, {
            animate: null,
            animated: "slide"
        });
        var n = t._create;
        t._create = function () {
            var e = this.options;
            e.animate === null && (e.animated ? e.animated === "slide" ? e.animate = 300 : e.animated === "bounceslide" ? e.animate = {
                duration: 200,
                down: {
                    easing: "easeOutBounce",
                    duration: 1e3
                }
            } : e.animate = e.animated : e.animate = !1), n.call(this)
        }
    }(jQuery, jQuery.ui.accordion.prototype))
})(jQuery);
(function (e, t) {
    var n = 0;
    e.widget("ui.autocomplete", {
        version: "1.9.1",
        defaultElement: "<input>",
        options: {
            appendTo: "body",
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        pending: 0,
        _create: function () {
            var t, n, r;
            this.isMultiLine = this._isMultiLine(), this.valueMethod = this.element[this.element.is("input,textarea") ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                keydown: function (i) {
                    if (this.element.prop("readOnly")) {
                        t = !0, r = !0, n = !0;
                        return
                    }
                    t = !1, r = !1, n = !1;
                    var s = e.ui.keyCode;
                    switch (i.keyCode) {
                    case s.PAGE_UP:
                        t = !0, this._move("previousPage", i);
                        break;
                    case s.PAGE_DOWN:
                        t = !0, this._move("nextPage", i);
                        break;
                    case s.UP:
                        t = !0, this._keyEvent("previous", i);
                        break;
                    case s.DOWN:
                        t = !0, this._keyEvent("next", i);
                        break;
                    case s.ENTER:
                    case s.NUMPAD_ENTER:
                        this.menu.active && (t = !0, i.preventDefault(), this.menu.select(i));
                        break;
                    case s.TAB:
                        this.menu.active && this.menu.select(i);
                        break;
                    case s.ESCAPE:
                        this.menu.element.is(":visible") && (this._value(this.term), this.close(i), i.preventDefault());
                        break;
                    default:
                        n = !0, this._searchTimeout(i)
                    }
                },
                keypress: function (r) {
                    if (t) {
                        t = !1, r.preventDefault();
                        return
                    }
                    if (n) return;
                    var i = e.ui.keyCode;
                    switch (r.keyCode) {
                    case i.PAGE_UP:
                        this._move("previousPage", r);
                        break;
                    case i.PAGE_DOWN:
                        this._move("nextPage", r);
                        break;
                    case i.UP:
                        this._keyEvent("previous", r);
                        break;
                    case i.DOWN:
                        this._keyEvent("next", r)
                    }
                },
                input: function (e) {
                    if (r) {
                        r = !1, e.preventDefault();
                        return
                    }
                    this._searchTimeout(e)
                },
                focus: function () {
                    this.selectedItem = null, this.previous = this._value()
                },
                blur: function (e) {
                    if (this.cancelBlur) {
                        delete this.cancelBlur;
                        return
                    }
                    clearTimeout(this.searching), this.close(e), this._change(e)
                }
            }), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo || "body")[0]).menu({
                input: e(),
                role: null
            }).zIndex(this.element.zIndex() + 1).hide().data("menu"), this._on(this.menu.element, {
                mousedown: function (t) {
                    t.preventDefault(), this.cancelBlur = !0, this._delay(function () {
                        delete this.cancelBlur
                    });
                    var n = this.menu.element[0];
                    e(t.target).closest(".ui-menu-item").length || this._delay(function () {
                        var t = this;
                        this.document.one("mousedown", function (r) {
                            r.target !== t.element[0] && r.target !== n && !e.contains(n, r.target) && t.close()
                        })
                    })
                },
                menufocus: function (t, n) {
                    if (this.isNewMenu) {
                        this.isNewMenu = !1;
                        if (t.originalEvent && /^mouse/.test(t.originalEvent.type)) {
                            this.menu.blur(), this.document.one("mousemove", function () {
                                e(t.target).trigger(t.originalEvent)
                            });
                            return
                        }
                    }
                    var r = n.item.data("ui-autocomplete-item") || n.item.data("item.autocomplete");
                    !1 !== this._trigger("focus", t, {
                        item: r
                    }) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(r.value) : this.liveRegion.text(r.value)
                },
                menuselect: function (e, t) {
                    var n = t.item.data("ui-autocomplete-item") || t.item.data("item.autocomplete"),
                        r = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = r, this._delay(function () {
                        this.previous = r, this.selectedItem = n
                    })), !1 !== this._trigger("select", e, {
                        item: n
                    }) && this._value(n.value), this.term = this._value(), this.close(e), this.selectedItem = n
                }
            }), this.liveRegion = e("<span>", {
                role: "status",
                "aria-live": "polite"
            }).addClass("ui-helper-hidden-accessible").insertAfter(this.element), e.fn.bgiframe && this.menu.element.bgiframe(), this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function () {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function (e, t) {
            this._super(e, t), e === "source" && this._initSource(), e === "appendTo" && this.menu.element.appendTo(this.document.find(t || "body")[0]), e === "disabled" && t && this.xhr && this.xhr.abort()
        },
        _isMultiLine: function () {
            return this.element.is("textarea") ? !0 : this.element.is("input") ? !1 : this.element.prop("isContentEditable")
        },
        _initSource: function () {
            var t, n, r = this;
            e.isArray(this.options.source) ? (t = this.options.source, this.source = function (n, r) {
                r(e.ui.autocomplete.filter(t, n.term))
            }) : typeof this.options.source == "string" ? (n = this.options.source, this.source = function (t, i) {
                r.xhr && r.xhr.abort(), r.xhr = e.ajax({
                    url: n,
                    data: t,
                    dataType: "json",
                    success: function (e) {
                        i(e)
                    },
                    error: function () {
                        i([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function (e) {
            clearTimeout(this.searching), this.searching = this._delay(function () {
                this.term !== this._value() && (this.selectedItem = null, this.search(null, e))
            }, this.options.delay)
        },
        search: function (e, t) {
            e = e != null ? e : this._value(), this.term = this._value();
            if (e.length < this.options.minLength) return this.close(t);
            if (this._trigger("search", t) === !1) return;
            return this._search(e)
        },
        _search: function (e) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                term: e
            }, this._response())
        },
        _response: function () {
            var e = this,
                t = ++n;
            return function (r) {
                t === n && e.__response(r), e.pending--, e.pending || e.element.removeClass("ui-autocomplete-loading")
            }
        },
        __response: function (e) {
            e && (e = this._normalize(e)), this._trigger("response", null, {
                content: e
            }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
        },
        close: function (e) {
            this.cancelSearch = !0, this._close(e)
        },
        _close: function (e) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
        },
        _change: function (e) {
            this.previous !== this._value() && this._trigger("change", e, {
                item: this.selectedItem
            })
        },
        _normalize: function (t) {
            return t.length && t[0].label && t[0].value ? t : e.map(t, function (t) {
                return typeof t == "string" ? {
                    label: t,
                    value: t
                } : e.extend({
                    label: t.label || t.value,
                    value: t.value || t.label
                }, t)
            })
        },
        _suggest: function (t) {
            var n = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
            this._renderMenu(n, t), this.menu.refresh(), n.show(), this._resizeMenu(), n.position(e.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function () {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function (t, n) {
            var r = this;
            e.each(n, function (e, n) {
                r._renderItemData(t, n)
            })
        },
        _renderItemData: function (e, t) {
            return this._renderItem(e, t).data("ui-autocomplete-item", t)
        },
        _renderItem: function (t, n) {
            return e("<li>").append(e("<a>").text(n.label)).appendTo(t)
        },
        _move: function (e, t) {
            if (!this.menu.element.is(":visible")) {
                this.search(null, t);
                return
            }
            if (this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e)) {
                this._value(this.term), this.menu.blur();
                return
            }
            this.menu[e](t)
        },
        widget: function () {
            return this.menu.element
        },
        _value: function () {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function (e, t) {
            if (!this.isMultiLine || this.menu.element.is(":visible")) this._move(e, t), t.preventDefault()
        }
    }), e.extend(e.ui.autocomplete, {
        escapeRegex: function (e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function (t, n) {
            var r = new RegExp(e.ui.autocomplete.escapeRegex(n), "i");
            return e.grep(t, function (e) {
                return r.test(e.label || e.value || e)
            })
        }
    }), e.widget("ui.autocomplete", e.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function (e) {
                    return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function (e) {
            var t;
            this._superApply(arguments);
            if (this.options.disabled || this.cancelSearch) return;
            e && e.length ? t = this.options.messages.results(e.length) : t = this.options.messages.noResults, this.liveRegion.text(t)
        }
    })
})(jQuery);
(function (e, t) {
    var n, r, i, s, o = "ui-button ui-widget ui-state-default ui-corner-all",
        u = "ui-state-hover ui-state-active ",
        a = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        f = function () {
            var t = e(this).find(":ui-button");
            setTimeout(function () {
                t.button("refresh")
            }, 1)
        }, l = function (t) {
            var n = t.name,
                r = t.form,
                i = e([]);
            return n && (r ? i = e(r).find("[name='" + n + "']") : i = e("[name='" + n + "']", t.ownerDocument).filter(function () {
                return !this.form
            })), i
        };
    e.widget("ui.button", {
        version: "1.9.1",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function () {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, f), typeof this.options.disabled != "boolean" ? this.options.disabled = !! this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !! this.buttonElement.attr("title");
            var t = this,
                u = this.options,
                a = this.type === "checkbox" || this.type === "radio",
                c = "ui-state-hover" + (a ? "" : " ui-state-active"),
                h = "ui-state-focus";
            u.label === null && (u.label = this.type === "input" ? this.buttonElement.val() : this.buttonElement.html()), this.buttonElement.addClass(o).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () {
                if (u.disabled) return;
                e(this).addClass("ui-state-hover"), this === n && e(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function () {
                if (u.disabled) return;
                e(this).removeClass(c)
            }).bind("click" + this.eventNamespace, function (e) {
                u.disabled && (e.preventDefault(), e.stopImmediatePropagation())
            }), this.element.bind("focus" + this.eventNamespace, function () {
                t.buttonElement.addClass(h)
            }).bind("blur" + this.eventNamespace, function () {
                t.buttonElement.removeClass(h)
            }), a && (this.element.bind("change" + this.eventNamespace, function () {
                if (s) return;
                t.refresh()
            }), this.buttonElement.bind("mousedown" + this.eventNamespace, function (e) {
                if (u.disabled) return;
                s = !1, r = e.pageX, i = e.pageY
            }).bind("mouseup" + this.eventNamespace, function (e) {
                if (u.disabled) return;
                if (r !== e.pageX || i !== e.pageY) s = !0
            })), this.type === "checkbox" ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                if (u.disabled || s) return !1;
                e(this).toggleClass("ui-state-active"), t.buttonElement.attr("aria-pressed", t.element[0].checked)
            }) : this.type === "radio" ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                if (u.disabled || s) return !1;
                e(this).addClass("ui-state-active"), t.buttonElement.attr("aria-pressed", "true");
                var n = t.element[0];
                l(n).not(n).map(function () {
                    return e(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () {
                if (u.disabled) return !1;
                e(this).addClass("ui-state-active"), n = this, t.document.one("mouseup", function () {
                    n = null
                })
            }).bind("mouseup" + this.eventNamespace, function () {
                if (u.disabled) return !1;
                e(this).removeClass("ui-state-active")
            }).bind("keydown" + this.eventNamespace, function (t) {
                if (u.disabled) return !1;
                (t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active")
            }).bind("keyup" + this.eventNamespace, function () {
                e(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function (t) {
                t.keyCode === e.ui.keyCode.SPACE && e(this).click()
            })), this._setOption("disabled", u.disabled), this._resetButton()
        },
        _determineButtonType: function () {
            var e, t, n;
            this.element.is("[type=checkbox]") ? this.type = "checkbox" : this.element.is("[type=radio]") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button", this.type === "checkbox" || this.type === "radio" ? (e = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible"), n = this.element.is(":checked"), n && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", n)) : this.buttonElement = this.element
        },
        widget: function () {
            return this.buttonElement
        },
        _destroy: function () {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(o + " " + u + " " + a).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function (e, t) {
            this._super(e, t);
            if (e === "disabled") {
                t ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1);
                return
            }
            this._resetButton()
        },
        refresh: function () {
            var t = this.element.is(":disabled") || this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOption("disabled", t), this.type === "radio" ? l(this.element[0]).each(function () {
                e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : this.type === "checkbox" && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function () {
            if (this.type === "input") {
                this.options.label && this.element.val(this.options.label);
                return
            }
            var t = this.buttonElement.removeClass(a),
                n = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
                r = this.options.icons,
                i = r.primary && r.secondary,
                s = [];
            r.primary || r.secondary ? (this.options.text && s.push("ui-button-text-icon" + (i ? "s" : r.primary ? "-primary" : "-secondary")), r.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + r.primary + "'></span>"), r.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + r.secondary + "'></span>"), this.options.text || (s.push(i ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", e.trim(n)))) : s.push("ui-button-text-only"), t.addClass(s.join(" "))
        }
    }), e.widget("ui.buttonset", {
        version: "1.9.1",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"
        },
        _create: function () {
            this.element.addClass("ui-buttonset")
        },
        _init: function () {
            this.refresh()
        },
        _setOption: function (e, t) {
            e === "disabled" && this.buttons.button("option", e, t), this._super(e, t)
        },
        refresh: function () {
            var t = this.element.css("direction") === "rtl";
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function () {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function () {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    })
})(jQuery);
(function ($, undefined) {
    function Datepicker() {
        this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, $.extend(this._defaults, this.regional[""]), this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
    }

    function bindHover(e) {
        var t = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return e.delegate(t, "mouseout", function () {
            $(this).removeClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") != -1 && $(this).removeClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") != -1 && $(this).removeClass("ui-datepicker-next-hover")
        }).delegate(t, "mouseover", function () {
            $.datepicker._isDisabledDatepicker(instActive.inline ? e.parent()[0] : instActive.input[0]) || ($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), $(this).addClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") != -1 && $(this).addClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") != -1 && $(this).addClass("ui-datepicker-next-hover"))
        })
    }

    function extendRemove(e, t) {
        $.extend(e, t);
        for (var n in t)
            if (t[n] == null || t[n] == undefined) e[n] = t[n];
        return e
    }
    $.extend($.ui, {
        datepicker: {
            version: "1.9.1"
        }
    });
    var PROP_NAME = "datepicker",
        dpuuid = (new Date).getTime(),
        instActive;
    $.extend(Datepicker.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        log: function () {
            this.debug && console.log.apply("", arguments)
        },
        _widgetDatepicker: function () {
            return this.dpDiv
        },
        setDefaults: function (e) {
            return extendRemove(this._defaults, e || {}), this
        },
        _attachDatepicker: function (target, settings) {
            var inlineSettings = null;
            for (var attrName in this._defaults) {
                var attrValue = target.getAttribute("date:" + attrName);
                if (attrValue) {
                    inlineSettings = inlineSettings || {};
                    try {
                        inlineSettings[attrName] = eval(attrValue)
                    } catch (err) {
                        inlineSettings[attrName] = attrValue
                    }
                }
            }
            var nodeName = target.nodeName.toLowerCase(),
                inline = nodeName == "div" || nodeName == "span";
            target.id || (this.uuid += 1, target.id = "dp" + this.uuid);
            var inst = this._newInst($(target), inline);
            inst.settings = $.extend({}, settings || {}, inlineSettings || {}), nodeName == "input" ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst)
        },
        _newInst: function (e, t) {
            var n = e[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
            return {
                id: n,
                input: e,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: t,
                dpDiv: t ? bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv
            }
        },
        _connectDatepicker: function (e, t) {
            var n = $(e);
            t.append = $([]), t.trigger = $([]);
            if (n.hasClass(this.markerClassName)) return;
            this._attachments(n, t), n.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function (e, n, r) {
                t.settings[n] = r
            }).bind("getData.datepicker", function (e, n) {
                return this._get(t, n)
            }), this._autoSize(t), $.data(e, PROP_NAME, t), t.settings.disabled && this._disableDatepicker(e)
        },
        _attachments: function (e, t) {
            var n = this._get(t, "appendText"),
                r = this._get(t, "isRTL");
            t.append && t.append.remove(), n && (t.append = $('<span class="' + this._appendClass + '">' + n + "</span>"), e[r ? "before" : "after"](t.append)), e.unbind("focus", this._showDatepicker), t.trigger && t.trigger.remove();
            var i = this._get(t, "showOn");
            (i == "focus" || i == "both") && e.focus(this._showDatepicker);
            if (i == "button" || i == "both") {
                var s = this._get(t, "buttonText"),
                    o = this._get(t, "buttonImage");
                t.trigger = $(this._get(t, "buttonImageOnly") ? $('<span class="icon-calendar"></span>').addClass(this._triggerClass).attr({
                    src: o,
                    alt: s,
                    title: s
                }) : $('<button type="button"></button>').addClass(this._triggerClass).html(o == "" ? s : $("<img/>").attr({
                    src: o,
                    alt: s,
                    title: s
                }))), e[r ? "before" : "after"](t.trigger), t.trigger.click(function () {
                    return $.datepicker._datepickerShowing && $.datepicker._lastInput == e[0] ? $.datepicker._hideDatepicker() : $.datepicker._datepickerShowing && $.datepicker._lastInput != e[0] ? ($.datepicker._hideDatepicker(), $.datepicker._showDatepicker(e[0])) : $.datepicker._showDatepicker(e[0]), !1
                })
            }
        },
        _autoSize: function (e) {
            if (this._get(e, "autoSize") && !e.inline) {
                var t = new Date(2009, 11, 20),
                    n = this._get(e, "dateFormat");
                if (n.match(/[DM]/)) {
                    var r = function (e) {
                        var t = 0,
                            n = 0;
                        for (var r = 0; r < e.length; r++) e[r].length > t && (t = e[r].length, n = r);
                        return n
                    };
                    t.setMonth(r(this._get(e, n.match(/MM/) ? "monthNames" : "monthNamesShort"))), t.setDate(r(this._get(e, n.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - t.getDay())
                }
                e.input.attr("size", this._formatDate(e, t).length)
            }
        },
        _inlineDatepicker: function (e, t) {
            var n = $(e);
            if (n.hasClass(this.markerClassName)) return;
            n.addClass(this.markerClassName).append(t.dpDiv).bind("setData.datepicker", function (e, n, r) {
                t.settings[n] = r
            }).bind("getData.datepicker", function (e, n) {
                return this._get(t, n)
            }), $.data(e, PROP_NAME, t), this._setDate(t, this._getDefaultDate(t), !0), this._updateDatepicker(t), this._updateAlternate(t), t.settings.disabled && this._disableDatepicker(e), t.dpDiv.css("display", "block")
        },
        _dialogDatepicker: function (e, t, n, r, i) {
            var s = this._dialogInst;
            if (!s) {
                this.uuid += 1;
                var o = "dp" + this.uuid;
                this._dialogInput = $('<input type="text" id="' + o + '" style="position: absolute; top: -100px; width: 0px;"/>'), this._dialogInput.keydown(this._doKeyDown), $("body").append(this._dialogInput), s = this._dialogInst = this._newInst(this._dialogInput, !1), s.settings = {}, $.data(this._dialogInput[0], PROP_NAME, s)
            }
            extendRemove(s.settings, r || {}), t = t && t.constructor == Date ? this._formatDate(s, t) : t, this._dialogInput.val(t), this._pos = i ? i.length ? i : [i.pageX, i.pageY] : null;
            if (!this._pos) {
                var u = document.documentElement.clientWidth,
                    a = document.documentElement.clientHeight,
                    f = document.documentElement.scrollLeft || document.body.scrollLeft,
                    l = document.documentElement.scrollTop || document.body.scrollTop;
                this._pos = [u / 2 - 100 + f, a / 2 - 150 + l]
            }
            return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), s.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), $.blockUI && $.blockUI(this.dpDiv), $.data(this._dialogInput[0], PROP_NAME, s), this
        },
        _destroyDatepicker: function (e) {
            var t = $(e),
                n = $.data(e, PROP_NAME);
            if (!t.hasClass(this.markerClassName)) return;
            var r = e.nodeName.toLowerCase();
            $.removeData(e, PROP_NAME), r == "input" ? (n.append.remove(), n.trigger.remove(), t.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : (r == "div" || r == "span") && t.removeClass(this.markerClassName).empty()
        },
        _enableDatepicker: function (e) {
            var t = $(e),
                n = $.data(e, PROP_NAME);
            if (!t.hasClass(this.markerClassName)) return;
            var r = e.nodeName.toLowerCase();
            if (r == "input") e.disabled = !1, n.trigger.filter("button").each(function () {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            });
            else if (r == "div" || r == "span") {
                var i = t.children("." + this._inlineClass);
                i.children().removeClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)
            }
            this._disabledInputs = $.map(this._disabledInputs, function (t) {
                return t == e ? null : t
            })
        },
        _disableDatepicker: function (e) {
            var t = $(e),
                n = $.data(e, PROP_NAME);
            if (!t.hasClass(this.markerClassName)) return;
            var r = e.nodeName.toLowerCase();
            if (r == "input") e.disabled = !0, n.trigger.filter("button").each(function () {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            });
            else if (r == "div" || r == "span") {
                var i = t.children("." + this._inlineClass);
                i.children().addClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)
            }
            this._disabledInputs = $.map(this._disabledInputs, function (t) {
                return t == e ? null : t
            }), this._disabledInputs[this._disabledInputs.length] = e
        },
        _isDisabledDatepicker: function (e) {
            if (!e) return !1;
            for (var t = 0; t < this._disabledInputs.length; t++)
                if (this._disabledInputs[t] == e) return !0;
            return !1
        },
        _getInst: function (e) {
            try {
                return $.data(e, PROP_NAME)
            } catch (t) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function (e, t, n) {
            var r = this._getInst(e);
            if (arguments.length == 2 && typeof t == "string") return t == "defaults" ? $.extend({}, $.datepicker._defaults) : r ? t == "all" ? $.extend({}, r.settings) : this._get(r, t) : null;
            var i = t || {};
            typeof t == "string" && (i = {}, i[t] = n);
            if (r) {
                this._curInst == r && this._hideDatepicker();
                var s = this._getDateDatepicker(e, !0),
                    o = this._getMinMaxDate(r, "min"),
                    u = this._getMinMaxDate(r, "max");
                extendRemove(r.settings, i), o !== null && i.dateFormat !== undefined && i.minDate === undefined && (r.settings.minDate = this._formatDate(r, o)), u !== null && i.dateFormat !== undefined && i.maxDate === undefined && (r.settings.maxDate = this._formatDate(r, u)), this._attachments($(e), r), this._autoSize(r), this._setDate(r, s), this._updateAlternate(r), this._updateDatepicker(r)
            }
        },
        _changeDatepicker: function (e, t, n) {
            this._optionDatepicker(e, t, n)
        },
        _refreshDatepicker: function (e) {
            var t = this._getInst(e);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function (e, t) {
            var n = this._getInst(e);
            n && (this._setDate(n, t), this._updateDatepicker(n), this._updateAlternate(n))
        },
        _getDateDatepicker: function (e, t) {
            var n = this._getInst(e);
            return n && !n.inline && this._setDateFromField(n, t), n ? this._getDate(n) : null
        },
        _doKeyDown: function (e) {
            var t = $.datepicker._getInst(e.target),
                n = !0,
                r = t.dpDiv.is(".ui-datepicker-rtl");
            t._keyEvent = !0;
            if ($.datepicker._datepickerShowing) switch (e.keyCode) {
            case 9:
                $.datepicker._hideDatepicker(), n = !1;
                break;
            case 13:
                var i = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", t.dpDiv);
                i[0] && $.datepicker._selectDay(e.target, t.selectedMonth, t.selectedYear, i[0]);
                var s = $.datepicker._get(t, "onSelect");
                if (s) {
                    var o = $.datepicker._formatDate(t);
                    s.apply(t.input ? t.input[0] : null, [o, t])
                } else $.datepicker._hideDatepicker();
                return !1;
            case 27:
                $.datepicker._hideDatepicker();
                break;
            case 33:
                $.datepicker._adjustDate(e.target, e.ctrlKey ? -$.datepicker._get(t, "stepBigMonths") : -$.datepicker._get(t, "stepMonths"), "M");
                break;
            case 34:
                $.datepicker._adjustDate(e.target, e.ctrlKey ? +$.datepicker._get(t, "stepBigMonths") : +$.datepicker._get(t, "stepMonths"), "M");
                break;
            case 35:
                (e.ctrlKey || e.metaKey) && $.datepicker._clearDate(e.target), n = e.ctrlKey || e.metaKey;
                break;
            case 36:
                (e.ctrlKey || e.metaKey) && $.datepicker._gotoToday(e.target), n = e.ctrlKey || e.metaKey;
                break;
            case 37:
                (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), n = e.ctrlKey || e.metaKey, e.originalEvent.altKey && $.datepicker._adjustDate(e.target, e.ctrlKey ? -$.datepicker._get(t, "stepBigMonths") : -$.datepicker._get(t, "stepMonths"), "M");
                break;
            case 38:
                (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, -7, "D"), n = e.ctrlKey || e.metaKey;
                break;
            case 39:
                (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), n = e.ctrlKey || e.metaKey, e.originalEvent.altKey && $.datepicker._adjustDate(e.target, e.ctrlKey ? +$.datepicker._get(t, "stepBigMonths") : +$.datepicker._get(t, "stepMonths"), "M");
                break;
            case 40:
                (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, 7, "D"), n = e.ctrlKey || e.metaKey;
                break;
            default:
                n = !1
            } else e.keyCode == 36 && e.ctrlKey ? $.datepicker._showDatepicker(this) : n = !1;
            n && (e.preventDefault(), e.stopPropagation())
        },
        _doKeyPress: function (e) {
            var t = $.datepicker._getInst(e.target);
            if ($.datepicker._get(t, "constrainInput")) {
                var n = $.datepicker._possibleChars($.datepicker._get(t, "dateFormat")),
                    r = String.fromCharCode(e.charCode == undefined ? e.keyCode : e.charCode);
                return e.ctrlKey || e.metaKey || r < " " || !n || n.indexOf(r) > -1
            }
        },
        _doKeyUp: function (e) {
            var t = $.datepicker._getInst(e.target);
            if (t.input.val() != t.lastVal) try {
                var n = $.datepicker.parseDate($.datepicker._get(t, "dateFormat"), t.input ? t.input.val() : null, $.datepicker._getFormatConfig(t));
                n && ($.datepicker._setDateFromField(t), $.datepicker._updateAlternate(t), $.datepicker._updateDatepicker(t))
            } catch (r) {
                $.datepicker.log(r)
            }
            return !0
        },
        _showDatepicker: function (e) {
            e = e.target || e, e.nodeName.toLowerCase() != "input" && (e = $("input", e.parentNode)[0]);
            if ($.datepicker._isDisabledDatepicker(e) || $.datepicker._lastInput == e) return;
            var t = $.datepicker._getInst(e);
            $.datepicker._curInst && $.datepicker._curInst != t && ($.datepicker._curInst.dpDiv.stop(!0, !0), t && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0]));
            var n = $.datepicker._get(t, "beforeShow"),
                r = n ? n.apply(e, [e, t]) : {};
            if (r === !1) return;
            extendRemove(t.settings, r), t.lastVal = null, $.datepicker._lastInput = e, $.datepicker._setDateFromField(t), $.datepicker._inDialog && (e.value = ""), $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(e), $.datepicker._pos[1] += e.offsetHeight);
            var i = !1;
            $(e).parents().each(function () {
                return i |= $(this).css("position") == "fixed", !i
            });
            var s = {
                left: $.datepicker._pos[0],
                top: $.datepicker._pos[1]
            };
            $.datepicker._pos = null, t.dpDiv.empty(), t.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px"
            }), $.datepicker._updateDatepicker(t), s = $.datepicker._checkOffset(t, s, i), t.dpDiv.css({
                position: $.datepicker._inDialog && $.blockUI ? "static" : i ? "fixed" : "absolute",
                display: "none",
                left: s.left + "px",
                top: s.top + "px"
            });
            if (!t.inline) {
                var o = $.datepicker._get(t, "showAnim"),
                    u = $.datepicker._get(t, "duration"),
                    a = function () {
                        var e = t.dpDiv.find("iframe.ui-datepicker-cover");
                        if ( !! e.length) {
                            var n = $.datepicker._getBorders(t.dpDiv);
                            e.css({
                                left: -n[0],
                                top: -n[1],
                                width: t.dpDiv.outerWidth(),
                                height: t.dpDiv.outerHeight()
                            })
                        }
                    };
                t.dpDiv.zIndex($(e).zIndex() + 1), $.datepicker._datepickerShowing = !0, $.effects && ($.effects.effect[o] || $.effects[o]) ? t.dpDiv.show(o, $.datepicker._get(t, "showOptions"), u, a) : t.dpDiv[o || "show"](o ? u : null, a), (!o || !u) && a(), t.input.is(":visible") && !t.input.is(":disabled") && t.input.focus(), $.datepicker._curInst = t
            }
        },
        _updateDatepicker: function (e) {
            this.maxRows = 4;
            var t = $.datepicker._getBorders(e.dpDiv);
            instActive = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
            var n = e.dpDiv.find("iframe.ui-datepicker-cover");
            !n.length || n.css({
                left: -t[0],
                top: -t[1],
                width: e.dpDiv.outerWidth(),
                height: e.dpDiv.outerHeight()
            }), e.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var r = this._getNumberOfMonths(e),
                i = r[1],
                s = 17;
            e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), i > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + i).css("width", s * i + "em"), e.dpDiv[(r[0] != 1 || r[1] != 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e == $.datepicker._curInst && $.datepicker._datepickerShowing && e.input && e.input.is(":visible") && !e.input.is(":disabled") && e.input[0] != document.activeElement && e.input.focus();
            if (e.yearshtml) {
                var o = e.yearshtml;
                setTimeout(function () {
                    o === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), o = e.yearshtml = null
                }, 0)
            }
        },
        _getBorders: function (e) {
            var t = function (e) {
                return {
                    thin: 1,
                    medium: 2,
                    thick: 3
                }[e] || e
            };
            return [parseFloat(t(e.css("border-left-width"))), parseFloat(t(e.css("border-top-width")))]
        },
        _checkOffset: function (e, t, n) {
            var r = e.dpDiv.outerWidth(),
                i = e.dpDiv.outerHeight(),
                s = e.input ? e.input.outerWidth() : 0,
                o = e.input ? e.input.outerHeight() : 0,
                u = document.documentElement.clientWidth + (n ? 0 : $(document).scrollLeft()),
                a = document.documentElement.clientHeight + (n ? 0 : $(document).scrollTop());
            return t.left -= this._get(e, "isRTL") ? r - s : 0, t.left -= n && t.left == e.input.offset().left ? $(document).scrollLeft() : 0, t.top -= n && t.top == e.input.offset().top + o ? $(document).scrollTop() : 0, t.left -= Math.min(t.left, t.left + r > u && u > r ? Math.abs(t.left + r - u) : 0), t.top -= Math.min(t.top, t.top + i > a && a > i ? Math.abs(i + o) : 0), t
        },
        _findPos: function (e) {
            var t = this._getInst(e),
                n = this._get(t, "isRTL");
            while (e && (e.type == "hidden" || e.nodeType != 1 || $.expr.filters.hidden(e))) e = e[n ? "previousSibling" : "nextSibling"];
            var r = $(e).offset();
            return [r.left, r.top]
        },
        _hideDatepicker: function (e) {
            var t = this._curInst;
            if (!t || e && t != $.data(e, PROP_NAME)) return;
            if (this._datepickerShowing) {
                var n = this._get(t, "showAnim"),
                    r = this._get(t, "duration"),
                    i = function () {
                        $.datepicker._tidyDialog(t)
                    };
                $.effects && ($.effects.effect[n] || $.effects[n]) ? t.dpDiv.hide(n, $.datepicker._get(t, "showOptions"), r, i) : t.dpDiv[n == "slideDown" ? "slideUp" : n == "fadeIn" ? "fadeOut" : "hide"](n ? r : null, i), n || i(), this._datepickerShowing = !1;
                var s = this._get(t, "onClose");
                s && s.apply(t.input ? t.input[0] : null, [t.input ? t.input.val() : "", t]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))), this._inDialog = !1
            }
        },
        _tidyDialog: function (e) {
            e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function (e) {
            if (!$.datepicker._curInst) return;
            var t = $(e.target),
                n = $.datepicker._getInst(t[0]);
            (t[0].id != $.datepicker._mainDivId && t.parents("#" + $.datepicker._mainDivId).length == 0 && !t.hasClass($.datepicker.markerClassName) && !t.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && (!$.datepicker._inDialog || !$.blockUI) || t.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != n) && $.datepicker._hideDatepicker()
        },
        _adjustDate: function (e, t, n) {
            var r = $(e),
                i = this._getInst(r[0]);
            if (this._isDisabledDatepicker(r[0])) return;
            this._adjustInstDate(i, t + (n == "M" ? this._get(i, "showCurrentAtPos") : 0), n), this._updateDatepicker(i)
        },
        _gotoToday: function (e) {
            var t = $(e),
                n = this._getInst(t[0]);
            if (this._get(n, "gotoCurrent") && n.currentDay) n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear;
            else {
                var r = new Date;
                n.selectedDay = r.getDate(), n.drawMonth = n.selectedMonth = r.getMonth(), n.drawYear = n.selectedYear = r.getFullYear()
            }
            this._notifyChange(n), this._adjustDate(t)
        },
        _selectMonthYear: function (e, t, n) {
            var r = $(e),
                i = this._getInst(r[0]);
            i["selected" + (n == "M" ? "Month" : "Year")] = i["draw" + (n == "M" ? "Month" : "Year")] = parseInt(t.options[t.selectedIndex].value, 10), this._notifyChange(i), this._adjustDate(r)
        },
        _selectDay: function (e, t, n, r) {
            var i = $(e);
            if ($(r).hasClass(this._unselectableClass) || this._isDisabledDatepicker(i[0])) return;
            var s = this._getInst(i[0]);
            s.selectedDay = s.currentDay = $("a", r).html(), s.selectedMonth = s.currentMonth = t, s.selectedYear = s.currentYear = n, this._selectDate(e, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear))
        },
        _clearDate: function (e) {
            var t = $(e),
                n = this._getInst(t[0]);
            this._selectDate(t, "")
        },
        _selectDate: function (e, t) {
            var n = $(e),
                r = this._getInst(n[0]);
            t = t != null ? t : this._formatDate(r), r.input && r.input.val(t), this._updateAlternate(r);
            var i = this._get(r, "onSelect");
            i ? i.apply(r.input ? r.input[0] : null, [t, r]) : r.input && r.input.trigger("change"), r.inline ? this._updateDatepicker(r) : (this._hideDatepicker(), this._lastInput = r.input[0], typeof r.input[0] != "object" && r.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function (e) {
            var t = this._get(e, "altField");
            if (t) {
                var n = this._get(e, "altFormat") || this._get(e, "dateFormat"),
                    r = this._getDate(e),
                    i = this.formatDate(n, r, this._getFormatConfig(e));
                $(t).each(function () {
                    $(this).val(i)
                })
            }
        },
        noWeekends: function (e) {
            var t = e.getDay();
            return [t > 0 && t < 6, ""]
        },
        iso8601Week: function (e) {
            var t = new Date(e.getTime());
            t.setDate(t.getDate() + 4 - (t.getDay() || 7));
            var n = t.getTime();
            return t.setMonth(0), t.setDate(1), Math.floor(Math.round((n - t) / 864e5) / 7) + 1
        },
        parseDate: function (e, t, n) {
            if (e == null || t == null) throw "Invalid arguments";
            t = typeof t == "object" ? t.toString() : t + "";
            if (t == "") return null;
            var r = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff;
            r = typeof r != "string" ? r : (new Date).getFullYear() % 100 + parseInt(r, 10);
            var i = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                s = (n ? n.dayNames : null) || this._defaults.dayNames,
                o = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                u = (n ? n.monthNames : null) || this._defaults.monthNames,
                a = -1,
                f = -1,
                l = -1,
                c = -1,
                h = !1,
                p = function (t) {
                    var n = y + 1 < e.length && e.charAt(y + 1) == t;
                    return n && y++, n
                }, d = function (e) {
                    var n = p(e),
                        r = e == "@" ? 14 : e == "!" ? 20 : e == "y" && n ? 4 : e == "o" ? 3 : 2,
                        i = new RegExp("^\\d{1," + r + "}"),
                        s = t.substring(g).match(i);
                    if (!s) throw "Missing number at position " + g;
                    return g += s[0].length, parseInt(s[0], 10)
                }, v = function (e, n, r) {
                    var i = $.map(p(e) ? r : n, function (e, t) {
                        return [[t, e]]
                    }).sort(function (e, t) {
                        return -(e[1].length - t[1].length)
                    }),
                        s = -1;
                    $.each(i, function (e, n) {
                        var r = n[1];
                        if (t.substr(g, r.length).toLowerCase() == r.toLowerCase()) return s = n[0], g += r.length, !1
                    });
                    if (s != -1) return s + 1;
                    throw "Unknown name at position " + g
                }, m = function () {
                    if (t.charAt(g) != e.charAt(y)) throw "Unexpected literal at position " + g;
                    g++
                }, g = 0;
            for (var y = 0; y < e.length; y++)
                if (h) e.charAt(y) == "'" && !p("'") ? h = !1 : m();
                else switch (e.charAt(y)) {
                case "d":
                    l = d("d");
                    break;
                case "D":
                    v("D", i, s);
                    break;
                case "o":
                    c = d("o");
                    break;
                case "m":
                    f = d("m");
                    break;
                case "M":
                    f = v("M", o, u);
                    break;
                case "y":
                    a = d("y");
                    break;
                case "@":
                    var b = new Date(d("@"));
                    a = b.getFullYear(), f = b.getMonth() + 1, l = b.getDate();
                    break;
                case "!":
                    var b = new Date((d("!") - this._ticksTo1970) / 1e4);
                    a = b.getFullYear(), f = b.getMonth() + 1, l = b.getDate();
                    break;
                case "'":
                    p("'") ? m() : h = !0;
                    break;
                default:
                    m()
                }
                if (g < t.length) {
                    var w = t.substr(g);
                    if (!/^\s+/.test(w)) throw "Extra/unparsed characters found in date: " + w
                }
            a == -1 ? a = (new Date).getFullYear() : a < 100 && (a += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (a <= r ? 0 : -100));
            if (c > -1) {
                f = 1, l = c;
                do {
                    var E = this._getDaysInMonth(a, f - 1);
                    if (l <= E) break;
                    f++, l -= E
                } while (!0)
            }
            var b = this._daylightSavingAdjust(new Date(a, f - 1, l));
            if (b.getFullYear() != a || b.getMonth() + 1 != f || b.getDate() != l) throw "Invalid date";
            return b
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 24 * 60 * 60 * 1e7,
        formatDate: function (e, t, n) {
            if (!t) return "";
            var r = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                i = (n ? n.dayNames : null) || this._defaults.dayNames,
                s = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                o = (n ? n.monthNames : null) || this._defaults.monthNames,
                u = function (t) {
                    var n = h + 1 < e.length && e.charAt(h + 1) == t;
                    return n && h++, n
                }, a = function (e, t, n) {
                    var r = "" + t;
                    if (u(e))
                        while (r.length < n) r = "0" + r;
                    return r
                }, f = function (e, t, n, r) {
                    return u(e) ? r[t] : n[t]
                }, l = "",
                c = !1;
            if (t)
                for (var h = 0; h < e.length; h++)
                    if (c) e.charAt(h) == "'" && !u("'") ? c = !1 : l += e.charAt(h);
                    else switch (e.charAt(h)) {
                    case "d":
                        l += a("d", t.getDate(), 2);
                        break;
                    case "D":
                        l += f("D", t.getDay(), r, i);
                        break;
                    case "o":
                        l += a("o", Math.round(((new Date(t.getFullYear(), t.getMonth(), t.getDate())).getTime() - (new Date(t.getFullYear(), 0, 0)).getTime()) / 864e5), 3);
                        break;
                    case "m":
                        l += a("m", t.getMonth() + 1, 2);
                        break;
                    case "M":
                        l += f("M", t.getMonth(), s, o);
                        break;
                    case "y":
                        l += u("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
                        break;
                    case "@":
                        l += t.getTime();
                        break;
                    case "!":
                        l += t.getTime() * 1e4 + this._ticksTo1970;
                        break;
                    case "'":
                        u("'") ? l += "'" : c = !0;
                        break;
                    default:
                        l += e.charAt(h)
                    }
                    return l
        },
        _possibleChars: function (e) {
            var t = "",
                n = !1,
                r = function (t) {
                    var n = i + 1 < e.length && e.charAt(i + 1) == t;
                    return n && i++, n
                };
            for (var i = 0; i < e.length; i++)
                if (n) e.charAt(i) == "'" && !r("'") ? n = !1 : t += e.charAt(i);
                else switch (e.charAt(i)) {
                case "d":
                case "m":
                case "y":
                case "@":
                    t += "0123456789";
                    break;
                case "D":
                case "M":
                    return null;
                case "'":
                    r("'") ? t += "'" : n = !0;
                    break;
                default:
                    t += e.charAt(i)
                }
                return t
        },
        _get: function (e, t) {
            return e.settings[t] !== undefined ? e.settings[t] : this._defaults[t]
        },
        _setDateFromField: function (e, t) {
            if (e.input.val() == e.lastVal) return;
            var n = this._get(e, "dateFormat"),
                r = e.lastVal = e.input ? e.input.val() : null,
                i, s;
            i = s = this._getDefaultDate(e);
            var o = this._getFormatConfig(e);
            try {
                i = this.parseDate(n, r, o) || s
            } catch (u) {
                this.log(u), r = t ? "" : r
            }
            e.selectedDay = i.getDate(), e.drawMonth = e.selectedMonth = i.getMonth(), e.drawYear = e.selectedYear = i.getFullYear(), e.currentDay = r ? i.getDate() : 0, e.currentMonth = r ? i.getMonth() : 0, e.currentYear = r ? i.getFullYear() : 0, this._adjustInstDate(e)
        },
        _getDefaultDate: function (e) {
            return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
        },
        _determineDate: function (e, t, n) {
            var r = function (e) {
                var t = new Date;
                return t.setDate(t.getDate() + e), t
            }, i = function (t) {
                    try {
                        return $.datepicker.parseDate($.datepicker._get(e, "dateFormat"), t, $.datepicker._getFormatConfig(e))
                    } catch (n) {}
                    var r = (t.toLowerCase().match(/^c/) ? $.datepicker._getDate(e) : null) || new Date,
                        i = r.getFullYear(),
                        s = r.getMonth(),
                        o = r.getDate(),
                        u = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                        a = u.exec(t);
                    while (a) {
                        switch (a[2] || "d") {
                        case "d":
                        case "D":
                            o += parseInt(a[1], 10);
                            break;
                        case "w":
                        case "W":
                            o += parseInt(a[1], 10) * 7;
                            break;
                        case "m":
                        case "M":
                            s += parseInt(a[1], 10), o = Math.min(o, $.datepicker._getDaysInMonth(i, s));
                            break;
                        case "y":
                        case "Y":
                            i += parseInt(a[1], 10), o = Math.min(o, $.datepicker._getDaysInMonth(i, s))
                        }
                        a = u.exec(t)
                    }
                    return new Date(i, s, o)
                }, s = t == null || t === "" ? n : typeof t == "string" ? i(t) : typeof t == "number" ? isNaN(t) ? n : r(t) : new Date(t.getTime());
            return s = s && s.toString() == "Invalid Date" ? n : s, s && (s.setHours(0), s.setMinutes(0), s.setSeconds(0), s.setMilliseconds(0)), this._daylightSavingAdjust(s)
        },
        _daylightSavingAdjust: function (e) {
            return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
        },
        _setDate: function (e, t, n) {
            var r = !t,
                i = e.selectedMonth,
                s = e.selectedYear,
                o = this._restrictMinMax(e, this._determineDate(e, t, new Date));
            e.selectedDay = e.currentDay = o.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(), e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(), (i != e.selectedMonth || s != e.selectedYear) && !n && this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(r ? "" : this._formatDate(e))
        },
        _getDate: function (e) {
            var t = !e.currentYear || e.input && e.input.val() == "" ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return t
        },
        _attachHandlers: function (e) {
            var t = this._get(e, "stepMonths"),
                n = "#" + e.id.replace(/\\\\/g, "\\");
            e.dpDiv.find("[data-handler]").map(function () {
                var e = {
                    prev: function () {
                        window["DP_jQuery_" + dpuuid].datepicker._adjustDate(n, -t, "M")
                    },
                    next: function () {
                        window["DP_jQuery_" + dpuuid].datepicker._adjustDate(n, +t, "M")
                    },
                    hide: function () {
                        window["DP_jQuery_" + dpuuid].datepicker._hideDatepicker()
                    },
                    today: function () {
                        window["DP_jQuery_" + dpuuid].datepicker._gotoToday(n)
                    },
                    selectDay: function () {
                        return window["DP_jQuery_" + dpuuid].datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function () {
                        return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(n, this, "M"), !1
                    },
                    selectYear: function () {
                        return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(n, this, "Y"), !1
                    }
                };
                $(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function (e) {
            var t = new Date;
            t = this._daylightSavingAdjust(new Date(t.getFullYear(), t.getMonth(), t.getDate()));
            var n = this._get(e, "isRTL"),
                r = this._get(e, "showButtonPanel"),
                i = this._get(e, "hideIfNoPrevNext"),
                s = this._get(e, "navigationAsDateFormat"),
                o = this._getNumberOfMonths(e),
                u = this._get(e, "showCurrentAtPos"),
                a = this._get(e, "stepMonths"),
                f = o[0] != 1 || o[1] != 1,
                l = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                c = this._getMinMaxDate(e, "min"),
                h = this._getMinMaxDate(e, "max"),
                p = e.drawMonth - u,
                d = e.drawYear;
            p < 0 && (p += 12, d--);
            if (h) {
                var v = this._daylightSavingAdjust(new Date(h.getFullYear(), h.getMonth() - o[0] * o[1] + 1, h.getDate()));
                v = c && v < c ? c : v;
                while (this._daylightSavingAdjust(new Date(d, p, 1)) > v) p--, p < 0 && (p = 11, d--)
            }
            e.drawMonth = p, e.drawYear = d;
            var m = this._get(e, "prevText");
            m = s ? this.formatDate(m, this._daylightSavingAdjust(new Date(d, p - a, 1)), this._getFormatConfig(e)) : m;
            var g = this._canAdjustMonth(e, -1, d, p) ? '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "e" : "w") + '">' + m + "</span></a>" : i ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "e" : "w") + '">' + m + "</span></a>",
                y = this._get(e, "nextText");
            y = s ? this.formatDate(y, this._daylightSavingAdjust(new Date(d, p + a, 1)), this._getFormatConfig(e)) : y;
            var b = this._canAdjustMonth(e, 1, d, p) ? '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="' + y + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "w" : "e") + '">' + y + "</span></a>" : i ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + y + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "w" : "e") + '">' + y + "</span></a>",
                w = this._get(e, "currentText"),
                E = this._get(e, "gotoCurrent") && e.currentDay ? l : t;
            w = s ? this.formatDate(w, E, this._getFormatConfig(e)) : w;
            var S = e.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' + this._get(e, "closeText") + "</button>",
                x = r ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (n ? S : "") + (this._isInRange(e, E) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">' + w + "</button>" : "") + (n ? "" : S) + "</div>" : "",
                T = parseInt(this._get(e, "firstDay"), 10);
            T = isNaN(T) ? 0 : T;
            var N = this._get(e, "showWeek"),
                C = this._get(e, "dayNames"),
                k = this._get(e, "dayNamesShort"),
                L = this._get(e, "dayNamesMin"),
                A = this._get(e, "monthNames"),
                O = this._get(e, "monthNamesShort"),
                M = this._get(e, "beforeShowDay"),
                _ = this._get(e, "showOtherMonths"),
                D = this._get(e, "selectOtherMonths"),
                P = this._get(e, "calculateWeek") || this.iso8601Week,
                H = this._getDefaultDate(e),
                B = "";
            for (var j = 0; j < o[0]; j++) {
                var F = "";
                this.maxRows = 4;
                for (var I = 0; I < o[1]; I++) {
                    var q = this._daylightSavingAdjust(new Date(d, p, e.selectedDay)),
                        R = " ui-corner-all",
                        U = "";
                    if (f) {
                        U += '<div class="ui-datepicker-group';
                        if (o[1] > 1) switch (I) {
                        case 0:
                            U += " ui-datepicker-group-first", R = " ui-corner-" + (n ? "right" : "left");
                            break;
                        case o[1] - 1:
                            U += " ui-datepicker-group-last", R = " ui-corner-" + (n ? "left" : "right");
                            break;
                        default:
                            U += " ui-datepicker-group-middle", R = ""
                        }
                        U += '">'
                    }
                    U += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + R + '">' + (/all|left/.test(R) && j == 0 ? n ? b : g : "") + (/all|right/.test(R) && j == 0 ? n ? g : b : "") + this._generateMonthYearHeader(e, p, d, c, h, j > 0 || I > 0, A, O) + '</div><table class="ui-datepicker-calendar"><thead>' + "<tr>";
                    var z = N ? '<th class="ui-datepicker-week-col">' + this._get(e, "weekHeader") + "</th>" : "";
                    for (var W = 0; W < 7; W++) {
                        var X = (W + T) % 7;
                        z += "<th" + ((W + T + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + ">" + '<span title="' + C[X] + '">' + L[X] + "</span></th>"
                    }
                    U += z + "</tr></thead><tbody>";
                    var V = this._getDaysInMonth(d, p);
                    d == e.selectedYear && p == e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, V));
                    var J = (this._getFirstDayOfMonth(d, p) - T + 7) % 7,
                        K = Math.ceil((J + V) / 7),
                        Q = f ? this.maxRows > K ? this.maxRows : K : K;
                    this.maxRows = Q;
                    var G = this._daylightSavingAdjust(new Date(d, p, 1 - J));
                    for (var Y = 0; Y < Q; Y++) {
                        U += "<tr>";
                        var Z = N ? '<td class="ui-datepicker-week-col">' + this._get(e, "calculateWeek")(G) + "</td>" : "";
                        for (var W = 0; W < 7; W++) {
                            var et = M ? M.apply(e.input ? e.input[0] : null, [G]) : [!0, ""],
                                tt = G.getMonth() != p,
                                nt = tt && !D || !et[0] || c && G < c || h && G > h;
                            Z += '<td class="' + ((W + T + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (tt ? " ui-datepicker-other-month" : "") + (G.getTime() == q.getTime() && p == e.selectedMonth && e._keyEvent || H.getTime() == G.getTime() && H.getTime() == q.getTime() ? " " + this._dayOverClass : "") + (nt ? " " + this._unselectableClass + " ui-state-disabled" : "") + (tt && !_ ? "" : " " + et[1] + (G.getTime() == l.getTime() ? " " + this._currentClass : "") + (G.getTime() == t.getTime() ? " ui-datepicker-today" : "")) + '"' + ((!tt || _) && et[2] ? ' title="' + et[2] + '"' : "") + (nt ? "" : ' data-handler="selectDay" data-event="click" data-month="' + G.getMonth() + '" data-year="' + G.getFullYear() + '"') + ">" + (tt && !_ ? "&#xa0;" : nt ? '<span class="ui-state-default">' + G.getDate() + "</span>" : '<a class="ui-state-default' + (G.getTime() == t.getTime() ? " ui-state-highlight" : "") + (G.getTime() == l.getTime() ? " ui-state-active" : "") + (tt ? " ui-priority-secondary" : "") + '" href="#">' + G.getDate() + "</a>") + "</td>", G.setDate(G.getDate() + 1), G = this._daylightSavingAdjust(G)
                        }
                        U += Z + "</tr>"
                    }
                    p++, p > 11 && (p = 0, d++), U += "</tbody></table>" + (f ? "</div>" + (o[0] > 0 && I == o[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""), F += U
                }
                B += F
            }
            return B += x + ($.ui.ie6 && !e.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""), e._keyEvent = !1, B
        },
        _generateMonthYearHeader: function (e, t, n, r, i, s, o, u) {
            var a = this._get(e, "changeMonth"),
                f = this._get(e, "changeYear"),
                l = this._get(e, "showMonthAfterYear"),
                c = '<div class="ui-datepicker-title">',
                h = "";
            if (s || !a) h += '<span class="ui-datepicker-month">' + o[t] + "</span>";
            else {
                var p = r && r.getFullYear() == n,
                    d = i && i.getFullYear() == n;
                h += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
                for (var v = 0; v < 12; v++)(!p || v >= r.getMonth()) && (!d || v <= i.getMonth()) && (h += '<option value="' + v + '"' + (v == t ? ' selected="selected"' : "") + ">" + u[v] + "</option>");
                h += "</select>"
            }
            l || (c += h + (s || !a || !f ? "&#xa0;" : ""));
            if (!e.yearshtml) {
                e.yearshtml = "";
                if (s || !f) c += '<span class="ui-datepicker-year">' + n + "</span>";
                else {
                    var m = this._get(e, "yearRange").split(":"),
                        g = (new Date).getFullYear(),
                        y = function (e) {
                            var t = e.match(/c[+-].*/) ? n + parseInt(e.substring(1), 10) : e.match(/[+-].*/) ? g + parseInt(e, 10) : parseInt(e, 10);
                            return isNaN(t) ? g : t
                        }, b = y(m[0]),
                        w = Math.max(b, y(m[1] || ""));
                    b = r ? Math.max(b, r.getFullYear()) : b, w = i ? Math.min(w, i.getFullYear()) : w, e.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';
                    for (; b <= w; b++) e.yearshtml += '<option value="' + b + '"' + (b == n ? ' selected="selected"' : "") + ">" + b + "</option>";
                    e.yearshtml += "</select>", c += e.yearshtml, e.yearshtml = null
                }
            }
            return c += this._get(e, "yearSuffix"), l && (c += (s || !a || !f ? "&#xa0;" : "") + h), c += "</div>", c
        },
        _adjustInstDate: function (e, t, n) {
            var r = e.drawYear + (n == "Y" ? t : 0),
                i = e.drawMonth + (n == "M" ? t : 0),
                s = Math.min(e.selectedDay, this._getDaysInMonth(r, i)) + (n == "D" ? t : 0),
                o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(r, i, s)));
            e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), (n == "M" || n == "Y") && this._notifyChange(e)
        },
        _restrictMinMax: function (e, t) {
            var n = this._getMinMaxDate(e, "min"),
                r = this._getMinMaxDate(e, "max"),
                i = n && t < n ? n : t;
            return i = r && i > r ? r : i, i
        },
        _notifyChange: function (e) {
            var t = this._get(e, "onChangeMonthYear");
            t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
        },
        _getNumberOfMonths: function (e) {
            var t = this._get(e, "numberOfMonths");
            return t == null ? [1, 1] : typeof t == "number" ? [1, t] : t
        },
        _getMinMaxDate: function (e, t) {
            return this._determineDate(e, this._get(e, t + "Date"), null)
        },
        _getDaysInMonth: function (e, t) {
            return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
        },
        _getFirstDayOfMonth: function (e, t) {
            return (new Date(e, t, 1)).getDay()
        },
        _canAdjustMonth: function (e, t, n, r) {
            var i = this._getNumberOfMonths(e),
                s = this._daylightSavingAdjust(new Date(n, r + (t < 0 ? t : i[0] * i[1]), 1));
            return t < 0 && s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())), this._isInRange(e, s)
        },
        _isInRange: function (e, t) {
            var n = this._getMinMaxDate(e, "min"),
                r = this._getMinMaxDate(e, "max");
            return (!n || t.getTime() >= n.getTime()) && (!r || t.getTime() <= r.getTime())
        },
        _getFormatConfig: function (e) {
            var t = this._get(e, "shortYearCutoff");
            return t = typeof t != "string" ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                shortYearCutoff: t,
                dayNamesShort: this._get(e, "dayNamesShort"),
                dayNames: this._get(e, "dayNames"),
                monthNamesShort: this._get(e, "monthNamesShort"),
                monthNames: this._get(e, "monthNames")
            }
        },
        _formatDate: function (e, t, n, r) {
            t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
            var i = t ? typeof t == "object" ? t : this._daylightSavingAdjust(new Date(r, n, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return this.formatDate(this._get(e, "dateFormat"), i, this._getFormatConfig(e))
        }
    }), $.fn.datepicker = function (e) {
        if (!this.length) return this;
        $.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick).find(document.body).append($.datepicker.dpDiv), $.datepicker.initialized = !0);
        var t = Array.prototype.slice.call(arguments, 1);
        return typeof e != "string" || e != "isDisabled" && e != "getDate" && e != "widget" ? e == "option" && arguments.length == 2 && typeof arguments[1] == "string" ? $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this[0]].concat(t)) : this.each(function () {
            typeof e == "string" ? $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this].concat(t)) : $.datepicker._attachDatepicker(this, e)
        }) : $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this[0]].concat(t))
    }, $.datepicker = new Datepicker, $.datepicker.initialized = !1, $.datepicker.uuid = (new Date).getTime(), $.datepicker.version = "1.9.1", window["DP_jQuery_" + dpuuid] = $
})(jQuery);
(function (e, t) {
    var n = "ui-dialog ui-widget ui-widget-content ui-corner-all ",
        r = {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        }, i = {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        };
    e.widget("ui.dialog", {
        version: "1.9.1",
        options: {
            autoOpen: !0,
            buttons: {},
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: !1,
            maxWidth: !1,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function (t) {
                    var n = e(this).css(t).offset().top;
                    n < 0 && e(this).css("top", t.top - n)
                }
            },
            resizable: !0,
            show: null,
            stack: !0,
            title: "",
            width: 300,
            zIndex: 1e3
        },
        _create: function () {
            this.originalTitle = this.element.attr("title"), typeof this.originalTitle != "string" && (this.originalTitle = ""), this.oldPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.options.title = this.options.title || this.originalTitle;
            var t = this,
                r = this.options,
                i = r.title || "&#160;",
                s, o, u, a, f;
            s = (this.uiDialog = e("<div>")).addClass(n + r.dialogClass).css({
                display: "none",
                outline: 0,
                zIndex: r.zIndex
            }).attr("tabIndex", -1).keydown(function (n) {
                r.closeOnEscape && !n.isDefaultPrevented() && n.keyCode && n.keyCode === e.ui.keyCode.ESCAPE && (t.close(n), n.preventDefault())
            }).mousedown(function (e) {
                t.moveToTop(!1, e)
            }).appendTo("body"), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(s), o = (this.uiDialogTitlebar = e("<div>")).addClass("ui-dialog-titlebar  ui-widget-header  ui-corner-all  ui-helper-clearfix").bind("mousedown", function () {
                s.focus()
            }).prependTo(s), u = e("<a href='#'></a>").addClass("ui-dialog-titlebar-close  ui-corner-all").attr("role", "button").click(function (e) {
                e.preventDefault(), t.close(e)
            }).appendTo(o), (this.uiDialogTitlebarCloseText = e("<span>")).addClass("icon-close").appendTo(u), a = e("<span>").uniqueId().addClass("ui-dialog-title").html(i).prependTo(o), f = (this.uiDialogButtonPane = e("<div>")).addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), (this.uiButtonSet = e("<div>")).addClass("ui-dialog-buttonset").appendTo(f), s.attr({
                role: "dialog",
                "aria-labelledby": a.attr("id")
            }), o.find("*").add(o).disableSelection(), this._hoverable(u), this._focusable(u), r.draggable && e.fn.draggable && this._makeDraggable(), r.resizable && e.fn.resizable && this._makeResizable(), this._createButtons(r.buttons), this._isOpen = !1, e.fn.bgiframe && s.bgiframe(), this._on(s, {
                keydown: function (t) {
                    if (!r.modal || t.keyCode !== e.ui.keyCode.TAB) return;
                    var n = e(":tabbable", s),
                        i = n.filter(":first"),
                        o = n.filter(":last");
                    if (t.target === o[0] && !t.shiftKey) return i.focus(1), !1;
                    if (t.target === i[0] && t.shiftKey) return o.focus(1), !1
                }
            })
        },
        _init: function () {
            this.options.autoOpen && this.open()
        },
        _destroy: function () {
            var e, t = this.oldPosition;
            this.overlay && this.overlay.destroy(), this.uiDialog.hide(), this.element.removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), e = t.parent.children().eq(t.index), e.length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element)
        },
        widget: function () {
            return this.uiDialog
        },
        close: function (t) {
            var n = this,
                r, i;
                e('.popover').remove();
            if (!this._isOpen) return;
            if (!1 === this._trigger("beforeClose", t)) return;
            return this._isOpen = !1, this.overlay && this.overlay.destroy(), this.options.hide ? this._hide(this.uiDialog, this.options.hide, function () {
                n._trigger("close", t)
            }) : (this.uiDialog.hide(), this._trigger("close", t)), e.ui.dialog.overlay.resize(), this.options.modal && (r = 0, e(".ui-dialog").each(function () {
                this !== n.uiDialog[0] && (i = e(this).css("z-index"), isNaN(i) || (r = Math.max(r, i)))
            }), e.ui.dialog.maxZ = r), this
        },
        isOpen: function () {
            return this._isOpen
        },
        moveToTop: function (t, n) {
            var r = this.options,
                i;
            return r.modal && !t || !r.stack && !r.modal ? this._trigger("focus", n) : (r.zIndex > e.ui.dialog.maxZ && (e.ui.dialog.maxZ = r.zIndex), this.overlay && (e.ui.dialog.maxZ += 1, e.ui.dialog.overlay.maxZ = e.ui.dialog.maxZ, this.overlay.$el.css("z-index", e.ui.dialog.overlay.maxZ)), i = {
                scrollTop: this.element.scrollTop(),
                scrollLeft: this.element.scrollLeft()
            }, e.ui.dialog.maxZ += 1, this.uiDialog.css("z-index", e.ui.dialog.maxZ), this.element.attr(i), this._trigger("focus", n), this)
        },
        open: function () {
            if (this._isOpen) return;
            var t, n = this.options,
                r = this.uiDialog;
            return this._size(), this._position(n.position), r.show(n.show), this.overlay = n.modal ? new e.ui.dialog.overlay(this) : null, this.moveToTop(!0), t = this.element.find(":tabbable"), t.length || (t = this.uiDialogButtonPane.find(":tabbable"), t.length || (t = r)), t.eq(0).focus(), this._isOpen = !0, this._trigger("open"), this
        },
        _createButtons: function (t) {
            var n = this,
                r = !1;
            this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), typeof t == "object" && t !== null && e.each(t, function () {
                return !(r = !0)
            }), r ? (e.each(t, function (t, r) {
                r = e.isFunction(r.buttonAction) ? {
                    click: r.buttonAction,
                    text: t,
                    btnClass: r.buttonClass
                } : r;
                // console.dir(r);
                var i = e("<button type='button'></button>").attr(r, !0).addClass(r.btnClass).unbind("click").click(function () {
                    r.click.apply(n.element[0], arguments)
                }).appendTo(n.uiButtonSet);
                e.fn.button && i.button()
            }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog)) : this.uiDialog.removeClass("ui-dialog-buttons")
        },
        _makeDraggable: function () {
            function t(e) {
                return {
                    position: e.position,
                    offset: e.offset
                }
            }
            var n = this,
                r = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function (r, i) {
                    e(this).addClass("ui-dialog-dragging"), n._trigger("dragStart", r, t(i))
                },
                drag: function (e, r) {
                    n._trigger("drag", e, t(r))
                },
                stop: function (i, s) {
                    r.position = [s.position.left - n.document.scrollLeft(), s.position.top - n.document.scrollTop()], e(this).removeClass("ui-dialog-dragging"), n._trigger("dragStop", i, t(s)), e.ui.dialog.overlay.resize()
                }
            })
        },
        _makeResizable: function (n) {
            function r(e) {
                return {
                    originalPosition: e.originalPosition,
                    originalSize: e.originalSize,
                    position: e.position,
                    size: e.size
                }
            }
            n = n === t ? this.options.resizable : n;
            var i = this,
                s = this.options,
                o = this.uiDialog.css("position"),
                u = typeof n == "string" ? n : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: s.maxWidth,
                maxHeight: s.maxHeight,
                minWidth: s.minWidth,
                minHeight: this._minHeight(),
                handles: u,
                start: function (t, n) {
                    e(this).addClass("ui-dialog-resizing"), i._trigger("resizeStart", t, r(n))
                },
                resize: function (e, t) {
                    i._trigger("resize", e, r(t))
                },
                stop: function (t, n) {
                    e(this).removeClass("ui-dialog-resizing"), s.height = e(this).height(), s.width = e(this).width(), i._trigger("resizeStop", t, r(n)), e.ui.dialog.overlay.resize()
                }
            }).css("position", o).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
        },
        _minHeight: function () {
            var e = this.options;
            return e.height === "auto" ? e.minHeight : Math.min(e.minHeight, e.height)
        },
        _position: function (t) {
            var n = [],
                r = [0, 0],
                i;
            if (t) {
                if (typeof t == "string" || typeof t == "object" && "0" in t) n = t.split ? t.split(" ") : [t[0], t[1]], n.length === 1 && (n[1] = n[0]), e.each(["left", "top"], function (e, t) {
                    +n[e] === n[e] && (r[e] = n[e], n[e] = t)
                }), t = {
                    my: n[0] + (r[0] < 0 ? r[0] : "+" + r[0]) + " " + n[1] + (r[1] < 0 ? r[1] : "+" + r[1]),
                    at: n.join(" ")
                };
                t = e.extend({}, e.ui.dialog.prototype.options.position, t)
            } else t = e.ui.dialog.prototype.options.position;
            i = this.uiDialog.is(":visible"), i || this.uiDialog.show(), this.uiDialog.position(t), i || this.uiDialog.hide()
        },
        _setOptions: function (t) {
            var n = this,
                s = {}, o = !1;
            e.each(t, function (e, t) {
                n._setOption(e, t), e in r && (o = !0), e in i && (s[e] = t)
            }), o && this._size(), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", s)
        },
        _setOption: function (t, r) {
            var i, s, o = this.uiDialog;
            switch (t) {
            case "buttons":
                this._createButtons(r);
                break;
            case "closeText":
                this.uiDialogTitlebarCloseText.text("" + r);
                break;
            case "dialogClass":
                o.removeClass(this.options.dialogClass).addClass(n + r);
                break;
            case "disabled":
                r ? o.addClass("ui-dialog-disabled") : o.removeClass("ui-dialog-disabled");
                break;
            case "draggable":
                i = o.is(":data(draggable)"), i && !r && o.draggable("destroy"), !i && r && this._makeDraggable();
                break;
            case "position":
                this._position(r);
                break;
            case "resizable":
                s = o.is(":data(resizable)"), s && !r && o.resizable("destroy"), s && typeof r == "string" && o.resizable("option", "handles", r), !s && r !== !1 && this._makeResizable(r);
                break;
            case "title":
                e(".ui-dialog-title", this.uiDialogTitlebar).html("" + (r || "&#160;"))
            }
            this._super(t, r)
        },
        _size: function () {
            var t, n, r, i = this.options,
                s = this.uiDialog.is(":visible");
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                height: 0
            }), i.minWidth > i.width && (i.width = i.minWidth), t = this.uiDialog.css({
                height: "auto",
                width: i.width
            }).outerHeight(), n = Math.max(0, i.minHeight - t), i.height === "auto" ? e.support.minHeight ? this.element.css({
                minHeight: n,
                height: "auto"
            }) : (this.uiDialog.show(), r = this.element.css("height", "auto").height(), s || this.uiDialog.hide(), this.element.height(Math.max(r, n))) : this.element.height(Math.max(i.height - t, 0)), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        }
    }), e.extend(e.ui.dialog, {
        uuid: 0,
        maxZ: 0,
        getTitleId: function (e) {
            var t = e.attr("id");
            return t || (this.uuid += 1, t = this.uuid), "ui-dialog-title-" + t
        },
        overlay: function (t) {
            this.$el = e.ui.dialog.overlay.create(t)
        }
    }), e.extend(e.ui.dialog.overlay, {
        instances: [],
        oldInstances: [],
        maxZ: 0,
        events: e.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function (e) {
            return e + ".dialog-overlay"
        }).join(" "),
        create: function (t) {
            this.instances.length === 0 && (setTimeout(function () {
                e.ui.dialog.overlay.instances.length && e(document).bind(e.ui.dialog.overlay.events, function (t) {
                    if (e(t.target).zIndex() < e.ui.dialog.overlay.maxZ) return !1
                })
            }, 1), e(window).bind("resize.dialog-overlay", e.ui.dialog.overlay.resize));
            var n = this.oldInstances.pop() || e("<div>").addClass("ui-widget-overlay");
            return e(document).bind("keydown.dialog-overlay", function (r) {
                var i = e.ui.dialog.overlay.instances;
                i.length !== 0 && i[i.length - 1] === n && t.options.closeOnEscape && !r.isDefaultPrevented() && r.keyCode && r.keyCode === e.ui.keyCode.ESCAPE && (t.close(r), r.preventDefault())
            }), n.appendTo(document.body).css({
                width: this.width(),
                height: this.height()
            }), e.fn.bgiframe && n.bgiframe(), this.instances.push(n), n
        },
        destroy: function (t) {
            var n = e.inArray(t, this.instances),
                r = 0;
            n !== -1 && this.oldInstances.push(this.instances.splice(n, 1)[0]), this.instances.length === 0 && e([document, window]).unbind(".dialog-overlay"), t.height(0).width(0).remove(), e.each(this.instances, function () {
                r = Math.max(r, this.css("z-index"))
            }), this.maxZ = r
        },
        height: function () {
            var t, n;
            return e.ui.ie ? (t = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), n = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight), t < n ? e(window).height() + "px" : t + "px") : e(document).height() + "px"
        },
        width: function () {
            var t, n;
            return e.ui.ie ? (t = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), n = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth), t < n ? e(window).width() + "px" : t + "px") : e(document).width() + "px"
        },
        resize: function () {
            var t = e([]);
            e.each(e.ui.dialog.overlay.instances, function () {
                t = t.add(this)
            }), t.css({
                width: 0,
                height: 0
            }).css({
                width: e.ui.dialog.overlay.width(),
                height: e.ui.dialog.overlay.height()
            })
        }
    }), e.extend(e.ui.dialog.overlay.prototype, {
        destroy: function () {
            e.ui.dialog.overlay.destroy(this.$el)
        }
    })
})(jQuery);
(function (e, t) {
    e.widget("ui.draggable", e.ui.mouse, {
        version: "1.9.1",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1
        },
        _create: function () {
            this.options.helper == "original" && !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        _destroy: function () {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
        },
        _mouseCapture: function (t) {
            var n = this.options;
            return this.helper || n.disabled || e(t.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(n.iframeFix === !0 ? "iframe" : n.iframeFix).each(function () {
                e('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(e(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function (t) {
            var n = this.options;
            return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), n.containment && this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
        },
        _mouseDrag: function (t, n) {
            this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute");
            if (!n) {
                var r = this._uiHash();
                if (this._trigger("drag", t, r) === !1) return this._mouseUp({}), !1;
                this.position = r.position
            }
            if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px";
            if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px";
            return e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
        },
        _mouseStop: function (t) {
            var n = !1;
            e.ui.ddmanager && !this.options.dropBehaviour && (n = e.ui.ddmanager.drop(this, t)), this.dropped && (n = this.dropped, this.dropped = !1);
            var r = this.element[0],
                i = !1;
            while (r && (r = r.parentNode)) r == document && (i = !0);
            if (!i && this.options.helper === "original") return !1;
            if (this.options.revert == "invalid" && !n || this.options.revert == "valid" && n || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, n)) {
                var s = this;
                e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                    s._trigger("stop", t) !== !1 && s._clear()
                })
            } else this._trigger("stop", t) !== !1 && this._clear();
            return !1
        },
        _mouseUp: function (t) {
            return e("div.ui-draggable-iframeFix").each(function () {
                this.parentNode.removeChild(this)
            }), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), e.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function () {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function (t) {
            var n = !this.options.handle || !e(this.options.handle, this.element).length ? !0 : !1;
            return e(this.options.handle, this.element).find("*").andSelf().each(function () {
                this == t.target && (n = !0)
            }), n
        },
        _createHelper: function (t) {
            var n = this.options,
                r = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t])) : n.helper == "clone" ? this.element.clone().removeAttr("id") : this.element;
            return r.parents("body").length || r.appendTo(n.appendTo == "parent" ? this.element[0].parentNode : n.appendTo), r[0] != this.element[0] && !/(fixed|absolute)/.test(r.css("position")) && r.css("position", "absolute"), r
        },
        _adjustOffsetFromHelper: function (t) {
            typeof t == "string" && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            this.cssPosition == "absolute" && this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop());
            if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && e.ui.ie) t = {
                top: 0,
                left: 0
            };
            return {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if (this.cssPosition == "relative") {
                var e = this.element.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var t = this.options;
            t.containment == "parent" && (t.containment = this.helper[0].parentNode);
            if (t.containment == "document" || t.containment == "window") this.containment = [t.containment == "document" ? 0 : e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t.containment == "document" ? 0 : e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (t.containment == "document" ? 0 : e(window).scrollLeft()) + e(t.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (t.containment == "document" ? 0 : e(window).scrollTop()) + (e(t.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            if (!/^(document|window|parent)$/.test(t.containment) && t.containment.constructor != Array) {
                var n = e(t.containment),
                    r = n[0];
                if (!r) return;
                var i = n.offset(),
                    s = e(r).css("overflow") != "hidden";
                this.containment = [(parseInt(e(r).css("borderLeftWidth"), 10) || 0) + (parseInt(e(r).css("paddingLeft"), 10) || 0), (parseInt(e(r).css("borderTopWidth"), 10) || 0) + (parseInt(e(r).css("paddingTop"), 10) || 0), (s ? Math.max(r.scrollWidth, r.offsetWidth) : r.offsetWidth) - (parseInt(e(r).css("borderLeftWidth"), 10) || 0) - (parseInt(e(r).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (s ? Math.max(r.scrollHeight, r.offsetHeight) : r.offsetHeight) - (parseInt(e(r).css("borderTopWidth"), 10) || 0) - (parseInt(e(r).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = n
            } else t.containment.constructor == Array && (this.containment = t.containment)
        },
        _convertPositionTo: function (t, n) {
            n || (n = this.position);
            var r = t == "absolute" ? 1 : -1,
                i = this.options,
                s = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                o = /(html|body)/i.test(s[0].tagName);
            return {
                top: n.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * r,
                left: n.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * r
            }
        },
        _generatePosition: function (t) {
            var n = this.options,
                r = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                i = /(html|body)/i.test(r[0].tagName),
                s = t.pageX,
                o = t.pageY;
            if (this.originalPosition) {
                var u;
                if (this.containment) {
                    if (this.relative_container) {
                        var a = this.relative_container.offset();
                        u = [this.containment[0] + a.left, this.containment[1] + a.top, this.containment[2] + a.left, this.containment[3] + a.top]
                    } else u = this.containment;
                    t.pageX - this.offset.click.left < u[0] && (s = u[0] + this.offset.click.left), t.pageY - this.offset.click.top < u[1] && (o = u[1] + this.offset.click.top), t.pageX - this.offset.click.left > u[2] && (s = u[2] + this.offset.click.left), t.pageY - this.offset.click.top > u[3] && (o = u[3] + this.offset.click.top)
                }
                if (n.grid) {
                    var f = n.grid[1] ? this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1] : this.originalPageY;
                    o = u ? f - this.offset.click.top < u[1] || f - this.offset.click.top > u[3] ? f - this.offset.click.top < u[1] ? f + n.grid[1] : f - n.grid[1] : f : f;
                    var l = n.grid[0] ? this.originalPageX + Math.round((s - this.originalPageX) / n.grid[0]) * n.grid[0] : this.originalPageX;
                    s = u ? l - this.offset.click.left < u[0] || l - this.offset.click.left > u[2] ? l - this.offset.click.left < u[0] ? l + n.grid[0] : l - n.grid[0] : l : l
                }
            }
            return {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : i ? 0 : r.scrollTop()),
                left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : i ? 0 : r.scrollLeft())
            }
        },
        _clear: function () {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function (t, n, r) {
            return r = r || this._uiHash(), e.ui.plugin.call(this, t, [n, r]), t == "drag" && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, n, r)
        },
        plugins: {},
        _uiHash: function (e) {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), e.ui.plugin.add("draggable", "connectToSortable", {
        start: function (t, n) {
            var r = e(this).data("draggable"),
                i = r.options,
                s = e.extend({}, n, {
                    item: r.element
                });
            r.sortables = [], e(i.connectToSortable).each(function () {
                var n = e.data(this, "sortable");
                n && !n.options.disabled && (r.sortables.push({
                    instance: n,
                    shouldRevert: n.options.revert
                }), n.refreshPositions(), n._trigger("activate", t, s))
            })
        },
        stop: function (t, n) {
            var r = e(this).data("draggable"),
                i = e.extend({}, n, {
                    item: r.element
                });
            e.each(r.sortables, function () {
                this.instance.isOver ? (this.instance.isOver = 0, r.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, r.options.helper == "original" && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, i))
            })
        },
        drag: function (t, n) {
            var r = e(this).data("draggable"),
                i = this,
                s = function (t) {
                    var n = this.offset.click.top,
                        r = this.offset.click.left,
                        i = this.positionAbs.top,
                        s = this.positionAbs.left,
                        o = t.height,
                        u = t.width,
                        a = t.top,
                        f = t.left;
                    return e.ui.isOver(i + n, s + r, a, f, o, u)
                };
            e.each(r.sortables, function (s) {
                var o = !1,
                    u = this;
                this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (o = !0, e.each(r.sortables, function () {
                    return this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this != u && this.instance._intersectsWith(this.instance.containerCache) && e.ui.contains(u.instance.element[0], this.instance.element[0]) && (o = !1), o
                })), o ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(i).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
                    return n.helper[0]
                }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = r.offset.click.top, this.instance.offset.click.left = r.offset.click.left, this.instance.offset.parent.left -= r.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= r.offset.parent.top - this.instance.offset.parent.top, r._trigger("toSortable", t), r.dropped = this.instance.element, r.currentItem = r.element, this.instance.fromOutside = r), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), r._trigger("fromSortable", t), r.dropped = !1)
            })
        }
    }), e.ui.plugin.add("draggable", "cursor", {
        start: function (t, n) {
            var r = e("body"),
                i = e(this).data("draggable").options;
            r.css("cursor") && (i._cursor = r.css("cursor")), r.css("cursor", i.cursor)
        },
        stop: function (t, n) {
            var r = e(this).data("draggable").options;
            r._cursor && e("body").css("cursor", r._cursor)
        }
    }), e.ui.plugin.add("draggable", "opacity", {
        start: function (t, n) {
            var r = e(n.helper),
                i = e(this).data("draggable").options;
            r.css("opacity") && (i._opacity = r.css("opacity")), r.css("opacity", i.opacity)
        },
        stop: function (t, n) {
            var r = e(this).data("draggable").options;
            r._opacity && e(n.helper).css("opacity", r._opacity)
        }
    }), e.ui.plugin.add("draggable", "scroll", {
        start: function (t, n) {
            var r = e(this).data("draggable");
            r.scrollParent[0] != document && r.scrollParent[0].tagName != "HTML" && (r.overflowOffset = r.scrollParent.offset())
        },
        drag: function (t, n) {
            var r = e(this).data("draggable"),
                i = r.options,
                s = !1;
            if (r.scrollParent[0] != document && r.scrollParent[0].tagName != "HTML") {
                if (!i.axis || i.axis != "x") r.overflowOffset.top + r.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? r.scrollParent[0].scrollTop = s = r.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - r.overflowOffset.top < i.scrollSensitivity && (r.scrollParent[0].scrollTop = s = r.scrollParent[0].scrollTop - i.scrollSpeed);
                if (!i.axis || i.axis != "y") r.overflowOffset.left + r.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? r.scrollParent[0].scrollLeft = s = r.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - r.overflowOffset.left < i.scrollSensitivity && (r.scrollParent[0].scrollLeft = s = r.scrollParent[0].scrollLeft - i.scrollSpeed)
            } else {
                if (!i.axis || i.axis != "x") t.pageY - e(document).scrollTop() < i.scrollSensitivity ? s = e(document).scrollTop(e(document).scrollTop() - i.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < i.scrollSensitivity && (s = e(document).scrollTop(e(document).scrollTop() + i.scrollSpeed));
                if (!i.axis || i.axis != "y") t.pageX - e(document).scrollLeft() < i.scrollSensitivity ? s = e(document).scrollLeft(e(document).scrollLeft() - i.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < i.scrollSensitivity && (s = e(document).scrollLeft(e(document).scrollLeft() + i.scrollSpeed))
            }
            s !== !1 && e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(r, t)
        }
    }), e.ui.plugin.add("draggable", "snap", {
        start: function (t, n) {
            var r = e(this).data("draggable"),
                i = r.options;
            r.snapElements = [], e(i.snap.constructor != String ? i.snap.items || ":data(draggable)" : i.snap).each(function () {
                var t = e(this),
                    n = t.offset();
                this != r.element[0] && r.snapElements.push({
                    item: this,
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: n.top,
                    left: n.left
                })
            })
        },
        drag: function (t, n) {
            var r = e(this).data("draggable"),
                i = r.options,
                s = i.snapTolerance,
                o = n.offset.left,
                u = o + r.helperProportions.width,
                a = n.offset.top,
                f = a + r.helperProportions.height;
            for (var l = r.snapElements.length - 1; l >= 0; l--) {
                var c = r.snapElements[l].left,
                    h = c + r.snapElements[l].width,
                    p = r.snapElements[l].top,
                    d = p + r.snapElements[l].height;
                if (!(c - s < o && o < h + s && p - s < a && a < d + s || c - s < o && o < h + s && p - s < f && f < d + s || c - s < u && u < h + s && p - s < a && a < d + s || c - s < u && u < h + s && p - s < f && f < d + s)) {
                    r.snapElements[l].snapping && r.options.snap.release && r.options.snap.release.call(r.element, t, e.extend(r._uiHash(), {
                        snapItem: r.snapElements[l].item
                    })), r.snapElements[l].snapping = !1;
                    continue
                }
                if (i.snapMode != "inner") {
                    var v = Math.abs(p - f) <= s,
                        m = Math.abs(d - a) <= s,
                        g = Math.abs(c - u) <= s,
                        y = Math.abs(h - o) <= s;
                    v && (n.position.top = r._convertPositionTo("relative", {
                        top: p - r.helperProportions.height,
                        left: 0
                    }).top - r.margins.top), m && (n.position.top = r._convertPositionTo("relative", {
                        top: d,
                        left: 0
                    }).top - r.margins.top), g && (n.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: c - r.helperProportions.width
                    }).left - r.margins.left), y && (n.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: h
                    }).left - r.margins.left)
                }
                var b = v || m || g || y;
                if (i.snapMode != "outer") {
                    var v = Math.abs(p - a) <= s,
                        m = Math.abs(d - f) <= s,
                        g = Math.abs(c - o) <= s,
                        y = Math.abs(h - u) <= s;
                    v && (n.position.top = r._convertPositionTo("relative", {
                        top: p,
                        left: 0
                    }).top - r.margins.top), m && (n.position.top = r._convertPositionTo("relative", {
                        top: d - r.helperProportions.height,
                        left: 0
                    }).top - r.margins.top), g && (n.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: c
                    }).left - r.margins.left), y && (n.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: h - r.helperProportions.width
                    }).left - r.margins.left)
                }!r.snapElements[l].snapping && (v || m || g || y || b) && r.options.snap.snap && r.options.snap.snap.call(r.element, t, e.extend(r._uiHash(), {
                    snapItem: r.snapElements[l].item
                })), r.snapElements[l].snapping = v || m || g || y || b
            }
        }
    }), e.ui.plugin.add("draggable", "stack", {
        start: function (t, n) {
            var r = e(this).data("draggable").options,
                i = e.makeArray(e(r.stack)).sort(function (t, n) {
                    return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(n).css("zIndex"), 10) || 0)
                });
            if (!i.length) return;
            var s = parseInt(i[0].style.zIndex) || 0;
            e(i).each(function (e) {
                this.style.zIndex = s + e
            }), this[0].style.zIndex = s + i.length
        }
    }), e.ui.plugin.add("draggable", "zIndex", {
        start: function (t, n) {
            var r = e(n.helper),
                i = e(this).data("draggable").options;
            r.css("zIndex") && (i._zIndex = r.css("zIndex")), r.css("zIndex", i.zIndex)
        },
        stop: function (t, n) {
            var r = e(this).data("draggable").options;
            r._zIndex && e(n.helper).css("zIndex", r._zIndex)
        }
    })
})(jQuery);
(function (e, t) {
    e.widget("ui.droppable", {
        version: "1.9.1",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect"
        },
        _create: function () {
            var t = this.options,
                n = t.accept;
            this.isover = 0, this.isout = 1, this.accept = e.isFunction(n) ? n : function (e) {
                return e.is(n)
            }, this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            }, e.ui.ddmanager.droppables[t.scope] = e.ui.ddmanager.droppables[t.scope] || [], e.ui.ddmanager.droppables[t.scope].push(this), t.addClasses && this.element.addClass("ui-droppable")
        },
        _destroy: function () {
            var t = e.ui.ddmanager.droppables[this.options.scope];
            for (var n = 0; n < t.length; n++) t[n] == this && t.splice(n, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function (t, n) {
            t == "accept" && (this.accept = e.isFunction(n) ? n : function (e) {
                return e.is(n)
            }), e.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function (t) {
            var n = e.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), n && this._trigger("activate", t, this.ui(n))
        },
        _deactivate: function (t) {
            var n = e.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), n && this._trigger("deactivate", t, this.ui(n))
        },
        _over: function (t) {
            var n = e.ui.ddmanager.current;
            if (!n || (n.currentItem || n.element)[0] == this.element[0]) return;
            this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(n)))
        },
        _out: function (t) {
            var n = e.ui.ddmanager.current;
            if (!n || (n.currentItem || n.element)[0] == this.element[0]) return;
            this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(n)))
        },
        _drop: function (t, n) {
            var r = n || e.ui.ddmanager.current;
            if (!r || (r.currentItem || r.element)[0] == this.element[0]) return !1;
            var i = !1;
            return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function () {
                var t = e.data(this, "droppable");
                if (t.options.greedy && !t.options.disabled && t.options.scope == r.options.scope && t.accept.call(t.element[0], r.currentItem || r.element) && e.ui.intersect(r, e.extend(t, {
                    offset: t.element.offset()
                }), t.options.tolerance)) return i = !0, !1
            }), i ? !1 : this.accept.call(this.element[0], r.currentItem || r.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(r)), this.element) : !1
        },
        ui: function (e) {
            return {
                draggable: e.currentItem || e.element,
                helper: e.helper,
                position: e.position,
                offset: e.positionAbs
            }
        }
    }), e.ui.intersect = function (t, n, r) {
        if (!n.offset) return !1;
        var i = (t.positionAbs || t.position.absolute).left,
            s = i + t.helperProportions.width,
            o = (t.positionAbs || t.position.absolute).top,
            u = o + t.helperProportions.height,
            a = n.offset.left,
            f = a + n.proportions.width,
            l = n.offset.top,
            c = l + n.proportions.height;
        switch (r) {
        case "fit":
            return a <= i && s <= f && l <= o && u <= c;
        case "intersect":
            return a < i + t.helperProportions.width / 2 && s - t.helperProportions.width / 2 < f && l < o + t.helperProportions.height / 2 && u - t.helperProportions.height / 2 < c;
        case "pointer":
            var h = (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left,
                p = (t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top,
                d = e.ui.isOver(p, h, l, a, n.proportions.height, n.proportions.width);
            return d;
        case "touch":
            return (o >= l && o <= c || u >= l && u <= c || o < l && u > c) && (i >= a && i <= f || s >= a && s <= f || i < a && s > f);
        default:
            return !1
        }
    }, e.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function (t, n) {
            var r = e.ui.ddmanager.droppables[t.options.scope] || [],
                i = n ? n.type : null,
                s = (t.currentItem || t.element).find(":data(droppable)").andSelf();
            e: for (var o = 0; o < r.length; o++) {
                if (r[o].options.disabled || t && !r[o].accept.call(r[o].element[0], t.currentItem || t.element)) continue;
                for (var u = 0; u < s.length; u++)
                    if (s[u] == r[o].element[0]) {
                        r[o].proportions.height = 0;
                        continue e
                    }
                r[o].visible = r[o].element.css("display") != "none";
                if (!r[o].visible) continue;
                i == "mousedown" && r[o]._activate.call(r[o], n), r[o].offset = r[o].element.offset(), r[o].proportions = {
                    width: r[o].element[0].offsetWidth,
                    height: r[o].element[0].offsetHeight
                }
            }
        },
        drop: function (t, n) {
            var r = !1;
            return e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function () {
                if (!this.options) return;
                !this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance) && (r = this._drop.call(this, n) || r), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, n))
            }), r
        },
        dragStart: function (t, n) {
            t.element.parentsUntil("body").bind("scroll.droppable", function () {
                t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n)
            })
        },
        drag: function (t, n) {
            t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, n), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function () {
                if (this.options.disabled || this.greedyChild || !this.visible) return;
                var r = e.ui.intersect(t, this, this.options.tolerance),
                    i = !r && this.isover == 1 ? "isout" : r && this.isover == 0 ? "isover" : null;
                if (!i) return;
                var s;
                if (this.options.greedy) {
                    var o = this.options.scope,
                        u = this.element.parents(":data(droppable)").filter(function () {
                            return e.data(this, "droppable").options.scope === o
                        });
                    u.length && (s = e.data(u[0], "droppable"), s.greedyChild = i == "isover" ? 1 : 0)
                }
                s && i == "isover" && (s.isover = 0, s.isout = 1, s._out.call(s, n)), this[i] = 1, this[i == "isout" ? "isover" : "isout"] = 0, this[i == "isover" ? "_over" : "_out"].call(this, n), s && i == "isout" && (s.isout = 0, s.isover = 1, s._over.call(s, n))
            })
        },
        dragStop: function (t, n) {
            t.element.parentsUntil("body").unbind("scroll.droppable"), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n)
        }
    }
})(jQuery);
jQuery.effects || function (e, t) {
    var n = e.uiBackCompat !== !1,
        r = "ui-effects-";
    e.effects = {
        effect: {}
    },
    function (t, n) {
        function r(e, t, n) {
            var r = c[t.type] || {};
            return e == null ? n || !t.def ? null : t.def : (e = r.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : r.mod ? (e + r.mod) % r.mod : 0 > e ? 0 : r.max < e ? r.max : e)
        }

        function i(e) {
            var n = f(),
                r = n._rgba = [];
            return e = e.toLowerCase(), v(a, function (t, i) {
                var s, o = i.re.exec(e),
                    u = o && i.parse(o),
                    a = i.space || "rgba";
                if (u) return s = n[a](u), n[l[a].cache] = s[l[a].cache], r = n._rgba = s._rgba, !1
            }), r.length ? (r.join() === "0,0,0,0" && t.extend(r, d.transparent), n) : d[e]
        }

        function s(e, t, n) {
            return n = (n + 1) % 1, n * 6 < 1 ? e + (t - e) * n * 6 : n * 2 < 1 ? t : n * 3 < 2 ? e + (t - e) * (2 / 3 - n) * 6 : e
        }
        var o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),
            u = /^([\-+])=\s*(\d+\.?\d*)/,
            a = [{
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: function (e) {
                    return [e[1], e[2], e[3], e[4]]
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: function (e) {
                    return [e[1] * 2.55, e[2] * 2.55, e[3] * 2.55, e[4]]
                }
            }, {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                parse: function (e) {
                    return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
                }
            }, {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                parse: function (e) {
                    return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function (e) {
                    return [e[1], e[2] / 100, e[3] / 100, e[4]]
                }
            }],
            f = t.Color = function (e, n, r, i) {
                return new t.Color.fn.parse(e, n, r, i)
            }, l = {
                rgba: {
                    props: {
                        red: {
                            idx: 0,
                            type: "byte"
                        },
                        green: {
                            idx: 1,
                            type: "byte"
                        },
                        blue: {
                            idx: 2,
                            type: "byte"
                        }
                    }
                },
                hsla: {
                    props: {
                        hue: {
                            idx: 0,
                            type: "degrees"
                        },
                        saturation: {
                            idx: 1,
                            type: "percent"
                        },
                        lightness: {
                            idx: 2,
                            type: "percent"
                        }
                    }
                }
            }, c = {
                "byte": {
                    floor: !0,
                    max: 255
                },
                percent: {
                    max: 1
                },
                degrees: {
                    mod: 360,
                    floor: !0
                }
            }, h = f.support = {}, p = t("<p>")[0],
            d, v = t.each;
        p.style.cssText = "background-color:rgba(1,1,1,.5)", h.rgba = p.style.backgroundColor.indexOf("rgba") > -1, v(l, function (e, t) {
            t.cache = "_" + e, t.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        }), f.fn = t.extend(f.prototype, {
            parse: function (s, o, u, a) {
                if (s === n) return this._rgba = [null, null, null, null], this;
                if (s.jquery || s.nodeType) s = t(s).css(o), o = n;
                var c = this,
                    h = t.type(s),
                    p = this._rgba = [];
                o !== n && (s = [s, o, u, a], h = "array");
                if (h === "string") return this.parse(i(s) || d._default);
                if (h === "array") return v(l.rgba.props, function (e, t) {
                    p[t.idx] = r(s[t.idx], t)
                }), this;
                if (h === "object") return s instanceof f ? v(l, function (e, t) {
                    s[t.cache] && (c[t.cache] = s[t.cache].slice())
                }) : v(l, function (t, n) {
                    var i = n.cache;
                    v(n.props, function (e, t) {
                        if (!c[i] && n.to) {
                            if (e === "alpha" || s[e] == null) return;
                            c[i] = n.to(c._rgba)
                        }
                        c[i][t.idx] = r(s[e], t, !0)
                    }), c[i] && e.inArray(null, c[i].slice(0, 3)) < 0 && (c[i][3] = 1, n.from && (c._rgba = n.from(c[i])))
                }), this
            },
            is: function (e) {
                var t = f(e),
                    n = !0,
                    r = this;
                return v(l, function (e, i) {
                    var s, o = t[i.cache];
                    return o && (s = r[i.cache] || i.to && i.to(r._rgba) || [], v(i.props, function (e, t) {
                        if (o[t.idx] != null) return n = o[t.idx] === s[t.idx], n
                    })), n
                }), n
            },
            _space: function () {
                var e = [],
                    t = this;
                return v(l, function (n, r) {
                    t[r.cache] && e.push(n)
                }), e.pop()
            },
            transition: function (e, t) {
                var n = f(e),
                    i = n._space(),
                    s = l[i],
                    o = this.alpha() === 0 ? f("transparent") : this,
                    u = o[s.cache] || s.to(o._rgba),
                    a = u.slice();
                return n = n[s.cache], v(s.props, function (e, i) {
                    var s = i.idx,
                        o = u[s],
                        f = n[s],
                        l = c[i.type] || {};
                    if (f === null) return;
                    o === null ? a[s] = f : (l.mod && (f - o > l.mod / 2 ? o += l.mod : o - f > l.mod / 2 && (o -= l.mod)), a[s] = r((f - o) * t + o, i))
                }), this[i](a)
            },
            blend: function (e) {
                if (this._rgba[3] === 1) return this;
                var n = this._rgba.slice(),
                    r = n.pop(),
                    i = f(e)._rgba;
                return f(t.map(n, function (e, t) {
                    return (1 - r) * i[t] + r * e
                }))
            },
            toRgbaString: function () {
                var e = "rgba(",
                    n = t.map(this._rgba, function (e, t) {
                        return e == null ? t > 2 ? 1 : 0 : e
                    });
                return n[3] === 1 && (n.pop(), e = "rgb("), e + n.join() + ")"
            },
            toHslaString: function () {
                var e = "hsla(",
                    n = t.map(this.hsla(), function (e, t) {
                        return e == null && (e = t > 2 ? 1 : 0), t && t < 3 && (e = Math.round(e * 100) + "%"), e
                    });
                return n[3] === 1 && (n.pop(), e = "hsl("), e + n.join() + ")"
            },
            toHexString: function (e) {
                var n = this._rgba.slice(),
                    r = n.pop();
                return e && n.push(~~(r * 255)), "#" + t.map(n, function (e) {
                    return e = (e || 0).toString(16), e.length === 1 ? "0" + e : e
                }).join("")
            },
            toString: function () {
                return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
            }
        }), f.fn.parse.prototype = f.fn, l.hsla.to = function (e) {
            if (e[0] == null || e[1] == null || e[2] == null) return [null, null, null, e[3]];
            var t = e[0] / 255,
                n = e[1] / 255,
                r = e[2] / 255,
                i = e[3],
                s = Math.max(t, n, r),
                o = Math.min(t, n, r),
                u = s - o,
                a = s + o,
                f = a * .5,
                l, c;
            return o === s ? l = 0 : t === s ? l = 60 * (n - r) / u + 360 : n === s ? l = 60 * (r - t) / u + 120 : l = 60 * (t - n) / u + 240, f === 0 || f === 1 ? c = f : f <= .5 ? c = u / a : c = u / (2 - a), [Math.round(l) % 360, c, f, i == null ? 1 : i]
        }, l.hsla.from = function (e) {
            if (e[0] == null || e[1] == null || e[2] == null) return [null, null, null, e[3]];
            var t = e[0] / 360,
                n = e[1],
                r = e[2],
                i = e[3],
                o = r <= .5 ? r * (1 + n) : r + n - r * n,
                u = 2 * r - o;
            return [Math.round(s(u, o, t + 1 / 3) * 255), Math.round(s(u, o, t) * 255), Math.round(s(u, o, t - 1 / 3) * 255), i]
        }, v(l, function (e, i) {
            var s = i.props,
                o = i.cache,
                a = i.to,
                l = i.from;
            f.fn[e] = function (e) {
                a && !this[o] && (this[o] = a(this._rgba));
                if (e === n) return this[o].slice();
                var i, u = t.type(e),
                    c = u === "array" || u === "object" ? e : arguments,
                    h = this[o].slice();
                return v(s, function (e, t) {
                    var n = c[u === "object" ? e : t.idx];
                    n == null && (n = h[t.idx]), h[t.idx] = r(n, t)
                }), l ? (i = f(l(h)), i[o] = h, i) : f(h)
            }, v(s, function (n, r) {
                if (f.fn[n]) return;
                f.fn[n] = function (i) {
                    var s = t.type(i),
                        o = n === "alpha" ? this._hsla ? "hsla" : "rgba" : e,
                        a = this[o](),
                        f = a[r.idx],
                        l;
                    return s === "undefined" ? f : (s === "function" && (i = i.call(this, f), s = t.type(i)), i == null && r.empty ? this : (s === "string" && (l = u.exec(i), l && (i = f + parseFloat(l[2]) * (l[1] === "+" ? 1 : -1))), a[r.idx] = i, this[o](a)))
                }
            })
        }), v(o, function (e, n) {
            t.cssHooks[n] = {
                set: function (e, r) {
                    var s, o, u = "";
                    if (t.type(r) !== "string" || (s = i(r))) {
                        r = f(s || r);
                        if (!h.rgba && r._rgba[3] !== 1) {
                            o = n === "backgroundColor" ? e.parentNode : e;
                            while ((u === "" || u === "transparent") && o && o.style) try {
                                u = t.css(o, "backgroundColor"), o = o.parentNode
                            } catch (a) {}
                            r = r.blend(u && u !== "transparent" ? u : "_default")
                        }
                        r = r.toRgbaString()
                    }
                    try {
                        e.style[n] = r
                    } catch (l) {}
                }
            }, t.fx.step[n] = function (e) {
                e.colorInit || (e.start = f(e.elem, n), e.end = f(e.end), e.colorInit = !0), t.cssHooks[n].set(e.elem, e.start.transition(e.end, e.pos))
            }
        }), t.cssHooks.borderColor = {
            expand: function (e) {
                var t = {};
                return v(["Top", "Right", "Bottom", "Left"], function (n, r) {
                    t["border" + r + "Color"] = e
                }), t
            }
        }, d = t.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(jQuery),
    function () {
        function n() {
            var t = this.ownerDocument.defaultView ? this.ownerDocument.defaultView.getComputedStyle(this, null) : this.currentStyle,
                n = {}, r, i;
            if (t && t.length && t[0] && t[t[0]]) {
                i = t.length;
                while (i--) r = t[i], typeof t[r] == "string" && (n[e.camelCase(r)] = t[r])
            } else
                for (r in t) typeof t[r] == "string" && (n[r] = t[r]);
            return n
        }

        function r(t, n) {
            var r = {}, i, o;
            for (i in n) o = n[i], t[i] !== o && !s[i] && (e.fx.step[i] || !isNaN(parseFloat(o))) && (r[i] = o);
            return r
        }
        var i = ["add", "remove", "toggle"],
            s = {
                border: 1,
                borderBottom: 1,
                borderColor: 1,
                borderLeft: 1,
                borderRight: 1,
                borderTop: 1,
                borderWidth: 1,
                margin: 1,
                padding: 1
            };
        e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (t, n) {
            e.fx.step[n] = function (e) {
                if (e.end !== "none" && !e.setAttr || e.pos === 1 && !e.setAttr) jQuery.style(e.elem, n, e.end), e.setAttr = !0
            }
        }), e.effects.animateClass = function (t, s, o, u) {
            var a = e.speed(s, o, u);
            return this.queue(function () {
                var s = e(this),
                    o = s.attr("class") || "",
                    u, f = a.children ? s.find("*").andSelf() : s;
                f = f.map(function () {
                    var t = e(this);
                    return {
                        el: t,
                        start: n.call(this)
                    }
                }), u = function () {
                    e.each(i, function (e, n) {
                        t[n] && s[n + "Class"](t[n])
                    })
                }, u(), f = f.map(function () {
                    return this.end = n.call(this.el[0]), this.diff = r(this.start, this.end), this
                }), s.attr("class", o), f = f.map(function () {
                    var t = this,
                        n = e.Deferred(),
                        r = jQuery.extend({}, a, {
                            queue: !1,
                            complete: function () {
                                n.resolve(t)
                            }
                        });
                    return this.el.animate(this.diff, r), n.promise()
                }), e.when.apply(e, f.get()).done(function () {
                    u(), e.each(arguments, function () {
                        var t = this.el;
                        e.each(this.diff, function (e) {
                            t.css(e, "")
                        })
                    }), a.complete.call(s[0])
                })
            })
        }, e.fn.extend({
            _addClass: e.fn.addClass,
            addClass: function (t, n, r, i) {
                return n ? e.effects.animateClass.call(this, {
                    add: t
                }, n, r, i) : this._addClass(t)
            },
            _removeClass: e.fn.removeClass,
            removeClass: function (t, n, r, i) {
                return n ? e.effects.animateClass.call(this, {
                    remove: t
                }, n, r, i) : this._removeClass(t)
            },
            _toggleClass: e.fn.toggleClass,
            toggleClass: function (n, r, i, s, o) {
                return typeof r == "boolean" || r === t ? i ? e.effects.animateClass.call(this, r ? {
                    add: n
                } : {
                    remove: n
                }, i, s, o) : this._toggleClass(n, r) : e.effects.animateClass.call(this, {
                    toggle: n
                }, r, i, s)
            },
            switchClass: function (t, n, r, i, s) {
                return e.effects.animateClass.call(this, {
                    add: n,
                    remove: t
                }, r, i, s)
            }
        })
    }(),
    function () {
        function i(t, n, r, i) {
            e.isPlainObject(t) && (n = t, t = t.effect), t = {
                effect: t
            }, n == null && (n = {}), e.isFunction(n) && (i = n, r = null, n = {});
            if (typeof n == "number" || e.fx.speeds[n]) i = r, r = n, n = {};
            return e.isFunction(r) && (i = r, r = null), n && e.extend(t, n), r = r || n.duration, t.duration = e.fx.off ? 0 : typeof r == "number" ? r : r in e.fx.speeds ? e.fx.speeds[r] : e.fx.speeds._default, t.complete = i || n.complete, t
        }

        function s(t) {
            return !t || typeof t == "number" || e.fx.speeds[t] ? !0 : typeof t == "string" && !e.effects.effect[t] ? n && e.effects[t] ? !1 : !0 : !1
        }
        e.extend(e.effects, {
            version: "1.9.1",
            save: function (e, t) {
                for (var n = 0; n < t.length; n++) t[n] !== null && e.data(r + t[n], e[0].style[t[n]])
            },
            restore: function (e, n) {
                var i, s;
                for (s = 0; s < n.length; s++) n[s] !== null && (i = e.data(r + n[s]), i === t && (i = ""), e.css(n[s], i))
            },
            setMode: function (e, t) {
                return t === "toggle" && (t = e.is(":hidden") ? "show" : "hide"), t
            },
            getBaseline: function (e, t) {
                var n, r;
                switch (e[0]) {
                case "top":
                    n = 0;
                    break;
                case "middle":
                    n = .5;
                    break;
                case "bottom":
                    n = 1;
                    break;
                default:
                    n = e[0] / t.height
                }
                switch (e[1]) {
                case "left":
                    r = 0;
                    break;
                case "center":
                    r = .5;
                    break;
                case "right":
                    r = 1;
                    break;
                default:
                    r = e[1] / t.width
                }
                return {
                    x: r,
                    y: n
                }
            },
            createWrapper: function (t) {
                if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                var n = {
                    width: t.outerWidth(!0),
                    height: t.outerHeight(!0),
                    "float": t.css("float")
                }, r = e("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }),
                    i = {
                        width: t.width(),
                        height: t.height()
                    }, s = document.activeElement;
                try {
                    s.id
                } catch (o) {
                    s = document.body
                }
                return t.wrap(r), (t[0] === s || e.contains(t[0], s)) && e(s).focus(), r = t.parent(), t.css("position") === "static" ? (r.css({
                    position: "relative"
                }), t.css({
                    position: "relative"
                })) : (e.extend(n, {
                    position: t.css("position"),
                    zIndex: t.css("z-index")
                }), e.each(["top", "left", "bottom", "right"], function (e, r) {
                    n[r] = t.css(r), isNaN(parseInt(n[r], 10)) && (n[r] = "auto")
                }), t.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), t.css(i), r.css(n).show()
            },
            removeWrapper: function (t) {
                var n = document.activeElement;
                return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === n || e.contains(t[0], n)) && e(n).focus()), t
            },
            setTransition: function (t, n, r, i) {
                return i = i || {}, e.each(n, function (e, n) {
                    var s = t.cssUnit(n);
                    s[0] > 0 && (i[n] = s[0] * r + s[1])
                }), i
            }
        }), e.fn.extend({
            effect: function () {
                function t(t) {
                    function n() {
                        e.isFunction(s) && s.call(i[0]), e.isFunction(t) && t()
                    }
                    var i = e(this),
                        s = r.complete,
                        o = r.mode;
                    (i.is(":hidden") ? o === "hide" : o === "show") ? n() : u.call(i[0], r, n)
                }
                var r = i.apply(this, arguments),
                    s = r.mode,
                    o = r.queue,
                    u = e.effects.effect[r.effect],
                    a = !u && n && e.effects[r.effect];
                return e.fx.off || !u && !a ? s ? this[s](r.duration, r.complete) : this.each(function () {
                    r.complete && r.complete.call(this)
                }) : u ? o === !1 ? this.each(t) : this.queue(o || "fx", t) : a.call(this, {
                    options: r,
                    duration: r.duration,
                    callback: r.complete,
                    mode: r.mode
                })
            },
            _show: e.fn.show,
            show: function (e) {
                if (s(e)) return this._show.apply(this, arguments);
                var t = i.apply(this, arguments);
                return t.mode = "show", this.effect.call(this, t)
            },
            _hide: e.fn.hide,
            hide: function (e) {
                if (s(e)) return this._hide.apply(this, arguments);
                var t = i.apply(this, arguments);
                return t.mode = "hide", this.effect.call(this, t)
            },
            __toggle: e.fn.toggle,
            toggle: function (t) {
                if (s(t) || typeof t == "boolean" || e.isFunction(t)) return this.__toggle.apply(this, arguments);
                var n = i.apply(this, arguments);
                return n.mode = "toggle", this.effect.call(this, n)
            },
            cssUnit: function (t) {
                var n = this.css(t),
                    r = [];
                return e.each(["em", "px", "%", "pt"], function (e, t) {
                    n.indexOf(t) > 0 && (r = [parseFloat(n), t])
                }), r
            }
        })
    }(),
    function () {
        var t = {};
        e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, n) {
            t[n] = function (t) {
                return Math.pow(t, e + 2)
            }
        }), e.extend(t, {
            Sine: function (e) {
                return 1 - Math.cos(e * Math.PI / 2)
            },
            Circ: function (e) {
                return 1 - Math.sqrt(1 - e * e)
            },
            Elastic: function (e) {
                return e === 0 || e === 1 ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin(((e - 1) * 80 - 7.5) * Math.PI / 15)
            },
            Back: function (e) {
                return e * e * (3 * e - 2)
            },
            Bounce: function (e) {
                var t, n = 4;
                while (e < ((t = Math.pow(2, --n)) - 1) / 11);
                return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((t * 3 - 2) / 22 - e, 2)
            }
        }), e.each(t, function (t, n) {
            e.easing["easeIn" + t] = n, e.easing["easeOut" + t] = function (e) {
                return 1 - n(1 - e)
            }, e.easing["easeInOut" + t] = function (e) {
                return e < .5 ? n(e * 2) / 2 : 1 - n(e * -2 + 2) / 2
            }
        })
    }()
}(jQuery);
(function (e, t) {
    var n = /up|down|vertical/,
        r = /up|left|vertical|horizontal/;
    e.effects.effect.blind = function (t, i) {
        var s = e(this),
            o = ["position", "top", "bottom", "left", "right", "height", "width"],
            u = e.effects.setMode(s, t.mode || "hide"),
            a = t.direction || "up",
            f = n.test(a),
            l = f ? "height" : "width",
            c = f ? "top" : "left",
            h = r.test(a),
            p = {}, d = u === "show",
            v, m, g;
        s.parent().is(".ui-effects-wrapper") ? e.effects.save(s.parent(), o) : e.effects.save(s, o), s.show(), v = e.effects.createWrapper(s).css({
            overflow: "hidden"
        }), m = v[l](), g = parseFloat(v.css(c)) || 0, p[l] = d ? m : 0, h || (s.css(f ? "bottom" : "right", 0).css(f ? "top" : "left", "auto").css({
            position: "absolute"
        }), p[c] = d ? g : m + g), d && (v.css(l, 0), h || v.css(c, g + m)), v.animate(p, {
            duration: t.duration,
            easing: t.easing,
            queue: !1,
            complete: function () {
                u === "hide" && s.hide(), e.effects.restore(s, o), e.effects.removeWrapper(s), i()
            }
        })
    }
})(jQuery);
(function (e, t) {
    e.effects.effect.bounce = function (t, n) {
        var r = e(this),
            i = ["position", "top", "bottom", "left", "right", "height", "width"],
            s = e.effects.setMode(r, t.mode || "effect"),
            o = s === "hide",
            u = s === "show",
            a = t.direction || "up",
            f = t.distance,
            l = t.times || 5,
            c = l * 2 + (u || o ? 1 : 0),
            h = t.duration / c,
            p = t.easing,
            d = a === "up" || a === "down" ? "top" : "left",
            v = a === "up" || a === "left",
            m, g, y, b = r.queue(),
            w = b.length;
        (u || o) && i.push("opacity"), e.effects.save(r, i), r.show(), e.effects.createWrapper(r), f || (f = r[d === "top" ? "outerHeight" : "outerWidth"]() / 3), u && (y = {
                opacity: 1
            }, y[d] = 0, r.css("opacity", 0).css(d, v ? -f * 2 : f * 2).animate(y, h, p)), o && (f /= Math.pow(2, l - 1)), y = {}, y[d] = 0;
        for (m = 0; m < l; m++) g = {}, g[d] = (v ? "-=" : "+=") + f, r.animate(g, h, p).animate(y, h, p), f = o ? f * 2 : f / 2;
        o && (g = {
            opacity: 0
        }, g[d] = (v ? "-=" : "+=") + f, r.animate(g, h, p)), r.queue(function () {
            o && r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n()
        }), w > 1 && b.splice.apply(b, [1, 0].concat(b.splice(w, c + 1))), r.dequeue()
    }
})(jQuery);
(function (e, t) {
    e.effects.effect.clip = function (t, n) {
        var r = e(this),
            i = ["position", "top", "bottom", "left", "right", "height", "width"],
            s = e.effects.setMode(r, t.mode || "hide"),
            o = s === "show",
            u = t.direction || "vertical",
            a = u === "vertical",
            f = a ? "height" : "width",
            l = a ? "top" : "left",
            c = {}, h, p, d;
        e.effects.save(r, i), r.show(), h = e.effects.createWrapper(r).css({
            overflow: "hidden"
        }), p = r[0].tagName === "IMG" ? h : r, d = p[f](), o && (p.css(f, 0), p.css(l, d / 2)), c[f] = o ? d : 0, c[l] = o ? 0 : d / 2, p.animate(c, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function () {
                o || r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n()
            }
        })
    }
})(jQuery);
(function (e, t) {
    e.effects.effect.drop = function (t, n) {
        var r = e(this),
            i = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
            s = e.effects.setMode(r, t.mode || "hide"),
            o = s === "show",
            u = t.direction || "left",
            a = u === "up" || u === "down" ? "top" : "left",
            f = u === "up" || u === "left" ? "pos" : "neg",
            l = {
                opacity: o ? 1 : 0
            }, c;
        e.effects.save(r, i), r.show(), e.effects.createWrapper(r), c = t.distance || r[a === "top" ? "outerHeight" : "outerWidth"](!0) / 2, o && r.css("opacity", 0).css(a, f === "pos" ? -c : c), l[a] = (o ? f === "pos" ? "+=" : "-=" : f === "pos" ? "-=" : "+=") + c, r.animate(l, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function () {
                s === "hide" && r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n()
            }
        })
    }
})(jQuery);
(function (e, t) {
    e.effects.effect.explode = function (t, n) {
        function r() {
            p.push(this), p.length === s * o && i()
        }

        function i() {
            u.css({
                visibility: "visible"
            }), e(p).remove(), f || u.hide(), n()
        }
        var s = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
            o = s,
            u = e(this),
            a = e.effects.setMode(u, t.mode || "hide"),
            f = a === "show",
            l = u.show().css("visibility", "hidden").offset(),
            c = Math.ceil(u.outerWidth() / o),
            h = Math.ceil(u.outerHeight() / s),
            p = [],
            d, v, m, g, y, b;
        for (d = 0; d < s; d++) {
            g = l.top + d * h, b = d - (s - 1) / 2;
            for (v = 0; v < o; v++) m = l.left + v * c, y = v - (o - 1) / 2, u.clone().appendTo("body").wrap("<div></div>").css({
                position: "absolute",
                visibility: "visible",
                left: -v * c,
                top: -d * h
            }).parent().addClass("ui-effects-explode").css({
                position: "absolute",
                overflow: "hidden",
                width: c,
                height: h,
                left: m + (f ? y * c : 0),
                top: g + (f ? b * h : 0),
                opacity: f ? 0 : 1
            }).animate({
                left: m + (f ? 0 : y * c),
                top: g + (f ? 0 : b * h),
                opacity: f ? 1 : 0
            }, t.duration || 500, t.easing, r)
        }
    }
})(jQuery);
(function (e, t) {
    e.effects.effect.fade = function (t, n) {
        var r = e(this),
            i = e.effects.setMode(r, t.mode || "toggle");
        r.animate({
            opacity: i
        }, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: n
        })
    }
})(jQuery);
(function (e, t) {
    e.effects.effect.fold = function (t, n) {
        var r = e(this),
            i = ["position", "top", "bottom", "left", "right", "height", "width"],
            s = e.effects.setMode(r, t.mode || "hide"),
            o = s === "show",
            u = s === "hide",
            a = t.size || 15,
            f = /([0-9]+)%/.exec(a),
            l = !! t.horizFirst,
            c = o !== l,
            h = c ? ["width", "height"] : ["height", "width"],
            p = t.duration / 2,
            d, v, m = {}, g = {};
        e.effects.save(r, i), r.show(), d = e.effects.createWrapper(r).css({
            overflow: "hidden"
        }), v = c ? [d.width(), d.height()] : [d.height(), d.width()], f && (a = parseInt(f[1], 10) / 100 * v[u ? 0 : 1]), o && d.css(l ? {
            height: 0,
            width: a
        } : {
            height: a,
            width: 0
        }), m[h[0]] = o ? v[0] : a, g[h[1]] = o ? v[1] : 0, d.animate(m, p, t.easing).animate(g, p, t.easing, function () {
            u && r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n()
        })
    }
})(jQuery);
(function (e, t) {
    e.effects.effect.highlight = function (t, n) {
        var r = e(this),
            i = ["backgroundImage", "backgroundColor", "opacity"],
            s = e.effects.setMode(r, t.mode || "show"),
            o = {
                backgroundColor: r.css("backgroundColor")
            };
        s === "hide" && (o.opacity = 0), e.effects.save(r, i), r.show().css({
            backgroundImage: "none",
            backgroundColor: t.color || "#ffff99"
        }).animate(o, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function () {
                s === "hide" && r.hide(), e.effects.restore(r, i), n()
            }
        })
    }
})(jQuery);
(function (e, t) {
    e.effects.effect.pulsate = function (t, n) {
        var r = e(this),
            i = e.effects.setMode(r, t.mode || "show"),
            s = i === "show",
            o = i === "hide",
            u = s || i === "hide",
            a = (t.times || 5) * 2 + (u ? 1 : 0),
            f = t.duration / a,
            l = 0,
            c = r.queue(),
            h = c.length,
            p;
        if (s || !r.is(":visible")) r.css("opacity", 0).show(), l = 1;
        for (p = 1; p < a; p++) r.animate({
            opacity: l
        }, f, t.easing), l = 1 - l;
        r.animate({
            opacity: l
        }, f, t.easing), r.queue(function () {
            o && r.hide(), n()
        }), h > 1 && c.splice.apply(c, [1, 0].concat(c.splice(h, a + 1))), r.dequeue()
    }
})(jQuery);
(function (e, t) {
    e.effects.effect.puff = function (t, n) {
        var r = e(this),
            i = e.effects.setMode(r, t.mode || "hide"),
            s = i === "hide",
            o = parseInt(t.percent, 10) || 150,
            u = o / 100,
            a = {
                height: r.height(),
                width: r.width()
            };
        e.extend(t, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: i,
            complete: n,
            percent: s ? o : 100,
            from: s ? a : {
                height: a.height * u,
                width: a.width * u
            }
        }), r.effect(t)
    }, e.effects.effect.scale = function (t, n) {
        var r = e(this),
            i = e.extend(!0, {}, t),
            s = e.effects.setMode(r, t.mode || "effect"),
            o = parseInt(t.percent, 10) || (parseInt(t.percent, 10) === 0 ? 0 : s === "hide" ? 0 : 100),
            u = t.direction || "both",
            a = t.origin,
            f = {
                height: r.height(),
                width: r.width(),
                outerHeight: r.outerHeight(),
                outerWidth: r.outerWidth()
            }, l = {
                y: u !== "horizontal" ? o / 100 : 1,
                x: u !== "vertical" ? o / 100 : 1
            };
        i.effect = "size", i.queue = !1, i.complete = n, s !== "effect" && (i.origin = a || ["middle", "center"], i.restore = !0), i.from = t.from || (s === "show" ? {
            height: 0,
            width: 0
        } : f), i.to = {
            height: f.height * l.y,
            width: f.width * l.x,
            outerHeight: f.outerHeight * l.y,
            outerWidth: f.outerWidth * l.x
        }, i.fade && (s === "show" && (i.from.opacity = 0, i.to.opacity = 1), s === "hide" && (i.from.opacity = 1, i.to.opacity = 0)), r.effect(i)
    }, e.effects.effect.size = function (t, n) {
        var r, i, s, o = e(this),
            u = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
            a = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
            f = ["width", "height", "overflow"],
            l = ["fontSize"],
            c = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            h = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
            p = e.effects.setMode(o, t.mode || "effect"),
            d = t.restore || p !== "effect",
            v = t.scale || "both",
            m = t.origin || ["middle", "center"],
            g = o.css("position"),
            y = d ? u : a,
            b = {
                height: 0,
                width: 0
            };
        p === "show" && o.show(), r = {
            height: o.height(),
            width: o.width(),
            outerHeight: o.outerHeight(),
            outerWidth: o.outerWidth()
        }, t.mode === "toggle" && p === "show" ? (o.from = t.to || b, o.to = t.from || r) : (o.from = t.from || (p === "show" ? b : r), o.to = t.to || (p === "hide" ? b : r)), s = {
            from: {
                y: o.from.height / r.height,
                x: o.from.width / r.width
            },
            to: {
                y: o.to.height / r.height,
                x: o.to.width / r.width
            }
        };
        if (v === "box" || v === "both") s.from.y !== s.to.y && (y = y.concat(c), o.from = e.effects.setTransition(o, c, s.from.y, o.from), o.to = e.effects.setTransition(o, c, s.to.y, o.to)), s.from.x !== s.to.x && (y = y.concat(h), o.from = e.effects.setTransition(o, h, s.from.x, o.from), o.to = e.effects.setTransition(o, h, s.to.x, o.to));
        (v === "content" || v === "both") && s.from.y !== s.to.y && (y = y.concat(l).concat(f), o.from = e.effects.setTransition(o, l, s.from.y, o.from), o.to = e.effects.setTransition(o, l, s.to.y, o.to)), e.effects.save(o, y), o.show(), e.effects.createWrapper(o), o.css("overflow", "hidden").css(o.from), m && (i = e.effects.getBaseline(m, r), o.from.top = (r.outerHeight - o.outerHeight()) * i.y, o.from.left = (r.outerWidth - o.outerWidth()) * i.x, o.to.top = (r.outerHeight - o.to.outerHeight) * i.y, o.to.left = (r.outerWidth - o.to.outerWidth) * i.x), o.css(o.from);
        if (v === "content" || v === "both") c = c.concat(["marginTop", "marginBottom"]).concat(l), h = h.concat(["marginLeft", "marginRight"]), f = u.concat(c).concat(h), o.find("*[width]").each(function () {
            var n = e(this),
                r = {
                    height: n.height(),
                    width: n.width()
                };
            d && e.effects.save(n, f), n.from = {
                height: r.height * s.from.y,
                width: r.width * s.from.x
            }, n.to = {
                height: r.height * s.to.y,
                width: r.width * s.to.x
            }, s.from.y !== s.to.y && (n.from = e.effects.setTransition(n, c, s.from.y, n.from), n.to = e.effects.setTransition(n, c, s.to.y, n.to)), s.from.x !== s.to.x && (n.from = e.effects.setTransition(n, h, s.from.x, n.from), n.to = e.effects.setTransition(n, h, s.to.x, n.to)), n.css(n.from), n.animate(n.to, t.duration, t.easing, function () {
                d && e.effects.restore(n, f)
            })
        });
        o.animate(o.to, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function () {
                o.to.opacity === 0 && o.css("opacity", o.from.opacity), p === "hide" && o.hide(), e.effects.restore(o, y), d || (g === "static" ? o.css({
                    position: "relative",
                    top: o.to.top,
                    left: o.to.left
                }) : e.each(["top", "left"], function (e, t) {
                    o.css(t, function (t, n) {
                        var r = parseInt(n, 10),
                            i = e ? o.to.left : o.to.top;
                        return n === "auto" ? i + "px" : r + i + "px"
                    })
                })), e.effects.removeWrapper(o), n()
            }
        })
    }
})(jQuery);
(function (e, t) {
    e.effects.effect.shake = function (t, n) {
        var r = e(this),
            i = ["position", "top", "bottom", "left", "right", "height", "width"],
            s = e.effects.setMode(r, t.mode || "effect"),
            o = t.direction || "left",
            u = t.distance || 20,
            a = t.times || 3,
            f = a * 2 + 1,
            l = Math.round(t.duration / f),
            c = o === "up" || o === "down" ? "top" : "left",
            h = o === "up" || o === "left",
            p = {}, d = {}, v = {}, m, g = r.queue(),
            y = g.length;
        e.effects.save(r, i), r.show(), e.effects.createWrapper(r), p[c] = (h ? "-=" : "+=") + u, d[c] = (h ? "+=" : "-=") + u * 2, v[c] = (h ? "-=" : "+=") + u * 2, r.animate(p, l, t.easing);
        for (m = 1; m < a; m++) r.animate(d, l, t.easing).animate(v, l, t.easing);
        r.animate(d, l, t.easing).animate(p, l / 2, t.easing).queue(function () {
            s === "hide" && r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n()
        }), y > 1 && g.splice.apply(g, [1, 0].concat(g.splice(y, f + 1))), r.dequeue()
    }
})(jQuery);
(function (e, t) {
    e.effects.effect.slide = function (t, n) {
        var r = e(this),
            i = ["position", "top", "bottom", "left", "right", "width", "height"],
            s = e.effects.setMode(r, t.mode || "show"),
            o = s === "show",
            u = t.direction || "left",
            a = u === "up" || u === "down" ? "top" : "left",
            f = u === "up" || u === "left",
            l, c = {};
        e.effects.save(r, i), r.show(), l = t.distance || r[a === "top" ? "outerHeight" : "outerWidth"](!0), e.effects.createWrapper(r).css({
            overflow: "hidden"
        }), o && r.css(a, f ? isNaN(l) ? "-" + l : -l : l), c[a] = (o ? f ? "+=" : "-=" : f ? "-=" : "+=") + l, r.animate(c, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function () {
                s === "hide" && r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n()
            }
        })
    }
})(jQuery);
(function (e, t) {
    e.effects.effect.transfer = function (t, n) {
        var r = e(this),
            i = e(t.to),
            s = i.css("position") === "fixed",
            o = e("body"),
            u = s ? o.scrollTop() : 0,
            a = s ? o.scrollLeft() : 0,
            f = i.offset(),
            l = {
                top: f.top - u,
                left: f.left - a,
                height: i.innerHeight(),
                width: i.innerWidth()
            }, c = r.offset(),
            h = e('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(t.className).css({
                top: c.top - u,
                left: c.left - a,
                height: r.innerHeight(),
                width: r.innerWidth(),
                position: s ? "fixed" : "absolute"
            }).animate(l, t.duration, t.easing, function () {
                h.remove(), n()
            })
    }
})(jQuery);
(function (e, t) {
    var n = !1;
    e.widget("ui.menu", {
        version: "1.9.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function () {
            this.activeMenu = this.element, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !! this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }).bind("click" + this.eventNamespace, e.proxy(function (e) {
                this.options.disabled && e.preventDefault()
            }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                "mousedown .ui-menu-item > a": function (e) {
                    e.preventDefault()
                },
                "click .ui-state-disabled > a": function (e) {
                    e.preventDefault()
                },
                "click .ui-menu-item:has(a)": function (t) {
                    var r = e(t.target).closest(".ui-menu-item");
                    !n && r.not(".ui-state-disabled").length && (n = !0, this.select(t), r.has(".ui-menu").length ? this.expand(t) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && this.active.parents(".ui-menu").length === 1 && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function (t) {
                    var n = e(t.currentTarget);
                    n.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(t, n)
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function (e, t) {
                    var n = this.active || this.element.children(".ui-menu-item").eq(0);
                    t || this.focus(e, n)
                },
                blur: function (t) {
                    this._delay(function () {
                        e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
                    })
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function (t) {
                    e(t.target).closest(".ui-menu").length || this.collapseAll(t), n = !1
                }
            })
        },
        _destroy: function () {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
                var t = e(this);
                t.data("ui-menu-submenu-carat") && t.remove()
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function (t) {
            function n(e) {
                return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }
            var r, i, s, o, u, a = !0;
            switch (t.keyCode) {
            case e.ui.keyCode.PAGE_UP:
                this.previousPage(t);
                break;
            case e.ui.keyCode.PAGE_DOWN:
                this.nextPage(t);
                break;
            case e.ui.keyCode.HOME:
                this._move("first", "first", t);
                break;
            case e.ui.keyCode.END:
                this._move("last", "last", t);
                break;
            case e.ui.keyCode.UP:
                this.previous(t);
                break;
            case e.ui.keyCode.DOWN:
                this.next(t);
                break;
            case e.ui.keyCode.LEFT:
                this.collapse(t);
                break;
            case e.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                break;
            case e.ui.keyCode.ENTER:
            case e.ui.keyCode.SPACE:
                this._activate(t);
                break;
            case e.ui.keyCode.ESCAPE:
                this.collapse(t);
                break;
            default:
                a = !1, i = this.previousFilter || "", s = String.fromCharCode(t.keyCode), o = !1, clearTimeout(this.filterTimer), s === i ? o = !0 : s = i + s, u = new RegExp("^" + n(s), "i"), r = this.activeMenu.children(".ui-menu-item").filter(function () {
                    return u.test(e(this).children("a").text())
                }), r = o && r.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : r, r.length || (s = String.fromCharCode(t.keyCode), u = new RegExp("^" + n(s), "i"), r = this.activeMenu.children(".ui-menu-item").filter(function () {
                    return u.test(e(this).children("a").text())
                })), r.length ? (this.focus(t, r), r.length > 1 ? (this.previousFilter = s, this.filterTimer = this._delay(function () {
                    delete this.previousFilter
                }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
            }
            a && t.preventDefault()
        },
        _activate: function (e) {
            this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(e) : this.select(e))
        },
        refresh: function () {
            var t, n = this.options.icons.submenu,
                r = this.element.find(this.options.menus + ":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                });
            t = r.add(this.element), t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                tabIndex: -1,
                role: this._itemRole()
            }), t.children(":not(.ui-menu-item)").each(function () {
                var t = e(this);
                /[^\-—–\s]/.test(t.text()) || t.addClass("ui-widget-content ui-menu-divider")
            }), t.children(".ui-state-disabled").attr("aria-disabled", "true"), r.each(function () {
                var t = e(this),
                    r = t.prev("a"),
                    i = e("<span>").addClass("ui-menu-icon ui-icon " + n).data("ui-menu-submenu-carat", !0);
                r.attr("aria-haspopup", "true").prepend(i), t.attr("aria-labelledby", r.attr("id"))
            }), this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function () {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        focus: function (e, t) {
            var n, r;
            this.blur(e, e && e.type === "focus"), this._scrollIntoView(t), this.active = t.first(), r = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", r.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), e && e.type === "keydown" ? this._close() : this.timer = this._delay(function () {
                this._close()
            }, this.delay), n = t.children(".ui-menu"), n.length && /^mouse/.test(e.type) && this._startOpening(n), this.activeMenu = t.parent(), this._trigger("focus", e, {
                item: t
            })
        },
        _scrollIntoView: function (t) {
            var n, r, i, s, o, u;
            this._hasScroll() && (n = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, r = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, i = t.offset().top - this.activeMenu.offset().top - n - r, s = this.activeMenu.scrollTop(), o = this.activeMenu.height(), u = t.height(), i < 0 ? this.activeMenu.scrollTop(s + i) : i + u > o && this.activeMenu.scrollTop(s + i - o + u))
        },
        blur: function (e, t) {
            t || clearTimeout(this.timer);
            if (!this.active) return;
            this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", e, {
                item: this.active
            })
        },
        _startOpening: function (e) {
            clearTimeout(this.timer);
            if (e.attr("aria-hidden") !== "true") return;
            this.timer = this._delay(function () {
                this._close(), this._open(e)
            }, this.delay)
        },
        _open: function (t) {
            var n = e.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(n)
        },
        collapseAll: function (t, n) {
            clearTimeout(this.timer), this.timer = this._delay(function () {
                var r = n ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
                r.length || (r = this.element), this._close(r), this.blur(t), this.activeMenu = r
            }, this.delay)
        },
        _close: function (e) {
            e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
        },
        collapse: function (e) {
            var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            t && t.length && (this._close(), this.focus(e, t))
        },
        expand: function (e) {
            var t = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            t && t.length && (this._open(t.parent()), this._delay(function () {
                this.focus(e, t)
            }))
        },
        next: function (e) {
            this._move("next", "first", e)
        },
        previous: function (e) {
            this._move("prev", "last", e)
        },
        isFirstItem: function () {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function () {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function (e, t, n) {
            var r;
            this.active && (e === "first" || e === "last" ? r = this.active[e === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : r = this.active[e + "All"](".ui-menu-item").eq(0));
            if (!r || !r.length || !this.active) r = this.activeMenu.children(".ui-menu-item")[t]();
            this.focus(n, r)
        },
        nextPage: function (t) {
            var n, r, i;
            if (!this.active) {
                this.next(t);
                return
            }
            if (this.isLastItem()) return;
            this._hasScroll() ? (r = this.active.offset().top, i = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
                return n = e(this), n.offset().top - r - i < 0
            }), this.focus(t, n)) : this.focus(t, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())
        },
        previousPage: function (t) {
            var n, r, i;
            if (!this.active) {
                this.next(t);
                return
            }
            if (this.isFirstItem()) return;
            this._hasScroll() ? (r = this.active.offset().top, i = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
                return n = e(this), n.offset().top - r + i > 0
            }), this.focus(t, n)) : this.focus(t, this.activeMenu.children(".ui-menu-item").first())
        },
        _hasScroll: function () {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function (t) {
            this.active = this.active || e(t.target).closest(".ui-menu-item");
            var n = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, n)
        }
    })
})(jQuery);
(function (e, t) {
    e.widget("ui.progressbar", {
        version: "1.9.1",
        options: {
            value: 0,
            max: 100
        },
        min: 0,
        _create: function () {
            this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._value()
            }), this.valueDiv = e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this.oldValue = this._value(), this._refreshValue()
        },
        _destroy: function () {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
        },
        value: function (e) {
            return e === t ? this._value() : (this._setOption("value", e), this)
        },
        _setOption: function (e, t) {
            e === "value" && (this.options.value = t, this._refreshValue(), this._value() === this.options.max && this._trigger("complete")), this._super(e, t)
        },
        _value: function () {
            var e = this.options.value;
            return typeof e != "number" && (e = 0), Math.min(this.options.max, Math.max(this.min, e))
        },
        _percentage: function () {
            return 100 * this._value() / this.options.max
        },
        _refreshValue: function () {
            var e = this.value(),
                t = this._percentage();
            this.oldValue !== e && (this.oldValue = e, this._trigger("change")), this.valueDiv.toggle(e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(t.toFixed(0) + "%"), this.element.attr("aria-valuenow", e)
        }
    })
})(jQuery);
(function (e, t) {
    e.widget("ui.resizable", e.ui.mouse, {
        version: "1.9.1",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 1e3
        },
        _create: function () {
            var t = this,
                n = this.options;
            this.element.addClass("ui-resizable"), e.extend(this, {
                _aspectRatio: !! n.aspectRatio,
                aspectRatio: n.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: n.helper || n.ghost || n.animate ? n.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(e('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("resizable", this.element.data("resizable")), this.elementIsWrapper = !0, this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }), this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css({
                margin: this.originalElement.css("margin")
            }), this._proportionallyResize()), this.handles = n.handles || (e(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se");
            if (this.handles.constructor == String) {
                this.handles == "all" && (this.handles = "n,e,s,w,se,sw,ne,nw");
                var r = this.handles.split(",");
                this.handles = {};
                for (var i = 0; i < r.length; i++) {
                    var s = e.trim(r[i]),
                        o = "ui-resizable-" + s,
                        u = e('<div class="ui-resizable-handle ' + o + '"></div>');
                    u.css({
                        zIndex: n.zIndex
                    }), "se" == s && u.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(u)
                }
            }
            this._renderAxis = function (t) {
                t = t || this.element;
                for (var n in this.handles) {
                    this.handles[n].constructor == String && (this.handles[n] = e(this.handles[n], this.element).show());
                    if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                        var r = e(this.handles[n], this.element),
                            i = 0;
                        i = /sw|ne|nw|se|n|s/.test(n) ? r.outerHeight() : r.outerWidth();
                        var s = ["padding", /ne|nw|n/.test(n) ? "Top" : /se|sw|s/.test(n) ? "Bottom" : /^e$/.test(n) ? "Right" : "Left"].join("");
                        t.css(s, i), this._proportionallyResize()
                    }
                    if (!e(this.handles[n]).length) continue
                }
            }, this._renderAxis(this.element), this._handles = e(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function () {
                if (!t.resizing) {
                    if (this.className) var e = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                    t.axis = e && e[1] ? e[1] : "se"
                }
            }), n.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
                if (n.disabled) return;
                e(this).removeClass("ui-resizable-autohide"), t._handles.show()
            }).mouseleave(function () {
                if (n.disabled) return;
                t.resizing || (e(this).addClass("ui-resizable-autohide"), t._handles.hide())
            })), this._mouseInit()
        },
        _destroy: function () {
            this._mouseDestroy();
            var t = function (t) {
                e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            if (this.elementIsWrapper) {
                t(this.element);
                var n = this.element;
                this.originalElement.css({
                    position: n.css("position"),
                    width: n.outerWidth(),
                    height: n.outerHeight(),
                    top: n.css("top"),
                    left: n.css("left")
                }).insertAfter(n), n.remove()
            }
            return this.originalElement.css("resize", this.originalResizeStyle), t(this.originalElement), this
        },
        _mouseCapture: function (t) {
            var n = !1;
            for (var r in this.handles) e(this.handles[r])[0] == t.target && (n = !0);
            return !this.options.disabled && n
        },
        _mouseStart: function (t) {
            var r = this.options,
                i = this.element.position(),
                s = this.element;
            this.resizing = !0, this.documentScroll = {
                top: e(document).scrollTop(),
                left: e(document).scrollLeft()
            }, (s.is(".ui-draggable") || /absolute/.test(s.css("position"))) && s.css({
                position: "absolute",
                top: i.top,
                left: i.left
            }), this._renderProxy();
            var o = n(this.helper.css("left")),
                u = n(this.helper.css("top"));
            r.containment && (o += e(r.containment).scrollLeft() || 0, u += e(r.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: o,
                top: u
            }, this.size = this._helper ? {
                width: s.outerWidth(),
                height: s.outerHeight()
            } : {
                width: s.width(),
                height: s.height()
            }, this.originalSize = this._helper ? {
                width: s.outerWidth(),
                height: s.outerHeight()
            } : {
                width: s.width(),
                height: s.height()
            }, this.originalPosition = {
                left: o,
                top: u
            }, this.sizeDiff = {
                width: s.outerWidth() - s.width(),
                height: s.outerHeight() - s.height()
            }, this.originalMousePosition = {
                left: t.pageX,
                top: t.pageY
            }, this.aspectRatio = typeof r.aspectRatio == "number" ? r.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
            var a = e(".ui-resizable-" + this.axis).css("cursor");
            return e("body").css("cursor", a == "auto" ? this.axis + "-resize" : a), s.addClass("ui-resizable-resizing"), this._propagate("start", t), !0
        },
        _mouseDrag: function (e) {
            var t = this.helper,
                n = this.options,
                r = {}, i = this,
                s = this.originalMousePosition,
                o = this.axis,
                u = e.pageX - s.left || 0,
                a = e.pageY - s.top || 0,
                f = this._change[o];
            if (!f) return !1;
            var l = f.apply(this, [e, u, a]);
            this._updateVirtualBoundaries(e.shiftKey);
            if (this._aspectRatio || e.shiftKey) l = this._updateRatio(l, e);
            return l = this._respectSize(l, e), this._propagate("resize", e), t.css({
                top: this.position.top + "px",
                left: this.position.left + "px",
                width: this.size.width + "px",
                height: this.size.height + "px"
            }), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), this._updateCache(l), this._trigger("resize", e, this.ui()), !1
        },
        _mouseStop: function (t) {
            this.resizing = !1;
            var n = this.options,
                r = this;
            if (this._helper) {
                var i = this._proportionallyResizeElements,
                    s = i.length && /textarea/i.test(i[0].nodeName),
                    o = s && e.ui.hasScroll(i[0], "left") ? 0 : r.sizeDiff.height,
                    u = s ? 0 : r.sizeDiff.width,
                    a = {
                        width: r.helper.width() - u,
                        height: r.helper.height() - o
                    }, f = parseInt(r.element.css("left"), 10) + (r.position.left - r.originalPosition.left) || null,
                    l = parseInt(r.element.css("top"), 10) + (r.position.top - r.originalPosition.top) || null;
                n.animate || this.element.css(e.extend(a, {
                    top: l,
                    left: f
                })), r.helper.height(r.size.height), r.helper.width(r.size.width), this._helper && !n.animate && this._proportionallyResize()
            }
            return e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
        },
        _updateVirtualBoundaries: function (e) {
            var t = this.options,
                n, i, s, o, u;
            u = {
                minWidth: r(t.minWidth) ? t.minWidth : 0,
                maxWidth: r(t.maxWidth) ? t.maxWidth : Infinity,
                minHeight: r(t.minHeight) ? t.minHeight : 0,
                maxHeight: r(t.maxHeight) ? t.maxHeight : Infinity
            };
            if (this._aspectRatio || e) n = u.minHeight * this.aspectRatio, s = u.minWidth / this.aspectRatio, i = u.maxHeight * this.aspectRatio, o = u.maxWidth / this.aspectRatio, n > u.minWidth && (u.minWidth = n), s > u.minHeight && (u.minHeight = s), i < u.maxWidth && (u.maxWidth = i), o < u.maxHeight && (u.maxHeight = o);
            this._vBoundaries = u
        },
        _updateCache: function (e) {
            var t = this.options;
            this.offset = this.helper.offset(), r(e.left) && (this.position.left = e.left), r(e.top) && (this.position.top = e.top), r(e.height) && (this.size.height = e.height), r(e.width) && (this.size.width = e.width)
        },
        _updateRatio: function (e, t) {
            var n = this.options,
                i = this.position,
                s = this.size,
                o = this.axis;
            return r(e.height) ? e.width = e.height * this.aspectRatio : r(e.width) && (e.height = e.width / this.aspectRatio), o == "sw" && (e.left = i.left + (s.width - e.width), e.top = null), o == "nw" && (e.top = i.top + (s.height - e.height), e.left = i.left + (s.width - e.width)), e
        },
        _respectSize: function (e, t) {
            var n = this.helper,
                i = this._vBoundaries,
                s = this._aspectRatio || t.shiftKey,
                o = this.axis,
                u = r(e.width) && i.maxWidth && i.maxWidth < e.width,
                a = r(e.height) && i.maxHeight && i.maxHeight < e.height,
                f = r(e.width) && i.minWidth && i.minWidth > e.width,
                l = r(e.height) && i.minHeight && i.minHeight > e.height;
            f && (e.width = i.minWidth), l && (e.height = i.minHeight), u && (e.width = i.maxWidth), a && (e.height = i.maxHeight);
            var c = this.originalPosition.left + this.originalSize.width,
                h = this.position.top + this.size.height,
                p = /sw|nw|w/.test(o),
                d = /nw|ne|n/.test(o);
            f && p && (e.left = c - i.minWidth), u && p && (e.left = c - i.maxWidth), l && d && (e.top = h - i.minHeight), a && d && (e.top = h - i.maxHeight);
            var v = !e.width && !e.height;
            return v && !e.left && e.top ? e.top = null : v && !e.top && e.left && (e.left = null), e
        },
        _proportionallyResize: function () {
            var t = this.options;
            if (!this._proportionallyResizeElements.length) return;
            var n = this.helper || this.element;
            for (var r = 0; r < this._proportionallyResizeElements.length; r++) {
                var i = this._proportionallyResizeElements[r];
                if (!this.borderDif) {
                    var s = [i.css("borderTopWidth"), i.css("borderRightWidth"), i.css("borderBottomWidth"), i.css("borderLeftWidth")],
                        o = [i.css("paddingTop"), i.css("paddingRight"), i.css("paddingBottom"), i.css("paddingLeft")];
                    this.borderDif = e.map(s, function (e, t) {
                        var n = parseInt(e, 10) || 0,
                            r = parseInt(o[t], 10) || 0;
                        return n + r
                    })
                }
                i.css({
                    height: n.height() - this.borderDif[0] - this.borderDif[2] || 0,
                    width: n.width() - this.borderDif[1] - this.borderDif[3] || 0
                })
            }
        },
        _renderProxy: function () {
            var t = this.element,
                n = this.options;
            this.elementOffset = t.offset();
            if (this._helper) {
                this.helper = this.helper || e('<div style="overflow:hidden;"></div>');
                var r = e.ui.ie6 ? 1 : 0,
                    i = e.ui.ie6 ? 2 : -1;
                this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() + i,
                    height: this.element.outerHeight() + i,
                    position: "absolute",
                    left: this.elementOffset.left - r + "px",
                    top: this.elementOffset.top - r + "px",
                    zIndex: ++n.zIndex
                }), this.helper.appendTo("body").disableSelection()
            } else this.helper = this.element
        },
        _change: {
            e: function (e, t, n) {
                return {
                    width: this.originalSize.width + t
                }
            },
            w: function (e, t, n) {
                var r = this.options,
                    i = this.originalSize,
                    s = this.originalPosition;
                return {
                    left: s.left + t,
                    width: i.width - t
                }
            },
            n: function (e, t, n) {
                var r = this.options,
                    i = this.originalSize,
                    s = this.originalPosition;
                return {
                    top: s.top + n,
                    height: i.height - n
                }
            },
            s: function (e, t, n) {
                return {
                    height: this.originalSize.height + n
                }
            },
            se: function (t, n, r) {
                return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, n, r]))
            },
            sw: function (t, n, r) {
                return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, n, r]))
            },
            ne: function (t, n, r) {
                return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, n, r]))
            },
            nw: function (t, n, r) {
                return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, n, r]))
            }
        },
        _propagate: function (t, n) {
            e.ui.plugin.call(this, t, [n, this.ui()]), t != "resize" && this._trigger(t, n, this.ui())
        },
        plugins: {},
        ui: function () {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), e.ui.plugin.add("resizable", "alsoResize", {
        start: function (t, n) {
            var r = e(this).data("resizable"),
                i = r.options,
                s = function (t) {
                    e(t).each(function () {
                        var t = e(this);
                        t.data("resizable-alsoresize", {
                            width: parseInt(t.width(), 10),
                            height: parseInt(t.height(), 10),
                            left: parseInt(t.css("left"), 10),
                            top: parseInt(t.css("top"), 10)
                        })
                    })
                };
            typeof i.alsoResize == "object" && !i.alsoResize.parentNode ? i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], s(i.alsoResize)) : e.each(i.alsoResize, function (e) {
                s(e)
            }) : s(i.alsoResize)
        },
        resize: function (t, n) {
            var r = e(this).data("resizable"),
                i = r.options,
                s = r.originalSize,
                o = r.originalPosition,
                u = {
                    height: r.size.height - s.height || 0,
                    width: r.size.width - s.width || 0,
                    top: r.position.top - o.top || 0,
                    left: r.position.left - o.left || 0
                }, a = function (t, r) {
                    e(t).each(function () {
                        var t = e(this),
                            i = e(this).data("resizable-alsoresize"),
                            s = {}, o = r && r.length ? r : t.parents(n.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        e.each(o, function (e, t) {
                            var n = (i[t] || 0) + (u[t] || 0);
                            n && n >= 0 && (s[t] = n || null)
                        }), t.css(s)
                    })
                };
            typeof i.alsoResize == "object" && !i.alsoResize.nodeType ? e.each(i.alsoResize, function (e, t) {
                a(e, t)
            }) : a(i.alsoResize)
        },
        stop: function (t, n) {
            e(this).removeData("resizable-alsoresize")
        }
    }), e.ui.plugin.add("resizable", "animate", {
        stop: function (t, n) {
            var r = e(this).data("resizable"),
                i = r.options,
                s = r._proportionallyResizeElements,
                o = s.length && /textarea/i.test(s[0].nodeName),
                u = o && e.ui.hasScroll(s[0], "left") ? 0 : r.sizeDiff.height,
                a = o ? 0 : r.sizeDiff.width,
                f = {
                    width: r.size.width - a,
                    height: r.size.height - u
                }, l = parseInt(r.element.css("left"), 10) + (r.position.left - r.originalPosition.left) || null,
                c = parseInt(r.element.css("top"), 10) + (r.position.top - r.originalPosition.top) || null;
            r.element.animate(e.extend(f, c && l ? {
                top: c,
                left: l
            } : {}), {
                duration: i.animateDuration,
                easing: i.animateEasing,
                step: function () {
                    var n = {
                        width: parseInt(r.element.css("width"), 10),
                        height: parseInt(r.element.css("height"), 10),
                        top: parseInt(r.element.css("top"), 10),
                        left: parseInt(r.element.css("left"), 10)
                    };
                    s && s.length && e(s[0]).css({
                        width: n.width,
                        height: n.height
                    }), r._updateCache(n), r._propagate("resize", t)
                }
            })
        }
    }), e.ui.plugin.add("resizable", "containment", {
        start: function (t, r) {
            var i = e(this).data("resizable"),
                s = i.options,
                o = i.element,
                u = s.containment,
                a = u instanceof e ? u.get(0) : /parent/.test(u) ? o.parent().get(0) : u;
            if (!a) return;
            i.containerElement = e(a);
            if (/document/.test(u) || u == document) i.containerOffset = {
                left: 0,
                top: 0
            }, i.containerPosition = {
                left: 0,
                top: 0
            }, i.parentData = {
                element: e(document),
                left: 0,
                top: 0,
                width: e(document).width(),
                height: e(document).height() || document.body.parentNode.scrollHeight
            };
            else {
                var f = e(a),
                    l = [];
                e(["Top", "Right", "Left", "Bottom"]).each(function (e, t) {
                    l[e] = n(f.css("padding" + t))
                }), i.containerOffset = f.offset(), i.containerPosition = f.position(), i.containerSize = {
                    height: f.innerHeight() - l[3],
                    width: f.innerWidth() - l[1]
                };
                var c = i.containerOffset,
                    h = i.containerSize.height,
                    p = i.containerSize.width,
                    d = e.ui.hasScroll(a, "left") ? a.scrollWidth : p,
                    v = e.ui.hasScroll(a) ? a.scrollHeight : h;
                i.parentData = {
                    element: a,
                    left: c.left,
                    top: c.top,
                    width: d,
                    height: v
                }
            }
        },
        resize: function (t, n) {
            var r = e(this).data("resizable"),
                i = r.options,
                s = r.containerSize,
                o = r.containerOffset,
                u = r.size,
                a = r.position,
                f = r._aspectRatio || t.shiftKey,
                l = {
                    top: 0,
                    left: 0
                }, c = r.containerElement;
            c[0] != document && /static/.test(c.css("position")) && (l = o), a.left < (r._helper ? o.left : 0) && (r.size.width = r.size.width + (r._helper ? r.position.left - o.left : r.position.left - l.left), f && (r.size.height = r.size.width / r.aspectRatio), r.position.left = i.helper ? o.left : 0), a.top < (r._helper ? o.top : 0) && (r.size.height = r.size.height + (r._helper ? r.position.top - o.top : r.position.top), f && (r.size.width = r.size.height * r.aspectRatio), r.position.top = r._helper ? o.top : 0), r.offset.left = r.parentData.left + r.position.left, r.offset.top = r.parentData.top + r.position.top;
            var h = Math.abs((r._helper ? r.offset.left - l.left : r.offset.left - l.left) + r.sizeDiff.width),
                p = Math.abs((r._helper ? r.offset.top - l.top : r.offset.top - o.top) + r.sizeDiff.height),
                d = r.containerElement.get(0) == r.element.parent().get(0),
                v = /relative|absolute/.test(r.containerElement.css("position"));
            d && v && (h -= r.parentData.left), h + r.size.width >= r.parentData.width && (r.size.width = r.parentData.width - h, f && (r.size.height = r.size.width / r.aspectRatio)), p + r.size.height >= r.parentData.height && (r.size.height = r.parentData.height - p, f && (r.size.width = r.size.height * r.aspectRatio))
        },
        stop: function (t, n) {
            var r = e(this).data("resizable"),
                i = r.options,
                s = r.position,
                o = r.containerOffset,
                u = r.containerPosition,
                a = r.containerElement,
                f = e(r.helper),
                l = f.offset(),
                c = f.outerWidth() - r.sizeDiff.width,
                h = f.outerHeight() - r.sizeDiff.height;
            r._helper && !i.animate && /relative/.test(a.css("position")) && e(this).css({
                left: l.left - u.left - o.left,
                width: c,
                height: h
            }), r._helper && !i.animate && /static/.test(a.css("position")) && e(this).css({
                left: l.left - u.left - o.left,
                width: c,
                height: h
            })
        }
    }), e.ui.plugin.add("resizable", "ghost", {
        start: function (t, n) {
            var r = e(this).data("resizable"),
                i = r.options,
                s = r.size;
            r.ghost = r.originalElement.clone(), r.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: s.height,
                width: s.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass(typeof i.ghost == "string" ? i.ghost : ""), r.ghost.appendTo(r.helper)
        },
        resize: function (t, n) {
            var r = e(this).data("resizable"),
                i = r.options;
            r.ghost && r.ghost.css({
                position: "relative",
                height: r.size.height,
                width: r.size.width
            })
        },
        stop: function (t, n) {
            var r = e(this).data("resizable"),
                i = r.options;
            r.ghost && r.helper && r.helper.get(0).removeChild(r.ghost.get(0))
        }
    }), e.ui.plugin.add("resizable", "grid", {
        resize: function (t, n) {
            var r = e(this).data("resizable"),
                i = r.options,
                s = r.size,
                o = r.originalSize,
                u = r.originalPosition,
                a = r.axis,
                f = i._aspectRatio || t.shiftKey;
            i.grid = typeof i.grid == "number" ? [i.grid, i.grid] : i.grid;
            var l = Math.round((s.width - o.width) / (i.grid[0] || 1)) * (i.grid[0] || 1),
                c = Math.round((s.height - o.height) / (i.grid[1] || 1)) * (i.grid[1] || 1);
            /^(se|s|e)$/.test(a) ? (r.size.width = o.width + l, r.size.height = o.height + c) : /^(ne)$/.test(a) ? (r.size.width = o.width + l, r.size.height = o.height + c, r.position.top = u.top - c) : /^(sw)$/.test(a) ? (r.size.width = o.width + l, r.size.height = o.height + c, r.position.left = u.left - l) : (r.size.width = o.width + l, r.size.height = o.height + c, r.position.top = u.top - c, r.position.left = u.left - l)
        }
    });
    var n = function (e) {
        return parseInt(e, 10) || 0
    }, r = function (e) {
            return !isNaN(parseInt(e, 10))
        }
})(jQuery);
(function (e, t) {
    e.widget("ui.selectable", e.ui.mouse, {
        version: "1.9.1",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch"
        },
        _create: function () {
            var t = this;
            this.element.addClass("ui-selectable"), this.dragged = !1;
            var n;
            this.refresh = function () {
                n = e(t.options.filter, t.element[0]), n.addClass("ui-selectee"), n.each(function () {
                    var t = e(this),
                        n = t.offset();
                    e.data(this, "selectable-item", {
                        element: this,
                        $element: t,
                        left: n.left,
                        top: n.top,
                        right: n.left + t.outerWidth(),
                        bottom: n.top + t.outerHeight(),
                        startselected: !1,
                        selected: t.hasClass("ui-selected"),
                        selecting: t.hasClass("ui-selecting"),
                        unselecting: t.hasClass("ui-unselecting")
                    })
                })
            }, this.refresh(), this.selectees = n.addClass("ui-selectee"), this._mouseInit(), this.helper = e("<div class='ui-selectable-helper'></div>")
        },
        _destroy: function () {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
        },
        _mouseStart: function (t) {
            var n = this;
            this.opos = [t.pageX, t.pageY];
            if (this.options.disabled) return;
            var r = this.options;
            this.selectees = e(r.filter, this.element[0]), this._trigger("start", t), e(r.appendTo).append(this.helper), this.helper.css({
                left: t.clientX,
                top: t.clientY,
                width: 0,
                height: 0
            }), r.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
                var r = e.data(this, "selectable-item");
                r.startselected = !0, !t.metaKey && !t.ctrlKey && (r.$element.removeClass("ui-selected"), r.selected = !1, r.$element.addClass("ui-unselecting"), r.unselecting = !0, n._trigger("unselecting", t, {
                    unselecting: r.element
                }))
            }), e(t.target).parents().andSelf().each(function () {
                var r = e.data(this, "selectable-item");
                if (r) {
                    var i = !t.metaKey && !t.ctrlKey || !r.$element.hasClass("ui-selected");
                    return r.$element.removeClass(i ? "ui-unselecting" : "ui-selected").addClass(i ? "ui-selecting" : "ui-unselecting"), r.unselecting = !i, r.selecting = i, r.selected = i, i ? n._trigger("selecting", t, {
                        selecting: r.element
                    }) : n._trigger("unselecting", t, {
                        unselecting: r.element
                    }), !1
                }
            })
        },
        _mouseDrag: function (t) {
            var n = this;
            this.dragged = !0;
            if (this.options.disabled) return;
            var r = this.options,
                i = this.opos[0],
                s = this.opos[1],
                o = t.pageX,
                u = t.pageY;
            if (i > o) {
                var a = o;
                o = i, i = a
            }
            if (s > u) {
                var a = u;
                u = s, s = a
            }
            return this.helper.css({
                left: i,
                top: s,
                width: o - i,
                height: u - s
            }), this.selectees.each(function () {
                var a = e.data(this, "selectable-item");
                if (!a || a.element == n.element[0]) return;
                var f = !1;
                r.tolerance == "touch" ? f = !(a.left > o || a.right < i || a.top > u || a.bottom < s) : r.tolerance == "fit" && (f = a.left > i && a.right < o && a.top > s && a.bottom < u), f ? (a.selected && (a.$element.removeClass("ui-selected"), a.selected = !1), a.unselecting && (a.$element.removeClass("ui-unselecting"), a.unselecting = !1), a.selecting || (a.$element.addClass("ui-selecting"), a.selecting = !0, n._trigger("selecting", t, {
                    selecting: a.element
                }))) : (a.selecting && ((t.metaKey || t.ctrlKey) && a.startselected ? (a.$element.removeClass("ui-selecting"), a.selecting = !1, a.$element.addClass("ui-selected"), a.selected = !0) : (a.$element.removeClass("ui-selecting"), a.selecting = !1, a.startselected && (a.$element.addClass("ui-unselecting"), a.unselecting = !0), n._trigger("unselecting", t, {
                    unselecting: a.element
                }))), a.selected && !t.metaKey && !t.ctrlKey && !a.startselected && (a.$element.removeClass("ui-selected"), a.selected = !1, a.$element.addClass("ui-unselecting"), a.unselecting = !0, n._trigger("unselecting", t, {
                    unselecting: a.element
                })))
            }), !1
        },
        _mouseStop: function (t) {
            var n = this;
            this.dragged = !1;
            var r = this.options;
            return e(".ui-unselecting", this.element[0]).each(function () {
                var r = e.data(this, "selectable-item");
                r.$element.removeClass("ui-unselecting"), r.unselecting = !1, r.startselected = !1, n._trigger("unselected", t, {
                    unselected: r.element
                })
            }), e(".ui-selecting", this.element[0]).each(function () {
                var r = e.data(this, "selectable-item");
                r.$element.removeClass("ui-selecting").addClass("ui-selected"), r.selecting = !1, r.selected = !0, r.startselected = !0, n._trigger("selected", t, {
                    selected: r.element
                })
            }), this._trigger("stop", t), this.helper.remove(), !1
        }
    })
})(jQuery);
(function (e, t) {
    var n = 5;
    e.widget("ui.slider", e.ui.mouse, {
        version: "1.9.1",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null
        },
        _create: function () {
            var t, r, i = this.options,
                s = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                o = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
                u = [];
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all" + (i.disabled ? " ui-slider-disabled ui-disabled" : "")), this.range = e([]), i.range && (i.range === !0 && (i.values || (i.values = [this._valueMin(), this._valueMin()]), i.values.length && i.values.length !== 2 && (i.values = [i.values[0], i.values[0]])), this.range = e("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + (i.range === "min" || i.range === "max" ? " ui-slider-range-" + i.range : ""))), r = i.values && i.values.length || 1;
            for (t = s.length; t < r; t++) u.push(o);
            this.handles = s.add(e(u.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function (e) {
                e.preventDefault()
            }).mouseenter(function () {
                i.disabled || e(this).addClass("ui-state-hover")
            }).mouseleave(function () {
                e(this).removeClass("ui-state-hover")
            }).focus(function () {
                i.disabled ? e(this).blur() : (e(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), e(this).addClass("ui-state-focus"))
            }).blur(function () {
                e(this).removeClass("ui-state-focus")
            }), this.handles.each(function (t) {
                e(this).data("ui-slider-handle-index", t)
            }), this._on(this.handles, {
                keydown: function (t) {
                    var r, i, s, o, u = e(t.target).data("ui-slider-handle-index");
                    switch (t.keyCode) {
                    case e.ui.keyCode.HOME:
                    case e.ui.keyCode.END:
                    case e.ui.keyCode.PAGE_UP:
                    case e.ui.keyCode.PAGE_DOWN:
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        t.preventDefault();
                        if (!this._keySliding) {
                            this._keySliding = !0, e(t.target).addClass("ui-state-active"), r = this._start(t, u);
                            if (r === !1) return
                        }
                    }
                    o = this.options.step, this.options.values && this.options.values.length ? i = s = this.values(u) : i = s = this.value();
                    switch (t.keyCode) {
                    case e.ui.keyCode.HOME:
                        s = this._valueMin();
                        break;
                    case e.ui.keyCode.END:
                        s = this._valueMax();
                        break;
                    case e.ui.keyCode.PAGE_UP:
                        s = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / n);
                        break;
                    case e.ui.keyCode.PAGE_DOWN:
                        s = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / n);
                        break;
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                        if (i === this._valueMax()) return;
                        s = this._trimAlignValue(i + o);
                        break;
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (i === this._valueMin()) return;
                        s = this._trimAlignValue(i - o)
                    }
                    this._slide(t, u, s)
                },
                keyup: function (t) {
                    var n = e(t.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(t, n), this._change(t, n), e(t.target).removeClass("ui-state-active"))
                }
            }), this._refreshValue(), this._animateOff = !1
        },
        _destroy: function () {
            this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
        },
        _mouseCapture: function (t) {
            var n, r, i, s, o, u, a, f, l = this,
                c = this.options;
            return c.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), n = {
                x: t.pageX,
                y: t.pageY
            }, r = this._normValueFromMouse(n), i = this._valueMax() - this._valueMin() + 1, this.handles.each(function (t) {
                var n = Math.abs(r - l.values(t));
                i > n && (i = n, s = e(this), o = t)
            }), c.range === !0 && this.values(1) === c.min && (o += 1, s = e(this.handles[o])), u = this._start(t, o), u === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, s.addClass("ui-state-active").focus(), a = s.offset(), f = !e(t.target).parents().andSelf().is(".ui-slider-handle"), this._clickOffset = f ? {
                left: 0,
                top: 0
            } : {
                left: t.pageX - a.left - s.width() / 2,
                top: t.pageY - a.top - s.height() / 2 - (parseInt(s.css("borderTopWidth"), 10) || 0) - (parseInt(s.css("borderBottomWidth"), 10) || 0) + (parseInt(s.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, r), this._animateOff = !0, !0))
        },
        _mouseStart: function () {
            return !0
        },
        _mouseDrag: function (e) {
            var t = {
                x: e.pageX,
                y: e.pageY
            }, n = this._normValueFromMouse(t);
            return this._slide(e, this._handleIndex, n), !1
        },
        _mouseStop: function (e) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function () {
            this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function (e) {
            var t, n, r, i, s;
            return this.orientation === "horizontal" ? (t = this.elementSize.width, n = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, n = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), r = n / t, r > 1 && (r = 1), r < 0 && (r = 0), this.orientation === "vertical" && (r = 1 - r), i = this._valueMax() - this._valueMin(), s = this._valueMin() + r * i, this._trimAlignValue(s)
        },
        _start: function (e, t) {
            var n = {
                handle: this.handles[t],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("start", e, n)
        },
        _slide: function (e, t, n) {
            var r, i, s;
            this.options.values && this.options.values.length ? (r = this.values(t ? 0 : 1), this.options.values.length === 2 && this.options.range === !0 && (t === 0 && n > r || t === 1 && n < r) && (n = r), n !== this.values(t) && (i = this.values(), i[t] = n, s = this._trigger("slide", e, {
                handle: this.handles[t],
                value: n,
                values: i
            }), r = this.values(t ? 0 : 1), s !== !1 && this.values(t, n, !0))) : n !== this.value() && (s = this._trigger("slide", e, {
                handle: this.handles[t],
                value: n
            }), s !== !1 && this.value(n))
        },
        _stop: function (e, t) {
            var n = {
                handle: this.handles[t],
                value: this.value()
            };
            this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("stop", e, n)
        },
        _change: function (e, t) {
            if (!this._keySliding && !this._mouseSliding) {
                var n = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("change", e, n)
            }
        },
        value: function (e) {
            if (arguments.length) {
                this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0);
                return
            }
            return this._value()
        },
        values: function (t, n) {
            var r, i, s;
            if (arguments.length > 1) {
                this.options.values[t] = this._trimAlignValue(n), this._refreshValue(), this._change(null, t);
                return
            }
            if (!arguments.length) return this._values();
            if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
            r = this.options.values, i = arguments[0];
            for (s = 0; s < r.length; s += 1) r[s] = this._trimAlignValue(i[s]), this._change(null, s);
            this._refreshValue()
        },
        _setOption: function (t, n) {
            var r, i = 0;
            e.isArray(this.options.values) && (i = this.options.values.length), e.Widget.prototype._setOption.apply(this, arguments);
            switch (t) {
            case "disabled":
                n ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.prop("disabled", !0), this.element.addClass("ui-disabled")) : (this.handles.prop("disabled", !1), this.element.removeClass("ui-disabled"));
                break;
            case "orientation":
                this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                break;
            case "value":
                this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                break;
            case "values":
                this._animateOff = !0, this._refreshValue();
                for (r = 0; r < i; r += 1) this._change(null, r);
                this._animateOff = !1;
                break;
            case "min":
            case "max":
                this._animateOff = !0, this._refreshValue(), this._animateOff = !1
            }
        },
        _value: function () {
            var e = this.options.value;
            return e = this._trimAlignValue(e), e
        },
        _values: function (e) {
            var t, n, r;
            if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t), t;
            n = this.options.values.slice();
            for (r = 0; r < n.length; r += 1) n[r] = this._trimAlignValue(n[r]);
            return n
        },
        _trimAlignValue: function (e) {
            if (e <= this._valueMin()) return this._valueMin();
            if (e >= this._valueMax()) return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1,
                n = (e - this._valueMin()) % t,
                r = e - n;
            return Math.abs(n) * 2 >= t && (r += n > 0 ? t : -t), parseFloat(r.toFixed(5))
        },
        _valueMin: function () {
            return this.options.min
        },
        _valueMax: function () {
            return this.options.max
        },
        _refreshValue: function () {
            var t, n, r, i, s, o = this.options.range,
                u = this.options,
                a = this,
                f = this._animateOff ? !1 : u.animate,
                l = {};
            this.options.values && this.options.values.length ? this.handles.each(function (r) {
                n = (a.values(r) - a._valueMin()) / (a._valueMax() - a._valueMin()) * 100, l[a.orientation === "horizontal" ? "left" : "bottom"] = n + "%", e(this).stop(1, 1)[f ? "animate" : "css"](l, u.animate), a.options.range === !0 && (a.orientation === "horizontal" ? (r === 0 && a.range.stop(1, 1)[f ? "animate" : "css"]({
                    left: n + "%"
                }, u.animate), r === 1 && a.range[f ? "animate" : "css"]({
                    width: n - t + "%"
                }, {
                    queue: !1,
                    duration: u.animate
                })) : (r === 0 && a.range.stop(1, 1)[f ? "animate" : "css"]({
                    bottom: n + "%"
                }, u.animate), r === 1 && a.range[f ? "animate" : "css"]({
                    height: n - t + "%"
                }, {
                    queue: !1,
                    duration: u.animate
                }))), t = n
            }) : (r = this.value(), i = this._valueMin(), s = this._valueMax(), n = s !== i ? (r - i) / (s - i) * 100 : 0, l[this.orientation === "horizontal" ? "left" : "bottom"] = n + "%", this.handle.stop(1, 1)[f ? "animate" : "css"](l, u.animate), o === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[f ? "animate" : "css"]({
                width: n + "%"
            }, u.animate), o === "max" && this.orientation === "horizontal" && this.range[f ? "animate" : "css"]({
                width: 100 - n + "%"
            }, {
                queue: !1,
                duration: u.animate
            }), o === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[f ? "animate" : "css"]({
                height: n + "%"
            }, u.animate), o === "max" && this.orientation === "vertical" && this.range[f ? "animate" : "css"]({
                height: 100 - n + "%"
            }, {
                queue: !1,
                duration: u.animate
            }))
        }
    })
})(jQuery);
(function (e, t) {
    e.widget("ui.sortable", e.ui.mouse, {
        version: "1.9.1",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3
        },
        _create: function () {
            var e = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? e.axis === "x" || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
        },
        _destroy: function () {
            this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
            for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function (t, n) {
            t === "disabled" ? (this.options[t] = n, this.widget().toggleClass("ui-sortable-disabled", !! n)) : e.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function (t, n) {
            var r = this;
            if (this.reverting) return !1;
            if (this.options.disabled || this.options.type == "static") return !1;
            this._refreshItems(t);
            var i = null,
                s = e(t.target).parents().each(function () {
                    if (e.data(this, r.widgetName + "-item") == r) return i = e(this), !1
                });
            e.data(t.target, r.widgetName + "-item") == r && (i = e(t.target));
            if (!i) return !1;
            if (this.options.handle && !n) {
                var o = !1;
                e(this.options.handle, i).find("*").andSelf().each(function () {
                    this == t.target && (o = !0)
                });
                if (!o) return !1
            }
            return this.currentItem = i, this._removeCurrentsFromItems(), !0
        },
        _mouseStart: function (t, n, r) {
            var i = this.options;
            this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), i.containment && this._setContainment(), i.cursor && (e("body").css("cursor") && (this._storedCursor = e("body").css("cursor")), e("body").css("cursor", i.cursor)), i.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", i.opacity)), i.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", i.zIndex)), this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions();
            if (!r)
                for (var s = this.containers.length - 1; s >= 0; s--) this.containers[s]._trigger("activate", t, this._uiHash(this));
            return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
        },
        _mouseDrag: function (t) {
            this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs);
            if (this.options.scroll) {
                var n = this.options,
                    r = !1;
                this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < n.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + n.scrollSpeed : t.pageY - this.overflowOffset.top < n.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - n.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < n.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + n.scrollSpeed : t.pageX - this.overflowOffset.left < n.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - n.scrollSpeed)) : (t.pageY - e(document).scrollTop() < n.scrollSensitivity ? r = e(document).scrollTop(e(document).scrollTop() - n.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < n.scrollSensitivity && (r = e(document).scrollTop(e(document).scrollTop() + n.scrollSpeed)), t.pageX - e(document).scrollLeft() < n.scrollSensitivity ? r = e(document).scrollLeft(e(document).scrollLeft() - n.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < n.scrollSensitivity && (r = e(document).scrollLeft(e(document).scrollLeft() + n.scrollSpeed))), r !== !1 && e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)
            }
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px";
            if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px";
            for (var i = this.items.length - 1; i >= 0; i--) {
                var s = this.items[i],
                    o = s.item[0],
                    u = this._intersectsWithPointer(s);
                if (!u) continue;
                if (s.instance !== this.currentContainer) continue;
                if (o != this.currentItem[0] && this.placeholder[u == 1 ? "next" : "prev"]()[0] != o && !e.contains(this.placeholder[0], o) && (this.options.type == "semi-dynamic" ? !e.contains(this.element[0], o) : !0)) {
                    this.direction = u == 1 ? "down" : "up";
                    if (this.options.tolerance != "pointer" && !this._intersectsWithSides(s)) break;
                    this._rearrange(t, s), this._trigger("change", t, this._uiHash());
                    break
                }
            }
            return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function (t, n) {
            if (!t) return;
            e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t);
            if (this.options.revert) {
                var r = this,
                    i = this.placeholder.offset();
                this.reverting = !0, e(this.helper).animate({
                    left: i.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                    top: i.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                }, parseInt(this.options.revert, 10) || 500, function () {
                    r._clear(t)
                })
            } else this._clear(t, n);
            return !1
        },
        cancel: function () {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), this.options.helper == "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.options.helper != "original" && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function (t) {
            var n = this._getItemsAsjQuery(t && t.connected),
                r = [];
            return t = t || {}, e(n).each(function () {
                var n = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[-=_](.+)/);
                n && r.push((t.key || n[1] + "[]") + "=" + (t.key && t.expression ? n[1] : n[2]))
            }), !r.length && t.key && r.push(t.key + "="), r.join("&")
        },
        toArray: function (t) {
            var n = this._getItemsAsjQuery(t && t.connected),
                r = [];
            return t = t || {}, n.each(function () {
                r.push(e(t.item || this).attr(t.attribute || "id") || "")
            }), r
        },
        _intersectsWith: function (e) {
            var t = this.positionAbs.left,
                n = t + this.helperProportions.width,
                r = this.positionAbs.top,
                i = r + this.helperProportions.height,
                s = e.left,
                o = s + e.width,
                u = e.top,
                a = u + e.height,
                f = this.offset.click.top,
                l = this.offset.click.left,
                c = r + f > u && r + f < a && t + l > s && t + l < o;
            return this.options.tolerance == "pointer" || this.options.forcePointerForContainers || this.options.tolerance != "pointer" && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? c : s < t + this.helperProportions.width / 2 && n - this.helperProportions.width / 2 < o && u < r + this.helperProportions.height / 2 && i - this.helperProportions.height / 2 < a
        },
        _intersectsWithPointer: function (t) {
            var n = this.options.axis === "x" || e.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                r = this.options.axis === "y" || e.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                i = n && r,
                s = this._getDragVerticalDirection(),
                o = this._getDragHorizontalDirection();
            return i ? this.floating ? o && o == "right" || s == "down" ? 2 : 1 : s && (s == "down" ? 2 : 1) : !1
        },
        _intersectsWithSides: function (t) {
            var n = e.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                r = e.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                i = this._getDragVerticalDirection(),
                s = this._getDragHorizontalDirection();
            return this.floating && s ? s == "right" && r || s == "left" && !r : i && (i == "down" && n || i == "up" && !n)
        },
        _getDragVerticalDirection: function () {
            var e = this.positionAbs.top - this.lastPositionAbs.top;
            return e != 0 && (e > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function () {
            var e = this.positionAbs.left - this.lastPositionAbs.left;
            return e != 0 && (e > 0 ? "right" : "left")
        },
        refresh: function (e) {
            return this._refreshItems(e), this.refreshPositions(), this
        },
        _connectWith: function () {
            var e = this.options;
            return e.connectWith.constructor == String ? [e.connectWith] : e.connectWith
        },
        _getItemsAsjQuery: function (t) {
            var n = [],
                r = [],
                i = this._connectWith();
            if (i && t)
                for (var s = i.length - 1; s >= 0; s--) {
                    var o = e(i[s]);
                    for (var u = o.length - 1; u >= 0; u--) {
                        var a = e.data(o[u], this.widgetName);
                        a && a != this && !a.options.disabled && r.push([e.isFunction(a.options.items) ? a.options.items.call(a.element) : e(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a])
                    }
                }
            r.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (var s = r.length - 1; s >= 0; s--) r[s][0].each(function () {
                n.push(this)
            });
            return e(n)
        },
        _removeCurrentsFromItems: function () {
            var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = e.grep(this.items, function (e) {
                for (var n = 0; n < t.length; n++)
                    if (t[n] == e.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function (t) {
            this.items = [], this.containers = [this];
            var n = this.items,
                r = [
                    [e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                        item: this.currentItem
                    }) : e(this.options.items, this.element), this]
                ],
                i = this._connectWith();
            if (i && this.ready)
                for (var s = i.length - 1; s >= 0; s--) {
                    var o = e(i[s]);
                    for (var u = o.length - 1; u >= 0; u--) {
                        var a = e.data(o[u], this.widgetName);
                        a && a != this && !a.options.disabled && (r.push([e.isFunction(a.options.items) ? a.options.items.call(a.element[0], t, {
                            item: this.currentItem
                        }) : e(a.options.items, a.element), a]), this.containers.push(a))
                    }
                }
            for (var s = r.length - 1; s >= 0; s--) {
                var f = r[s][1],
                    l = r[s][0];
                for (var u = 0, c = l.length; u < c; u++) {
                    var h = e(l[u]);
                    h.data(this.widgetName + "-item", f), n.push({
                        item: h,
                        instance: f,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
                }
            }
        },
        refreshPositions: function (t) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            for (var n = this.items.length - 1; n >= 0; n--) {
                var r = this.items[n];
                if (r.instance != this.currentContainer && this.currentContainer && r.item[0] != this.currentItem[0]) continue;
                var i = this.options.toleranceElement ? e(this.options.toleranceElement, r.item) : r.item;
                t || (r.width = i.outerWidth(), r.height = i.outerHeight());
                var s = i.offset();
                r.left = s.left, r.top = s.top
            }
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (var n = this.containers.length - 1; n >= 0; n--) {
                    var s = this.containers[n].element.offset();
                    this.containers[n].containerCache.left = s.left, this.containers[n].containerCache.top = s.top, this.containers[n].containerCache.width = this.containers[n].element.outerWidth(), this.containers[n].containerCache.height = this.containers[n].element.outerHeight()
                }
            return this
        },
        _createPlaceholder: function (t) {
            t = t || this;
            var n = t.options;
            if (!n.placeholder || n.placeholder.constructor == String) {
                var r = n.placeholder;
                n.placeholder = {
                    element: function () {
                        var n = e(document.createElement(t.currentItem[0].nodeName)).addClass(r || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                        return r || (n.style.visibility = "hidden"), n
                    },
                    update: function (e, i) {
                        if (r && !n.forcePlaceholderSize) return;
                        i.height() || i.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), i.width() || i.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10))
                    }
                }
            }
            t.placeholder = e(n.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), n.placeholder.update(t, t.placeholder)
        },
        _contactContainers: function (t) {
            var n = null,
                r = null;
            for (var i = this.containers.length - 1; i >= 0; i--) {
                if (e.contains(this.currentItem[0], this.containers[i].element[0])) continue;
                if (this._intersectsWith(this.containers[i].containerCache)) {
                    if (n && e.contains(this.containers[i].element[0], n.element[0])) continue;
                    n = this.containers[i], r = i
                } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", t, this._uiHash(this)), this.containers[i].containerCache.over = 0)
            }
            if (!n) return;
            if (this.containers.length === 1) this.containers[r]._trigger("over", t, this._uiHash(this)), this.containers[r].containerCache.over = 1;
            else {
                var s = 1e4,
                    o = null,
                    u = this.containers[r].floating ? "left" : "top",
                    a = this.containers[r].floating ? "width" : "height",
                    f = this.positionAbs[u] + this.offset.click[u];
                for (var l = this.items.length - 1; l >= 0; l--) {
                    if (!e.contains(this.containers[r].element[0], this.items[l].item[0])) continue;
                    if (this.items[l].item[0] == this.currentItem[0]) continue;
                    var c = this.items[l].item.offset()[u],
                        h = !1;
                    Math.abs(c - f) > Math.abs(c + this.items[l][a] - f) && (h = !0, c += this.items[l][a]), Math.abs(c - f) < s && (s = Math.abs(c - f), o = this.items[l], this.direction = h ? "up" : "down")
                }
                if (!o && !this.options.dropOnEmpty) return;
                this.currentContainer = this.containers[r], o ? this._rearrange(t, o, null, !0) : this._rearrange(t, null, this.containers[r].element, !0), this._trigger("change", t, this._uiHash()), this.containers[r]._trigger("change", t, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[r]._trigger("over", t, this._uiHash(this)), this.containers[r].containerCache.over = 1
            }
        },
        _createHelper: function (t) {
            var n = this.options,
                r = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t, this.currentItem])) : n.helper == "clone" ? this.currentItem.clone() : this.currentItem;
            return r.parents("body").length || e(n.appendTo != "parent" ? n.appendTo : this.currentItem[0].parentNode)[0].appendChild(r[0]), r[0] == this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (r[0].style.width == "" || n.forceHelperSize) && r.width(this.currentItem.width()), (r[0].style.height == "" || n.forceHelperSize) && r.height(this.currentItem.height()), r
        },
        _adjustOffsetFromHelper: function (t) {
            typeof t == "string" && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            this.cssPosition == "absolute" && this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop());
            if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && e.ui.ie) t = {
                top: 0,
                left: 0
            };
            return {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if (this.cssPosition == "relative") {
                var e = this.currentItem.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var t = this.options;
            t.containment == "parent" && (t.containment = this.helper[0].parentNode);
            if (t.containment == "document" || t.containment == "window") this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e(t.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (e(t.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            if (!/^(document|window|parent)$/.test(t.containment)) {
                var n = e(t.containment)[0],
                    r = e(t.containment).offset(),
                    i = e(n).css("overflow") != "hidden";
                this.containment = [r.left + (parseInt(e(n).css("borderLeftWidth"), 10) || 0) + (parseInt(e(n).css("paddingLeft"), 10) || 0) - this.margins.left, r.top + (parseInt(e(n).css("borderTopWidth"), 10) || 0) + (parseInt(e(n).css("paddingTop"), 10) || 0) - this.margins.top, r.left + (i ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(e(n).css("borderLeftWidth"), 10) || 0) - (parseInt(e(n).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, r.top + (i ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(e(n).css("borderTopWidth"), 10) || 0) - (parseInt(e(n).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },
        _convertPositionTo: function (t, n) {
            n || (n = this.position);
            var r = t == "absolute" ? 1 : -1,
                i = this.options,
                s = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                o = /(html|body)/i.test(s[0].tagName);
            return {
                top: n.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * r,
                left: n.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * r
            }
        },
        _generatePosition: function (t) {
            var n = this.options,
                r = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                i = /(html|body)/i.test(r[0].tagName);
            this.cssPosition == "relative" && (this.scrollParent[0] == document || this.scrollParent[0] == this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset());
            var s = t.pageX,
                o = t.pageY;
            if (this.originalPosition) {
                this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (s = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (s = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top));
                if (n.grid) {
                    var u = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1];
                    o = this.containment ? u - this.offset.click.top < this.containment[1] || u - this.offset.click.top > this.containment[3] ? u - this.offset.click.top < this.containment[1] ? u + n.grid[1] : u - n.grid[1] : u : u;
                    var a = this.originalPageX + Math.round((s - this.originalPageX) / n.grid[0]) * n.grid[0];
                    s = this.containment ? a - this.offset.click.left < this.containment[0] || a - this.offset.click.left > this.containment[2] ? a - this.offset.click.left < this.containment[0] ? a + n.grid[0] : a - n.grid[0] : a : a
                }
            }
            return {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : i ? 0 : r.scrollTop()),
                left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : i ? 0 : r.scrollLeft())
            }
        },
        _rearrange: function (e, t, n, r) {
            n ? n[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], this.direction == "down" ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var i = this.counter;
            this._delay(function () {
                i == this.counter && this.refreshPositions(!r)
            })
        },
        _clear: function (t, n) {
            this.reverting = !1;
            var r = [];
            !this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null;
            if (this.helper[0] == this.currentItem[0]) {
                for (var i in this._storedCSS)
                    if (this._storedCSS[i] == "auto" || this._storedCSS[i] == "static") this._storedCSS[i] = "";
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            this.fromOutside && !n && r.push(function (e) {
                this._trigger("receive", e, this._uiHash(this.fromOutside))
            }), (this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !n && r.push(function (e) {
                this._trigger("update", e, this._uiHash())
            }), this !== this.currentContainer && (n || (r.push(function (e) {
                this._trigger("remove", e, this._uiHash())
            }), r.push(function (e) {
                return function (t) {
                    e._trigger("receive", t, this._uiHash(this))
                }
            }.call(this, this.currentContainer)), r.push(function (e) {
                return function (t) {
                    e._trigger("update", t, this._uiHash(this))
                }
            }.call(this, this.currentContainer))));
            for (var i = this.containers.length - 1; i >= 0; i--) n || r.push(function (e) {
                return function (t) {
                    e._trigger("deactivate", t, this._uiHash(this))
                }
            }.call(this, this.containers[i])), this.containers[i].containerCache.over && (r.push(function (e) {
                return function (t) {
                    e._trigger("out", t, this._uiHash(this))
                }
            }.call(this, this.containers[i])), this.containers[i].containerCache.over = 0);
            this._storedCursor && e("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", this._storedZIndex == "auto" ? "" : this._storedZIndex), this.dragging = !1;
            if (this.cancelHelperRemoval) {
                if (!n) {
                    this._trigger("beforeStop", t, this._uiHash());
                    for (var i = 0; i < r.length; i++) r[i].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1, !1
            }
            n || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null;
            if (!n) {
                for (var i = 0; i < r.length; i++) r[i].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function () {
            e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function (t) {
            var n = t || this;
            return {
                helper: n.helper,
                placeholder: n.placeholder || e([]),
                position: n.position,
                originalPosition: n.originalPosition,
                offset: n.positionAbs,
                item: n.currentItem,
                sender: t ? t.element : null
            }
        }
    })
})(jQuery);
(function (e) {
    function t(e) {
        return function () {
            var t = this.element.val();
            e.apply(this, arguments), this._refresh(), t !== this.element.val() && this._trigger("change")
        }
    }
    e.widget("ui.spinner", {
        version: "1.9.1",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function () {
            this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function () {
            var t = {}, n = this.element;
            return e.each(["min", "max", "step"], function (e, r) {
                var i = n.attr(r);
                i !== undefined && i.length && (t[r] = i)
            }), t
        },
        _events: {
            keydown: function (e) {
                this._start(e) && this._keydown(e) && e.preventDefault()
            },
            keyup: "_stop",
            focus: function () {
                this.previous = this.element.val()
            },
            blur: function (e) {
                if (this.cancelBlur) {
                    delete this.cancelBlur;
                    return
                }
                this._refresh(), this.previous !== this.element.val() && this._trigger("change", e)
            },
            mousewheel: function (e, t) {
                if (!t) return;
                if (!this.spinning && !this._start(e)) return !1;
                this._spin((t > 0 ? 1 : -1) * this.options.step, e), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
                    this.spinning && this._stop(e)
                }, 100), e.preventDefault()
            },
            "mousedown .ui-spinner-button": function (t) {
                function n() {
                    var e = this.element[0] === this.document[0].activeElement;
                    e || (this.element.focus(), this.previous = r, this._delay(function () {
                        this.previous = r
                    }))
                }
                var r;
                r = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), t.preventDefault(), n.call(this), this.cancelBlur = !0, this._delay(function () {
                    delete this.cancelBlur, n.call(this)
                });
                if (this._start(t) === !1) return;
                this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function (t) {
                if (!e(t.currentTarget).hasClass("ui-state-active")) return;
                if (this._start(t) === !1) return !1;
                this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function () {
            var e = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton"), this.buttons = e.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(e.height() * .5) && e.height() > 0 && e.height(e.height()), this.options.disabled && this.disable()
        },
        _keydown: function (t) {
            var n = this.options,
                r = e.ui.keyCode;
            switch (t.keyCode) {
            case r.UP:
                return this._repeat(null, 1, t), !0;
            case r.DOWN:
                return this._repeat(null, -1, t), !0;
            case r.PAGE_UP:
                return this._repeat(null, n.page, t), !0;
            case r.PAGE_DOWN:
                return this._repeat(null, -n.page, t), !0
            }
            return !1
        },
        _uiSpinnerHtml: function () {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
        },
        _buttonHtml: function () {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" + "</a>" + "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" + "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" + "</a>"
        },
        _start: function (e) {
            return !this.spinning && this._trigger("start", e) === !1 ? !1 : (this.counter || (this.counter = 1), this.spinning = !0, !0)
        },
        _repeat: function (e, t, n) {
            e = e || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
                this._repeat(40, t, n)
            }, e), this._spin(t * this.options.step, n)
        },
        _spin: function (e, t) {
            var n = this.value() || 0;
            this.counter || (this.counter = 1), n = this._adjustValue(n + e * this._increment(this.counter));
            if (!this.spinning || this._trigger("spin", t, {
                value: n
            }) !== !1) this._value(n), this.counter++
        },
        _increment: function (t) {
            var n = this.options.incremental;
            return n ? e.isFunction(n) ? n(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
        },
        _precision: function () {
            var e = this._precisionOf(this.options.step);
            return this.options.min !== null && (e = Math.max(e, this._precisionOf(this.options.min))), e
        },
        _precisionOf: function (e) {
            var t = e.toString(),
                n = t.indexOf(".");
            return n === -1 ? 0 : t.length - n - 1
        },
        _adjustValue: function (e) {
            var t, n, r = this.options;
            return t = r.min !== null ? r.min : 0, n = e - t, n = Math.round(n / r.step) * r.step, e = t + n, e = parseFloat(e.toFixed(this._precision())), r.max !== null && e > r.max ? r.max : r.min !== null && e < r.min ? r.min : e
        },
        _stop: function (e) {
            if (!this.spinning) return;
            clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", e)
        },
        _setOption: function (e, t) {
            if (e === "culture" || e === "numberFormat") {
                var n = this._parse(this.element.val());
                this.options[e] = t, this.element.val(this._format(n));
                return
            }(e === "max" || e === "min" || e === "step") && typeof t == "string" && (t = this._parse(t)), this._super(e, t), e === "disabled" && (t ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
        },
        _setOptions: t(function (e) {
            this._super(e), this._value(this.element.val())
        }),
        _parse: function (e) {
            return typeof e == "string" && e !== "" && (e = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(e, 10, this.options.culture) : +e), e === "" || isNaN(e) ? null : e
        },
        _format: function (e) {
            return e === "" ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(e, this.options.numberFormat, this.options.culture) : e
        },
        _refresh: function () {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        _value: function (e, t) {
            var n;
            e !== "" && (n = this._parse(e), n !== null && (t || (n = this._adjustValue(n)), e = this._format(n))), this.element.val(e), this._refresh()
        },
        _destroy: function () {
            this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
        },
        stepUp: t(function (e) {
            this._stepUp(e)
        }),
        _stepUp: function (e) {
            this._spin((e || 1) * this.options.step)
        },
        stepDown: t(function (e) {
            this._stepDown(e)
        }),
        _stepDown: function (e) {
            this._spin((e || 1) * -this.options.step)
        },
        pageUp: t(function (e) {
            this._stepUp((e || 1) * this.options.page)
        }),
        pageDown: t(function (e) {
            this._stepDown((e || 1) * this.options.page)
        }),
        value: function (e) {
            if (!arguments.length) return this._parse(this.element.val());
            t(this._value).call(this, e)
        },
        widget: function () {
            return this.uiSpinner
        }
    })
})(jQuery);
(function (e, t) {
    function n() {
        return ++i
    }

    function r(e) {
        return e.hash.length > 1 && e.href.replace(s, "") === location.href.replace(s, "")
    }
    var i = 0,
        s = /#.*$/;
    e.widget("ui.tabs", {
        version: "1.9.1",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _create: function () {
            var t = this,
                n = this.options,
                r = n.active,
                i = location.hash.substring(1);
            this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", n.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function (t) {
                e(this).is(".ui-state-disabled") && t.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
                e(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this._processTabs();
            if (r === null) {
                i && this.tabs.each(function (t, n) {
                    if (e(n).attr("aria-controls") === i) return r = t, !1
                }), r === null && (r = this.tabs.index(this.tabs.filter(".ui-tabs-active")));
                if (r === null || r === -1) r = this.tabs.length ? 0 : !1
            }
            r !== !1 && (r = this.tabs.index(this.tabs.eq(r)), r === -1 && (r = n.collapsible ? !1 : 0)), n.active = r, !n.collapsible && n.active === !1 && this.anchors.length && (n.active = 0), e.isArray(n.disabled) && (n.disabled = e.unique(n.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"), function (e) {
                return t.tabs.index(e)
            }))).sort()), this.options.active !== !1 && this.anchors.length ? this.active = this._findActive(this.options.active) : this.active = e(), this._refresh(), this.active.length && this.load(n.active)
        },
        _getCreateEventData: function () {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : e()
            }
        },
        _tabKeydown: function (t) {
            var n = e(this.document[0].activeElement).closest("li"),
                r = this.tabs.index(n),
                i = !0;
            if (this._handlePageNav(t)) return;
            switch (t.keyCode) {
            case e.ui.keyCode.RIGHT:
            case e.ui.keyCode.DOWN:
                r++;
                break;
            case e.ui.keyCode.UP:
            case e.ui.keyCode.LEFT:
                i = !1, r--;
                break;
            case e.ui.keyCode.END:
                r = this.anchors.length - 1;
                break;
            case e.ui.keyCode.HOME:
                r = 0;
                break;
            case e.ui.keyCode.SPACE:
                t.preventDefault(), clearTimeout(this.activating), this._activate(r);
                return;
            case e.ui.keyCode.ENTER:
                t.preventDefault(), clearTimeout(this.activating), this._activate(r === this.options.active ? !1 : r);
                return;
            default:
                return
            }
            t.preventDefault(), clearTimeout(this.activating), r = this._focusNextTab(r, i), t.ctrlKey || (n.attr("aria-selected", "false"), this.tabs.eq(r).attr("aria-selected", "true"), this.activating = this._delay(function () {
                this.option("active", r)
            }, this.delay))
        },
        _panelKeydown: function (t) {
            if (this._handlePageNav(t)) return;
            t.ctrlKey && t.keyCode === e.ui.keyCode.UP && (t.preventDefault(), this.active.focus())
        },
        _handlePageNav: function (t) {
            if (t.altKey && t.keyCode === e.ui.keyCode.PAGE_UP) return this._activate(this._focusNextTab(this.options.active - 1, !1)), !0;
            if (t.altKey && t.keyCode === e.ui.keyCode.PAGE_DOWN) return this._activate(this._focusNextTab(this.options.active + 1, !0)), !0
        },
        _findNextTab: function (t, n) {
            function r() {
                return t > i && (t = 0), t < 0 && (t = i), t
            }
            var i = this.tabs.length - 1;
            while (e.inArray(r(), this.options.disabled) !== -1) t = n ? t + 1 : t - 1;
            return t
        },
        _focusNextTab: function (e, t) {
            return e = this._findNextTab(e, t), this.tabs.eq(e).focus(), e
        },
        _setOption: function (e, t) {
            if (e === "active") {
                this._activate(t);
                return
            }
            if (e === "disabled") {
                this._setupDisabled(t);
                return
            }
            this._super(e, t), e === "collapsible" && (this.element.toggleClass("ui-tabs-collapsible", t), !t && this.options.active === !1 && this._activate(0)), e === "event" && this._setupEvents(t), e === "heightStyle" && this._setupHeightStyle(t)
        },
        _tabId: function (e) {
            return e.attr("aria-controls") || "ui-tabs-" + n()
        },
        _sanitizeSelector: function (e) {
            return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function () {
            var t = this.options,
                n = this.tablist.children(":has(a[href])");
            t.disabled = e.map(n.filter(".ui-state-disabled"), function (e) {
                return n.index(e)
            }), this._processTabs(), t.active === !1 || !this.anchors.length ? (t.active = !1, this.active = e()) : this.active.length && !e.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = e()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active), this._refresh()
        },
        _refresh: function () {
            this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                tabIndex: 0
            }), this._getPanelForTab(this.active).show().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function () {
            var t = this;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            }), this.anchors = this.tabs.map(function () {
                return e("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            }), this.panels = e(), this.anchors.each(function (n, i) {
                var s, o, u, a = e(i).uniqueId().attr("id"),
                    f = e(i).closest("li"),
                    l = f.attr("aria-controls");
                r(i) ? (s = i.hash, o = t.element.find(t._sanitizeSelector(s))) : (u = t._tabId(f), s = "#" + u, o = t.element.find(s), o.length || (o = t._createPanel(u), o.insertAfter(t.panels[n - 1] || t.tablist)), o.attr("aria-live", "polite")), o.length && (t.panels = t.panels.add(o)), l && f.data("ui-tabs-aria-controls", l), f.attr({
                    "aria-controls": s.substring(1),
                    "aria-labelledby": a
                }), o.attr("aria-labelledby", a)
            }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
        },
        _getList: function () {
            return this.element.find("ol,ul").eq(0)
        },
        _createPanel: function (t) {
            return e("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        },
        _setupDisabled: function (t) {
            e.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
            for (var n = 0, r; r = this.tabs[n]; n++) t === !0 || e.inArray(n, t) !== -1 ? e(r).addClass("ui-state-disabled").attr("aria-disabled", "true") : e(r).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = t
        },
        _setupEvents: function (t) {
            var n = {
                click: function (e) {
                    e.preventDefault()
                }
            };
            t && e.each(t.split(" "), function (e, t) {
                n[t] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, n), this._on(this.tabs, {
                keydown: "_tabKeydown"
            }), this._on(this.panels, {
                keydown: "_panelKeydown"
            }), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function (t) {
            var n, r, i = this.element.parent();
            t === "fill" ? (e.support.minHeight || (r = i.css("overflow"), i.css("overflow", "hidden")), n = i.height(), this.element.siblings(":visible").each(function () {
                var t = e(this),
                    r = t.css("position");
                if (r === "absolute" || r === "fixed") return;
                n -= t.outerHeight(!0)
            }), r && i.css("overflow", r), this.element.children().not(this.panels).each(function () {
                n -= e(this).outerHeight(!0)
            }), this.panels.each(function () {
                e(this).height(Math.max(0, n - e(this).innerHeight() + e(this).height()))
            }).css("overflow", "auto")) : t === "auto" && (n = 0, this.panels.each(function () {
                n = Math.max(n, e(this).height("").height())
            }).height(n))
        },
        _eventHandler: function (t) {
            var n = this.options,
                r = this.active,
                i = e(t.currentTarget),
                s = i.closest("li"),
                o = s[0] === r[0],
                u = o && n.collapsible,
                a = u ? e() : this._getPanelForTab(s),
                f = r.length ? this._getPanelForTab(r) : e(),
                l = {
                    oldTab: r,
                    oldPanel: f,
                    newTab: u ? e() : s,
                    newPanel: a
                };
            t.preventDefault();
            if (s.hasClass("ui-state-disabled") || s.hasClass("ui-tabs-loading") || this.running || o && !n.collapsible || this._trigger("beforeActivate", t, l) === !1) return;
            n.active = u ? !1 : this.tabs.index(s), this.active = o ? e() : s, this.xhr && this.xhr.abort(), !f.length && !a.length && e.error("jQuery UI Tabs: Mismatching fragment identifier."), a.length && this.load(this.tabs.index(s), t), this._toggle(t, l)
        },
        _toggle: function (t, n) {
            function r() {
                s.running = !1, s._trigger("activate", t, n)
            }

            function i() {
                n.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), o.length && s.options.show ? s._show(o, s.options.show, r) : (o.show(), r())
            }
            var s = this,
                o = n.newPanel,
                u = n.oldPanel;
            this.running = !0, u.length && this.options.hide ? this._hide(u, this.options.hide, function () {
                n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), i()
            }) : (n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), u.hide(), i()), u.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), n.oldTab.attr("aria-selected", "false"), o.length && u.length ? n.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function () {
                return e(this).attr("tabIndex") === 0
            }).attr("tabIndex", -1), o.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }), n.newTab.attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _activate: function (t) {
            var n, r = this._findActive(t);
            if (r[0] === this.active[0]) return;
            r.length || (r = this.active), n = r.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: n,
                currentTarget: n,
                preventDefault: e.noop
            })
        },
        _findActive: function (t) {
            return t === !1 ? e() : this.tabs.eq(t)
        },
        _getIndex: function (e) {
            return typeof e == "string" && (e = this.anchors.index(this.anchors.filter("[href$='" + e + "']"))), e
        },
        _destroy: function () {
            this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeData("href.tabs").removeData("load.tabs").removeUniqueId(), this.tabs.add(this.panels).each(function () {
                e.data(this, "ui-tabs-destroy") ? e(this).remove() : e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            }), this.tabs.each(function () {
                var t = e(this),
                    n = t.data("ui-tabs-aria-controls");
                n ? t.attr("aria-controls", n) : t.removeAttr("aria-controls")
            }), this.options.heightStyle !== "content" && this.panels.css("height", "")
        },
        enable: function (n) {
            var r = this.options.disabled;
            if (r === !1) return;
            n === t ? r = !1 : (n = this._getIndex(n), e.isArray(r) ? r = e.map(r, function (e) {
                return e !== n ? e : null
            }) : r = e.map(this.tabs, function (e, t) {
                return t !== n ? t : null
            })), this._setupDisabled(r)
        },
        disable: function (n) {
            var r = this.options.disabled;
            if (r === !0) return;
            if (n === t) r = !0;
            else {
                n = this._getIndex(n);
                if (e.inArray(n, r) !== -1) return;
                e.isArray(r) ? r = e.merge([n], r).sort() : r = [n]
            }
            this._setupDisabled(r)
        },
        load: function (t, n) {
            t = this._getIndex(t);
            var i = this,
                s = this.tabs.eq(t),
                o = s.find(".ui-tabs-anchor"),
                u = this._getPanelForTab(s),
                a = {
                    tab: s,
                    panel: u
                };
            if (r(o[0])) return;
            this.xhr = e.ajax(this._ajaxSettings(o, n, a)), this.xhr && this.xhr.statusText !== "canceled" && (s.addClass("ui-tabs-loading"), u.attr("aria-busy", "true"), this.xhr.success(function (e) {
                setTimeout(function () {
                    u.html(e), i._trigger("load", n, a)
                }, 1)
            }).complete(function (e, t) {
                setTimeout(function () {
                    t === "abort" && i.panels.stop(!1, !0), s.removeClass("ui-tabs-loading"), u.removeAttr("aria-busy"), e === i.xhr && delete i.xhr
                }, 1)
            }))
        },
        _ajaxSettings: function (t, n, r) {
            var i = this;
            return {
                url: t.attr("href"),
                beforeSend: function (t, s) {
                    return i._trigger("beforeLoad", n, e.extend({
                        jqXHR: t,
                        ajaxSettings: s
                    }, r))
                }
            }
        },
        _getPanelForTab: function (t) {
            var n = e(t).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + n))
        }
    }), e.uiBackCompat !== !1 && (e.ui.tabs.prototype._ui = function (e, t) {
        return {
            tab: e,
            panel: t,
            index: this.anchors.index(e)
        }
    }, e.widget("ui.tabs", e.ui.tabs, {
        url: function (e, t) {
            this.anchors.eq(e).attr("href", t)
        }
    }), e.widget("ui.tabs", e.ui.tabs, {
        options: {
            ajaxOptions: null,
            cache: !1
        },
        _create: function () {
            this._super();
            var t = this;
            this._on({
                tabsbeforeload: function (n, r) {
                    if (e.data(r.tab[0], "cache.tabs")) {
                        n.preventDefault();
                        return
                    }
                    r.jqXHR.success(function () {
                        t.options.cache && e.data(r.tab[0], "cache.tabs", !0)
                    })
                }
            })
        },
        _ajaxSettings: function (t, n, r) {
            var i = this.options.ajaxOptions;
            return e.extend({}, i, {
                error: function (e, t) {
                    try {
                        i.error(e, t, r.tab.closest("li").index(), r.tab[0])
                    } catch (n) {}
                }
            }, this._superApply(arguments))
        },
        _setOption: function (e, t) {
            e === "cache" && t === !1 && this.anchors.removeData("cache.tabs"), this._super(e, t)
        },
        _destroy: function () {
            this.anchors.removeData("cache.tabs"), this._super()
        },
        url: function (e) {
            this.anchors.eq(e).removeData("cache.tabs"), this._superApply(arguments)
        }
    }), e.widget("ui.tabs", e.ui.tabs, {
        abort: function () {
            this.xhr && this.xhr.abort()
        }
    }), e.widget("ui.tabs", e.ui.tabs, {
        options: {
            spinner: "<em>Loading&#8230;</em>"
        },
        _create: function () {
            this._super(), this._on({
                tabsbeforeload: function (e, t) {
                    if (e.target !== this.element[0] || !this.options.spinner) return;
                    var n = t.tab.find("span"),
                        r = n.html();
                    n.html(this.options.spinner), t.jqXHR.complete(function () {
                        n.html(r)
                    })
                }
            })
        }
    }), e.widget("ui.tabs", e.ui.tabs, {
        options: {
            enable: null,
            disable: null
        },
        enable: function (t) {
            var n = this.options,
                r;
            if (t && n.disabled === !0 || e.isArray(n.disabled) && e.inArray(t, n.disabled) !== -1) r = !0;
            this._superApply(arguments), r && this._trigger("enable", null, this._ui(this.anchors[t], this.panels[t]))
        },
        disable: function (t) {
            var n = this.options,
                r;
            if (t && n.disabled === !1 || e.isArray(n.disabled) && e.inArray(t, n.disabled) === -1) r = !0;
            this._superApply(arguments), r && this._trigger("disable", null, this._ui(this.anchors[t], this.panels[t]))
        }
    }), e.widget("ui.tabs", e.ui.tabs, {
        options: {
            add: null,
            remove: null,
            tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
        },
        add: function (n, r, i) {
            i === t && (i = this.anchors.length);
            var s, o, u = this.options,
                a = e(u.tabTemplate.replace(/#\{href\}/g, n).replace(/#\{label\}/g, r)),
                f = n.indexOf("#") ? this._tabId(a) : n.replace("#", "");
            return a.addClass("ui-state-default ui-corner-top").data("ui-tabs-destroy", !0), a.attr("aria-controls", f), s = i >= this.tabs.length, o = this.element.find("#" + f), o.length || (o = this._createPanel(f), s ? i > 0 ? o.insertAfter(this.panels.eq(-1)) : o.appendTo(this.element) : o.insertBefore(this.panels[i])), o.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").hide(), s ? a.appendTo(this.tablist) : a.insertBefore(this.tabs[i]), u.disabled = e.map(u.disabled, function (e) {
                return e >= i ? ++e : e
            }), this.refresh(), this.tabs.length === 1 && u.active === !1 && this.option("active", 0), this._trigger("add", null, this._ui(this.anchors[i], this.panels[i])), this
        },
        remove: function (t) {
            t = this._getIndex(t);
            var n = this.options,
                r = this.tabs.eq(t).remove(),
                i = this._getPanelForTab(r).remove();
            return r.hasClass("ui-tabs-active") && this.anchors.length > 2 && this._activate(t + (t + 1 < this.anchors.length ? 1 : -1)), n.disabled = e.map(e.grep(n.disabled, function (e) {
                return e !== t
            }), function (e) {
                return e >= t ? --e : e
            }), this.refresh(), this._trigger("remove", null, this._ui(r.find("a")[0], i[0])), this
        }
    }), e.widget("ui.tabs", e.ui.tabs, {
        length: function () {
            return this.anchors.length
        }
    }), e.widget("ui.tabs", e.ui.tabs, {
        options: {
            idPrefix: "ui-tabs-"
        },
        _tabId: function (t) {
            var r = t.is("li") ? t.find("a[href]") : t;
            return r = r[0], e(r).closest("li").attr("aria-controls") || r.title && r.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF\-]/g, "") || this.options.idPrefix + n()
        }
    }), e.widget("ui.tabs", e.ui.tabs, {
        options: {
            panelTemplate: "<div></div>"
        },
        _createPanel: function (t) {
            return e(this.options.panelTemplate).attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        }
    }), e.widget("ui.tabs", e.ui.tabs, {
        _create: function () {
            var e = this.options;
            e.active === null && e.selected !== t && (e.active = e.selected === -1 ? !1 : e.selected), this._super(), e.selected = e.active, e.selected === !1 && (e.selected = -1)
        },
        _setOption: function (e, t) {
            if (e !== "selected") return this._super(e, t);
            var n = this.options;
            this._super("active", t === -1 ? !1 : t), n.selected = n.active, n.selected === !1 && (n.selected = -1)
        },
        _eventHandler: function () {
            this._superApply(arguments), this.options.selected = this.options.active, this.options.selected === !1 && (this.options.selected = -1)
        }
    }), e.widget("ui.tabs", e.ui.tabs, {
        options: {
            show: null,
            select: null
        },
        _create: function () {
            this._super(), this.options.active !== !1 && this._trigger("show", null, this._ui(this.active.find(".ui-tabs-anchor")[0], this._getPanelForTab(this.active)[0]))
        },
        _trigger: function (e, t, n) {
            var r = this._superApply(arguments);
            return r ? (e === "beforeActivate" && n.newTab.length ? r = this._super("select", t, {
                tab: n.newTab.find(".ui-tabs-anchor")[0],
                panel: n.newPanel[0],
                index: n.newTab.closest("li").index()
            }) : e === "activate" && n.newTab.length && (r = this._super("show", t, {
                tab: n.newTab.find(".ui-tabs-anchor")[0],
                panel: n.newPanel[0],
                index: n.newTab.closest("li").index()
            })), r) : !1
        }
    }), e.widget("ui.tabs", e.ui.tabs, {
        select: function (e) {
            e = this._getIndex(e);
            if (e === -1) {
                if (!this.options.collapsible || this.options.selected === -1) return;
                e = this.options.selected
            }
            this.anchors.eq(e).trigger(this.options.event + this.eventNamespace)
        }
    }), function () {
        var t = 0;
        e.widget("ui.tabs", e.ui.tabs, {
            options: {
                cookie: null
            },
            _create: function () {
                var e = this.options,
                    t;
                e.active == null && e.cookie && (t = parseInt(this._cookie(), 10), t === -1 && (t = !1), e.active = t), this._super()
            },
            _cookie: function (n) {
                var r = [this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + ++t)];
                return arguments.length && (r.push(n === !1 ? -1 : n), r.push(this.options.cookie)), e.cookie.apply(null, r)
            },
            _refresh: function () {
                this._super(), this.options.cookie && this._cookie(this.options.active, this.options.cookie)
            },
            _eventHandler: function () {
                this._superApply(arguments), this.options.cookie && this._cookie(this.options.active, this.options.cookie)
            },
            _destroy: function () {
                this._super(), this.options.cookie && this._cookie(null, this.options.cookie)
            }
        })
    }(), e.widget("ui.tabs", e.ui.tabs, {
        _trigger: function (t, n, r) {
            var i = e.extend({}, r);
            return t === "load" && (i.panel = i.panel[0], i.tab = i.tab.find(".ui-tabs-anchor")[0]), this._super(t, n, i)
        }
    }), e.widget("ui.tabs", e.ui.tabs, {
        options: {
            fx: null
        },
        _getFx: function () {
            var t, n, r = this.options.fx;
            return r && (e.isArray(r) ? (t = r[0], n = r[1]) : t = n = r), r ? {
                show: n,
                hide: t
            } : null
        },
        _toggle: function (e, t) {
            function n() {
                i.running = !1, i._trigger("activate", e, t)
            }

            function r() {
                t.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), s.length && u.show ? s.animate(u.show, u.show.duration, function () {
                    n()
                }) : (s.show(), n())
            }
            var i = this,
                s = t.newPanel,
                o = t.oldPanel,
                u = this._getFx();
            if (!u) return this._super(e, t);
            i.running = !0, o.length && u.hide ? o.animate(u.hide, u.hide.duration, function () {
                t.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r()
            }) : (t.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), o.hide(), r())
        }
    }))
})(jQuery);
/*! jQuery Form Plugin version: 3.18 (28-SEP-2012) */
;(function($) {
"use strict";

/**
 * Feature detection
 */
var feature = {};
feature.fileapi = $("<input type='file'/>").get(0).files !== undefined;
feature.formdata = window.FormData !== undefined;

/**
 * ajaxSubmit() provides a mechanism for immediately submitting
 * an HTML form using AJAX.
 */
$.fn.ajaxSubmit = function(options) {
    /*jshint scripturl:true */

    // fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
    if (!this.length) {
        log('ajaxSubmit: skipping submit process - no element selected');
        return this;
    }

    var method, action, url, $form = this;

    if (typeof options == 'function') {
        options = { success: options };
    }

    method = this.attr('method');
    action = this.attr('action');
    url = (typeof action === 'string') ? $.trim(action) : '';
    url = url || window.location.href || '';
    if (url) {
        // clean url (don't include hash vaue)
        url = (url.match(/^([^#]+)/)||[])[1];
    }

    options = $.extend(true, {
        url:  url,
        success: $.ajaxSettings.success,
        type: method || 'GET',
        iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
    }, options);

    // hook for manipulating the form data before it is extracted;
    // convenient for use with rich editors like tinyMCE or FCKEditor
    var veto = {};
    this.trigger('form-pre-serialize', [this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
        return this;
    }

    // provide opportunity to alter form data before it is serialized
    if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSerialize callback');
        return this;
    }

    var traditional = options.traditional;
    if ( traditional === undefined ) {
        traditional = $.ajaxSettings.traditional;
    }

    var elements = [];
    var qx, a = this.formToArray(options.semantic, elements);
    if (options.data) {
        options.extraData = options.data;
        qx = $.param(options.data, traditional);
    }

    // give pre-submit callback an opportunity to abort the submit
    if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSubmit callback');
        return this;
    }

    // fire vetoable 'validate' event
    this.trigger('form-submit-validate', [a, this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
        return this;
    }

    var q = $.param(a, traditional);
    if (qx) {
        q = ( q ? (q + '&' + qx) : qx );
    }
    if (options.type.toUpperCase() == 'GET') {
        options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
        options.data = null;  // data is null for 'get'
    }
    else {
        options.data = q; // data is the query string for 'post'
    }

    var callbacks = [];
    if (options.resetForm) {
        callbacks.push(function() { $form.resetForm(); });
    }
    if (options.clearForm) {
        callbacks.push(function() { $form.clearForm(options.includeHidden); });
    }

    // perform a load on the target only if dataType is not provided
    if (!options.dataType && options.target) {
        var oldSuccess = options.success || function(){};
        callbacks.push(function(data) {
            var fn = options.replaceTarget ? 'replaceWith' : 'html';
            $(options.target)[fn](data).each(oldSuccess, arguments);
        });
    }
    else if (options.success) {
        callbacks.push(options.success);
    }

    options.success = function(data, status, xhr) { // jQuery 1.4+ passes xhr as 3rd arg
        var context = options.context || this ;    // jQuery 1.4+ supports scope context
        for (var i=0, max=callbacks.length; i < max; i++) {
            callbacks[i].apply(context, [data, status, xhr || $form, $form]);
        }
    };

    // are there files to upload?
    var fileInputs = $('input:file:enabled[value]', this); // [value] (issue #113)
    var hasFileInputs = fileInputs.length > 0;
    var mp = 'multipart/form-data';
    var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

    var fileAPI = feature.fileapi && feature.formdata;
    log("fileAPI :" + fileAPI);
    var shouldUseFrame = (hasFileInputs || multipart) && !fileAPI;

    var jqxhr;

    // options.iframe allows user to force iframe mode
    // 06-NOV-09: now defaulting to iframe mode if file input is detected
    if (options.iframe !== false && (options.iframe || shouldUseFrame)) {
        // hack to fix Safari hang (thanks to Tim Molendijk for this)
        // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
        if (options.closeKeepAlive) {
            $.get(options.closeKeepAlive, function() {
                jqxhr = fileUploadIframe(a);
            });
        }
        else {
            jqxhr = fileUploadIframe(a);
        }
    }
    else if ((hasFileInputs || multipart) && fileAPI) {
        jqxhr = fileUploadXhr(a);
    }
    else {
        jqxhr = $.ajax(options);
    }

    $form.removeData('jqxhr').data('jqxhr', jqxhr);

    // clear element array
    for (var k=0; k < elements.length; k++)
        elements[k] = null;

    // fire 'notify' event
    this.trigger('form-submit-notify', [this, options]);
    return this;

    // utility fn for deep serialization
    function deepSerialize(extraData){
        var serialized = $.param(extraData).split('&');
        var len = serialized.length;
        var result = {};
        var i, part;
        for (i=0; i < len; i++) {
            part = serialized[i].split('=');
            result[decodeURIComponent(part[0])] = decodeURIComponent(part[1]);
        }
        return result;
    }

     // XMLHttpRequest Level 2 file uploads (big hat tip to francois2metz)
    function fileUploadXhr(a) {
        var formdata = new FormData();

        for (var i=0; i < a.length; i++) {
            formdata.append(a[i].name, a[i].value);
        }

        if (options.extraData) {
            var serializedData = deepSerialize(options.extraData);
            for (var p in serializedData)
                if (serializedData.hasOwnProperty(p))
                    formdata.append(p, serializedData[p]);
        }

        options.data = null;

        var s = $.extend(true, {}, $.ajaxSettings, options, {
            contentType: false,
            processData: false,
            cache: false,
            type: method || 'POST'
        });

        if (options.uploadProgress) {
            // workaround because jqXHR does not expose upload property
            s.xhr = function() {
                var xhr = jQuery.ajaxSettings.xhr();
                if (xhr.upload) {
                    xhr.upload.onprogress = function(event) {
                        var percent = 0;
                        var position = event.loaded || event.position; /*event.position is deprecated*/
                        var total = event.total;
                        if (event.lengthComputable) {
                            percent = Math.ceil(position / total * 100);
                        }
                        options.uploadProgress(event, position, total, percent);
                    };
                }
                return xhr;
            };
        }

        s.data = null;
            var beforeSend = s.beforeSend;
            s.beforeSend = function(xhr, o) {
                o.data = formdata;
                if(beforeSend)
                    beforeSend.call(this, xhr, o);
        };
        return $.ajax(s);
    }

    // private function for handling file uploads (hat tip to YAHOO!)
    function fileUploadIframe(a) {
        var form = $form[0], el, i, s, g, id, $io, io, xhr, sub, n, timedOut, timeoutHandle;
        var useProp = !!$.fn.prop;
        var deferred = $.Deferred();

        if ($(':input[name=submit],:input[id=submit]', form).length) {
            // if there is an input with a name or id of 'submit' then we won't be
            // able to invoke the submit fn on the form (at least not x-browser)
            alert('Error: Form elements must not have name or id of "submit".');
            deferred.reject();
            return deferred;
        }

        if (a) {
            // ensure that every serialized input is still enabled
            for (i=0; i < elements.length; i++) {
                el = $(elements[i]);
                if ( useProp )
                    el.prop('disabled', false);
                else
                    el.removeAttr('disabled');
            }
        }

        s = $.extend(true, {}, $.ajaxSettings, options);
        s.context = s.context || s;
        id = 'jqFormIO' + (new Date().getTime());
        if (s.iframeTarget) {
            $io = $(s.iframeTarget);
            n = $io.attr('name');
            if (!n)
                 $io.attr('name', id);
            else
                id = n;
        }
        else {
            $io = $('<iframe name="' + id + '" src="'+ s.iframeSrc +'" />');
            $io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });
        }
        io = $io[0];


        xhr = { // mock object
            aborted: 0,
            responseText: null,
            responseXML: null,
            status: 0,
            statusText: 'n/a',
            getAllResponseHeaders: function() {},
            getResponseHeader: function() {},
            setRequestHeader: function() {},
            abort: function(status) {
                var e = (status === 'timeout' ? 'timeout' : 'aborted');
                log('aborting upload... ' + e);
                this.aborted = 1;
                // #214
                if (io.contentWindow.document.execCommand) {
                    try { // #214
                        io.contentWindow.document.execCommand('Stop');
                    } catch(ignore) {}
                }
                $io.attr('src', s.iframeSrc); // abort op in progress
                xhr.error = e;
                if (s.error)
                    s.error.call(s.context, xhr, e, status);
                if (g)
                    $.event.trigger("ajaxError", [xhr, s, e]);
                if (s.complete)
                    s.complete.call(s.context, xhr, e);
            }
        };

        g = s.global;
        // trigger ajax global events so that activity/block indicators work like normal
        if (g && 0 === $.active++) {
            $.event.trigger("ajaxStart");
        }
        if (g) {
            $.event.trigger("ajaxSend", [xhr, s]);
        }

        if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
            if (s.global) {
                $.active--;
            }
            deferred.reject();
            return deferred;
        }
        if (xhr.aborted) {
            deferred.reject();
            return deferred;
        }

        // add submitting element to data if we know it
        sub = form.clk;
        if (sub) {
            n = sub.name;
            if (n && !sub.disabled) {
                s.extraData = s.extraData || {};
                s.extraData[n] = sub.value;
                if (sub.type == "image") {
                    s.extraData[n+'.x'] = form.clk_x;
                    s.extraData[n+'.y'] = form.clk_y;
                }
            }
        }

        var CLIENT_TIMEOUT_ABORT = 1;
        var SERVER_ABORT = 2;

        function getDoc(frame) {
            var doc = frame.contentWindow ? frame.contentWindow.document : frame.contentDocument ? frame.contentDocument : frame.document;
            return doc;
        }

        // Rails CSRF hack (thanks to Yvan Barthelemy)
        var csrf_token = $('meta[name=csrf-token]').attr('content');
        var csrf_param = $('meta[name=csrf-param]').attr('content');
        if (csrf_param && csrf_token) {
            s.extraData = s.extraData || {};
            s.extraData[csrf_param] = csrf_token;
        }

        // take a breath so that pending repaints get some cpu time before the upload starts
        function doSubmit() {
            // make sure form attrs are set
            var t = $form.attr('target'), a = $form.attr('action');

            // update form attrs in IE friendly way
            form.setAttribute('target',id);
            if (!method) {
                form.setAttribute('method', 'POST');
            }
            if (a != s.url) {
                form.setAttribute('action', s.url);
            }

            // ie borks in some cases when setting encoding
            if (! s.skipEncodingOverride && (!method || /post/i.test(method))) {
                $form.attr({
                    encoding: 'multipart/form-data',
                    enctype:  'multipart/form-data'
                });
            }

            // support timout
            if (s.timeout) {
                timeoutHandle = setTimeout(function() { timedOut = true; cb(CLIENT_TIMEOUT_ABORT); }, s.timeout);
            }

            // look for server aborts
            function checkState() {
                try {
                    var state = getDoc(io).readyState;
                    log('state = ' + state);
                    if (state && state.toLowerCase() == 'uninitialized')
                        setTimeout(checkState,50);
                }
                catch(e) {
                    log('Server abort: ' , e, ' (', e.name, ')');
                    cb(SERVER_ABORT);
                    if (timeoutHandle)
                        clearTimeout(timeoutHandle);
                    timeoutHandle = undefined;
                }
            }

            // add "extra" data to form if provided in options
            var extraInputs = [];
            try {
                if (s.extraData) {
                    for (var n in s.extraData) {
                        if (s.extraData.hasOwnProperty(n)) {
                           // if using the $.param format that allows for multiple values with the same name
                           if($.isPlainObject(s.extraData[n]) && s.extraData[n].hasOwnProperty('name') && s.extraData[n].hasOwnProperty('value')) {
                               extraInputs.push(
                               $('<input type="hidden" name="'+s.extraData[n].name+'">').attr('value',s.extraData[n].value)
                                   .appendTo(form)[0]);
                           } else {
                               extraInputs.push(
                               $('<input type="hidden" name="'+n+'">').attr('value',s.extraData[n])
                                   .appendTo(form)[0]);
                           }
                        }
                    }
                }

                if (!s.iframeTarget) {
                    // add iframe to doc and submit the form
                    $io.appendTo('body');
                    if (io.attachEvent)
                        io.attachEvent('onload', cb);
                    else
                        io.addEventListener('load', cb, false);
                }
                setTimeout(checkState,15);
                form.submit();
            }
            finally {
                // reset attrs and remove "extra" input elements
                form.setAttribute('action',a);
                if(t) {
                    form.setAttribute('target', t);
                } else {
                    $form.removeAttr('target');
                }
                $(extraInputs).remove();
            }
        }

        if (s.forceSync) {
            doSubmit();
        }
        else {
            setTimeout(doSubmit, 10); // this lets dom updates render
        }

        var data, doc, domCheckCount = 50, callbackProcessed;

        function cb(e) {
            if (xhr.aborted || callbackProcessed) {
                return;
            }
            try {
                doc = getDoc(io);
            }
            catch(ex) {
                log('cannot access response document: ', ex);
                e = SERVER_ABORT;
            }
            if (e === CLIENT_TIMEOUT_ABORT && xhr) {
                xhr.abort('timeout');
                deferred.reject(xhr, 'timeout');
                return;
            }
            else if (e == SERVER_ABORT && xhr) {
                xhr.abort('server abort');
                deferred.reject(xhr, 'error', 'server abort');
                return;
            }

            if (!doc || doc.location.href == s.iframeSrc) {
                // response not received yet
                if (!timedOut)
                    return;
            }
            if (io.detachEvent)
                io.detachEvent('onload', cb);
            else
                io.removeEventListener('load', cb, false);

            var status = 'success', errMsg;
            try {
                if (timedOut) {
                    throw 'timeout';
                }

                var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
                log('isXml='+isXml);
                if (!isXml && window.opera && (doc.body === null || !doc.body.innerHTML)) {
                    if (--domCheckCount) {
                        // in some browsers (Opera) the iframe DOM is not always traversable when
                        // the onload callback fires, so we loop a bit to accommodate
                        log('requeing onLoad callback, DOM not available');
                        setTimeout(cb, 250);
                        return;
                    }
                    // let this fall through because server response could be an empty document
                    //log('Could not access iframe DOM after mutiple tries.');
                    //throw 'DOMException: not available';
                }

                //log('response detected');
                var docRoot = doc.body ? doc.body : doc.documentElement;
                xhr.responseText = docRoot ? docRoot.innerHTML : null;
                xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
                if (isXml)
                    s.dataType = 'xml';
                xhr.getResponseHeader = function(header){
                    var headers = {'content-type': s.dataType};
                    return headers[header];
                };
                // support for XHR 'status' & 'statusText' emulation :
                if (docRoot) {
                    xhr.status = Number( docRoot.getAttribute('status') ) || xhr.status;
                    xhr.statusText = docRoot.getAttribute('statusText') || xhr.statusText;
                }

                var dt = (s.dataType || '').toLowerCase();
                var scr = /(json|script|text)/.test(dt);
                if (scr || s.textarea) {
                    // see if user embedded response in textarea
                    var ta = doc.getElementsByTagName('textarea')[0];
                    if (ta) {
                        xhr.responseText = ta.value;
                        // support for XHR 'status' & 'statusText' emulation :
                        xhr.status = Number( ta.getAttribute('status') ) || xhr.status;
                        xhr.statusText = ta.getAttribute('statusText') || xhr.statusText;
                    }
                    else if (scr) {
                        // account for browsers injecting pre around json response
                        var pre = doc.getElementsByTagName('pre')[0];
                        var b = doc.getElementsByTagName('body')[0];
                        if (pre) {
                            xhr.responseText = pre.textContent ? pre.textContent : pre.innerText;
                        }
                        else if (b) {
                            xhr.responseText = b.textContent ? b.textContent : b.innerText;
                        }
                    }
                }
                else if (dt == 'xml' && !xhr.responseXML && xhr.responseText) {
                    xhr.responseXML = toXml(xhr.responseText);
                }

                try {
                    data = httpData(xhr, dt, s);
                }
                catch (e) {
                    status = 'parsererror';
                    xhr.error = errMsg = (e || status);
                }
            }
            catch (e) {
                log('error caught: ',e);
                status = 'error';
                xhr.error = errMsg = (e || status);
            }

            if (xhr.aborted) {
                log('upload aborted');
                status = null;
            }

            if (xhr.status) { // we've set xhr.status
                status = (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) ? 'success' : 'error';
            }

            // ordering of these callbacks/triggers is odd, but that's how $.ajax does it
            if (status === 'success') {
                if (s.success)
                    s.success.call(s.context, data, 'success', xhr);
                deferred.resolve(xhr.responseText, 'success', xhr);
                if (g)
                    $.event.trigger("ajaxSuccess", [xhr, s]);
            }
            else if (status) {
                if (errMsg === undefined)
                    errMsg = xhr.statusText;
                if (s.error)
                    s.error.call(s.context, xhr, status, errMsg);
                deferred.reject(xhr, 'error', errMsg);
                if (g)
                    $.event.trigger("ajaxError", [xhr, s, errMsg]);
            }

            if (g)
                $.event.trigger("ajaxComplete", [xhr, s]);

            if (g && ! --$.active) {
                $.event.trigger("ajaxStop");
            }

            if (s.complete)
                s.complete.call(s.context, xhr, status);

            callbackProcessed = true;
            if (s.timeout)
                clearTimeout(timeoutHandle);

            // clean up
            setTimeout(function() {
                if (!s.iframeTarget)
                    $io.remove();
                xhr.responseXML = null;
            }, 100);
        }

        var toXml = $.parseXML || function(s, doc) { // use parseXML if available (jQuery 1.5+)
            if (window.ActiveXObject) {
                doc = new ActiveXObject('Microsoft.XMLDOM');
                doc.async = 'false';
                doc.loadXML(s);
            }
            else {
                doc = (new DOMParser()).parseFromString(s, 'text/xml');
            }
            return (doc && doc.documentElement && doc.documentElement.nodeName != 'parsererror') ? doc : null;
        };
        var parseJSON = $.parseJSON || function(s) {
            /*jslint evil:true */
            return window['eval']('(' + s + ')');
        };

        var httpData = function( xhr, type, s ) { // mostly lifted from jq1.4.4

            var ct = xhr.getResponseHeader('content-type') || '',
                xml = type === 'xml' || !type && ct.indexOf('xml') >= 0,
                data = xml ? xhr.responseXML : xhr.responseText;

            if (xml && data.documentElement.nodeName === 'parsererror') {
                if ($.error)
                    $.error('parsererror');
            }
            if (s && s.dataFilter) {
                data = s.dataFilter(data, type);
            }
            if (typeof data === 'string') {
                if (type === 'json' || !type && ct.indexOf('json') >= 0) {
                    data = parseJSON(data);
                } else if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
                    $.globalEval(data);
                }
            }
            return data;
        };

        return deferred;
    }
};

/**
 * ajaxForm() provides a mechanism for fully automating form submission.
 *
 * The advantages of using this method instead of ajaxSubmit() are:
 *
 * 1: This method will include coordinates for <input type="image" /> elements (if the element
 *    is used to submit the form).
 * 2. This method will include the submit element's name/value data (for the element that was
 *    used to submit the form).
 * 3. This method binds the submit() method to the form for you.
 *
 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
 * passes the options argument along after properly binding events for submit elements and
 * the form itself.
 */
$.fn.ajaxForm = function(options) {
    options = options || {};
    options.delegation = options.delegation && $.isFunction($.fn.on);

    // in jQuery 1.3+ we can fix mistakes with the ready state
    if (!options.delegation && this.length === 0) {
        var o = { s: this.selector, c: this.context };
        if (!$.isReady && o.s) {
            log('DOM not ready, queuing ajaxForm');
            $(function() {
                $(o.s,o.c).ajaxForm(options);
            });
            return this;
        }
        // is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
        log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
        return this;
    }

    if ( options.delegation ) {
        $(document)
            .off('submit.form-plugin', this.selector, doAjaxSubmit)
            .off('click.form-plugin', this.selector, captureSubmittingElement)
            .on('submit.form-plugin', this.selector, options, doAjaxSubmit)
            .on('click.form-plugin', this.selector, options, captureSubmittingElement);
        return this;
    }

    return this.ajaxFormUnbind()
        .bind('submit.form-plugin', options, doAjaxSubmit)
        .bind('click.form-plugin', options, captureSubmittingElement);
};

// private event handlers
function doAjaxSubmit(e) {
    /*jshint validthis:true */
    var options = e.data;
    if (!e.isDefaultPrevented()) { // if event has been canceled, don't proceed
        e.preventDefault();
        $(this).ajaxSubmit(options);
    }
}

function captureSubmittingElement(e) {
    /*jshint validthis:true */
    var target = e.target;
    var $el = $(target);
    if (!($el.is(":submit,input:image"))) {
        // is this a child element of the submit el?  (ex: a span within a button)
        var t = $el.closest(':submit');
        if (t.length === 0) {
            return;
        }
        target = t[0];
    }
    var form = this;
    form.clk = target;
    if (target.type == 'image') {
        if (e.offsetX !== undefined) {
            form.clk_x = e.offsetX;
            form.clk_y = e.offsetY;
        } else if (typeof $.fn.offset == 'function') {
            var offset = $el.offset();
            form.clk_x = e.pageX - offset.left;
            form.clk_y = e.pageY - offset.top;
        } else {
            form.clk_x = e.pageX - target.offsetLeft;
            form.clk_y = e.pageY - target.offsetTop;
        }
    }
    // clear form vars
    setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 100);
}


// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
$.fn.ajaxFormUnbind = function() {
    return this.unbind('submit.form-plugin click.form-plugin');
};

/**
 * formToArray() gathers form element data into an array of objects that can
 * be passed to any of the following ajax functions: $.get, $.post, or load.
 * Each object in the array has both a 'name' and 'value' property.  An example of
 * an array for a simple login form might be:
 *
 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
 *
 * It is this array that is passed to pre-submit callback functions provided to the
 * ajaxSubmit() and ajaxForm() methods.
 */
$.fn.formToArray = function(semantic, elements) {
    var a = [];
    if (this.length === 0) {
        return a;
    }

    var form = this[0];
    var els = semantic ? form.getElementsByTagName('*') : form.elements;
    if (!els) {
        return a;
    }

    var i,j,n,v,el,max,jmax;
    for(i=0, max=els.length; i < max; i++) {
        el = els[i];
        n = el.name;
        if (!n) {
            continue;
        }

        if (semantic && form.clk && el.type == "image") {
            // handle image inputs on the fly when semantic == true
            if(form.clk == el) {
                a.push({name: n, value: $(el).val(), type: el.type });
                a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
            }
            continue;
        }

        v = $.fieldValue(el, true);
        if (v && v.constructor == Array) {
            if (elements)
                elements.push(el);
            for(j=0, jmax=v.length; j < jmax; j++) {
                a.push({name: n, value: v[j]});
            }
        }
        else if (feature.fileapi && el.type == 'file') {
            if (elements)
                elements.push(el);
            var files = el.files;
            if (files.length) {
                for (j=0; j < files.length; j++) {
                    a.push({name: n, value: files[j], type: el.type});
                }
            }
            else {
                // #180
                a.push({ name: n, value: '', type: el.type });
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            if (elements)
                elements.push(el);
            a.push({name: n, value: v, type: el.type, required: el.required});
        }
    }

    if (!semantic && form.clk) {
        // input type=='image' are not found in elements array! handle it here
        var $input = $(form.clk), input = $input[0];
        n = input.name;
        if (n && input.type == 'image') {
            a.push({name: n, value: $input.val()});
            a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
        }
    }
    return a;
};

/**
 * Serializes form data into a 'submittable' string. This method will return a string
 * in the format: name1=value1&amp;name2=value2
 */
$.fn.formSerialize = function(semantic) {
    //hand off to jQuery.param for proper encoding
    return $.param(this.formToArray(semantic));
};

/**
 * Serializes all field elements in the jQuery object into a query string.
 * This method will return a string in the format: name1=value1&amp;name2=value2
 */
$.fn.fieldSerialize = function(successful) {
    var a = [];
    this.each(function() {
        var n = this.name;
        if (!n) {
            return;
        }
        var v = $.fieldValue(this, successful);
        if (v && v.constructor == Array) {
            for (var i=0,max=v.length; i < max; i++) {
                a.push({name: n, value: v[i]});
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            a.push({name: this.name, value: v});
        }
    });
    //hand off to jQuery.param for proper encoding
    return $.param(a);
};

/**
 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
 *
 *  <form><fieldset>
 *      <input name="A" type="text" />
 *      <input name="A" type="text" />
 *      <input name="B" type="checkbox" value="B1" />
 *      <input name="B" type="checkbox" value="B2"/>
 *      <input name="C" type="radio" value="C1" />
 *      <input name="C" type="radio" value="C2" />
 *  </fieldset></form>
 *
 *  var v = $(':text').fieldValue();
 *  // if no values are entered into the text inputs
 *  v == ['','']
 *  // if values entered into the text inputs are 'foo' and 'bar'
 *  v == ['foo','bar']
 *
 *  var v = $(':checkbox').fieldValue();
 *  // if neither checkbox is checked
 *  v === undefined
 *  // if both checkboxes are checked
 *  v == ['B1', 'B2']
 *
 *  var v = $(':radio').fieldValue();
 *  // if neither radio is checked
 *  v === undefined
 *  // if first radio is checked
 *  v == ['C1']
 *
 * The successful argument controls whether or not the field element must be 'successful'
 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
 * The default value of the successful argument is true.  If this value is false the value(s)
 * for each element is returned.
 *
 * Note: This method *always* returns an array.  If no valid value can be determined the
 *    array will be empty, otherwise it will contain one or more values.
 */
$.fn.fieldValue = function(successful) {
    for (var val=[], i=0, max=this.length; i < max; i++) {
        var el = this[i];
        var v = $.fieldValue(el, successful);
        if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) {
            continue;
        }
        if (v.constructor == Array)
            $.merge(val, v);
        else
            val.push(v);
    }
    return val;
};

/**
 * Returns the value of the field element.
 */
$.fieldValue = function(el, successful) {
    var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
    if (successful === undefined) {
        successful = true;
    }

    if (successful && (!n || t == 'reset' || t == 'button' ||
        (t == 'checkbox' || t == 'radio') && !el.checked ||
        (t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
        tag == 'select' && el.selectedIndex == -1)) {
            return null;
    }

    if (tag == 'select') {
        var index = el.selectedIndex;
        if (index < 0) {
            return null;
        }
        var a = [], ops = el.options;
        var one = (t == 'select-one');
        var max = (one ? index+1 : ops.length);
        for(var i=(one ? index : 0); i < max; i++) {
            var op = ops[i];
            if (op.selected) {
                var v = op.value;
                if (!v) { // extra pain for IE...
                    v = (op.attributes && op.attributes['value'] && !(op.attributes['value'].specified)) ? op.text : op.value;
                }
                if (one) {
                    return v;
                }
                a.push(v);
            }
        }
        return a;
    }
    return $(el).val();
};

/**
 * Clears the form data.  Takes the following actions on the form's input fields:
 *  - input text fields will have their 'value' property set to the empty string
 *  - select elements will have their 'selectedIndex' property set to -1
 *  - checkbox and radio inputs will have their 'checked' property set to false
 *  - inputs of type submit, button, reset, and hidden will *not* be effected
 *  - button elements will *not* be effected
 */
$.fn.clearForm = function(includeHidden) {
    return this.each(function() {
        $('input,select,textarea', this).clearFields(includeHidden);
    });
};

/**
 * Clears the selected form elements.
 */
$.fn.clearFields = $.fn.clearInputs = function(includeHidden) {
    var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; // 'hidden' is not in this list
    return this.each(function() {
        var t = this.type, tag = this.tagName.toLowerCase();
        if (re.test(t) || tag == 'textarea') {
            this.value = '';
        }
        else if (t == 'checkbox' || t == 'radio') {
            this.checked = false;
        }
        else if (tag == 'select') {
            this.selectedIndex = -1;
        }
        else if (includeHidden) {
            // includeHidden can be the value true, or it can be a selector string
            // indicating a special test; for example:
            //  $('#myForm').clearForm('.special:hidden')
            // the above would clean hidden inputs that have the class of 'special'
            if ( (includeHidden === true && /hidden/.test(t)) ||
                 (typeof includeHidden == 'string' && $(this).is(includeHidden)) )
                this.value = '';
        }
    });
};

/**
 * Resets the form data.  Causes all form elements to be reset to their original value.
 */
$.fn.resetForm = function() {
    return this.each(function() {
        // guard against an input with the name of 'reset'
        // note that IE reports the reset function as an 'object'
        if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
            this.reset();
        }
    });
};

/**
 * Enables or disables any matching elements.
 */
$.fn.enable = function(b) {
    if (b === undefined) {
        b = true;
    }
    return this.each(function() {
        this.disabled = !b;
    });
};

/**
 * Checks/unchecks any matching checkboxes or radio buttons and
 * selects/deselects and matching option elements.
 */
$.fn.selected = function(select) {
    if (select === undefined) {
        select = true;
    }
    return this.each(function() {
        var t = this.type;
        if (t == 'checkbox' || t == 'radio') {
            this.checked = select;
        }
        else if (this.tagName.toLowerCase() == 'option') {
            var $sel = $(this).parent('select');
            if (select && $sel[0] && $sel[0].type == 'select-one') {
                // deselect all other options
                $sel.find('option').selected(false);
            }
            this.selected = select;
        }
    });
};

// expose debug var
$.fn.ajaxSubmit.debug = false;

// helper fn for console logging
function log() {
    if (!$.fn.ajaxSubmit.debug)
        return;
    var msg = '[jquery.form] ' + Array.prototype.join.call(arguments,'');
    if (window.console && window.console.log) {
        window.console.log(msg);
    }
    else if (window.opera && window.opera.postError) {
        window.opera.postError(msg);
    }
}

})(jQuery);

/*  Combobox  */

(function( $ ) {
  $.widget( "ui.combobox", {
    _create: function() {
      this.wrapper = $( "<span>" )
        .addClass( "ui-combobox" )
        .insertAfter( this.element );

      this._createAutocomplete();
    },

    _createAutocomplete: function() {
      var selected = this.element.children( ":selected" ),
        value = selected.val() ? selected.text() : "";

      this.input = $( "<input>" )
        .appendTo( this.wrapper )
        .val( value )
        .attr( "title", "" )
        .addClass( "ui-state-default ui-combobox-input ui-widget ui-widget-content ui-corner-left" )
        .autocomplete({
          delay: 0,
          minLength: 0,
          source: $.proxy( this, "_source" )
        })
				.bind('focus',function(){
					$(this).autocomplete("search");
				})
				.bind('click',function(){
					$(this).select();
					$(this).autocomplete("search","");
				});

      this._on( this.input, {
        autocompleteselect: function( event, ui ) {
          ui.item.option.selected = true;
          this._trigger( "select", event, {
            item: ui.item.option
          });
					this.element.trigger('change');
        },

        autocompletechange: "_removeIfInvalid"
      });

			if(this.element.val()=='')
			{
				this.input.val($('option:first',this.element).text());
	      this.input.data( "ui-autocomplete" ).term = "";
				this.input.trigger('change');
			}
    },

    _createShowAllButton: function() {
      var wasOpen = false;

      $( "<a>" )
        .attr( "tabIndex", -1 )
        .appendTo( this.wrapper )
        .button({
          icons: {
            primary: "ui-icon-triangle-1-s"
          },
          text: false
        })
        .removeClass( "ui-corner-all" )
        .addClass( "ui-corner-right ui-combobox-toggle" )
        .mousedown(function() {
          wasOpen = input.autocomplete( "widget" ).is( ":visible" );
        })
        .click(function() {
          input.focus();

          // Close if already visible
          if ( wasOpen ) {
            return;
          }

          // Pass empty string as value to search for, displaying all results
          input.autocomplete( "search", "" );
        });
    },

    _source: function( request, response ) {
      var matcher = new RegExp( $.ui.autocomplete.escapeRegex(request.term), "i" );
      response( this.element.children( "option" ).map(function() {
        var text = $( this ).text();
        if ( this.value && ( !request.term || matcher.test(text) ) )
          return {
            label: text,
            value: text,
            option: this
          };
      }) );
    },

    _removeIfInvalid: function( event, ui ) {

      // Selected an item, nothing to do
      if ( ui.item ) {
				this.element.trigger('change');
        return;
      }

      // Search for a match (case-insensitive)
      var value = this.input.val(),
        valueLowerCase = value.toLowerCase(),
        valid = false;
      this.element.children( "option" ).each(function() {
        if ( $( this ).text().toLowerCase() === valueLowerCase ) {
          this.selected = valid = true;
					this.element.trigger('change');
          return false;
        }
      });

      // Found a match, nothing to do
      if ( valid ) {
				this.element.trigger('change');
        return;
      }

      // Remove invalid value
      this.element.val($('option:first',this.element).attr('value'));
			this.input.val($('option:first',this.element).text());
      this.input.data( "ui-autocomplete" ).term = "";
			this.element.trigger('change');
    },

    _destroy: function() {
      this.wrapper.remove();
      this.element.show();
    }
  });
})( jQuery );

/*
colpick Color Picker
Copyright 2013 Jose Vargas. Licensed under GPL license. Based on Stefan Petre's Color Picker www.eyecon.ro, dual licensed under the MIT and GPL licenses

For usage and examples: colpick.com/plugin
 */

(function ($) {
	var colpick = function () {
		var
			tpl = '<div class="colpick"><div class="colpick_color"><div class="colpick_color_overlay1"><div class="colpick_color_overlay2"><div class="colpick_selector_outer"><div class="colpick_selector_inner"></div></div></div></div></div><div class="colpick_hue"><div class="colpick_hue_arrs"><div class="colpick_hue_larr"></div><div class="colpick_hue_rarr"></div></div></div><div class="colpick_new_color"></div><div class="colpick_current_color"></div><div class="colpick_hex_field"><div class="colpick_field_letter">#</div><input type="text" maxlength="6" size="6" /></div><div class="colpick_rgb_r colpick_field"><div class="colpick_field_letter">R</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_rgb_g colpick_field"><div class="colpick_field_letter">G</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_rgb_b colpick_field"><div class="colpick_field_letter">B</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_hsb_h colpick_field"><div class="colpick_field_letter">H</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_hsb_s colpick_field"><div class="colpick_field_letter">S</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_hsb_b colpick_field"><div class="colpick_field_letter">B</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_submit"></div></div>',
			defaults = {
				showEvent: 'click',
				onShow: function () {},
				onBeforeShow: function(){},
				onHide: function () {},
				onChange: function () {},
				onSubmit: function () {},
				colorScheme: 'light',
				color: '3289c7',
				livePreview: true,
				flat: false,
				layout: 'full',
				submit: 1,
				submitText: 'OK',
				height: 156
			},
			//Fill the inputs of the plugin
			fillRGBFields = function  (hsb, cal) {
				var rgb = hsbToRgb(hsb);
				$(cal).data('colpick').fields
					.eq(1).val(rgb.r).end()
					.eq(2).val(rgb.g).end()
					.eq(3).val(rgb.b).end();
			},
			fillHSBFields = function  (hsb, cal) {
				$(cal).data('colpick').fields
					.eq(4).val(Math.round(hsb.h)).end()
					.eq(5).val(Math.round(hsb.s)).end()
					.eq(6).val(Math.round(hsb.b)).end();
			},
			fillHexFields = function (hsb, cal) {
				$(cal).data('colpick').fields.eq(0).val(hsbToHex(hsb));
			},
			//Set the round selector position
			setSelector = function (hsb, cal) {
				$(cal).data('colpick').selector.css('backgroundColor', '#' + hsbToHex({h: hsb.h, s: 100, b: 100}));
				$(cal).data('colpick').selectorIndic.css({
					left: parseInt($(cal).data('colpick').height * hsb.s/100, 10),
					top: parseInt($(cal).data('colpick').height * (100-hsb.b)/100, 10)
				});
			},
			//Set the hue selector position
			setHue = function (hsb, cal) {
				$(cal).data('colpick').hue.css('top', parseInt($(cal).data('colpick').height - $(cal).data('colpick').height * hsb.h/360, 10));
			},
			//Set current and new colors
			setCurrentColor = function (hsb, cal) {
				$(cal).data('colpick').currentColor.css('backgroundColor', '#' + hsbToHex(hsb));
			},
			setNewColor = function (hsb, cal) {
				$(cal).data('colpick').newColor.css('backgroundColor', '#' + hsbToHex(hsb));
			},
			//Called when the new color is changed
			change = function (ev) {
				var cal = $(this).parent().parent(), col;
				if (this.parentNode.className.indexOf('_hex') > 0) {
					cal.data('colpick').color = col = hexToHsb(fixHex(this.value));
					fillRGBFields(col, cal.get(0));
					fillHSBFields(col, cal.get(0));
				} else if (this.parentNode.className.indexOf('_hsb') > 0) {
					cal.data('colpick').color = col = fixHSB({
						h: parseInt(cal.data('colpick').fields.eq(4).val(), 10),
						s: parseInt(cal.data('colpick').fields.eq(5).val(), 10),
						b: parseInt(cal.data('colpick').fields.eq(6).val(), 10)
					});
					fillRGBFields(col, cal.get(0));
					fillHexFields(col, cal.get(0));
				} else {
					cal.data('colpick').color = col = rgbToHsb(fixRGB({
						r: parseInt(cal.data('colpick').fields.eq(1).val(), 10),
						g: parseInt(cal.data('colpick').fields.eq(2).val(), 10),
						b: parseInt(cal.data('colpick').fields.eq(3).val(), 10)
					}));
					fillHexFields(col, cal.get(0));
					fillHSBFields(col, cal.get(0));
				}
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
				cal.data('colpick').onChange.apply(cal.parent(), [col, hsbToHex(col), hsbToRgb(col), cal.data('colpick').el, 0]);
			},
			//Change style on blur and on focus of inputs
			blur = function (ev) {
				$(this).parent().removeClass('colpick_focus');
			},
			focus = function () {
				$(this).parent().parent().data('colpick').fields.parent().removeClass('colpick_focus');
				$(this).parent().addClass('colpick_focus');
			},
			//Increment/decrement arrows functions
			downIncrement = function (ev) {
				ev.preventDefault ? ev.preventDefault() : ev.returnValue = false;
				var field = $(this).parent().find('input').focus();
				var current = {
					el: $(this).parent().addClass('colpick_slider'),
					max: this.parentNode.className.indexOf('_hsb_h') > 0 ? 360 : (this.parentNode.className.indexOf('_hsb') > 0 ? 100 : 255),
					y: ev.pageY,
					field: field,
					val: parseInt(field.val(), 10),
					preview: $(this).parent().parent().data('colpick').livePreview
				};
				$(document).mouseup(current, upIncrement);
				$(document).mousemove(current, moveIncrement);
			},
			moveIncrement = function (ev) {
				ev.data.field.val(Math.max(0, Math.min(ev.data.max, parseInt(ev.data.val - ev.pageY + ev.data.y, 10))));
				if (ev.data.preview) {
					change.apply(ev.data.field.get(0), [true]);
				}
				return false;
			},
			upIncrement = function (ev) {
				change.apply(ev.data.field.get(0), [true]);
				ev.data.el.removeClass('colpick_slider').find('input').focus();
				$(document).off('mouseup', upIncrement);
				$(document).off('mousemove', moveIncrement);
				return false;
			},
			//Hue slider functions
			downHue = function (ev) {
				ev.preventDefault ? ev.preventDefault() : ev.returnValue = false;
				var current = {
					cal: $(this).parent(),
					y: $(this).offset().top
				};
				$(document).on('mouseup touchend',current,upHue);
				$(document).on('mousemove touchmove',current,moveHue);

				var pageY = ((ev.type == 'touchstart') ? ev.originalEvent.changedTouches[0].pageY : ev.pageY );
				change.apply(
					current.cal.data('colpick')
					.fields.eq(4).val(parseInt(360*(current.cal.data('colpick').height - (pageY - current.y))/current.cal.data('colpick').height, 10))
						.get(0),
					[current.cal.data('colpick').livePreview]
				);
				return false;
			},
			moveHue = function (ev) {
				var pageY = ((ev.type == 'touchmove') ? ev.originalEvent.changedTouches[0].pageY : ev.pageY );
				change.apply(
					ev.data.cal.data('colpick')
					.fields.eq(4).val(parseInt(360*(ev.data.cal.data('colpick').height - Math.max(0,Math.min(ev.data.cal.data('colpick').height,(pageY - ev.data.y))))/ev.data.cal.data('colpick').height, 10))
						.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upHue = function (ev) {
				fillRGBFields(ev.data.cal.data('colpick').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colpick').color, ev.data.cal.get(0));
				$(document).off('mouseup touchend',upHue);
				$(document).off('mousemove touchmove',moveHue);
				return false;
			},
			//Color selector functions
			downSelector = function (ev) {
				ev.preventDefault ? ev.preventDefault() : ev.returnValue = false;
				var current = {
					cal: $(this).parent(),
					pos: $(this).offset()
				};
				current.preview = current.cal.data('colpick').livePreview;

				$(document).on('mouseup touchend',current,upSelector);
				$(document).on('mousemove touchmove',current,moveSelector);

				var payeX,pageY;
				if(ev.type == 'touchstart') {
					pageX = ev.originalEvent.changedTouches[0].pageX,
					pageY = ev.originalEvent.changedTouches[0].pageY;
				} else {
					pageX = ev.pageX;
					pageY = ev.pageY;
				}

				change.apply(
					current.cal.data('colpick').fields
					.eq(6).val(parseInt(100*(current.cal.data('colpick').height - (pageY - current.pos.top))/current.cal.data('colpick').height, 10)).end()
					.eq(5).val(parseInt(100*(pageX - current.pos.left)/current.cal.data('colpick').height, 10))
					.get(0),
					[current.preview]
				);
				return false;
			},
			moveSelector = function (ev) {
				var payeX,pageY;
				if(ev.type == 'touchmove') {
					pageX = ev.originalEvent.changedTouches[0].pageX,
					pageY = ev.originalEvent.changedTouches[0].pageY;
				} else {
					pageX = ev.pageX;
					pageY = ev.pageY;
				}

				change.apply(
					ev.data.cal.data('colpick').fields
					.eq(6).val(parseInt(100*(ev.data.cal.data('colpick').height - Math.max(0,Math.min(ev.data.cal.data('colpick').height,(pageY - ev.data.pos.top))))/ev.data.cal.data('colpick').height, 10)).end()
					.eq(5).val(parseInt(100*(Math.max(0,Math.min(ev.data.cal.data('colpick').height,(pageX - ev.data.pos.left))))/ev.data.cal.data('colpick').height, 10))
					.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upSelector = function (ev) {
				fillRGBFields(ev.data.cal.data('colpick').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colpick').color, ev.data.cal.get(0));
				$(document).off('mouseup touchend',upSelector);
				$(document).off('mousemove touchmove',moveSelector);
				return false;
			},
			//Submit button
			clickSubmit = function (ev) {
				var cal = $(this).parent();
				var col = cal.data('colpick').color;
				cal.data('colpick').origColor = col;
				setCurrentColor(col, cal.get(0));
				cal.data('colpick').onSubmit(col, hsbToHex(col), hsbToRgb(col), cal.data('colpick').el);
			},
			//Show/hide the color picker
			show = function (ev) {
				// Prevent the trigger of any direct parent
				ev.stopPropagation();
				var cal = $('#' + $(this).data('colpickId'));
				cal.data('colpick').onBeforeShow.apply(this, [cal.get(0)]);
				var pos = $(this).offset();
				var top = pos.top + this.offsetHeight;
				var left = pos.left;
				var viewPort = getViewport();
				var calW = cal.width();
				if (left + calW > viewPort.l + viewPort.w) {
					left -= calW;
				}
				cal.css({left: left + 'px', top: top + 'px'});
				if (cal.data('colpick').onShow.apply(this, [cal.get(0)]) != false) {
					cal.show();
				}
				//Hide when user clicks outside
				$('html').mousedown({cal:cal}, hide);
				cal.mousedown(function(ev){ev.stopPropagation();})
			},
			hide = function (ev) {
				if (ev.data.cal.data('colpick').onHide.apply(this, [ev.data.cal.get(0)]) != false) {
					ev.data.cal.hide();
				}
				$('html').off('mousedown', hide);
			},
			getViewport = function () {
				var m = document.compatMode == 'CSS1Compat';
				return {
					l : window.pageXOffset || (m ? document.documentElement.scrollLeft : document.body.scrollLeft),
					w : window.innerWidth || (m ? document.documentElement.clientWidth : document.body.clientWidth)
				};
			},
			//Fix the values if the user enters a negative or high value
			fixHSB = function (hsb) {
				return {
					h: Math.min(360, Math.max(0, hsb.h)),
					s: Math.min(100, Math.max(0, hsb.s)),
					b: Math.min(100, Math.max(0, hsb.b))
				};
			},
			fixRGB = function (rgb) {
				return {
					r: Math.min(255, Math.max(0, rgb.r)),
					g: Math.min(255, Math.max(0, rgb.g)),
					b: Math.min(255, Math.max(0, rgb.b))
				};
			},
			fixHex = function (hex) {
				var len = 6 - hex.length;
				if (len > 0) {
					var o = [];
					for (var i=0; i<len; i++) {
						o.push('0');
					}
					o.push(hex);
					hex = o.join('');
				}
				return hex;
			},
			restoreOriginal = function () {
				var cal = $(this).parent();
				var col = cal.data('colpick').origColor;
				cal.data('colpick').color = col;
				fillRGBFields(col, cal.get(0));
				fillHexFields(col, cal.get(0));
				fillHSBFields(col, cal.get(0));
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
			};
		return {
			init: function (opt) {
				opt = $.extend({}, defaults, opt||{});
				//Set color
				if (typeof opt.color == 'string') {
					opt.color = hexToHsb(opt.color);
				} else if (opt.color.r != undefined && opt.color.g != undefined && opt.color.b != undefined) {
					opt.color = rgbToHsb(opt.color);
				} else if (opt.color.h != undefined && opt.color.s != undefined && opt.color.b != undefined) {
					opt.color = fixHSB(opt.color);
				} else {
					return this;
				}

				//For each selected DOM element
				return this.each(function () {
					//If the element does not have an ID
					if (!$(this).data('colpickId')) {
						var options = $.extend({}, opt);
						options.origColor = opt.color;
						//Generate and assign a random ID
						var id = 'collorpicker_' + parseInt(Math.random() * 1000);
						$(this).data('colpickId', id);
						//Set the tpl's ID and get the HTML
						var cal = $(tpl).attr('id', id);
						//Add class according to layout
						cal.addClass('colpick_'+options.layout+(options.submit?'':' colpick_'+options.layout+'_ns'));
						//Add class if the color scheme is not default
						if(options.colorScheme != 'light') {
							cal.addClass('colpick_'+options.colorScheme);
						}
						//Setup submit button
						cal.find('div.colpick_submit').html(options.submitText).click(clickSubmit);
						//Setup input fields
						options.fields = cal.find('input').change(change).blur(blur).focus(focus);
						cal.find('div.colpick_field_arrs').mousedown(downIncrement).end().find('div.colpick_current_color').click(restoreOriginal);
						//Setup hue selector
						options.selector = cal.find('div.colpick_color').on('mousedown touchstart',downSelector);
						options.selectorIndic = options.selector.find('div.colpick_selector_outer');
						//Store parts of the plugin
						options.el = this;
						options.hue = cal.find('div.colpick_hue_arrs');
						huebar = options.hue.parent();
						//Paint the hue bar
						var UA = navigator.userAgent.toLowerCase();
						var isIE = navigator.appName === 'Microsoft Internet Explorer';
						var IEver = isIE ? parseFloat( UA.match( /msie ([0-9]{1,}[\.0-9]{0,})/ )[1] ) : 0;
						var ngIE = ( isIE && IEver < 10 );
						var stops = ['#ff0000','#ff0080','#ff00ff','#8000ff','#0000ff','#0080ff','#00ffff','#00ff80','#00ff00','#80ff00','#ffff00','#ff8000','#ff0000'];
						if(ngIE) {
							var i, div;
							for(i=0; i<=11; i++) {
								div = $('<div></div>').attr('style','height:8.333333%; filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='+stops[i]+', endColorstr='+stops[i+1]+'); -ms-filter: "progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='+stops[i]+', endColorstr='+stops[i+1]+')";');
								huebar.append(div);
							}
						} else {
							stopList = stops.join(',');
							huebar.attr('style','background:-webkit-linear-gradient(top,'+stopList+'); background: -o-linear-gradient(top,'+stopList+'); background: -ms-linear-gradient(top,'+stopList+'); background:-moz-linear-gradient(top,'+stopList+'); -webkit-linear-gradient(top,'+stopList+'); background:linear-gradient(to bottom,'+stopList+'); ');
						}
						cal.find('div.colpick_hue').on('mousedown touchstart',downHue);
						options.newColor = cal.find('div.colpick_new_color');
						options.currentColor = cal.find('div.colpick_current_color');
						//Store options and fill with default color
						cal.data('colpick', options);
						fillRGBFields(options.color, cal.get(0));
						fillHSBFields(options.color, cal.get(0));
						fillHexFields(options.color, cal.get(0));
						setHue(options.color, cal.get(0));
						setSelector(options.color, cal.get(0));
						setCurrentColor(options.color, cal.get(0));
						setNewColor(options.color, cal.get(0));
						//Append to body if flat=false, else show in place
						if (options.flat) {
							cal.appendTo(this).show();
							cal.css({
								position: 'relative',
								display: 'block'
							});
						} else {
							cal.appendTo(document.body);
							$(this).on(options.showEvent, show);
							cal.css({
								position:'absolute'
							});
						}
					}
				});
			},
			//Shows the picker
			showPicker: function() {
				return this.each( function () {
					if ($(this).data('colpickId')) {
						show.apply(this);
					}
				});
			},
			//Hides the picker
			hidePicker: function() {
				return this.each( function () {
					if ($(this).data('colpickId')) {
						$('#' + $(this).data('colpickId')).hide();
					}
				});
			},
			//Sets a color as new and current (default)
			setColor: function(col, setCurrent) {
				setCurrent = (typeof setCurrent === "undefined") ? 1 : setCurrent;
				if (typeof col == 'string') {
					col = hexToHsb(col);
				} else if (col.r != undefined && col.g != undefined && col.b != undefined) {
					col = rgbToHsb(col);
				} else if (col.h != undefined && col.s != undefined && col.b != undefined) {
					col = fixHSB(col);
				} else {
					return this;
				}
				return this.each(function(){
					if ($(this).data('colpickId')) {
						var cal = $('#' + $(this).data('colpickId'));
						cal.data('colpick').color = col;
						cal.data('colpick').origColor = col;
						fillRGBFields(col, cal.get(0));
						fillHSBFields(col, cal.get(0));
						fillHexFields(col, cal.get(0));
						setHue(col, cal.get(0));
						setSelector(col, cal.get(0));

						setNewColor(col, cal.get(0));
						cal.data('colpick').onChange.apply(cal.parent(), [col, hsbToHex(col), hsbToRgb(col), cal.data('colpick').el, 1]);
						if(setCurrent) {
							setCurrentColor(col, cal.get(0));
						}
					}
				});
			}
		};
	}();
	//Color space convertions
	var hexToRgb = function (hex) {
		var hex = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
		return {r: hex >> 16, g: (hex & 0x00FF00) >> 8, b: (hex & 0x0000FF)};
	};
	var hexToHsb = function (hex) {
		return rgbToHsb(hexToRgb(hex));
	};
	var rgbToHsb = function (rgb) {
		var hsb = {h: 0, s: 0, b: 0};
		var min = Math.min(rgb.r, rgb.g, rgb.b);
		var max = Math.max(rgb.r, rgb.g, rgb.b);
		var delta = max - min;
		hsb.b = max;
		hsb.s = max != 0 ? 255 * delta / max : 0;
		if (hsb.s != 0) {
			if (rgb.r == max) hsb.h = (rgb.g - rgb.b) / delta;
			else if (rgb.g == max) hsb.h = 2 + (rgb.b - rgb.r) / delta;
			else hsb.h = 4 + (rgb.r - rgb.g) / delta;
		} else hsb.h = -1;
		hsb.h *= 60;
		if (hsb.h < 0) hsb.h += 360;
		hsb.s *= 100/255;
		hsb.b *= 100/255;
		return hsb;
	};
	var hsbToRgb = function (hsb) {
		var rgb = {};
		var h = hsb.h;
		var s = hsb.s*255/100;
		var v = hsb.b*255/100;
		if(s == 0) {
			rgb.r = rgb.g = rgb.b = v;
		} else {
			var t1 = v;
			var t2 = (255-s)*v/255;
			var t3 = (t1-t2)*(h%60)/60;
			if(h==360) h = 0;
			if(h<60) {rgb.r=t1;	rgb.b=t2; rgb.g=t2+t3}
			else if(h<120) {rgb.g=t1; rgb.b=t2;	rgb.r=t1-t3}
			else if(h<180) {rgb.g=t1; rgb.r=t2;	rgb.b=t2+t3}
			else if(h<240) {rgb.b=t1; rgb.r=t2;	rgb.g=t1-t3}
			else if(h<300) {rgb.b=t1; rgb.g=t2;	rgb.r=t2+t3}
			else if(h<360) {rgb.r=t1; rgb.g=t2;	rgb.b=t1-t3}
			else {rgb.r=0; rgb.g=0;	rgb.b=0}
		}
		return {r:Math.round(rgb.r), g:Math.round(rgb.g), b:Math.round(rgb.b)};
	};
	var rgbToHex = function (rgb) {
		var hex = [
			rgb.r.toString(16),
			rgb.g.toString(16),
			rgb.b.toString(16)
		];
		$.each(hex, function (nr, val) {
			if (val.length == 1) {
				hex[nr] = '0' + val;
			}
		});
		return hex.join('');
	};
	var hsbToHex = function (hsb) {
		return rgbToHex(hsbToRgb(hsb));
	};
	$.fn.extend({
		colpick: colpick.init,
		colpickHide: colpick.hidePicker,
		colpickShow: colpick.showPicker,
		colpickSetColor: colpick.setColor
	});
	$.extend({
		colpick:{
			rgbToHex: rgbToHex,
			rgbToHsb: rgbToHsb,
			hsbToHex: hsbToHex,
			hsbToRgb: hsbToRgb,
			hexToHsb: hexToHsb,
			hexToRgb: hexToRgb
		}
	});
})(jQuery);


/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",f.resetText||d.data("resetText",d[e]()),d[e](f[b]||this.options[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},b.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});return this.$element.trigger(j),j.isDefaultPrevented()?void 0:(this.sliding=!0,f&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),f&&this.cycle(),this)};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);!e&&f.toggle&&"show"==c&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(b){a(d).remove(),a(e).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown",h),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=" li:not(.divider):visible a",i=f.find("[role=menu]"+h+", [role=listbox]"+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu], [role=listbox]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n="body"==this.options.container?window.innerWidth:k.outerWidth(),o="body"==this.options.container?window.innerHeight:k.outerHeight(),p="body"==this.options.container?0:k.offset().left;e="bottom"==e&&h.top+h.height+j-m>o?"top":"top"==e&&h.top-m-j<0?"bottom":"right"==e&&h.right+i>n?"left":"left"==e&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;if("top"==c&&k!=g&&(d=!0,b.top=b.top+g-k),/bottom|top/.test(c)){var l=0;b.left<0&&(l=-2*b.left,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(a(c).is("body")?window:c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);{var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})}},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a=this.$window.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"top"==this.affixed&&(e.top+=d),"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:c-h-this.$element.height()}))}}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);
/*
 jQuery Masked Input Plugin
 Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
 Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
 Version: 1.4.1
 */
!function(factory) {
	"function" == typeof define && define.amd ? define([ "jquery" ], factory) : factory("object" == typeof exports ? require("jquery") : jQuery);
}(function($) {
	var caretTimeoutId, ua = navigator.userAgent, iPhone = /iphone/i.test(ua), chrome = /chrome/i.test(ua), android = /android/i.test(ua);
	$.mask = {
		definitions: {
			"9": "[0-9]",
			a: "[A-Za-z]",
			"*": "[A-Za-z0-9]"
		},
		autoclear: !0,
		dataName: "rawMaskFn",
		placeholder: "_"
	}, $.fn.extend({
		caret: function(begin, end) {
			var range;
			if (0 !== this.length && !this.is(":hidden")) return "number" == typeof begin ? (end = "number" == typeof end ? end : begin,
				this.each(function() {
					this.setSelectionRange ? this.setSelectionRange(begin, end) : this.createTextRange && (range = this.createTextRange(),
						range.collapse(!0), range.moveEnd("character", end), range.moveStart("character", begin),
						range.select());
				})) : (this[0].setSelectionRange ? (begin = this[0].selectionStart, end = this[0].selectionEnd) : document.selection && document.selection.createRange && (range = document.selection.createRange(),
				begin = 0 - range.duplicate().moveStart("character", -1e5), end = begin + range.text.length),
			{
				begin: begin,
				end: end
			});
		},
		unmask: function() {
			return this.trigger("unmask");
		},
		mask: function(mask, settings) {
			var input, defs, tests, partialPosition, firstNonMaskPos, lastRequiredNonMaskPos, len, oldVal;
			if (!mask && this.length > 0) {
				input = $(this[0]);
				var fn = input.data($.mask.dataName);
				return fn ? fn() : void 0;
			}
			return settings = $.extend({
				autoclear: $.mask.autoclear,
				placeholder: $.mask.placeholder,
				completed: null
			}, settings), defs = $.mask.definitions, tests = [], partialPosition = len = mask.length,
				firstNonMaskPos = null, $.each(mask.split(""), function(i, c) {
				"?" == c ? (len--, partialPosition = i) : defs[c] ? (tests.push(new RegExp(defs[c])),
				null === firstNonMaskPos && (firstNonMaskPos = tests.length - 1), partialPosition > i && (lastRequiredNonMaskPos = tests.length - 1)) : tests.push(null);
			}), this.trigger("unmask").each(function() {
				function tryFireCompleted() {
					if (settings.completed) {
						for (var i = firstNonMaskPos; lastRequiredNonMaskPos >= i; i++) if (tests[i] && buffer[i] === getPlaceholder(i)) return;
						settings.completed.call(input);
					}
				}
				function getPlaceholder(i) {
					return settings.placeholder.charAt(i < settings.placeholder.length ? i : 0);
				}
				function seekNext(pos) {
					for (;++pos < len && !tests[pos]; ) ;
					return pos;
				}
				function seekPrev(pos) {
					for (;--pos >= 0 && !tests[pos]; ) ;
					return pos;
				}
				function shiftL(begin, end) {
					var i, j;
					if (!(0 > begin)) {
						for (i = begin, j = seekNext(end); len > i; i++) if (tests[i]) {
							if (!(len > j && tests[i].test(buffer[j]))) break;
							buffer[i] = buffer[j], buffer[j] = getPlaceholder(j), j = seekNext(j);
						}
						writeBuffer(), input.caret(Math.max(firstNonMaskPos, begin));
					}
				}
				function shiftR(pos) {
					var i, c, j, t;
					for (i = pos, c = getPlaceholder(pos); len > i; i++) if (tests[i]) {
						if (j = seekNext(i), t = buffer[i], buffer[i] = c, !(len > j && tests[j].test(t))) break;
						c = t;
					}
				}
				function androidInputEvent() {
					var curVal = input.val(), pos = input.caret();
					if (oldVal && oldVal.length && oldVal.length > curVal.length) {
						for (checkVal(!0); pos.begin > 0 && !tests[pos.begin - 1]; ) pos.begin--;
						if (0 === pos.begin) for (;pos.begin < firstNonMaskPos && !tests[pos.begin]; ) pos.begin++;
						input.caret(pos.begin, pos.begin);
					} else {
						for (checkVal(!0); pos.begin < len && !tests[pos.begin]; ) pos.begin++;
						input.caret(pos.begin, pos.begin);
					}
					tryFireCompleted();
				}
				function blurEvent() {
					checkVal(), input.val() != focusText && input.change();
				}
				function keydownEvent(e) {
					if (!input.prop("readonly")) {
						var pos, begin, end, k = e.which || e.keyCode;
						oldVal = input.val(), 8 === k || 46 === k || iPhone && 127 === k ? (pos = input.caret(),
							begin = pos.begin, end = pos.end, end - begin === 0 && (begin = 46 !== k ? seekPrev(begin) : end = seekNext(begin - 1),
							end = 46 === k ? seekNext(end) : end), clearBuffer(begin, end), shiftL(begin, end - 1),
							e.preventDefault()) : 13 === k ? blurEvent.call(this, e) : 27 === k && (input.val(focusText),
							input.caret(0, checkVal()), e.preventDefault());
					}
				}
				function keypressEvent(e) {
					if (!input.prop("readonly")) {
						var p, c, next, k = e.which || e.keyCode, pos = input.caret();
						if (!(e.ctrlKey || e.altKey || e.metaKey || 32 > k) && k && 13 !== k) {
							if (pos.end - pos.begin !== 0 && (clearBuffer(pos.begin, pos.end), shiftL(pos.begin, pos.end - 1)),
									p = seekNext(pos.begin - 1), len > p && (c = String.fromCharCode(k), tests[p].test(c))) {
								if (shiftR(p), buffer[p] = c, writeBuffer(), next = seekNext(p), android) {
									var proxy = function() {
										$.proxy($.fn.caret, input, next)();
									};
									setTimeout(proxy, 0);
								} else input.caret(next);
								pos.begin <= lastRequiredNonMaskPos && tryFireCompleted();
							}
							e.preventDefault();
						}
					}
				}
				function clearBuffer(start, end) {
					var i;
					for (i = start; end > i && len > i; i++) tests[i] && (buffer[i] = getPlaceholder(i));
				}
				function writeBuffer() {
					input.val(buffer.join(""));
				}
				function checkVal(allow) {
					var i, c, pos, test = input.val(), lastMatch = -1;
					for (i = 0, pos = 0; len > i; i++) if (tests[i]) {
						for (buffer[i] = getPlaceholder(i); pos++ < test.length; ) if (c = test.charAt(pos - 1),
								tests[i].test(c)) {
							buffer[i] = c, lastMatch = i;
							break;
						}
						if (pos > test.length) {
							clearBuffer(i + 1, len);
							break;
						}
					} else buffer[i] === test.charAt(pos) && pos++, partialPosition > i && (lastMatch = i);
					return allow ? writeBuffer() : partialPosition > lastMatch + 1 ? settings.autoclear || buffer.join("") === defaultBuffer ? (input.val() && input.val(""),
						clearBuffer(0, len)) : writeBuffer() : (writeBuffer(), input.val(input.val().substring(0, lastMatch + 1))),
						partialPosition ? i : firstNonMaskPos;
				}
				var input = $(this), buffer = $.map(mask.split(""), function(c, i) {
					return "?" != c ? defs[c] ? getPlaceholder(i) : c : void 0;
				}), defaultBuffer = buffer.join(""), focusText = input.val();
				input.data($.mask.dataName, function() {
					return $.map(buffer, function(c, i) {
						return tests[i] && c != getPlaceholder(i) ? c : null;
					}).join("");
				}), input.one("unmask", function() {
					input.off(".mask").removeData($.mask.dataName);
				}).on("focus.mask", function() {
					if (!input.prop("readonly")) {
						clearTimeout(caretTimeoutId);
						var pos;
						focusText = input.val(), pos = checkVal(), caretTimeoutId = setTimeout(function() {
							input.get(0) === document.activeElement && (writeBuffer(), pos == mask.replace("?", "").length ? input.caret(0, pos) : input.caret(pos));
						}, 10);
					}
				}).on("blur.mask", blurEvent).on("keydown.mask", keydownEvent).on("keypress.mask", keypressEvent).on("input.mask paste.mask", function() {
					input.prop("readonly") || setTimeout(function() {
						var pos = checkVal(!0);
						input.caret(pos), tryFireCompleted();
					}, 0);
				}), chrome && android && input.off("input.mask").on("input.mask", androidInputEvent),
					checkVal();
			});
		}
	});
});
/* perfect-scrollbar v0.6.2 */
!function t(e,n,r){function o(l,s){if(!n[l]){if(!e[l]){var a="function"==typeof require&&require;if(!s&&a)return a(l,!0);if(i)return i(l,!0);var c=new Error("Cannot find module '"+l+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[l]={exports:{}};e[l][0].call(u.exports,function(t){var n=e[l][1][t];return o(n?n:t)},u,u.exports,t,e,n,r)}return n[l].exports}for(var i="function"==typeof require&&require,l=0;l<r.length;l++)o(r[l]);return o}({1:[function(t,e){"use strict";function n(t){t.fn.perfectScrollbar=function(e){return this.each(function(){if("object"==typeof e||"undefined"==typeof e){var n=e;o.get(this)||r.initialize(this,n)}else{var i=e;"update"===i?r.update(this):"destroy"===i&&r.destroy(this)}return t(this)})}}var r=t("../main"),o=t("../plugin/instances");if("function"==typeof define&&define.amd)define(["jquery"],n);else{var i=window.jQuery?window.jQuery:window.$;"undefined"!=typeof i&&n(i)}e.exports=n},{"../main":7,"../plugin/instances":18}],2:[function(t,e,n){"use strict";function r(t,e){var n=t.className.split(" ");n.indexOf(e)<0&&n.push(e),t.className=n.join(" ")}function o(t,e){var n=t.className.split(" "),r=n.indexOf(e);r>=0&&n.splice(r,1),t.className=n.join(" ")}n.add=function(t,e){t.classList?t.classList.add(e):r(t,e)},n.remove=function(t,e){t.classList?t.classList.remove(e):o(t,e)},n.list=function(t){return t.classList?t.classList:t.className.split(" ")}},{}],3:[function(t,e,n){"use strict";function r(t,e){return window.getComputedStyle(t)[e]}function o(t,e,n){return"number"==typeof n&&(n=n.toString()+"px"),t.style[e]=n,t}function i(t,e){for(var n in e){var r=e[n];"number"==typeof r&&(r=r.toString()+"px"),t.style[n]=r}return t}n.e=function(t,e){var n=document.createElement(t);return n.className=e,n},n.appendTo=function(t,e){return e.appendChild(t),t},n.css=function(t,e,n){return"object"==typeof e?i(t,e):"undefined"==typeof n?r(t,e):o(t,e,n)},n.matches=function(t,e){return"undefined"!=typeof t.matches?t.matches(e):"undefined"!=typeof t.matchesSelector?t.matchesSelector(e):"undefined"!=typeof t.webkitMatchesSelector?t.webkitMatchesSelector(e):"undefined"!=typeof t.mozMatchesSelector?t.mozMatchesSelector(e):"undefined"!=typeof t.msMatchesSelector?t.msMatchesSelector(e):void 0},n.remove=function(t){"undefined"!=typeof t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)}},{}],4:[function(t,e){"use strict";var n=function(t){this.element=t,this.events={}};n.prototype.bind=function(t,e){"undefined"==typeof this.events[t]&&(this.events[t]=[]),this.events[t].push(e),this.element.addEventListener(t,e,!1)},n.prototype.unbind=function(t,e){var n="undefined"!=typeof e;this.events[t]=this.events[t].filter(function(r){return n&&r!==e?!0:(this.element.removeEventListener(t,r,!1),!1)},this)},n.prototype.unbindAll=function(){for(var t in this.events)this.unbind(t)};var r=function(){this.eventElements=[]};r.prototype.eventElement=function(t){var e=this.eventElements.filter(function(e){return e.element===t})[0];return"undefined"==typeof e&&(e=new n(t),this.eventElements.push(e)),e},r.prototype.bind=function(t,e,n){this.eventElement(t).bind(e,n)},r.prototype.unbind=function(t,e,n){this.eventElement(t).unbind(e,n)},r.prototype.unbindAll=function(){for(var t=0;t<this.eventElements.length;t++)this.eventElements[t].unbindAll()},r.prototype.once=function(t,e,n){var r=this.eventElement(t),o=function(t){r.unbind(e,o),n(t)};r.bind(e,o)},e.exports=r},{}],5:[function(t,e){"use strict";e.exports=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}}()},{}],6:[function(t,e,n){"use strict";var r=t("./class"),o=t("./dom");n.toInt=function(t){return"string"==typeof t?parseInt(t,10):~~t},n.clone=function(t){if(null===t)return null;if("object"==typeof t){var e={};for(var n in t)e[n]=this.clone(t[n]);return e}return t},n.extend=function(t,e){var n=this.clone(t);for(var r in e)n[r]=this.clone(e[r]);return n},n.isEditable=function(t){return o.matches(t,"input,[contenteditable]")||o.matches(t,"select,[contenteditable]")||o.matches(t,"textarea,[contenteditable]")||o.matches(t,"button,[contenteditable]")},n.removePsClasses=function(t){for(var e=r.list(t),n=0;n<e.length;n++){var o=e[n];0===o.indexOf("ps-")&&r.remove(t,o)}},n.outerWidth=function(t){return this.toInt(o.css(t,"width"))+this.toInt(o.css(t,"paddingLeft"))+this.toInt(o.css(t,"paddingRight"))+this.toInt(o.css(t,"borderLeftWidth"))+this.toInt(o.css(t,"borderRightWidth"))},n.startScrolling=function(t,e){r.add(t,"ps-in-scrolling"),"undefined"!=typeof e?r.add(t,"ps-"+e):(r.add(t,"ps-x"),r.add(t,"ps-y"))},n.stopScrolling=function(t,e){r.remove(t,"ps-in-scrolling"),"undefined"!=typeof e?r.remove(t,"ps-"+e):(r.remove(t,"ps-x"),r.remove(t,"ps-y"))},n.env={isWebKit:"WebkitAppearance"in document.documentElement.style,supportsTouch:"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,supportsIePointer:null!==window.navigator.msMaxTouchPoints}},{"./class":2,"./dom":3}],7:[function(t,e){"use strict";var n=t("./plugin/destroy"),r=t("./plugin/initialize"),o=t("./plugin/update");e.exports={initialize:r,update:o,destroy:n}},{"./plugin/destroy":9,"./plugin/initialize":17,"./plugin/update":20}],8:[function(t,e){"use strict";e.exports={wheelSpeed:1,wheelPropagation:!1,swipePropagation:!0,minScrollbarLength:null,maxScrollbarLength:null,useBothWheelAxes:!1,useKeyboard:!0,suppressScrollX:!1,suppressScrollY:!1,scrollXMarginOffset:0,scrollYMarginOffset:0}},{}],9:[function(t,e){"use strict";var n=t("../lib/dom"),r=t("../lib/helper"),o=t("./instances");e.exports=function(t){var e=o.get(t);e.event.unbindAll(),n.remove(e.scrollbarX),n.remove(e.scrollbarY),n.remove(e.scrollbarXRail),n.remove(e.scrollbarYRail),r.removePsClasses(t),o.remove(t)}},{"../lib/dom":3,"../lib/helper":6,"./instances":18}],10:[function(t,e){"use strict";function n(t,e){function n(t){return t.getBoundingClientRect()}var o=window.Event.prototype.stopPropagation.bind;e.event.bind(e.scrollbarY,"click",o),e.event.bind(e.scrollbarYRail,"click",function(o){var l=r.toInt(e.scrollbarYHeight/2),s=o.pageY-n(e.scrollbarYRail).top-l,a=e.containerHeight-e.scrollbarYHeight,c=s/a;0>c?c=0:c>1&&(c=1),t.scrollTop=(e.contentHeight-e.containerHeight)*c,i(t)}),e.event.bind(e.scrollbarX,"click",o),e.event.bind(e.scrollbarXRail,"click",function(o){var l=r.toInt(e.scrollbarXWidth/2),s=o.pageX-n(e.scrollbarXRail).left-l;console.log(o.pageX,e.scrollbarXRail.offsetLeft);var a=e.containerWidth-e.scrollbarXWidth,c=s/a;0>c?c=0:c>1&&(c=1),t.scrollLeft=(e.contentWidth-e.containerWidth)*c,i(t)})}var r=t("../../lib/helper"),o=t("../instances"),i=t("../update-geometry");e.exports=function(t){var e=o.get(t);n(t,e)}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19}],11:[function(t,e){"use strict";function n(t,e){function n(n){var o=r+n,l=e.containerWidth-e.scrollbarXWidth;e.scrollbarXLeft=0>o?0:o>l?l:o;var s=i.toInt(e.scrollbarXLeft*(e.contentWidth-e.containerWidth)/(e.containerWidth-e.scrollbarXWidth));t.scrollLeft=s}var r=null,l=null,a=function(e){n(e.pageX-l),s(t),e.stopPropagation(),e.preventDefault()},c=function(){i.stopScrolling(t,"x"),e.event.unbind(e.ownerDocument,"mousemove",a)};e.event.bind(e.scrollbarX,"mousedown",function(n){l=n.pageX,r=i.toInt(o.css(e.scrollbarX,"left")),i.startScrolling(t,"x"),e.event.bind(e.ownerDocument,"mousemove",a),e.event.once(e.ownerDocument,"mouseup",c),n.stopPropagation(),n.preventDefault()})}function r(t,e){function n(n){var o=r+n,l=e.containerHeight-e.scrollbarYHeight;e.scrollbarYTop=0>o?0:o>l?l:o;var s=i.toInt(e.scrollbarYTop*(e.contentHeight-e.containerHeight)/(e.containerHeight-e.scrollbarYHeight));t.scrollTop=s}var r=null,l=null,a=function(e){n(e.pageY-l),s(t),e.stopPropagation(),e.preventDefault()},c=function(){i.stopScrolling(t,"y"),e.event.unbind(e.ownerDocument,"mousemove",a)};e.event.bind(e.scrollbarY,"mousedown",function(n){l=n.pageY,r=i.toInt(o.css(e.scrollbarY,"top")),i.startScrolling(t,"y"),e.event.bind(e.ownerDocument,"mousemove",a),e.event.once(e.ownerDocument,"mouseup",c),n.stopPropagation(),n.preventDefault()})}var o=t("../../lib/dom"),i=t("../../lib/helper"),l=t("../instances"),s=t("../update-geometry");e.exports=function(t){var e=l.get(t);n(t,e),r(t,e)}},{"../../lib/dom":3,"../../lib/helper":6,"../instances":18,"../update-geometry":19}],12:[function(t,e){"use strict";function n(t,e){function n(n,r){var o=t.scrollTop;if(0===n){if(!e.scrollbarYActive)return!1;if(0===o&&r>0||o>=e.contentHeight-e.containerHeight&&0>r)return!e.settings.wheelPropagation}var i=t.scrollLeft;if(0===r){if(!e.scrollbarXActive)return!1;if(0===i&&0>n||i>=e.contentWidth-e.containerWidth&&n>0)return!e.settings.wheelPropagation}return!0}var o=!1;e.event.bind(t,"mouseenter",function(){o=!0}),e.event.bind(t,"mouseleave",function(){o=!1});var l=!1;e.event.bind(e.ownerDocument,"keydown",function(s){if((!s.isDefaultPrevented||!s.isDefaultPrevented())&&o){var a=document.activeElement?document.activeElement:e.ownerDocument.activeElement;if(a){for(;a.shadowRoot;)a=a.shadowRoot.activeElement;if(r.isEditable(a))return}var c=0,u=0;switch(s.which){case 37:c=-30;break;case 38:u=30;break;case 39:c=30;break;case 40:u=-30;break;case 33:u=90;break;case 32:case 34:u=-90;break;case 35:u=s.ctrlKey?-e.contentHeight:-e.containerHeight;break;case 36:u=s.ctrlKey?t.scrollTop:e.containerHeight;break;default:return}t.scrollTop=t.scrollTop-u,t.scrollLeft=t.scrollLeft+c,i(t),l=n(c,u),l&&s.preventDefault()}})}var r=t("../../lib/helper"),o=t("../instances"),i=t("../update-geometry");e.exports=function(t){var e=o.get(t);n(t,e)}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19}],13:[function(t,e){"use strict";function n(t,e){function n(n,r){var o=t.scrollTop;if(0===n){if(!e.scrollbarYActive)return!1;if(0===o&&r>0||o>=e.contentHeight-e.containerHeight&&0>r)return!e.settings.wheelPropagation}var i=t.scrollLeft;if(0===r){if(!e.scrollbarXActive)return!1;if(0===i&&0>n||i>=e.contentWidth-e.containerWidth&&n>0)return!e.settings.wheelPropagation}return!0}function o(t){var e=t.deltaX,n=-1*t.deltaY;return("undefined"==typeof e||"undefined"==typeof n)&&(e=-1*t.wheelDeltaX/6,n=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,n*=10),e!==e&&n!==n&&(e=0,n=t.wheelDelta),[e,n]}function l(e,n){var r=t.querySelector("textarea:hover");if(r){var o=r.scrollHeight-r.clientHeight;if(o>0&&!(0===r.scrollTop&&n>0||r.scrollTop===o&&0>n))return!0;var i=r.scrollLeft-r.clientWidth;if(i>0&&!(0===r.scrollLeft&&0>e||r.scrollLeft===i&&e>0))return!0}return!1}function s(s){if(r.env.isWebKit||!t.querySelector("select:focus")){var c=o(s),u=c[0],d=c[1];l(u,d)||(a=!1,e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(t.scrollTop=d?t.scrollTop-d*e.settings.wheelSpeed:t.scrollTop+u*e.settings.wheelSpeed,a=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(t.scrollLeft=u?t.scrollLeft+u*e.settings.wheelSpeed:t.scrollLeft-d*e.settings.wheelSpeed,a=!0):(t.scrollTop=t.scrollTop-d*e.settings.wheelSpeed,t.scrollLeft=t.scrollLeft+u*e.settings.wheelSpeed),i(t),a=a||n(u,d),a&&(s.stopPropagation(),s.preventDefault()))}}var a=!1;"undefined"!=typeof window.onwheel?e.event.bind(t,"wheel",s):"undefined"!=typeof window.onmousewheel&&e.event.bind(t,"mousewheel",s)}var r=t("../../lib/helper"),o=t("../instances"),i=t("../update-geometry");e.exports=function(t){var e=o.get(t);n(t,e)}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19}],14:[function(t,e){"use strict";function n(t,e){e.event.bind(t,"scroll",function(){o(t)})}var r=t("../instances"),o=t("../update-geometry");e.exports=function(t){var e=r.get(t);n(t,e)}},{"../instances":18,"../update-geometry":19}],15:[function(t,e){"use strict";function n(t,e){function n(){var t=window.getSelection?window.getSelection():document.getSelection?document.getSelection():"";return 0===t.toString().length?null:t.getRangeAt(0).commonAncestorContainer}function l(){a||(a=setInterval(function(){return o.get(t)?(t.scrollTop=t.scrollTop+c.top,t.scrollLeft=t.scrollLeft+c.left,void i(t)):void clearInterval(a)},50))}function s(){a&&(clearInterval(a),a=null),r.stopScrolling(t)}var a=null,c={top:0,left:0},u=!1;e.event.bind(e.ownerDocument,"selectionchange",function(){t.contains(n())?u=!0:(u=!1,s())}),e.event.bind(window,"mouseup",function(){u&&(u=!1,s())}),e.event.bind(window,"mousemove",function(e){if(u){var n={x:e.pageX,y:e.pageY},o={left:t.offsetLeft,right:t.offsetLeft+t.offsetWidth,top:t.offsetTop,bottom:t.offsetTop+t.offsetHeight};n.x<o.left+3?(c.left=-5,r.startScrolling(t,"x")):n.x>o.right-3?(c.left=5,r.startScrolling(t,"x")):c.left=0,n.y<o.top+3?(c.top=o.top+3-n.y<5?-5:-20,r.startScrolling(t,"y")):n.y>o.bottom-3?(c.top=n.y-o.bottom+3<5?5:20,r.startScrolling(t,"y")):c.top=0,0===c.top&&0===c.left?s():l()}})}var r=t("../../lib/helper"),o=t("../instances"),i=t("../update-geometry");e.exports=function(t){var e=o.get(t);n(t,e)}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19}],16:[function(t,e){"use strict";function n(t,e,n,i){function l(n,r){var o=t.scrollTop,i=t.scrollLeft,l=Math.abs(n),s=Math.abs(r);if(s>l){if(0>r&&o===e.contentHeight-e.containerHeight||r>0&&0===o)return!e.settings.swipePropagation}else if(l>s&&(0>n&&i===e.contentWidth-e.containerWidth||n>0&&0===i))return!e.settings.swipePropagation;return!0}function s(e,n){t.scrollTop=t.scrollTop-n,t.scrollLeft=t.scrollLeft-e,o(t)}function a(){w=!0}function c(){w=!1}function u(t){return t.targetTouches?t.targetTouches[0]:t}function d(t){return t.targetTouches&&1===t.targetTouches.length?!0:t.pointerType&&"mouse"!==t.pointerType&&t.pointerType!==t.MSPOINTER_TYPE_MOUSE?!0:!1}function p(t){if(d(t)){y=!0;var e=u(t);b.pageX=e.pageX,b.pageY=e.pageY,g=(new Date).getTime(),null!==m&&clearInterval(m),t.stopPropagation()}}function f(t){if(!w&&y&&d(t)){var e=u(t),n={pageX:e.pageX,pageY:e.pageY},r=n.pageX-b.pageX,o=n.pageY-b.pageY;s(r,o),b=n;var i=(new Date).getTime(),a=i-g;a>0&&(v.x=r/a,v.y=o/a,g=i),l(r,o)&&(t.stopPropagation(),t.preventDefault())}}function h(){!w&&y&&(y=!1,clearInterval(m),m=setInterval(function(){return r.get(t)?Math.abs(v.x)<.01&&Math.abs(v.y)<.01?void clearInterval(m):(s(30*v.x,30*v.y),v.x*=.8,void(v.y*=.8)):void clearInterval(m)},10))}var b={},g=0,v={},m=null,w=!1,y=!1;n&&(e.event.bind(window,"touchstart",a),e.event.bind(window,"touchend",c),e.event.bind(t,"touchstart",p),e.event.bind(t,"touchmove",f),e.event.bind(t,"touchend",h)),i&&(window.PointerEvent?(e.event.bind(window,"pointerdown",a),e.event.bind(window,"pointerup",c),e.event.bind(t,"pointerdown",p),e.event.bind(t,"pointermove",f),e.event.bind(t,"pointerup",h)):window.MSPointerEvent&&(e.event.bind(window,"MSPointerDown",a),e.event.bind(window,"MSPointerUp",c),e.event.bind(t,"MSPointerDown",p),e.event.bind(t,"MSPointerMove",f),e.event.bind(t,"MSPointerUp",h)))}var r=t("../instances"),o=t("../update-geometry");e.exports=function(t,e,o){var i=r.get(t);n(t,i,e,o)}},{"../instances":18,"../update-geometry":19}],17:[function(t,e){"use strict";var n=t("../lib/class"),r=t("../lib/helper"),o=t("./instances"),i=t("./update-geometry"),l=t("./handler/click-rail"),s=t("./handler/drag-scrollbar"),a=t("./handler/keyboard"),c=t("./handler/mouse-wheel"),u=t("./handler/native-scroll"),d=t("./handler/selection"),p=t("./handler/touch");e.exports=function(t,e){e="object"==typeof e?e:{},n.add(t,"ps-container");var f=o.add(t);f.settings=r.extend(f.settings,e),l(t),s(t),c(t),u(t),d(t),(r.env.supportsTouch||r.env.supportsIePointer)&&p(t,r.env.supportsTouch,r.env.supportsIePointer),f.settings.useKeyboard&&a(t),i(t)}},{"../lib/class":2,"../lib/helper":6,"./handler/click-rail":10,"./handler/drag-scrollbar":11,"./handler/keyboard":12,"./handler/mouse-wheel":13,"./handler/native-scroll":14,"./handler/selection":15,"./handler/touch":16,"./instances":18,"./update-geometry":19}],18:[function(t,e,n){"use strict";function r(t){var e=this;e.settings=d.clone(a),e.containerWidth=null,e.containerHeight=null,e.contentWidth=null,e.contentHeight=null,e.isRtl="rtl"===s.css(t,"direction"),e.event=new c,e.ownerDocument=t.ownerDocument||document,e.scrollbarXRail=s.appendTo(s.e("div","ps-scrollbar-x-rail"),t),e.scrollbarX=s.appendTo(s.e("div","ps-scrollbar-x"),e.scrollbarXRail),e.scrollbarXActive=null,e.scrollbarXWidth=null,e.scrollbarXLeft=null,e.scrollbarXBottom=d.toInt(s.css(e.scrollbarXRail,"bottom")),e.isScrollbarXUsingBottom=e.scrollbarXBottom===e.scrollbarXBottom,e.scrollbarXTop=e.isScrollbarXUsingBottom?null:d.toInt(s.css(e.scrollbarXRail,"top")),e.railBorderXWidth=d.toInt(s.css(e.scrollbarXRail,"borderLeftWidth"))+d.toInt(s.css(e.scrollbarXRail,"borderRightWidth")),e.railXMarginWidth=d.toInt(s.css(e.scrollbarXRail,"marginLeft"))+d.toInt(s.css(e.scrollbarXRail,"marginRight")),e.railXWidth=null,e.scrollbarYRail=s.appendTo(s.e("div","ps-scrollbar-y-rail"),t),e.scrollbarY=s.appendTo(s.e("div","ps-scrollbar-y"),e.scrollbarYRail),e.scrollbarYActive=null,e.scrollbarYHeight=null,e.scrollbarYTop=null,e.scrollbarYRight=d.toInt(s.css(e.scrollbarYRail,"right")),e.isScrollbarYUsingRight=e.scrollbarYRight===e.scrollbarYRight,e.scrollbarYLeft=e.isScrollbarYUsingRight?null:d.toInt(s.css(e.scrollbarYRail,"left")),e.scrollbarYOuterWidth=e.isRtl?d.outerWidth(e.scrollbarY):null,e.railBorderYWidth=d.toInt(s.css(e.scrollbarYRail,"borderTopWidth"))+d.toInt(s.css(e.scrollbarYRail,"borderBottomWidth")),e.railYMarginHeight=d.toInt(s.css(e.scrollbarYRail,"marginTop"))+d.toInt(s.css(e.scrollbarYRail,"marginBottom")),e.railYHeight=null}function o(t){return"undefined"==typeof t.dataset?t.getAttribute("data-ps-id"):t.dataset.psId}function i(t,e){"undefined"==typeof t.dataset?t.setAttribute("data-ps-id",e):t.dataset.psId=e}function l(t){"undefined"==typeof t.dataset?t.removeAttribute("data-ps-id"):delete t.dataset.psId}var s=t("../lib/dom"),a=t("./default-setting"),c=t("../lib/event-manager"),u=t("../lib/guid"),d=t("../lib/helper"),p={};n.add=function(t){var e=u();return i(t,e),p[e]=new r(t),p[e]},n.remove=function(t){delete p[o(t)],l(t)},n.get=function(t){return p[o(t)]}},{"../lib/dom":3,"../lib/event-manager":4,"../lib/guid":5,"../lib/helper":6,"./default-setting":8}],19:[function(t,e){"use strict";function n(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function r(t,e){var n={width:e.railXWidth};n.left=e.isRtl?t.scrollLeft+e.containerWidth-e.contentWidth:t.scrollLeft,e.isScrollbarXUsingBottom?n.bottom=e.scrollbarXBottom-t.scrollTop:n.top=e.scrollbarXTop+t.scrollTop,i.css(e.scrollbarXRail,n);var r={top:t.scrollTop,height:e.railYHeight};e.isScrollbarYUsingRight?r.right=e.isRtl?e.contentWidth-t.scrollLeft-e.scrollbarYRight-e.scrollbarYOuterWidth:e.scrollbarYRight-t.scrollLeft:r.left=e.isRtl?t.scrollLeft+2*e.containerWidth-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:e.scrollbarYLeft+t.scrollLeft,i.css(e.scrollbarYRail,r),i.css(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),i.css(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}var o=t("../lib/class"),i=t("../lib/dom"),l=t("../lib/helper"),s=t("./instances");e.exports=function(t){var e=s.get(t);e.containerWidth=t.clientWidth,e.containerHeight=t.clientHeight,e.contentWidth=t.scrollWidth,e.contentHeight=t.scrollHeight,t.contains(e.scrollbarXRail)||i.appendTo(e.scrollbarXRail,t),t.contains(e.scrollbarYRail)||i.appendTo(e.scrollbarYRail,t),!e.settings.suppressScrollX&&e.containerWidth+e.settings.scrollXMarginOffset<e.contentWidth?(e.scrollbarXActive=!0,e.railXWidth=e.containerWidth-e.railXMarginWidth,e.scrollbarXWidth=n(e,l.toInt(e.railXWidth*e.containerWidth/e.contentWidth)),e.scrollbarXLeft=l.toInt(t.scrollLeft*(e.railXWidth-e.scrollbarXWidth)/(e.contentWidth-e.containerWidth))):(e.scrollbarXActive=!1,e.scrollbarXWidth=0,e.scrollbarXLeft=0,t.scrollLeft=0),!e.settings.suppressScrollY&&e.containerHeight+e.settings.scrollYMarginOffset<e.contentHeight?(e.scrollbarYActive=!0,e.railYHeight=e.containerHeight-e.railYMarginHeight,e.scrollbarYHeight=n(e,l.toInt(e.railYHeight*e.containerHeight/e.contentHeight)),e.scrollbarYTop=l.toInt(t.scrollTop*(e.railYHeight-e.scrollbarYHeight)/(e.contentHeight-e.containerHeight))):(e.scrollbarYActive=!1,e.scrollbarYHeight=0,e.scrollbarYTop=0,t.scrollTop=0),e.scrollbarXLeft>=e.railXWidth-e.scrollbarXWidth&&(e.scrollbarXLeft=e.railXWidth-e.scrollbarXWidth),e.scrollbarYTop>=e.railYHeight-e.scrollbarYHeight&&(e.scrollbarYTop=e.railYHeight-e.scrollbarYHeight),r(t,e),o[e.scrollbarXActive?"add":"remove"](t,"ps-active-x"),o[e.scrollbarYActive?"add":"remove"](t,"ps-active-y")}},{"../lib/class":2,"../lib/dom":3,"../lib/helper":6,"./instances":18}],20:[function(t,e){"use strict";var n=t("../lib/dom"),r=t("./instances"),o=t("./update-geometry");e.exports=function(t){var e=r.get(t);n.css(e.scrollbarXRail,"display","none"),n.css(e.scrollbarYRail,"display","none"),o(t),n.css(e.scrollbarXRail,"display","block"),n.css(e.scrollbarYRail,"display","block")}},{"../lib/dom":3,"./instances":18,"./update-geometry":19}]},{},[1]);

/*! Summernote v0.6.9 | (c) 2013-2015 Alan Hong and other contributors | MIT license */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(window.jQuery)}(function(a){Array.prototype.reduce||(Array.prototype.reduce=function(a){var b,c=Object(this),d=c.length>>>0,e=0;if(2===arguments.length)b=arguments[1];else{for(;d>e&&!(e in c);)e++;if(e>=d)throw new TypeError("Reduce of empty array with no initial value");b=c[e++]}for(;d>e;e++)e in c&&(b=a(b,c[e],e,c));return b}),"function"!=typeof Array.prototype.filter&&(Array.prototype.filter=function(a){for(var b=Object(this),c=b.length>>>0,d=[],e=arguments.length>=2?arguments[1]:void 0,f=0;c>f;f++)if(f in b){var g=b[f];a.call(e,g,f,b)&&d.push(g)}return d});var b,c="function"==typeof define&&define.amd,d=function(b){var c="Comic Sans MS"===b?"Courier New":"Comic Sans MS",d=a("<div>").css({position:"absolute",left:"-9999px",top:"-9999px",fontSize:"200px"}).text("mmmmmmmmmwwwwwww").appendTo(document.body),e=d.css("fontFamily",c).width(),f=d.css("fontFamily",b+","+c).width();return d.remove(),e!==f},e=navigator.userAgent,f={isMac:navigator.appVersion.indexOf("Mac")>-1,isMSIE:/MSIE|Trident/i.test(e),isFF:/firefox/i.test(e),isWebkit:/webkit/i.test(e),isSafari:/safari/i.test(e),jqueryVersion:parseFloat(a.fn.jquery),isSupportAmd:c,hasCodeMirror:c?require.specified("CodeMirror"):!!window.CodeMirror,isFontInstalled:d,isW3CRangeSupport:!!document.createRange},g=function(){var b=function(a){return function(b){return a===b}},c=function(a,b){return a===b},d=function(a){return function(b,c){return b[a]===c[a]}},e=function(){return!0},f=function(){return!1},g=function(a){return function(){return!a.apply(a,arguments)}},h=function(a,b){return function(c){return a(c)&&b(c)}},i=function(a){return a},j=0,k=function(a){var b=++j+"";return a?a+b:b},l=function(b){var c=a(document);return{top:b.top+c.scrollTop(),left:b.left+c.scrollLeft(),width:b.right-b.left,height:b.bottom-b.top}},m=function(a){var b={};for(var c in a)a.hasOwnProperty(c)&&(b[a[c]]=c);return b},n=function(a,b){return b=b||"",b+a.split(".").map(function(a){return a.substring(0,1).toUpperCase()+a.substring(1)}).join("")};return{eq:b,eq2:c,peq2:d,ok:e,fail:f,self:i,not:g,and:h,uniqueId:k,rect2bnd:l,invertObject:m,namespaceToCamel:n}}(),h=function(){var b=function(a){return a[0]},c=function(a){return a[a.length-1]},d=function(a){return a.slice(0,a.length-1)},e=function(a){return a.slice(1)},f=function(a,b){for(var c=0,d=a.length;d>c;c++){var e=a[c];if(b(e))return e}},h=function(a,b){for(var c=0,d=a.length;d>c;c++)if(!b(a[c]))return!1;return!0},i=function(b,c){return-1!==a.inArray(c,b)},j=function(a,b){return b=b||g.self,a.reduce(function(a,c){return a+b(c)},0)},k=function(a){for(var b=[],c=-1,d=a.length;++c<d;)b[c]=a[c];return b},l=function(a,d){if(!a.length)return[];var f=e(a);return f.reduce(function(a,b){var e=c(a);return d(c(e),b)?e[e.length]=b:a[a.length]=[b],a},[[b(a)]])},m=function(a){for(var b=[],c=0,d=a.length;d>c;c++)a[c]&&b.push(a[c]);return b},n=function(a){for(var b=[],c=0,d=a.length;d>c;c++)i(b,a[c])||b.push(a[c]);return b},o=function(a,b){var c=a.indexOf(b);return-1===c?null:a[c+1]},p=function(a,b){var c=a.indexOf(b);return-1===c?null:a[c-1]};return{head:b,last:c,initial:d,tail:e,prev:p,next:o,find:f,contains:i,all:h,sum:j,from:k,clusterBy:l,compact:m,unique:n}}(),i=String.fromCharCode(160),j="\ufeff",k=function(){var b=function(b){return b&&a(b).hasClass("note-editable")},c=function(b){return b&&a(b).hasClass("note-control-sizing")},d=function(b){var c;if(b.hasClass("note-air-editor")){var d=h.last(b.attr("id").split("-"));return c=function(b){return function(){return a(b+d)}},{editor:function(){return b},holder:function(){return b.data("holder")},editable:function(){return b},popover:c("#note-popover-"),handle:c("#note-handle-"),dialog:c("#note-dialog-")}}return c=function(a){return function(){return b.find(a)}},{editor:function(){return b},holder:function(){return b.data("holder")},dropzone:c(".note-dropzone"),toolbar:c(".note-toolbar"),editable:c(".note-editable"),codable:c(".note-codable"),statusbar:c(".note-statusbar"),popover:c(".note-popover"),handle:c(".note-handle"),dialog:c(".note-dialog")}},e=function(b){var c=a(b).closest(".note-editor, .note-air-editor, .note-air-layout");if(!c.length)return null;var e;return e=c.is(".note-editor, .note-air-editor")?c:a("#note-editor-"+h.last(c.attr("id").split("-"))),d(e)},l=function(a){return a=a.toUpperCase(),function(b){return b&&b.nodeName.toUpperCase()===a}},m=function(a){return a&&3===a.nodeType},n=function(a){return a&&/^BR|^IMG|^HR/.test(a.nodeName.toUpperCase())},o=function(a){return b(a)?!1:a&&/^DIV|^P|^LI|^H[1-7]/.test(a.nodeName.toUpperCase())},p=l("LI"),q=function(a){return o(a)&&!p(a)},r=l("TABLE"),s=function(a){return!(w(a)||t(a)||o(a)||r(a)||v(a))},t=function(a){return a&&/^UL|^OL/.test(a.nodeName.toUpperCase())},u=function(a){return a&&/^TD|^TH/.test(a.nodeName.toUpperCase())},v=l("BLOCKQUOTE"),w=function(a){return u(a)||v(a)||b(a)},x=l("A"),y=function(a){return s(a)&&!!H(a,o)},z=function(a){return s(a)&&!H(a,o)},A=l("BODY"),B=function(a,b){return a.nextSibling===b||a.previousSibling===b},C=function(a,b){b=b||g.ok;var c=[];return a.previousSibling&&b(a.previousSibling)&&c.push(a.previousSibling),c.push(a),a.nextSibling&&b(a.nextSibling)&&c.push(a.nextSibling),c},D=f.isMSIE?"&nbsp;":"<br>",E=function(a){return m(a)?a.nodeValue.length:a.childNodes.length},F=function(a){var b=E(a);return 0===b?!0:m(a)||1!==b||a.innerHTML!==D?h.all(a.childNodes,m)&&""===a.innerHTML?!0:!1:!0},G=function(a){n(a)||E(a)||(a.innerHTML=D)},H=function(a,c){for(;a;){if(c(a))return a;if(b(a))break;a=a.parentNode}return null},I=function(a,c){for(a=a.parentNode;a&&1===E(a);){if(c(a))return a;if(b(a))break;a=a.parentNode}return null},J=function(a,c){c=c||g.fail;var d=[];return H(a,function(a){return b(a)||d.push(a),c(a)}),d},K=function(a,b){var c=J(a);return h.last(c.filter(b))},L=function(b,c){for(var d=J(b),e=c;e;e=e.parentNode)if(a.inArray(e,d)>-1)return e;return null},M=function(a,b){b=b||g.fail;for(var c=[];a&&!b(a);)c.push(a),a=a.previousSibling;return c},N=function(a,b){b=b||g.fail;for(var c=[];a&&!b(a);)c.push(a),a=a.nextSibling;return c},O=function(a,b){var c=[];return b=b||g.ok,function d(e){a!==e&&b(e)&&c.push(e);for(var f=0,g=e.childNodes.length;g>f;f++)d(e.childNodes[f])}(a),c},P=function(b,c){var d=b.parentNode,e=a("<"+c+">")[0];return d.insertBefore(e,b),e.appendChild(b),e},Q=function(a,b){var c=b.nextSibling,d=b.parentNode;return c?d.insertBefore(a,c):d.appendChild(a),a},R=function(b,c){return a.each(c,function(a,c){b.appendChild(c)}),b},S=function(a){return 0===a.offset},T=function(a){return a.offset===E(a.node)},U=function(a){return S(a)||T(a)},V=function(a,b){for(;a&&a!==b;){if(0!==X(a))return!1;a=a.parentNode}return!0},W=function(a,b){for(;a&&a!==b;){if(X(a)!==E(a.parentNode)-1)return!1;a=a.parentNode}return!0},X=function(a){for(var b=0;a=a.previousSibling;)b+=1;return b},Y=function(a){return!!(a&&a.childNodes&&a.childNodes.length)},Z=function(a,c){var d,e;if(0===a.offset){if(b(a.node))return null;d=a.node.parentNode,e=X(a.node)}else Y(a.node)?(d=a.node.childNodes[a.offset-1],e=E(d)):(d=a.node,e=c?0:a.offset-1);return{node:d,offset:e}},$=function(a,c){var d,e;if(E(a.node)===a.offset){if(b(a.node))return null;d=a.node.parentNode,e=X(a.node)+1}else Y(a.node)?(d=a.node.childNodes[a.offset],e=0):(d=a.node,e=c?E(a.node):a.offset+1);return{node:d,offset:e}},_=function(a,b){return a.node===b.node&&a.offset===b.offset},aa=function(a){if(m(a.node)||!Y(a.node)||F(a.node))return!0;var b=a.node.childNodes[a.offset-1],c=a.node.childNodes[a.offset];return b&&!n(b)||c&&!n(c)?!1:!0},ba=function(a,b){for(;a;){if(b(a))return a;a=Z(a)}return null},ca=function(a,b){for(;a;){if(b(a))return a;a=$(a)}return null},da=function(a){if(!m(a.node))return!1;var b=a.node.nodeValue.charAt(a.offset-1);return b&&" "!==b&&b!==i},ea=function(a,b,c,d){for(var e=a;e&&(c(e),!_(e,b));){var f=d&&a.node!==e.node&&b.node!==e.node;e=$(e,f)}},fa=function(b,c){var d=J(c,g.eq(b));return a.map(d,X).reverse()},ga=function(a,b){for(var c=a,d=0,e=b.length;e>d;d++)c=c.childNodes.length<=b[d]?c.childNodes[c.childNodes.length-1]:c.childNodes[b[d]];return c},ha=function(a,b){var c=b&&b.isSkipPaddingBlankHTML,d=b&&b.isNotSplitEdgePoint;if(U(a)&&(m(a.node)||d)){if(S(a))return a.node;if(T(a))return a.node.nextSibling}if(m(a.node))return a.node.splitText(a.offset);var e=a.node.childNodes[a.offset],f=Q(a.node.cloneNode(!1),a.node);return R(f,N(e)),c||(G(a.node),G(f)),f},ia=function(a,b,c){var d=J(b.node,g.eq(a));return d.length?1===d.length?ha(b,c):d.reduce(function(a,d){return a===b.node&&(a=ha(b,c)),ha({node:d,offset:a?k.position(a):E(d)},c)}):null},ja=function(a,b){var c,d,e=b?o:w,f=J(a.node,e),g=h.last(f)||a.node;e(g)?(c=f[f.length-2],d=g):(c=g,d=c.parentNode);var i=c&&ia(c,a,{isSkipPaddingBlankHTML:b,isNotSplitEdgePoint:b});return i||d!==a.node||(i=a.node.childNodes[a.offset]),{rightNode:i,container:d}},ka=function(a){return document.createElement(a)},la=function(a){return document.createTextNode(a)},ma=function(a,b){if(a&&a.parentNode){if(a.removeNode)return a.removeNode(b);var c=a.parentNode;if(!b){var d,e,f=[];for(d=0,e=a.childNodes.length;e>d;d++)f.push(a.childNodes[d]);for(d=0,e=f.length;e>d;d++)c.insertBefore(f[d],a)}c.removeChild(a)}},na=function(a,c){for(;a&&!b(a)&&c(a);){var d=a.parentNode;ma(a),a=d}},oa=function(a,b){if(a.nodeName.toUpperCase()===b.toUpperCase())return a;var c=ka(b);return a.style.cssText&&(c.style.cssText=a.style.cssText),R(c,h.from(a.childNodes)),Q(c,a),ma(a),c},pa=l("TEXTAREA"),qa=function(a,b){var c=pa(a[0])?a.val():a.html();return b?c.replace(/[\n\r]/g,""):c},ra=function(b,c){var d=qa(b);if(c){var e=/<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g;d=d.replace(e,function(a,b,c){c=c.toUpperCase();var d=/^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(c)&&!!b,e=/^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(c);return a+(d||e?"\n":"")}),d=a.trim(d)}return d};return{NBSP_CHAR:i,ZERO_WIDTH_NBSP_CHAR:j,blank:D,emptyPara:"<p>"+D+"</p>",makePredByNodeName:l,isEditable:b,isControlSizing:c,buildLayoutInfo:d,makeLayoutInfo:e,isText:m,isVoid:n,isPara:o,isPurePara:q,isInline:s,isBlock:g.not(s),isBodyInline:z,isBody:A,isParaInline:y,isList:t,isTable:r,isCell:u,isBlockquote:v,isBodyContainer:w,isAnchor:x,isDiv:l("DIV"),isLi:p,isBR:l("BR"),isSpan:l("SPAN"),isB:l("B"),isU:l("U"),isS:l("S"),isI:l("I"),isImg:l("IMG"),isTextarea:pa,isEmpty:F,isEmptyAnchor:g.and(x,F),isClosestSibling:B,withClosestSiblings:C,nodeLength:E,isLeftEdgePoint:S,isRightEdgePoint:T,isEdgePoint:U,isLeftEdgeOf:V,isRightEdgeOf:W,prevPoint:Z,nextPoint:$,isSamePoint:_,isVisiblePoint:aa,prevPointUntil:ba,nextPointUntil:ca,isCharPoint:da,walkPoint:ea,ancestor:H,singleChildAncestor:I,listAncestor:J,lastAncestor:K,listNext:N,listPrev:M,listDescendant:O,commonAncestor:L,wrap:P,insertAfter:Q,appendChildNodes:R,position:X,hasChildren:Y,makeOffsetPath:fa,fromOffsetPath:ga,splitTree:ia,splitPoint:ja,create:ka,createText:la,remove:ma,removeWhile:na,replace:oa,html:ra,value:qa}}(),l=function(){var b=function(a,b){var c,d,e=a.parentElement(),f=document.body.createTextRange(),g=h.from(e.childNodes);for(c=0;c<g.length;c++)if(!k.isText(g[c])){if(f.moveToElementText(g[c]),f.compareEndPoints("StartToStart",a)>=0)break;d=g[c]}if(0!==c&&k.isText(g[c-1])){var i=document.body.createTextRange(),j=null;i.moveToElementText(d||e),i.collapse(!d),j=d?d.nextSibling:e.firstChild;var l=a.duplicate();l.setEndPoint("StartToStart",i);for(var m=l.text.replace(/[\r\n]/g,"").length;m>j.nodeValue.length&&j.nextSibling;)m-=j.nodeValue.length,j=j.nextSibling;j.nodeValue;b&&j.nextSibling&&k.isText(j.nextSibling)&&m===j.nodeValue.length&&(m-=j.nodeValue.length,j=j.nextSibling),e=j,c=m}return{cont:e,offset:c}},c=function(a){var b=function(a,c){var d,e;if(k.isText(a)){var f=k.listPrev(a,g.not(k.isText)),i=h.last(f).previousSibling;d=i||a.parentNode,c+=h.sum(h.tail(f),k.nodeLength),e=!i}else{if(d=a.childNodes[c]||a,k.isText(d))return b(d,0);c=0,e=!1}return{node:d,collapseToStart:e,offset:c}},c=document.body.createTextRange(),d=b(a.node,a.offset);return c.moveToElementText(d.node),c.collapse(d.collapseToStart),c.moveStart("character",d.offset),c},d=function(b,e,i,j){this.sc=b,this.so=e,this.ec=i,this.eo=j;var l=function(){if(f.isW3CRangeSupport){var a=document.createRange();return a.setStart(b,e),a.setEnd(i,j),a}var d=c({node:b,offset:e});return d.setEndPoint("EndToEnd",c({node:i,offset:j})),d};this.getPoints=function(){return{sc:b,so:e,ec:i,eo:j}},this.getStartPoint=function(){return{node:b,offset:e}},this.getEndPoint=function(){return{node:i,offset:j}},this.select=function(){var a=l();if(f.isW3CRangeSupport){var b=document.getSelection();b.rangeCount>0&&b.removeAllRanges(),b.addRange(a)}else a.select();return this},this.normalize=function(){var a=function(a){return k.isVisiblePoint(a)||(a=k.isLeftEdgePoint(a)?k.nextPointUntil(a,k.isVisiblePoint):k.prevPointUntil(a,k.isVisiblePoint)),a},b=a(this.getStartPoint()),c=a(this.getEndPoint());return new d(b.node,b.offset,c.node,c.offset)},this.nodes=function(a,b){a=a||g.ok;var c=b&&b.includeAncestor,d=b&&b.fullyContains,e=this.getStartPoint(),f=this.getEndPoint(),i=[],j=[];return k.walkPoint(e,f,function(b){if(!k.isEditable(b.node)){var e;d?(k.isLeftEdgePoint(b)&&j.push(b.node),k.isRightEdgePoint(b)&&h.contains(j,b.node)&&(e=b.node)):e=c?k.ancestor(b.node,a):b.node,e&&a(e)&&i.push(e)}},!0),h.unique(i)},this.commonAncestor=function(){return k.commonAncestor(b,i)},this.expand=function(a){var c=k.ancestor(b,a),f=k.ancestor(i,a);if(!c&&!f)return new d(b,e,i,j);var g=this.getPoints();return c&&(g.sc=c,g.so=0),f&&(g.ec=f,g.eo=k.nodeLength(f)),new d(g.sc,g.so,g.ec,g.eo)},this.collapse=function(a){return a?new d(b,e,b,e):new d(i,j,i,j)},this.splitText=function(){var a=b===i,c=this.getPoints();return k.isText(i)&&!k.isEdgePoint(this.getEndPoint())&&i.splitText(j),k.isText(b)&&!k.isEdgePoint(this.getStartPoint())&&(c.sc=b.splitText(e),c.so=0,a&&(c.ec=c.sc,c.eo=j-e)),new d(c.sc,c.so,c.ec,c.eo)},this.deleteContents=function(){if(this.isCollapsed())return this;var b=this.splitText(),c=b.nodes(null,{fullyContains:!0}),e=k.prevPointUntil(b.getStartPoint(),function(a){return!h.contains(c,a.node)}),f=[];return a.each(c,function(a,b){var c=b.parentNode;e.node!==c&&1===k.nodeLength(c)&&f.push(c),k.remove(b,!1)}),a.each(f,function(a,b){k.remove(b,!1)}),new d(e.node,e.offset,e.node,e.offset).normalize()};var m=function(a){return function(){var c=k.ancestor(b,a);return!!c&&c===k.ancestor(i,a)}};this.isOnEditable=m(k.isEditable),this.isOnList=m(k.isList),this.isOnAnchor=m(k.isAnchor),this.isOnCell=m(k.isCell),this.isLeftEdgeOf=function(a){if(!k.isLeftEdgePoint(this.getStartPoint()))return!1;var b=k.ancestor(this.sc,a);return b&&k.isLeftEdgeOf(this.sc,b)},this.isCollapsed=function(){return b===i&&e===j},this.wrapBodyInlineWithPara=function(){if(k.isBodyContainer(b)&&k.isEmpty(b))return b.innerHTML=k.emptyPara,new d(b.firstChild,0,b.firstChild,0);if(k.isParaInline(b)||k.isPara(b))return this.normalize();var a;if(k.isInline(b)){var c=k.listAncestor(b,g.not(k.isInline));a=h.last(c),k.isInline(a)||(a=c[c.length-2]||b.childNodes[e])}else a=b.childNodes[e>0?e-1:0];var f=k.listPrev(a,k.isParaInline).reverse();if(f=f.concat(k.listNext(a.nextSibling,k.isParaInline)),f.length){var i=k.wrap(h.head(f),"p");k.appendChildNodes(i,h.tail(f))}return this.normalize()},this.insertNode=function(a){var b=this.wrapBodyInlineWithPara().deleteContents(),c=k.splitPoint(b.getStartPoint(),k.isInline(a));return c.rightNode?c.rightNode.parentNode.insertBefore(a,c.rightNode):c.container.appendChild(a),a},this.pasteHTML=function(b){var c=this,d=a("<div></div>").html(b)[0],e=h.from(d.childNodes);return this.wrapBodyInlineWithPara().deleteContents(),a.map(e.reverse(),function(a){return c.insertNode(a)}).reverse()},this.toString=function(){var a=l();return f.isW3CRangeSupport?a.toString():a.text},this.getWordRange=function(a){var b=this.getEndPoint();if(!k.isCharPoint(b))return this;var c=k.prevPointUntil(b,function(a){return!k.isCharPoint(a)});return a&&(b=k.nextPointUntil(b,function(a){return!k.isCharPoint(a)})),new d(c.node,c.offset,b.node,b.offset)},this.bookmark=function(a){return{s:{path:k.makeOffsetPath(a,b),offset:e},e:{path:k.makeOffsetPath(a,i),offset:j}}},this.paraBookmark=function(a){return{s:{path:h.tail(k.makeOffsetPath(h.head(a),b)),offset:e},e:{path:h.tail(k.makeOffsetPath(h.last(a),i)),offset:j}}},this.getClientRects=function(){var a=l();return a.getClientRects()}};return{create:function(a,c,e,g){if(arguments.length)2===arguments.length&&(e=a,g=c);else if(f.isW3CRangeSupport){var h=document.getSelection();if(!h||0===h.rangeCount)return null;if(k.isBody(h.anchorNode))return null;var i=h.getRangeAt(0);a=i.startContainer,c=i.startOffset,e=i.endContainer,g=i.endOffset}else{var j=document.selection.createRange(),l=j.duplicate();l.collapse(!1);var m=j;m.collapse(!0);var n=b(m,!0),o=b(l,!1);k.isText(n.node)&&k.isLeftEdgePoint(n)&&k.isTextNode(o.node)&&k.isRightEdgePoint(o)&&o.node.nextSibling===n.node&&(n=o),a=n.cont,c=n.offset,e=o.cont,g=o.offset}return new d(a,c,e,g)},createFromNode:function(a){var b=a,c=0,d=a,e=k.nodeLength(d);return k.isVoid(b)&&(c=k.listPrev(b).length-1,b=b.parentNode),k.isBR(d)?(e=k.listPrev(d).length-1,d=d.parentNode):k.isVoid(d)&&(e=k.listPrev(d).length,d=d.parentNode),this.create(b,c,d,e)},createFromNodeBefore:function(a){return this.createFromNode(a).collapse(!0)},createFromNodeAfter:function(a){return this.createFromNode(a).collapse()},createFromBookmark:function(a,b){var c=k.fromOffsetPath(a,b.s.path),e=b.s.offset,f=k.fromOffsetPath(a,b.e.path),g=b.e.offset;return new d(c,e,f,g)},createFromParaBookmark:function(a,b){var c=a.s.offset,e=a.e.offset,f=k.fromOffsetPath(h.head(b),a.s.path),g=k.fromOffsetPath(h.last(b),a.e.path);return new d(f,c,g,e)}}}(),m={version:"0.6.9",options:{width:null,height:null,minHeight:null,maxHeight:null,focus:!1,tabsize:4,styleWithSpan:!0,disableLinkTarget:!1,disableDragAndDrop:!1,disableResizeEditor:!1,shortcuts:!0,placeholder:!1,prettifyHtml:!0,iconPrefix:"fa fa-",icons:{font:{bold:"bold",italic:"italic",underline:"underline",clear:"eraser",height:"text-height",strikethrough:"strikethrough",superscript:"superscript",subscript:"subscript"},image:{image:"picture-o",floatLeft:"align-left",floatRight:"align-right",floatNone:"align-justify",shapeRounded:"square",shapeCircle:"circle-o",shapeThumbnail:"picture-o",shapeNone:"times",remove:"trash-o"},link:{link:"link",unlink:"unlink",edit:"edit"},table:{table:"table"},hr:{insert:"minus"},style:{style:"magic"},lists:{unordered:"list-ul",ordered:"list-ol"},options:{help:"question",fullscreen:"arrows-alt",codeview:"code"},paragraph:{paragraph:"align-left",outdent:"outdent",indent:"indent",left:"align-left",center:"align-center",right:"align-right",justify:"align-justify"},color:{recent:"font"},history:{undo:"undo",redo:"repeat"},misc:{check:"check"}},codemirror:{mode:"text/html",htmlMode:!0,lineNumbers:!0},lang:"en-US",direction:null,toolbar:[["style",["style"]],["font",["bold","italic","underline","clear"]],["fontname",["fontname"]],["fontsize",["fontsize"]],["color",["color"]],["para",["ul","ol","paragraph"]],["height",["height"]],["table",["table"]],["insert",["link","picture","hr"]],["view",["fullscreen","codeview"]],["help",["help"]]],plugin:{},airMode:!1,airPopover:[["color",["color"]],["font",["bold","underline","clear"]],["para",["ul","paragraph"]],["table",["table"]],["insert",["link","picture"]]],styleTags:["p","blockquote","pre","h1","h2","h3","h4","h5","h6"],defaultFontName:"Helvetica Neue",fontNames:["Arial","Arial Black","Comic Sans MS","Courier New","Helvetica Neue","Helvetica","Impact","Lucida Grande","Tahoma","Times New Roman","Verdana"],fontNamesIgnoreCheck:[],fontSizes:["8","9","10","11","12","14","18","24","36"],colors:[["#000000","#424242","#636363","#9C9C94","#CEC6CE","#EFEFEF","#F7F7F7","#FFFFFF"],["#FF0000","#FF9C00","#FFFF00","#00FF00","#00FFFF","#0000FF","#9C00FF","#FF00FF"],["#F7C6CE","#FFE7CE","#FFEFC6","#D6EFD6","#CEDEE7","#CEE7F7","#D6D6E7","#E7D6DE"],["#E79C9C","#FFC69C","#FFE79C","#B5D6A5","#A5C6CE","#9CC6EF","#B5A5D6","#D6A5BD"],["#E76363","#F7AD6B","#FFD663","#94BD7B","#73A5AD","#6BADDE","#8C7BC6","#C67BA5"],["#CE0000","#E79439","#EFC631","#6BA54A","#4A7B8C","#3984C6","#634AA5","#A54A7B"],["#9C0000","#B56308","#BD9400","#397B21","#104A5A","#085294","#311873","#731842"],["#630000","#7B3900","#846300","#295218","#083139","#003163","#21104A","#4A1031"]],lineHeights:["1.0","1.2","1.4","1.5","1.6","1.8","2.0","3.0"],insertTableMaxSize:{col:10,row:10},maximumImageFileSize:null,oninit:null,onfocus:null,onblur:null,onenter:null,onkeyup:null,onkeydown:null,onImageUpload:null,onImageUploadError:null,onMediaDelete:null,onToolbarClick:null,onsubmit:null,onCreateLink:function(a){return-1!==a.indexOf("@")&&-1===a.indexOf(":")&&(a="mailto:"+a),a},keyMap:{pc:{ENTER:"insertParagraph","CTRL+Z":"undo","CTRL+Y":"redo",TAB:"tab","SHIFT+TAB":"untab","CTRL+B":"bold","CTRL+I":"italic","CTRL+U":"underline","CTRL+SHIFT+S":"strikethrough","CTRL+BACKSLASH":"removeFormat","CTRL+SHIFT+L":"justifyLeft","CTRL+SHIFT+E":"justifyCenter","CTRL+SHIFT+R":"justifyRight","CTRL+SHIFT+J":"justifyFull","CTRL+SHIFT+NUM7":"insertUnorderedList","CTRL+SHIFT+NUM8":"insertOrderedList","CTRL+LEFTBRACKET":"outdent","CTRL+RIGHTBRACKET":"indent","CTRL+NUM0":"formatPara","CTRL+NUM1":"formatH1","CTRL+NUM2":"formatH2","CTRL+NUM3":"formatH3","CTRL+NUM4":"formatH4","CTRL+NUM5":"formatH5","CTRL+NUM6":"formatH6","CTRL+ENTER":"insertHorizontalRule","CTRL+K":"showLinkDialog"},mac:{ENTER:"insertParagraph","CMD+Z":"undo","CMD+SHIFT+Z":"redo",TAB:"tab","SHIFT+TAB":"untab","CMD+B":"bold","CMD+I":"italic","CMD+U":"underline","CMD+SHIFT+S":"strikethrough","CMD+BACKSLASH":"removeFormat","CMD+SHIFT+L":"justifyLeft","CMD+SHIFT+E":"justifyCenter","CMD+SHIFT+R":"justifyRight","CMD+SHIFT+J":"justifyFull","CMD+SHIFT+NUM7":"insertUnorderedList","CMD+SHIFT+NUM8":"insertOrderedList","CMD+LEFTBRACKET":"outdent","CMD+RIGHTBRACKET":"indent","CMD+NUM0":"formatPara","CMD+NUM1":"formatH1","CMD+NUM2":"formatH2","CMD+NUM3":"formatH3","CMD+NUM4":"formatH4","CMD+NUM5":"formatH5","CMD+NUM6":"formatH6","CMD+ENTER":"insertHorizontalRule","CMD+K":"showLinkDialog"}}},lang:{"en-US":{font:{bold:"Bold",italic:"Italic",underline:"Underline",clear:"Remove Font Style",height:"Line Height",name:"Font Family",strikethrough:"Strikethrough",subscript:"Subscript",superscript:"Superscript",size:"Font Size"},image:{image:"Picture",insert:"Insert Image",resizeFull:"Resize Full",resizeHalf:"Resize Half",resizeQuarter:"Resize Quarter",floatLeft:"Float Left",floatRight:"Float Right",floatNone:"Float None",shapeRounded:"Shape: Rounded",shapeCircle:"Shape: Circle",shapeThumbnail:"Shape: Thumbnail",shapeNone:"Shape: None",dragImageHere:"Drag image or text here",dropImage:"Drop image or Text",selectFromFiles:"Select from files",maximumFileSize:"Maximum file size",maximumFileSizeError:"Maximum file size exceeded.",url:"Image URL",remove:"Remove Image"},link:{link:"Link",insert:"Insert Link",unlink:"Unlink",edit:"Edit",textToDisplay:"Text to display",url:"To what URL should this link go?",openInNewWindow:"Open in new window"},table:{table:"Table"},hr:{insert:"Insert Horizontal Rule"},style:{style:"Style",normal:"Normal",blockquote:"Quote",pre:"Code",h1:"Header 1",h2:"Header 2",h3:"Header 3",h4:"Header 4",h5:"Header 5",h6:"Header 6"},lists:{unordered:"Unordered list",ordered:"Ordered list"},options:{help:"Help",fullscreen:"Full Screen",codeview:"Code View"},paragraph:{paragraph:"Paragraph",outdent:"Outdent",indent:"Indent",left:"Align left",center:"Align center",right:"Align right",justify:"Justify full"},color:{recent:"Recent Color",more:"More Color",background:"Background Color",foreground:"Foreground Color",transparent:"Transparent",setTransparent:"Set transparent",reset:"Reset",resetToDefault:"Reset to default"},shortcut:{shortcuts:"Keyboard shortcuts",close:"Close",textFormatting:"Text formatting",action:"Action",paragraphFormatting:"Paragraph formatting",documentStyle:"Document Style",extraKeys:"Extra keys"},history:{undo:"Undo",redo:"Redo"}}}},n=function(){var b=function(b){return a.Deferred(function(c){a.extend(new FileReader,{onload:function(a){var b=a.target.result;c.resolve(b)},onerror:function(){c.reject(this)}}).readAsDataURL(b)}).promise()},c=function(b,c){return a.Deferred(function(d){var e=a("<img>");e.one("load",function(){e.off("error abort"),d.resolve(e)}).one("error abort",function(){e.off("load").detach(),d.reject(e)}).css({display:"none"}).appendTo(document.body).attr({src:b,"data-filename":c})}).promise()};return{readFileAsDataURL:b,createImage:c}}(),o=function(){var a={BACKSPACE:8,TAB:9,ENTER:13,SPACE:32,NUM0:48,NUM1:49,NUM2:50,NUM3:51,NUM4:52,NUM5:53,NUM6:54,NUM7:55,NUM8:56,B:66,E:69,I:73,J:74,K:75,L:76,R:82,S:83,U:85,Y:89,Z:90,SLASH:191,LEFTBRACKET:219,BACKSLASH:220,RIGHTBRACKET:221};return{isEdit:function(a){return h.contains([8,9,13,32],a)},isMove:function(a){return h.contains([37,38,39,40],a)},nameFromCode:g.invertObject(a),code:a}}(),p=function(a){var b=[],c=-1,d=a[0],e=function(){var b=l.create(),c={s:{path:[],offset:0},e:{path:[],offset:0}};return{contents:a.html(),bookmark:b?b.bookmark(d):c}},f=function(b){null!==b.contents&&a.html(b.contents),null!==b.bookmark&&l.createFromBookmark(d,b.bookmark).select()};this.undo=function(){c>0&&(c--,f(b[c]))},this.redo=function(){b.length-1>c&&(c++,f(b[c]))},this.recordUndo=function(){c++,b.length>c&&(b=b.slice(0,c)),b.push(e())},this.recordUndo()},q=function(){var b=function(b,c){if(f.jqueryVersion<1.9){var d={};return a.each(c,function(a,c){d[c]=b.css(c)}),d}return b.css.call(b,c)};this.stylePara=function(b,c){a.each(b.nodes(k.isPara,{includeAncestor:!0}),function(b,d){a(d).css(c)})},this.styleNodes=function(b,c){b=b.splitText();var d=c&&c.nodeName||"SPAN",e=!(!c||!c.expandClosestSibling),f=!(!c||!c.onlyPartialContains);if(b.isCollapsed())return[b.insertNode(k.create(d))];var i=k.makePredByNodeName(d),j=a.map(b.nodes(k.isText,{fullyContains:!0}),function(a){return k.singleChildAncestor(a,i)||k.wrap(a,d)});if(e){if(f){var l=b.nodes();i=g.and(i,function(a){return h.contains(l,a)})}return a.map(j,function(b){var c=k.withClosestSiblings(b,i),d=h.head(c),e=h.tail(c);return a.each(e,function(a,b){k.appendChildNodes(d,b.childNodes),k.remove(b)}),h.head(c)})}return j},this.current=function(c,d){var e=a(k.isText(c.sc)?c.sc.parentNode:c.sc),f=["font-family","font-size","text-align","list-style-type","line-height"],g=b(e,f)||{};if(g["font-size"]=parseInt(g["font-size"],10),g["font-bold"]=document.queryCommandState("bold")?"bold":"normal",g["font-italic"]=document.queryCommandState("italic")?"italic":"normal",g["font-underline"]=document.queryCommandState("underline")?"underline":"normal",g["font-strikethrough"]=document.queryCommandState("strikeThrough")?"strikethrough":"normal",g["font-superscript"]=document.queryCommandState("superscript")?"superscript":"normal",g["font-subscript"]=document.queryCommandState("subscript")?"subscript":"normal",c.isOnList()){var h=["circle","disc","disc-leading-zero","square"],i=a.inArray(g["list-style-type"],h)>-1;g["list-style"]=i?"unordered":"ordered"}else g["list-style"]="none";var j=k.ancestor(c.sc,k.isPara);if(j&&j.style["line-height"])g["line-height"]=j.style.lineHeight;else{var l=parseInt(g["line-height"],10)/parseInt(g["font-size"],10);g["line-height"]=l.toFixed(1)}return g.image=k.isImg(d)&&d,g.anchor=c.isOnAnchor()&&k.ancestor(c.sc,k.isAnchor),g.ancestors=k.listAncestor(c.sc,k.isEditable),g.range=c,g}},r=function(){this.insertOrderedList=function(){this.toggleList("OL")},this.insertUnorderedList=function(){this.toggleList("UL")},this.indent=function(){var b=this,c=l.create().wrapBodyInlineWithPara(),d=c.nodes(k.isPara,{includeAncestor:!0}),e=h.clusterBy(d,g.peq2("parentNode"));a.each(e,function(c,d){var e=h.head(d);k.isLi(e)?b.wrapList(d,e.parentNode.nodeName):a.each(d,function(b,c){a(c).css("marginLeft",function(a,b){return(parseInt(b,10)||0)+25})})}),c.select()},this.outdent=function(){var b=this,c=l.create().wrapBodyInlineWithPara(),d=c.nodes(k.isPara,{includeAncestor:!0}),e=h.clusterBy(d,g.peq2("parentNode"));a.each(e,function(c,d){var e=h.head(d);k.isLi(e)?b.releaseList([d]):a.each(d,function(b,c){a(c).css("marginLeft",function(a,b){return b=parseInt(b,10)||0,b>25?b-25:""})})}),c.select()},this.toggleList=function(b){var c=this,d=l.create().wrapBodyInlineWithPara(),e=d.nodes(k.isPara,{includeAncestor:!0}),f=d.paraBookmark(e),i=h.clusterBy(e,g.peq2("parentNode"));if(h.find(e,k.isPurePara)){var j=[];a.each(i,function(a,d){j=j.concat(c.wrapList(d,b))}),e=j}else{var m=d.nodes(k.isList,{includeAncestor:!0}).filter(function(c){return!a.nodeName(c,b)});m.length?a.each(m,function(a,c){k.replace(c,b)}):e=this.releaseList(i,!0)}l.createFromParaBookmark(f,e).select()},this.wrapList=function(b,c){var d=h.head(b),e=h.last(b),f=k.isList(d.previousSibling)&&d.previousSibling,g=k.isList(e.nextSibling)&&e.nextSibling,i=f||k.insertAfter(k.create(c||"UL"),e);return b=a.map(b,function(a){return k.isPurePara(a)?k.replace(a,"LI"):a}),k.appendChildNodes(i,b),g&&(k.appendChildNodes(i,h.from(g.childNodes)),k.remove(g)),b},this.releaseList=function(b,c){var d=[];return a.each(b,function(b,e){var f=h.head(e),g=h.last(e),i=c?k.lastAncestor(f,k.isList):f.parentNode,j=i.childNodes.length>1?k.splitTree(i,{node:g.parentNode,offset:k.position(g)+1},{isSkipPaddingBlankHTML:!0}):null,l=k.splitTree(i,{node:f.parentNode,offset:k.position(f)},{isSkipPaddingBlankHTML:!0});e=c?k.listDescendant(l,k.isLi):h.from(l.childNodes).filter(k.isLi),(c||!k.isList(i.parentNode))&&(e=a.map(e,function(a){return k.replace(a,"P")})),a.each(h.from(e).reverse(),function(a,b){k.insertAfter(b,i)});var m=h.compact([i,l,j]);a.each(m,function(b,c){var d=[c].concat(k.listDescendant(c,k.isList));a.each(d.reverse(),function(a,b){k.nodeLength(b)||k.remove(b,!0)})}),d=d.concat(e)}),d}},s=function(){var b=new r;this.insertTab=function(a,b,c){var d=k.createText(new Array(c+1).join(k.NBSP_CHAR));b=b.deleteContents(),b.insertNode(d,!0),b=l.create(d,c),b.select()},this.insertParagraph=function(){var c=l.create();c=c.deleteContents(),c=c.wrapBodyInlineWithPara();var d,e=k.ancestor(c.sc,k.isPara);if(e){if(k.isEmpty(e)&&k.isLi(e))return void b.toggleList(e.parentNode.nodeName);d=k.splitTree(e,c.getStartPoint());var f=k.listDescendant(e,k.isEmptyAnchor);f=f.concat(k.listDescendant(d,k.isEmptyAnchor)),a.each(f,function(a,b){k.remove(b)})}else{var g=c.sc.childNodes[c.so];d=a(k.emptyPara)[0],g?c.sc.insertBefore(d,g):c.sc.appendChild(d)}l.create(d,0).normalize().select()}},t=function(){this.tab=function(a,b){var c=k.ancestor(a.commonAncestor(),k.isCell),d=k.ancestor(c,k.isTable),e=k.listDescendant(d,k.isCell),f=h[b?"prev":"next"](e,c);f&&l.create(f,0).select()},this.createTable=function(b,c){for(var d,e=[],f=0;b>f;f++)e.push("<td>"+k.blank+"</td>");d=e.join("");for(var g,h=[],i=0;c>i;i++)h.push("<tr>"+d+"</tr>");return g=h.join(""),a('<table class="table table-bordered">'+g+"</table>")[0]}},u="bogus",v=function(b){var c=new q,d=new t,e=new s,g=new r;this.createRange=function(a){return this.focus(a),l.create()},this.saveRange=function(a,b){this.focus(a),a.data("range",l.create()),b&&l.create().collapse().select()},this.saveNode=function(a){for(var b=[],c=0,d=a[0].childNodes.length;d>c;c++)b.push(a[0].childNodes[c]);a.data("childNodes",b)},this.restoreRange=function(a){var b=a.data("range");b&&(b.select(),this.focus(a))},this.restoreNode=function(a){a.html("");for(var b=a.data("childNodes"),c=0,d=b.length;d>c;c++)a[0].appendChild(b[c])},this.currentStyle=function(a){var b=l.create();return b?b.isOnEditable()&&c.current(b,a):!1};var i=function(a){var c=k.makeLayoutInfo(a).holder();b.bindCustomEvent(c,a.data("callbacks"),"before.command")(a.html(),a)},j=function(a){var c=k.makeLayoutInfo(a).holder();b.bindCustomEvent(c,a.data("callbacks"),"change")(a.html(),a)};this.undo=function(a){i(a),a.data("NoteHistory").undo(),j(a)},this.redo=function(a){i(a),a.data("NoteHistory").redo(),j(a)};for(var m=this,o=this.beforeCommand=function(a){
    i(a),m.focus(a)},p=this.afterCommand=function(a,b){a.data("NoteHistory").recordUndo(),b||j(a)},v=["bold","italic","underline","strikethrough","superscript","subscript","justifyLeft","justifyCenter","justifyRight","justifyFull","formatBlock","removeFormat","backColor","foreColor","insertHorizontalRule","fontName"],w=0,x=v.length;x>w;w++)this[v[w]]=function(a){return function(b,c){o(b),document.execCommand(a,!1,c),p(b,!0)}}(v[w]);this.tab=function(a,b){var c=this.createRange(a);c.isCollapsed()&&c.isOnCell()?d.tab(c):(o(a),e.insertTab(a,c,b.tabsize),p(a))},this.untab=function(a){var b=this.createRange(a);b.isCollapsed()&&b.isOnCell()&&d.tab(b,!0)},this.insertParagraph=function(a){o(a),e.insertParagraph(a),p(a)},this.insertOrderedList=function(a){o(a),g.insertOrderedList(a),p(a)},this.insertUnorderedList=function(a){o(a),g.insertUnorderedList(a),p(a)},this.indent=function(a){o(a),g.indent(a),p(a)},this.outdent=function(a){o(a),g.outdent(a),p(a)},this.insertImage=function(a,c,d){n.createImage(c,d).then(function(b){o(a),b.css({display:"",width:Math.min(a.width(),b.width())}),l.create().insertNode(b[0]),l.createFromNodeAfter(b[0]).select(),p(a)}).fail(function(){var c=k.makeLayoutInfo(a).holder();b.bindCustomEvent(c,a.data("callbacks"),"image.upload.error")()})},this.insertNode=function(a,b){o(a),l.create().insertNode(b),l.createFromNodeAfter(b).select(),p(a)},this.insertText=function(a,b){o(a);var c=l.create().insertNode(k.createText(b));l.create(c,k.nodeLength(c)).select(),p(a)},this.pasteHTML=function(a,b){o(a);var c=l.create().pasteHTML(b);l.createFromNodeAfter(h.last(c)).select(),p(a)},this.formatBlock=function(a,b){o(a),b=f.isMSIE?"<"+b+">":b,document.execCommand("FormatBlock",!1,b),p(a)},this.formatPara=function(a){o(a),this.formatBlock(a,"P"),p(a)};for(var w=1;6>=w;w++)this["formatH"+w]=function(a){return function(b){this.formatBlock(b,"H"+a)}}(w);this.fontSize=function(b,d){var e=l.create(),f=e.isCollapsed();if(f){var g=c.styleNodes(e),i=h.head(g);a(g).css({"font-size":d+"px"}),i&&!k.nodeLength(i)&&(i.innerHTML=k.ZERO_WIDTH_NBSP_CHAR,l.createFromNodeAfter(i.firstChild).select(),b.data(u,i))}else o(b),a(c.styleNodes(e)).css({"font-size":d+"px"}),p(b)},this.removeBogus=function(a){var b=a.data(u);if(b){var c=h.find(h.from(b.childNodes),k.isText),d=c.nodeValue.indexOf(k.ZERO_WIDTH_NBSP_CHAR);-1!==d&&c.deleteData(d,1),k.isEmpty(b)&&k.remove(b),a.removeData(u)}},this.lineHeight=function(a,b){o(a),c.stylePara(l.create(),{lineHeight:b}),p(a)},this.unlink=function(a){var b=this.createRange(a);if(b.isOnAnchor()){var c=k.ancestor(b.sc,k.isAnchor);b=l.createFromNode(c),b.select(),o(a),document.execCommand("unlink"),p(a)}},this.createLink=function(b,d,e){var f=d.url,g=d.text,i=d.newWindow,j=d.range,k=j.toString()!==g;o(b),e.onCreateLink&&(f=e.onCreateLink(f));var m=[];if(k){var n=j.insertNode(a("<A>"+g+"</A>")[0]);m.push(n)}else m=c.styleNodes(j,{nodeName:"A",expandClosestSibling:!0,onlyPartialContains:!0});a.each(m,function(b,c){a(c).attr("href",f),i?a(c).attr("target","_blank"):a(c).removeAttr("target")});var q=l.createFromNodeBefore(h.head(m)),r=q.getStartPoint(),s=l.createFromNodeAfter(h.last(m)),t=s.getEndPoint();l.create(r.node,r.offset,t.node,t.offset).select(),p(b)},this.getLinkInfo=function(b){this.focus(b);var c=l.create().expand(k.isAnchor),d=a(h.head(c.nodes(k.isAnchor)));return{range:c,text:c.toString(),isNewWindow:d.length?"_blank"===d.attr("target"):!1,url:d.length?d.attr("href"):""}},this.color=function(a,b){var c=JSON.parse(b),d=c.foreColor,e=c.backColor;o(a),d&&document.execCommand("foreColor",!1,d),e&&document.execCommand("backColor",!1,e),p(a)},this.insertTable=function(a,b){var c=b.split("x");o(a);var e=l.create().deleteContents();e.insertNode(d.createTable(c[0],c[1])),p(a)},this.floatMe=function(a,b,c){o(a),c.css("float",b),p(a)},this.imageShape=function(a,b,c){o(a),c.removeClass("img-rounded img-circle img-thumbnail"),b&&c.addClass(b),p(a)},this.resize=function(a,b,c){o(a),c.css({width:100*b+"%",height:""}),p(a)},this.resizeTo=function(a,b,c){var d;if(c){var e=a.y/a.x,f=b.data("ratio");d={width:f>e?a.x:a.y/f,height:f>e?a.x*f:a.y}}else d={width:a.x,height:a.y};b.css(d)},this.removeMedia=function(c,d,e){o(c),e.detach(),b.bindCustomEvent(a(),c.data("callbacks"),"media.delete")(e,c),p(c)},this.focus=function(a){a.focus(),f.isFF&&!l.create().isOnEditable()&&l.createFromNode(a[0]).normalize().collapse().select()},this.isEmpty=function(a){return k.isEmpty(a[0])||k.emptyPara===a.html()}},w=function(){this.update=function(b,c){var d=function(b,c){b.find(".dropdown-menu li a").each(function(){var b=a(this).data("value")+""==c+"";this.className=b?"checked":""})},e=function(a,c){var d=b.find(a);d.toggleClass("active",c())};if(c.image){var g=a(c.image);e('button[data-event="imageShape"][data-value="img-rounded"]',function(){return g.hasClass("img-rounded")}),e('button[data-event="imageShape"][data-value="img-circle"]',function(){return g.hasClass("img-circle")}),e('button[data-event="imageShape"][data-value="img-thumbnail"]',function(){return g.hasClass("img-thumbnail")}),e('button[data-event="imageShape"]:not([data-value])',function(){return!g.is(".img-rounded, .img-circle, .img-thumbnail")});var h=g.css("float");e('button[data-event="floatMe"][data-value="left"]',function(){return"left"===h}),e('button[data-event="floatMe"][data-value="right"]',function(){return"right"===h}),e('button[data-event="floatMe"][data-value="none"]',function(){return"left"!==h&&"right"!==h});var i=g.attr("style");return e('button[data-event="resize"][data-value="1"]',function(){return!!/(^|\s)(max-)?width\s*:\s*100%/.test(i)}),e('button[data-event="resize"][data-value="0.5"]',function(){return!!/(^|\s)(max-)?width\s*:\s*50%/.test(i)}),void e('button[data-event="resize"][data-value="0.25"]',function(){return!!/(^|\s)(max-)?width\s*:\s*25%/.test(i)})}var j=b.find(".note-fontname");if(j.length){var k=c["font-family"];if(k){for(var l=k.split(","),m=0,n=l.length;n>m&&(k=l[m].replace(/[\'\"]/g,"").replace(/\s+$/,"").replace(/^\s+/,""),!f.isFontInstalled(k));m++);j.find(".note-current-fontname").text(k),d(j,k)}}var o=b.find(".note-fontsize");o.find(".note-current-fontsize").text(c["font-size"]),d(o,parseFloat(c["font-size"]));var p=b.find(".note-height");d(p,parseFloat(c["line-height"])),e('button[data-event="bold"]',function(){return"bold"===c["font-bold"]}),e('button[data-event="italic"]',function(){return"italic"===c["font-italic"]}),e('button[data-event="underline"]',function(){return"underline"===c["font-underline"]}),e('button[data-event="strikethrough"]',function(){return"strikethrough"===c["font-strikethrough"]}),e('button[data-event="superscript"]',function(){return"superscript"===c["font-superscript"]}),e('button[data-event="subscript"]',function(){return"subscript"===c["font-subscript"]}),e('button[data-event="justifyLeft"]',function(){return"left"===c["text-align"]||"start"===c["text-align"]}),e('button[data-event="justifyCenter"]',function(){return"center"===c["text-align"]}),e('button[data-event="justifyRight"]',function(){return"right"===c["text-align"]}),e('button[data-event="justifyFull"]',function(){return"justify"===c["text-align"]}),e('button[data-event="insertUnorderedList"]',function(){return"unordered"===c["list-style"]}),e('button[data-event="insertOrderedList"]',function(){return"ordered"===c["list-style"]})},this.updateRecentColor=function(b,c,d){var e=a(b).closest(".note-color"),f=e.find(".note-recent-color"),g=JSON.parse(f.attr("data-value"));g[c]=d,f.attr("data-value",JSON.stringify(g));var h="backColor"===c?"background-color":"color";f.find("i").css(h,d)}},x=function(){var a=new w;this.update=function(b,c){a.update(b,c)},this.updateRecentColor=function(b,c,d){a.updateRecentColor(b,c,d)},this.activate=function(a){a.find("button").not('button[data-event="codeview"]').removeClass("disabled")},this.deactivate=function(a){a.find("button").not('button[data-event="codeview"]').addClass("disabled")},this.updateFullscreen=function(a,b){var c=a.find('button[data-event="fullscreen"]');c.toggleClass("active",b)},this.updateCodeview=function(a,b){var c=a.find('button[data-event="codeview"]');c.toggleClass("active",b),b?this.deactivate(a):this.activate(a)},this.get=function(a,b){var c=k.makeLayoutInfo(a).toolbar();return c.find("[data-name="+b+"]")},this.setButtonState=function(a,b,c){c=c===!1?!1:!0;var d=this.get(a,b);d.toggleClass("active",c)}},y=24,z=function(){var b=a(document);this.attach=function(a,b){b.disableResizeEditor||a.statusbar().on("mousedown",c)};var c=function(a){a.preventDefault(),a.stopPropagation();var c=k.makeLayoutInfo(a.target).editable(),d=c.offset().top-b.scrollTop(),e=k.makeLayoutInfo(a.currentTarget||a.target),f=e.editor().data("options");b.on("mousemove",function(a){var b=a.clientY-(d+y);b=f.minHeight>0?Math.max(b,f.minHeight):b,b=f.maxHeight>0?Math.min(b,f.maxHeight):b,c.height(b)}).one("mouseup",function(){b.off("mousemove")})}},A=function(){var b=new w,c=function(b,c){var d=a(b),e=c?d.offset():d.position(),f=d.outerHeight(!0);return{left:e.left,top:e.top+f}},d=function(a,b){a.css({display:"block",left:b.left,top:b.top})},e=20;this.update=function(f,i,j){b.update(f,i);var k=f.find(".note-link-popover");if(i.anchor){var l=k.find("a"),m=a(i.anchor).attr("href"),n=a(i.anchor).attr("target");l.attr("href",m).html(m),n?l.attr("target","_blank"):l.removeAttr("target"),d(k,c(i.anchor,j))}else k.hide();var o=f.find(".note-image-popover");i.image?d(o,c(i.image,j)):o.hide();var p=f.find(".note-air-popover");if(j&&!i.range.isCollapsed()){var q=h.last(i.range.getClientRects());if(q){var r=g.rect2bnd(q);d(p,{left:Math.max(r.left+r.width/2-e,0),top:r.top+r.height})}}else p.hide()},this.updateRecentColor=function(a,b,c){a.updateRecentColor(a,b,c)},this.hide=function(a){a.children().hide()}},B=function(b){var c=a(document),d=function(d){if(k.isControlSizing(d.target)){d.preventDefault(),d.stopPropagation();var e=k.makeLayoutInfo(d.target),f=e.handle(),g=e.popover(),h=e.editable(),i=e.editor(),j=f.find(".note-control-selection").data("target"),l=a(j),m=l.offset(),n=c.scrollTop(),o=i.data("options").airMode;c.on("mousemove",function(a){b.invoke("editor.resizeTo",{x:a.clientX-m.left,y:a.clientY-(m.top-n)},l,!a.shiftKey),b.invoke("handle.update",f,{image:j},o),b.invoke("popover.update",g,{image:j},o)}).one("mouseup",function(){c.off("mousemove"),b.invoke("editor.afterCommand",h)}),l.data("ratio")||l.data("ratio",l.height()/l.width())}};this.attach=function(a){a.handle().on("mousedown",d)},this.update=function(b,c,d){var e=b.find(".note-control-selection");if(c.image){var f=a(c.image),g=d?f.offset():f.position(),h={w:f.outerWidth(!0),h:f.outerHeight(!0)};e.css({display:"block",left:g.left,top:g.top,width:h.w,height:h.h}).data("target",c.image);var i=h.w+"x"+h.h;e.find(".note-control-selection-info").text(i)}else e.hide()},this.hide=function(a){a.children().hide()}},C=function(b){var c=a(window),d=a("html, body");this.toggle=function(a){var e=a.editor(),f=a.toolbar(),g=a.editable(),h=a.codable(),i=function(a){g.css("height",a.h),h.css("height",a.h),h.data("cmeditor")&&h.data("cmeditor").setsize(null,a.h)};e.toggleClass("fullscreen");var j=e.hasClass("fullscreen");j?(g.data("orgheight",g.css("height")),c.on("resize",function(){i({h:c.height()-f.outerHeight()})}).trigger("resize"),d.css("overflow","hidden")):(c.off("resize"),i({h:g.data("orgheight")}),d.css("overflow","visible")),b.invoke("toolbar.updateFullscreen",f,j)}};f.hasCodeMirror&&(f.isSupportAmd?require(["CodeMirror"],function(a){b=a}):b=window.CodeMirror);var D=function(a){this.sync=function(b){var c=a.invoke("codeview.isActivated",b);c&&f.hasCodeMirror&&b.codable().data("cmEditor").save()},this.isActivated=function(a){var b=a.editor();return b.hasClass("codeview")},this.toggle=function(a){this.isActivated(a)?this.deactivate(a):this.activate(a)},this.activate=function(c){var d=c.editor(),e=c.toolbar(),g=c.editable(),h=c.codable(),i=c.popover(),j=c.handle(),l=d.data("options");if(h.val(k.html(g,l.prettifyHtml)),h.height(g.height()),a.invoke("toolbar.updateCodeview",e,!0),a.invoke("popover.hide",i),a.invoke("handle.hide",j),d.addClass("codeview"),h.focus(),f.hasCodeMirror){var m=b.fromTextArea(h[0],l.codemirror);if(l.codemirror.tern){var n=new b.TernServer(l.codemirror.tern);m.ternServer=n,m.on("cursorActivity",function(a){n.updateArgHints(a)})}m.setSize(null,g.outerHeight()),h.data("cmEditor",m)}},this.deactivate=function(b){var c=b.holder(),d=b.editor(),e=b.toolbar(),g=b.editable(),h=b.codable(),i=d.data("options");if(f.hasCodeMirror){var j=h.data("cmEditor");h.val(j.getValue()),j.toTextArea()}var l=k.value(h,i.prettifyHtml)||k.emptyPara,m=g.html()!==l;g.html(l),g.height(i.height?h.height():"auto"),d.removeClass("codeview"),m&&a.bindCustomEvent(c,g.data("callbacks"),"change")(g.html(),g),g.focus(),a.invoke("toolbar.updateCodeview",e,!1)}},E=function(b){var c=a(document);this.attach=function(a,b){b.airMode||b.disableDragAndDrop?c.on("drop",function(a){a.preventDefault()}):this.attachDragAndDropEvent(a,b)},this.attachDragAndDropEvent=function(d,e){var f=a(),g=d.editor(),h=d.dropzone(),i=h.find(".note-dropzone-message");c.on("dragenter",function(a){var c=b.invoke("codeview.isActivated",d),j=g.width()>0&&g.height()>0;c||f.length||!j||(g.addClass("dragover"),h.width(g.width()),h.height(g.height()),i.text(e.langInfo.image.dragImageHere)),f=f.add(a.target)}).on("dragleave",function(a){f=f.not(a.target),f.length||g.removeClass("dragover")}).on("drop",function(){f=a(),g.removeClass("dragover")}),h.on("dragenter",function(){h.addClass("hover"),i.text(e.langInfo.image.dropImage)}).on("dragleave",function(){h.removeClass("hover"),i.text(e.langInfo.image.dragImageHere)}),h.on("drop",function(c){var d=c.originalEvent.dataTransfer,e=k.makeLayoutInfo(c.currentTarget||c.target);if(d&&d.files&&d.files.length)c.preventDefault(),e.editable().focus(),b.insertImages(e,d.files);else for(var f=function(){e.holder().summernote("insertNode",this)},g=0,h=d.types.length;h>g;g++){var i=d.types[g],j=d.getData(i);i.toLowerCase().indexOf("text")>-1?e.holder().summernote("pasteHTML",j):a(j).each(f)}}).on("dragover",!1)}},F=function(b){var c;this.attach=function(e){(window.clipboardData||f.isFF)&&(c=a("<div />").attr("contenteditable",!0).css({position:"absolute",left:-1e5,opacity:0}),e.editable().after(c),c.one("paste",d),e.editable().on("keydown",function(a){a.ctrlKey&&86===a.keyCode&&(b.invoke("saveRange",e.editable()),c&&c.focus())})),e.editable().on("paste",d)};var d=function(a){var d=a.originalEvent.clipboardData,e=k.makeLayoutInfo(a.currentTarget||a.target),f=e.editable();if(!d||!d.items||!d.items.length){var g=f.data("callbacks");if(!g.onImageUpload)return;return void setTimeout(function(){if(c){var a=c[0].firstChild;if(a){if(b.invoke("restoreRange",f),k.isImg(a)){for(var d=a.src,g=atob(d.split(",")[1]),h=new Uint8Array(g.length),i=0;i<g.length;i++)h[i]=g.charCodeAt(i);var j=new Blob([h],{type:"image/png"});j.name="clipboard.png",b.invoke("focus",f),b.insertImages(e,[j])}else b.invoke("pasteHTML",f,c.html());c.remove()}}},0)}var i=h.head(d.items),j="file"===i.kind&&-1!==i.type.indexOf("image/");j&&b.insertImages(e,[i.getAsFile()]),b.invoke("editor.afterCommand",f)}},G=function(b){var c=function(a,b){a.toggleClass("disabled",!b),a.attr("disabled",!b)},d=function(a,b){a.on("keypress",function(a){a.keyCode===o.code.ENTER&&b.trigger("click")})};this.showLinkDialog=function(b,e,f){return a.Deferred(function(a){var b=e.find(".note-link-dialog"),g=b.find(".note-link-text"),h=b.find(".note-link-url"),i=b.find(".note-link-btn"),j=b.find("input[type=checkbox]");b.one("shown.bs.modal",function(){g.val(f.text),g.on("input",function(){c(i,g.val()&&h.val()),f.text=g.val()}),f.url||(f.url=f.text||"http://",c(i,f.text)),h.on("input",function(){c(i,g.val()&&h.val()),f.text||g.val(h.val())}).val(f.url).trigger("focus").trigger("select"),d(h,i),d(g,i),j.prop("checked",f.newWindow),i.one("click",function(c){c.preventDefault(),a.resolve({range:f.range,url:h.val(),text:g.val(),newWindow:j.is(":checked")}),b.modal("hide")})}).one("hidden.bs.modal",function(){g.off("input keypress"),h.off("input keypress"),i.off("click"),"pending"===a.state()&&a.reject()}).modal("show")}).promise()},this.show=function(a){var c=a.editor(),d=a.dialog(),e=a.editable(),f=a.popover(),g=b.invoke("editor.getLinkInfo",e),h=c.data("options");b.invoke("editor.saveRange",e),this.showLinkDialog(e,d,g).then(function(a){b.invoke("editor.restoreRange",e),b.invoke("editor.createLink",e,a,h),b.invoke("popover.hide",f)}).fail(function(){b.invoke("editor.restoreRange",e)})}},H=function(b){var c=function(a,b){a.toggleClass("disabled",!b),a.attr("disabled",!b)},d=function(a,b){a.on("keypress",function(a){a.keyCode===o.code.ENTER&&b.trigger("click")})};this.show=function(a){var c=a.dialog(),d=a.editable();b.invoke("editor.saveRange",d),this.showImageDialog(d,c).then(function(c){b.invoke("editor.restoreRange",d),"string"==typeof c?b.invoke("editor.insertImage",d,c):b.insertImages(a,c)}).fail(function(){b.invoke("editor.restoreRange",d)})},this.showImageDialog=function(b,e){return a.Deferred(function(a){var b=e.find(".note-image-dialog"),f=e.find(".note-image-input"),g=e.find(".note-image-url"),h=e.find(".note-image-btn");b.one("shown.bs.modal",function(){f.replaceWith(f.clone().on("change",function(){a.resolve(this.files||this.value),b.modal("hide")}).val("")),h.click(function(c){c.preventDefault(),a.resolve(g.val()),b.modal("hide")}),g.on("keyup paste",function(a){var b;b="paste"===a.type?a.originalEvent.clipboardData.getData("text"):g.val(),c(h,b)}).val("").trigger("focus"),d(g,h)}).one("hidden.bs.modal",function(){f.off("change"),g.off("keyup paste keypress"),h.off("click"),"pending"===a.state()&&a.reject()}).modal("show")})}},I=function(b){this.showHelpDialog=function(b,c){return a.Deferred(function(a){var b=c.find(".note-help-dialog");b.one("hidden.bs.modal",function(){a.resolve()}).modal("show")}).promise()},this.show=function(a){var c=a.dialog(),d=a.editable();b.invoke("editor.saveRange",d,!0),this.showHelpDialog(d,c).then(function(){b.invoke("editor.restoreRange",d)})}},J=function(){var b=this.modules={editor:new v(this),toolbar:new x(this),statusbar:new z(this),popover:new A(this),handle:new B(this),fullscreen:new C(this),codeview:new D(this),dragAndDrop:new E(this),clipboard:new F(this),linkDialog:new G(this),imageDialog:new H(this),helpDialog:new I(this)};this.invoke=function(){var a=h.head(h.from(arguments)),b=h.tail(h.from(arguments)),c=a.split("."),d=c.length>1,e=d&&h.head(c),f=d?h.last(c):h.head(c),g=this.getModule(e),i=g[f];return i&&i.apply(g,b)},this.getModule=function(a){return this.modules[a]||this.modules.editor};var c=this.bindCustomEvent=function(a,b,c){return function(){var d=b[g.namespaceToCamel(c,"on")];return d&&d.apply(a[0],arguments),a.trigger("summernote."+c,arguments)}};this.insertImages=function(d,e){var f=d.editor(),g=d.editable(),h=d.holder(),i=g.data("callbacks"),j=f.data("options");i.onImageUpload?c(h,i,"image.upload")(e):a.each(e,function(a,d){var e=d.name;j.maximumImageFileSize&&j.maximumImageFileSize<d.size?c(h,i,"image.upload.error")(j.langInfo.image.maximumFileSizeError):n.readFileAsDataURL(d).then(function(a){b.editor.insertImage(g,a,e)}).fail(function(){c(h,i,"image.upload.error")(j.langInfo.image.maximumFileSizeError)})})};var d={showLinkDialog:function(a){b.linkDialog.show(a)},showImageDialog:function(a){b.imageDialog.show(a)},showHelpDialog:function(a){b.helpDialog.show(a)},fullscreen:function(a){b.fullscreen.toggle(a)},codeview:function(a){b.codeview.toggle(a)}},e=function(a){k.isImg(a.target)&&a.preventDefault()},i=function(a){var c=k.makeLayoutInfo(a.currentTarget||a.target);b.editor.removeBogus(c.editable()),j(a)},j=function(a){setTimeout(function(){var c=k.makeLayoutInfo(a.currentTarget||a.target),d=b.editor.currentStyle(a.target);if(d){var e=c.editor().data("options").airMode;e||b.toolbar.update(c.toolbar(),d),b.popover.update(c.popover(),d,e),b.handle.update(c.handle(),d,e)}},0)},l=function(a){var c=k.makeLayoutInfo(a.currentTarget||a.target);b.popover.hide(c.popover()),b.handle.hide(c.handle())},m=function(b){var c=a(b.target).closest("[data-event]");c.length&&b.preventDefault()},q=function(c){var e=a(c.target).closest("[data-event]");if(e.length){var f,g=e.attr("data-event"),i=e.attr("data-value"),l=e.attr("data-hide"),m=k.makeLayoutInfo(c.target);if(-1!==a.inArray(g,["resize","floatMe","removeMedia","imageShape"])){var n=m.handle().find(".note-control-selection");f=a(n.data("target"))}if(l&&e.parents(".popover").hide(),a.isFunction(a.summernote.pluginEvents[g]))a.summernote.pluginEvents[g](c,b.editor,m,i);else if(b.editor[g]){var o=m.editable();o.focus(),b.editor[g](o,i,f),c.preventDefault()}else d[g]&&(d[g].call(this,m),c.preventDefault());if(-1!==a.inArray(g,["backColor","foreColor"])){var p=m.editor().data("options",p),q=p.airMode?b.popover:b.toolbar;q.updateRecentColor(h.head(e),g,i)}j(c)}},r=18,s=function(b,c){var d,e=a(b.target.parentNode),f=e.next(),g=e.find(".note-dimension-picker-mousecatcher"),h=e.find(".note-dimension-picker-highlighted"),i=e.find(".note-dimension-picker-unhighlighted");if(void 0===b.offsetX){var j=a(b.target).offset();d={x:b.pageX-j.left,y:b.pageY-j.top}}else d={x:b.offsetX,y:b.offsetY};var k={c:Math.ceil(d.x/r)||1,r:Math.ceil(d.y/r)||1};h.css({width:k.c+"em",height:k.r+"em"}),g.attr("data-value",k.c+"x"+k.r),3<k.c&&k.c<c.insertTableMaxSize.col&&i.css({width:k.c+1+"em"}),3<k.r&&k.r<c.insertTableMaxSize.row&&i.css({height:k.r+1+"em"}),f.html(k.c+" x "+k.r)};this.bindKeyMap=function(c,e){var f=c.editor(),g=c.editable();g.on("keydown",function(h){var i=[];h.metaKey&&i.push("CMD"),h.ctrlKey&&!h.altKey&&i.push("CTRL"),h.shiftKey&&i.push("SHIFT");var j=o.nameFromCode[h.keyCode];j&&i.push(j);var k,l=i.join("+"),m=e[l];if(m){if(k=a.summernote.pluginEvents[l],a.isFunction(k)&&k(h,b.editor,c))return!1;k=a.summernote.pluginEvents[m],a.isFunction(k)?k(h,b.editor,c):b.editor[m]?(b.editor[m](g,f.data("options")),h.preventDefault()):d[m]&&(d[m].call(this,c),h.preventDefault())}else o.isEdit(h.keyCode)&&b.editor.afterCommand(g)})},this.attach=function(a,c){c.shortcuts&&this.bindKeyMap(a,c.keyMap[f.isMac?"mac":"pc"]),a.editable().on("mousedown",e),a.editable().on("keyup mouseup",i),a.editable().on("scroll",l),b.clipboard.attach(a,c),b.handle.attach(a,c),a.popover().on("click",q),a.popover().on("mousedown",m),b.dragAndDrop.attach(a,c),c.airMode||(a.toolbar().on("click",q),a.toolbar().on("mousedown",m),b.statusbar.attach(a,c));var d=c.airMode?a.popover():a.toolbar(),g=d.find(".note-dimension-picker-mousecatcher");g.css({width:c.insertTableMaxSize.col+"em",height:c.insertTableMaxSize.row+"em"}).on("mousemove",function(a){s(a,c)}),a.editor().data("options",c),f.isMSIE||setTimeout(function(){document.execCommand("styleWithCSS",0,c.styleWithSpan)},0);var j=new p(a.editable());a.editable().data("NoteHistory",j),a.editable().data("callbacks",{onInit:c.onInit,onFocus:c.onFocus,onBlur:c.onBlur,onKeydown:c.onKeydown,onKeyup:c.onKeyup,onMousedown:c.onMousedown,onEnter:c.onEnter,onPaste:c.onPaste,onBeforeCommand:c.onBeforeCommand,onChange:c.onChange,onImageUpload:c.onImageUpload,onImageUploadError:c.onImageUploadError,onMediaDelete:c.onMediaDelete,onToolbarClick:c.onToolbarClick}),k.isTextarea(h.head(a.holder()))&&a.holder().closest("form").submit(function(){a.holder().val(a.holder().code())})},this.attachCustomEvent=function(b,d){var e=b.holder(),g=b.editable(),i=g.data("callbacks");g.focus(c(e,i,"focus")),g.blur(c(e,i,"blur")),g.keydown(function(a){a.keyCode===o.code.ENTER&&c(e,i,"enter").call(this,a),c(e,i,"keydown").call(this,a)}),g.keyup(c(e,i,"keyup")),g.on("mousedown",c(e,i,"mousedown")),g.on("mouseup",c(e,i,"mouseup")),g.on("scroll",c(e,i,"scroll")),g.on("paste",c(e,i,"paste"));var j=f.isMSIE?"DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted":"input";g.on(j,function(){c(e,i,"change")(g.html(),g)}),d.airMode||(b.toolbar().click(c(e,i,"toolbar.click")),b.popover().click(c(e,i,"popover.click"))),k.isTextarea(h.head(e))&&e.closest("form").submit(function(a){c(e,i,"submit").call(this,a,e.code())}),c(e,i,"init")(b);for(var l=0,m=a.summernote.plugins.length;m>l;l++)a.isFunction(a.summernote.plugins[l].init)&&a.summernote.plugins[l].init(b)},this.detach=function(a,b){a.holder().off(),a.editable().off(),a.popover().off(),a.handle().off(),a.dialog().off(),b.airMode||(a.dropzone().off(),a.toolbar().off(),a.statusbar().off())}},K=function(){var b=function(a,b){var c=b.event,d=b.value,e=b.title,f=b.className,g=b.dropdown,h=b.hide;return(g?'<div class="btn-group'+(f?" "+f:"")+'">':"")+'<button type="button" class="btn btn-default btn-sm btn-small'+(!g&&f?" "+f:"")+(g?" dropdown-toggle":"")+'"'+(g?' data-toggle="dropdown"':"")+(e?' title="'+e+'"':"")+(c?' data-event="'+c+'"':"")+(d?" data-value='"+d+"'":"")+(h?" data-hide='"+h+"'":"")+' tabindex="-1">'+a+(g?' <span class="caret"></span>':"")+"</button>"+(g||"")+(g?"</div>":"")},c=function(a,c){var d='<i class="'+a+'"></i>';return b(d,c)},d=function(b,c){var d=a('<div class="'+b+' popover bottom in" style="display: none;"><div class="arrow"></div><div class="popover-content"></div></div>');return d.find(".popover-content").append(c),d},e=function(a,b,c,d){return'<div class="'+a+' modal" aria-hidden="false"><div class="modal-dialog"><div class="modal-content">'+(b?'<div class="modal-header"><button type="button" class="close" aria-hidden="true" tabindex="-1">&times;</button><h4 class="modal-title">'+b+"</h4></div>":"")+'<div class="modal-body">'+c+"</div>"+(d?'<div class="modal-footer">'+d+"</div>":"")+"</div></div></div>"},h={picture:function(a,b){return c(b.iconPrefix+b.icons.image.image,{event:"showImageDialog",title:a.image.image,hide:!0})},link:function(a,b){return c(b.iconPrefix+b.icons.link.link,{event:"showLinkDialog",title:a.link.link,hide:!0})},table:function(a,b){var d='<ul class="note-table dropdown-menu"><div class="note-dimension-picker"><div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"></div><div class="note-dimension-picker-highlighted"></div><div class="note-dimension-picker-unhighlighted"></div></div><div class="note-dimension-display"> 1 x 1 </div></ul>';return c(b.iconPrefix+b.icons.table.table,{title:a.table.table,dropdown:d})},style:function(a,b){var d=b.styleTags.reduce(function(b,c){var d=a.style["p"===c?"normal":c];return b+'<li><a data-event="formatBlock" href="#" data-value="'+c+'">'+("p"===c||"pre"===c?d:"<"+c+">"+d+"</"+c+">")+"</a></li>"},"");return c(b.iconPrefix+b.icons.style.style,{title:a.style.style,dropdown:'<ul class="dropdown-menu">'+d+"</ul>"})},fontname:function(a,c){var d=[],e=c.fontNames.reduce(function(a,b){return f.isFontInstalled(b)||-1!==c.fontNamesIgnoreCheck.indexOf(b)?(d.push(b),a+'<li><a data-event="fontName" href="#" data-value="'+b+'" style="font-family:\''+b+'\'"><i class="'+c.iconPrefix+c.icons.misc.check+'"></i> '+b+"</a></li>"):a},""),g=f.isFontInstalled(c.defaultFontName),h=g?c.defaultFontName:d[0],i='<span class="note-current-fontname">'+h+"</span>";return b(i,{title:a.font.name,className:"note-fontname",dropdown:'<ul class="dropdown-menu note-check">'+e+"</ul>"})},fontsize:function(a,c){var d=c.fontSizes.reduce(function(a,b){return a+'<li><a data-event="fontSize" href="#" data-value="'+b+'"><i class="'+c.iconPrefix+c.icons.misc.check+'"></i> '+b+"</a></li>"},""),e='<span class="note-current-fontsize">11</span>';return b(e,{title:a.font.size,className:"note-fontsize",dropdown:'<ul class="dropdown-menu note-check">'+d+"</ul>"})},color:function(a,c){var d='<i class="'+c.iconPrefix+c.icons.color.recent+'" style="color:black;background-color:yellow;"></i>',e=b(d,{className:"note-recent-color",title:a.color.recent,event:"color",value:'{"backColor":"yellow"}'}),f='<ul class="dropdown-menu"><li><div class="btn-group"><div class="note-palette-title">'+a.color.background+'</div><div class="note-color-reset" data-event="backColor" data-value="inherit" title="'+a.color.transparent+'">'+a.color.setTransparent+'</div><div class="note-color-palette" data-target-event="backColor"></div></div><div class="btn-group"><div class="note-palette-title">'+a.color.foreground+'</div><div class="note-color-reset" data-event="foreColor" data-value="inherit" title="'+a.color.reset+'">'+a.color.resetToDefault+'</div><div class="note-color-palette" data-target-event="foreColor"></div></div></li></ul>',g=b("",{title:a.color.more,dropdown:f});return e+g},bold:function(a,b){return c(b.iconPrefix+b.icons.font.bold,{event:"bold",title:a.font.bold})},italic:function(a,b){return c(b.iconPrefix+b.icons.font.italic,{event:"italic",title:a.font.italic})},underline:function(a,b){return c(b.iconPrefix+b.icons.font.underline,{event:"underline",title:a.font.underline})},strikethrough:function(a,b){return c(b.iconPrefix+b.icons.font.strikethrough,{event:"strikethrough",title:a.font.strikethrough})},superscript:function(a,b){return c(b.iconPrefix+b.icons.font.superscript,{event:"superscript",title:a.font.superscript})},subscript:function(a,b){return c(b.iconPrefix+b.icons.font.subscript,{event:"subscript",title:a.font.subscript})},clear:function(a,b){return c(b.iconPrefix+b.icons.font.clear,{event:"removeFormat",title:a.font.clear})},ul:function(a,b){return c(b.iconPrefix+b.icons.lists.unordered,{event:"insertUnorderedList",title:a.lists.unordered})},ol:function(a,b){return c(b.iconPrefix+b.icons.lists.ordered,{event:"insertOrderedList",title:a.lists.ordered})},paragraph:function(a,b){var d=c(b.iconPrefix+b.icons.paragraph.left,{title:a.paragraph.left,event:"justifyLeft"}),e=c(b.iconPrefix+b.icons.paragraph.center,{title:a.paragraph.center,event:"justifyCenter"}),f=c(b.iconPrefix+b.icons.paragraph.right,{title:a.paragraph.right,event:"justifyRight"}),g=c(b.iconPrefix+b.icons.paragraph.justify,{title:a.paragraph.justify,event:"justifyFull"}),h=c(b.iconPrefix+b.icons.paragraph.outdent,{title:a.paragraph.outdent,event:"outdent"}),i=c(b.iconPrefix+b.icons.paragraph.indent,{title:a.paragraph.indent,event:"indent"}),j='<div class="dropdown-menu"><div class="note-align btn-group">'+d+e+f+g+'</div><div class="note-list btn-group">'+i+h+"</div></div>";return c(b.iconPrefix+b.icons.paragraph.paragraph,{title:a.paragraph.paragraph,dropdown:j})},height:function(a,b){var d=b.lineHeights.reduce(function(a,c){return a+'<li><a data-event="lineHeight" href="#" data-value="'+parseFloat(c)+'"><i class="'+b.iconPrefix+b.icons.misc.check+'"></i> '+c+"</a></li>"},"");return c(b.iconPrefix+b.icons.font.height,{title:a.font.height,dropdown:'<ul class="dropdown-menu note-check">'+d+"</ul>"})},help:function(a,b){return c(b.iconPrefix+b.icons.options.help,{event:"showHelpDialog",title:a.options.help,hide:!0})},fullscreen:function(a,b){return c(b.iconPrefix+b.icons.options.fullscreen,{event:"fullscreen",title:a.options.fullscreen})},codeview:function(a,b){return c(b.iconPrefix+b.icons.options.codeview,{event:"codeview",title:a.options.codeview})},undo:function(a,b){return c(b.iconPrefix+b.icons.history.undo,{event:"undo",title:a.history.undo})},redo:function(a,b){return c(b.iconPrefix+b.icons.history.redo,{event:"redo",title:a.history.redo})},hr:function(a,b){return c(b.iconPrefix+b.icons.hr.insert,{event:"insertHorizontalRule",title:a.hr.insert})}},i=function(e,f){var g=function(){var a=c(f.iconPrefix+f.icons.link.edit,{title:e.link.edit,event:"showLinkDialog",hide:!0}),b=c(f.iconPrefix+f.icons.link.unlink,{title:e.link.unlink,event:"unlink"}),g='<a href="http://www.google.com" target="_blank">www.google.com</a>&nbsp;&nbsp;<div class="note-insert btn-group">'+a+b+"</div>";return d("note-link-popover",g)},i=function(){var a=b('<span class="note-fontsize-10">100%</span>',{title:e.image.resizeFull,event:"resize",value:"1"}),g=b('<span class="note-fontsize-10">50%</span>',{title:e.image.resizeHalf,event:"resize",value:"0.5"}),h=b('<span class="note-fontsize-10">25%</span>',{title:e.image.resizeQuarter,event:"resize",value:"0.25"}),i=c(f.iconPrefix+f.icons.image.floatLeft,{title:e.image.floatLeft,
    event:"floatMe",value:"left"}),j=c(f.iconPrefix+f.icons.image.floatRight,{title:e.image.floatRight,event:"floatMe",value:"right"}),k=c(f.iconPrefix+f.icons.image.floatNone,{title:e.image.floatNone,event:"floatMe",value:"none"}),l=c(f.iconPrefix+f.icons.image.shapeRounded,{title:e.image.shapeRounded,event:"imageShape",value:"img-rounded"}),m=c(f.iconPrefix+f.icons.image.shapeCircle,{title:e.image.shapeCircle,event:"imageShape",value:"img-circle"}),n=c(f.iconPrefix+f.icons.image.shapeThumbnail,{title:e.image.shapeThumbnail,event:"imageShape",value:"img-thumbnail"}),o=c(f.iconPrefix+f.icons.image.shapeNone,{title:e.image.shapeNone,event:"imageShape",value:""}),p=c(f.iconPrefix+f.icons.image.remove,{title:e.image.remove,event:"removeMedia",value:"none"}),q='<div class="btn-group">'+a+g+h+'</div><div class="btn-group">'+i+j+k+'</div><div class="btn-group">'+l+m+n+o+'</div><div class="btn-group">'+p+"</div>";return d("note-image-popover",q)},j=function(){for(var b=a("<div />"),c=0,g=f.airPopover.length;g>c;c++){for(var i=f.airPopover[c],j=a('<div class="note-'+i[0]+' btn-group">'),k=0,l=i[1].length;l>k;k++){var m=a(h[i[1][k]](e,f));m.attr("data-name",i[1][k]),j.append(m)}b.append(j)}return d("note-air-popover",b.children())},k=a('<div class="note-popover" />');return k.append(g()),k.append(i()),f.airMode&&k.append(j()),k},j=function(){return'<div class="note-handle"><div class="note-control-selection"><div class="note-control-selection-bg"></div><div class="note-control-holder note-control-nw"></div><div class="note-control-holder note-control-ne"></div><div class="note-control-holder note-control-sw"></div><div class="note-control-sizing note-control-se"></div><div class="note-control-selection-info"></div></div></div>'},l=function(a,b){var c="note-shortcut-col col-xs-6 note-shortcut-",d=[];for(var e in b)b.hasOwnProperty(e)&&d.push('<div class="'+c+'key">'+b[e].kbd+'</div><div class="'+c+'name">'+b[e].text+"</div>");return'<div class="note-shortcut-row row"><div class="'+c+'title col-xs-offset-6">'+a+'</div></div><div class="note-shortcut-row row">'+d.join('</div><div class="note-shortcut-row row">')+"</div>"},m=function(a){var b=[{kbd:"⌘ + B",text:a.font.bold},{kbd:"⌘ + I",text:a.font.italic},{kbd:"⌘ + U",text:a.font.underline},{kbd:"⌘ + \\",text:a.font.clear}];return l(a.shortcut.textFormatting,b)},n=function(a){var b=[{kbd:"⌘ + Z",text:a.history.undo},{kbd:"⌘ + ⇧ + Z",text:a.history.redo},{kbd:"⌘ + ]",text:a.paragraph.indent},{kbd:"⌘ + [",text:a.paragraph.outdent},{kbd:"⌘ + ENTER",text:a.hr.insert}];return l(a.shortcut.action,b)},o=function(a){var b=[{kbd:"⌘ + ⇧ + L",text:a.paragraph.left},{kbd:"⌘ + ⇧ + E",text:a.paragraph.center},{kbd:"⌘ + ⇧ + R",text:a.paragraph.right},{kbd:"⌘ + ⇧ + J",text:a.paragraph.justify},{kbd:"⌘ + ⇧ + NUM7",text:a.lists.ordered},{kbd:"⌘ + ⇧ + NUM8",text:a.lists.unordered}];return l(a.shortcut.paragraphFormatting,b)},p=function(a){var b=[{kbd:"⌘ + NUM0",text:a.style.normal},{kbd:"⌘ + NUM1",text:a.style.h1},{kbd:"⌘ + NUM2",text:a.style.h2},{kbd:"⌘ + NUM3",text:a.style.h3},{kbd:"⌘ + NUM4",text:a.style.h4},{kbd:"⌘ + NUM5",text:a.style.h5},{kbd:"⌘ + NUM6",text:a.style.h6}];return l(a.shortcut.documentStyle,b)},q=function(a,b){var c=b.extraKeys,d=[];for(var e in c)c.hasOwnProperty(e)&&d.push({kbd:e,text:c[e]});return l(a.shortcut.extraKeys,d)},r=function(a,b){var c='class="note-shortcut note-shortcut-col col-sm-6 col-xs-12"',d=["<div "+c+">"+n(a,b)+"</div><div "+c+">"+m(a,b)+"</div>","<div "+c+">"+p(a,b)+"</div><div "+c+">"+o(a,b)+"</div>"];return b.extraKeys&&d.push("<div "+c+">"+q(a,b)+"</div>"),'<div class="note-shortcut-row row">'+d.join('</div><div class="note-shortcut-row row">')+"</div>"},s=function(a){return a.replace(/⌘/g,"Ctrl").replace(/⇧/g,"Shift")},t={image:function(a,b){var c="";if(b.maximumImageFileSize){var d=Math.floor(Math.log(b.maximumImageFileSize)/Math.log(1024)),f=1*(b.maximumImageFileSize/Math.pow(1024,d)).toFixed(2)+" "+" KMGTP"[d]+"B";c="<small>"+a.image.maximumFileSize+" : "+f+"</small>"}var g='<div class="form-group row-fluid note-group-select-from-files"><label>'+a.image.selectFromFiles+'</label><input class="note-image-input" type="file" name="files" accept="image/*" multiple="multiple" />'+c+'</div><div class="form-group row-fluid"><label>'+a.image.url+'</label><input class="note-image-url form-control span12" type="text" /></div>',h='<button href="#" class="btn btn-primary note-image-btn disabled" disabled>'+a.image.insert+"</button>";return e("note-image-dialog",a.image.insert,g,h)},link:function(a,b){var c='<div class="form-group row-fluid"><label>'+a.link.textToDisplay+'</label><input class="note-link-text form-control span12" type="text" /></div><div class="form-group row-fluid"><label>'+a.link.url+'</label><input class="note-link-url form-control span12" type="text" value="http://" /></div>'+(b.disableLinkTarget?"":'<div class="checkbox"><label><input type="checkbox" checked> '+a.link.openInNewWindow+"</label></div>"),d='<button href="#" class="btn btn-primary note-link-btn disabled" disabled>'+a.link.insert+"</button>";return e("note-link-dialog",a.link.insert,c,d)},help:function(a,b){var c='<a class="modal-close pull-right" aria-hidden="true" tabindex="-1">'+a.shortcut.close+'</a><div class="title">'+a.shortcut.shortcuts+"</div>"+(f.isMac?r(a,b):s(r(a,b)))+'<p class="text-center"><a href="//summernote.org/" target="_blank">Summernote 0.6.9</a> · <a href="//github.com/summernote/summernote" target="_blank">Project</a> · <a href="//github.com/summernote/summernote/issues" target="_blank">Issues</a></p>';return e("note-help-dialog","",c,"")}},u=function(b,c){var d="";return a.each(t,function(a,e){d+=e(b,c)}),'<div class="note-dialog">'+d+"</div>"},v=function(){return'<div class="note-resizebar"><div class="note-icon-bar"></div><div class="note-icon-bar"></div><div class="note-icon-bar"></div></div>'},w=function(a){return f.isMac&&(a=a.replace("CMD","⌘").replace("SHIFT","⇧")),a.replace("BACKSLASH","\\").replace("SLASH","/").replace("LEFTBRACKET","[").replace("RIGHTBRACKET","]")},x=function(b,c,d){var e=g.invertObject(c),f=b.find("button");f.each(function(b,c){var d=a(c),f=e[d.data("event")];f&&d.attr("title",function(a,b){return b+" ("+w(f)+")"})}).tooltip({container:"body",trigger:"hover",placement:d||"top"}).on("click",function(){a(this).tooltip("hide")})},y=function(b,c){var d=c.colors;b.find(".note-color-palette").each(function(){for(var b=a(this),c=b.attr("data-target-event"),e=[],f=0,g=d.length;g>f;f++){for(var h=d[f],i=[],j=0,k=h.length;k>j;j++){var l=h[j];i.push(['<button type="button" class="note-color-btn" style="background-color:',l,';" data-event="',c,'" data-value="',l,'" title="',l,'" data-toggle="button" tabindex="-1"></button>'].join(""))}e.push('<div class="note-color-row">'+i.join("")+"</div>")}b.html(e.join(""))})};this.createLayoutByAirMode=function(b,c){var d=c.langInfo,e=c.keyMap[f.isMac?"mac":"pc"],h=g.uniqueId();b.addClass("note-air-editor note-editable"),b.attr({id:"note-editor-"+h,contentEditable:!0});var k=document.body,l=a(i(d,c));l.addClass("note-air-layout"),l.attr("id","note-popover-"+h),l.appendTo(k),x(l,e),y(l,c);var m=a(j());m.addClass("note-air-layout"),m.attr("id","note-handle-"+h),m.appendTo(k);var n=a(u(d,c));n.addClass("note-air-layout"),n.attr("id","note-dialog-"+h),n.find("button.close, a.modal-close").click(function(){a(this).closest(".modal").modal("hide")}),n.appendTo(k)},this.createLayoutByFrame=function(b,c){var d=c.langInfo,e=a('<div class="note-editor"></div>');c.width&&e.width(c.width),c.height>0&&a('<div class="note-statusbar">'+(c.disableResizeEditor?"":v())+"</div>").prependTo(e);var g=!b.is(":disabled"),l=a('<div class="note-editable" contentEditable="'+g+'"></div>').prependTo(e);c.height&&l.height(c.height),c.direction&&l.attr("dir",c.direction);var m=b.attr("placeholder")||c.placeholder;m&&l.attr("data-placeholder",m),l.html(k.html(b)),a('<textarea class="note-codable"></textarea>').prependTo(e);for(var n=a('<div class="note-toolbar btn-toolbar" />'),o=0,p=c.toolbar.length;p>o;o++){for(var q=c.toolbar[o][0],r=c.toolbar[o][1],s=a('<div class="note-'+q+' btn-group" />'),t=0,w=r.length;w>t;t++){var z=h[r[t]];if(a.isFunction(z)){var A=a(z(d,c));A.attr("data-name",r[t]),s.append(A)}}n.append(s)}n.prependTo(e);var B=c.keyMap[f.isMac?"mac":"pc"];y(n,c),x(n,B,"bottom");var C=a(i(d,c)).prependTo(e);y(C,c),x(C,B),a(j()).prependTo(e);var D=a(u(d,c)).prependTo(e);D.find("button.close, a.modal-close").click(function(){a(this).closest(".modal").modal("hide")}),a('<div class="note-dropzone"><div class="note-dropzone-message"></div></div>').prependTo(e),e.insertAfter(b),b.hide()},this.hasNoteEditor=function(a){return this.noteEditorFromHolder(a).length>0},this.noteEditorFromHolder=function(b){return b.hasClass("note-air-editor")?b:b.next().hasClass("note-editor")?b.next():a()},this.createLayout=function(a,b){b.airMode?this.createLayoutByAirMode(a,b):this.createLayoutByFrame(a,b)},this.layoutInfoFromHolder=function(a){var b=this.noteEditorFromHolder(a);if(b.length)return b.data("holder",a),k.buildLayoutInfo(b)},this.removeLayout=function(a,b,c){c.airMode?(a.removeClass("note-air-editor note-editable").removeAttr("id contentEditable"),b.popover().remove(),b.handle().remove(),b.dialog().remove()):(a.html(b.editable().html()),b.editor().remove(),a.show())},this.getTemplate=function(){return{button:b,iconButton:c,dialog:e}},this.addButtonInfo=function(a,b){h[a]=b},this.addDialogInfo=function(a,b){t[a]=b}};a.summernote=a.summernote||{},a.extend(a.summernote,m);var L=new K,M=new J;a.extend(a.summernote,{renderer:L,eventHandler:M,core:{agent:f,list:h,dom:k,range:l},pluginEvents:{},plugins:[]}),a.summernote.addPlugin=function(b){a.summernote.plugins.push(b),b.buttons&&a.each(b.buttons,function(a,b){L.addButtonInfo(a,b)}),b.dialogs&&a.each(b.dialogs,function(a,b){L.addDialogInfo(a,b)}),b.events&&a.each(b.events,function(b,c){a.summernote.pluginEvents[b]=c}),b.langs&&a.each(b.langs,function(b,c){a.summernote.lang[b]&&a.extend(a.summernote.lang[b],c)}),b.options&&a.extend(a.summernote.options,b.options)},a.fn.extend({summernote:function(){var b=a.type(h.head(arguments)),c="string"===b,d="object"===b,e=d?h.head(arguments):{};if(e=a.extend({},a.summernote.options,e),e.icons=a.extend({},a.summernote.options.icons,e.icons),e.langInfo=a.extend(!0,{},a.summernote.lang["en-US"],a.summernote.lang[e.lang]),!c&&d)for(var f=0,g=a.summernote.plugins.length;g>f;f++){var i=a.summernote.plugins[f];e.plugin[i.name]&&(a.summernote.plugins[f]=a.extend(!0,i,e.plugin[i.name]))}this.each(function(b,c){var d=a(c);if(!L.hasNoteEditor(d)){L.createLayout(d,e);var f=L.layoutInfoFromHolder(d);d.data("layoutInfo",f),M.attach(f,e),M.attachCustomEvent(f,e)}});var j=this.first();if(j.length){var k=L.layoutInfoFromHolder(j);if(c){var l=h.head(h.from(arguments)),m=h.tail(h.from(arguments)),n=[l,k.editable()].concat(m);return M.invoke.apply(M,n)}e.focus&&k.editable().focus()}return this},code:function(b){if(void 0===b){var c=this.first();if(!c.length)return;var d=L.layoutInfoFromHolder(c),e=d&&d.editable();if(e&&e.length){var f=M.invoke("codeview.isActivated",d);return M.invoke("codeview.sync",d),f?d.codable().val():d.editable().html()}return k.value(c)}return this.each(function(c,d){var e=L.layoutInfoFromHolder(a(d)),f=e&&e.editable();f&&f.html(b)}),this},destroy:function(){return this.each(function(b,c){var d=a(c);if(L.hasNoteEditor(d)){var e=L.layoutInfoFromHolder(d),f=e.editor().data("options");M.detach(e,f),L.removeLayout(d,e,f)}}),this}})});
window.smartlook||(function(d) {
    var o=smartlook=function(){ o.api.push(arguments)},s=d.getElementsByTagName('script')[0];
    var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
    c.charset='utf-8';c.src='//rec.getsmartlook.com/bundle.js';s.parentNode.insertBefore(c,s);
})(document);
smartlook('init', '868708765aae165262ab1bb8ae521c5572090ff4');
var INSLY = {};

INSLY.doPostSubmit = function ( form_url, form_data, confirm_message )
{
	if (confirm_message!=null)
	{
		if (!confirm(confirm_message)) return;
	}
	var form_tag=Math.floor(Math.random()*100000+1);
	$('body').append('<form id="form_'+form_tag+'" method="post" action="'+form_url+'"></form>');
	for (var k in form_data)
	{
		$('#form_'+form_tag).append('<input type="hidden" name="'+k+'" value="'+form_data[k]+'" />');
	}
	$('#form_'+form_tag)[0].submit();
};


var RELOADLOCALE = {};

RELOADLOCALE.reloadLocale = function( locale )
{
	var locale=$("#login_lang").val();
	var localedata=[];
	$('[data-locale^="insly"]').each(function(){
		localedata.push($(this).attr('data-locale'));
	});
	$.ajax(
	{
		url: "/js/reloadlocale",
		type: 'post',
		data: {locale:locale,data:localedata},
		success: function( data )
		{
			if (data!=null && data.status=='1' && data.locale!=null)
			{
				$('[data-locale^="insly"]').each(function(){
					$(this).text(data.locale.data[$(this).attr('data-locale')]);
				});
			}
		},
		error: function() {}
	});
}

