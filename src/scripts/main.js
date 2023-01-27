'use strict';

// nav menu script
document.querySelector('.burger-menu--closed').addEventListener('click', () => {
  document
    .querySelector('.section-hero')
    .classList.add('section-hero--nav-opened');
  document.body.classList.add('page__body--with-menu');
});

document.getElementById('closeNavBtn').addEventListener('click', () => {
  document
    .querySelector('.section-hero')
    .classList.remove('section-hero--nav-opened');
  document.body.classList.remove('page__body--with-menu');
});
