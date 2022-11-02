
'use strict';

// 123@sdf.com

const menu = document.querySelector('.menu');
const openButton = document.querySelector('.header__burger-menu-toggler');
const closeButton = document.querySelector('.nav__close');
const navItems = document.querySelectorAll('.nav__item');
const form = document.querySelector('.form');

const contactsInputName = document.querySelector('.contacts__input-name');
const contactsInputEmail = document.querySelector('.contacts__input-email');
const contactsInputMessage = document.querySelector('.contacts__input-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  contactsInputName.value = '';
  contactsInputEmail.value = '';
  contactsInputMessage.value = '';
});

navItems.forEach(navItem => {
  navItem.addEventListener('click', () => {
    body.style.overflow = '';
    menu.classList.remove('menu--active');
  });
});

const body = document.getElementById('home');

openButton.addEventListener('click', () => {
  menu.classList.add('menu--active');
  body.style.overflow = 'hidden';
}
);

closeButton.addEventListener('click', () => {
  menu.classList.remove('menu--active');
  body.style.overflow = '';
}
);
