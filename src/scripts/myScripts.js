'use strict';

// submit off
const submit = document.getElementById('myForm');

submit.addEventListener('submit', (e) => e.preventDefault());

// top scroll
const mybutton = document.getElementById('myBtn');

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 100
    || document.documentElement.scrollTop > 100) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

mybutton.addEventListener('click', (scrollToTop));

// scroll lock
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('body--with-menu');
  } else {
    document.body.classList.remove('body--with-menu');
  }
});

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
