'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--width-menu');
  } else {
    document.body.classList.remove('page__body--width-menu');
  }
});

const form = document.querySelector('#form');
const inputs = document.querySelectorAll('.form-field');

function handler(event) {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
}

form.addEventListener('submit', handler);
