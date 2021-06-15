'use strict';

const label = document.querySelector('.header__label');
const callSection = document.querySelector('.header__call');
const navLinks = document.querySelectorAll('.header__link');

label.addEventListener('click', () => {
  callSection.classList.toggle('header__call--hidden');
});

for (const link of navLinks) {
  link.addEventListener('click', () => {
    document.querySelector('.header__toggler').checked = false;
  });
}
