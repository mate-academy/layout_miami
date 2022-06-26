'use strict';

const form = document.querySelector('.form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
  window.location.href = '#';
});

// // const form = document.querySelector('.form');
// // const inputs = document.querySelectorAll('.input');

// // form.addEventListener('submit', function(event) {
// //   event.preventDefault();

// //   for (const input of inputs) {
// //     input.value = '';
// //   }
// // });
