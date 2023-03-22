'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#navigation') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const galleryButton = document.getElementsByClassName('grid__button');
const form = document.getElementsByClassName('form');

form[0].addEventListener('submit', (event) => {
  event.preventDefault();
  form[0].reset();
});

galleryButton[0].addEventListener('click', () => alert('hi'));
