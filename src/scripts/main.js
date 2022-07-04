'use strict';

const menuBtn = document.querySelector('.icon--menu');
const menuBtns = document.querySelectorAll('.menu__item');
const closeBtn = document.querySelector('.icon--croos');
const menu = document.querySelector('.menu');
const submit = document.getElementById('submit');
const body = document.querySelector('.page__body');

function openMenu() {
  menu.classList.add('open');
  body.classList.add('page__body--with-menu');
}

function closeMenu() {
  menu.classList.remove('open');
  body.classList.remove('page__body--with-menu');
}

function onSubmit(e) {
  if (document.querySelector('form').checkValidity()) {
    e.preventDefault();
    document.querySelector('form').reset();
  }
}

[...menuBtns].forEach(e => {
  e.addEventListener('click', closeMenu);
});

menuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
submit.addEventListener('click', onSubmit);
