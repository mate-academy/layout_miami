'use strict';

const buttonClose = document.querySelector('.icon--cross');
const buttonOpen = document.querySelector('.icon--menu');
const slideMenu = document.querySelector('.page__menu');
const listItems = document.querySelector('.menu__list');

buttonOpen.addEventListener('click', e => {
  e.preventDefault();
  slideMenu.classList.add('page--open');
});

buttonClose.addEventListener('click', e => {
  e.preventDefault();
  slideMenu.classList.remove('page--open');
});

listItems.addEventListener('click', e => {
  slideMenu.classList.remove('page--open');
});
