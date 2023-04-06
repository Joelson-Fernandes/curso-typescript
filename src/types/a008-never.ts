/* O tipo never indica que a função nunca retorna algo.
Ou seja, funções que geram erro ou geram um loop infinito possuem o seu retorno definido como never.
*/

function criaErro(): never {
  throw new Error('Erro qualquer');
}

criaErro();
