'use strict';

const form = document.querySelector('.form');

const contactForm = document.querySelector('.contact__form');

form.addEventListener('submit', event => {
  document.location.reload();
  event.preventDefault();
});

contactForm.addEventListener('submit', event => {
  document.location.reload();
  event.preventDefault();
});
