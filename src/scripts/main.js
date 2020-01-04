'use strict';

const menuSlide = () => {
  const burger = document.querySelector('.mobile-nav');
  const header = document.querySelector('.header');

  burger.addEventListener('click', () => {
    header.classList.toggle('header--open');
    burger.classList.toggle('toogle');
  });
};

menuSlide();
