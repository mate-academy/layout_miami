'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('#header');
  const headerTransform = 'header-transform';
  const scrollPosition = 200;
  const menu = document.querySelector('.menu');
  const navLink = document.querySelectorAll('.menu__link');

  navLink.forEach(link => link.addEventListener('click', e => {
    menu.classList.remove('--menu-toggle');
    document.body.classList.remove('page__body--with-menu');
    hamburgerBtn.classList.toggle('--hamburger-transform');
  }));

  const toggleClassOnScroll = () => {
    if (window.scrollY >= scrollPosition) {
      header.classList.add(headerTransform);
    } else {
      header.classList.remove(headerTransform);
    }
  };

  window.addEventListener('scroll', toggleClassOnScroll);

  // TOGGLING NAVIGATION (OPEN/CLOSE) & PREVENT PAGE SCROLLNIG WHEN MENU IS OPEN

  const hamburgerBtn = document.querySelector('.hamburger');
  const boxShadow = `0 0 2.2px rgba(0, 0, 0, 0.02),
  0 0 5.3px rgba(0, 0, 0, 0.03),
  0 0 10px rgba(0, 0, 0, 0.04),
  0 0 17.9px rgba(0, 0, 0, 0.04),
  0 0 33.4px rgba(0, 0, 0, 0.05),
  0 0 80px rgba(0, 0, 0, 0.07);
  `;

  hamburgerBtn.addEventListener('click', event => {
    event.preventDefault();
    menu.classList.toggle('--menu-toggle');
    hamburgerBtn.classList.toggle('--hamburger-transform');

    if (menu.classList.contains('--menu-toggle')) {
      document.body.classList.add('page__body--with-menu');
      document.body.style.removeProperty('overflow-x');
      header.style.boxShadow = 'none';
    } else {
      document.body.classList.remove('page__body--with-menu');
      document.body.style.addProperty('overflow-x');
      header.style.boxShadow = boxShadow;
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
