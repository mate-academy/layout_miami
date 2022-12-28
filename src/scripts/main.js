'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

function smth(event) {
  inputs.forEach(el => {
    el.value = '';
  });
  event.preventDefault();
}

const form = document.getElementById('form');
const inputs = document.querySelectorAll('.form-field');

form.addEventListener('submit', smth);

// var $page = $('html, body');
// $('a[href*="#"]').click(function() {
//     $page.animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 400);
//     return false;
// });
