'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// const checkbox = document.querySelector('.button');

// checkbox.addEventListener('click', checkboxClick, false);

// function checkboxClick(event) {
//   const warn = "preventDefault() won't let you check this!<br>";

//   document.getElementById('.button').innerHTML += warn;
//   event.preventDefault();
// }
const form = document.querySelector('.form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});
