'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

function stopDefAction(_submit) {
  _submit.preventDefault();
}

document.getElementById('submit').addEventListener(
  'click', stopDefAction, false
);
