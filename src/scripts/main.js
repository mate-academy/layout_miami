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
  const showMenuBtn = document.getElementById('show-menu-btn');
  const hideMenuBtn = document.getElementById('hide-menu-btn');

  showMenuBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (!menu.classList.contains('menu__open')) {
      menu.classList.add('menu__open');
    }
  });

  hideMenuBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (menu.classList.contains('menu__open')) {
      menu.classList.remove('menu__open');
    }
  });
}
