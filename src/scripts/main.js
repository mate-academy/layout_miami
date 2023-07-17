'use strict';

document.addEventListener('DOMContentLoaded', e => {
  const header = document.querySelector('#header');

  const headerTransform = 'header-transform';

  const scrollPosition = 200;

  const toggleClassOnScroll = () => {
    if (window.scrollY >= scrollPosition) {
      header.classList.add(headerTransform);
    } else {
      header.classList.remove(headerTransform);
    }

    if (menu.classList.contains('--menu-toggle')) {
      header.classList.remove(headerTransform);
    }
  };

  window.addEventListener('scroll', toggleClassOnScroll);

  // TOGGLING NAVIGATION (OPEN/CLOSE) & PREVENT PAGE SCROLLNIG WHEN MENU IS OPEN

  const hamburgerBtn = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');

  hamburgerBtn.addEventListener('click', event => {
    event.preventDefault();
    menu.classList.toggle('--menu-toggle');
    hamburgerBtn.classList.toggle('--hamburger-transform');

    if (menu.classList.contains('--menu-toggle')) {
      document.body.classList.add('page__body--with-menu');
      document.body.style.removeProperty('overflow-x');
    } else {
      document.body.classList.remove('page__body--with-menu');
      document.body.style.addProperty('overflow-x');
    }
  });

  // SCROLL TO TOP ANIMATION

  const toTopButton = document.getElementById('toTop');

  function scrollToTop() {
    if (window.scrollY !== 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, window.scrollY - window.scrollY / 8);
    }
  }

  toTopButton.addEventListener('click', function(ev) {
    ev.preventDefault();
    scrollToTop();
  });

  // TOGGLE CLASS BASED ON PAGE POSITION

  function toggleToTopButton() {
    if (window.scrollY > 200) {
      toTopButton.classList.add('--toTop-visible');
    } else {
      toTopButton.classList.remove('--toTop-visible');
    }
  }

  window.addEventListener('scroll', toggleToTopButton);
});
