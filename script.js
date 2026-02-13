// покраска первой карточки

const recolorFirstCardButton = document.getElementById('recolor-first-card-button');
const firstCatalogCard = document.querySelector('.product-card');
const greenHashColor = '#aee5cfc3';

recolorFirstCardButton.addEventListener('click', () => {
  firstCatalogCard.style.backgroundColor = greenHashColor;
});

// покраска всех карточек

const orangeHashColor = '#e7bb7ed5';

const recolorAllCardButton = document.getElementById('recolor-all-card-button');
const catalogCards = document.querySelectorAll('.product-card');

recolorAllCardButton.addEventListener('click', () => {
  catalogCards.forEach(
    card => card.style.backgroundColor = orangeHashColor
  );
});

// Переход на страницу Google

const googleOpenButton = document.getElementById('open-google-button');
googleOpenButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите перейти на сайт Google?');

  if (answer === true) {
    window.open('https://google.com');
  } else {
    console.log('Пользователь отменил переход на Google');
  }
};

// вывод содержмиого главного заголовка в консоль

const mainTitle = document.querySelector('div > h1');
mainTitle.addEventListener('mouseenter', () => {
  console.log(mainTitle.textContent);
});

// смена цвета кнопки при нажатии на нее
const clickRecolorButton = document.getElementById("click-recolor-button");
clickRecolorButton.addEventListener('click', () => {
  clickRecolorButton.classList.toggle('recolor');
});


