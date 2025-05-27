 
let teclado = require (`prompt-sync`)();
 let resultados = new Array(10); //vetor para armazenar os resultados 

 let i = 0;

 //laço WHILE para a entrada de dados e calculo 
 while (i < 10){
    let numero1 = parseFloat(teclado(`Digite o primeiro número: `));
    let numero2 = parseFloat(teclado(`Digite o seu segundo número: `));

    resultados[i] = numero1 * numero2; 
    i++ 
 }
 let j = 0;
 console.log(`Resultado das multiplicações: `);
 do {
    console.log (`Resultado ${j + 1}: ${resultados[j]}`);
    j++;
 }while (j < 10);