'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#nav') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const butt = document.getElementById('myform');

butt.addEventListener('submit', butSubmit, false);

function butSubmit(event) {
  event.preventDefault();
  document.getElementById('myform').reset();
}
