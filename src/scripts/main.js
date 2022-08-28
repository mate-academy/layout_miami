'use strict';

const checkbox = document.querySelector('.nav__checkbox');

checkbox.addEventListener('change', function() {
  if (this.checked) {
    document.body.classList.add('page__body--with-menu');
    // eslint-disable-next-line no-console
    console.log('checked');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
}, false);

const button = document.querySelector('.contact__button');

button.addEventListener('click', (e) => {
  e.preventDefault();
}, false);
