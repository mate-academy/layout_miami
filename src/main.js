'use strict';

const noDefault = document.querySelectorAll('.noDefault');

noDefault.addEventListener(
  'click',
  function(event) {
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
