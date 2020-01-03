'use strict';

const headerMain = document.querySelector('.header');
const headerToggle = document.querySelector('.header__toggle');

headerMain.classList.remove('header--nojs');

headerToggle.addEventListener('click', function() {
  if (headerMain.classList.contains('header--closed')) {
    headerMain.classList.remove('header--closed');
    headerMain.classList.add('header--opened');
  } else {
    headerMain.classList.add('header--closed');
    headerMain.classList.remove('header--opened');
  }
});
