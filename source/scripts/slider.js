
const sliderControlsList = document.querySelector('.slider__controls');
const prevButton = document.querySelector('.slider__control--prev');
const nextButton = document.querySelector('.slider__control--next');
const slides = document.querySelectorAll('.slider__item');
const paginationButtons = document.querySelectorAll('.slider__pagination-button');

const removeSlideActiveState = (index) => {
  slides[index].classList.remove('slider__item--active');
  paginationButtons[index].classList.remove('slider__pagination-button--active');
  paginationButtons[index].disabled = false;
};

const addSlideActiveState = (index) => {
  slides[index].classList.add('slider__item--active');
  paginationButtons[index].classList.add('slider__pagination-button--active');
  paginationButtons[index].disabled = true;
};

const checkDisabledButtons = (index) => {
  prevButton.disabled = (index === 0);
  nextButton.disabled = (index === (slides.length - 1));
};

const initSlider = () => {
  if (slides.length === 0 || !paginationButtons || !sliderControlsList) {
    return;
  }

  let activeSlideIndex = 0;

  sliderControlsList.addEventListener('click', (event) => {
    if (event.target.matches('.slider__control')) {
      removeSlideActiveState(activeSlideIndex);

      if (event.target.contains(prevButton)) {
        activeSlideIndex -= 1;
      }
      if (event.target.contains(nextButton)) {
        activeSlideIndex += 1;
      }

      checkDisabledButtons(activeSlideIndex);
      addSlideActiveState(activeSlideIndex);
    }
  });

  paginationButtons.forEach((element, index) => {
    element.addEventListener('click', () => {
      removeSlideActiveState(activeSlideIndex);
      activeSlideIndex = index;
      checkDisabledButtons(activeSlideIndex);
      addSlideActiveState(activeSlideIndex);
    });
  });
};

export { initSlider };
