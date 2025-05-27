function sobreMim (saudacao: string, idade: number,
    lazer: string, profissao:string):void{
         console.log (`${saudacao}!!!  tenho ${idade} gosto de ${lazer} e tenho como profissao ${profissao}`);
    }          
let teclado = require (`prompt-sync`) ();
let saudacao : string = (teclado(`Digite sua saudação: `));
let idade : number = parseInt(teclado(`Digite sua idade: `));
let lazer : string = (teclado(`Digite seu lazer favorito: ` ));
let profissao: string = (teclado(`Digite sua profissão: `));

sobreMim(saudacao,idade,lazer,profissao);