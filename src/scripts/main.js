'use strict';

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const mybutton = document.getElementById('buttonTop');

window.addEventListener('scroll', () => {
  toggleButtonVisibility();
});

mybutton.addEventListener('click', () => {
  goToTop();
});

function toggleButtonVisibility() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
