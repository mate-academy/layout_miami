'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const emailForm = document.getElementById('get-user-info');
const nameInput = document.getElementById('user-name');
const emailInput = document.getElementById('user-mail');
const messageInput = document.getElementById('user-message');

const userMessage = {};

emailForm.addEventListener('submit', (event) => {
  event.preventDefault();

  userMessage[nameInput.name] = nameInput.value;
  userMessage[emailInput.name] = emailInput.value;

  if (messageInput.value) {
    userMessage[messageInput.name] = messageInput.value;
  } else {
    userMessage[messageInput.name]
    = nameInput.value + ' didn\'t left message for us';
  }

  emailInput.value = '';
  nameInput.value = '';
  messageInput.value = '';
});
