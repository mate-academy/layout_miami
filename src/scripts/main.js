'use strict';

const toggler = document.querySelector('.header__menu-icon');
const menu = document.querySelector('.nav');
const page = document.querySelector('.page');
const footer = document.querySelector('.footer');

const toggleMenu = () => {
  toggler.classList.toggle('header__menu-icon--active');
  menu.classList.toggle('nav--active');
  page.classList.toggle('page--fixed');
  footer.classList.toggle('footer--fixed');
};

if (!toggler.classList.contains('header__menu-icon--active')) {
  toggler.addEventListener('mouseenter', function() {
    toggler.classList.toggle('header__menu-icon--hover');
  });

  toggler.addEventListener('mouseout', function() {
    toggler.classList.remove('header__menu-icon--hover');
  });
}

toggler.addEventListener('click', toggleMenu);
menu.addEventListener('click', toggleMenu);

document.getElementById('consultation-form__message').innerHTML
  = document.getElementById('consultation-form__message').innerHTML.trim();
