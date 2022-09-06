'use strict';

const openMenuBtn = document.querySelector('.nav__menu-icon');
const closeMenuBtn = document.querySelector('.menu__close-btn');
const navMenu = document.querySelector('.nav__menu');

const openMenu = () => {
  navMenu.classList.add('nav__menu--open');
};

const closeMenu = () => {
  navMenu.classList.remove('nav__menu--open');
};

openMenuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);
