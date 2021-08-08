'use strict';

const form = document.querySelector('.contact__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  document.location.reload();
});
