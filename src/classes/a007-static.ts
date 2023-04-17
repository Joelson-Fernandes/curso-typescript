/* eslint-disable no-underscore-dangle */
/* eslint-disable no-useless-constructor */
export class Person {
  static ageStandard = 0;

  static cpfStandart = '000.000.00.0000';

  constructor(
    public name: string,
    public surName: string,
    public age: number,
    public cpf: string,
  ) {}

  static hello(): void {
    console.log('Hello');
  }

  static createPerson(nome: string, surName: string): Person {
    return new Person(nome, surName, this.ageStandard, this.cpfStandart);
  }
}

const person1 = new Person('Joelson', 'Fernandes', 26, '376.063.82.1000');
const person2 = Person.createPerson('João', 'Junior');
console.log(person1.name);
console.log(person2.name);
Person.hello();
