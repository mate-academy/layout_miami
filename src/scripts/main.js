/* eslint-disable no-undef */
'use strict';

$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger,.burger-menu,.header__logo').toggleClass('active');
  });
});

$(document).ready(function() {
  $('.burger-menu__item,.burger-menu__logo-img').click(function(event) {
    $('.header__burger.active,.burger-menu.active,.header__logo.active')
      .toggleClass('active');
  });
});
