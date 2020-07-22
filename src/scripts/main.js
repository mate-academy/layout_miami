'use strict';

document.querySelector('.burger-menu').onclick = function() {
  document.querySelector('.burger-menu__icon').classList.toggle(
    'burger-menu__icon--active');

  document.querySelector('.burger-menu').classList.toggle(
    'burger-menu--active');

  document.querySelector('.header__container').classList.toggle(
    'header__container--burger-menu');

  document.querySelector('.nav').classList.toggle(
    'nav--burger-menu');

  document.querySelector('.nav__link').classList.remove(
    'nav__link--active');

  document.querySelector('.header__logo').classList.toggle(
    'header__logo--burger-menu');

  document.querySelector('.header__phone').classList.toggle(
    'header__phone--burger-menu');

  document.querySelector('.header__link-call').classList.toggle(
    'header__link-call--burger-menu');
};

document.querySelector('.nav__link').onclick = function() {
  document.querySelector('.burger-menu__icon').classList.remove(
    'burger-menu__icon--active');

  document.querySelector('.burger-menu').classList.remove(
    'burger-menu--active');

  document.querySelector('.header__container').classList.remove(
    'header__container--burger-menu');

  document.querySelector('.nav').classList.remove(
    'nav--burger-menu');

  document.querySelector('.header__logo').classList.remove(
    'header__logo--burger-menu');

  document.querySelector('.header__phone').classList.remove(
    'header__phone--burger-menu');

  document.querySelector('.header__link-call').classList.remove(
    'header__link-call--burger-menu');
};
