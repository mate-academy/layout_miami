'use strict';

const contactForm = document.querySelector('.contact__form');
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');

const updateNavBackground = () => {
	nav.classList.toggle('nav--scrolled', window.scrollY > 200);
};

const updateMenuScrollLock = () => {
	document.body.classList.toggle(
		'page__body--with-menu',
		window.location.hash === '#navigation',
	);
};

contactForm.addEventListener('submit', (event) => {
	event.preventDefault();

	if (!contactForm.checkValidity()) {
		contactForm.reportValidity();
		return;
	}

	contactForm.reset();
});

window.addEventListener('hashchange', () => {
	updateMenuScrollLock();
});

updateMenuScrollLock();
updateNavBackground();

window.addEventListener('scroll', updateNavBackground);

menu.addEventListener('click', (event) => {
	if (!event.target.closest('a')) {
		return;
	}

	document.body.classList.remove('page__body--with-menu');

	if (window.location.hash === '#navigation') {
		history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
	}
});
