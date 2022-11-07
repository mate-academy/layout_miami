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

    const valueName = document.querySelector('.contacts__input--name').value;
    const valueText = document.querySelector('.contacts__input--message').value;
    const valueEmail = document.querySelector('.contacts__input--email').value;

    if (!valueEmail || !valueName || !valueText) {
      window.alert('All fields are required!!');
      return;
      
    }

    const docs = document.querySelectorAll('.contacts__input');

    docs.forEach(doc => {
      doc.value = '';
    });
  });
