(()=>{var e={126:()=>{document.addEventListener("DOMContentLoaded",(function(e){window.innerWidth;const s=document.querySelector("body"),t=s.querySelector(".btn--hamburger"),i=s.querySelector(".nav"),c=i.querySelectorAll(".nav-list__link"),a=getComputedStyle(i),r=parseInt(a.height.slice(0,-2)),o=document.querySelectorAll("section[id]"),n=()=>{t.classList.toggle("is-active"),i.classList.toggle("is-active"),s.classList.toggle("menu-is-active")},l=()=>{window.matchMedia("(max-width: 768px)").matches?(t.addEventListener("click",n),window.scrollY&&0!==window.scrollY||i.classList.add("gradient")):(t.removeEventListener("click",n),i.classList.remove("gradient"),i.classList.remove("is-active"),t.classList.remove("is-active"),s.classList.remove("menu-is-active"))};l(),window.onresize=l,c.forEach((e=>{e.addEventListener("click",(function(){window.matchMedia("(max-width: 768px)").matches&&(i.classList.remove("is-active"),i.classList.remove("scroll-up"),t.classList.remove("is-active"),s.classList.remove("menu-is-active"))}))}));window.addEventListener("scroll",((e,s=100)=>()=>{const t=new Date;t-0>=s&&(e(),s=t)})((()=>{const e=window.scrollY,s=window.innerHeight;window.matchMedia("(min-width: 769px)").matches?(i.classList.remove("gradient"),e>s?(i.classList.add("is-fixed"),e>s+r&&i.classList.add("scroll-up")):i.classList.remove("is-fixed")):(i.classList.remove("scroll-up"),i.classList.remove("is-fixed"),e>s?(t.classList.add("is-fixed"),i.classList.remove("gradient")):(t.classList.remove("is-fixed"),i.classList.add("gradient"))),o.forEach((s=>{const t=s.offsetHeight,c=s.offsetTop-r,a=s.getAttribute("id");e>c&&e<=c+t?i.querySelector(".nav-list__link[href*="+a+"]").classList.add("active"):i.querySelector(".nav-list__link[href*="+a+"]").classList.remove("active")}))}),100));const d=s.querySelectorAll(".faq__name");d.forEach((function(e,s){e.addEventListener("click",(function(){d.forEach(((e,t)=>{t!==s&&e.classList.remove("is-active")})),this.classList.toggle("is-active")}))}))}))}},s={};function t(i){var c=s[i];if(void 0!==c)return c.exports;var a=s[i]={exports:{}};return e[i](a,a.exports,t),a.exports}t.n=e=>{var s=e&&e.__esModule?()=>e.default:()=>e;return t.d(s,{a:s}),s},t.d=(e,s)=>{for(var i in s)t.o(s,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:s[i]})},t.o=(e,s)=>Object.prototype.hasOwnProperty.call(e,s),(()=>{"use strict";t(126)})()})();