import validator from 'validator';

const SHOW_MESSAGE_ERROR = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLElement;
  const errorMessage = formFields.querySelector('.error-message') as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_MESSAGE_ERROR);
}

function hideErrorMessage(form: HTMLFormElement): void {
  form.querySelectorAll(`.${SHOW_MESSAGE_ERROR}`).forEach((i) => i.classList.remove(SHOW_MESSAGE_ERROR));
}

form.addEventListener('submit', function (e: Event) {
  e.preventDefault();
  hideErrorMessage(this);
  if (validator.isEmail(email.value) === false) showErrorMessage(email, 'Email invalido');
  if (validator.isEmpty(username.value)) showErrorMessage(username, 'Usuario obrigatório!');
  if (password.value !== password2.value) showErrorMessage(password2, 'As senhas devem ser iguais');
});
