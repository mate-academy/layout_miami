'use strict';

function menu() {
  const burger = document.querySelector('.header__hamburg-icon');

  burger.addEventListener('click', () => {
    burger.classList.toggle('opa');
  });
};

menu();
