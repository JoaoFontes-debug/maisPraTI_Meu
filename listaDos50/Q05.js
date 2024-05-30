/**
 * 5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura)
 */

const prompt = require('prompt-sync')();
console.log("\n\t\tBem-Vindo!!\u{1F601}\n\n");


let escolhas = ['pedra','papel','tesoura'];
let escolhaMaquina;
let escolhaPlayer;

let iniciarJogo = prompt("INICIAR PARTIDA? Digite 's' para iniciar ou qualquer outra letra para sair: ");
console.log("\n");


while(iniciarJogo==="s"){
    console.clear();
    saudacaoInicio();
    escolhaMaquina = jogadaMaquina();
    escolhaPlayer = jogadaPlayer();
    VerificarVencedor(escolhaPlayer, escolhaMaquina);
    console.log("\n\nPC: ", escolhaMaquina, " VC: ",escolhaPlayer);
    console.log("\n");

    iniciarJogo = prompt("JOGAR NOVAMENTE? Digite 's' para iniciar ou qualquer outra letra para sair: ");
}

function saudacaoInicio(){
    console.log("\t    Faça sua escolha!!!!!");
    console.log("      Pedra: \u{1F44A}  Papel: \u{1F44B} Tesoura: \u270C \n\n");
    console.log("\t      Para confirmar\n\t      sua escolha\n\t      digite a palavra\n\t      correspondente!\n");

}

function jogadaMaquina(){
    let random = Math.floor(Math.random() * 3);// define que serao sorteados 3 numeros de 0 a 2 
    escolhaMaquina = escolhas[random];
    return escolhaMaquina;
}       

function jogadaPlayer(){
    escolhaPlayer = prompt("Digite aqui: ");
    return escolhaPlayer
}


function VerificarVencedor(escolhaPlayer, escolhaMaquina){
   

    if(escolhaPlayer==="pedra" && escolhaMaquina ==="tesoura"){
        console.log("\nBAMMM  \u{1F389}Você Venceu\u{1F389}!!!");
    }
    else if (escolhaPlayer==="tesoura" && escolhaMaquina ==="papel"){
        console.log("\nBAMMM \u{1F389}Você Venceu\u{1F389}!!!");
    }
    else if (escolhaPlayer === "papel" && escolhaMaquina==="pedra"){
        console.log("\nBAMMM \u{1F389}Você Venceu\u{1F389}!!!");

    }else if(escolhaMaquina === escolhaPlayer){
        console.log("\nBAMMM Empate!!");
    }
    else{
        console.log("\nVocê \u{1F44E} PERDEU!!!!!!!!");
    }

    
}

