'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('content--with-menu');
  } else {
    document.body.classList.remove('content--with-menu');
  }
});

// const form = document.querySelector('form');

// form.addEventListener('submit', onButtonClick);

// function onButtonClick(event) {
//   event.preventDefault();
//   form.reset();
// }

// const form = document.querySelector('.contact-us__field');

// form.addEventListener('submit', submit);

// function submit(event) {
//   event.preventDefault();
//   form.reset();
// }

const form = document.querySelector('.form-field');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});
