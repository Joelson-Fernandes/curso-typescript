import validator from 'validator';

const SHOW_MESSAGE_ERROR = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

// exibe mensagem de erro
function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLElement;
  const errorMessage = formFields.querySelector('.error-message') as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_MESSAGE_ERROR);
}

// esconde mensagem de erro
function hideErrorMessage(form: HTMLFormElement): void {
  form.querySelectorAll(`.${SHOW_MESSAGE_ERROR}`).forEach((i) => i.classList.remove(SHOW_MESSAGE_ERROR));
}

// Verifica se há campos vazios
function checkEmptyInput(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (validator.isEmpty(input.value)) showErrorMessage(input, 'Campo obrigatório!');
  });
}

// verifica o email
function checkEmail(input: HTMLInputElement): void {
  if (!validator.isEmail(input.value)) showErrorMessage(input, 'Email inválido');
}

// verifica se as senhas são iguais
function checkPassword(...inputs: HTMLInputElement[]): void {
  if (inputs[0].value !== inputs[1].value) showErrorMessage(inputs[1], 'As senhas devem ser iguais');
}

function shouldSendForm(form: HTMLFormElement): boolean {
  let send = true;
  form.querySelectorAll(`.${SHOW_MESSAGE_ERROR}`).forEach(() => { send = false; });
  return send;
}

form.addEventListener('submit', function (e: Event) {
  e.preventDefault();
  hideErrorMessage(this);
  checkEmptyInput(username, email, password, password2);
  checkEmail(email);
  checkPassword(password, password2);
  if (shouldSendForm(this)) console.log(form.submit());
});
