import{a as u,S as c,i as f}from"./assets/vendor-09d7c26e.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const m="https://pixabay.com/api/",p="43780784-35e4285ec8f2021d0fe97b31d";async function y(t){try{return(await u.get(m,{params:{key:p,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(n){return console.error("Error fetching images:",n),[]}}function l(){const t=document.querySelector(".gallery");t&&(t.innerHTML="")}function g(t){l();const n=document.querySelector(".gallery");t.forEach(r=>{const e=document.createElement("a");e.href=r.largeImageURL,e.classList.add("gallery-item"),e.innerHTML=`
      <div class="card">
        <img src="${r.webformatURL}" alt="${r.tags}" />
        <div class="image-info">
          <span>Likes: ${r.likes}</span>
          <span>Views: ${r.views}</span>
          <span>Comments: ${r.comments}</span>
          <span>Downloads: ${r.downloads}</span>
        </div>
      </div>
    `,n.appendChild(e)}),new c(".gallery-item").refresh()}function h(){const t=document.querySelector(".loader");t&&(t.style.display="block")}function L(){const t=document.querySelector(".loader");t&&(t.style.display="none")}function i(t){f.error({title:"Error",message:t,position:"topRight"})}function w(){new c(".gallery-item").on("show.simplelightbox",function(n){const s=n.currentImage;if(s){const{likes:r,views:e,comments:o,downloads:a}=s,d=`
        <div>
          <span>Likes: ${r}</span>
          <span>Views: ${e}</span>
          <span>Comments: ${o}</span>
          <span>Downloads: ${a}</span>
        </div>
      `;this.$caption.html(d)}})}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".form"),n=document.getElementById("gallery");t.addEventListener("submit",async s=>{s.preventDefault();const r=n.value.trim();if(!r){i("Please enter a search query.");return}h();try{l();const e=await y(r);e.length===0?i("Sorry, there are no images matching your search query. Please try again!"):(g(e),w())}catch{i("Failed to fetch images. Please try again later.")}finally{L()}})});
//# sourceMappingURL=commonHelpers.js.map
