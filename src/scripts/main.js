'use strict';

const form = document.querySelector('.form');
const formField = document.querySelectorAll('.form-field');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    setTimeout(() => {
      document.body.style.overflowY = 'hidden';
    }, 250);
  } else {
    document.body.style.overflowY = '';
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  formField.forEach((field) => {
    field.value = '';
  });
});
