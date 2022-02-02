'use strict';

const form = document.querySelector('.page__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});
