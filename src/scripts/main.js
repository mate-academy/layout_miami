'use strict';

const form = document.querySelector('.footer__form');
const nameInput = document.querySelector('input[name=name]');
const emailInput = document.querySelector('input[name=email]');
const messageInput = document.querySelector('textarea[name=message]');

form.addEventListener('submit', e => {
  e.preventDefault();

  if (nameInput.value === '' || emailInput.value === '') {
    return;
  }

  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
});
