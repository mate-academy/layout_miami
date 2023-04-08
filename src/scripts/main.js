'use strict';

const formElement = document.getElementsByClassName('contact__form')[0];

formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  formElement.reset();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
