'use strict';
/* global $ */

$(document).ready(function() {
  $('.top__burger').click(function(event) {
    $('.top__burger,.nav,.header__blue,.top__call,.top__number')
      .toggleClass('active');
  });
});
