'use strict';

const header = document.querySelector('.header');
const bars = document.querySelector('.header-contact__bars--icon');
const closing = document.querySelector('.header-contact__close--icon');
const phone = document.querySelector('.header-contact__phone--icon');
const nav = document.querySelector('.nav');
const title = document.querySelector('.header-title');

bars.addEventListener('click', function() {
  header.classList.add('header--mobile');
  phone.style.opacity = '0';
  bars.style.display = 'none';
  closing.style.cssText = 'display: block; cursor:pointer';
  nav.style.display = 'block';
  title.style.display = 'none';
});

closing.addEventListener('click', function() {
  header.classList.remove('header--mobile');
  phone.style.opacity = '1';
  bars.style.display = 'block';
  closing.style.display = 'none';
  nav.style.display = 'none';
  title.style.display = 'block';
});
