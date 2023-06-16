const button = document.querySelector('.page-container__link');

const initButtonLink = () => {
  if (button) {
    button.addEventListener('click', () => history.back());
  }
};

export default initButtonLink;
