import{A as s}from"./assets/vendor-CTqzIL4Y.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){const o=document.querySelectorAll(".faq-item");o.forEach(n=>{n.querySelector(".faq-content-question").addEventListener("click",function(){const c=n.classList.contains("active");o.forEach(r=>r.classList.remove("active")),c||n.classList.add("active")})})});document.addEventListener("DOMContentLoaded",()=>{new s(".accordion-container",{duration:300,showMultiple:!1,onOpen:function(o){console.log("Opened:",o)},onClose:function(o){console.log("Closed:",o)}})});
//# sourceMappingURL=commonHelpers.js.map
