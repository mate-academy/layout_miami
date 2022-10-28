'use strict';

const form = document.getElementById('my_form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});
