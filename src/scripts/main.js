'use strict';

// eslint-disable-next-line no-unused-vars
const burger = document.querySelector('.burger');

// eslint-disable-next-line no-unused-vars
const header = document.querySelector('.header');

// eslint-disable-next-line camelcase
const header__menu = document.querySelector('.nav__list');

// eslint-disable-next-line no-unused-vars
const phone = document.querySelector('.phone__logo');

burger.addEventListener('click', function(e) {
  e.preventDefault();
  this.classList.toggle('is-active');
  this.classList.toggle('background');
});

burger.addEventListener('click', function(e) {
  e.preventDefault();
  header.classList.toggle('background');
  header__menu.classList.toggle('active');
  phone.classList.toggle('active');
});

// eslint-disable-next-line no-unused-vars
const anchors = document.querySelectorAll('a[href*="#"]');

// eslint-disable-next-line prefer-const
for (let anchor of anchors) {
  anchor.addEventListener('click', function(event) {
    event.preventDefault();

    const block = anchor.getAttribute('href');

    document.querySelector('' + block).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}
