'use strict';
window.addEventListener('resize', setProductImageSize);
setProductImageSize();

function setProductImageSize() {
  const products = document.querySelectorAll('.products');
  const windowWidth = window.innerWidth;

  products.forEach(product => {
    const image = product.querySelector('.products__photo');

    if (windowWidth <= 380) {
      image.classList.add('products__photo--small');
      image.classList.remove('products__photo--medium');
    } else if (windowWidth <= 744) {
      image.classList.add('products__photo--medium');
      image.classList.remove('products__photo--small');
    } else {
      image.classList.remove('products__photo--small',
        'products__photo--medium');
    }
  });
}

document.getElementById('my-form').addEventListener('submit', (event) => {
  event.preventDefault();
  document.getElementById('my-form').reset();
});
