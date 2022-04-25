'use strict';

/* window.addEventListener('orientationchange', () => {
  window.location.reload();
}); */

const menu = document.querySelector('#menuOverlay');
const navLink = document.querySelectorAll('.nav__link');
const openMenuIcon = document.querySelector('.header__menu-toggler');
const closeMenuIcon = document.querySelector('.menu__hide');

function openMenu(e) {
  menu.classList.add('menu--is-active');
}

function closeMenu(e) {
  menu.classList.remove('menu--is-active');
}

openMenuIcon.addEventListener('click', openMenu, true);
closeMenuIcon.addEventListener('click', closeMenu, true);

navLink.forEach((n) => n.addEventListener('click', closeMenu, true));
