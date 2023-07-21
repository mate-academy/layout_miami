'use strict';

function hideNav() {
  const nav = document.querySelector('.nav');

  nav.classList.remove('open');
}

function showNav() {
  const nav = document.querySelector('.nav');

  nav.classList.add('open');
}

// function scrollToElement(element, duration) {
//   const targetPosition = element.getBoundingClientRect().top;
//   const startPosition = window.pageYOffset;
//   const distance = targetPosition - startPosition;
//   let startTime = null;

//   function animation(currentTime) {
//     if (startTime === null) {
//       startTime = currentTime;
//     }

//     const timeElapsed = currentTime - startTime;
//     const run = ease(timeElapsed, startPosition, distance, duration);

//     window.scrollTo(0, run);

//     // if (timeElapsed < duration) {
//     //   requestAnimationFrame(animation);
//     // }
//   }

//   // function ease(t, b, c, d) {
//   // // Interpolacja (w tym przypadku funkcja kwadratowa)
//   //   const y = t / d;

//   //   return c * y * y + b;
//   // }

//   // requestAnimationFrame(animation);
// }

// Dodaj obsługę przewijania przy użyciu spowolnionego smooth scrolling
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function(e) {
//     e.preventDefault();

//     const target = document.querySelector(this.getAttribute('href'));
//     scrollToElement(target, 1000); // Spowolnione scrolowanie - 1000ms (1s)
// });
// });
// function scrollToElement(element, duration) {
//   const targetPosition = element.getBoundingClientRect().top;
//   const startPosition = window.pageYOffset;
//   // const distance = targetPosition - startPosition;
//   // let startTime = null;

//   function ease(t, b, c, d) {
//     // Interpolacja (w tym przypadku funkcja kwadratowa)
//     const y = t / d;

//     return c * y * y + b;
//   }

//   // function animation(currentTime) {
//   //   if (startTime === null) {
//   //     startTime = currentTime;
//   //   }

//   //   const timeElapsed = currentTime - startTime;
//   //   const run = ease(timeElapsed, startPosition, distance, duration);

//   //   window.scrollTo(0, run);

//   // //   if (timeElapsed < duration) {
//   // //     requestAnimationFrame(animation);
//   // //   }
//   // //   requestAnimationFrame(animation);
//   // }

//   // requestAnimationFrame(animation);
// }

if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = function(callback) {
    return setTimeout(callback, 1000 / 60);
  };
}

document.addEventListener('DOMContentLoaded', function() {
  // Przypisanie event listenerów do elementów HTML
  document.getElementById('homeLink').addEventListener('click', function(e) {
    e.preventDefault();

    // const target = document.querySelector(this.getAttribute('href'));

    // scrollToElement(target, 1000);
    hideNav();
  });

  document.getElementById('recommendedLink')
    .addEventListener('click', function(e) {
      e.preventDefault();

      // const target = document.querySelector(this.getAttribute('href'));

      // scrollToElement(target, 1000);
      hideNav();
    });

  document.getElementById('categoriesLink')
    .addEventListener('click', function(e) {
      e.preventDefault();

      // const target = document.querySelector(this.getAttribute('href'));

      // scrollToElement(target, 1000);
      hideNav();
    });

  document.getElementById('howToBuyLink')
    .addEventListener('click', function(e) {
      e.preventDefault();

      // const target = document.querySelector(this.getAttribute('href'));

      // scrollToElement(target, 1000);
      hideNav();
    });

  document.getElementById('contactsLink')
    .addEventListener('click', function(e) {
      e.preventDefault();

      // const target = document.querySelector(this.getAttribute('href'));

      // scrollToElement(target, 1000);
      hideNav();
    });
});

document.addEventListener('DOMContentLoaded', function() {
  // Przypisanie event listenera do elementu z klasą "header__top--icons-menu"
  const menuIcon = document.querySelector('.header__top--icons-menu');

  menuIcon.addEventListener('click', function() {
    showNav();
  });
});
