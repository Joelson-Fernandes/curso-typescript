/* eslint-disable no-underscore-dangle */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */

export abstract class Ferramenta {
  constructor(
    public _nome: string,
  ) {}

  get nome(): string {
    return this._nome;
  }

  abstract escrever(): void;
}

export class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(
    private _nome: string,
  ) {}

  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  escrever(): void {
    if (this._ferramenta === null) {
      console.log('não posso escrever sem ferramenta');
    } else {
      this._ferramenta.escrever();
    }
  }
}

class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} esta escrevendo`);
  }
}

class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} esta digitando`);
  }
}

const escritor = new Escritor('Joelson');
const caneta = new Caneta('Bic');
console.log(caneta._nome);

const escritor2 = new Escritor('Maria');

escritor.ferramenta = caneta;
escritor.escrever();

escritor2.escrever();
