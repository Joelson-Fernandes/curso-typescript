/* eslint-disable prefer-destructuring */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-useless-constructor */
function inverteNomeECor<T extends new(...args: any[]) => any>(target: T): T {
  console.log('Sou o decorator e recebi', target);
  return class extends target {
    cor: string;

    nome: string;

    constructor(...args: any[]) {
      super(...args);
      this.cor = args[1].split('');
      this.nome = args[0].split('').reverse();
    }
  };
}

@inverteNomeECor
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe');
  }
}

const animal = new Animal('joelson', 'marrom');
console.log(animal);
