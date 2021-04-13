'use strict';

const navigation = document.querySelector('#navigation');
const toggler = document.querySelector('#toggler');
const navLinks = document.querySelectorAll('.nav__link');

toggler.addEventListener('click', () => {
  navigation.classList.toggle('nav--active');
  toggler.classList.toggle('header__nav-icon--close');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navigation.classList.remove('nav--active');
    toggler.classList.toggle('header__nav-icon--close');
  });
});
