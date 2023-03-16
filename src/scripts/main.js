'use strict';

let navIsActive = false;
const menuIcon = document.querySelector('.header__icons-menu-icon');

menuIcon.addEventListener('click', openNav);

function openNav() {
  if (navIsActive) {
    document.querySelector('.sidenav').style.left = '100%';
    menuIcon.classList.remove('isActive');
    navIsActive = false;
  } else {
    document.querySelector('.sidenav').style.left = '0';
    menuIcon.classList.add('isActive');
    navIsActive = true;
  }
}

menuIcon.addEventListener('click', openNav);
