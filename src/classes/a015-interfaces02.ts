// Declaration merging
interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly idade?: number;
}

interface Pessoa {
  readonly enderecos: string[];
}

export const pessoa: Pessoa = {
  nome: 'Joelson',
  sobrenome: 'Fernandes',
  enderecos: ['São Paulo'],
};

// pessoa.sobrenome = 'Silva';
pessoa.enderecos.push('Barueri');
pessoa.nome = 'Junior';
console.log(pessoa);
