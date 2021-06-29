'use strict';

const form = document.querySelector('.contact__form');
const inputs = document.querySelectorAll('.contact__input');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of inputs) {
    input.value = ' ';
  }
});
