'use strict';

document.querySelector('#form-button').addEventListener(
  'click', function(event) {
    document.getElementById('output-box').innerHTML
    += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
    event.preventDefault();
  }, false);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
