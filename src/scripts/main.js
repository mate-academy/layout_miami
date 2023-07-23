'use strict';

function hideNav() {
  const nav = document.querySelector('.nav');

  nav.classList.remove('open');
}

function showNav() {
  const nav = document.querySelector('.nav');

  nav.classList.add('open');
}

function scrollToElement(element, duration) {
  const targetPosition = element.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const startTime = Date.now();

  function ease(t, b, c, d) {
    // Interpolacja (w tym przypadku funkcja kwadratowa)
    const y = t / d;

    return c * y * y + b;
  }

  function animation(currentTime) {
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);

    window.scrollTo(0, run);

    if (timeElapsed < duration) {
      setTimeout(() => {
        animation(Date.now());
      }, 1000 / 60);
    }
  }

  animation(Date.now());
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('homeLink').addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    scrollToElement(target, 1000); // Spowolnione scrolowanie - 1000ms (1s)
    hideNav();
  });

  document.getElementById('recommendedLink')
    .addEventListener('click', function(e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));

      scrollToElement(target, 1000); // Spowolnione scrolowanie - 1000ms (1s)
      hideNav();
    });

  document.getElementById('categoriesLink')
    .addEventListener('click', function(e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));

      scrollToElement(target, 1000); // Spowolnione scrolowanie - 1000ms (1s)
      hideNav();
    });

  document.getElementById('howToBuyLink')
    .addEventListener('click', function(e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));

      scrollToElement(target, 1000); // Spowolnione scrolowanie - 1000ms (1s)
      hideNav();
    });

  document.getElementById('contactsLink')
    .addEventListener('click', function(e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));

      scrollToElement(target, 1000); // Spowolnione scrolowanie - 1000ms (1s)
      hideNav();
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.header__top--icons-menu');

  menuIcon.addEventListener('click', function() {
    showNav();
  });
});
