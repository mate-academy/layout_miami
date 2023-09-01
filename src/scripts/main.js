"use strict";

import AOS from 'aos';
import 'aos/dist/aos.css';

const form = document.querySelector('#form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();

  document.location = '#';
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--menu');
  } else {
    document.body.classList.remove('page__body--menu');
  }
});

AOS.init({
  duration: 1500,
});
