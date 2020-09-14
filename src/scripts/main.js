'use strict';

const nav = document.querySelector('.header__nav');
const burger = document.querySelector('.burger');
const logo = document.querySelector('.logo');
const navItem = document.querySelectorAll('.nav__item');

burger.addEventListener('click', openMenu);

function openMenu() {
  nav.classList.toggle('active');
  burger.classList.toggle('active');
  logo.classList.toggle('active');
}

navItem.forEach(element => 
  { 
    element.addEventListener('click',openMenu)
  })
