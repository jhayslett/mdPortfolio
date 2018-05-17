function galleryHeaders(){
	var allProjects = document.querySelector(".allProjects");
	var eachProject = allProjects.querySelectorAll(".project");
	for(var a = 0; a < eachProject.length; a++) {
		addGalleryHeaderLinks(eachProject[a]);
	}
}

function addGalleryHeaderLinks(e){
	var header = e.querySelector("header");
	header.addEventListener("click",function(){
		if(this.parentElement.classList.contains("active") === true) {
			this.parentElement.classList.remove("active");
			this.parentElement.classList.add("inactive");
		} else {
			this.parentElement.classList.remove("inactive");
			this.parentElement.classList.add("active");
		}
	})
}


document.addEventListener("DOMContentLoaded", function(){
	console.log("Loaded");

	galleryHeaders();
});