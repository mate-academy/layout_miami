'use strict';

document.querySelector('.header__menu').onclick = function() {
  document.querySelector('.nav').classList.toggle('hide');
  document.querySelector('.header__menu').classList.toggle('close');
};
