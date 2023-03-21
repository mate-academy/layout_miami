/* eslint-disable padding-line-between-statements */
/* eslint-disable no-unused-vars */
/* eslint-disable strict */

const myform = document.querySelector('#form');
myform.addEventListener('submit', submit, false);

function submit(event) {
  event.preventDefault();
  myform.reset();
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
