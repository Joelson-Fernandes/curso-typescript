/* eslint-disable class-methods-use-this */
/* eslint-disable prefer-destructuring */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-useless-constructor */

type Constructor = new(...args: any[]) => any;

function inverteNomeECor(param1: string, param2: string) {
  return function inverteNomeECor<T extends Constructor>(target: T): T {
    console.log('Sou o decorator e recebi', target);
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

function outroDecorator(target: Constructor) {
  console.log('sou o outro decorador');
}

@outroDecorator
@inverteNomeECor('valor1', 'valor2')
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe');
  }
}

const animal = new Animal('joelson', 'marrom');
console.log(animal);
