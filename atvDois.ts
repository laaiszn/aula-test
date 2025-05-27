function idadePessoa (anoNascimento: number): number{
    const dataAtual = new Date ();
    const anoAtual = dataAtual.getFullYear()
    let idade: number = anoAtual - anoNascimento;
    return idade;
}
let teclado = require (`prompt-sync`)();

let anoNascimento: number = parseInt(teclado(`Digite seu ano de nascimento: `));

let idade: number = idadePessoa(anoNascimento);

console.log(`Idade da pessoa é ${idade}`);

console.log (`Ta ficando veio :)`);   