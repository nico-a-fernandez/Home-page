const icono = document.getElementById("btn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("btn_sidebar");

let menuOpen = false;

function openMenu() {
	menuOpen = true;
	overlay.style.display = "block";
	sidebar.style.width = "60%";
	closeBtn.style.display = "block";
}

function closeMenu() {
	menuOpen = false;
	sidebar.style.width = "0%";
	overlay.style.display = "none";
	closeBtn.style.display = "none";
}

icono.addEventListener("click", function () {
	if (!menuOpen) {
		openMenu();
	}
});

overlay.addEventListener("click", function () {
	if (menuOpen) {
		closeMenu();
	}
});

closeBtn.addEventListener("click", function () {
	if (menuOpen) {
		closeMenu();
	}
});
