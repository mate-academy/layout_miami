'use strict';

const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');
const body = document.body;

burger.addEventListener('click', mobileMenuToggle);

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', mobileMenuToggle);
}

function mobileMenuToggle() {
  burger.classList.toggle('burger--clicked');
  mobileMenu.classList.toggle('nav--visisble');
  body.classList.toggle('has-modal');
}
