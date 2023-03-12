'use strict';

const menuBtnOpen = document.querySelector('.top-actions__btn--open');
const menuBtnClose = document.querySelector('.top-actions__btn--close');
const menu = document.querySelector('.menu');
const scrollHidden = document.querySelector('.page__body');

menuBtnOpen.addEventListener('click', function() {
  menu.classList.add('active');
  scrollHidden.classList.add('active');
});

menuBtnClose.addEventListener('click', function() {
  menu.classList.remove('active');
  scrollHidden.classList.add('active');
});
