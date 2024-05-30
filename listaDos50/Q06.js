/**
 * 6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O
 * jogador vai tentar descobrir qual foi o valor sorteado.
 */
const prompt = require('prompt-sync')();
let chute = parseInt(prompt("Qual valor foi sorteado? "));

function sorteiaNumero(){
    let numeroSorteado = Math.floor((Math.random() * 5) + 1);
    return numeroSorteado;
}

function resultado(chute){
    let numeroSorteado =sorteiaNumero();

    if(chute === numeroSorteado){
        console.log(" WOOOWWWWW ACERTOU\u{1F389}!!!");
    }else{
        console.log("Não foi dessa vez\u{1F625}!!!");
    }

    console.log("PC: ",numeroSorteado, " VC: ", chute);
}

resultado(chute);
