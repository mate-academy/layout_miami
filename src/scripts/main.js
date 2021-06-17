'use strict';

const form = document.querySelector('.contacts__form');
const inputs = document.querySelectorAll('.contacts__form-input');
const message = document.querySelector('.contacts__form-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });

  message.value = '';
});
