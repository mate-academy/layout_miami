'use strict';

const burger = document.querySelector('.burger');
const burgerIcon = document.querySelector('.header__burger');
const menuList = document.querySelector('.burger__list');
const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form__input');

burgerIcon.addEventListener('click', () => {
  burgerIcon.classList.toggle('header__burger--active');
  burger.classList.toggle('burger--active');
  menuList.classList.toggle('burger__link--active');
});

menuList.addEventListener('click', () => {
  burger.classList.remove('burger--active');
  burgerIcon.classList.remove('header__burger--active');
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }
});
