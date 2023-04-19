'use strict';

const menuIcon = document.querySelector('.header__menuIcon');
const menuItems = document.querySelector('.header__nav');
const menuClose = document.querySelector('.header__nav__closeBtn');
const headerNavItem = document.querySelectorAll('.header__nav__list__item');
const headerNavlogo = document.querySelector('.header__nav__logo');
// console.log(headerNavItem)

const handleOpenClose = () => {
  menuItems.classList.toggle('header__nav--open');
};

menuIcon.addEventListener('click', () => {
  handleOpenClose();
});

menuClose.addEventListener('click', () => {
  handleOpenClose();
});

headerNavlogo.addEventListener('click', () => {
  handleOpenClose();
});

for (const elem of headerNavItem) {
  elem.addEventListener('click', () => {
    handleOpenClose();
  });
}

const form = document.querySelector('.contact__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});
