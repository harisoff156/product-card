export class Form {
  constructor(id) {
    this.form = document.querySelector(id);
    this.password = this.form.querySelector('#password-input');
    this.passwordRepeat = this.form.querySelector('#password-repeat-input');
    this.submitButton = this.form.querySelector('#registration-done');
  }
  reset() {
    this.form.reset();
  }
  getValues() {
    const formData = new FormData(this.form);
    return Object.fromEntries(formData.entries());
  }
  isValid() {
    return this.form.checkValidity()
  }
  submit(onSuccess) {
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!this.isValid()) {
        this.password.setCustomValidity('невалидна');
        this.password.reportValidity();
        return;
      }
      if (this.password.value !== this.passwordRepeat.value) {
        this.passwordRepeat.setCustomValidity('Пароли не совпадают');
        this.password.reportValidity();
        return;
      }
      if (this.password.validity.patternMismatch) {
        this.password.setCustomValidity('Пароль должен содержать минимум 8 символов, хотя бы одну цифру и одну букву!');
        this.password.reportValidity();
        return;
      }
      this.passwordRepeat.setCustomValidity('');
      let user = { ...this.getValues(), createdOn: new Date() };
      console.log(user);
      onSuccess();
      this.form.reset();
    });
  }
  submitFooter() {
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
      const emailData = new FormData(this.form);
      const obj = Object.fromEntries(emailData.entries());
      console.log(obj);
      this.form.reset();
    });
  }
};

