/**
 * 36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, 
 * que é o Gabarito de um teste da loteria esportiva. Leia, a seguir, 
 * para cada um dos 100 apostadores, o número do seu cartão e um vetor 
 * de Respostas de 13 posições. Verifique para cada apostador o número 
 * de acertos, comparando o vetor de Gabarito com o vetor de Respostas.
 * Escreva o número do apostador e o número de acertos. Se o apostador 
 * tiver 13 acertos, mostrar a mensagem "Parabéns, tu foi o GANHADOR".
 */
const prompt = require('prompt-sync')();

function criaApostas() {
    let vetor = new Array(100).fill().map(() => new Array(13).fill(0));
    for (let i = 0; i < 100; i++) {
        for(let j = 0; j < 13; j++){
            vetor[i][j] = Math.floor(Math.random() * 61); 
        }
    }
    return vetor;
}

function criaGabarito(){
    let vetorGabarito = [];
    let cont = 0;
    while(cont <= 12){
        let numero = Number(prompt("digite os 13 numeros da aposta(de 0 à 60)"));   
            if(numero>=0 && numero<=60){
            vetorGabarito[cont] = numero;
            cont++
        }else{
            console.log("insira um numero valido!")
        }
    }
    return vetorGabarito;
}

function verificaGanhador(gabarito, apostas){
    let resultados = [];
    for(let i = 0; i < apostas.length; i++){
        let acertos = 0;   
        for (let j = 0; j < apostas[i].length; j++) {
            gabarito.forEach(element => {
               if(element === apostas[i][j]){
                    acertos++
               }                 
            });  
        }
        resultados.push({ numerodaAposta: i, acertos: acertos });
        if(acertos === 13){
            console.log(resultados[i].numerodaAposta,",Parabêns, tu foi o GANHADOR")
            console.log("numeros da aposta", apostas[i])
        }
        acertos = 0;
    }
    console.table(apostas)
    console.table(gabarito)
    console.table(resultados);
}
let gabarito = criaGabarito();
let apostas =  criaApostas();
verificaGanhador(gabarito,apostas);