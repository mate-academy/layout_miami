'use strict';

const burger = document.getElementById('menu__toggle');
const burgerItem = document.getElementsByClassName('menu__item');
let isToggled = false;

const closeMenu = () => {
  document.body.style.overflow = 'visible';
  isToggled = false;
};

burger.addEventListener('click', () => {
  if (isToggled) {
    closeMenu();
  } else {
    document.body.style.overflow = 'visible';
    isToggled = false;
  }
});

for (let i = 0; i < burgerItem.length; i++) {
  burgerItem[i].addEventListener('click', () => {
    burger.checked = false;
    closeMenu();
  });
}
