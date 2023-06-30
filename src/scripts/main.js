'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document.querySelector('.button__container--second-button').addEventListener('click', (e) => {
  e.preventDefault();

  const inputs = [...document.querySelectorAll('input')];

  inputs.forEach(item => item.value = '');
  document.querySelector('textarea').value = '';
});
