'use strict';

const callForm = document.querySelector('.call__form');
const callSubmit = document.querySelector('.call__button');

callSubmit.addEventListener('click', () => {
  setTimeout(() => (
    [...callForm.children].forEach(child => (child.value = ''), 1000
    )));
});

const consultationForm = document.querySelector('.consultation__form');
const consultationSubmit = document.querySelector('.consultation__button');

consultationSubmit.addEventListener('click', () => {
  setTimeout(() => (
    [...consultationForm.children].forEach(child => (child.value = ''), 1000
    )));
});
