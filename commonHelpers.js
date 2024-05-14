import{a as d,S as u,i as f}from"./assets/vendor-09d7c26e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();const m="https://pixabay.com/api/",p="43780784-35e4285ec8f2021d0fe97b31d";async function y(t){try{return(await d.get(m,{params:{key:p,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(o){return console.error("Error fetching images:",o),[]}}const c=new u(".gallery-item a");function l(){const t=document.querySelector(".gallery");t&&(t.innerHTML="")}function g(t){l();const o=document.querySelector(".gallery"),s=t.map(r=>`<li class ='gallery-item'>
    <a href="${r.largeImageURL}" class="gallery-link">
      <img class ="gallery-img" src="${r.webformatURL}" alt="${r.tags}" />
      <div class="image-info">
        <span>Likes: ${r.likes}</span>
        <span>Views: ${r.views}</span>
        <span>Comments: ${r.comments}</span>
        <span>Downloads: ${r.downloads}</span>
      </div>
  </a>
</li>`).join("");o.insertAdjacentHTML("beforeend",s),c.refresh()}function h(){const t=document.querySelector(".loader");t&&(t.style.display="block")}function L(){const t=document.querySelector(".loader");t&&(t.style.display="none")}function i(t){f.error({title:"Error",message:t,position:"topRight"})}function w(){c.on("show.simplelightbox",function(t){const o=t.currentImage;if(o){const{likes:s,views:r,comments:e,downloads:n}=o,a=`
        <div>
          <span>Likes: ${s}</span>
          <span>Views: ${r}</span>
          <span>Comments: ${e}</span>
          <span>Downloads: ${n}</span>
        </div>
      `;this.$caption.html(a)}})}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".form"),o=document.getElementById("gallery");t.addEventListener("submit",async s=>{s.preventDefault();const r=o.value.trim();if(!r){i("Please enter a search query.");return}h();try{l();const e=await y(r);e.length===0?i("Sorry, there are no images matching your search query. Please try again!"):(g(e),w())}catch{i("Failed to fetch images. Please try again later.")}finally{L()}})});
//# sourceMappingURL=commonHelpers.js.map
