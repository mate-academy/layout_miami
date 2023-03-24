'use strict';

const observer = new window.IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animation--show');
    } else {
      entry.target.classList.remove('animation--show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.animation');

hiddenElements.forEach((el) => observer.observe(el));

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const formButton = document.querySelector('.form__button');
const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

formButton.addEventListener('click', (e) => {
  form.reset();
});
