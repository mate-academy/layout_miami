'use strict';

window.addEventListener('hashchange', function() {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document.querySelector('.contacts__button')
  .addEventListener('click', function(e) {
    e.preventDefault();

    const docs = document.querySelectorAll('.contacts__input');

    docs.forEach(doc => {
      doc.value = '';
    });
  });
