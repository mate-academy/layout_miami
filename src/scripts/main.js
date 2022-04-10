'use strict';

const menu = document.querySelector('#menuOverlay');
const navLink = document.querySelectorAll('.nav__link');
const openMenuIcon = document.querySelector('.header__menu-toggler');
const closeMenuIcon = document.querySelector('.header__menu-hide');

function openMenu(e) {
  menu.classList.add('header__menu--is-active');
  e.preventDefault();
}

function closeMenu(e) {
  menu.classList.remove('header__menu--is-active');
  e.preventDefault();
}

openMenuIcon.addEventListener('click', openMenu, true);
closeMenuIcon.addEventListener('click', closeMenu, true);

navLink.forEach((n) => n.addEventListener('click', closeMenu, true));
