'use strict';

const hamburger = document.querySelector('.hamburger');
const navContainer = document.querySelector('.nav-container');

hamburger.addEventListener('click', () => {
  navContainer.classList.toggle('nav-container--active');
  hamburger.classList.toggle('hamburger--active');
});

const headerNav = document.querySelector('.nav');
const burgerButton = document.querySelector('.hamburger');

headerNav.addEventListener('click', (event) => {
  burgerButton.click();
});
