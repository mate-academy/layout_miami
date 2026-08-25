'use strict';

const contactForm = document.querySelector('.contact__form');
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');

document.getElementById('open_nav').addEventListener('click', () => setMenuState(true));
document.getElementById('close_nav').addEventListener('click', () => setMenuState(false));

const updateNavBackground = () => {
	nav.classList.toggle('nav--scrolled', window.scrollY > 200);
};

const setMenuState = (isOpen) => {
	menu.classList.toggle('menu--open', isOpen);
	document.body.classList.toggle('page__body--with-menu', isOpen);
};

const menuLinks = document.querySelectorAll('.menu__nav a');

menuLinks.forEach((link) => {
	link.addEventListener('click', () => {
		setMenuState(false);
	});
});

setMenuState(false);

contactForm.addEventListener('submit', (event) => {
	event.preventDefault();

	if (!contactForm.checkValidity()) {
		contactForm.reportValidity();
		return;
	}

	contactForm.reset();
});

updateNavBackground();

window.addEventListener('scroll', updateNavBackground);