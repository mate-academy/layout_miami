'use strict';

const menu = document.querySelector('.page-header__navigation');
const openButton = document.querySelector('.page-header__open-button');
const closeButton = document.querySelector('.navigation__close-button');

menu.classList.add('page-header__navigation--js');

openButton.addEventListener('click', () => {
  menu.classList.remove('page-header__navigation--closed');
  menu.classList.add('page-header__navigation--opened');
});

closeButton.addEventListener('click', () => {
  menu.classList.remove('page-header__navigation--opened');
  menu.classList.add('page-header__navigation--closed');
});
