'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const formButton = document.querySelector('.button--primary');
const form = document.querySelector('form');

formButton.addEventListener('click', function(e) {
  e.preventDefault();
  form.reset();
});
