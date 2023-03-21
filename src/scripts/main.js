'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const element = document.getElementById('message');
const placeholder = element.getAttribute('data-placeholder');

element.innerHTML === '' && (element.innerHTML = placeholder);

element.addEventListener('focus', function(e) {
  const value = e.target.innerHTML;

  value === placeholder && (e.target.innerHTML = '');
});

element.addEventListener('blur', function(e) {
  const value = e.target.innerHTML;

  value === '' && (e.target.innerHTML = placeholder);
});
