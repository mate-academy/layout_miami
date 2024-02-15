'use strict';

const buttonPrimary = document.querySelector('#button-primary');

buttonPrimary.addEventListener('click', buttonClick, false);

function buttonClick(event) {
  event.preventDefault();

  const message = 'Button clicked!<br>';

  document.getElementById('output-box').innerHTML += message;
}

// ..........

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
