'use strict';

const formConsult = document.querySelector('.consultation__form');

formConsult.addEventListener('submit', (e) => {
  e.preventDefault();
  window.location.reload(false);
});

const formContact = document.querySelector('.contact__form');

formContact.addEventListener('submit', (e) => {
  e.preventDefault();
  window.location.reload(false);
});
