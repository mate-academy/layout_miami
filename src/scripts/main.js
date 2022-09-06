'use strict';

const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form__field');

function handler(event) {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
}

form.addEventListener('submit', handler);
