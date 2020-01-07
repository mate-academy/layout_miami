'use strict';

window.onload = function() {
  const menuBtn = document.getElementsByClassName('header__gamb')[0];
  const gamb = document.getElementById('nav-icon');
  // console.log(menuBtn);
  const backgroundHeader = document.getElementsByClassName('header')[0];
  const handset = document.getElementsByClassName('header__contact-mob')[0];
  const navMobile = document.getElementsByClassName('nav_mobile')[0];
  const headerTitle = document.getElementsByClassName('header__title')[0];
  const activLink = document.getElementsByClassName('nav__link');

  menuBtn.addEventListener('click', function() {
    gamb.classList.toggle('open');
    backgroundHeader.classList.toggle('mobile_background');
    handset.classList.toggle('opacity');
    headerTitle.classList.toggle('opacity');
    navMobile.classList.toggle('block');
  });

  window.onresize = function() {
    gamb.classList.remove('open');
    backgroundHeader.classList.remove('mobile_background');
    handset.classList.remove('opacity');
    headerTitle.classList.remove('opacity');
    navMobile.classList.remove('block');
  };

  for (let i = 0; i < activLink.length; i++) {
    activLink[i].addEventListener('click', function() {
      for (let c = 0; c < activLink.length; c++) {
        activLink[c].classList.remove('nav__link--active');
      }
      this.classList.toggle('nav__link--active');
    });
  }

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
