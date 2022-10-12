'use strict';

const form = document.querySelector('form');
const formField = document.querySelectorAll('.form-field');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    setTimeout(() => {
      document.body.style.overflowY = 'hidden';
    }, 220);
  } else {
    document.body.style.overflow = '';
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  formField.forEach((field) => {
    field.value = '';
  });
});
