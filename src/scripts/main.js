'use strict';

const navBtn = document.querySelector('#nav-menu-trigger');
const nav = document.querySelector('.nav');
const navLogo = document.querySelector('.banner__logo');

navBtn.addEventListener('click', () => {
  nav.classList.toggle('nav--show');
  navBtn.classList.toggle('banner__menu-btn--close');
  navLogo.classList.toggle('banner__logo--black');
});

const navLink = document.querySelectorAll('.nav__link--scroll');

navLink.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav--show');
    navBtn.classList.remove('banner__menu-btn--close');
    navLogo.classList.remove('banner__logo--black');
  });
});

const contactBtn = document.querySelector('.contact__btn');
const cItems = document.querySelectorAll('.contact__input, .contact__textarea');

contactBtn.addEventListener('click', () => {
  cItems.forEach(item => {
    if (item.value === '') {
      item.classList.add('failed');
    } else {
      item.classList.remove('failed');
    }
  });

  if (document.querySelectorAll('.failed').length === 0) {
    contactBtn.closest('form').reset();
  }
});
