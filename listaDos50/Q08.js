/**
 * 8. Um programa de vida saudável quer dar pontos por atividades
 * físicas realizadas que podem ser trocados por dinheiro. Cada hora
 *de atividade física no mês vale pontos. O sistema funciona assim:

 - até 10 h de atividade no mês: ganha 2 pontos por hora
 - de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
 - acima de 20 h de atividade no mês: ganha 10 pontos por hora
 - A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)

*Faça um programa que leia quantas horas de atividade uma pessoa teve
*por mês.Calcule e mostre quantos pontos ela teve e quanto dinheiro *ela conseguiu ganhar.
 */
const prompt = require('prompt-sync')();


function informacaoUsuario(){
    console.log("\n");
    let horasAtividadeFisica = prompt("Forneça a quantidade de horas de exercicios fisico deste mês: ");
    return horasAtividadeFisica;
    
}

function calculaPontos_dinheiro(horasAtividadeFisica){
    let totalPontos;
    let totalDinheiro;

    if(horasAtividadeFisica <= 10 && horasAtividadeFisica >=0){
        totalPontos = horasAtividadeFisica * 2;
        totalDinheiro = totalPontos * 0.05; 
        console.log(`\nVocê conseguiu INCRÌVEIS ${totalPontos} pontos e faturou ${totalDinheiro} em dinheiro`);
    }
    else if(horasAtividadeFisica <= 20 && horasAtividadeFisica >=0){
        totalPontos = horasAtividadeFisica * 5;
        totalDinheiro = totalPontos * 0.05; 
        console.log(`\nVocê conseguiu INCRÌVEIS ${totalPontos} pontos e faturou ${totalDinheiro} em dinheiro`);

    }else if(horasAtividadeFisica > 20){
        totalPontos = horasAtividadeFisica * 10;
        totalDinheiro = totalPontos * 0.05; 
        console.log(`\nVocê conseguiu INCRÌVEIS ${totalPontos} pontos e faturou ${totalDinheiro} em dinheiro`);
    }
    else{
        console.log("\nOcorreu um erro,verifique se os dados estão corretos!!");
    }    
}


calculaPontos_dinheiro(informacaoUsuario());