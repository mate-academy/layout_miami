'use strict';

const contactForm = document.querySelector('#contact-us__form');

contactForm.addEventListener('submit', ev => {
  ev.preventDefault();
  contactForm.reset();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
