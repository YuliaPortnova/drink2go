const MIN_PRICE = 0;
const START_MAX_PRICE = 900;
const MAX_PRICE_MOBILE = 977;
const MAX_PRICE_TABLET = 1000;
const MAX_PRICE_DESKTOP = 966;

const slider = document.querySelector('.form__slider');
const inputMinPrice = document.querySelector('.form__input--min-price');
const inputMaxPrice = document.querySelector('.form__input--max-price');

const getSliderRange = (width) => {
  let maxPrice;
  if (width < 768) {
    maxPrice = MAX_PRICE_MOBILE;
  } else if (width < 1440) {
    maxPrice = MAX_PRICE_TABLET;
  } else {
    maxPrice = MAX_PRICE_DESKTOP;
  }

  return {
    'min': [MIN_PRICE],
    'max': [maxPrice],
  };
};

noUiSlider.create(slider, {
  range: getSliderRange(window.innerWidth),
  start: [MIN_PRICE, START_MAX_PRICE],
  step: 1,
  connect: true,
  format: {
    to: (value) => value.toFixed(0),
    from: (value) => parseFloat(value),
  }
});

const initPrice = () => {
  slider.noUiSlider.on('slide', () => {
    const [min, max] = slider.noUiSlider.get();
    inputMinPrice.value = min;
    inputMaxPrice.value = max;
  });

  inputMinPrice.addEventListener('input', () => {
    slider.noUiSlider.set([inputMinPrice.value, inputMaxPrice.value]);
  });

  inputMaxPrice.addEventListener('input', () => {
    slider.noUiSlider.set([inputMinPrice.value, inputMaxPrice.value]);
  });

  window.addEventListener('resize', () => {
    slider.noUiSlider.updateOptions({
      range: getSliderRange(window.innerWidth)
    });
  });
};

const resetSlider = () => {
  slider.noUiSlider.set([MIN_PRICE, START_MAX_PRICE]);
};

export { initPrice, resetSlider };
