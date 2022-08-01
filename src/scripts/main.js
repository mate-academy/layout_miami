'use strict';

const myForm = document.querySelector('form');

myForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const inputs = document.querySelectorAll('.form-field');
inputs.forEach((input) => {
  input.value = '';
});
});
