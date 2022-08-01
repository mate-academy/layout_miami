'use strict';

document.querySelectorAll('#form').forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
  });
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('scroll-hidden');
  } else {
    document.body.classList.remove('scroll-hidden');
  }
});
