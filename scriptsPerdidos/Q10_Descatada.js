
const prompt = require('prompt-sync')();
let control;
let cont = 0;
let contPar = 0;
let soma = 0 ;
let media;
let aux=0;

function somatorio(entradaNumero){

    soma += entradaNumero;
    return soma;
}

function menorValor(entradaNumero){
    

    if(entradaNumero !== 0 && entradaNumero < aux ){
        aux = entradaNumero
    }
    
    return aux;
}


function funcaoMedia(entradaNumero){
    cont++;
    media = soma/cont;
    //console.log(media);
    return media;
}

function funcaoPar(entradaNumero){

    if(entradaNumero % 2 === 0){
        ++contPar;

    } 

    return contPar;
}

do{
    let entradaNumero = Number(prompt("Digite aqui os valores: "));
    somatorio(entradaNumero);
    funcaoMedia(somatorio());
    funcaoPar(entradaNumero);
    menorValor(entradaNumero);

    control = prompt("Deseja continuar? caso sim digite 's' ou digite qualquer tecla para sair: ");

}while(control === "s" || control ==="S");
 
console.log(`\nSomatório: ${soma}\nMenor valor: ${aux}\nMedia: ${media}\nNumeros pares: ${contPar}`);