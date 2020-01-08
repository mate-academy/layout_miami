'use strict';

window.onload = function() {
/* global jQuery */
/* eslint no-undef: "error" */

  jQuery('.nav__link, .nav_mobile__link').on('click', function() {
    const navLink = jQuery(this).attr('href');

    if (navLink.length > 1) {
      if (jQuery('div').is(navLink)) {
        const blockTop = jQuery(navLink).offset().top;

        jQuery('html, body').animate({ scrollTop: blockTop }, 400);
      }
    }
  });
};
