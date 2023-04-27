'use strict';

// scroll-block
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.documentElement.classList.add('page--menu-open');
  } else {
    document.documentElement.classList.remove('page--menu-open');
  }
});

// form validation
const name = document.getElementById('name');
const email = document.getElementById('email');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  if (name.value === '' || email.value === '') {
    window.alert('Please, enter your data before submitting');
  }
  e.preventDefault();
});

// upward
const scroll = document.querySelector('.upward');

window.addEventListener('scroll', () => {
  scroll.classList.toggle('upward--active', window.scrollY > 500);
  scroll.classList.toggle('upward--dark', window.scrollY > 4190);
});

scroll.addEventListener('click', () => {
  window.scrollTo(0, 0);
});
