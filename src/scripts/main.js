'use strict';

const menuButton = document.querySelector('#burger-menu');
const menuOpen = document.querySelector('#menu-open');
const navMenu = document.querySelector('#nav-menu');
const logo = document.querySelector('#logo');
const body = document.querySelector('body');

function BurgerMenuToggle() {
  navMenu.classList.toggle('page__menu--is-open');
  menuOpen.classList.toggle('header__menu-opener--is-close');
  body.classList.toggle('page__body--scroll-off');
  logo.classList.toggle('header__logo--dark');
}

menuButton.addEventListener('click', BurgerMenuToggle);

navMenu.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    BurgerMenuToggle();
  }
});
