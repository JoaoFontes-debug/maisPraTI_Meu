/**
 * 4. Crie um programa que leia o tamanho de três segmentos de reta.
 * Analise seus comprimentos e diga se é possível formar um triângulo com
 * essas retas.Matematicamente, para três segmentos formarem um triângulo,
 * o comprimento de cada lado deve ser menor que a soma dos outros dois.
 */

const prompt = require('prompt-sync')();
segmento01 = parseInt(prompt('Digite o valor do segmento 01: '));
segmento02 = parseInt(prompt('Digite o valor do segmento 02: '));
segmento03 = parseInt(prompt('Digite o valor do segmento 03: '));

const indicaSeE_Triangulo = (segmento01, segmento02, segmento03) =>{
  
    if((segmento01 < segmento02+segmento03) && (segmento02 < segmento01+segmento03) && (segmento03 < segmento01+segmento02) ){
        console.log("\nSim,é Possivel matematicamente fazer um trinagulo com estes segmentos de reta.")

    }else{
        console.log("\nNão Pode ser um triangulo.");
    }

}


indicaSeE_Triangulo(segmento01, segmento02, segmento03);