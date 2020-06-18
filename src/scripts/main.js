'use strict';

let isFirstClick = true;
const header = document.querySelector('.header');
const menuButton = document.querySelector('.header__menu-button');
const menuItems = document.querySelectorAll('.navigation__link');

header.classList.remove('header--nojs');

menuButton.addEventListener('click', () => {
  if (isFirstClick) {
    header.classList.add('header--menu-open');
    isFirstClick = false;
  } else {
    header.classList.toggle('header--menu-open');
    header.classList.toggle('header--menu-close');
  }
});

for (const item of menuItems) {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    const id = item.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}
