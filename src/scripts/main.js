'use strict';

const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form__item');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }
});
