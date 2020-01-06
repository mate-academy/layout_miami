'use strict';

document
  .getElementById('header__action_show_menu')
  .addEventListener('change', function() {
    const contacts = document.querySelector('.menu_collapsed_contacts');
    const headerPhone = document.querySelector('.header__top > .header__phone');
    const headerTitle = document.querySelector('.header__title');
    const header = document.querySelector('.header');
    const navList = document.querySelector('.nav__list');

    if (this.checked) {
      headerTitle.style.display = 'none';
      headerPhone.classList.add('background-none');
      header.classList.add('menu_collapsed');
      navList.classList.add('menu_collapsed');
      contacts.classList.add('active');
    } else {
      headerPhone.classList.remove('background-none');
      headerTitle.style.display = 'block';
      header.classList.remove('menu_collapsed');
      navList.classList.remove('menu_collapsed');
      contacts.classList.remove('active');
    }
  });
