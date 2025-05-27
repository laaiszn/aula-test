var teclado = require("prompt-sync")();
var resultados = new Array(10); //vetor para armazenar os resultados 
var i = 0;
//laço WHILE para a entrada de dados e calculo 
while (i < 10) {
    var numero1 = parseFloat(teclado("Digite o primeiro n\u00FAmero: "));
    var numero2 = parseFloat(teclado("Digite o seu segundo n\u00FAmero: "));
    resultados[i] = numero1 * numero2;
    i++;
}
var j = 0;
console.log("Resultado das multiplica\u00E7\u00F5es: ");
do {
    console.log("Resultado ".concat(j + 1, ": ").concat(resultados[j]));
    j++;
} while (j < 10);
