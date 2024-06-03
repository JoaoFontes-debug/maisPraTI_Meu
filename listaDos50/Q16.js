/**
 * 16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
 * (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados
 * e depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.
 */

function vetorAleatorio(){
    let numeroAleatorio = new Array(20);
    for(let i = 0; i < 20; i++){
        numeroAleatorio[i] = Math.floor(Math.random() * 100);
    }
    return numeroAleatorio;
}

function exibe_E_Ordena(numeroAleatorio){
    console.log("\nVetor desordenado\n");
    for(let indice in numeroAleatorio){
       console.log("Posição",indice,"°",numeroAleatorio[indice]);
    }

    console.log("\nVetor Ordenado\n");
    numeroAleatorio.sort((a,b) => a - b);

    for(let ind in numeroAleatorio){
        console.log("Posição",ind,"°",numeroAleatorio[ind]);
    }
}

exibe_E_Ordena(vetorAleatorio());