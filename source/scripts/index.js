import { initSlider } from './slider.js';
import { initPrice, resetSlider } from './price.js';
import { initMainMenu } from './main-menu.js';

const resetButton = document.querySelector('.form__button-reset');

initSlider();
initPrice();
initMainMenu();

resetButton.addEventListener('click', () => resetSlider());
