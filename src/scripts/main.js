'use strict';

const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', ev => ev.preventDefault());

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
