// Funcionalidade Toggle Mode
const themeButton = document.getElementById('theme-button');
const body = document.querySelector('body');

themeButton.addEventListener('click', () => {
  body.classList.toggle('theme-dark');
  body.classList.toggle('theme-light');
});

// Funcionalidade Menu Mobile
const navbarToggle = document.querySelector('.navbar-toggle');
const navElements = document.querySelector('.nav-elements');

navbarToggle.addEventListener('click', () => navElements.classList.toggle('active'));
