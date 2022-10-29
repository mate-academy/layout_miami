
'use strict';

const menu = document.querySelector('.menu');
const openButton = document.querySelector('.header__burger-menu-toggler');
const closeButton = document.querySelector('.nav__close');

openButton.addEventListener('click', () => {
  menu.classList.add('menu--active');
}
);

closeButton.addEventListener('click', () => {
  menu.classList.remove('menu--active');
}
);
