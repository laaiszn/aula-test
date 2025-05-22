function sobreMim (saudacao: string, idade: number,
    lazer: string, profissao:string):void{
         console.log (`${saudacao}!!!
            tenho ${idade} gosto de ${lazer}
            e tenho como profissao ${profissao}`);
    }          

let saudacao : string = `Olá Mundo`;
let idade : number = 16;
let lazer : string = `Assistir Outer Banks`;
let profissao: string = `programador`;

sobreMim(saudacao,idade,lazer,profissao)