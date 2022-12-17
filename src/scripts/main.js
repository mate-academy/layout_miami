'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.body.querySelector('.form-field');
const names = form.querySelector('.name');
const email = form.querySelector('.email');
const message = form.querySelector('.message');

form.addEventListener('submit', (event) => {
  names.value = "";
  email.value = "";
  message.value = "";
  event.preventDefault();
});
