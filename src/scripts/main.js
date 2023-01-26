'use strict';

// nav menu script
document.querySelector('.burger-menu').addEventListener('click', () => {
  document.querySelector('.burger-menu').classList.toggle('opened');
  document.querySelector('.burger-menu').classList.toggle('closed');
  document.querySelector('.header').classList.toggle('header--nav-opened');
  document.querySelector('.logo').classList.toggle('logo--nav-opened');
  document.body.classList.toggle('page__body--with-menu');

  document.querySelector('.header__call').classList
    .toggle('header__call--nav-opened');
});
