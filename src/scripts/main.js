'use strict';

const form = document.querySelector('.form');
const topElement = document.querySelector('.page__body');
const footer = document.querySelector('.footer');
const menu = document.querySelector('.icon--menu');
const cross = document.querySelector('.icon--cross');
const menuList = document.querySelector('.menu__list');

footer.addEventListener('click', () => topElement.scrollIntoView());

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
  topElement.scrollIntoView();
});

function handleAddedClass() {
  topElement.classList.add('page__scrolle-none');
};

function handleRemoveClass() {
  topElement.classList.remove('page__scrolle-none');
};

function handlerRemoveBlocScroll(event) {
  const { tagName } = event.target;

  if (tagName === 'A') {
    topElement.classList.remove('page__scrolle-none');
  }
}

menu.addEventListener('click', handleAddedClass);
cross.addEventListener('click', handleRemoveClass);
menuList.addEventListener('click', handlerRemoveBlocScroll);
