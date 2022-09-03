'use strict';

const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.js-input');

function handler(event) {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
}

form.addEventListener('submit', handler);
