'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page-body--with-menu');
  } else {
    document.body.classList.remove('page-body--with-menu');
  }
});

const form = document.querySelector('.form');

function StopReloaded(e) {
  e.preventDefault();

  alert('Your message has been sent successfully!');

  form.reset();
}

form.addEventListener('submit', StopReloaded);
