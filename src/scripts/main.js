'use strict';

const button = document.querySelector('.button');

button.addEventListener('click', function(event) {
  event.preventDefault();
});

const form = document.querySelector('.contact__form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
