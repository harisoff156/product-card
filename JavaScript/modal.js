export class Modal {
  constructor(modalWrapper) {
    this.modalWrapper = modalWrapper;
    this.modal = this.modalWrapper.querySelector('.modal');
    this.overlay = this.modalWrapper.querySelector('.overlay');
    this.openModalButton = this.modalWrapper.getElementById('#open-registration-button');
    this.closeModalButton = this.modalWrapper.querySelector('.close-register-button');
  }
  openModal() {
    this.modal.classList.add('modal-showed');
    this.overlay.style.display = 'block';
  }
  openButton() {
    this.openModalButton.addEventListener('click', () => {
      this.openModal();
    });
  }
  closeModal() {
    this.modal.classList.remove('modal-showed');
    this.overlay.style.display = 'none';
  }
  closeButton() {
    this.closeModalButton.addEventListener('click', () => {
      this.closeModal();
    });
  }
};