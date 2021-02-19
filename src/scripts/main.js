'use strict';

const burger = document.getElementById('burger');
const nav = document.getElementById('mobile-nav');
const links = document.getElementsByClassName('mobile-nav__link');
const phone = document.getElementById('mobile-phone');
const menuOpen = document.getElementById('open-menu');
const menuClose = document.getElementById('close-menu');

const visible = () => {
  if (nav.style.display === 'block') {
    nav.style.display = 'none';
    phone.style.visibility = 'visible';
    menuOpen.style.display = 'inline-block';
    menuClose.style.display = 'none';
  } else {
    phone.style.visibility = 'hidden';
    nav.style.display = 'block';
    menuOpen.style.display = 'none';
    menuClose.style.display = 'inline-block';
  }
};

[...links].forEach(el => el.addEventListener('click', visible));
burger.addEventListener('click', visible);
