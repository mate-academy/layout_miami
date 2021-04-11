'use strict';

const navIcon = document.querySelector('.nav__icon');
const menu = document.querySelector('.nav__menu');

navIcon.addEventListener('click', show);

function show() {
  menu.style.display = 'flex';

  navIcon.removeEventListener('click', show);
  navIcon.addEventListener('click', hide);
}

function hide() {
  menu.style.display = 'none';

  navIcon.removeEventListener('click', hide);
  navIcon.addEventListener('click', show);
}

const headerIcon = document.querySelector('.phone__icon');
const headerNumber = document.querySelector('.phone__number');

headerIcon.addEventListener('click', opasityOn);

function opasityOn() {
  headerNumber.style.opacity = '100';

  headerIcon.removeEventListener('click', opasityOn);
  headerIcon.addEventListener('click', opasityOff);
}

function opasityOff() {
  headerNumber.style.opacity = '0';
  headerIcon.removeEventListener('click', opasityOff);
  headerIcon.addEventListener('click', opasityOn);
}
