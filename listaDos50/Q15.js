/**
 * 15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor.
 *  No final, mostre quais são os números pares que foram digitados e em que posições
 *  eles estão armazenados.
 */

const prompt =  require('prompt-sync')();

function ler_E_ImprimeInteiro(){
    let inteiros = new Array(10);
   
    for(let i = 0; i < 10; i++){
        inteiros[i] = prompt("Digite os valores: ");
    }
    console.log("\nNumeros pares\n");
    for(let indice in inteiros){
       if(inteiros[indice]%2 === 0){
            console.log(indice,"° posição",inteiros[indice]);
       }
        
    }
}

ler_E_ImprimeInteiro();
