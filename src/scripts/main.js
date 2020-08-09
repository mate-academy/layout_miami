'use strict';

function cardSlider(sliderSection) {
  const wrapper = document.querySelector(`${sliderSection} 
  .slider-section__slides-wrapper`);

  wrapper.style.marginLeft = '0';

  document.querySelector(`${sliderSection} 
  .slider-section__button--left`).onclick = () => {
    if (parseInt(wrapper.style.marginLeft) >= 0) {
      if (document.documentElement.clientWidth <= 650) {
        wrapper.style.marginLeft = '-1100%';
      } else {
        wrapper.style.marginLeft = '-200%';
      };
    } else {
      if (document.documentElement.clientWidth > 650
        && parseInt(wrapper.style.marginLeft) < -200) {
        wrapper.style.marginLeft = '-200%';
      } else {
        wrapper.style.marginLeft
        = parseInt(wrapper.style.marginLeft) + 100 + '%';
      };
    };
  };

  document.querySelector(`${sliderSection} 
  .slider-section__button--right`).onclick = () => {
    if (document.documentElement.clientWidth <= 650) {
      if (parseInt(wrapper.style.marginLeft) <= -1100) {
        wrapper.style.marginLeft = '0';
      } else {
        wrapper.style.marginLeft
        = parseInt(wrapper.style.marginLeft) - 100 + '%';
      };
    } else {
      if (parseInt(wrapper.style.marginLeft) <= -200) {
        wrapper.style.marginLeft = '0';
      } else {
        wrapper.style.marginLeft
        = parseInt(wrapper.style.marginLeft) - 100 + '%';
      };
    };
  };
};

cardSlider('.hot-prices__slider-section');
cardSlider('.brand-new__slider-section');
cardSlider('.also-like__slider-section');
