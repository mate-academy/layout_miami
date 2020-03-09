'use strict';

const header = document.querySelector('.header');
const phoneIcon = document.querySelector('.header-contact__phone-icon');
const phoneNum = document.querySelector('.header-contact__phone');
const bars = document.querySelector('.header-contact__bars-icon');
const closing = document.querySelector('.header-contact__close-icon');
const order = document.querySelector('.header-contact__order');
const nav = document.querySelector('.nav');
const title = document.querySelector('.header-title');

bars.addEventListener('click', function() {
  header.classList.add('header--mobile');
  phoneIcon.classList.toggle('header-contact__phone-icon');
  phoneIcon.classList.toggle('header-contact__phone-icon--off');
  phoneNum.classList.toggle('header-contact__phone');
  phoneNum.classList.toggle('header-contact__phone--on');
  bars.classList.toggle('header-contact__bars-icon');
  bars.classList.toggle('header-contact__bars-icon--off');
  closing.classList.toggle('header-contact__close-icon');
  closing.classList.toggle('header-contact__close-icon--on');
  nav.classList.toggle('nav');
  nav.classList.toggle('nav--on');
  title.classList.toggle('header-title');
  title.classList.toggle('header-title--off');
  order.classList.toggle('header-contact__order');
  order.classList.toggle('header-contact__order--on');
});

closing.addEventListener('click', function() {
  header.classList.remove('header--mobile');
  phoneIcon.classList.toggle('header-contact__phone-icon--off');
  phoneIcon.classList.toggle('header-contact__phone-icon');
  phoneNum.classList.toggle('header-contact__phone--on');
  phoneNum.classList.toggle('header-contact__phone');
  bars.classList.toggle('header-contact__bars-icon--off');
  bars.classList.toggle('header-contact__bars-icon');
  closing.classList.toggle('header-contact__close-icon--on');
  closing.classList.toggle('header-contact__close-icon');
  nav.classList.toggle('nav--on');
  nav.classList.toggle('nav');
  title.classList.toggle('header-title--off');
  title.classList.toggle('header-title');
  order.classList.toggle('header-contact__order--on');
  order.classList.toggle('header-contact__order');
});

const navItems = document.querySelectorAll('.nav__item');

for (const i in navItems) {
  navItems[i].addEventListener('click', function() {
    const navActive = document.querySelector('.nav__item--active');

    navActive.classList.remove('nav__item--active');
    navItems[i].classList.add('nav__item--active');
  });
}
