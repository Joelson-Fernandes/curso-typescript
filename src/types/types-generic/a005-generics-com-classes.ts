/* eslint-disable no-plusplus */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-useless-constructor */

export class Pessoa<T, U> {
  constructor(public nome: T, public idade: U) {}
}

/*
const pessoa = new Pessoa('joelson', 26);
const pessoa1 = new Pessoa(['joelson'], 26);
const pessoa2 = new Pessoa(['joelson'], { idade: 26 });
const pessoa3 = new Pessoa<string, number>('joelson', 26);
*/

export class Pilha<T> {
  private contador = 0;

  private elementos: {[ K: number]: T} = {};

  push(elemento: T): void {
    this.elementos[this.contador] = elemento;
    this.contador += 1;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;

    this.contador--;
    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];
    return elemento;
  }

  isEmpty(): boolean {
    return this.contador === 0;
  }

  tamanho(): number {
    return this.contador;
  }

  mostrarPilha(): void {
    for (let i = 0; i < this.contador; i++) {
      console.log(this.elementos[i]);
    }
  }
}

const pilha = new Pilha<number | string>();

pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push('4');
pilha.mostrarPilha();

while (!pilha.isEmpty()) {
  console.log(pilha.pop());
}
