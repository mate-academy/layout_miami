'use strict';

const openButton = document.querySelector('#menuOpenButton');
const closeButton = document.querySelector('#menuCloseButton');
const menu = document.querySelector('#menu');
const menuList = document.querySelector('.menu__list');
const body = document.querySelector('.page__body');
const openMenuClass = 'page__menu--open';
const turnOffScrollClass = 'page__body--scroll-off';

function openMenu() {
  menu.classList.add(openMenuClass);
  body.classList.add(turnOffScrollClass);
}

function closeMenu() {
  menu.classList.remove(openMenuClass);
  body.classList.remove(turnOffScrollClass);
}

openButton.addEventListener('click', openMenu);

closeButton.addEventListener('click', closeMenu);

menuList.addEventListener('click', function(event) {
  if (event.target.tagName === 'A') {
    closeMenu();
  }
});
