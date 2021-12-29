'use strict';

window.addEventListener('hashchange', () => {
  const gallery = document.querySelector('.gallery');

  if (window.location.hash === '#menu') {
    gallery.style.display = 'none'; // push the 'Tab' and .gallery display: none
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
    gallery.style.display = 'block'; // .gallery demonstrate
  }
});
