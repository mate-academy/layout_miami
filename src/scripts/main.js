"use strict";

const menu = document.querySelector(".menu");
const menuOpen = document.querySelector("#menu");
const menuClose = document.querySelector("#close");

menuOpen.addEventListener("click", () => {
  menu.classList.add("toggle-menu");
});

menuClose.addEventListener("click", () => {
  menu.classList.remove("toggle-menu");
});
