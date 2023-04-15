/* eslint-disable max-classes-per-file */
/* eslint-disable no-useless-constructor */
export class Person {
  constructor(
    public name: string,
    public surName: string,
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age;
  }

  getCPF(): string {
    return this.cpf;
  }

  getFullName(): string {
    return `${this.name} ${this.surName}`;
  }
}

export class Student extends Person {
  constructor(
    name: string,
    surName: string,
    age: number,
    cpf: string,
    public ra: number,
  ) {
    super(name, surName, age, cpf);
  }

  getFullName(): string {
    console.log('fazendo algo antes');
    return super.getFullName();
  }
}

const student1 = new Student('Joelson', 'Fernandes', 26, '37606382876', 29290232);

console.log(student1);
console.log(student1.getFullName());
