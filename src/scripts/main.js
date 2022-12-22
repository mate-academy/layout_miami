'use strict';

const buttonOpen = document.querySelector('.icon--menu-opener');
const buttonClose = document.querySelector('.icon--cross');
const modal = document.querySelector('.nav');

buttonOpen.addEventListener('click', openMenu);
buttonClose.addEventListener('click', closeMenu);

function openMenu() {
  modal.classList.remove('nav--hidden');
}

function closeMenu() {
  modal.classList.add('nav--hidden');
}
