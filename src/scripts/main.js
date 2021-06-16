'use strict';

const form = document.querySelector('.consult');

const inputs = document.querySelectorAll('.consult__name');

const messages = document.querySelectorAll('.consult__message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }

  for (const message of messages) {
    message.value = '';
  }
});
