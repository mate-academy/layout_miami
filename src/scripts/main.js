'use strict';

const pageBody = document.querySelector('.page__body');
const scrollToTop = document.querySelector('.scroll-to-top');
const form = document.querySelector('#form');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

window.addEventListener('scroll', function() {
  if (pageBody.getBoundingClientRect().top < -250) {
    scrollToTop.classList.add('scroll-to-top--show');
  } else {
    scrollToTop.classList.remove('scroll-to-top--show');
  }
});

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});
