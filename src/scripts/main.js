'use strict';

const screenSize = window.matchMedia('(min-width: 641px)');

screenSize.addEventListener('change', (e) => {
  const navState = document.querySelector('.mobile-header');

  if (e.matches) {
    navState.style.display = 'none';
  }
});
