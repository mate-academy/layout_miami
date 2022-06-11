'use strict';

// const name = document.getElementById('name');
// const email = document.getElementById('email');
// const message = document.getElementById('message');
// let counter = 0;
//
// function isEmpty(str) {
//   return !str.trim().length;
// }
//
// function eventListener(event) {
//   event.addEventListener('input', function() {
//     if (!isEmpty(this.value)) {
//       counter++;
//     } else {
//       counter--;
//     }
//   });
// }
//
// eventListener(name);
// eventListener(email);
// eventListener(message);
//
// if (counter === 0) {
//   document.getElementById('primary-button')
//     .addEventListener('click', function(event) {
//       event.preventDefault();
//     });
// }

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
