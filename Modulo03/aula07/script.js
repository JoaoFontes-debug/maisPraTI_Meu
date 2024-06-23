
//EX01
/*
"document" se refere ao DOM
document.getElementById('nome').value = "Bahia"

let numero = prompt("Digite um numero: ");
if(numero%2 === 0){
    document.write('<h1> Olá, o numero que voce digitou é par</h1>');
}
*/

//EX02
/*

let nome = prompt('Digite seu nome');
let idade = prompt('Digite sua idade');
document.write('<p>Seu nome é:' + nome + '</p>');
document.write('<p>Sua idade é:' + idade + '</p>');

//PODERIA USAR UM 'FOR' NA MEDIA
let numero01 = Number(prompt('N01'));
let numero02 = Number(prompt('N02'));
let media = (numero01+numero02)/2;
document.write(`<p>A Media: ${media} </P>`);

*/

//EX03

function eventoMouse(){
    document.write('evento Aconteceu!')
}
function eventoTeclado(){
    document.write('evento Aconteceu!')
}
function eventoJanela(){
    document.write('evento Aconteceu!')
}
