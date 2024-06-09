/**
 * 26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5]
 * calcular a matriz produto P[1..3,1..5].
 */

let matrizA = new Array(3).fill().map(() => new Array(5).fill(0));
let matrizB = new Array(3).fill().map(() => new Array(5).fill(0));
let produtoMatriz = new Array(3).fill().map(() => new Array(5).fill(0));

for(let i = 0; i < 3; i++){
    for(let j = 0; j < 5; j++){
        matrizA[i][j] = Math.floor(Math.random() * 10);
        matrizB[i][j] = Math.floor(Math.random() * 10);
    }
}


for(let i = 0; i < 3; i++){
    for(let j = 0; j < 5; j++){
        produtoMatriz[i][j] = matrizA[i][j] * matrizB[i][j];
    }
}


console.table(matrizA);
console.table(matrizB);
console.table(produtoMatriz);
