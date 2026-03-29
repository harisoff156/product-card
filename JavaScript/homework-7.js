import { comments } from "/JavaScript/comments.js";
// Задание 2 - фильтрация массива
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.slice(4);
console.log(filteredNumbers);

// Задание 3 - проверка вхождения элемента в массив
const kitchenTools = ['ложка', 'вилка', 'сковородка', 'кастрюля', 'поварешка'];
const hasFryingPan = kitchenTools.includes('сковорода');
console.log(hasFryingPan);

// Задание 4 - функция - переворачиватель
const reverceArray = array => {
  array.reverse();
};

console.log(reverceArray(numbers));
console.log(reverceArray(kitchenTools));

// Задание 7 - перемещение объектов из массива

function getCommentEmailsByDomen(domen) {
  return comments.filter(comment => comment.email.includes(domen));
}

console.log(getCommentEmailsByDomen('.com'));

// Задание 8 - перезапись значений в массиве
const updatedComments = comments.map(comment => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1
}));

console.log(updatedComments);

// Задание 9 - вывод двух значений объекта
const commentNames = comments.map(({ id, name }) => ({ id, name }));
console.log(commentNames);

// Задание 10 - проверка длины тела сообщения
const isValidatedComments = comments.map(comment => ({
  ...comment,
  isInvalid: comment.body.length > 180
}));

console.log(isValidatedComments);

//Задание 11 - вывод массива почт
const commentEmailsByReduce = comments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);

const commentEmailsByMap = comments.map(comment => comment.email);

console.log(commentEmailsByReduce);
console.log(commentEmailsByMap);

//Задание 12 - приведение массива к строке
const commentEmailsToString = commentEmailsByMap.join(" ");
console.log(commentEmailsToString);


