/* eslint-disable max-len */
/* eslint-disable no-useless-constructor */
/* eslint-disable @typescript-eslint/no-namespace */
var MeuNamespace;
(function (MeuNamespace) {
    var nome = 'Joelson';
    var PessoaDoNamespace = /** @class */ (function () {
        function PessoaDoNamespace(nome) {
            this.nome = nome;
        }
        return PessoaDoNamespace;
    }());
    MeuNamespace.PessoaDoNamespace = PessoaDoNamespace;
    var pessoa = new PessoaDoNamespace(nome);
    console.log(pessoa);
    var OutroNamespace;
    (function (OutroNamespace) {
        OutroNamespace.outroNome = 'João';
    })(OutroNamespace = MeuNamespace.OutroNamespace || (MeuNamespace.OutroNamespace = {}));
})(MeuNamespace || (MeuNamespace = {}));
var pessoa = new MeuNamespace.PessoaDoNamespace(MeuNamespace.OutroNamespace.outroNome);
console.log(pessoa);
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="001-criando-namespaces.ts" />;
console.log(MeuNamespace.PessoaDoNamespace);
