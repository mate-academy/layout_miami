'use strict';

document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('.form');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      alert('Thank you! Your message has been sent.');
      form.reset();
    });
  }

  window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
});
