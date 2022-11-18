'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));

const hiddenHeader = document.querySelectorAll('.hidden--header');

hiddenHeader.forEach((el) => observer.observe(el));

const form = document.querySelector('#form-submit');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});
