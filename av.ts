let teclado = require (`prompt-sync`) ();

let tab: number = parseInt(teclado(`Digite a tabuada: `));

function tabuada (): void {
    let cont: number = 0;
    while(cont <=10)
        console.log(`${tab} x ${cont} = ${tab * cont}`);
    cont++;
} 