'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const iconMenu = document.querySelector('.icon__menu');
  const menu = document.querySelector('.menu');
  const closeIcon = document.querySelector('.menu__close');
  const closeItems = document.querySelectorAll('.menu__close');

  iconMenu.addEventListener('click', function() {
    menu.classList.add('menu__active');
  });

  closeIcon.addEventListener('click', function() {
    menu.classList.remove('menu__active');
  });

  closeItems.forEach(function(item) {
    item.addEventListener('click', function() {
      menu.classList.remove('menu__active');
    });
  });
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page-with-menu');
  } else {
    document.body.classList.remove('page-with-menu');
  }
});
