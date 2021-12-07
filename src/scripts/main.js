'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.contact-us__form');
const inputs = document.querySelectorAll('.contact-us__form-input');
const textarea = document.querySelector('.form-field--textarea');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // eslint-disable-next-line no-return-assign
  inputs.forEach(elem => elem.value = '');

  textarea.value = '';
});
