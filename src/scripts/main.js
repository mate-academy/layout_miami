/* eslint-disable padding-line-between-statements */
/* eslint-disable no-unused-vars */
/* eslint-disable strict */

/* var form=document.getElementById("form");
function submitForm(event) {
  event.preventDefault();
} */
const submit = document.querySelector('#submit');

submit.addEventListener('click', submitClick, false);

function submitClick(event) {
  event.preventDefault();
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
