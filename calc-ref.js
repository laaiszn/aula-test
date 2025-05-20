var teclado = require("prompt-sync")();
var n1 = 0;
var n2 = 0;
var opcao = "";
function sair() {
    console.clear();
    console.log("Fim de programa...");
    process.exit(0);
}
function opcoes(opcao) {
    switch (opcao) {
        case '+':
            soma();
            break;
        case '-':
            subtracao();
            break;
        case '*':
            multiplicacao();
            break;
        case '/':
            divisao();
            break;
        case '0':
            sair();
            break;
        default: break;
    }
}
function soma() {
    n1 = parseFloat(teclado("Digite o primeiro número: "));
    n2 = parseFloat(teclado("Digite o segundo número: "));
    console.log("Resultado: ".concat(n1 + n2));
}
function subtracao() {
    n1 = parseFloat(teclado("Digite o primeiro número: "));
    n2 = parseFloat(teclado("Digite o segundo número: "));
    console.log("Resultado: ".concat(n1 - n2));
}
function multiplicacao() {
    n1 = parseFloat(teclado("Digite o primeiro número: "));
    n2 = parseFloat(teclado("Digite o segundo número: "));
    console.log("Resultado: ".concat(n1 * n2));
}
function divisao() {
    n1 = parseFloat(teclado("Digite o primeiro número: "));
    n2 = parseFloat(teclado("Digite o segundo número: "));
    if (n2 !== 0) {
        console.log("Resultado: ".concat(n1 / n2));
    }
    else {
        console.log("Erro: Divisão por zero não é permitida.");
    }
}
function menu() {
    console.log("---* CALCULADORA *---");
    console.log("Digite ");
    console.log("+ --> ADI\u00C7\u00C3O");
    console.log("- --> SUBTRA\u00C7\u00C3O");
    console.log("* --> MULTIPLICA\u00C7\u00C3O");
    console.log("/ --> DIVIS\u00C3O");
    console.log("0 --> SAIR");
    opcao = teclado("Digite a sua op\u00E7\u00E3o: ");
    opcoes(opcao);
}
menu();
