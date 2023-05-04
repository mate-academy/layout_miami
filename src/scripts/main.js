'use strict';

const openBtn = document.querySelector('.nav-opener');
const closeBtn = document.querySelector('.nav-closer');
const menu = document.querySelector('.nav');

openBtn.addEventListener('click', () => {
  menu.classList.remove('nav--closed');
  menu.classList.add('nav--opened');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('nav--opened');
  menu.classList.add('nav--closed');
});
