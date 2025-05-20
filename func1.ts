function soma (n1: number, n2:number): void{
    console.log(n1+n2);
}
let teclado = require(`prompt-sync`)();

let n1: number= parseInt(teclado(`Digite o primeiro número: `))
let n2: number= parseInt(teclado(`Digite o segundo número: `))
soma(n1 , n2) ;


console.log(`Fim do programa :)`);