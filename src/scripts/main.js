'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with--menu');
  } else {
    document.body.classList.remove('page__body--with--menu');
  }
});

const form = document.getElementById("contact-us-form");

form.addEventListener('submit', (e) => {
  // действия с данными
  e.preventDefault();
  e.target.reset(); // очищаем форму
});
