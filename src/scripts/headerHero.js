document.addEventListener('DOMContentLoaded', function() {
  const heroTitle = document.querySelector('.h1--desktop');
  const heroImageContainer = document.getElementById('heroImageContainer');

  const backgroundImage = document.createElement('img');

  backgroundImage.src = '../images/bike-bg-1260.jpg';

  backgroundImage.addEventListener('load', function() {
    const imageHeight = backgroundImage.naturalHeight;
    const headerHeight = document
      .querySelector('.header--desktop').offsetHeight;
    const heroTitleHeight = heroTitle.offsetHeight;
    const paddingValue = imageHeight - (headerHeight + 300 + heroTitleHeight);

    heroTitle.style.paddingBottom = `${paddingValue}px`;
  });

  heroImageContainer.appendChild(backgroundImage);
});
