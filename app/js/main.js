// PRIMARY NAVIGATION - open and close toggle

const primaryNav = document.getElementById("priNav");
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const overlay = document.querySelector("[data-overlay]");

openMenu.addEventListener("click", () => {
	primaryNav.classList.add("active");
	overlay.classList.add("active");
	document.body.style.overflow = "hidden";
});

window.addEventListener("click", (e) => {
	if (!openMenu.contains(e.target)) {
		primaryNav.classList.remove("active");
		overlay.classList.remove("active");
		document.body.style.overflow = "unset";
	}
});

closeMenu.addEventListener("click", () => {
	primaryNav.classList.remove("active");
	overlay.classList.remove("active");
	document.body.style.overflow = "unset";
});

// HEADER - position sticky on scroll

const header = document.getElementById("header");

window.addEventListener("scroll", function () {
	if (window.scrollY > 100) {
		header.classList.add("active");
	} else {
		header.classList.remove("active");
	}
});

// HERO BTNS

function contactUs() {
	const myPhoneNumber = "254117226215";

	const myPresetMessage = `Hello, I am interested in learning more about the synthetic indices trading!`;

	const myEncodedMessage = encodeURIComponent(myPresetMessage);

	const myWhatsappLink = `https://wa.me/${myPhoneNumber}?text=${myEncodedMessage}`;

	window.open(myWhatsappLink);
}

function visitDeriv() {
	window.open(
		"https://track.deriv.com/_2wY5AZILittMjdsyM5hasGNd7ZgqdRLk/1/",
		"_blank"
	);
}

// COURSES

// view course btn
function toCourses() {
	window.location.href = "pages/courses.html";
}

// buy courses btns
const buyBtns = document.querySelectorAll(".packages__btn");

buyBtns.forEach((buyBtn) => {
	buyBtn.addEventListener("click", (e) => {
		const phoneNumber = "254117226215";

		let packageType = e.target.dataset.package;

		const presetMessage = `Hello, I am interested in the ${packageType} level package!`;

		const encodedMessage = encodeURIComponent(presetMessage);

		const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

		e.target.href = whatsappLink;
	});
});

// DOWNLOAD FUNCTIONALITY

const downloadBotLinks = document.querySelectorAll(".bots__download-link");

console.log(downloadBotLinks);

downloadBotLinks.forEach((downloadBotLink) => {
	const fileId = downloadBotLink.getAttribute("data-id");

	const downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;

	downloadBotLink.href = downloadLink;
});
