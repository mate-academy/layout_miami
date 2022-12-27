'use strict';

const page = document.querySelector('.page');
const menu = document.querySelector('.menu');
const form = document.querySelector('.form');
const textArea = document.querySelector('#form-textarea');
const textareaResizer = document.querySelector('#textarea-resizer');

// #region scrollbar adjustment

const getScrollbarWidth = () => {
  const el = document.createElement('div');

  el.style.cssText = 'overflow:scroll; visibility:hidden; position:absolute;';
  document.body.appendChild(el);

  const width = el.offsetWidth - el.clientWidth;

  el.remove();

  return width;
};

const scrollbarWidth = getScrollbarWidth();

menu.style.paddingRight = `${scrollbarWidth}px`;

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    page.style.paddingRight = `${scrollbarWidth}px`;
    page.style.overflowY = `hidden`;
  } else {
    page.style.paddingRight = `0`;
    page.style.overflowY = `visible`;
  }
});

//  #endregion

textArea.addEventListener('input', () => {
  textareaResizer.innerText = textArea.value;
});

form.addEventListener('submit', e => {
  e.preventDefault();
  form.reset();
});
