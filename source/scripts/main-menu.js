const mainНeader = document.querySelector('.main-header');
const mainHeaderToggle = mainНeader.querySelector('.main-header__toggle');

const initMainMenu = () => {
  const onMainHeaderToggleClick = () => {
    mainНeader.classList.toggle('is-open');
  };

  mainHeaderToggle.addEventListener('click', onMainHeaderToggleClick);
};

export { initMainMenu };
