/* eslint-disable prefer-destructuring */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-useless-constructor */
function decorator<T extends new(...args: any[]) => any>(target: T): T {
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

@decorator
export class Animal {
  constructor(public nome: string, public cor: string) {}
}

const animal = new Animal('joelson', 'marrom');
console.log(animal);
