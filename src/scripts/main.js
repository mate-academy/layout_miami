/* eslint-disable no-undef */
'use strict';

$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger,.burger-menu').toggleClass('active');
  });
});

$(document).ready(function() {
  $('.burger-menu__item').click(function(event) {
    $('.header__burger.active,.burger-menu.active').toggleClass('active');
  });
});

$(document).ready(function() {
  $('.header__logo-img').click(function(event) {
    $('.header__burger.active,.burger-menu.active').toggleClass('active');
  });
});
