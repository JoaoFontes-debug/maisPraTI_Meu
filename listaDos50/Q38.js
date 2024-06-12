/**
 * Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
 * variável identificadora que calcule a operação conforme a informação contida nesta
 * variável:
 * 1- soma dos elementos;
 * 2- produto dos elementos;
 * 3- média dos elementos;
 * 4- ordene os elementos em ordem crescente;
 * 5- mostre o vetor.
 */
function criaPreencheVetor(){
    const prompt =  require('prompt-sync')();
    let vetor = new Array(6).fill(0)
    let operacao = 0;
    for (let i = 0; i < 6; i++) {
        vetor[i] = Math.floor(Math.random() * 100); 
    }
    console.log(`valores`);
    console.table(vetor);
    console.log(`1- soma dos elementos;
    2- produto dos elementos;
    3- média dos elementos;
    4- ordene os elementos em ordem crescente;
    5- mostre o vetor.`);
    operacao = Number(prompt("Selecione uma operaçao")); 
    return [vetor,operacao];
}

function calcularOperacao(vetorOperacao) {
   
    switch (vetorOperacao[1]) {
        case 1:
            calcularSoma( vetorOperacao[0]);
            break; 
        case 2:
            calcularProduto( vetorOperacao[0]);
            break;  
        case 3:
            calcularMedia( vetorOperacao[0]);
            break; 
        case 4:
            ordenarVetor( vetorOperacao[0]);
            break; 
        case 5:
            mostrarVetor( vetorOperacao[0]);
            break;  
    }
}

function calcularSoma(vetor) {
    let soma = 0;
    for (const numero of vetor) {
        soma += numero;
    }
    console.log("Soma: ",soma);
    return soma;
}

function calcularProduto(vetor) {
    let produto = 1;
    for (const numero of vetor) {
        produto *= numero;
    }
    console.log("Produto: ",produto);
    return produto;
}

function calcularMedia(vetor) {
    const soma = calcularSoma(vetor);
    const media = soma / vetor.length;
    console.log("Media: ",media.toPrecision(4));
    return media;
}

function ordenarVetor(vetor) {
    console.log("Posições de origem: ",vetor);

    vetor.sort((a, b) => a - b);
    console.log("Ordem Crescente: ",vetor);
    return vetor;
}

function mostrarVetor(vetor) {
    console.log(vetor.join(', '));
}

calcularOperacao(criaPreencheVetor());

