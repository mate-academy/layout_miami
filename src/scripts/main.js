'use strict';
window.addEventListener('hashchange', () => {
  if(window.location.hash === '#menu') {
    document.body.classList.add('page__boddy--with-menu');
  } else {
    document.body.classList.remove('page__boddy--with-menu');
  }
})