/*
    2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km h-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.

*/
const unicodeEmoji= require('unicode-emoji')() ;
const prompt = require('prompt-sync')();

let velocidadeMomento = prompt('Digite a velocidade do carro: ');

function controlaVelocidade (_velocidadeMomento){
    if(velocidadeMomento > 80){
        valorMulta = (velocidadeMomento - 80) * 5;
       console.log("Você foi multado em", valorMulta,"reais.");
    }else{
        console.log("\n  UFAAAA!!", unicodeEmoji.getEmojis())
    }
    
}

controlaVelocidade(velocidadeMomento);