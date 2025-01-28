'use strict';

function openMenu() {
  document.body.classList.add('menu-open');
}

function closeMenu() {
  document.body.classList.remove('menu-open');
}

document.getElementsByClassName('nav__link burger')
  .addEventListener('click', openMenu);

document.getElementsByClassName('menu__icon close')
  .addEventListener('click', closeMenu);
