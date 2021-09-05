'use strict';

const sectionFirst = document.querySelector('.first');
const headerMenu = sectionFirst.querySelector('.header__menu');
const containerMenu = sectionFirst.querySelector('.container-menu');
const headerCross = containerMenu.querySelector('.header__cross');

headerMenu.addEventListener('click', e => {
  const activeMenu = e.target.closest('a');

  if (activeMenu) {
    containerMenu.style.visibility = 'visible';
  }
});

headerCross.addEventListener('click', e => {
  const activeCross = e.target.closest('a');

  if (activeCross) {
    containerMenu.style.visibility = 'hidden';
  }
});
