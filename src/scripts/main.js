'use strict';

// remove scroll in menu
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// disable page reload when submit active and clean up form places
const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form-field');

form.addEventListener('submit', event => {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
});
