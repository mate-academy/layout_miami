'use strict';

const menuHamburger = document.querySelector('.header__icon-menu');
const navigation = document.querySelector('.container__nav');
const cross = document.querySelector('.nav__icon-cross');

menuHamburger.addEventListener('click', function(event) {
  navigation.classList.toggle('container__nav--active');
  navigation.classList.remove('container__nav--close');
});

cross.addEventListener('click', function(event) {
  navigation.classList.remove('container__nav--active');
  navigation.classList.toggle('container__nav--close');
});

window.addEventListener('hashchange', () => {
  navigation.classList.remove('container__nav--active');
  navigation.classList.add('container__nav--close');
});
