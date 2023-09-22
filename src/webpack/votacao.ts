/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-useless-constructor */
/* eslint-disable max-classes-per-file */
const form = document.querySelector('.form') as HTMLFormElement;
const inputs = document.querySelectorAll('input');

type OpcoesDeVoto = {
  numeroDeVotos: number,
  opcao: string,
}

// Routing App
export class Votacao {
  private _opcoesDeVoto: OpcoesDeVoto[] = [];

  addOpcoesVotos(votacaoOpcoes: OpcoesDeVoto): void {
    this._opcoesDeVoto.push(votacaoOpcoes);
  }

  vote(linguagem: string, cor: string): void {
    for (const opcaoVoto of this._opcoesDeVoto) {
      if (linguagem === opcaoVoto.opcao) opcaoVoto.numeroDeVotos += 1;
      if (cor === opcaoVoto.opcao) opcaoVoto.numeroDeVotos += 1;
    }
  }

  show(): void {
    for (const opcaoVoto of this._opcoesDeVoto) {
      const votosTotais = document.getElementById(opcaoVoto.opcao) as HTMLSpanElement;
      if (votosTotais) votosTotais.innerText = `${opcaoVoto.numeroDeVotos}`;
    }
  }
}

const votacao = new Votacao();

// define opcoes de votos.
inputs.forEach((input: HTMLInputElement) => {
  votacao.addOpcoesVotos({ opcao: input.value, numeroDeVotos: 0 });
});

export class VotacaoApp {
  private votacao: Votacao[] = [];

  constructor(public linguagem: string, public cor: string) {}

  addVotos(): void {
    votacao.vote(this.linguagem, this.cor);
  }

  show(): void {
    votacao.show();
  }
}

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  const linguagemSelecionada = document.querySelector('input[name="linguagem-favorita"]:checked') as HTMLInputElement;
  const corSelecionada = document.querySelector('input[name="cor-favorita"]:checked') as HTMLInputElement;

  const formData = new VotacaoApp(linguagemSelecionada.value, corSelecionada.value);
  formData.addVotos();
  formData.show();
  form.reset();
});
