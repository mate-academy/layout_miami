'use strict';

const form = document.querySelector('.contact__forms');
const inputs = document.querySelectorAll('.contact__form-field');

form.addEventListener('submit', (action) => {
  action.preventDefault();

  inputs.forEach((input) => {
    input.value = '';
  });
});
