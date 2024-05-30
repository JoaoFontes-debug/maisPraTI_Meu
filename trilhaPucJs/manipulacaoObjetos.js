 //objetos sao utilizados para representar entidades do mundo real.
 
// sintaxe literal  
 let pessoa = {
    nome: "joão",
    idade: 30,
    profissao: "engenheiro"
 };

 //construtor de  objetos

 let carro =  new Object ();
 carro.marca = "toyota";
 carro.modelo = "corolla";
 carro.ano = 2024;

//---------------------------------------------------------------------------------------

 let pessoa01 = {
    nome: "joão",
    idade: 30,
    profissao: "engenheiro"
 };

 console.log(pessoa01);

 
 let carro01 =  new Object ();
 carro01.marca = "toyota";
 carro01.modelo = "corolla";
 carro01.ano = 2024;
console.log(carro01);

let humano = {
    nome: "maria",
    idade: 15,
    saudacao: function () {
        console.log("Olá meu nome é "+ this.nome + " e tenho "+ this.idade+" anos.");
    }

}

humano.saudacao();
//////////////////////////////////////////////////////////////

let serHumano = [];
let idade = 1;

for(let i = 1; i <= 10; i++){
   
    let Humanos = {
        nome: "humano" + (i + 1),
        idade: idade
    }

    serHumano.push(Humanos);
    idade++;
}

for(let i = 1; i <= 10; i++){

    console.log(serHumano[i]);
}

