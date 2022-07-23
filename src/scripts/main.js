'use strict';

let hiddenText = document.querySelector(".header__hide-text");
let phoneIcon = document.querySelector(".header__call");

// console.log(hiddenText, phoneIcon);

// оно на всех экранах работает а мне надо только на десктопе
// phoneIcon.addEventListener('mouseover', (event) => {
//   console.log('hover');
//   hiddenText.style. opacity = "1";
// });

// phoneIcon.addEventListener('mouseout', (event) => {
//   console.log('out');
//   hiddenText.style.opacity = "0";
// });

phoneIcon.addEventListener('mouseover', (event) => {
  console.log('hover');
  hiddenText.classList.add("hover")
});

phoneIcon.addEventListener('mouseout', (event) => {
  console.log('out');
  hiddenText.classList.remove("hover")
});
