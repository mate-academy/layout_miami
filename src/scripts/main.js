'use strict';

const phone = document.querySelector('.nav__btn--phone');
const number = document.querySelector('.nav__number--hidden');
const burger = document.querySelector('.nav__btn--burger');
const menu = document.querySelector('.menu');
const cross = document.querySelector('.nav__btn--cross');
const header = document.querySelector('.header');
const menuContainer = document.querySelector('.menu__container');

phone.addEventListener('mouseover', function(e) {
  number.classList.add('nav__number--visible');
});

phone.addEventListener('mouseout', function(e) {
  number.classList.add('nav__number--hidden');
  number.classList.remove('nav__number--visible');
});

burger.addEventListener('click', function() {
  menu.style.cssText = 'width: 100%; transform: translateX(0)';
  menuContainer.style.cssText = 'opacity: 1; pointer-events: all;';
  header.style.cssText = 'transform: translateX(100%)';
  menuContainer.classList.add = 'menu__container--visible';
});

cross.addEventListener('click', function(e) {
  header.style.cssText = 'transform: translateX(0%)';
  menu.style.cssText = 'width: 0; transform: translateX(-100%)';
  menuContainer.style.cssText = 'opacity: 0; pointer-events: 0;';
});
