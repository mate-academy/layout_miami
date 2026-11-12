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
  const burgerButton = document.querySelector('.navigation__icon--menu').closest('a');
  const body = document.body;

  if (burgerButton) {
    burgerButton.addEventListener('click', (e) => {
      body.classList.toggle('page__body--with-menu');
    });
  }
});
