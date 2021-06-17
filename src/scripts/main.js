'use strict';

const burger = document.querySelector('.burger');
const burgerIcon = document.querySelector('.header__burger');
const menuList = document.querySelectorAll('.burger__link');

burgerIcon.addEventListener('click', () => {
  burgerIcon.classList.toggle('header__burger--active');
  burger.classList.toggle('burger--active');
});

//

menuList.addEventListener('click', () => {
  burger.classList.remove('burger--active');
});

//  чого не працює?
