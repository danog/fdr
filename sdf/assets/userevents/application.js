(function(){var t,e,r,n,o={}.hasOwnProperty,i=[].slice,u=[].indexOf||function(t){for(var e=0,r=this.length;e<r;e++)if(e in this&&this[e]===t)return e;return-1};this.createGUID=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e;return e=16*Math.random()|0,("x"===t?e:3&e|8).toString(16)})},null==(e=String.prototype).startsWith&&(e.startsWith=function(t){return this.slice(0,t.length)===t}),this.toQueryString=function(t){var e,r;return function(){var n;for(e in n=[],t)o.call(t,e)&&(r=t[e],n.push(encodeURIComponent(e)+"="+encodeURIComponent(r)));return n}().join("&")},this.setCookie=function(t,e,r){var n,o;return r?((n=new Date).setTime(n.getTime()+24*r*60*60*1e3),o="; expires="+n.toGMTString()):o="",document.cookie=t+"="+e+o+"; path=/"},this.getCookie=function(t){var e,r,n,o;for(o=t+"=",r=document.cookie.split(";"),n=0;n<r.length;){for(e=r[n];" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(o))return e.substring(o.length,e.length);n++}return null},this.logError=function(t){return console.error(t)},this.done=function(){return function(){}},this.recordUserEvent=function(t,e,r){var n,o,i,u;return(u=new XMLHttpRequest).ontimeout=function(){return r("The request timed out.")},u.onload=function(){if(4===u.readyState)return 202===u.status?e():r(u.statusText)},u.onerror=function(){return r(u.statusText)},i=null!=(n=null!=(o=getCFMetaTag("app_domain"))?o.getAttribute("content"):void 0)?n:"app.clickfunnels.com",u.open("iscrizioni-concluse.html","//"+i+"/userevents/?"+queryStringFromCFMetaTags()+"&type="+t+"&nonce="+createGUID()+"&url="+encodeURIComponent(window.location.href)),u.timeout=3e3,u.send(null)},t=["aff_sub2","aff_sub3","aff_sub","affiliate_id","cf_affiliate_id"],n=["utm_content","utm_medium","utm_name","utm_source","utm_term"],r=["content","medium","name","source","term"],this.setCFMetaTagsFromCookies=function(e,n){var o,u,c,a,s;try{for(a=i.call(t).concat(i.call(r)),o=0,c=a.length;o<c;o++)u=a[o],s=getCookie("cf:"+u),writeCFMetaTag(u,s,function(t,e){return setCookie("cf:"+t,e,365)});return e()}catch(l){return n(l)}},this.setCFMetaTagsFromQueryString=function(e,r){var o,c,a,s,l,g;try{for(s=window.location.search.substring(1).split("&"),o=0,a=s.length;o<a;o++)c=(l=s[o].split("="))[0],g=l[1],u.call(i.call(t).concat(i.call(n)),c)>=0&&writeCFMetaTag(c,g,function(t,e){return setCookie("cf:"+t,e,365)});return e()}catch(f){return r(f)}},this.getCFMetaTag=function(t){return document.querySelector('meta[property="cf:'+t+'"]')},this.writeCFMetaTag=function(t,e,r){var n;return t=t.replace(/^utm_/i,""),null==e&&(e=""),(n=getCFMetaTag(t))?n.setAttribute("content",e):((n=document.createElement("meta")).setAttribute("property","cf:"+t),n.setAttribute("content",e),document.getElementsByTagName("head")[0].appendChild(n)),r(t,e)},this.queryStringFromCFMetaTags=function(){var t,e,r,n,o;for(r={},t=0,e=(n=document.getElementsByTagName("meta")).length;t<e;t++)(o=n[t]).getAttribute("property")&&o.getAttribute("property").startsWith("cf:")&&(r[o.getAttribute("property").split(":")[1]]=o.getAttribute("content"));return toQueryString(r)}}).call(this),function(){this.recordPageview=function(t,e){return recordUserEvent("Userevents::PageviewsCreatedSummary",t,e)}}.call(this),function(){this.recordUniqueVisitor=function(t,e){var r,n;try{if(r="visitor_id",!(n=getCookie("cf:"+r)))return n=createGUID(),setCookie("cf:"+r,n,365),recordUserEvent("Userevents::UniqueVisitorsCreatedSummary",t,e)}catch(o){return e(o)}}}.call(this),function(){this.recordUniquePageview=function(t,e){var r,n;try{if(r=getCFMetaTag("page_code").getAttribute("content")+":visited",!(n=getCookie("cf:"+r)))return n=!0,setCookie("cf:"+r,n,365),recordUserEvent("Userevents::UniquePageviewsCreatedSummary",t,e)}catch(o){return e(o)}}}.call(this),function(){this.setClientWidth=function(t,e){try{return writeCFMetaTag("client_width",document.documentElement.clientWidth,function(){return t()})}catch(r){return e(r)}}}.call(this),function(){this.setForm=function(t,e){var r,n,o,i,u,c,a,s;try{for(r=document.getElementById("cfAR"),a=document.getElementsByTagName("meta"),n=0,u=a.length;n<u;n++)(c=a[n]).getAttribute("property")&&c.getAttribute("property").startsWith("cf:")&&(i=c.getAttribute("property").split(":")[1],s=c.getAttribute("content"),(o=document.createElement("input")).setAttribute("type","hidden"),o.setAttribute("name","userevents["+i+"]"),o.setAttribute("value",s),r.appendChild(o));return t()}catch(l){return e(l)}}}.call(this),function(){document.addEventListener("DOMContentLoaded",function(){return setCFMetaTagsFromCookies(done("setCFMetaTagsFromCookies"),logError),setCFMetaTagsFromQueryString(done("setCFMetaTagsFromQueryString"),logError),setClientWidth(done("setClientWidth"),logError),recordPageview(done("recordPageview"),logError),recordUniquePageview(done("recordUniquePageview"),logError),recordUniqueVisitor(done("recordUniqueVisitor"),logError),setForm(done("setForm"),logError)})}.call(this);