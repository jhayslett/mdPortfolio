function galleryHeaders(){for(var e=document.querySelector(".allProjects"),t=e.querySelectorAll(".project"),a=0;a<t.length;a++)addGalleryHeaderLinks(t[a])}function addGalleryHeaderLinks(e){e.querySelector("header").addEventListener("click",function(){!0===this.parentElement.classList.contains("active")?(this.parentElement.classList.remove("active"),this.parentElement.classList.add("inactive")):(this.parentElement.classList.remove("inactive"),this.parentElement.classList.add("active"))})}document.addEventListener("DOMContentLoaded",function(){console.log("Loaded"),galleryHeaders()});