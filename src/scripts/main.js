'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const scrollUp = document.querySelector('.scroll-up');

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20
    || document.documentElement.scrollTop > 20) {
    scrollUp.style.display = 'block';
  } else {
    scrollUp.style.display = 'none';
  }
}
