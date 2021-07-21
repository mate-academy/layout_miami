'use strict';

const form = document.querySelector('.contact-us__form');
const inputs = document.querySelectorAll('.contact-us__input');
const textarea = document.querySelector('.contact-us__textarea');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  textarea.value = '';

  for (const input of inputs) {
    input.value = '';
  }
});
