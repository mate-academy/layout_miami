'use strict';

const formBlock = document.querySelector('.form');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

formBlock.addEventListener('submit', (event) => {
  formBlock.reset();
  event.preventDefault();
});
