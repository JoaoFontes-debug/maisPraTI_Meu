/*
O browser tem algumas ferramentas uma delas é o armazenamento. podemos fazzer armazenamento de através do local storage, cookies e section storage.

Não se usa a palavra function dentro de classes js, apenas o nome seguido de parenteses e chaves
*/

class Mentoria {
  constructor(nome, email, estado, modo, descricao) {
    this.nome = nome;
    this.email = email;
    this.estado = estado;
    this.modo = modo;
    this.descricao = descricao;
  }

  validaDados() {
    for (let i in this) {
      if (this[i] === undefined || this[i] === "") {
        return false;
      }
    }
    return true;
  }
}

class Database {
  constructor() {
    const id = localStorage.getItem("id");

    if (id == null) {
      localStorage.setItem("id", 0);
    }
  }

  pegaMentorias() {
    const mentorias = Array();

    const id = localStorage.getItem("id");

    for (let i = 1; i <= id; i++) {
      const mentoria = JSON.parse(localStorage.getItem(i));

      if (mentoria === null) {
        continue;
      }

      mentoria.id = i;
      mentorias.push(mentoria);
    }
    return mentorias; 
  }

  criarMentoria(mentoria) {
    const id = pegaProximoId();
    localStorage.setItem(id, JSON.stringify(mentoria));
    localStorage.setItem("id", id);
  }
}

const database = new Database();

function pegaProximoId() {
  const nextId = localStorage.getItem("id");
  return parseInt(nextId) + 1;
}

function registraMentoria() {
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let estado = document.getElementById("estados").value;
  let modo = document.getElementById("modo").value;
  let conteudo = document.getElementById("content").value;

  const mentoria = new Mentoria(nome, email, estado, modo, conteudo);

  if (mentoria.validaDados()) {
    database.criarMentoria(mentoria);
  }
}

function carregaMentorias(mentorias){
    //se os campos estiverem vasios puxa todos os registros
    // if(mentorias.length === 0){
    //     mentorias = database.pegaMentorias()
    // }

    const mentorias = database.pegaMentorias()
    
    const registros = document.getElementById('registros')

    mentorias.forEach((m) => {
        const paragrafo = registros.iserirRegistro()
        paragrafo.
        
    });


}

function limpar() {
  localStorage.clear();
}

