'use strict';

const menu = document.querySelector('.mobile-menu');
const toggler = document.querySelector('.toggler');
const page = document.querySelector('.page');

toggler.onclick = function toggleSidebar() {
  menu.classList.toggle('mobile-menu--open');
  toggler.classList.toggle('toggler--open');
  page.classList.toggle('page--fixed');
};
