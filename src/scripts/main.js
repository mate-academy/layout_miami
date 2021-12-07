'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.contact-us__form');
const inputs = document.querySelectorAll('.form-field');
const textarea = document.querySelector('.form-field');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }
  textarea.value = '';
});
