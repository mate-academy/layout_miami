'use strict';

const burgerToggler = () => {
  const burgerMenu = document.querySelector('.hamburger-block');
  const burgerMenuOpened = document.querySelector('.hamburger-mobile');
  const header = document.querySelector('.header');

  burgerMenu.addEventListener('click', () => {
    header.classList.toggle('header-opened');
  });

  burgerMenuOpened.addEventListener('click', () => {
    header.classList.toggle('header-opened');
  });
};

burgerToggler();
