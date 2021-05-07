'use strict';

const menu = document.querySelector('.menu__list');
const toggler = document.querySelector('.menu__img');

toggler.addEventListener('click', () => {
  menu.classList.toggle('menu__list--active');
});
