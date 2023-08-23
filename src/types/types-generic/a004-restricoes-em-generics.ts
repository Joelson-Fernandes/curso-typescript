type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const person = {
  nome: 'Joelson',
  sobrenome: 'fernandes',
  idade: 26,
};

const sobrenome = obterChave(person, 'sobrenome');
const idade = obterChave(person, 'idade');

console.log(sobrenome);
console.log(idade);
