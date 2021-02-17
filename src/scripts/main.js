'use strict';

const check = document.getElementById('toggler');

document.querySelector('#show').addEventListener('click', () => {
  if (check.hasAttribute('checked')) {
    check.removeAttribute('checked');

    return;
  }
  check.setAttribute('checked', 'checked');
});

document.querySelector('#end').addEventListener('click', () => {
  check.setAttribute('disabled', 'disabled');
  check.removeAttribute('checked');
});

document.querySelector('#end1').addEventListener('click', () => {
  check.setAttribute('disabled', 'disabled');
  check.removeAttribute('checked');
});

document.querySelector('#end2').addEventListener('click', () => {
  check.setAttribute('disabled', 'disabled');
  check.removeAttribute('checked');
});

document.querySelector('#end3').addEventListener('click', () => {
  check.setAttribute('disabled', 'disabled');
  check.removeAttribute('checked');
});
