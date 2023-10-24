/* eslint-disable class-methods-use-this */
/* eslint-disable prefer-destructuring */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-useless-constructor */

function inverteNomeECor(param1: string, param2: string) {
  return function inverteNomeECor<T extends new(...args: any[]) => any>(target: T): T {
    console.log('Sou o decorator e recebi:', target, 'e', param1, param2);
    return class extends target {
      cor: string;

      nome: string;

      constructor(...args: any[]) {
        super(...args);
        this.cor = this.inverte(args[1]);
        this.nome = this.inverte(args[0]);
      }

      inverte(valor: string): any {
        return valor.concat(` ${param1}`);
      }
    };
  };
}

@inverteNomeECor('valor1', 'valor2')

export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe');
  }
}

const animal = new Animal('joelson', 'marrom');
console.log(animal);
