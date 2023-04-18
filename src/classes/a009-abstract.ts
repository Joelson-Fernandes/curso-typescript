/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-useless-constructor */
export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida :number,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.emoji} - ${this.nome} agora tem ${this.vida} de vida`);
  }

  abstract bordao(): void;
}

class Guerreiro extends Personagem {
  protected emoji = '\u{1F9DD}';

  bordao(): void {
    console.log(`${this.emoji}IAAAA`);
  }
}

class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';

  bordao(): void {
    console.log(`${this.emoji}SCANOOOOR`);
  }
}

const guerreiro = new Guerreiro('Joelson', 15, 100);
const monstro = new Monstro('Scanor', 40, 200);
guerreiro.atacar(monstro);
guerreiro.atacar(monstro);
monstro.atacar(guerreiro);
