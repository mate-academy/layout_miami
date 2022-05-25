'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

(function addHeaderToPageWhenScroll() {
  const header = document.querySelector('#header');
  const sectionHome = document.querySelector('#home');
  const headerHeight = header.clientHeight;
  const sectionHomeHeight = sectionHome.clientHeight;
  const headerModifier = 'page__header--scroll';

  document.addEventListener('scroll', () => {
    if (window.scrollY >= (sectionHomeHeight - headerHeight)) {
      header.classList.add(headerModifier);
    } else {
      header.classList.remove(headerModifier);
    }
  });
})();
