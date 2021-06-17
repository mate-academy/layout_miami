'use strict';

const toggler = document.querySelector('#toggler');
const nav = document.querySelector('.nav');
const link = document.querySelectorAll('.nav__link');

toggler.addEventListener('click', () => {
  nav.classList.toggle('nav--active');
  toggler.classList.toggle('header__menu--active');
}
);

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener('click', () => {
    nav.classList.toggle('nav--active');
    toggler.classList.toggle('header__menu--active');
  }
  );
}
