'use strict';

const menu = document.querySelector('.menu');
const menuBtnOpen = document.querySelector('.burger-menu');
const menuBtnClose = document.querySelector('.menu__closer');
const menuLinks = document.querySelectorAll('.menu__link');

function toggleMenu() {
  document.body.classList.toggle('page--with-menu');
  menu.classList.toggle('page--menu-open');
}

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);

menuLinks.forEach(link => {
  link.addEventListener('click', toggleMenu);
});
