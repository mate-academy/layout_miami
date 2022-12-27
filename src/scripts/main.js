'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const buttonForm = document.querySelector('#btn');

buttonForm.addEventListener('sumbit', (e) => {
  e.preventDefault();
  e.reset();
});
