/* eslint-disable max-len */
/* eslint-disable no-useless-constructor */
/* eslint-disable @typescript-eslint/no-namespace */
namespace MeuNamespace {
  const nome = 'Joelson';

  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoa = new PessoaDoNamespace(nome);
  console.log(pessoa);

  export namespace OutroNamespace {
    export const outroNome = 'João';
  }
}

const pessoa = new MeuNamespace.PessoaDoNamespace(MeuNamespace.OutroNamespace.outroNome);
console.log(pessoa);

export default 1;
