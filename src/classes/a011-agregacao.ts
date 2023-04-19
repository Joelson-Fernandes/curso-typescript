/* eslint-disable no-return-assign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-useless-constructor */
export class Produto {
  constructor(
    public nome: string,
    public preco: number,
  ) {}
}

export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProduto(...produtos: Array<Produto>): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidade(): number {
    return this.produtos.length;
  }

  total(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

const produto1 = new Produto('camiseta', 59.90);
const produto2 = new Produto('calça', 110.00);
// console.log(produto1);
const carrinhoDeCompras = new CarrinhoDeCompras();

carrinhoDeCompras.inserirProduto(produto1, produto2);
console.log(carrinhoDeCompras.quantidade());
console.log(carrinhoDeCompras.total());
