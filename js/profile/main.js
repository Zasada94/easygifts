const menuButton = document.getElementById("menuSwiper");
const menuWrapper = document.getElementById("menuWrapper");

menuButton.addEventListener("click", () => {
	menuWrapper.classList.toggle("active");
});

const loginTrigger = document.querySelector(".btn-signin");
const apla = document.querySelector(".login_apla");

loginTrigger.addEventListener("click", () => {
	apla.classList.toggle("active");
});


