'use strict';

const navBtnOpen = document.querySelector('#header__nav-open');
const navBtnClose = document.querySelector('#header__nav-close');
const navList = document.querySelector('#header__nav');

navBtnOpen.addEventListener('click', () => {
  navList.style.display = 'block';
  navBtnClose.style.display = 'block';
  navBtnOpen.style.display = 'none';
});

navBtnClose.addEventListener('click', () => {
  navList.style.display = 'none';
  navBtnClose.style.display = 'none';
  navBtnOpen.style.display = 'block';
});
