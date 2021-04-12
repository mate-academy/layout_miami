'use strict';

const menuBody = document.querySelector('.menu__body');
const menuIcon = document.querySelector('.menu__icon');
const menuIconLine = document.querySelector('.menu__icon-line');
const toggler = document.querySelector('#toggler');

toggler.addEventListener('click', () => {
  menuBody.classList.toggle('menu__body--active');
  menuIcon.classList.toggle('menu__icon--active');
  menuIconLine.classList.toggle('menu__icon-line--active');
});
