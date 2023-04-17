/* eslint-disable no-useless-constructor */
/* eslint-disable max-classes-per-file */
export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

export class Empresa {
  readonly nome: string; // public não necessário

  protected readonly colaboradores: Colaborador[] = [];

  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostracolaboradores(): void {
    // eslint-disable-next-line no-restricted-syntax
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '365.458.021.1000');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

const empresa1 = new Udemy();

const colaborador1 = new Colaborador('Joelson', 'Fernandes');
const colaborador2 = new Colaborador('Maria', 'Rosario');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.popColaborador();
empresa1.mostracolaboradores();

console.log(empresa1);
