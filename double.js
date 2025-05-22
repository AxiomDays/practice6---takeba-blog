site = document.getElementById("uversite");
head = document.getElementById("navbar");
width = document.getElementById("size");
let widthToggle = 0;

function closeSite() {
	minimizeSite();
	head.classList.replace("show", "hide");
}

function minimizeSite() {
	if (site.classList.item(2)) {
		if (site.classList.item(2) == "hide") {
			site.classList.replace("hide", "show");
		} else {
			site.classList.replace("show", "hide");
		}
	}
}

function maximizeSite() {
	if (widthToggle == 0) {
		widthToggle = 1;
		width.classList.replace("col-md-8", "col-md-12");
	} else {
		width.classList.replace("col-md-12", "col-md-8");
		widthToggle = 0;
	}
}
