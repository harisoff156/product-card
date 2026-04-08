import { productCards } from "/JavaScript/product-cards.js";

//Задание 3 - реализация шаблона для продуктовых карточек
function renderProductCards(products, limit) {
  const productTemplate = document.getElementById('product-template');
  const productContainer = document.querySelector('.product-card__wrapper');

  const productCards = products.slice(0, limit);

  productCards.forEach(productCard => {
    const productClone = productTemplate.content.cloneNode(true);
    const image = productClone.querySelector('.product-card__img');
    image.src = `/images/${productCard.img}.png`;

    productClone.querySelector('.product-card__for-skin').textContent = productCard.forSkin;
    productClone.querySelector('.product-card__title').textContent = productCard.title;
    productClone.querySelector('.product-card__descr').textContent = productCard.description;
    productClone.querySelector('.product-card__text').textContent = productCard.text;

    const productCardList = productClone.querySelector('.product-card__list');
    productCardList.innerHTML = '';
    productCard.composition.forEach(item => {
      const li = document.createElement('li');
      li.classList.add('product-card__item');
      li.textContent = item;
      productCardList.appendChild(li);
    })

    productClone.querySelector('.product-card__price-text').textContent = productCard.priceText;
    const ruble = '\u20BD';
    productClone.querySelector('.product-card__price').textContent = `${productCard.price} ${ruble}`;
    productContainer.appendChild(productClone);

  });
}

//Задание 4 - создание массива объектов продукт-описание
const productNameToDescriptionMap = productCards.reduce((acc, card) => {
  return [...acc, { [card.title]: card.description }];
}, []);

console.log(productNameToDescriptionMap);

//Задание 5 - функция промпт-сколько карточек отобразить?
const shouldDisplayCards = prompt('Сколько карточек отобразить?');
const count = parseInt(shouldDisplayCards);
if (!isNaN(count) && count >= 1 && count <= 5) {
  renderProductCards(productCards, count);
} else {
  alert("Пожалуйста, введите число от 1 до 5");
}