/* eslint-disable no-undef */
'use strict';

$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger,.burger-menu,.header__logo,html').toggleClass('active');
  });
});

$(document).ready(function() {
  $('.burger-menu__item,.burger-menu__logo-img').click(function(event) {
    $(
      // eslint-disable-next-line max-len
      '.header__burger.active,.burger-menu.active,.header__logo.active,html.active')
      .toggleClass('active');
  });
});

const form = document.querySelector('.input');
const inputs
  = document.querySelectorAll('.input__name,.input__email,.input__message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }
});
