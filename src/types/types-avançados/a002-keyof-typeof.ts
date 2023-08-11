const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
};

type CoresObj = typeof coresObj
type CoresChave = keyof CoresObj

export function traduzCor(cor: CoresChave, cores: CoresObj): string {
  return cores[cor];
}

console.log(traduzCor('vermelho', coresObj));
