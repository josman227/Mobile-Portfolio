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
const mobileLink = document.querySelector('.link');
const mobileLink2 = document.querySelector('.link2');
const mobileLink3 = document.querySelector('.link3');

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

mobileLink.addEventListener('click', () => {
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

mobileLink2.addEventListener('click', () => {
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

mobileLink3.addEventListener('click', () => {
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
