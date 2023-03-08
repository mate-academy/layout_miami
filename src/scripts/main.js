'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.getElementById('form');
const userName = document.getElementById('user-name');
const userEmail = document.getElementById('user-email');
const userMessage = document.getElementById('user-message');
const success = document.getElementById('success');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  userName.value = '';
  userEmail.value = '';
  userMessage.value = '';

  success.classList.add('success--open');

  setTimeout(function() {
    success.classList.remove('success--open');
  }, 3000);
});
