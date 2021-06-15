'use strict';

const buttonOpenClose = document.querySelector('.main__header-menu');
const nav = document.querySelector('.main__header-nav');

buttonOpenClose.addEventListener('click', () => {
  buttonOpenClose.classList.toggle('main__header-menu--active');
  nav.classList.toggle('main__header-nav--active');
});
