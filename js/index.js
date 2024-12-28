import './custom-select.js';

const headerBurgerButton = document.querySelector('.header__burger-button');
const headerMenu = document.querySelector('.header__menu');

if (headerBurgerButton && headerMenu) {
  headerBurgerButton.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('active');
    headerMenu.classList.toggle('active');
  });
}
