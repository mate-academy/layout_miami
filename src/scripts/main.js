'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--menu');
  } else {
    document.body.classList.remove('page__body--menu');
  }
});

// document.querySelector('#send').addEventListener('click', (event) => {
//   document.getElementById('output').innerHTML
//   += 'Sorry! There is no destination to send info.';
//   event.preventDefault();
// }, false);
