'use strict';

const toggler = document.getElementById('toggler');
const nav = document.getElementById('nav');
const logo = document.getElementById('logo');
const links = Array.from(document.getElementsByClassName('nav__link'));

toggler.onclick = function toggleClass() {
  logo.classList.toggle('logo--fixed');
  nav.classList.toggle('nav--active');
  toggler.classList.toggle('nav-toggler--opened');
};

for (let i = 0; i < links.length; i++) {
  links[i].onclick = function toggleClass() {
    logo.classList.toggle('logo--fixed');
    nav.classList.toggle('nav--active');
    toggler.classList.toggle('nav-toggler--opened');
  };
}
