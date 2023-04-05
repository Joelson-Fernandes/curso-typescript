/* void é usado onde não há dados.
Por exemplo, se uma função não retornar nenhum valor,
você poderá especificar void como tipo de retorno. */

function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const person = {
  name: 'Joelson',
  surname: 'Fernandes',

  displayName(): void {
    console.log(`${this.name} ${this.surname}`);
  },
};

noReturn('Joelson', 'Fernandes');
person.displayName();
