'use strict';

const page = document.querySelector('.page');
const menuIcon = document.querySelector('.menu-icon');
const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuList = document.querySelector('.burger-menu__list');

menuIcon.addEventListener('click', openMenu);
burgerMenuList.addEventListener('click', openMenu);

function openMenu() {
  page.classList.toggle('page--no-scroll');
  burgerMenu.classList.toggle('header__burger-menu--open');

  menuIcon.classList.toggle('menu-icon--open');
  menuIcon.classList.toggle('header__menu--screen--small');
}

//  -----------------------------

const consultationtForm = document.querySelector('.contacts__form');
const contactForm = document.querySelector('.consultation__form');

const fakeSubmit = function(e) {
  e.preventDefault();
  window.alert('Thank you for your personal information :)');

  const answer = window.confirm('Do you want to donate 500$ for project?');

  if (answer) {
    window.alert('Thank you! You are very generous)');
  } else {
    window.alert('Something went wrong! ...thank you for you donate');
  }
};

consultationtForm.addEventListener('submit', fakeSubmit);
contactForm.addEventListener('submit', fakeSubmit);
