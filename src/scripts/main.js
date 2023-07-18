'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.documentElement.classList.add('page--menu-open');
  } else {
    document.documentElement.classList.remove('page--menu-open');
  }
});

// upward
const scroll = document.querySelector('.upward');

window.addEventListener('scroll', () => {
  scroll.classList.toggle('upward--active', window.scrollY > 500);
});

scroll.addEventListener('click', () => {
  window.scrollTo(0, 0);
});
