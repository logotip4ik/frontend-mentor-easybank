const menu = document.querySelector('.header__menu');
const menuShadow = document.querySelector('.header__menu-shadow');
const hamburgerBtn = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close');

function toggleMenu(show) {
  menu.classList.toggle('show', show);
  menuShadow.classList.toggle('show', show);
  hamburgerBtn.style.display = show ? 'none' : 'block';
  closeBtn.style.display = !show ? 'none' : 'block';
  // hamburgerBtn.setAttribute('visible', !show);
  // close.setAttribute('visible', show);
}

hamburgerBtn.addEventListener('click', () => toggleMenu(true));
closeBtn.addEventListener('click', () => toggleMenu(false));
Array.from(menu.children).forEach((child) =>
  child.addEventListener('click', () => toggleMenu(false)),
);
