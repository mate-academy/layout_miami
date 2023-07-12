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
  };

  window.addEventListener('scroll', toggleClassOnScroll);
});
