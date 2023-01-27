'use strict';

// nav menu script
document.querySelector('.burger-menu--closed').addEventListener('click', () => {
  document
    .querySelector('.section-hero')
    .classList.add('section-hero--nav-opened');
  document.body.classList.add('page__body--with-menu');
  document.querySelector('.nav').style.visibility = 'visible';

  let transitionEnded = false;

  document
    .querySelector('.nav')
    .addEventListener('transitionend', (event) => {
      transitionEnded = true;
    });

  if (transitionEnded) {
    // to disable tab selection before and after nav
    document.querySelector('.header__content').style.visibility = 'hidden';
    document.querySelector('.main-content').style.visibility = 'hidden';
  }
});

document.querySelector('.burger-menu--opened').addEventListener('click', () => {
  document
    .querySelector('.section-hero')
    .classList.remove('section-hero--nav-opened');
  document.body.classList.remove('page__body--with-menu');
  // to enable tab selection before and after nav
  document.querySelector('.header__content').style.visibility = 'visible';
  document.querySelector('.main-content').style.visibility = 'visible';

  document
    .querySelector('.nav')
    .addEventListener('transitionend', (event) => {
      document.querySelector('.nav').style.visibility = 'hidden';
    });
});
