'use strict';

// document.querySelector('#iconPhone').addEventListener('mouseup', function() {
//   document.querySelector('#headerContact').classList.toggle(
//     'header__contact--visible');
// });

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#nav-menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
