
/*11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
      Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
      valores da sequência.
*/
    const prompt = require('prompt-sync')();

    function gerandoPa(){
        let razao = 0;
        let primeiroTermo = 0;
        let soma = 0;

        primeiroTermo = Number(prompt("digite o primeiro termo da PA: "));
        razao = Number(prompt("digite a razão: "));

        for(let i = 0; i<10; i++){
            
            soma+=primeiroTermo
            console.log(i+1,"° termo: ", primeiroTermo);
            primeiroTermo+=razao;
        }
        console.log("Soma dos termos: ", soma);
    }

    gerandoPa();
      
      