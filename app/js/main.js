
// PRIMARY NAVIGATION

const primaryNav = document.getElementById('priNav');
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const overlay = document.querySelector("[data-overlay]");

openMenu.addEventListener('click', () => {
    primaryNav.classList.add("active");
    overlay.classList.add("active");
	document.body.style.overflow = "hidden";

})

window.addEventListener("click", (e) => {
	if (!openMenu.contains(e.target)) {
		primaryNav.classList.remove("active");
		overlay.classList.remove("active");
		document.body.style.overflow = "unset";
	}
});

closeMenu.addEventListener('click', () => {
    primaryNav.classList.remove('active')
    overlay.classList.remove("active");
	document.body.style.overflow = "unset";

})

// HEADER

const header = document.getElementById("header");

window.addEventListener("scroll", function () {
	if (window.scrollY > 100) {
		header.classList.add("active");
	} else {
		header.classList.remove("active");
	}
});

// BOTS

const downloadBtns = document.querySelectorAll('.bots__btn');

downloadBtns.forEach(btn => {
	btn.addEventListener('click', e => {
		setInterval(() => {
			
			e.target.classList.add('clicked')
			e.target.innerText = 'downloaded'
			
		}, 2000);
	})
})

function toCourses() {
	window.location.href = "courses.html";
}
