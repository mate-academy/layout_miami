'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const checkbox = document.querySelector('.button--form');

checkbox.addEventListener('click', checkboxClick, false);

function checkboxClick(event) {
  const warn = "preventDefault() won't let you check this!<br>";

  document.getElementById('.button--form').innerHTML += warn;
  event.preventDefault();
}
