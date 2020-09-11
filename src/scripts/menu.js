'use strict';

const toggler = document.getElementById('toggler');

toggler.onclick = function toggleClass() {
  const nav = document.getElementById('nav');

  nav.classList.toggle('nav--active');
};
