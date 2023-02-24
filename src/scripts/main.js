'use strict';

const form = document.querySelector('.contacts__form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
});
