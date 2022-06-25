'use strict';

const form = document.querySelector('.form');

// eslint-disable-next-line
form.addEventListener('submit', function (event) {
  event.preventDefault();

  form.reset();
});
