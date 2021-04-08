'use strict';

const header = document.querySelector('.header-mobile-popup');
const toggler = document.querySelector('.toggler');

function toggleSidebar() {
  header.classList.toggle('header-mobile-popup--has-popup');
  toggler.classList.toggle('toggler--open');
  document.body.classList.toggle('page--fixed');
}

header.addEventListener('click', toggleSidebar);
toggler.addEventListener('click', toggleSidebar);
