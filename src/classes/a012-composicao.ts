/* eslint-disable max-classes-per-file */
export class Motor {
  ligar(): void {
    console.log('Motor ligado');
  }

  acelerar(): void {
    console.log('acelerando');
  }

  parar(): void {
    console.log('parar');
  }
}

export class Carro {
  public readonly motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  parar(): void {
    this.motor.parar();
  }
}

const carro = new Carro();

carro.acelerar();
