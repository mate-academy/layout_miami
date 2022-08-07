'use strict';

const form = document.getElementById('my_form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});
