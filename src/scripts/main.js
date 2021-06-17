'use strict';

const form = document.querySelector('.contuct-us__form');

form.addEventListener('submit', event => {
  document.location.reload();
  event.preventDefault();
});
