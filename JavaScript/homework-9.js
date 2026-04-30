const emailForm = document.querySelector('.subscribe-form');

const openRegistrationBtn = document.getElementById('open-registration-button');
const modal = document.querySelector('.modal');
const closeRegistrationBtn = document.querySelector('.close-register-button');
const overlay = document.querySelector('.overlay');
const modalForm = document.querySelector('.modal-form');
const inputPassword = document.getElementById('password-input');
const inputPasswordRepeat = document.getElementById('password-repeat-input');
const submitRegistrationBtn = document.getElementById('registration-done');

const modalReject = document.querySelector('.registration-reject');

const modalData = new FormData(modalForm);
const data = Object.fromEntries(modalData.entries());

const user = { ...data, createdOn: new Date() };

// задание №4 добавление логики к футеру

emailForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailData = new FormData(emailForm);
  const obj = Object.fromEntries(emailData.entries());
  console.log(obj);
});

// задание №5 логика для открытия-закрытия модального окна

// openRegistrationBtn.addEventListener('click', () => {
//   modal.classList.add('modal-showed');
//   overlay.style.display = 'block';
// });

closeRegistrationBtn.addEventListener('click', () => {
  modal.classList.remove('modal-showed');
  overlay.style.display = 'none';
});

// задание №6 логика работы с модальным окном

inputPassword.addEventListener('input', () => {
  if (inputPassword.validity.patternMismatch) {
    inputPassword.setCustomValidity('Пароль должен содержать минимум 8 символов, хотя бы одну цифру и одну букву!');
  } else {
    inputPassword.setCustomValidity('');
  }
});

inputPasswordRepeat.addEventListener('input', () => {
  if (inputPassword.value !== inputPasswordRepeat.value) {
    inputPasswordRepeat.setCustomValidity('Пароли не совпадают!');
  } else {
    inputPasswordRepeat.setCustomValidity('');
  }
});

inputPassword.addEventListener('input', () => {
  if (inputPassword.value !== inputPasswordRepeat.value) {
    inputPasswordRepeat.setCustomValidity('Пароли не совпадают!');
  } else {
    inputPasswordRepeat.setCustomValidity('');
  }
});


submitRegistrationBtn.addEventListener('click', () => {
  if (modalForm.checkValidity()) {
    modalForm.addEventListener('submit', () => {
      event.preventDefault();
      const modalData = new FormData(modalForm);
      const data = Object.fromEntries(modalData.entries());
      modal.classList.remove('modal-showed');
      overlay.style.display = 'none';
      const updatedData = { ...data, createdOn: new Date() };
      console.log(updatedData);
    });
  } else confirm('Регистрация не удалась!');
});

