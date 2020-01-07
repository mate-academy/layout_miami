'use strict';

const navBarDesktop = document.querySelector('.nav-bar__list--desktop');
const navBar = document.querySelector('.nav-bar__list');

const handlerClick = function(e) {
  e.preventDefault();

  if (e.target.tagName !== 'A') {
    return;
  }

  const arrayOfClasses = Array.from(this.querySelectorAll('.nav-bar__link'));

  arrayOfClasses.map(el => el.classList.remove('nav-bar__link--active'));
  e.target.classList.add('nav-bar__link--active');
};

navBarDesktop.addEventListener('click', handlerClick);
navBar.addEventListener('click', handlerClick);
