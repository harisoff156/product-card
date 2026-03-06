// задание №3 создание объекта на основе личных данных

const person = {
  name: 'Айрат',
  surname: 'Харисов',
  age: '19',
  country: 'Россия',
  relationship: 'холост'
};

// задание №4 создание объекта c информацией об авто

const auto = {
  mark: 'Ford',
  model: 'Focus',
  release: '2010',
  color: 'фиолетовый',
  transmission: 'механика'
};

const updatedAuto = { ...auto, owner: person.name };

// задание №5 создание функции добавляющей свойство в объект

const addPropertyToObject = (obj, key, value) => {
  if (key in obj) {
    return;
  }

  obj[key] = value;
};

addPropertyToObject(updatedAuto, 'maxSpeed', '160');

// задание №6 создание функции вывода пары(свойсво:значение)

const showObjectValue = (obj, key) => {
  return obj[key];
};

showObjectValue(auto, 'model');

// задание №7 создание массива

const products = ['хлеб', 'яйца', 'молоко', 'творог', 'финики'];

// задание №8 создание массива
const schoolCurriculum = [
  {
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    year: 1866,
    coverColor: "коричневый",
    genre: "философский роман"
  },
  {
    title: "Герой нашего времени",
    author: "Михаил Лермонтов",
    year: 1840,
    coverColor: "зелёный",
    genre: "психологический роман"
  },
  {
    title: "Мертвые души",
    author: "Николай Гоголь",
    year: 1842,
    coverColor: "серый",
    genre: "поэма"
  }
];

schoolCurriculum.push({
  title: "Отцы и дети",
  author: "Иван Тургенев",
  year: 1862,
  coverColor: "тёмно-красный",
  genre: "роман"
});

// задание №9 создание  и объединение двух массивов

const russianClassic = [
  {
    title: "Обломов",
    author: "Иван Гончаров",
    year: 1859,
    coverColor: "песочный",
    genre: "реалистический роман"
  },
  {
    title: "Вишнёвый сад",
    author: "Антон Чехов",
    year: 1903,
    coverColor: "розовый",
    genre: "пьеса"
  },
  {
    title: "Человек в футляре",
    author: "Антон Чехов",
    year: 1898,
    coverColor: "серый",
    genre: "рассказ"
  }
];

const unityArrays = [...schoolCurriculum, ...russianClassic];

// задание №10 назначение в зависимости от редкости книги

const threshold = 1970;

const setValue = unityArrays.map(book => {
  return {
    ...book,
    isRare: book.year < threshold
  };
});


