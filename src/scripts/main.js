'use strict';
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#nav-menu') {
    document.body.classList.add('page--with-menu');
  } else {
    document.body.classList.remove('page--with-menu');
  }
});

const form = document.querySelector(".contact-us__form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  form.reset();
  window.scrollTo(0, 0);
});
