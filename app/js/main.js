
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

const buyBtns = document.querySelectorAll('.packages__btn')

buyBtns.forEach(buyBtn => {
	buyBtn.addEventListener("click", e => {
		// Your phone number in international format (no "+" or spaces)
		const phoneNumber = "254117226215";

		let packageType = e.target.dataset.package;

		// Dynamically set the preset message
		const presetMessage = `Hello, I am interested in the ${packageType} level package!`;

		// Encode the message to ensure it's URL-safe
		const encodedMessage = encodeURIComponent(presetMessage);

		// Build the WhatsApp link dynamically
		const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
		
		// Attach the link to the button
		e.target.href = whatsappLink;
	})
})

function contactUs() {
	const myPhoneNumber = "254117226215";
	const myPresetMessage = `Hello, I am interested in learning more about the synthetic indices trading!`;
	const myEncodedMessage = encodeURIComponent(myPresetMessage);
	const myWhatsappLink = `https://wa.me/${myPhoneNumber}?text=${myEncodedMessage}`;
	document.getElementById("contact-btn").href = myWhatsappLink;
}


