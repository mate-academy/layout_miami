'use strict';

const formBtn = document.querySelector('.button--primary');
const formField = document.querySelector('#formField');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

formBtn.addEventListener('click', (e) => {
  e.preventDefault();
  formField.reset();
});
