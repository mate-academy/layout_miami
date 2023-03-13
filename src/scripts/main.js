'use strict';

const menu = 'menu';
const menuOpen = 'menu--open';
const header = 'header';
const pageWithMenu = 'page__body--with-menu';
const blur = 'header--blur';

const bodyElement = document.body;
const headerElement = document.getElementById(header);
const menuElement = document.getElementById(menu);
const menuList = document.getElementById('menuList');
const formElement = document.getElementById('form');

document
  .getElementById('menu-icon')
  .addEventListener('click', function(e) {
    bodyElement.classList.add(pageWithMenu);
    headerElement.classList.add(blur);
    menuElement.classList.add(menuOpen);
  });

document
  .getElementById('menu-close')
  .addEventListener('click', function(e) {
    closeMenu();
  });

document
  .getElementById('menuLogo')
  .addEventListener('click', function(e) {
    closeMenu();
  });

menuList.addEventListener('click', function(e) {
  if (e.target.classList.contains('menu__link')) {
    closeMenu();
  }
});

const closeMenu = () => {
  bodyElement.classList.remove(pageWithMenu);
  headerElement.classList.remove(blur);
  menuElement.classList.remove(menuOpen);
};

formElement.addEventListener('submit', (event) => {
  event.preventDefault();
  formElement.reset();
});
