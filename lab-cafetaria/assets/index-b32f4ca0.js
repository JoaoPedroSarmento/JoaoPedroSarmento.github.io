(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();function u(o,e,r){r.push({nomeProduto:o,valor:e}),localStorage.setItem("produtos",JSON.stringify(r)),l({nomeProduto:o,valor:e})}function a(o,e){const r=document.createElement("li");r.textContent=e,o.appendChild(r)}function l({nomeProduto:o,valor:e}){const r=document.querySelector(".total"),c=document.querySelector(".itens");a(c,o),console.log(r.textContent,e),r.textContent=d(+r.textContent,e)}function f(o){o.forEach(l)}function d(o,e){return o+e}let i=!1;document.querySelectorAll(".item").forEach(function(o){const e=JSON.parse(localStorage.getItem("produtos"))||[];e.length&&!i&&(f(e),i=!0),o.addEventListener("click",function(r){const c=r.currentTarget,t=c.querySelector("figcaption").textContent,n=+c.querySelector("span").textContent.slice(2,-3);u(t,n,e)})});