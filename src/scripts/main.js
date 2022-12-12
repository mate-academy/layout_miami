'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const toTopBtn = document.getElementById('topButton');

toTopBtn.style.display = 'none';

document.querySelector('body').onscroll = function() {
  if (window.scrollY > 1000) {
    toTopBtn.style.display = 'block';
  } else {
    toTopBtn.style.display = 'none';
  }
};
