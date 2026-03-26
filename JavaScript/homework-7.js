import { comments } from "/JavaScript/comments.js";
// Задание 2 - фильтрация массива
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNummers = numbers.slice(4);
console.log(newNummers);

// Задание 3 - проверка вхождения элемента в массив
const kitchenTools = ['ложка', 'вилка', 'сковородка', 'кастрюля', 'поварешка'];
const newKitchenTools = kitchenTools.includes('сковорода');
console.log(newKitchenTools);

// Задание 4 - функция - переворачиватель
const reverceArray = array => {
  array.reverse();
  return array;
};

console.log(reverceArray(numbers));
console.log(reverceArray(kitchenTools));

// Задание 7 - перемещение объектов из массива

function includeEmailsCom(domen) {
  return comments.filter(comment => comment.email.includes(domen));
}

console.log(includeEmailsCom('.com'));

// Задание 8 - перезапись значений в массиве
const updatedComments = comments.map(comment =>
  comment.id <= 5
    ? { ...comment, postId: 2 }
    : { ...comment, postId: 1 }
);

console.log(updatedComments);

// Задание 9 - вывод двух значений объекта
const idAndName = comments.map(({ id, name }) => ({ id, name }));
console.log(idAndName);

// Задание 10 - проверка длины тела сообщения
const lengthOfBody = comments.map(comment =>
  comment.body.length > 180
    ? { ...comment, isInvalid: true }
    : { ...comment, isInvalid: false }
);

console.log(lengthOfBody);

//Задание 11 - вывод массива почт
const arrayOfEmailsReduce = comments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);

const arrayOfEmailsMap = comments.map(comment => comment.email);
console.log(arrayOfEmailsReduce);

console.log(arrayOfEmailsMap);

//Задание 12 - приведение массива к строке
const arrayOfEmailsToString = arrayOfEmailsMap.join(" ");
console.log(arrayOfEmailsToString);


