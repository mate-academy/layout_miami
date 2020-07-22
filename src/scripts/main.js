'use strict';
/* global $ */

$(document).ready(function() {
  $('.top__burger').click(function(event) {
    $('.top__burger,.nav,.header__blue,.top__item')
      .toggleClass('active');
  });
});

$(document).ready(function() {
  $('.gallery__btn').click(function(event) {
    $('.gallery__hidden, .gallery__btn')
      .toggleClass('hidden');
  });
});

window.onload = function() {
  document.body.classList.add('loaded_hiding');

  window.setTimeout(function() {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
};
