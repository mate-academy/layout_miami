'use strict';

const navBtnOpen = document.querySelector('#header__nav-open');
const navBtnClose = document.querySelector('#header__nav-close');
const navList = document.querySelector('#header__nav');

navBtnOpen.addEventListener('click', () => {
  navList.classList.remove('nav__hide');
  navList.classList.add('nav__show');
  navBtnClose.style.display = 'block';
  navBtnOpen.style.display = 'none';
});

navBtnClose.addEventListener('click', () => {
  navList.classList.remove('nav__show');
  navList.classList.add('nav__hide');
  navBtnClose.style.display = 'none';
  navBtnOpen.style.display = 'block';
});
