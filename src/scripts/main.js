'use strict';

document.querySelector('.menu-icon').onclick = function() {
  document.querySelector('.menu-icon-line')
    .classList.toggle('menu-icon-active');

  document.querySelector('.mob__nav')
    .classList.toggle('mob__slide');
};

/* document.body.querySelector('.mob__nav').onclick = function() {
  document.classList.toggle('mob__slide');
}; */

/* const menuToggle = document.getElementById('menu-togle');

menuToggle.onclick = function() {
  menuToggle.classList.toggle('menu-icon-active');
}; */
