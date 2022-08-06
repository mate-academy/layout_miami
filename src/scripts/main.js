'use strict';

const bar = document.querySelector('.nav__icon--bar');
const barX = document.querySelector('.menu__x-wrapper');
const menu = document.querySelector('.menu');

bar.addEventListener('click', () => {
  menu.classList.toggle('display-flex');
});

barX.addEventListener('click', () => {
  menu.classList.toggle('display-flex');
});

const form = document.getElementById('form');

form.addEventListener('submit', event => {
  event.preventDefault();
  form.reset();
  window.scrollTo(0, 0);
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
