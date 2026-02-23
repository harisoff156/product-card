// задание 3: функция принимает 2 парамаетра и выводит сообщение в консоль

function showCurrentTemperature(city, temperature) {
  console.log(`Сейчас в ${city} температура ${temperature} градусов`);
}

showCurrentTemperature('Бандаберг', 24);

// задание 4: функция с проверкой

const LIGHT_SPEED = 107925284.8;

const checkSpeed = speed => {
  if (speed > LIGHT_SPEED) {
    console.log('Сверхсветовая скорость');
  } else if (speed === LIGHT_SPEED) {
    console.log("Скорость света");
  } else {
    console.log('Субсветовая скорость');
  }
}

checkSpeed(107925284.8);

// задание 5: функция покупки товара

let butter = 'Сливочное масло';
let butterPrice = 720;

const purchase = budget => {
  if (budget >= butterPrice) {
    console.log(`${butter} приобретено. Спасибо за покупку!`);
  } else {
    let difference = butterPrice - budget;
    console.log(`Вам не хватает ${difference}, пополните баланс`);
  }
}

purchase(7);

// задание 6: именование функции

function calculateBudget() {

}

// задание 7: именование переменных 

let currentTime = "13:11";
const PI = 3.14;
let familyExpenses = '60000';