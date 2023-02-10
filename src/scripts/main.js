'use strict';
// animation start

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  }
  );
}

const options = {
  threshold: [0.5],
};
/* eslint-disable */
const observer = new IntersectionObserver(onEntry, options);
const elements = document.querySelectorAll('.element-animation');

for (const elm of elements) {
  observer.observe(elm);
}
// animation end

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.form')

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});
