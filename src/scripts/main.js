'use strict';

const form = document.querySelector('.myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  event.target.reset();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
