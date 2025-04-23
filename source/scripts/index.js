/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const locationElement = document.querySelector('.location');

navMain.classList.remove('main-nav--nojs');
locationElement.classList.remove('location--nojs');


navToggle.addEventListener('click', () => {
  navMain.classList.toggle('main-nav--on');
  navMain.classList.toggle('main-nav--off');
});
