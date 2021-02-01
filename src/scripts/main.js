'use strict';

// Menu toggle:
document.querySelector('.sandwich').addEventListener('click', function(e) {
  const menu = document.querySelector('.nav-mobile');
  const sandwich = document.querySelector('.sandwich__button');

  menu.classList.toggle('nav-mobile--active');
  sandwich.classList.toggle('sandwich__button--active');
});
