const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav__toggle--on')) {
    navMain.classList.remove('main-nav__toggle--on');
    navMain.classList.add('main-nav__toggle--off');
  } else {
    navMain.classList.add('main-nav__toggle--on');
    navMain.classList.remove('main-nav__toggle--off');
  }
});
