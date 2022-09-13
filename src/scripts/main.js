'use strict';

const menubtn = document.querySelector('.nav__menu');
const menuList = document.querySelector('.nav__list');
let menuOpen = false;

menubtn.addEventListener('click', () => {
  if (!menuOpen) {
    menubtn.classList.add('open');
    menuOpen = true;
    menuList.style.left = '0';
    menuList.style.opacity = '1';
    menuList.style.transition = '2s all';

    document.body.style.overflow = 'hidden';
  } else {
    menubtn.classList.remove('open');
    menuOpen = false;
    menuList.style.left = '-100%';
    menuList.style.opacity = '0';
    menuList.style.transition = '2s all';
    document.body.style.overflowY = 'scroll';
  }
});

const formSubmit = document.querySelector('.contact__submit');

formSubmit.addEventListener('click', (event) => {
  event.preventDefault();
});
