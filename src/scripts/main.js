'use strict';

const button = document.querySelector('.button--submit');
const form = document.querySelector('.contacts__form');

form.addEventListener('submit', (event) => {
  button.animate(
    [
      {
        background: '#fff',
        transform: 'scale(1)',
      },
      {
        background: '#9d9d9d',
        transform: 'scale(0.95)',
      },
      {
        background: '#fff',
        transform: 'scale(1)',
      },
    ],
    {
      duration: 300,
    });

  event.preventDefault();
  form.reset();
});

/*
const menuLink = document.querySelector('.menu__link');
const menuLinkContent = menuLink.textContent;
console.log(menuLinkContent);

menuLink.onclick = () => {
  document.title = menuLinkContent;
}
*/
