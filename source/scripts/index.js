// import { initSlider } from "./slider.js";

// initSlider();

const initSlider = () => {
  const sliderControlsList = document.querySelector('.slider__controls');
  const prevButton = document.querySelector('.slider__control--prev');
  const nextButton = document.querySelector('.slider__control--next');
  const slides = document.querySelectorAll('.slider__item');
  const paginationButtons = document.querySelectorAll('.slider__pagination-button');

  let activeSlideIndex = 0;

  if (slides.length === 0 || !paginationButtons || !sliderControlsList) {
    return;
  }

  const removeSlideActiveState = () => {
    slides[activeSlideIndex].classList.remove('slider__item--active');
    paginationButtons[activeSlideIndex].classList.remove('slider__pagination-button--active');
    paginationButtons[activeSlideIndex].disabled = false;
  };

  const addSlideActiveState = () => {
    slides[activeSlideIndex].classList.add('slider__item--active');
    paginationButtons[activeSlideIndex].classList.add('slider__pagination-button--active');
    paginationButtons[activeSlideIndex].disabled = true;
  };

  const checkDisabledButtons = (index) => {
    prevButton.disabled = (index === 0);
    nextButton.disabled = (index === (slides.length - 1));
  };

  sliderControlsList.addEventListener('click', (event) => {
    if (event.target.matches('.slider__control')) {
      removeSlideActiveState();

      if (event.target.contains(prevButton)) {
        activeSlideIndex -= 1;
      }
      if (event.target.contains(nextButton)) {
        activeSlideIndex += 1;
      }

      checkDisabledButtons(activeSlideIndex);
      addSlideActiveState();
    }
  });

  paginationButtons.forEach((element, index) => {
    element.addEventListener('click', () => {
      removeSlideActiveState();
      activeSlideIndex = index;
      checkDisabledButtons(activeSlideIndex);
      addSlideActiveState();
    });
  });
};

initSlider();


// Price

const initPrice = () => {
  const MIN_PRICE = 0;
  const START_MAX_PRICE = 800;
  const MAX_PRICE = 1000;

  const slider = document.querySelector('.form__slider');
  const inputMinPrice = document.querySelector('.form__input--min-price');
  const inputMaxPrice = document.querySelector('.form__input--max-price');

  noUiSlider.create(slider, {
    range: {
      'min': [MIN_PRICE],
      'max': [MAX_PRICE],
    },
    start: [MIN_PRICE, START_MAX_PRICE],
    step: 1,
    connect: true,
    format: {
      to: (value) => value.toFixed(0),
      from: (value) => parseFloat(value),
    }
  });

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
};

initPrice();

// main-menu

const mainНeader = document.querySelector('.main-header');
const mainHeaderToggle = mainНeader.querySelector('.main-header__toggle');

const onMainHeaderToggleClick = () => {
  mainНeader.classList.toggle('is-open');
};

mainHeaderToggle.addEventListener('click', onMainHeaderToggleClick);
