'use strict';

const func = () => {
  const header = document.querySelector('.header');
  const navbar = document.querySelector('.header-navbar');
  const mainTitle = document.querySelector('.header-lower__title');
  const phone = document.querySelector('.header-upper__telephone');

  header.addEventListener('click', e => {
    const spsMaxLineLength = navbar.style.transform;

    if (e.target.classList.contains('header-upper__burger')) {
      if (spsMaxLineLength === 'translateY(-100%)' || spsMaxLineLength === '') {
        navbar.style.display = 'block';
        navbar.style.transform = 'translateY(0)';
        mainTitle.style.display = 'none';
        phone.style.opacity = '0';
      } else {
        navbar.style.transform = 'translateY(-100%)';
        mainTitle.style.display = 'block';
        phone.style.opacity = '1';
      };
    };
  });
};

func();
