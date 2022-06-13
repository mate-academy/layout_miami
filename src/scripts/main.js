'use strict';

const form = document.querySelector('#landing-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});
