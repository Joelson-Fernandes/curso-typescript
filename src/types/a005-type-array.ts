// Array<t> - T[]

function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

function concatenaStrings(...args: string[]): string {
  return args.reduce((ac, valor) => `${ac} ${valor}`);
}

function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(3, 5);
console.log(result);

const stringConca = concatenaStrings('Joelson', 'Fernandes');
console.log(stringConca);

const stringMaiuscula = toUpperCase('Joelson', 'Fernandes');
console.log(stringMaiuscula);
