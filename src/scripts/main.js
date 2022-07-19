'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const phone = document.querySelectorAll('.header__phones');

  phone.forEach(function(el) {
    el.addEventListener('mouseover', function(e) {
      const headerWr = el.querySelector('.header__wrapper');

      headerWr.style.opacity = '1';
      headerWr.style.pointerEvents = 'all';
    });

    el.addEventListener('mouseout', function(e) {
      const headerWr = el.querySelector('.header__wrapper');

      headerWr.style.opacity = null;
      headerWr.style.pointerEvents = 'none';
    });
  });
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.contact-us__form');

document.querySelector('#button-send')
  .addEventListener('click', function(event) {
    event.preventDefault();

    const result = form.reportValidity();

    if (result === true) {
      form.reset();
    }
  }, false);
