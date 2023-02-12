'use strict';

const form = document.querySelector('.registration__info');
const nameOfForm = document.querySelector('.registration__name');
const mesageOfForm = document.querySelector('.registration__message');
const mailOfForm = document.querySelector('.registration__email');

form.addEventListener('submit', e => {
  e.preventDefault();
  mailOfForm.value = '';
  mesageOfForm.value = '';
  nameOfForm.value = '';
});

if (window.location.hash !== '') {
  document.body.classList.remove('page__body--width-menu');
  window.location.replace(window.location.pathname);
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--width-menu');
  } else {
    document.body.classList.remove('page__body--width-menu');
  }
});
