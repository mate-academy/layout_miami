'use strict';

if (window.location.hash === '#menu') {
  document.body.classList.add('page__menu');
} else {
  document.body.classList.remove('page__menu');
};
