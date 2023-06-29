/* eslint-disable quotes */
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

const showCard = () => {
  const cardContainer = document.querySelector('#cards');

  // Array of card data objects
  const cards = [
    {
      img: 'img/work-3.png',
      alt: 'Work 1',
      name: 'Tonic',
      features: ['Canopy', 'Back End Dev', '2015'],
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      languages: ['HTML', 'Ruby on Rails', 'CSS', 'JavaScript'],
      id: 'card1-btn',
      cardIndex: 0, // Add card index property
    },
    {
      img: 'img/work-1.png',
      alt: 'Work 2',
      name: 'Multi-Post Stories',
      features: ['FACEBOOK', 'Full Stack Dev', '2015'],
      description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
      languages: ['HTML', 'JavaScript'],
      id: 'card2-btn',
      cardIndex: 1, // Add card index property
    },
    {
      img: 'img/work-1.png',
      alt: 'Work 2',
      name: 'Multi-Post Stories',
      features: ['FACEBOOK', 'Full Stack Dev', '2015'],
      description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
      languages: ['HTML', 'JavaScript'],
      id: 'card2-btn',
      cardIndex: 2, // Add card index property
    },
    {
      img: 'img/work-1.png',
      alt: 'Work 2',
      name: 'Multi-Post Stories',
      features: ['FACEBOOK', 'Full Stack Dev', '2015'],
      description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
      languages: ['HTML', 'JavaScript'],
      id: 'card2-btn',
      cardIndex: 3, // Add card index property
    },
    // Add more card objects as needed
  ];

  // eslint-disable-next-line no-unused-vars
  cards.forEach((card, index) => {
    const article = document.createElement('article');
    article.classList.add('card');

    const cardImg = document.createElement('div');
    cardImg.classList.add('card-img');
    const img = document.createElement('img');
    img.src = card.img;
    img.alt = card.alt;
    cardImg.appendChild(img);
    article.appendChild(cardImg);

    const cardItems = document.createElement('div');
    cardItems.classList.add('card-items');

    const cardTitle = document.createElement('h2');
    cardTitle.textContent = card.name;
    cardItems.appendChild(cardTitle);

    const cardProps = document.createElement('ul');
    cardProps.classList.add('card-props');

    card.features.forEach((feature) => {
      const cardProp = document.createElement('li');
      cardProp.classList.add('card-prop');
      cardProp.textContent = feature;
      cardProps.appendChild(cardProp);
    });

    cardItems.appendChild(cardProps);

    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = card.description;
    cardItems.appendChild(cardText);

    const cardLanguages = document.createElement('ul');
    cardLanguages.classList.add('card-languages');

    card.languages.forEach((language) => {
      const cardLanguage = document.createElement('li');
      cardLanguage.classList.add('card-language');
      const p = document.createElement('p');
      p.textContent = language;
      cardLanguage.appendChild(p);
      cardLanguages.appendChild(cardLanguage);
    });

    cardItems.appendChild(cardLanguages);

    const cardButton = document.createElement('button');
    cardButton.classList.add('card-btn');
    cardButton.id = card.id;
    cardButton.textContent = 'See Project';
    cardItems.appendChild(cardButton);

    article.appendChild(cardItems);
    cardContainer.appendChild(article);

    // Event listener for card button click
    cardButton.addEventListener('click', () => {
      // eslint-disable-next-line no-use-before-define
      blurry();
      // eslint-disable-next-line no-use-before-define
      openPopup(card);
    });
  });
};

showCard();

// Function to open popup window
const openPopup = (card) => {
  const popup = document.createElement('div');
  popup.classList.add('popup');

  const closeButton = document.createElement('button');
  closeButton.classList.add('popup-close');
  closeButton.textContent = 'X';

  const popupContent = document.createElement('div');
  popupContent.classList.add('popup-content');
  popupContent.innerHTML = `
    <div class ="popup-items"></div>
    <h2>${card.name}</h2>
     <ul class ="card-prop">${card.features}</ul>  
    <img src="${card.img}" alt="${card.alt}">
    <p class ="pop-text">${card.description} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text <br><br> ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p>
    <ul class = "card-language">${card.languages}</ul>
    <button class = "pop-btn"><p>See live</p></button>
    <button class = "pop-btn"><p>See Source</p></button>

  `;

  popup.appendChild(closeButton);
  popup.appendChild(popupContent);
  document.body.appendChild(popup);

  // Event listener for close button click
  closeButton.addEventListener('click', () => {
    document.body.removeChild(popup);
    blurry();
  });
};
