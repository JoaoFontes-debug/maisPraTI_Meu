/**
 * 37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
 * o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
 * respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
 * aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
 * e mostre uma mensagem de “REPROVADO”, caso contrário.
 */

function criaGabarito() {
    let vetorG = new Array(20).fill()
    let respostas = ['a','b','c'];
    for (let i = 0; i < 20; i++) {
        let letra = Math.floor(Math.random() * 3); 
        vetorG[i] = respostas[letra];
    }
    return vetorG;
}

function criaRespostaAluno() {
    let vetorR = new Array(50).fill().map(() => new Array(20).fill(0));
    let respostas = ['a','b','c'];
    for (let i = 0; i < 50; i++) {
        for(let j = 0; j < 20; j++){
            let letra = Math.floor(Math.random() * 3); 
            vetorR[i][j] = respostas[letra];
        }
    }
    return vetorR;
}

function aprovadoReprovado(gabarito, respostaAlunos){
    let resultados = [];
    for(let i = 0; i < respostaAlunos.length; i++){
        let acertos = 0;   
        for (let j = 0; j < respostaAlunos[i].length; j++) {
               if(respostaAlunos[i][j] == gabarito[j]){
                    acertos++
               }                 
        }
        resultados.push({ Aluno:i, acertos: acertos});
        if(acertos === 12){
            console.log(`id:${resultados[i].Aluno}, aluno APROVADO com ${resultados.acertos}`)
        }else{
            console.log(`id:${resultados[i].Aluno}, aluno REPROVADO com ${resultados.acertos}`)
        }
        acertos = 0;
    }
    console.table(gabarito);
    console.table(respostaAlunos);
    console.table(resultados);
}
let gabarito = criaGabarito();
let respostaAlunos = criaRespostaAluno();
aprovadoReprovado(gabarito,respostaAlunos);   