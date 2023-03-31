'use strict';
// ---------side-navigation----------------

let navIsActive = false;
const menuIcon = document.querySelector('.header__menu-icon');
const navLinks = document.querySelectorAll('.sidenav__link');

menuIcon.addEventListener('click', openNav);

document.addEventListener('keydown', (e) => {
  if (e.keyCode === 27) {
    navIsActive = true;
    openNav();
  }
});

function openNav() {
  if (navIsActive) {
    document.querySelector('.sidenav').style.left = '100%';
    menuIcon.classList.remove('isActive');
    navIsActive = false;
    document.body.classList.remove('page__body--with-menu');
  } else {
    document.querySelector('.sidenav').style.left = '0';
    menuIcon.classList.add('isActive');
    navIsActive = true;
    document.body.classList.add('page__body--with-menu');
  }
}

menuIcon.addEventListener('click', openNav);

navLinks.forEach(link => {
  link.addEventListener('click', openNav);
});

// -----------end----------------

// ---------contact-form------------
const form = document.querySelector('.contact__form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
});

// -----------end-----------------
