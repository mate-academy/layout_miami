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
  scrollHidden.classList.remove('active');
});

const scrollLink = document.getElementsByClassName('menu__link');

for (let i = 0; i < scrollLink.length; i++) {
  scrollLink[i].addEventListener('click', function() {
    menu.classList.toggle('active');
    scrollHidden.classList.toggle('active');
  });
}
