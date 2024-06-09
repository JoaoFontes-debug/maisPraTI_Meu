/**
 * 21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo 
 * de uma pessoa e retorna o seu peso ideal. Para homens, calcular o peso 
 * ideal usando a fórmula: peso ideal= 72.7 x alt - 58 e, para mulheres, 
 * peso ideal = 62.1 x alt - 44.7.
 */

const prompt = require('prompt-sync')();

function pesoIdeal(altura, sexo){
    altura = prompt("Digite a altura ->");
    sexo = prompt("digite o sexo ->");
    let pesoIdeal;
   
    if(sexo === 'M' || sexo === 'm'){
        pesoIdeal = (altura * 72.7) - 58 
        console.log(`O peso ideal é ${pesoIdeal}`)
    }
    else if(sexo === 'F' || sexo === 'f'){
        pesoIdeal = (altura * 62.1) - 44.7 
        console.log(`O peso ideal é ${pesoIdeal}`)
    }
    else{
        console.log(`Digite um formarto valido!`)
    }

}

pesoIdeal();