const dataCards = [
	{ title: 'Nike', price: 100 },
	{ title: 'Nord Face', price: 300 },
	{ title: 'Leica', price: 500 },
];

//  приходят карточки товаров
const shop = document.querySelector('.cards');

function addCardsToShop(item) {
	const templateCards = document.querySelector('.template').content;
	const card = templateCards.querySelector('.card').cloneNode(true);

	const cardTitel = card.querySelector('.card__title');
	const cardPriceNumber = card.querySelector('.card__price-number');
	cardTitel.textContent = item.title;
	cardPriceNumber.textContent = item.price;

	// Button «Just buy»
	card.querySelector('.card__btn').addEventListener('click', () => {
		console.log('click');
		// addCardToBasket()
	});

	return card;
}
function addCards(item, container) {
	// const newCard = addCardsToShop(item);
	container.append(addCardsToShop(item));
}

dataCards.forEach(card => {
	addCards(card, shop);
});

// CART
function addCardToBasket() {
	const templateProduct = document.querySelector('.template-product').content;
	const product = templateProduct.querySelector('.product').cloneNode(true);
}
