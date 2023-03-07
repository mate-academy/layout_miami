'use strict';

const menuIcon = document.querySelector('.header__menuIcon');
const menuItems = document.querySelector('.header__nav');
const menuClose = document.querySelector('.header__nav__closeBtn');

const handleOpenClose = () => {
  menuItems.classList.toggle('header__nav--open');
};

menuIcon.addEventListener('click', () => {
  handleOpenClose();
});

menuClose.addEventListener('click', () => {
  handleOpenClose();
});
