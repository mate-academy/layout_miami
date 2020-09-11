'use strict';

const menuIcon = document.querySelector('.menu-icon');
const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuList = document.querySelector('.burger-menu__list');

menuIcon.addEventListener('click', openMenu);
burgerMenuList.addEventListener('click', openMenu);

function openMenu() {
  document.body.classList.toggle('no-scroll');
  burgerMenu.classList.toggle('burger-menu--open');

  menuIcon.classList.toggle('menu-icon--open');
}
