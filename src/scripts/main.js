'use strict';

const burgerMenuButton = document.querySelector(
  '.navigation__item--burger-menu',
);
const burgerMenu = document.querySelector('.burger-menu');
const form = document.querySelector('.form-container__inputs');
const pageContent = document.querySelector('.content');
const imgs = [...pageContent.querySelectorAll('img')];
const photoGallery = document.querySelector('.photo-gallery');

burgerMenuButton.addEventListener('click', () => {
  burgerMenu.classList.toggle('burger-menu--active');
  burgerMenuButton.classList.toggle('navigation__item--burger-menu--active');
  if (burgerMenu.classList.contains('burger-menu--active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputs = [...form.querySelectorAll('input')];
  const textarea = form.querySelector('textarea');

  if (inputs && textarea) {
    inputs.forEach((input) => (input.value = ''));
    textarea.value = '';
  }
});

imgs.forEach((img) => {
  img.addEventListener('click', (e) => {
    const target = e.target;
    const photoGalleryImg = photoGallery.querySelector('.photo-gallery__img');

    photoGalleryImg.src = target.src;
    photoGallery.classList.add('photo-gallery--active');
    document.body.style.overflow = 'hidden';
  });
});

photoGallery.addEventListener('click', (e) => {
  const closeButton = e.target.closest('.photo-gallery--close');

  if (!closeButton) {
    return;
  }

  photoGallery.classList.remove('photo-gallery--active');
  document.body.style.overflow = 'auto';
});
