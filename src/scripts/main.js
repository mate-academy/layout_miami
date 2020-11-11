'use strict';

const form = document.querySelector('.consultation__form');

form.addEventListener('submit', event => {
  document.location.reload();
  event.preventDefault();
});

const form2 = document.querySelector('.contact__form');

form2.addEventListener('submit', event => {
  document.location.reload();
  event.preventDefault();
});
