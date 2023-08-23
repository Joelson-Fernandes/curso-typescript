interface PersonProtocol<T = string, U = number> {
  name: T
  surName: T
  age: U
}

type PersonProtocol1<T = string, U = number> = {
  name: T
  surName: T
  age: U
}

const student: PersonProtocol<string, number> = {
  name: 'Joelson',
  surName: 'Fernandes',
  age: 26,
};

const student1: PersonProtocol<number, number> = {
  name: 123,
  surName: 123,
  age: 26,
};

const student2: PersonProtocol = {
  name: 'Joelson',
  surName: 'Fernandes',
  age: 26,
};

const student3: PersonProtocol1<number, number> = {
  name: 1234,
  surName: 1234,
  age: 26,
};

console.log(student, student1, student2, student3);
