'use strict';

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    document.getElementById('button__top').style.display = 'block';
  } else {
    document.getElementById('button__top').style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

topFunction();

window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  const navLink = document.querySelectorAll('.nav__link');

  nav.classList.toggle('nav-sticky', window.scrollY > 770);

  navLink.forEach(link => {
    link.classList.toggle('nav__link-sticky', window.scrollY > 770);
  });
});
