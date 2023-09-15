const menuButton = document.getElementById("menuSwiper");
const menuWrapper = document.getElementById("menuWrapper");

menuButton.addEventListener("click", () => {
	menuWrapper.classList.toggle("active");
});
