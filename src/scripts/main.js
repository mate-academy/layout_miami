'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.getElementById('contacts-form');
const inputsAndTextarea = document.querySelectorAll('.form-field');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const elem of inputsAndTextarea) {
    elem.value = '';
  }
});
