'use strict';

const form = document.querySelector('.contact-us__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  form.reset();
  window.location('/');
});
