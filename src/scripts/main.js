'use strict';

const nav = document.querySelector('.header__nav');
const burger = document.querySelector('.burger');

burger.addEventListener('click', openMenu);

function openMenu() {
  nav.classList.toggle('active');
}
