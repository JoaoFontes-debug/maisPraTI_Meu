/**
 * 14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. 
 *No final, mostre uma listagem com todos os nomes informados, na ordem inversa
 *daquela em que eles foram informados.
 */
const prompt =  require('prompt-sync')();

function lerNomes(){
    let names = new Array(7);
   
    for(let i = 0; i < 7; i++){
        names[i] = prompt("Digite seu nome: ");
    }
    names.reverse();
    console.log("\nLista de nomes\n");
    for(let indice in names){
       
        console.log(names[indice]);
    }
}

lerNomes();