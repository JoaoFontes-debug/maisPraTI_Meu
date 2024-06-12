/**
 * 34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. 
 * A seguir, multiplique cada linha pelo elemento da diagonal principal
 *  daquela linha. Mostre a matriz após as multiplicações.
 */

//Cria matriz vazia
let matriz = new Array(5).fill().map(() => new Array(5).fill(0))
// preenche a matriz com numeros aleatorios
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        matriz[i][j] = Math.floor(Math.random() * 25);
    }
}

function produtoLinha_x_ElementoDiagonal(matriz){
    console.log("Matriz original");
    console.table(matriz);
    for(let i = 0; i < matriz.length; i++) {
    //matriz_produto___linhaDaMatriz___Multiplicação dos elementos pelo elemento da digonal desta linha
        matriz[i] = matriz[i].map(el => el * matriz[i][i]);
    }
    console.log("Matriz produto");
    console.table(matriz);
}

produtoLinha_x_ElementoDiagonal(matriz);