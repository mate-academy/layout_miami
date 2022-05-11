'use strict';

const menuOpener = document.querySelector('.icon--menu');
const menuCloser = document.querySelector('.icon--cross');
const slideMenu = document.querySelector('.page__menu');
const listItems = document.querySelector('.menu__list');

menuOpener.addEventListener('click', () => {
  slideMenu.classList.add('page__menu--open');
});

menuCloser.addEventListener('click', () => {
  slideMenu.classList.remove('page__menu--open');
});

listItems.addEventListener('click', () => {
  slideMenu.classList.remove('page__menu--open');
});
