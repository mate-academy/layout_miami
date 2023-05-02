'use strict';

const images = document.querySelectorAll('img');
const logo = document.querySelector('.logo__img');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');

    images.forEach(function(image) {
      if (!image.isEqualNode(logo)) {
        image.style.display = 'none';
      }
    });
  } else {
    document.body.classList.remove('page__body--with-menu');

    images.forEach(function(image) {
      image.style.display = 'block';
    });
  }
});

const formReload = document.querySelector('.contact-us__form');

formReload.addEventListener('submit', (e) => {
  e.preventDefault();
  formReload.reset();
});

const links = document.querySelectorAll('a');

links.forEach(link => {
  if (link.getAttribute('href').startsWith('http')) {
    link.setAttribute('target', '_blank');
  }
});
