'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const pageLinks = document.querySelectorAll('.page--link');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    pageLinks.forEach(link => {
      link.setAttribute('tabindex', '-1');
    });
  } else {
    pageLinks.forEach(link => {
      link.removeAttribute('tabindex');
    });
  }
});

const menuLinks = document.querySelectorAll('.menu--link');

window.addEventListener('hashchange', () => {
  if (window.location.hash !== '#menu') {
    menuLinks.forEach(link => {
      link.setAttribute('tabindex', '-1');
    });
  } else {
    menuLinks.forEach(link => {
      link.removeAttribute('tabindex');
    });
  }
});

const form = document.querySelector('#formId');

function submitForm(event) {
  event.preventDefault();
  event.target.reset();
}

form.addEventListener('submit', submitForm);
