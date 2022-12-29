'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('#form');

form.addEventListener('submit', (e) => e.preventDefault());

const button = document.querySelector('#button');

button.addEventListener('click', (e) => {
  const formFields = document.querySelectorAll('.form-field');

  for (const formField of formFields) {
    formField.value = '';
  }
});
