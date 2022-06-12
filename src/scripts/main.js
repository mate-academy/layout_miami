'use strict';

const btnDown = document.getElementsByClassName('nav__icon');
const btnUp = document.getElementsByClassName('nav__icon-cross');
const par = document.getElementsByClassName('nav__menu');

btnDown[0].onclick = function() {
  par[0].classList.add('nav__menu--active');
};

btnUp[0].onclick = function() {
  par[0].classList.remove('nav__menu--active');
};
