/**
 * 22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, 
 * coletando dados sobre o salário e número de filhos. Faça uma função que
 * leia esses dados para um número não determinado de pessoas e retorne a média 
 * de salário da população, amédia do número de filhos, o maior salário e o percentual
 * de pessoas com salário até R$350,00
 */
 //recurso adcional "toLowerCase()". transforma as letras em minusculas
 
 const prompt = require('prompt-sync')();

 function calculaDados() {
     let continuar = 's';
     let totalFilhos = 0;
     let totalSalarios = 0;
     let pessoasAte350 = 0;
     let cont = 0;
     let maiorSalario = 0;
 
     while (continuar.toLowerCase() === 's') {
         let filhos = Number(prompt('Quantidade filhos? ->'));
         let salarios = Number(prompt('Valor salario? ->'));
         if (salarios <= 350) {
             pessoasAte350++;
         }
         if (salarios > maiorSalario) {
             maiorSalario = salarios;
         }
         totalFilhos += filhos;
         totalSalarios += salarios;
         continuar = prompt('Deseja continuar?');
         cont++;
     }
 
     const pesquisa = {
         mediaFilhos: totalFilhos / cont,
         mediaSalario: totalSalarios / cont,
         percentPessoasAte350: (pessoasAte350 / cont) * 100,
         maiorSalario: maiorSalario
     };
 
     return pesquisa;
 }
 
 console.log(calculaDados());