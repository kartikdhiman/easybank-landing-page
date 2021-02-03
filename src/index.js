import './styles/style.scss';

const body = document.querySelector('body');
const hamburger = document.querySelector('#hamburger');
const header = document.querySelector('.header');
const fadeElements = document.querySelectorAll('.has-fade');

hamburger.addEventListener('click', () => {
  if (header.classList.contains('open')) {
    // close hamburger menu
    body.classList.remove('noScroll');
    header.classList.remove('open');
    fadeElements.forEach((element) => {
      element.classList.add('fade-out');
      element.classList.remove('fade-in');
    });
  } else {
    // Open hamburger menu
    body.classList.add('noScroll');
    header.classList.add('open');
    fadeElements.forEach((element) => {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
  }
});
