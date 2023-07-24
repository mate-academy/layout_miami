'use strict';

document.querySelector('#form').addEventListener('submit', (e) =>
  e.preventDefault()
);

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header__icon:last-child')
    .addEventListener('click', openNav);

  document.querySelector('.header__logo--black')
    .addEventListener('click', closeNav);

  document.querySelector('.menu__list')
    .addEventListener('click', closeNav);

  document.querySelector('.closebtn').addEventListener('click', closeNav);

  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));

      target.scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
});

function openNav() {
  document.getElementById('mySidenav').style.width = '100%';
}

function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
}
