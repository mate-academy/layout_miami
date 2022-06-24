'use strict';

const form = document.querySelector('.main__form');

form.addEventListener('submit', event => {
  event.preventDefault();

  form.reset();

  window.location.href = '#';
});
