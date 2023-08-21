type FilterCalback<U> = (
  value: U,
  index?: number,
  array?:U[],
) => boolean;

export function meuFilter<T>(array: T[], calbackfn: FilterCalback<T>): T[] {
  const novoArray = [];

  for (let i = 0; array.length > i; i += 1) {
    if (calbackfn(array[i])) novoArray.push(array[i]);
  }

  return novoArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayFiltradoOriginal = array.filter((value) => value < 5);
console.log(arrayFiltradoOriginal);

const arrayFiltrado = meuFilter(array, (value) => value < 5);
console.log(arrayFiltrado);
