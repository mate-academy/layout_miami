'use strict';

const submitButton = document.querySelector('button[type=submit]');
const nameInput = document.querySelector('input[name=name]');
const emailInput = document.querySelector('input[name=email]');
const messageInput = document.querySelector('textarea[name=message]');

submitButton.addEventListener('click', e => {
  e.preventDefault();

  if (nameInput.value === '' || emailInput.value === '') {
    return;
  }

  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
});
