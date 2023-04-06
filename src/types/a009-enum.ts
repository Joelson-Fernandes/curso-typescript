/* eslint-disable no-shadow */
enum Cores {
  VERDE, // 0
  VERMELHO, // 1
  AMARELO, // 2
}

console.log(Cores);
console.log(Cores.VERMELHO);
console.log(Cores[2]);

enum Cores {
  ROXO = 10, // 0
  ROSA = 'ROSA', // 1
  PRETO = 100, // 2
}

console.log(Cores[10]);
console.log(Cores.ROSA);

function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaCor(100);
