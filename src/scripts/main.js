'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const submitButton = document.querySelector('#prevent');
const form = document.querySelector('.form');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  form.reset();
});
