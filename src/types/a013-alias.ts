type Age = number;
type Person = {
  name: string,
  age: Age,
  colorFavorite?: string
}

type ColorRGB = 'Vermelho' | 'Verde' | 'Blue';
type ColorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type ColorFavorite = ColorRGB | ColorCMYK;

const person: Person = {
  name: 'Joelson',
  age: 26,
};

export function setColorFavorite(person: Person, color: ColorFavorite): Person {
  return { ...person, colorFavorite: color };
}

console.log(setColorFavorite(person, 'Blue'));
console.log(person);
