/**
 * 17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde
 * esses valores em dois vetores, em posições relacionadas. No final
 * mostre uma listagem contendo apenas os dados das pessoas menores de idade.
 */
const prompt = require('prompt-sync')();

function lerArmazena(){
    let nomes = Array(9);
    let idade = Array(9);

    for(let i = 0; i < 9 ; i++){
        nomes[i] = prompt("Me diz seu Nome: ");
        idade[i] = prompt("Me diz sua idade: "); 
    }
    console.log("\nMenores de idade\n");

    for(let indice in idade){
        if(idade[indice] < 18){
            console.log(`Nome: ${nomes[indice]} Idade: ${idade[indice]}`);
        }
    }
}

lerArmazena();