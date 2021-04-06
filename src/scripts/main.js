'use strict';

const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuLine = document.querySelector('.burger-menu-line');
const mobile = document.querySelector('.mobile');
const mobileNav = document.querySelector('.mobile-nav__list');

burgerMenu.addEventListener('click', function(event) {
  document.body.classList.toggle('body--notactive');
  burgerMenu.classList.toggle('burger-menu--active');
  burgerMenuLine.classList.toggle('burger-menu-line--active');
  mobile.classList.toggle('mobile--active');
}
);

mobileNav.addEventListener('click', function(event) {
  document.body.classList.remove('body--notactive');
  burgerMenu.classList.remove('burger-menu--active');
  burgerMenuLine.classList.remove('burger-menu-line--active');
  mobile.classList.remove('mobile--active');
}
);
