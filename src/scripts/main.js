'use strict';

const toggler = document.querySelector('#toggler');
const nav = document.querySelector('.nav');

toggler.addEventListener('click', () => {
  nav.classList.toggle('nav--active');
  toggler.classList.toggle('header__menu--active');
}
);
