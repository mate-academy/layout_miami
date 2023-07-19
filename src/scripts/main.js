'use strict';
init();

// ------- F U N C T I O N S -------
function init() {
  sendForm();
  handleMenu();
}

function sendForm() {
  const form = document.getElementById('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset();
  });
}

function handleMenu() {
  const menu = document.getElementById('menu');
  const htmlBody = document.getElementById('body');
  const showMenuBtn = document.getElementById('show-menu-btn');
  const hideMenuBtn = document.getElementById('hide-menu-btn');
  const menuLinks = document.querySelectorAll('.page-navigation__link');

  showMenuBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (!menu.classList.contains('menu__open')) {
      htmlBody.classList.add('body--with-menu');
      menu.classList.add('menu__open');
    }
  });

  hideMenuBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (menu.classList.contains('menu__open')) {
      htmlBody.classList.remove('body--with-menu');
      menu.classList.remove('menu__open');
    }
  });

  menuLinks.forEach(el => {
    el.addEventListener('click', (e) => {
      // e.preventDefault();

      if (menu.classList.contains('menu__open')) {
        htmlBody.classList.remove('body--with-menu');
        menu.classList.remove('menu__open');
      }
    });
  });
}
