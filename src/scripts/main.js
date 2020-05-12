'use strict';

const burger = document.querySelector('.nav-top__burger--toggler');
const closeMenu = document.querySelector('.nav-toggle__close');
const menu = document.querySelector('.nav-toggle');
const clickListener = document.querySelector('.click-listener');

burger.onclick = classToggle;

function classToggle() {
  clickListener.classList.toggle('click-listener--active');
  menu.classList.toggle('nav-toggle--active');
};

menu.addEventListener('click', function(e) {
  if (e.target === closeMenu
    || e.target.classList.contains('nav-toggle__link')) {
    classToggle();
  }
});

clickListener.addEventListener('click', function(e) {
  if (e.target === clickListener) {
    classToggle();
  }
});
