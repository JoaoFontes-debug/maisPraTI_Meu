/**
 * 12. Faça um programa que mostre os 10 primeiros 
 * elementos da Sequência de Fibonacci.
 * Ex.: 1, 1, 2, 3, 5, 8, 13, 21.
 */

const prompt = require('prompt-sync')();

let escalaFibonacci = prompt("escolha quantos numeros da sequência deseja ver: ");
   
function fibonacci(escalaFibonacci){
    let anterior = 1;
    let proximo = 0;
    let atual = 0;
    console.log("\tSequência de Fibonacci: \n");

    for(let i = 0; i<escalaFibonacci; i++){
       
       atual = anterior + proximo;
       console.log('\t',i+1,"° termo: ", atual)
       anterior = proximo;
       proximo = atual;
    }
}

fibonacci(escalaFibonacci);


/*
Começa com 1 
A partir do 3° termo cada novo termo corresponde a soma dos 2 anteriores
Atual = anteior + Proximo

*/