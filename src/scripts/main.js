'use strict';

window.onload = function() {
  const menuBtn = document.getElementsByClassName('header__gamb')[0];
  const gamb = document.getElementById('nav-icon');
  // console.log(menuBtn);
  const backgroundHeader = document.getElementsByClassName('header')[0];
  const handset = document.getElementsByClassName('header__contact-mob')[0];
  const navMobile = document.getElementsByClassName('nav_mobile')[0];
  const headerTitle = document.getElementsByClassName('header__title')[0];

  menuBtn.addEventListener('click', function() {
    gamb.classList.toggle('open');
    backgroundHeader.classList.toggle('mobile_background');
    handset.classList.toggle('opacity');
    headerTitle.classList.toggle('opacity');
    navMobile.classList.toggle('block');
  });

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
