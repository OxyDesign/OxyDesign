!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():t()}(this,function(){function e(e){if(null===g){for(var t=e.length,n=0,s=document.getElementById(a),i="<ul>";t>n;)i+="<li>"+e[n]+"</li>",n++;i+="</ul>",s.innerHTML=i}else g(e)}function t(e){return e.replace(/<b[^>]*>(.*?)<\/b>/gi,function(e,t){return t}).replace(/class="(?!(tco-hidden|tco-display|tco-ellipsis))+.*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,"")}function n(e){for(var t=e.getElementsByTagName("a"),n=t.length-1;n>=0;n--)t[n].setAttribute("target","_blank")}function s(e,t){for(var n=[],s=new RegExp("(^| )"+t+"( |$)"),i=e.getElementsByTagName("*"),a=0,l=i.length;l>a;a++)s.test(i[a].className)&&n.push(i[a]);return n}function i(e){if(void 0!==e){var t=e.innerHTML.match(/data-srcset="([A-z0-9%_\.-]+)/i)[0];return decodeURIComponent(t).split('"')[1]}}var a="",l=20,r=!0,o=[],c=!1,d=!0,u=!0,m=null,p=!0,h=!0,g=null,w=!0,f=!1,v=!0,y="en",b=!0,k=!1,T=null,E={fetch:function(e){if(void 0===e.maxTweets&&(e.maxTweets=20),void 0===e.enableLinks&&(e.enableLinks=!0),void 0===e.showUser&&(e.showUser=!0),void 0===e.showTime&&(e.showTime=!0),void 0===e.dateFunction&&(e.dateFunction="default"),void 0===e.showRetweet&&(e.showRetweet=!0),void 0===e.customCallback&&(e.customCallback=null),void 0===e.showInteraction&&(e.showInteraction=!0),void 0===e.showImages&&(e.showImages=!1),void 0===e.linksInNewWindow&&(e.linksInNewWindow=!0),void 0===e.showPermalinks&&(e.showPermalinks=!0),void 0===e.dataOnly&&(e.dataOnly=!1),c)o.push(e);else{c=!0,a=e.domId,l=e.maxTweets,r=e.enableLinks,u=e.showUser,d=e.showTime,h=e.showRetweet,m=e.dateFunction,g=e.customCallback,w=e.showInteraction,f=e.showImages,v=e.linksInNewWindow,b=e.showPermalinks,k=e.dataOnly;var t=document.getElementsByTagName("head")[0];null!==T&&t.removeChild(T),T=document.createElement("script"),T.type="text/javascript",T.src="https://cdn.syndication.twimg.com/widgets/timelines/"+e.id+"?&lang="+(e.lang||y)+"&callback=twitterFetcher.callback&suppress_response_codes=true&rnd="+Math.random(),t.appendChild(T)}},callback:function(a){function g(e){var t=e.getElementsByTagName("img")[0];return t.src=t.getAttribute("data-src-2x"),e}var y=document.createElement("div");y.innerHTML=a.body,"undefined"==typeof y.getElementsByClassName&&(p=!1);var T=[],L=[],x=[],C=[],N=[],_=[],B=[],A=0;if(p)for(var I=y.getElementsByClassName("tweet");A<I.length;)I[A].getElementsByClassName("retweet-credit").length>0?N.push(!0):N.push(!1),(!N[A]||N[A]&&h)&&(T.push(I[A].getElementsByClassName("e-entry-title")[0]),_.push(I[A].getAttribute("data-tweet-id")),L.push(g(I[A].getElementsByClassName("p-author")[0])),x.push(I[A].getElementsByClassName("dt-updated")[0]),B.push(I[A].getElementsByClassName("permalink")[0]),void 0!==I[A].getElementsByClassName("inline-media")[0]?C.push(I[A].getElementsByClassName("inline-media")[0]):C.push(void 0)),A++;else for(var I=s(y,"tweet");A<I.length;)T.push(s(I[A],"e-entry-title")[0]),_.push(I[A].getAttribute("data-tweet-id")),L.push(g(s(I[A],"p-author")[0])),x.push(s(I[A],"dt-updated")[0]),B.push(s(I[A],"permalink")[0]),void 0!==s(I[A],"inline-media")[0]?C.push(s(I[A],"inline-media")[0]):C.push(void 0),s(I[A],"retweet-credit").length>0?N.push(!0):N.push(!1),A++;T.length>l&&(T.splice(l,T.length-l),L.splice(l,L.length-l),x.splice(l,x.length-l),N.splice(l,N.length-l),C.splice(l,C.length-l),B.splice(l,B.length-l));var M=[],A=T.length,H=0;if(k)for(;A>H;)M.push({tweet:T[H].innerHTML,author:L[H].innerHTML,time:x[H].innerText,image:i(C[H]),rt:N[H],tid:_[H],permalinkURL:B[H].href}),H++;else for(;A>H;){if("string"!=typeof m){var R=x[H].getAttribute("datetime"),q=new Date(x[H].getAttribute("datetime").replace(/-/g,"/").replace("T"," ").split("+")[0]),F=m(q,R);if(x[H].setAttribute("aria-label",F),T[H].innerText)if(p)x[H].innerText=F;else{var P=document.createElement("p"),S=document.createTextNode(F);P.appendChild(S),P.setAttribute("aria-label",F),x[H]=P}else x[H].textContent=F}var U="";r?(v&&(n(T[H]),u&&n(L[H])),u&&(U+='<div class="user">'+t(L[H].innerHTML)+"</div>"),U+='<p class="tweet">'+t(T[H].innerHTML)+"</p>",d&&(U+=b?'<p class="timePosted"><a href="'+B[H]+'">'+x[H].getAttribute("aria-label")+"</a></p>":'<p class="timePosted">'+x[H].getAttribute("aria-label")+"</p>")):T[H].innerText?(u&&(U+='<p class="user">'+L[H].innerText+"</p>"),U+='<p class="tweet">'+T[H].innerText+"</p>",d&&(U+='<p class="timePosted">'+x[H].innerText+"</p>")):(u&&(U+='<p class="user">'+L[H].textContent+"</p>"),U+='<p class="tweet">'+T[H].textContent+"</p>",d&&(U+='<p class="timePosted">'+x[H].textContent+"</p>")),w&&(U+='<p class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to='+_[H]+'" class="twitter_reply_icon"'+(v?' target="_blank">':">")+'Reply</a><a href="https://twitter.com/intent/retweet?tweet_id='+_[H]+'" class="twitter_retweet_icon"'+(v?' target="_blank">':">")+'Retweet</a><a href="https://twitter.com/intent/favorite?tweet_id='+_[H]+'" class="twitter_fav_icon"'+(v?' target="_blank">':">")+"Favorite</a></p>"),f&&void 0!==C[H]&&(U+='<div class="media"><img src="'+i(C[H])+'" alt="Image from tweet" /></div>'),M.push(U),H++}e(M),c=!1,o.length>0&&(E.fetch(o[0]),o.splice(0,1))}};return window.twitterFetcher=E,E}),window.onload=function(){var e=Array.prototype.slice.apply(document.querySelectorAll(".toggle")),t=document.querySelector(".wrapper");e.forEach(function(e){e.classList.add("closed")}),document.querySelector(".global-object").addEventListener("click",function(e){for(var t=!0,n=e.target;t;)n.classList.contains("toggle")?(n.classList.toggle("closed"),t=!1):"A"===n.nodeName||n===this?t=!1:n=n.parentElement}),document.querySelector(".bt-toggle").addEventListener("click",function(){var t=this.classList.contains("closed")?"remove":"add";this.classList[t]("closed"),e.forEach(function(e){e.classList[t]("closed")})}),document.querySelector(".toggle-links").addEventListener("click",function(){t.classList.toggle("show-links")}),document.querySelector(".toggle-twitter").addEventListener("click",function(){t.classList.toggle("show-twitter")}),twitterFetcher.fetch({id:"659879377698729984",dataOnly:!0,maxTweets:5,customCallback:function(e){var t="";e.forEach(function(e){t+="<li>"+(e.image?'<img src="'+e.image+'" />':"")+'<p class="tweet-content">'+e.tweet+'</p><p class="tweet-infos">'+e.time+"</p></li>"}),document.getElementById("tweets").innerHTML=t}})};