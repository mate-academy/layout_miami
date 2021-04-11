'use strict';

const $ = window.$;

$(document).ready(function() {
  $('.header__burger-on').click(function() {
    $('.burger').slideToggle();
  });
});

$(document).ready(function() {
  $('.burger__off').click(function() {
    $('.burger').slideToggle();
  });
});
