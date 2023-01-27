'use strict';

document.querySelector('.burger').addEventListener('click', () => {
  document.querySelector('.burger').classList.toggle('burger--close');
  document.querySelector('.burger').classList.toggle('burger--open');
  document.querySelector('.nav').classList.toggle('nav--active');

  document.querySelector('.header__phone')
    .classList.toggle('header__phone--unvisible');
});
