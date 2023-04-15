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
  getFullName(): string {
    return `isso vem de aluno: ${this.name} ${this.surName}`;
  }
}

const student1 = new Student('Joelson', 'Fernandes', 26, '37606382876');

console.log(student1);
console.log(student1.getFullName());
