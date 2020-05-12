'use strict';
/*eslint-disable */ //error *'burger' is defined but never used  no-unused-vars*, but it's used in button's onClick
function burger() { 
  const elem = document.getElementById('header');

  elem.classList.toggle('header--active');
}

function onSubmit() {
  console.log('hello');
  event.preventDefault();
  console.log('submit');
}
