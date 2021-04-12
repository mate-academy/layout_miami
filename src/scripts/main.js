'use strict';

const burger = document.querySelector('.header-top__btn');
const hidden = document.querySelector('.nav--hidden');
const modal = document.querySelector('.header');
const title = document.querySelector('.header-baner__title');
const phone = document.querySelector('.header-top__btn--phone');

burger.addEventListener('click', () => {
  burger.classList.toggle('header-top__btn--active');
  hidden.classList.toggle('nav--hidden');
  modal.classList.toggle('header--active');
  title.classList.toggle('header-baner__title--none');
  phone.classList.toggle('header-top__btn--hidden');
});
