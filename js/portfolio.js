document.addEventListener("DOMContentLoaded", function(){
	console.log("Loaded");

	document.querySelector(".jh-main-navigation").style.marginTop = document.querySelector(".jh-main-header").offsetHeight+"px";
	
	document.querySelector(".jh-page-section").style.paddingTop = (document.querySelector(".jh-page-section").style.paddingTop + document.querySelector(".jh-main-header").offsetHeight) +"px";

	document.querySelector(".js-main-menu-button").addEventListener("click",function(){
		document.querySelector(".jh-main-navigation").classList.toggle("hidden");
	});

	projectHeaders.forEach(function(header){
		header.addEventListener("click",projectMenu);
	});

	allGalleryButtons.forEach(function(button){
		button.addEventListener("click",galleryButton);
	});

	
	businessCard.style.height = businessCardBack.offsetHeight + "px";
	businessCardFront.style.height = businessCardBack.offsetHeight + "px";

	businessCard.addEventListener("click",function(){
		if(businessCard.classList.contains("jh-business-card--front-showing")) {
			businessCard.classList.remove("jh-business-card--front-showing");
			businessCard.classList.add("jh-business-card--back-showing");
		} else if(businessCard.classList.contains("jh-business-card--back-showing")) {
			businessCard.classList.remove("jh-business-card--back-showing");
			businessCard.classList.add("jh-business-card--front-showing");
		}
	})

});

function galleryButton(){
	if(!this.classList.contains("jh-project__gallery-button--active")){
		var currentGallery = utilities.getAncestorBySelector(this,".jh-project__information");
		var allInformation = currentGallery.querySelectorAll("[data-slide]");
		var currentSlideNumber = this.dataset.slide;
		var toMakeActive = currentGallery.querySelectorAll("[data-slide='" + currentSlideNumber + "']");

		var currentActives = currentGallery.querySelectorAll("[class*='--active']");

		currentActives.forEach(function(cActive){
			if(cActive.classList.contains("jh-project__description")) {
				cActive.classList.remove("jh-project__description--active");
				cActive.classList.add("jh-project__description--inactive");
			} else if(cActive.classList.contains("jh-project__thumbnail")) {
				cActive.classList.remove("jh-project__thumbnail--active");
				cActive.classList.add("jh-project__thumbnail--inactive");
			} else if(cActive.classList.contains("jh-project__gallery-button")) {
				cActive.classList.remove("jh-project__gallery-button--active");
				cActive.classList.add("jh-project__gallery-button--inactive");
			}
		});

		toMakeActive.forEach(function(information){
			if(information.classList.contains("jh-project__description")) {
				information.classList.add("jh-project__description--active");
				information.classList.remove("jh-project__description--inactive");
			} else if(information.classList.contains("jh-project__thumbnail")) {
				information.classList.add("jh-project__thumbnail--active");
				information.classList.remove("jh-project__thumbnail--inactive");
			} else if(information.classList.contains("jh-project__gallery-button")) {
				information.classList.add("jh-project__gallery-button--active");
				information.classList.remove("jh-project__gallery-button--inactive");
			}
		});
	}
}

function projectMenu(){
	var parent = utilities.getAncestorBySelector(this,".jh-project");
	if(!parent.classList.contains("jh-project--active")) {
		var activeParent = document.querySelector(".jh-project--active");
		activeParent.classList.remove("jh-project--active");
		activeParent.classList.add("jh-project--inactive");
		parent.classList.remove("jh-project--inactive");
		parent.classList.add("jh-project--active");
	}
}

// GLOBALS //
// 
var buttons = document.querySelectorAll(".row");
var projects = document.querySelectorAll(".js-project");
var projectHeaders = document.querySelectorAll(".js-project__header-title");
var allGalleries = document.querySelectorAll(".jh-project__gallery-buttons");
var allGalleryButtons = document.querySelectorAll(".jh-project__gallery-button");

var businessCard = document.querySelector(".jh-business-card");
var businessCardFront = document.querySelector(".jh-business-card--front");
var businessCardBack = document.querySelector(".jh-business-card--back");