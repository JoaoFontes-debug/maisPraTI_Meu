/**
 * 0. Crie um programa usando a estrutura “faça enquanto” que leia 
 * vários números. A cada laço, pergunte se o usuário quer continuar
 * ou não. No final, mostre na tela:
 * a) O somatório entre todos os valores;
 * b) Qual foi o menor valor digitado;
 * c) A média entre todos os valores;
 * d) Quantos valores são pares
 */

const prompt = require('prompt-sync')();
let control;
let cont = 0;
let contPar = 0;
let soma = 0;
let media;
let menor;

function somatorio(entradaNumero) {
    soma += entradaNumero;
    return soma;
}

function menorValor(entradaNumero) {
    if (cont === 1 || entradaNumero < menor) {
        menor = entradaNumero;
    }
    return menor;
}

function funcaoMedia() {
    media = (soma / cont).toFixed(2);
    
    return media;
}

function funcaoPar(entradaNumero) {
    if (entradaNumero % 2 === 0) {
        contPar++;
    }
    return contPar;
}

do {
    let entradaNumero = Number(prompt("Digite aqui os valores: "));
    if (isNaN(entradaNumero)) {
        console.log("Entrada inválida. Por favor, digite um número.");
        continue;
    }
    cont++;
    somatorio(entradaNumero);
    menorValor(entradaNumero);
    funcaoPar(entradaNumero);
    funcaoMedia();

    control = prompt("Deseja continuar? Caso sim digite 's' ou digite qualquer tecla para sair: ");
} while (control.toLowerCase() === 's');

console.log(`\nSomatório: ${soma}`);
console.log(`Menor valor: ${menor}`);
console.log(`Média: ${media}`);
console.log(`Números pares: ${contPar}`);