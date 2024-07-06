const conteudos = [["oi"], ["olá"], ["hello"]];

const btn01 = document.getElementById("btn01");
const btn02 = document.getElementById("btn02");
const btn03 = document.getElementById("btn03");
const content = document.getElementById("content");

function displayContent(items) {
  let listaConteudo = "";
  for (const item of items) {
    listaConteudo += `<li>${item}</li>`;
  }

  const lista = document.createElement("ul");
  content.innerHTML = listaConteudo;
  content.append(lista);
}

function activeButton(btn) {
  btn01.className = "";
  btn02.className = "";
  btn03.className = "";
  btn.className = "active";
}

function handleClick(event) {
  const btnId = event.target.id;
  activeButton(event.target);

  if (btnId === "btn01") {
    displayContent(conteudos[0]);
  } else if (btnId === "btn02") {
    displayContent(conteudos[1]);
  } else {
    displayContent(conteudos[2]);
  }
}

displayContent(conteudos[0]);

btn01.addEventListener("click", handleClick);
btn02.addEventListener("click", handleClick);
btn03.addEventListener("click", handleClick);
