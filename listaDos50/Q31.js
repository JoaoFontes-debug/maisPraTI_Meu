/**
 * 31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
 * Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
 * todos os elementos de V diferentes de A. Mostre os resultados.
 */
let matrizV = new Array(30).fill().map(() => new Array(30));

for(let i = 0; i < 30; i++){
    for(let j = 0; j < 30; j++){
        matrizV[i][j] = Math.floor(Math.random() * 61);
    }
}
const A = 35;
let cont = 0;

function diferentes_De_A(matrizV, A) {
    let diferentes = new Array(30).fill().map(() => new Array(30));
    let posiçoes = new Array(30).fill().map(() => new Array(30).fill("-"));
    for (let i = 0; i < matrizV.length; i++) {
        for (let j = 0; j < matrizV[i].length; j++) {
            if (matrizV[i][j] !== A) {
                diferentes[i][j] = (matrizV[i][j]);
            } else {
                posiçoes[i][j] = matrizV.indexOf(matrizV[i][j])
                cont++;
            }
        }
    }
    console.table(matrizV);
    console.log("posiçoes:")
    console.table(posiçoes);
    console.log(A," foi encontrado na matriz ",cont);
    console.log("valores diferentes de A: ")
    console.table(diferentes);
}
diferentes_De_A(matrizV, A)