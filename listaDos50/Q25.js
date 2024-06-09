/**
 * 25. Faça um algoritmo que leia uma matriz de 15 X 20
 * de números reais e mostre a soma de cada coluna separadamente.
 */

let linhaMatriz = new Array(15);

for(let l = 0; l < linhaMatriz.length; l++){
    linhaMatriz[l] = new Array(20);

    for(let c = 0; c < 20; c++){
        linhaMatriz[l][c] = Math.floor(Math.random() * 100); 
    }
}

function somaElementosMatriz(recebeMatriz){
    let somaColunas = new Array(recebeMatriz[0].length).fill(0);
    for(let l = 0; l < recebeMatriz.length; l++){
         for(let c = 0; c < recebeMatriz[0].length; c++){
            somaColunas[c] += recebeMatriz[l][c]; 
        }
    }
    console.table(recebeMatriz);
    console.table(somaColunas);
}

somaElementosMatriz(linhaMatriz);
