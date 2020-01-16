/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable semi */
'use strict'

$('a[href^="#"]').on('click', function(event) {
  const target = $(this.getAttribute('href'));

  if (target.length) {
    event.preventDefault();

    $('html, body').stop().animate({
      scrollTop: target.offset().top,
    }, 800);
  }
});
