let x = 10; // eslint-disable-line
x = 0b1010;
const y = 10;
const a = 100; // eslint-disable-line

const person = {
  name: 'Joelson' as const,
  surname: 'Fernandes',
};

function escolhaCor(cor: 'Verde' | 'Amarelo' | 'Vermelho'): string {
  return cor;
}

console.log(escolhaCor('Vermelho'));

// Module mode
export default x;
