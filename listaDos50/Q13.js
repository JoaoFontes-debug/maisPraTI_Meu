/**
 * 13. Crie um programa que preencha automaticamente
 * (usando lógica, não apenas atribuindo diretamente)
 *um vetor numérico com 15 posições com os primeiros elementos
 da sequência de Fibonacci.
 */
let vetorFibonacci = new Array(15); //Cria uma array com 15 posiçoes, o mesmo não acontece com a syntaxe "ler vetorFibonacci = [15]".

function fibonacci(){
    let anterior = 1;
    let proximo = 0;
    let atual = 0;
  
    for(let i = 0; i<15; i++){
       
       atual = anterior + proximo;
       vetorFibonacci[i] = atual;
       anterior = proximo;
       proximo = atual;
    }
}

function mostraVetor(){
    console.log("Vetor com Sequência de Fibonacci\n");

    for(let i = 0; i<15; i++){
        console.log('\t',i+1,"° termo: ", vetorFibonacci[i]);  
    }
}

fibonacci();
mostraVetor();

/**
 * função calcula fibonacci
 * preenche vetor com valores
 * funçao vetor recebe fibonacci
 * mostra sequência
 */