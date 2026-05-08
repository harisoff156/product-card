import { Modal } from "./modal.js";
import { Form } from "./form.js";

const modal = new Modal(document.getElementById('modal-wrapper'));
const modalForm = new Form('.modal-form');
const emailForm = new Form('.subscribe-form');

// задание №4логика работы с модальным окном
emailForm.submitFooter();

// задание №5 логика работы с модальным окном
modal.openButton();
modal.closeButton();

// задание №6 логика работы с модальным окном
modalForm.submit(() => { modal.closeModal() });