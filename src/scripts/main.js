'use strict';

const form = document.querySelector('.contacts__form');

function stopPageReload(e) {
  e.preventDefault();
}

form.onclick = stopPageReload;
