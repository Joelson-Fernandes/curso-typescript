/* eslint-disable no-useless-constructor */
/* eslint-disable max-classes-per-file */
export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

export class Empresa {
  public readonly nome: string;

  private readonly colaboradores: Colaborador[] = [];

  protected readonly cnpj: string;

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

const empresa1 = new Empresa('JF', '37.063.828/0001');

const colaborador1 = new Colaborador('Joelson', 'Fernandes');
const colaborador2 = new Colaborador('Maria', 'Rosario');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.mostracolaboradores();

console.log(empresa1);
