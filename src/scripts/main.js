'use strict';

const navState = document.querySelector('.mobile-header');
const screenSize = window.matchMedia('(min-width: 641px)');
const toggler = document.querySelectorAll('.toggler');

screenSize.addEventListener('change', (e) => {
  if (e.matches) {
    navState.style.display = 'none';
  }
});

toggler.forEach((item) => {
  item.addEventListener('click', (e) => {
    if (navState.style.display === 'block') {
      navState.style.display = 'none';
    } else {
      navState.style.display = 'block';
    }
  });
});
