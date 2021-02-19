'use strict';

const mobileNav = document.querySelector('.header__mobile');
const openButton = document.querySelector('.action__icon');
const closeButton = document.querySelector('.mobile__icon');

openButton.addEventListener('click', function() {
  mobileNav.style.display = 'block';
});

closeButton.addEventListener('click', function() {
  mobileNav.style.display = 'none';
});
