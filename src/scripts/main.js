'use strict';

const burgerMenu = document.getElementById('menu__toggle');
const links = document.getElementsByClassName('menu__item');
let toggle = false;

const closeMenu = () => {
  document.body.style.overflow = 'visible';
  toggle = false;
};

burgerMenu.addEventListener('click', () => {
  if (toggle) {
    closeMenu();
  } else {
    document.body.style.overflow = 'visible';
    toggle = false;
  }
});

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', () => {
    burgerMenu.checked = false;
    closeMenu();
  });
}
