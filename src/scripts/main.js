'use strict';

const burger = document.querySelector('.burger'); // element
const burgerItem = document.querySelectorAll('.burger__item');
const phone = document.querySelectorAll('.header__phone'); // massive
const logo = document.querySelector('.header__logo'); // element
const header = document.querySelector('.header'); // element
const list = document.querySelector('.nav__list'); // element
const navItem = document.querySelectorAll('.nav__item'); // massive
const promo = document.querySelector('.promo'); // element
const title = document.querySelector('.header__title');
const nav = document.querySelector('.header__nav');
const headerIcon = document.querySelector('.header__icon-img');
const active = document.querySelector('.nav__item--is-active');

burger.addEventListener('click', () => {
  burgerItem.forEach(item => {
    item.classList.toggle('menu');
  });

  phone.forEach(item => {
    item.classList.toggle('menu');
  });

  logo.classList.toggle('menu');
  header.classList.toggle('menu');
  list.classList.toggle('menu');

  navItem.forEach(item => {
    item.classList.toggle('menu');
  });

  active.classList.toggle('nav__item--is-active');

  promo.classList.toggle('menu');

  title.classList.toggle('menu');
  nav.classList.toggle('menu');
  headerIcon.classList.toggle('menu');
});

navItem.forEach(element => {
  element.addEventListener('click', () => {
    burgerItem.forEach(item => {
      item.classList.toggle('menu');
    });

    phone.forEach(item => {
      item.classList.toggle('menu');
    });

    logo.classList.toggle('menu');
    header.classList.toggle('menu');
    list.classList.toggle('menu');

    navItem.forEach(item => {
      item.classList.toggle('menu');
    });

    active.classList.toggle('nav__item--is-active');

    promo.classList.toggle('menu');

    title.classList.toggle('menu');
    nav.classList.toggle('menu');
    headerIcon.classList.toggle('menu');
  });
});
