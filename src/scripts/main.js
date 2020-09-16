'use strict'
function mobileNavOn() {
  document.querySelector('.navbar__adapt').style.display = 'block';
}
function mobileNavOff() {
  document.querySelector('.navbar__adapt').style.display = 'none';
  document.querySelector('.navbar__adapt').classList.add("closed");
}
