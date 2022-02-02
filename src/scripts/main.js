'use strict';

const menuButton = document.querySelector('.header__menu-icon');
const closeMenuButton = document.querySelector('.popup__close');
const menu = document.querySelector('.popup');

const showMenu = () => menu.classList.add('popup--active');
const hideMenu = () => menu.classList.remove('popup--active');

menuButton.addEventListener('click', () => showMenu());
closeMenuButton.addEventListener('click', () => hideMenu());
