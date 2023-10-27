'use strict';

const form = document.querySelector('.fields');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  event.target.reset();
});
