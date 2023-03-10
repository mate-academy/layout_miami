'use strict';

const button = document.querySelector('.button');

button.addEventListener('click', function(event) {
  event.preventDefault();
});

const form = document.querySelector('.contact__form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
});
