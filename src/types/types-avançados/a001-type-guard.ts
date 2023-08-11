/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable default-case */
/* eslint-disable no-useless-constructor */
export function add(a: unknown, b: unknown): string | number {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a} ${b}`;
}

console.log(add(2, 2));
console.log(add('a', 'b'));

type Pessoa = {tipo: 'pessoa'; nome: string};
type Animal = {tipo: 'animal'; cor: string};
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  tipo: 'pessoa' = 'pessoa';

  constructor(public nome: string) { }
}

function mostraNome(obj: PessoaOuAnimal): void {
  // if ('nome' in obj) console.log(obj.nome);
  // if (obj instanceof Aluno) console.log(obj.nome);
  switch (obj.tipo) {
    case 'pessoa': console.log(obj.nome); break;
    case 'animal': console.log(obj.cor);
  }
}

mostraNome(new Aluno('Joelson'));
mostraNome({ tipo: 'animal', cor: 'preto' });
