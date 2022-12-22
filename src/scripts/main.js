'use strict';

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('click', (event) => {
  event.preventDefault();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
