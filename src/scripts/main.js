'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const buttonsSubmit = document.querySelector('.form .button[type="submit"]');

  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#menu') {
      document.body.classList.add('lock');
    } else {
      document.body.classList.remove('lock');
    }
  });

  buttonsSubmit.addEventListener('click', (event) => {
    buttonsSubmit.parentElement.reset();
    event.preventDefault();
  });
});
