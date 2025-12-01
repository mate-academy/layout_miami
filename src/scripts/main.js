'use strict';

function handleMenuState() {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--no-scroll');

    const menu = document.getElementById('menu');
    if (menu) {
      menu.style.opacity = '1';
      menu.style.visibility = 'visible';
      menu.style.transform = 'translateX(0)';
    }
  } else {
    document.body.classList.remove('page__body--no-scroll');

    const menu = document.getElementById('menu');
    if (menu) {
      menu.style.opacity = '0';
      menu.style.visibility = 'hidden';
      menu.style.transform = 'translateX(100%)';
    }
  }
}

window.addEventListener('hashchange', handleMenuState);

document.addEventListener('DOMContentLoaded', function() {
  handleMenuState();

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Formularz wysłany!');
    });
  }
});
