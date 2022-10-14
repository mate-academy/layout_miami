'use strict';

const toggler = document.querySelector('#toggler');
const menu = document.querySelector('.menu');

toggler.addEventListener('click', function() {
  menu.classList.toggle('menu--active');
  toggler.classList.toggle('icon--menu-opener--active');
});
