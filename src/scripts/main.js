'use strict';

const form = document.querySelector('#form');
const nameField = document.querySelector('#name');
const emailField = document.querySelector('#email');
const messageField = document.querySelector('#message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  nameField.value = '';
  emailField.value = '';
  messageField.value = '';
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
