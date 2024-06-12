/**
 * 33. Faça um algoritmo que leia uma matriz 3 x 3 e após a
 * leitura, multiplique os elementos da diagonal principal com a
 * média dos elementos da diagonal secundária.
 */
let matriz = new Array(3).fill().map(() => new Array(3));

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = Math.floor(Math.random() * 25);
    }
}

function DiagonalP_x_MediaDiagonalS(matriz){
    let mediaDiagonalS = 0;
    let somaDiagonalS = 0;
    let diagonalPrincipal=[]
    let cont = 2;
    //Pega diagonal principal (indice linha e coluna iguais)
    for (let i = 0; i < matriz.length; i++) {
        diagonalPrincipal.push(matriz[i][i]);
    }
    //Faz a soma da diagonal secundaria
    for(let i = 0; i < matriz.length; i++) {
        for(let j = 0 ; j < 1; j++){
           somaDiagonalS += matriz[i][cont];
           cont--; 
        }
    }
    //Faz a media da digonal secundaria
    mediaDiagonalS = somaDiagonalS/matriz.length;
    console.log("Matriz original");
    console.table(matriz);
    //Multiplica os elementos da diagonal pela media
    for (let i = 0; i < matriz.length; i++) {
          matriz[i][i] *= mediaDiagonalS.toPrecision(4);   
    }
    console.log("Matriz com diagonal multiplicada pela media");
    console.table(matriz);
    console.log("Media");
    console.log(mediaDiagonalS.toPrecision(4));
}

DiagonalP_x_MediaDiagonalS(matriz);




