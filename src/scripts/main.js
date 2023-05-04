'use strict';

const openButton = document.querySelector('#navOpenButton');
const closeButton = document.querySelector('#navCloseButton');
const menu = document.querySelector('#menu');
const navList = document.querySelector('#navList');

const openMenuClass = 'page__menu--open';

function openMenu() {
  menu.classList.add(openMenuClass);
}

function closeMenu() {
  menu.classList.remove(openMenuClass);
}

openButton.addEventListener('click', openMenu);

closeButton.addEventListener('click', closeMenu);

navList.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    closeMenu();
  }
});
