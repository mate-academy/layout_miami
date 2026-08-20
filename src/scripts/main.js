'use strict';

const contactForm = document.querySelector('.contact__form');
const menu = document.querySelector('.menu');

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

menu.addEventListener('click', (event) => {
	if (event.target.closest('a')) {
		document.body.classList.remove('page__body--with-menu');
	}
});
