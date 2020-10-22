'use strict';

const burger = document.querySelector('.burger'); // element
const burgerItem = document.querySelectorAll('.burger__item');
const phone = document.querySelectorAll('.header__phone'); // massive
const link = document.querySelectorAll('.header__link');
const logo = document.querySelector('.header__logo'); // element
const header = document.querySelector('.header'); // element
const list = document.querySelector('.nav__list'); // element
const navItems = document.querySelectorAll('.nav__item'); // massive
const promo = document.querySelector('.promo'); // element
const title = document.querySelector('.header__title');
const nav = document.querySelector('.header__nav');
const headerIcon = document.querySelector('.header__phone--icon');
const active = document.querySelector('.nav__item--active');
const form = document.querySelector('.content__form');

burger.addEventListener('click', () => {
  burgerItem.forEach(item => {
    item.classList.toggle('menu');
  });

  phone.forEach(item => {
    item.classList.toggle('menu');
  });

  link.forEach(item => {
    item.classList.toggle('menu');
  });

  logo.classList.toggle('menu');
  header.classList.toggle('menu');
  list.classList.toggle('menu');

  navItems.forEach(item => {
    item.classList.toggle('menu');
  });

  active.classList.toggle('nav__item--active');

  promo.classList.toggle('menu');

  title.classList.toggle('menu');
  nav.classList.toggle('menu');
  headerIcon.classList.toggle('menu');
});

navItems.forEach(element => {
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

    navItems.forEach(item => {
      item.classList.toggle('menu');
    });

    promo.classList.toggle('menu');

    title.classList.toggle('menu');
    nav.classList.toggle('menu');
    headerIcon.classList.toggle('menu');
  });
});

form.addEventListener('submit', event => {
  document.location.reload();
  event.preventDefault();
});

list.addEventListener('click', ({ target }) => {
  if (target.classList.contains('nav__item')
    || target.classList.contains('nav__link')
  ) {
    navItems.forEach(item => {
      if (item.classList.contains('nav__item--active')) {
        item.classList.remove('nav__item--active');
      }
    });

    target.closest('.nav__item').classList.add('nav__item--active');
  }
});
