// Mobile menu
const menuSelect = document.querySelector('.menu');
const logoSelect = document.querySelector('.logo');
const cancelSelect = document.querySelector('.cancel');
const navSelect = document.querySelector('.nav-links');
const bioSelect = document.getElementById('bio-section');
const cardsSelect = document.getElementById('cards');
const aboutSelect = document.getElementById('about-section');
const contactSelect = document.getElementById('contact-me');
const mobileMenu = document.querySelector('.mobile-links');
const mobileLinks = document.querySelectorAll('.mobile-link');

mobileMenu.classList.add('hideit');

function blurry() {
  navSelect.classList.toggle('blur');
  bioSelect.classList.toggle('blur');
  cardsSelect.classList.toggle('blur');
  aboutSelect.classList.toggle('blur');
  contactSelect.classList.toggle('blur');
  logoSelect.classList.toggle('blur');
}

menuSelect.addEventListener('click', () => {
  menuSelect.classList.add('hideit');
  cancelSelect.style.display = 'block';
  mobileMenu.classList.remove('hideit');
  blurry();
});

cancelSelect.addEventListener('click', () => {
  menuSelect.classList.remove('hideit');
  cancelSelect.style.display = 'none';
  mobileMenu.classList.add('hideit');
  navSelect.classList.remove('blur');
  bioSelect.classList.remove('blur');
  cardsSelect.classList.remove('blur');
  aboutSelect.classList.remove('blur');
  contactSelect.classList.remove('blur');
});

mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navSelect.classList.remove('blur');
    bioSelect.classList.remove('blur');
    cardsSelect.classList.remove('blur');
    aboutSelect.classList.remove('blur');
    contactSelect.classList.remove('blur');
    logoSelect.classList.remove('blur');
    mobileMenu.classList.add('hideit');
    cancelSelect.classList.add('hideit');
    menuSelect.classList.remove('hideit');
  });
});