document.addEventListener("DOMContentLoaded", function(){
	console.log("Loaded");
	var buttons = document.querySelectorAll(".row");
	console.log(buttons);

	document.querySelector(".jh-main-navigation").style.marginTop = document.querySelector(".jh-main-header").offsetHeight+"px"
	
	document.querySelector(".jh-page-section").style.paddingTop = (document.querySelector(".jh-page-section").style.paddingTop + document.querySelector(".jh-main-header").offsetHeight) +"px"
	document.querySelector(".js-main-menu-button").addEventListener("click",function(){
		document.querySelector(".jh-main-navigation").classList.toggle("hidden");
	})
});

// GLOBALS //
// 
var buttons = document.querySelectorAll(".row");