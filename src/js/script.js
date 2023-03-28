const dataCards = [
  { id: 1, title: 'Nike', price: 100 },
  { id: 2, title: 'Nord Face', price: 300 },
  { id: 3, title: 'Leica', price: 500 },
];

//  приходят карточки товаров
const shop = document.querySelector('.cards');
const cartArray = [];

function renderCard(item) {
  const templateCards = document.querySelector('.template').content;
  const card = templateCards.querySelector('.card').cloneNode(true);

  const cardTitel = card.querySelector('.card__title');
  const cardPriceNumber = card.querySelector('.card__price-number');
  cardTitel.textContent = item.title;
  cardPriceNumber.textContent = item.price;

  // Button «Just buy»
  const cardButton = card.querySelector('.card__btn');
  cardButton.addEventListener('click', () => {
    renderBusket(item);

    console.log('Add card', { cartArray });
    // addToCa(item)
    // cartArray.map((i) => console.log(i.price));
  });

  return card;
}
function initialCardsToPage(item, container) {
  container.append(renderCard(item));
}
dataCards.forEach((card) => {
  initialCardsToPage(card, shop);
});

// CART
const cartPriceTotal = document.querySelector('.cart__price-total');
const cartInner = document.querySelector('.cart__inner');

function renderBusket(item) {
  const templateProduct = document.querySelector('.template-product').content;
  const product = templateProduct.querySelector('.product').cloneNode(true);

  product.querySelector('.product__title').textContent = item.title;
  product.querySelector('.product__price').textContent = item.price;

  product.querySelector('.product__remove').addEventListener('click', (evt) => {
    evt.target.closest('.product').remove();
    deletaCartToBusket(item);
  });

  if (cartArray.find((i) => i.id == item.id)) {
    if (alert('product added')) {
      console.log('btn-disable');
    }
  } else {
    cartArray.push(item);
    cartInner.append(product);
  }

  const sum = cartArray
    .map((item) => item.price)
    .reduce((previousValue, item) => previousValue + item, 0);
  cartPriceTotal.textContent = sum + ' $';

  // cartInner.append(product);
  // cartArray.push(item);
}
function deletaCartToBusket(item) {
  cartArray.forEach((el, i) => {
    if (el.id === item.id) cartArray.splice(i, 1);
  });
  const sum = cartArray
    .map((item) => item.price)
    .reduce((previousValue, item) => previousValue + item, 0);
  cartPriceTotal.textContent = sum + ' $';
}

//   const sum = cartArray
//     .map((item) => item.price)
//     .reduce((previousValue, item) => previousValue + item, 0);
//   cartPriceTotal.textContent = sum + ' $';
//   // console.log({ sum });
// });

//   if (cartArray.find((i) => i.id === item.id)) {
//     alert('product added');
//   } else {
//     cartInner.append(product);
//     cartArray.push(item);
//
//     const sum = cartArray
//       .map((item) => item.price)
//       .reduce((previousValue, item) => previousValue + item, 0);
//     cartPriceTotal.textContent = sum + ' $';
// }
