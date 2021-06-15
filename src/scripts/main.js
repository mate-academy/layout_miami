'use strict';

const label = document.querySelector('.header__label');
const callSection = document.querySelector('.header__call');

label.addEventListener('click', () => {
  callSection.classList.toggle('header__call--hidden');
});
