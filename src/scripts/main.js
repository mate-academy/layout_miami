'use strict';

const navIcon = document.querySelector('.header__nav');
const navList = document.querySelector('.header__nav-list');
const cancel = document.querySelector('.header__cancel');

navIcon.addEventListener('click', () => {
  navList.style.visibility = 'visible';
  navList.style.animation = 'fadeInLeft 0.5s';
  cancel.style.animation = 'none';
});

cancel.addEventListener('click', () => {
  navList.style.visibility = 'hidden';
  navList.style.transition = 'visibility 1s';
  navList.style.animation = 'fadeOutLeft 0.5s linear 0.5s';
  cancel.style.animation = 'heartBeat 0.5s';
});
