'use strict';

const menu = document.getElementById('menu');
const openMenu = document.querySelector('.open-toggler');
const closeMenu = document.querySelector('.close-toggler');
const navLinks = document.querySelectorAll('.nav__link');

openMenu.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.add('show');
});

closeMenu.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.remove('show');
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', (e) => {
    menu.classList.remove('show');
  });
}
