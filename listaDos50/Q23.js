/**
 * 23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os 
 * elementos da diagonal principal são iguais a 1 e os demais são nulos.
 */

function criaImprimeMatriz(){
 
    let matrizIdentidade7x7 = new Array(7);

    for(let C = 0; C < matrizIdentidade7x7.length; C++){
        matrizIdentidade7x7[C] = new Array(7);
    }
    
    for(let l = 0; l < matrizIdentidade7x7.length; l++){
        for(let c = 0; c < matrizIdentidade7x7.length; c++){
            matrizIdentidade7x7[l][c] = 0;
        }
        matrizIdentidade7x7[l][l] = 1;
    }

    for(let l = 0; l < matrizIdentidade7x7.length; l++){
        let linha = "";
        for(let c = 0; c < matrizIdentidade7x7.length; c++){
            linha += matrizIdentidade7x7[l][c] + " ";
        }
        //console.log(linha);
    }
    console.table(matrizIdentidade7x7);
}

criaImprimeMatriz();

