/**
 * 20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
 * no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
 * salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
 * tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
 * 
 * Matrícula:
 * Nome: 
 * Salário bruto:
 * Dedução INSS:
 * 
 * Salário líquido:
 * 
(Dicas: desconto de 12%, salário líquido
é a diferença entre salário bruto e a redução do
INSS)
 */

const prompt = require('prompt-sync')();

const funcionarios = [
    Carlos = {matricula: "01", nome: "carlos baratinha", salarioBruto: "2500", deducaoInss: "80%", salarioLiquido:"400"},
    Eduardo= {matricula: "", nome: "", salarioBruto: "", deducaoInss: "", salarioLiquido:""},
    Maikon = {matricula: "", nome: "", salarioBruto: "", deducaoInss: "", salarioLiquido:""},
    Abrão =  {matricula: "", nome: "", salarioBruto: "", deducaoInss: "", salarioLiquido:""},
    Silene = {matricula: "", nome: "", salarioBruto: "", deducaoInss: "", salarioLiquido:""}
]

funcionarios.forEach(funcionarios => {
    console.log(`matricula: ${funcionarios.matricula}
                 Nome: ${funcionarios.nome} 
                 salario Bruto: ${funcionarios.salarioBruto} 
                 dedução inss:${funcionarios.deducaoInss}
                 salario liquido: ${funcionarios.salarioLiquido} `);
  });

  for (const i in Carlos) {
    if (Object.hasOwnProperty.call(Carlos, i)) {
        const element = Carlos[i];
        console.log(element);
    }
  }