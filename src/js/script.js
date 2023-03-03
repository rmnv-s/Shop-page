const dataCards = [
  { id: 1, title: 'Nike', price: 100 },
  { id: 2, title: 'Nord Face', price: 300 },
  { id: 3, title: 'Leica', price: 500 },
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
    cardToBasket(item);
    // addToCa(item)
  });

  return card;
}
function addCards(item, container) {
  container.append(addCardsToShop(item));
}

dataCards.forEach((card) => {
  addCards(card, shop);
});

// CART
const cartArray = [];
const cartInner = document.querySelector('.cart__inner');
function cardToBasket(item) {
  const templateProduct = document.querySelector('.template-product').content;
  const product = templateProduct.querySelector('.product').cloneNode(true);

  product.querySelector('.product__title').textContent = item.title;
  product.querySelector('.product__price').textContent = item.price;
  product.querySelector('.product__remove').addEventListener('click', (evt) => {
    evt.target.closest('.product').remove();
    // cartArray.splice(product);
    cartArray.forEach((el, i) => {
      if (el.id === item.id) cartArray.splice(i, 1);
    });
    console.log(cartArray);
    // console.log(item.id);
  });

  if (cartArray.find((i) => i.id === item.id)) {
    alert('product added');
  } else {
    cartInner.append(product);
    cartArray.push(item);
    console.log(cartArray);
  }
}

// var someArray = [{id: 1}, {id: 2}, {id: 3}],
// 	idToDelete = 2
// someArray.forEach(function(el, i) {
// 	if (el.id == idToDelete) someArray.splice(i, 1)
// })
// console.log(someArray)
// [{id: 1}, {id: 3}]
