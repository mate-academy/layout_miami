'use strict';

const form = document.getElementById('contact-form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const inputs = document.querySelectorAll('#name, #email, #message');

  inputs.forEach(input => {
    input.value = '';
  });
});
