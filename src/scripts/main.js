'use strict';

document.addEventListener('DOMContentLoaded', e => {
  const element = document.querySelector('#header');

  const className = 'header-transform';

  const scrollPosition = 200; // Adjust this value as needed

  const toggleClassOnScroll = () => {
    if (window.scrollY >= scrollPosition) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }

    if (menu.classList.contains('--menu-toggle')) {
      element.classList.remove(className);
    }
  };

  window.addEventListener('scroll', toggleClassOnScroll);

  // TOGGLING NAVIGATION

  const hamburgerBtn = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');

  hamburgerBtn.addEventListener('click', event => {
    menu.classList.toggle('--menu-toggle');
    hamburgerBtn.classList.toggle('--hamburger-transform');
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

  // Toggle class based on scroll positio

  function toggleToTopButton() {
    if (window.scrollY > 200) {
      toTopButton.classList.add('--toTop-visible');
    } else {
      toTopButton.classList.remove('--toTop-visible');
    }
  }

  window.addEventListener('scroll', toggleToTopButton);
});
