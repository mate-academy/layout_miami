'use strict';

const menuMb = document.querySelector('.header__mobile');
const menuOpen = document.querySelector('.action__icon');
const menuClose = document.querySelector('.mobile__icon');

menuOpen.addEventListener('click', function() {
  menuMb.style.display = 'block';
});

menuClose.addEventListener('click', function() {
  menuMb.style.display = 'none';
});
