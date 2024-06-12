/**
 * 35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
 * conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
 * estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. 
 * Cada vetor pode ser preenchido quantas vezes forem necessárias.
 */

function criaPreencheVetor() {
    let vetorD30 = new Array(30).fill(0);
    for (let i = 0; i < 30; i++) {
        vetorD30[i] = Math.floor(Math.random() * 100); 
    }
    return vetorD30;
}

function classificaParImpar(vetor) {
    let pares = [];
    let impares = [];
    let controlPar = 0;
    let controlImpar = 1;

    vetor.forEach(Elemento => {
        if (Elemento % 2 === 0) {
            pares.push(Elemento);
            controlPar++;
            if (controlPar === 5) {
                console.log("Vetor de pares:", pares);
                pares = []; //zerando o vetor
                controlPar = 0; //zerando variavel de controle
            }
        } else {
            impares.push(Elemento);
            controlImpar++;
            if (controlImpar === 5) {
                console.log("Vetor de ímpares:", impares);
                impares = [];
                controlImpar = 0;
            }
        }
    });
    // Exibir vetores se não estiverem vazios
    if (pares.length > 0) {
        console.log("Vetor de pares final:");
        console.table(pares)
    }
    if (impares.length > 0) {
        console.log("Vetor de ímpares final:");
        console.table(impares)
    }
}

classificaParImpar(criaPreencheVetor());