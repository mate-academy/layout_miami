'use strict';

const btnNavEl = document.querySelector('.icon--menu');
const menuEl = document.querySelector('.menu');
const menuClose = document.querySelector('.menu--close-button');

btnNavEl.addEventListener('click', function() {
  menuEl.classList.add('menu--active');
});

menuClose.addEventListener('click', function() {
  menuEl.classList.remove('menu--active');
});

const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    menuEl.classList.remove('menu--active');
  });
});
