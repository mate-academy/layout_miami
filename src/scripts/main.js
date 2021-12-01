'use strict';

const main = document.getElementById('main');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');

    main.setAttribute('hidden', 'true');
  } else {
    document.body.classList.remove('page__body--with-menu');

    main.removeAttribute('hidden');
  }
});
