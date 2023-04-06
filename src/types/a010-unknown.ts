/* O unknowntipo representa (assim como any) todos os valores JS possíveis.
Todo tipo é atribuível ao tipo unknown.
Portanto, o tipo unknown é outro supertipo universal do sistema de tipos (ao lado de any).
No entanto, o compilador TS não permitirá nenhuma operação em valores digitados unknown.
Além disso, o unknowntipo só pode ser atribuído ao tipo any
*/

let x: unknown;

x = 100;
x = 'Joelson';
x = 50;

const y = 50;

if (typeof x === 'number') console.log(x + y);
