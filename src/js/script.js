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
const cartPriceTotal = document.querySelector('.cart__price-total');
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
      // console.log(item.id);
      // console.log(cartArray);
    });
    const sum = cartArray
      .map((item) => item.price)
      .reduce((previousValue, item) => previousValue + item, 0);
    cartPriceTotal.textContent = sum + ' $';
    // console.log(`sum:`, sum);
    console.log({ sum });
  });

  if (cartArray.find((i) => i.id === item.id)) {
    alert('product added');
  } else {
    cartInner.append(product);
    cartArray.push(item);

    //     const s = cartArray.map((item) => {
    //       return item.price;
    //     });
    //
    //     const sum = s.reduce((a, b) => {
    //       return a + b;
    //     });

    const sum = cartArray
      .map((item) => item.price)
      .reduce((previousValue, item) => previousValue + item, 0);
    cartPriceTotal.textContent = sum + ' $';
  }
}
