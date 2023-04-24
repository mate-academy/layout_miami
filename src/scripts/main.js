'use strict';

window.addEventListener('hashchange', () => {
  if (window.innerWidth > 1100) {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }

  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('contacts__inputs--button');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});
