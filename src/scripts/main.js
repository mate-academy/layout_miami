'use strict';

const menu = document.querySelector('.menu__togler');
const toggler = document.querySelector('#toggler');

toggler.addEventListener('click', () => {
  menu.classList.toggle('menu__main--active');
});
