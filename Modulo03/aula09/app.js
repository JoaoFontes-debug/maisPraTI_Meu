/*
O browser tem algumas ferramentas uma delas é o armazenamento. podemos fazzer armazenamento de através do local storage, cookies e section storage.

Não se usa a palavra function dentro de classes js, apenas o nome seguido de parenteses e chaves
*/

class Mentoria {
  //metodo construtor
  constructor(nome, email, estado, modo, descricao) {
    this.nome = nome;
    this.email = email;
    this.estado = estado;
    this.modo = modo;
    this.descricao = descricao;
  }
  //metodo, verifica se algum campo/atributo ficou vazio se sim, retorna false
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
  //metodo contrutor
  constructor() {
    //pega o item com a chave id no localstorage
    const id = localStorage.getItem("id");
    //se o id estiver vazio seta como 0
    if (id == null) {
      localStorage.setItem("id", 0);
    }
  }
  //salva o objeto mentoria no  array mentorias
  pegaMentorias() {
    //cria um array
    const mentorias = Array();
    //pega o item com a chave id no localstorage
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

  //registra os dados no localstorage
  criarMentoria(mentoria) {
    const id = pegaProximoId();
    localStorage.setItem(id, JSON.stringify(mentoria));
    localStorage.setItem("id", id);
  }

  removeMentoria(id) {
    localStorage.removeItem(id);
  }

  pesquisaMentoria(mentoria) {
    let filtraMentoria = this.pegaMentorias();
    console.log(filtraMentoria);
    if (!mentoria.nome) {
      filtraMentoria = filtraMentoria.filter((m) => m.nome === mentoria.nome);
    }

    if (!mentoria.email) {
      filtraMentoria = filtraMentoria.filter((m) => m.email === mentoria.email);
    }

    if (!mentoria.estado) {
      filtraMentoria = filtraMentoria.filter(
        (m) => m.estado === mentoria.estado
      );
    }

    if (!mentoria.modo) {
      filtraMentoria = filtraMentoria.filter((m) => m.modo === mentoria.modo);
    }

    if (!mentoria.descricao) {
      filtraMentoria = filtraMentoria.filter(
        (m) => m.descricao === mentoria.descricao
      );
    }
    return filtraMentoria;
  }
}

const database = new Database();

console.log(database.pegaMentorias());

function pegaProximoId() {
  const nextId = localStorage.getItem("id");
  return parseInt(nextId) + 1;
}

function preencheObjMentoria() {
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

function carregaMentorias(mentorias) {
  if (mentorias === undefined) {
    mentorias = database.pegaMentorias();
  }

  const listaMentorias = document.getElementById("registros");
  listaMentorias.innerHTML = "";

  mentorias.forEach((p) => {
    const linha = listaMentorias.insertRow();

    linha.insertCell(0).innerHTML = `${p.nome}`;
    linha.insertCell(1).innerHTML = `${p.email}`;
    linha.insertCell(2).innerHTML = `${p.estado}`;
    linha.insertCell(3).innerHTML = `${p.modo}`;
    linha.insertCell(4).innerHTML = `${p.descricao}`;

    const btn = document.createElement("button");

    btn.className = "btnD";
    btn.id = p.id;
    btn.innerHTML = "Delete";
    btn.onclick = () => {
      const id = p.id;
      database.removeMentoria(id);
      window.location.reload();
    };
    linha.insertCell(5).append(btn);
  });
  //criando elemento apartir do javascrip
}

function pesquisaMentoria() {
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let estado = document.getElementById("estados").value;
  let modo = document.getElementById("modo").value;

  const mentoria = new Mentoria(nome, email, estado, modo);

  const mentorias = database.pesquisaMentoria(mentoria);

  carregaMentorias(mentorias);
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.body.contains(document.getElementById("registros"))) {
    carregaMentorias();
  }
});

function limpar() {
  localStorage.clear();
}
