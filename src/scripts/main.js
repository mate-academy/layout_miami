'use strict';

var form = document.querySelector('.form');

var contactForm = document.querySelector('.contact__form');

form.addEventListener('submit', event => {
  document.location.reload();
  event.preventDefault();
});

contactForm.addEventListener('submit', event => {
  document.location.reload();
  event.preventDefault();
});