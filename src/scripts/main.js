'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.getElementById('form');

form.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();
  form.reset();
});

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('scroll-animation-show');
    }
  });
}

const options = { threshold: [0.5] };
// eslint-disable-next-line no-undef
const observer = new IntersectionObserver(onEntry, options);
const elements = document.querySelectorAll('.scroll-animation');

for (const elm of elements) {
  observer.observe(elm);
}
