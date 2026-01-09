'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  const successMsg = document.querySelector('.contact-form__success-msg');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (form.checkValidity()) {
        successMsg.classList.add('is-visible');
        form.reset();
      }
    });
  }
});
