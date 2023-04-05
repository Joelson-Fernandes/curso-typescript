// tuple
const dadosCliente1: [number, string] = [0, 'Joelson Fernandes'];
const dadosCliente2: [number, string, string?] = [0, 'Joelson', 'Fernandes'];
const dadosCliente3: [number, string, ...string[]] = [0, 'Joelson', 'Fernandes'];

dadosCliente1[1] = 'Fernandes';
console.log(dadosCliente1);

console.log(dadosCliente2);

dadosCliente3[4] = 'Silva';
console.log(dadosCliente3);

// readonly array
const array1: readonly string[] = ['Joelson', 'Fernandes'];
const array2: ReadonlyArray<string> = ['Joelson', 'Fernandes'];

console.log(array1);
console.log(array2);
