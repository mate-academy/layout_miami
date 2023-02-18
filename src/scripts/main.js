'use strict';

const menu = 'menu';
const menuOpen = 'menu--open';
const pageBody = 'page-body';
const blur = 'page__body--blur';

document
  .getElementById('menu-icon')
  .addEventListener('click', function(e) {
    document.getElementById(pageBody).classList.add(blur);
    document.getElementById(menu).classList.add(menuOpen);
  });

document
  .getElementById('menu-close')
  .addEventListener('click', function(e) {
    document.getElementById(pageBody).classList.remove(blur);
    document.getElementById(menu).classList.remove(menuOpen);
  });
