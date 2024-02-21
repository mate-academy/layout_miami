'use strict';

const menuClose = document.querySelector('.icon--close');
const menuOpener = document.querySelector('a[href="#menu"]');
const main = document.querySelector('main');
const footer = document.querySelector('.footer');

const toggleMenu = function() {
  main.toggleAttribute('hidden');
  footer.toggleAttribute('hidden');
};

menuOpener.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);

const form = document.querySelector('form');

function resertForm() {
  form.reset();
}

form.addEventListener('submit', resertForm);
