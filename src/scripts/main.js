'use strict';

const bar = document.querySelector('.nav__icon--bar');
const barX = document.querySelector('.menu__x-wrapper');
const menu = document.querySelector('.menu');

const links = document.querySelectorAll('a');

bar.addEventListener('click', () => {
  menu.classList.toggle('show-menu');

  menu.classList.remove('hide-menu');
});

barX.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
  menu.classList.add('hide-menu');
});

const form = document.getElementById('form');

form.addEventListener('submit', event => {
  event.preventDefault();
  form.reset();
  window.scrollTo(0, 0);
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

links.forEach(link => {
  link.addEventListener('click', () => {
    if (menu.classList.contains('show-menu')) {
      menu.classList.add('hide-menu');
      menu.classList.remove('show-menu');
    }
  });
});
