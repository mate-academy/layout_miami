'use strict';

const form = document.getElementById('form');

form.addEventListener('subbmit', (e) => {
  e.preventDefault();
  form.reset();
});
