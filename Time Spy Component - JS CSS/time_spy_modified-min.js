document.addEventListener("DOMContentLoaded",function(){function e(e){var t={},o=e.getBoundingClientRect();return t.height=o.height,t.top=o.top,t.bottom=o.bottom,t}function t(e,t,n){var i=parseInt(r.style.top,10),d=t-n,g=i/d,w=l-l*g;s.innerHTML=o(w,"minutes",e),f.innerHTML=o(w,"seconds",e)}function o(e,t,o){var n=e/o;if("minutes"===t){return n-n%1}if("seconds"===t){var i=n%1*100,r=Math.floor(.6*i);return r<0&&(r=0),r}}function n(){var t=e(g),o=e(r),n=d.scrollHeight,i=g.offsetTop+t.height,s=o.height/2;t.top,g.offsetTop<u&&window.pageYOffset<window.innerHeight&&(console.log(window.innerHeight),console.log("1"),r.style.top="0px"),(o.top<c&&o.bottom<=t.bottom&&t.bottom>p||t.top<c&&t.bottom>u&&!(window.pageYOffset<window.innerHeight&&t.top<p&&g.offsetTop<c))&&(n-i<window.innerHeight&&window.pageYOffset<n-2*window.innerHeight||n-i>window.innerHeight)&&((!(g.offsetTop<c)||window.pageYOffset<window.innerHeight)&&g.offsetTop<c||(r.style.top=c-t.top+"px",console.log("2"))),t.top>c&&(r.style.top=0,console.log("3")),n-i<window.innerHeight&&window.pageYOffset>n-2*window.innerHeight&&(r.style.top=window.pageYOffset+c-g.offsetTop+.4*-(n-window.pageYOffset-2*window.innerHeight)+"px",console.log("4")),t.bottom<=u&&(console.log("5"),r.style.top=t.height-o.height+"px")}var i={};i.countWords=function(e){for(var t=[",",".",":",";","-","!","-","(",")","?","&","/",'"',"[","]","|","$","@","#","'"],o=t.length,n="",i=0;i<o;i++)for(;-1!==e.indexOf(t[i]);)var e=e.replace(t[i]," ");return n=e.split(" "),n.length};var r=document.getElementById("scrollspy"),s=r.querySelector(".minutes"),f=r.querySelector(".seconds"),d=document.body,g=r.parentElement,w=e(g),h=e(r),l=i.countWords(g.innerText),p=window.innerHeight/2,a=h.height/2,c=p-a,u=p+a,m="fast";if(1)if(0)var v=275;else var v=315;else var v=235;window.addEventListener("scroll",function(){n(),t(v,w.height,h.height)}),window.addEventListener("DOMContentLoaded",function(){n(),t(v,w.height,h.height)})});