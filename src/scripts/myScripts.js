'use strict';

// submit off
const submit = document.getElementById('myForm');

submit.addEventListener('submit', (e) => e.preventDefault());

//  CODE BELOW WORKS ONLY WHEN ISERTED DIRECTLY IN HTML
//
// function scrollToTop() {
//   document.documentElement.scrollTop = 0;
//   document.body.scrollTop = 0;
// }

const mybutton = document.getElementById('myBtn');

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 100
    || document.documentElement.scrollTop > 100) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}
