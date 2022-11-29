'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const button = document.getElementById('menu-button');
const menuContacts = document.getElementById('menu-contacts');

button.addEventListener('click', () => {
  if (menuContacts.classList.contains('menu__contacts--active')) {
    menuContacts.classList.remove('menu__contacts--active');
  } else {
    menuContacts.classList.add('menu__contacts--active');
  }
});

const phone = document.getElementById('icon-phone');
const headerContacts = document.getElementById('header-contacts');

phone.addEventListener('mouseover', () => {
  headerContacts.classList.add('header__contacts--active');
});

phone.addEventListener('mouseleave', () => {
  let timeout = setTimeout(() => {
    headerContacts.classList.remove('header__contacts--active');
  }, 300);

  headerContacts.addEventListener('mouseover', () => {
    clearTimeout(timeout);
  });
});

headerContacts.addEventListener('mouseleave', () => {
  headerContacts.classList.remove('header__contacts--active');
});
