'use strict';

const toggleNavigation = () => {
  document.querySelector('.burger').classList.toggle('burger--closed');
  document.querySelector('.burger').classList.toggle('burger--opened');
  document.querySelector('.nav').classList.toggle('nav--active');

  document.querySelector('.header__phone')
    .classList.toggle('header__phone--unvisible');
};

document
  .querySelector('.burger')
  .addEventListener('click', toggleNavigation);

document
  .querySelector('.nav__link')
  .addEventListener('click', toggleNavigation);
