/*
let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);
*/

function createPerson(
  firstName: string,
  lastName?: string,
): {
    firstName:string;
    lastName?: string
  } {
  return {
    firstName,
    lastName,
  };
}

console.log(createPerson('Joelson'));

function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

console.log(squareOf('4'));
