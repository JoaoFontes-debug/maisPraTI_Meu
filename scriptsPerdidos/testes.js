/*  transformando numeros de um vetor em strings com map e toString

let number = [1,2,3,4]
console.table(number.map(num => num.toString()));
console.log(number); //nao muda o vetor original

//transformar dados de um objeto em um array contendo-os

let usuarios = [
    {nome: 'Ana', idade:23},
    {nome: 'João', idade:29},
    {nome: 'Maria', idade:28}
]

//a variavel usuarios recebe cada objeto do array de objetos para
// ser processado logo apos é acessado a chave nome de cada objeto
// e retornado para nomes
let nomes = usuarios.map(usuarios => usuarios.nome);
console.table(nomes);


// Usando FIll e Map em conjunto

let frutas = new Array(5).fill(0);
console.log(frutas);


/*28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver
* o resultado pedido no item:
* a) a soma dos elementos acima da diagonal principal;
* b) a soma dos elementos abaixo da diagonal principal;



let matrizA = new Array(10).fill().map(() => new Array(10));

for(let i = 0; i < 10; i++){
   for(let j = 0; j < 10; j++){
       matrizA[i][j] = Math.floor(Math.random() * 50);
   }
}

function elementoForaDiagonal(matriz){
   let diagonalSuperior = new Array(matriz.length-1).fill(0);  
   let diagonalInferior = new Array(matriz.length-1).fill(0);  
    
   for(let i = 0; i < matriz.length; i++){
       for(let j = i + 1; j < matriz[i].length; j++){
           diagonalSuperior[0] += matriz[i][j]; //adicionar "i" como posição da variavel ->
                                               //diagonalSuperior caso queira a soma de cada linha separadas
       }
   }
   console.table(matriz);
   console.table(diagonalSuperior);
}

elementoForaDiagonal(matrizA);


//testar depois
for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < i; j++){
        diagonalInferior[0] += matriz[i][j];
    }
}
*/


//testando reduce

const matrizReduce = [
    [1,2,3,4]
    [5,6,7,8]
    [9,10,11,12]
    [13,14,15,16]
]

let somaQuartaLinha = matrizReduce.map(elemento => elemento.map(el => el.reduce((cont, valorAtual) => cont + valorAtual,0)))

console.table(somaQuartaLinha);