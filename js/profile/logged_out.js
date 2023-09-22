const logoutTrigger = document.getElementById("logout_apla_trigger");
const aplaLoggedOut = document.querySelector(".logged_out_apla");

logoutTrigger.addEventListener("click", () => {
	aplaLoggedOut.classList.toggle("active");
});