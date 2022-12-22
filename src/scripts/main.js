'use strict';

// window.addEventListener('hashchange', () => {
//   if (window.location.hash === '#menu') {
//     document.body.classList.add('page__menu');
//   } else {
//     document.body.classList.remove('page__menu');
//   }
// });

const buttonForm = document.querySelector('#form__button');

buttonForm.addEventListener('click', (e) => {
  e.preventDefault();
});
