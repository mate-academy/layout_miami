'use strict';

const buttonOpenClose = document.querySelector('.main__header-menu');
const nav = document.querySelector('.main__header-nav');
const link1 = document.getElementById('burger__link-1');
const link2 = document.getElementById('burger__link-2');
const link3 = document.getElementById('burger__link-3');
const link4 = document.getElementById('burger__link-4');
const link5 = document.getElementById('burger__link-5');
const link6 = document.getElementById('burger__link-6');

buttonOpenClose.addEventListener('click', () => {
  buttonOpenClose.classList.toggle('main__header-menu--active');
  nav.classList.toggle('main__header-nav--active');
});

link1.addEventListener('click', () => {
  buttonOpenClose.classList.remove('main__header-menu--active');
  nav.classList.remove('main__header-nav--active');
});

link2.addEventListener('click', () => {
  buttonOpenClose.classList.remove('main__header-menu--active');
  nav.classList.remove('main__header-nav--active');
});

link3.addEventListener('click', () => {
  buttonOpenClose.classList.remove('main__header-menu--active');
  nav.classList.remove('main__header-nav--active');
});

link4.addEventListener('click', () => {
  buttonOpenClose.classList.remove('main__header-menu--active');
  nav.classList.remove('main__header-nav--active');
});

link5.addEventListener('click', () => {
  buttonOpenClose.classList.remove('main__header-menu--active');
  nav.classList.remove('main__header-nav--active');
});

link6.addEventListener('click', () => {
  buttonOpenClose.classList.remove('main__header-menu--active');
  nav.classList.remove('main__header-nav--active');
});
