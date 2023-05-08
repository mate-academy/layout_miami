'use strict';

const formButton = document.querySelector('#form-button');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

formButton.addEventListener('click', (event) => event.preventDefault());
