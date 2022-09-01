'use strict';

const phone = document.querySelector('.header__phone');
const tooltip = document.querySelector('.header__tooltip');
const menuLink = document.querySelector('.header__menu');
const menu = document.querySelector('.menu');

menuLink.addEventListener('click', () => {
  menuLink.classList.toggle('header__menu--close');
  menuLink.classList.toggle('header__menu');
  menu.classList.toggle('menu--open');
});

phone.addEventListener('mouseenter', () => {
  tooltip.classList.add('header__tooltip--isVisiable');
});

phone.addEventListener('mouseleave', () => {
  tooltip.classList.remove('header__tooltip--isVisiable');
});
