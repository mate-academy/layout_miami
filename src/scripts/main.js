'use strict';

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
  window.scrollTo(0, 0);
});
