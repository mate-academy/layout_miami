'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document
  .getElementsByClassName('contacts__form')[0]
  .addEventListener('submit', handleForm);

document
  .getElementById('send-contacts-button')
  .addEventListener('click', submitForm);

function submitForm() {
  document.getElementsByClassName('contacts__form')[0].reset();
  document.getElementById('name').required = false;
  document.getElementById('email').required = false;
  document.getElementById('message').required = false;
}

function handleForm(event) {
  event.preventDefault();
}
