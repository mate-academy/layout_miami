'use strict';

const navButton = document.querySelector('.banner__menu-btn');
const nav = document.querySelector('.nav');
const navLogo = document.querySelector('.banner__logo');

navButton.addEventListener('click', () => {
  nav.classList.toggle('nav--show');
  navButton.classList.toggle('banner__menu-btn--close');
  navLogo.classList.toggle('banner__logo--black');
});

const navList = document.querySelector('.nav__list');

navList.addEventListener('click', (event) => {
  if (event.target.classList.contains('nav__link--scroll')) {
    nav.classList.remove('nav--show');
    navButton.classList.remove('banner__menu-btn--close');
    navLogo.classList.remove('banner__logo--black');
  }
});

const contactButton = document.querySelector('.contact__btn');
const contactForm = document.querySelector('.contact__form');
/* eslint-disable max-len */
const contactItems = document.querySelectorAll('.contact__input, .contact__textarea');

contactButton.addEventListener('click', () => {
  contactItems.forEach(item => {
    if (item.value === '') {
      item.classList.add('failed');
    } else {
      item.classList.remove('failed');
    }
  });

  if (document.querySelectorAll('.failed').length === 0) {
    contactForm.reset();
  }
});
