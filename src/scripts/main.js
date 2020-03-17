'use strict';

const navBtn = document.querySelector('#header__nav-button');
const navList = document.querySelector('#header__nav');

navBtn.addEventListener('click', () => {
  navList.classList.toggle('nav--show');
  navBtn.classList.toggle('header__nav-button--close');
});
