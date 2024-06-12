/**
 * 32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 
 * elementos de cada uma das 12 linhas de M pelo maior elemento em módulo 
 * daquela linha. Escrever a matriz lida e a modificada.
 */
let matriz = new Array(12).fill().map(() => new Array(13));

for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 13; j++) {
        matriz[i][j] = Math.floor(Math.random() * 2000 - 1000);
    }
}

function divideMatriz(matriz) {
    let matrizModificada = new Array(12).fill().map(() => new Array(13));

    for (let i = 0; i < matriz.length; i++) {
        let maiorElementoAbsoluto = 0;

        // Encontrar o maior valor absoluto na linha
        for (let j = 0; j < matriz[i].length; j++) {
            if (Math.abs(matriz[i][j]) > maiorElementoAbsoluto) {
                maiorElementoAbsoluto = Math.abs(matriz[i][j]);
            }
        }

        // Dividir cada elemento da linha pelo maior valor absoluto da linha
        for (let j = 0; j < matriz[i].length; j++) {
            let arredondaQuociente = matriz[i][j] / maiorElementoAbsoluto;
            matrizModificada[i][j] = Number(arredondaQuociente.toFixed(2));
        }
    }

    console.log("Matriz Original: ");
    console.table(matriz);
    console.log("Matriz Modificada: ");
    console.table(matrizModificada);
}

divideMatriz(matriz);
