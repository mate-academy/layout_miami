'use strict';

const form = document.getElementById('contact-form');

const syncMenuBodyScrollLock = () => {
	if (window.location.hash === '#menu') {
		document.body.classList.add('page__body--with-menu');
	} else {
		document.body.classList.remove('page__body--with-menu');
	}
};

window.addEventListener('hashchange', syncMenuBodyScrollLock);
window.addEventListener('load', syncMenuBodyScrollLock);

if (form) {
	form.addEventListener('submit', event => {
		event.preventDefault();
	});
}
