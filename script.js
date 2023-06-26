// Mobile menu
const menuSelect = document.getElementById('menu');
const logoSelect = document.querySelector('.logo');
const cancelSelect = document.getElementById('cancel');
const navSelect = document.querySelector('.nav-links');
const bioSelect = document.querySelector('.bio-section');
const cardsSelect = document.querySelector('.cards');
const aboutSelect = document.querySelector('.about-section');
const contactSelect = document.querySelector('.contact-me');

function blurry() {
  navSelect.classList.toggle('blur');
  bioSelect.classList.toggle('blur');
  cardsSelect.classList.toggle('blur');
  aboutSelect.classList.toggle('blur');
  contactSelect.classList.toggle('blur');
  logoSelect.classList.toggle('blur');
}

menuSelect.addEventListener('click', () => {
  menuSelect.classList.add('hideIt');
  cancelSelect.classList.add('showit');
  blurry();
});
