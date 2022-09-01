'use strict';

document.querySelector('#form').addEventListener('submit', e => {
  e.preventDefault();

  const inputs = document.querySelectorAll('.form-field');

  inputs.forEach(input => {
    input.value = '';
  });
});
