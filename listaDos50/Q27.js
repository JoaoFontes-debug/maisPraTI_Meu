/**
 * 27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. 
 * Após a leitura, multiplicar a matriz M pelo valor A e colocar os 
 * valores da matriz multiplicados por A em um vetor V(36). Escrever 
 * o vetor V no final.
 */
let matrizA = new Array(6).fill().map(() => new Array(6));

for(let i = 0; i < 6; i++){
    for(let j = 0; j < 6; j++){
        matrizA[i][j] = Math.floor(Math.random() * 36);
    }
}

function multiplicaMatriz(matriz,A){
    let produtoEscalar =  matriz.map(elemento => elemento.map(elemento => elemento * A));
    console.log("Matriz original");
    console.table(matriz);
    console.log("Produto Escalar: Matriz x",A);
    console.table(produtoEscalar);
}

multiplicaMatriz(matrizA,2);
