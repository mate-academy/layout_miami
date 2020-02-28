'use strict';

const buttonTop = document.getElementById('button__top');
const nav = document.querySelector('.nav');
const navLink = document.querySelectorAll('.nav__link');
const carousel = document.querySelector('.gallery__wrapper');
const btnPrev = document.querySelector('.gallery__btn_prev');
const btnNext = document.querySelector('.gallery__btn_next');
const dots = document.querySelectorAll('.gallery__dot');
let count = 0;

function scrollButtonTop() {
  if (document.documentElement.scrollTop > 650) {
    buttonTop.style.display = 'block';
  } else {
    buttonTop.style.display = 'none';
  }
}

function scrollNav() {
  nav.classList.toggle('nav-sticky', window.scrollY > 770);

  navLink.forEach(link => {
    link.classList.toggle('nav__link-sticky', window.scrollY > 770);
  });
}

function moveCarousel(width) {
  return function() {
    carousel.scrollLeft += width;
  };
}

function movePrevDot() {
  if (count > 0) {
    count--;
    dots[count].classList.add('gallery__dot_active');
    dots[count + 1].classList.remove('gallery__dot_active');
  }
}

function moveNextDot() {
  if (count < dots.length - 1) {
    count++;
    dots[count].classList.add('gallery__dot_active');
    dots[count - 1].classList.remove('gallery__dot_active');
  }
}

buttonTop.addEventListener('click', () => {
  document.documentElement.scrollTop = 0;
});

window.addEventListener('scroll', scrollButtonTop);
window.addEventListener('scroll', scrollNav);
btnPrev.addEventListener('click', moveCarousel(-800));
btnNext.addEventListener('click', moveCarousel(800));
btnPrev.addEventListener('click', movePrevDot);
btnNext.addEventListener('click', moveNextDot);
