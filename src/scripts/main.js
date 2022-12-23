'use strict';

const buttonOpen = document.querySelector('.icon--menu-opener');
const buttonClose = document.querySelector('.icon--cross');
const modal = document.querySelector('.nav');
const menuItem = document.querySelectorAll('.nav__link');

buttonOpen.addEventListener('click', openMenu);
buttonClose.addEventListener('click', closeMenu);

menuItem.forEach(function(item) {
  item.addEventListener('click', closeMenu);
});

function openMenu() {
  modal.classList.remove('nav--hidden');
}

function closeMenu() {
  modal.classList.add('nav--hidden');
}
