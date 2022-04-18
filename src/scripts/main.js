'use strict';

const contactForm = document.querySelector('#contact-us__form');

contactForm.addEventListener('submit', ev => ev.preventDefault());

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
    document.querySelector('.content').hidden = true;
  } else {
    document.body.classList.remove('page__body--with-menu');
    document.querySelector('.content').hidden = false;
  }
});
