/**
 * 3. Faça um algoritmo que pergunte a distância que um passageiro deseja
 * percorrer em Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km
 * para viagens até 200 Km e R$ 0.45 para viagens mais longas
 */
const prompt = require('prompt-sync')();
let quilometros = parseInt(prompt("Quantos Km desejas percorrer? "));

const usandoArrowFunction = (quilometros ) => {
    if(quilometros <= 200){
        console.log("Preço da passagem:",quilometros *= 0.5);
    }else{
        console.log("Preço da passagem:",quilometros *= 0.45);
    }

}

usandoArrowFunction(quilometros);