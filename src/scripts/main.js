'use strict';

const form = document.querySelector('.contact-us__form');
const inputs = document.querySelectorAll('.contact-us__field');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }
});
