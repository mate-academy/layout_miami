'use strict';

const $ = window.$;

$(document).ready(function() {
  $('.header__button').click(function() {
    $('.burger').slideToggle();
    $('.burger__nav').slideToggle();
  });
});

$(document).ready(function() {
  $('.burger__button').click(function() {
    $('.burger').slideToggle();
    $('.burger__nav').slideToggle();
  });
});

$(document).ready(function() {
  $('.mobile-nav__item').click(function() {
    $('.burger').slideToggle();
    $('.burger__nav').slideToggle();
  });
});
