'use strict';

(function() {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('.header__nav');
  burgerItem.addEventListener('click', () => {
    menu.classList.add('.header__nav--active');
  });
}());

(function() {
  const burgerItem = document.querySelector('.burger');
  const closeItem = document.querySelector('.nav__close');
  const menu = document.querySelector('.header__nav');
  burgerItem.addEventListener('click', () => {
    menu.classList.add('.header__nav--active');
  });
  closeItem.addEventListener('click', () => {
    menu.classList.remove('.header__nav--active');
  });
}());
