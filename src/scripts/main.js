'use strict';

const form = document.querySelector('.contacts__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const child of form.children) {
    child.value = '';
  }
});

// const menu = document.querySelector('.header__menu');

// const openMenu = document.querySelector('.header__menu-opener');
// const closeMenu = document.querySelector('.header__menu-closer');

// openMenu.addEventListener('click', () => {
//   menu.classList.add('header__menu--opened');
// });

// closeMenu.addEventListener('click', () => {
//   menu.classList.remove('header__menu--opened');
// });

// const menuLinks = document.querySelectorAll('.header__menu-link');

// for (const menuLink of menuLinks) {
//   menuLink.addEventListener('click', () => {
//     menu.classList.remove('header__menu--opened');
//   });
// }
