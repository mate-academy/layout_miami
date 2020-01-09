'use strict';

function initMenu() {
  const burger = document.querySelector('.header__menu-icon');

  burger.addEventListener('click', () => {
    burger.classList.toggle('header__menu-icon--is-opened');
  });
}
initMenu();
