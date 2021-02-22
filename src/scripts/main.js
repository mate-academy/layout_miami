'use strict';

const $ = window.$;

$(document).ready(function() {
  $('.header__button').click(function() {
    slideBurger();
  });

  $('.burger__button').click(function() {
    slideBurger();
  });

  $('.mobile-nav__item').click(function() {
    slideBurger();
  });
});

function slideBurger() {
  $('.burger').slideToggle();
  $('.burger__nav').slideToggle();
}
