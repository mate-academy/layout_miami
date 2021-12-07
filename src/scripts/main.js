'use strict';

const form = document.querySelector('.contact-us__field');
const inputs = document.querySelectorAll('.contact-us__field');
const textarea = document.querySelector('.contact-us__field');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }

  textarea.value = '';
});
