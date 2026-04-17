import { productCards } from "/JavaScript/product-cards.js";

//Задание 3 - реализация шаблона для продуктовых карточек
const productTemplate = document.getElementById('product-template');
const productContainer = document.querySelector('.product-card__wrapper');

function renderProductCards(productCard) {
  productCard.forEach(productCard => {
    const productClone = productTemplate.content.cloneNode(true);
    const image = productClone.querySelector('.product-card__img');
    image.src = `/images/${productCard.img}.png`;

    productClone.querySelector('.product-card__for-skin').textContent = productCard.forSkin;
    productClone.querySelector('.product-card__title').textContent = productCard.title;
    productClone.querySelector('.product-card__descr').textContent = productCard.description;
    productClone.querySelector('.product-card__text').textContent;

    const productCardList = productClone.querySelector('.product-card__list');
    productCardList.innerHTML = '';
    productCard.composition.forEach(item => {
      const li = document.createElement('li');
      li.classList.add('product-card__item');
      li.textContent = item;
      productCardList.appendChild(li);
    });

    productClone.querySelector('.product-card__price-text').textContent;
    const currency = '\u20BD';
    productClone.querySelector('.product-card__price').textContent = `${productCard.price} ${currency}`;
    productContainer.appendChild(productClone);

  });
};

//Задание 4 - создание массива объектов продукт-описание
const productNameToDescriptionMap = productCards.reduce((acc, card) => {
  return [...acc, { [card.title]: card.description }];
}, []);

console.log(productNameToDescriptionMap);

//Задание 5 - функция промпт-сколько карточек отобразить?
function displayNumberCards() {
  const numberCards = prompt('Сколько карточек отобразить?');
  const count = parseInt(numberCards);
  if (!isNaN(count) && count >= 1 && count <= 5) {
    renderProductCards(productCards.slice(0, count));
  } else {
    alert("Пожалуйста, введите число от 1 до 5");
  };
};

console.log(displayNumberCards());


