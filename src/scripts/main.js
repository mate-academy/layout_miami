'use strict';

const form = document.getElementById('form');

form.addEventListener('submit', function handleClick(e) {
  e.preventDefault();
  e.target.reset();
});

document.getElementById('menu-btn').addEventListener('click', () => {
  document.body.classList.toggle('fixed-position');
});

document.getElementById('cross').addEventListener('click', () => {
  document.body.classList.toggle('fixed-position');
});

document.getElementById('link-home').addEventListener('click', () => {
  document.body.classList.toggle('fixed-position');
});

document.getElementById('main-logo').addEventListener('click', () => {
  document.body.classList.toggle('fixed-position');
});

document.getElementById('contact-link').addEventListener('click', () => {
  document.body.classList.toggle('fixed-position');
});

document.getElementById('details-link').addEventListener('click', () => {
  document.body.classList.toggle('fixed-position');
});

document.getElementById('compare-link').addEventListener('click', () => {
  document.body.classList.toggle('fixed-position');
});

document.getElementById('description-link').addEventListener('click', () => {
  document.body.classList.toggle('fixed-position');
});

document.getElementById('book-test').addEventListener('click', () => {
  document.body.classList.toggle('fixed-position');
});
