/**
 * 24. Dada uma matriz M[1..6,1..8], criar um vetor C que 
 *contenha, em cada posição, a quantidade de elementos negativos
 *da linha correspondente de M
 */

function negativo_D_Matriz(linha,coluna){
  
    let matriz = new Array(linha);
    let vetorC  = [];


    for(let C = 0; C < linha; C++){
        matriz[C] = new Array(coluna);
    }
    
    for(let l = 0; l < linha; l++){
        for(let c = 0; c < coluna; c++){
          matriz[l][c] = Math.floor(Math.random() * 200 - 100);
        }
    }

    for(let l = 0; l < linha; l++){
        let cont = 0;
        for(let c = 0; c < coluna; c++){
            if(matriz[l][c] < 0){
               cont++;
            }
        }
        vetorC[l] = cont;
    }
    console.table(matriz);
    console.table(vetorC);
}

negativo_D_Matriz(6,8);
