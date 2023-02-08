import dataCards from './data.js';

const shop = document.querySelector('.cards');

function addCardsToShop(item) {
	const templateCards = document.querySelector('.template').content;
	const card = templateCards.querySelector('.card').cloneNode(true);

	const cardTitel = card.querySelector('.card__title');
	const cardPriceNumber = card.querySelector('.card__price-number');
	cardTitel.textContent = item.title;
	cardPriceNumber.textContent = item.price;

	return card;
}

function addCards(item, container) {
	const newCard = addCardsToShop(item);
	container.append(newCard);
}

dataCards.forEach(card => {
	addCards(card, shop);
});
