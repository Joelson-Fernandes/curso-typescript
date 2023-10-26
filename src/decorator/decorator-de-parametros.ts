function decorator(
  classPrototype: any,
  nameMetodo: string | symbol,
  index: number,
): any {
  console.log(classPrototype);
  console.log(nameMetodo);
  console.log(index);
}

export class UmaPessoa {
  nome: string;

  sobrenome: string;

  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  metodo(@decorator msg: string): string {
    return `${this.nome} ${this.sobrenome} ${msg}`;
  }

  get nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join();
  }
}

const pessoa = new UmaPessoa('Joelson', 'Fernandes', 26);
// pessoa.nomeCompleto = 'Joelson Dias'; // set
// console.log(pessoa.nomeCompleto); // get
// pessoa.metodo = () => 'HAHAHAH';
const metodo = pessoa.metodo('...este é um metodo');
console.log(metodo);
