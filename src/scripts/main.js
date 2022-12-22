'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('#form-id');
const name1 = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const submitSuccess = document.querySelector('.submit-success');

form.addEventListener('submit', (e) => {
  name1.value = '';
  email.value = '';
  message.value = '';
  submitSuccess.classList.add('submit-success--show');

  setTimeout(() => {
    submitSuccess.classList.remove('submit-success--show');
  }, 2500);
  e.preventDefault();
});
