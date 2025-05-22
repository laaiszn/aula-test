function sobreMim(saudacao, idade, lazer, profissao) {
    console.log("".concat(saudacao, "!!!\n            tenho ").concat(idade, " gosto de ").concat(lazer, "\n            e tenho como profissao ").concat(profissao));
}
var teclado = require("prompt-sync")();
var saudacao = (teclado("Digite sua sauda\u00E7\u00E3o: "));
var idade = parseInt(teclado("Digite sua idade: "));
var lazer = (teclado("Digite seu lazer favorito: "));
var profissao = (teclado("Digite sua profiss\u00E3o: "));
sobreMim(saudacao, idade, lazer, profissao);
