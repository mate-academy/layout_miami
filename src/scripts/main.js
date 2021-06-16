'use strict';

const label = document.querySelector('.header__label');
const callSection = document.querySelector('.header__call');
const navLinks = document.querySelectorAll('.header__link');
const form = document.querySelector('.contacts__form');
const inputs = document.querySelectorAll('.contacts__input');

label.addEventListener('click', () => {
  callSection.classList.toggle('header__call--hidden');
});

for (const link of navLinks) {
  link.addEventListener('click', () => {
    document.querySelector('.header__toggler').checked = false;
    callSection.classList.toggle('header__call--hidden');
  });
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }
});
