function idadePessoa(anoNascimento) {
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    var idade = anoAtual - anoNascimento;
    return idade;
}
var teclado = require("prompt-sync")();
var anoNascimento = parseInt(teclado("Digite seu ano de nascimento: "));
var idade = idadePessoa(anoNascimento);
console.log("Idade da pessoa \u00E9 ".concat(idade));
console.log("Ta ficando veio bb :)");
