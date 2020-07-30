'use strict';

function cardSlider(sliderSection) {
  const wrapper = document.querySelector(`${sliderSection} 
  .cards-slider__slides-wrapper`);

  wrapper.style.marginLeft = '0';

  document.querySelector(`${sliderSection} 
  .slider-section__button--left`).onclick = () => {
    if (parseInt(wrapper.style.marginLeft) === 0) {
      wrapper.style.marginLeft = '-200%';
    } else {
      wrapper.style.marginLeft = parseInt(wrapper.style.marginLeft) + 100 + '%';
    };
  };

  document.querySelector(`${sliderSection} 
  .slider-section__button--right`).onclick = () => {
    if (parseInt(wrapper.style.marginLeft) === -200) {
      wrapper.style.marginLeft = '0';
    } else {
      wrapper.style.marginLeft = parseInt(wrapper.style.marginLeft) - 100 + '%';
    };
  };
};

cardSlider('.hot-prices__slider-section');
cardSlider('.brand-new__slider-section');
