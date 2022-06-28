'use strict';

const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.input');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }
});
