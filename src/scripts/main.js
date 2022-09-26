'use strict';

const opener = document.querySelector('#opener');
const cross = document.querySelector('#menu');

opener.addEventListener('click', () => {
  document.body.classList.add('page__body--with-menu');
});

cross.addEventListener('click', () => {
  document.body.classList.remove('page__body--with-menu');
});
