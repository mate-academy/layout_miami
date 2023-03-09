'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.getElementById('#form-id');
const name1 = document.getElementById('#name');
const email = document.getElementById('#email');
const message = document.getElementById('#message');
const submitSuccess = document.getElementById('.submit-success');

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
