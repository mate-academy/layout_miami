'use strict';

const form = document.querySelector('.contact__form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
});
