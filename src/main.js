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

const page = document.querySelector('.page__body');
const togglers = document.querySelectorAll('.menu__togler');
const notabs = document.querySelectorAll('.notab *');

togglers.forEach(toggler => {
  toggler.addEventListener('click', function() {
    page.classList.toggle('page__body--with-modal');

    notabs.forEach(element => {
      if (element.getAttribute('tabindex') === '-1') {
        element.toggleAttribute('tabindex');
      } else {
        element.setAttribute('tabindex', '-1');
      }
    });
  });
});
