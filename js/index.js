import './custom-select.js';

const headerBurgerButton = document.querySelector('.header__burger-button');

if (headerBurgerButton) {
  headerBurgerButton.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('active');
  });
}
