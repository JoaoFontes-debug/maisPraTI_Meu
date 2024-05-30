/**1. Escreva um programa para calcular a redução do tempo de vida de um fumante.Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de vida um fumante perderá e exiba o total em dias.
 */



const prompt = require('prompt-sync')();
let quantidadeCigarros = prompt('Informe a quantidade de cigarros fumados por dia: ');
let anosFumando = prompt('Informe quantos anos você fumou: ');

function expectativaVida(quantidadeCigarros, anosFumando){
    let anosParaDias = anosFumando * 365;
    let totalEmHoras = (anosParaDias * quantidadeCigarros * 10)/60;
    let horasParaDias;
    console.log("\nInfelizmente você perdeu",Math.round(horasParaDias = totalEmHoras/24), "dias de vida, mas nunca é tarde para mudar e viver uma vida mais saudável!");
    
}

expectativaVida(quantidadeCigarros, anosFumando);