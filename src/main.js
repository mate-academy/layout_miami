'use strict';

document.querySelector('.contact-us__form').addEventListener(
  'click',
  function(event) {
    document.getElementById('output-box').innerHTML
    += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
    event.preventDefault();
  },
  false
);

// window.addEventListener('hashchange', () => {
//   if (window.location.hash === '#menu') {
//     document.body.classList.add('page__body--with-menu');
//   } else {
//     document.body.classList.remove('page__body--with-menu');
//   }
// });

const page = document.querySelector('.page__body');
const toggler = document.querySelector('.menu__togler');

toggler.addEventListener('click', function() {
  page.classList.toggle('page__body--with-modal');
});
