'use strict';

const feedbackForm = document.querySelector('.form');

feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of feedbackForm.elements) {
    input.value = '';
  }
});
