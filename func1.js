function soma(n1, n2) {
    console.log(n1 + n2);
}
var teclado = require("prompt-sync")();
var n1 = parseInt(teclado("Digite o primeiro n\u00FAmero: "));
var n2 = parseInt(teclado("Digite o segundo n\u00FAmero: "));
soma(n1, n2);
console.log("Fim do programa :)");
