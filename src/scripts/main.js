'use strict';

const form = document.querySelector('.contact-form');

form.addEventListener('submit', event => {
  document.location.reload();
  event.preventDefault();
});
