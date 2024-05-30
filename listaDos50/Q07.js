/**
 * 7. Uma empresa de aluguel de carros precisa cobrar pelos
 * seus serviços. O aluguel de um carro popular custa R$ 90,00
 * por dia e um carro de luxo custa R$ 150,00. Além disso, o 
 * cliente paga por Km percorrido. Faça um programa que leia o tipo
 * de carro alugado (popular ou luxo), quantos dias de aluguel e
 * quantos Km foram percorridos. No final, mostre o preço a ser pago
 * de acordo com os dados a seguir:
 

 * Carros populares
 
* - Até 100 Km percorridos: R$ 0,20 por Km
 * - Acima de 100 Km percorridos: R$ 0,10 por Km
 
 *  Carros de luxo

 * - Até 200 Km percorridos: R$ 0,30 por Km
 * - Acima de 200 Km percorridos: R$ 0,25 por Km
 
 */

const prompt = require('prompt-sync')();

function informacaoUsuario(){
   
    let tipoCarro = prompt("Qual sua escolha de carro? Popular ou de luxo? ");
    let diasAlugado = prompt("Quantos dias pretende ficar com o carro? ");
    let kM_Percorrido = prompt("Quantos quilometros foram percorridos? ");
    
    let informacaoUsuario = [tipoCarro, diasAlugado, kM_Percorrido];

    return informacaoUsuario;
}

function calcularAluguel(informacaoUsuario){

    let valorAluguel;
    let tipoCarro = informacaoUsuario[0]
    let diasAlugado = informacaoUsuario[1];
    let kM_Percorrido= informacaoUsuario[2];
    console.log("\nTipo:",tipoCarro,"\nDias alugado:", diasAlugado,"\nQuilometros percorridos:", kM_Percorrido,"\n");

    if(tipoCarro == "popular" && kM_Percorrido <= 100){
        valorAluguel = (kM_Percorrido*0.20) + (90*diasAlugado);
        console.log("Valor do aluguel: ",valorAluguel );

    }
    else if(tipoCarro == "popular" && kM_Percorrido > 100){
        valorAluguel = (kM_Percorrido * 0.10) + (90*diasAlugado)
        console.log("Valor do aluguel: ",valorAluguel );
    }
    else if(tipoCarro == "luxo" && kM_Percorrido <= 200){
        valorAluguel = (kM_Percorrido * 0.30) + (150*diasAlugado);
        console.log("Valor do aluguel: ",valorAluguel );
    }
    else if(tipoCarro == "luxo" && kM_Percorrido > 100){
        valorAluguel = (kM_Percorrido * 0.25) + (150*diasAlugado)
        console.log("Valor do aluguel: ",valorAluguel );
    }
    else{
        console.log("Verifique se os dados estao corretos!");
    }
}



calcularAluguel(informacaoUsuario());

