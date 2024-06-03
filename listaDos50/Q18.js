/**
 * 18. Crie um registro com o nome do funcionário, cargo e salário.
 * Leia este registro para um funcionário e ao final escreva o 
 * conteúdo do registro.
 */

const prompt = require('prompt-sync')();

const registro = {
    nome: '',
    cargo: '',
    salario: ''
}

function registra(){
  registro.nome = prompt("Nome? ");
  registro.cargo = prompt("Cargo? ");
  registro.salario = prompt("Salario? ");

  console.log(`\nNome:${registro.nome}
  \nCargo:${registro.cargo}
  \nSalario:${registro.salario}`);
}

registra();