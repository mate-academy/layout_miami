'use strict';

const burger = document.querySelector('.header__toggler');
const header = document.querySelector('header');

burger.onclick = () => {
  header.classList.toggle('header--mobile-bg');
};
