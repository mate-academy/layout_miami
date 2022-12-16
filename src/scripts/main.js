'use strict';

const form = document.querySelector('.form');

const [...inputs] = document.querySelectorAll('.form__input');

const [first, second] = [...inputs];

console.log(first.value);

form.addEventListener("submit", prevent, false);

function prevent(event) {
  event.preventDefault();
  first.value = '';
  second.value = '';
}
