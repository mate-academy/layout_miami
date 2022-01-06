'use strict';

const noDefault = document.querySelector('.noDefault');

noDefault.addEventListener('submit', function(e) {
  e.preventDefault();

  document.getElementsByName('name')[0].value = '';
  document.getElementsByName('email')[0].value = '';
  document.getElementsByName('message')[0].value = '';
});

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
