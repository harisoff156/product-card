import { Modal } from "./modal.js";
import { Form } from "./form.js";

const modal = new Modal(document.getElementById('modal-wrapper'));
const modalForm = new Form('.modal-form');
const emailForm = new Form('.subscribe-form');

// задание №4 добавление логики к футеру

emailForm.submitFooter();

// задание №5 логика для открытия-закрытия модального окна

modal.openButton();
modal.closeButton();

// задание №6 логика для аботы с модальным окном
modalForm.submit(() => { modal.closeModal() });




