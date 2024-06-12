/**
 * 30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5)
 * e SC(5) que contenham, respectivamente, as somas das linhas e das colunas 
 * de M. Escrever a matriz e os vetores criados.
 */

let matrizA = new Array(5).fill().map(() => new Array(5));

for(let i = 0; i < 5; i++){
    for(let j = 0; j < 5; j++){
        matrizA[i][j] = Math.floor(Math.random() * 30);
    }
}

function somaLinhaColuna(matriz){
    let SL = Array(matriz.length).fill(0)
    let SC = Array(matriz[0].length).fill(0)

    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz.length; j++){
            SL[i] += matriz[i][j];
            SC[j] += matriz[i][j];
        }
    }
    console.table(matriz);
    console.log("Soma das linhas: ");
    console.table(SL);
    console.log("soma das colunas: ");
    console.table(SC);
}
somaLinhaColuna(matrizA)