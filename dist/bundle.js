(()=>{var e={811:()=>{document.addEventListener("DOMContentLoaded",(function(e){window.innerWidth;const t=document.querySelector("body"),s=t.querySelector(".hamburger"),i=t.querySelector(".header__inner"),r=i.querySelectorAll(".header__link"),c=getComputedStyle(i),a=parseInt(c.height.slice(0,-2)),o=document.querySelectorAll("section[id]"),n=()=>{s.classList.toggle("is-active"),i.classList.toggle("is-active"),t.classList.toggle("menu-is-active")},l=()=>{window.matchMedia("(max-width: 768px)").matches?(s.addEventListener("click",n),window.scrollY&&0!==window.scrollY||i.classList.add("gradient")):(s.removeEventListener("click",n),i.classList.remove("gradient"))};l(),window.onresize=l,r.forEach((e=>{e.addEventListener("click",(function(){window.matchMedia("(max-width: 768px)").matches&&(i.classList.remove("is-active"),i.classList.remove("scroll-up"),s.classList.remove("is-active"),t.classList.remove("menu-is-active"))}))}));window.addEventListener("scroll",((e,t=100)=>()=>{const s=new Date;s-0>=t&&(e(),t=s)})((()=>{const e=window.scrollY,t=window.innerHeight;window.matchMedia("(min-width: 769px)").matches?(i.classList.remove("gradient"),e>t?(i.classList.add("is-fixed"),e>t+a?i.classList.add("scroll-up"):i.classList.remove("scroll-up")):i.classList.remove("is-fixed")):e>t?(s.classList.add("is-fixed"),i.classList.remove("gradient")):(s.classList.remove("is-fixed"),i.classList.add("gradient")),o.forEach((t=>{const s=t.offsetHeight,r=t.offsetTop-a,c=t.getAttribute("id");e>r&&e<=r+s?i.querySelector(".header__link[href*="+c+"]").classList.add("active"):i.querySelector(".header__link[href*="+c+"]").classList.remove("active")}))}),100));const d=t.querySelectorAll(".faq__name");d.forEach((function(e,t){e.addEventListener("click",(function(){d.forEach(((e,s)=>{s!==t&&e.classList.remove("is-active")})),this.classList.toggle("is-active")}))}))}))}},t={};function s(i){var r=t[i];if(void 0!==r)return r.exports;var c=t[i]={exports:{}};return e[i](c,c.exports,s),c.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";s(811)})()})();