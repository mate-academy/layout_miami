"use strict";

import AOS from 'aos';
import 'aos/dist/aos.css';

const form = document.querySelector('#form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();

  document.location = '#';
});

AOS.init({
  duration: 1500,
});
