'use strict';

// nav menu
document.getElementById('openNavButton').addEventListener('click', () => {
  document
    .querySelector('.section-hero')
    .classList.add('section-hero--nav-opened');
  document.body.classList.add('page__body--with-menu');
});

const closeNavElements = [
  document.getElementById('closeNavButton'),
  ...document.querySelectorAll('.nav__link'),
];

closeNavElements.forEach((elem) => {
  elem.addEventListener('click', () => {
    document.body.classList.remove('page__body--with-menu');

    document
      .querySelector('.section-hero')
      .classList.remove('section-hero--nav-opened');
  });
});

// form submit
document
  .getElementById('form')
  .addEventListener('submit', (event) => {
    event.preventDefault();
  });
