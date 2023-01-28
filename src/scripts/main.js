'use strict';

const toggleNavigation = () => {
  document.querySelector('.burger').classList.toggle('burger--closed');
  document.querySelector('.burger').classList.toggle('burger--opened');
  document.querySelector('.nav').classList.toggle('nav--active');

  document.querySelector('.header__phone')
    .classList.toggle('header__phone--unvisible');
};

const clickToToggleNav = element => {
  document.querySelector(element).addEventListener('click', toggleNavigation);
};

clickToToggleNav('.burger');

const anchors = document.querySelectorAll('.nav__link');

for (const anchor of anchors) {
  anchor.addEventListener('click', elem => {
    elem.preventDefault();

    toggleNavigation();

    const blockID = anchor.getAttribute('href').slice(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}
