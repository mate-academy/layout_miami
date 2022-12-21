'use strict';

// disable scrolling when the menu is open

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// preventDefault onSubmit

const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});
