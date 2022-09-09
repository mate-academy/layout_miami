'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const contactForm = document.querySelector('.contact-us--form');
const contactIntupts = document.querySelectorAll('.form-field');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  contactIntupts.forEach(i => {
    i.value = '';
  });
});
