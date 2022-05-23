'use strict';

const phone = document.querySelector('.nav__btn--phone');
const number = document.querySelector('.nav__number--hidden');
const burger = document.querySelector('.nav__btn--burger');
const menu = document.querySelector('.menu');
const cross = document.querySelector('.nav__btn--cross');
const header = document.querySelector('.header');
const menuContainer = document.querySelector('.menu__container');
const links = document.querySelectorAll('.menu__link');
const body = document.querySelector('.mybike-page__body');

phone.addEventListener('mouseover', function(e) {
  number.classList.add('nav__number--visible');
});

phone.addEventListener('mouseout', function(e) {
  number.classList.remove('nav__number--visible');
});

burger.addEventListener('click', function() {
  menu.classList.add('menu--visible');
  menuContainer.classList.add('menu__container--visible');
  header.classList.add('header--hidden');
  body.classList.add('mybike-page__body--hidden');
});

cross.addEventListener('click', function(e) {
  header.classList.remove('header--hidden');
  menu.classList.remove('menu--visible');
  menuContainer.classList.remove('menu__container--visible');
  body.classList.remove('mybike-page__body--hidden');
});

links.forEach(link => link.addEventListener('click', function() {
  header.classList.remove('header--hidden');
  menu.classList.remove('menu--visible');
  menuContainer.classList.remove('menu__container--visible');
  body.classList.remove('mybike-page__body--hidden');
}));

document.querySelector('.button--submit').addEventListener('click',
  function(event) {
    event.preventDefault();
  }, true);
