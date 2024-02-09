'use strict';

function stopDefAction(event) {
  document.getElementById('form').reset();
  event.preventDefault();
}

document.getElementById('form').addEventListener(
  'submit', stopDefAction, false,
);

// const pageBody = document.querySelector('.page__body');

// window.addEventListener('hashchange', () => {
//   if (window.location.hash === '#menu') {
//     pageBody.classList.add('page__body--scroll');
//   } else {
//     pageBody.classList.remove('page__body--scroll');
//   }
// });
