'use strict';

const mobileBurger = document.querySelector('.header__burger');
const mobileNav = document.querySelector('.mobile');
const mobileClose = document.querySelector('.mobile__close');
const mobileLinks = [...document.querySelectorAll('.mobile__link')];

const toggleMobile = () => {
  mobileNav.classList.toggle('mobile--active');
};

mobileLinks.forEach(link => {
  link.onclick = toggleMobile;
});

mobileBurger.onclick = toggleMobile;
mobileClose.onclick = toggleMobile;
