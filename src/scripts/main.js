'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.form-contact__content');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailInput = document.querySelector('.form-contact__email');

  if (emailInput.checkValidity()) {
    form.reset();
    window.alert('Thanks for your message!');
  }
});
