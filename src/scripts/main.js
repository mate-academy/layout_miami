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
