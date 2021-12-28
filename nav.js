const navContainer = document.querySelector('.nav-container');

lastScroll = 0;
window.addEventListener('scroll', () => {
	let currentScroll = window.scrollY;
	if (currentScroll > lastScroll) {
		navContainer.style.transform = `translateY(${-100}%)`;
	} else {
		navContainer.style.transform = `translateY(${0}%)`;
	}
	lastScroll = currentScroll;
});

function hamburger() {
	const hamburgerButton = document.querySelector('.ham');
	if (window.innerWidth < 500) {
		hamburgerButton.style.display = 'block';
		hamburgerButton.addEventListener('click', () =>
			hamburgerButton.classList.toggle('open')
		);
	}
}

window.addEventListener('load', hamburger());
