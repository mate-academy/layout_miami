'use strict';

const mobileBurger = document.querySelector('.header__burger');
const mobileNav = document.querySelector('.mobile');

mobileBurger.onclick = function() {
  if (mobileBurger.style.position === 'fixed') {
    mobileBurger.style.position = 'relative';
    mobileBurger.style.right = '0px';
  } else {
    mobileBurger.style.position = 'fixed';
    mobileBurger.style.right = '20px';
  }

  if (mobileNav.style.visibility === 'visible') {
    mobileNav.style.visibility = 'hidden';
  } else {
    mobileNav.style.visibility = 'visible';
  };

  mobileBurger.classList.toggle('transformation');
};
