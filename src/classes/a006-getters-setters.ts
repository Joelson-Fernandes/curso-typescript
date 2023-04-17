/* eslint-disable no-underscore-dangle */
/* eslint-disable no-useless-constructor */
export class Person {
  constructor(
    private name: string,
    private surName: string,
    private age: number,
    private _cpf: string,
  ) {
    this.cpf = _cpf;
  }

  get cpf(): string {
    console.log('chamado getters');
    return this._cpf.replace(/\D/g, '');
  }

  set cpf(valor: string) {
    console.log('chamado setters');
    this._cpf = valor;
  }
}

const person1 = new Person('Joelson', 'Fernandes', 26, '376.063.82.1000');
person1.cpf = '376.063.82.1999';
console.log(person1.cpf);
