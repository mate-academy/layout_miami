'use strict';

const form = document.querySelector('.form');

function clearInputs() {
  const inputs = document.querySelectorAll('input');

  for (const input of inputs) {
    input.value = '';
  }

  const textarea = document.querySelector('textarea');

  textarea.value = '';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  clearInputs();
});
