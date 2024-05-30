/**
 * . Desenvolva um aplicativo que leia o salário e o sexo de vários
 * funcionários. No final, mostre o total de salário pago aos homens
 * e o total pago às mulheres. O programa vai perguntar ao usuário se
 * ele quer continuar ou não sempre que ler os dados de um funcionário
 */

const prompt = require('prompt-sync')();
let control = "s";
let totalSalariosM = 0;
let totalSalariosF = 0;


function calculaSalarioTotal(){
    let valorSalario;
    let tipoSexo; 

    while(control === "s" || control === "S"){
        valorSalario = parseFloat(prompt("forneça o valor do seu salario: "));
        tipoSexo = prompt("qual seu sexo? Digite M para masculino e F para Feminino");

        if(tipoSexo == "M" || tipoSexo == "m"){
                totalSalariosM += valorSalario;
        }
        else if(tipoSexo == "F" || tipoSexo == "f"){
                totalSalariosF += valorSalario;
        }
        console.log("\n");
        control = prompt("Deseja continuar? digite s para continuar e qualquer outra letra para finalizar");
        console.log("\n");

        
    }
    console.log("\n");
    console.log(`valores Totais separados por sexo:\n- Mulheres: ${totalSalariosF} \n- Homens: ${totalSalariosM} `);
    console.log("\n");
    
}



 calculaSalarioTotal();

