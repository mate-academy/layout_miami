'use strict';

const menuBtn = document.querySelector('.icon--menu');
const menuBtns = document.querySelectorAll('.menu__item');
const closeBtn = document.querySelector('.icon--croos');
const menu = document.querySelector('.menu');

function onClick() {
  menu.classList.add('open');
}

function closeMenu() {
  menu.classList.remove('open');
}

[...menuBtns].forEach(e => {
  e.addEventListener('click', closeMenu);
});

menuBtn.addEventListener('click', onClick);
closeBtn.addEventListener('click', closeMenu);
