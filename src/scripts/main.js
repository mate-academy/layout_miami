'use strict';

// Header section

const header = document.querySelector('.header');
const menu = document.querySelector('.menu');
const promo = document.querySelector('.promo');

const menuButton = document.querySelector('#menu-button');
const phoneButton = document.querySelector('#phone-button');
let isMenuOpen = false;

function openMenu() {
  header.classList.add('header--menu');
  menu.classList.add('menu--open');
  promo.classList.remove('promo--open');
}

function closeMenu() {
  header.classList.remove('header--menu');
  menu.classList.remove('menu--open');
  promo.classList.add('promo--open');
}

function toggleButton() {
  if (isMenuOpen) {
    menuButton.classList.add('icon--menu');
    menuButton.classList.remove('icon--cross');

    phoneButton.style.opacity = 1;
    phoneButton.style.visibility = 'visible';

    document.body.style.overflow = 'auto';

    closeMenu();

    isMenuOpen = false;
  } else {
    menuButton.classList.add('icon--cross');
    menuButton.classList.remove('icon--menu');

    phoneButton.style.opacity = 0;
    phoneButton.style.visibility = 'none';

    document.body.style.overflow = 'hidden';

    openMenu();

    isMenuOpen = true;
  }
}

menuButton.addEventListener('click', () => {
  toggleButton();
});

menu.addEventListener('click', () => {
  toggleButton();
});

// Form section

const form = document.querySelector('.contact-us__form');
const inputs = document.querySelectorAll('.contact-us__field');

form.addEventListener('submit', event => {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
});
