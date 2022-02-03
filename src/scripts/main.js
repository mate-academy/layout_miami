'use strict';

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  form.reset();
  e.preventDefault();
  window.location.href = '#';
});
