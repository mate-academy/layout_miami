'use strict';

const burger = document.querySelector('.burger');
const burgerIcon = document.querySelector('.header__burger');
// const menuList = document.querySelectorAll('.burger__link');
const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form__input');

burgerIcon.addEventListener('click', () => {
  burgerIcon.classList.toggle('header__burger--active');
  burger.classList.toggle('burger--active');
});

//

// menuList.addEventListener('click', () => {
//   burger.classList.remove('burger--active');
// });

//  чого не працює?

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }
});
