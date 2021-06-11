'use strict';

const form = document.querySelector('.contacts-form');

form.addEventListener('submit', event => {
  document.location.reload();
  event.preventDefault();
});
