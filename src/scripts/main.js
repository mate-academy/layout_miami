'use strict';

const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form__input');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  inputs.forEach((input) => {
    input.value = '';
  });
});
