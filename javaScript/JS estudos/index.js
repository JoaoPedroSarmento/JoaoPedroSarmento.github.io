function clicar() {
  let area = document.querySelector("#area");
  area.innerText = "CLICOU";
  area.style.background = "red";
}

function entrar() {
  let area = document.querySelector("#area");
  area.innerText = "PASSOU O MOUSE  ";
  area.style.background = "yellow";
}

function sair() {
  let area = document.querySelector("#area");
  area.innerText = "SAIU";
  area.style.background = "green";
}

function acoes() {
  document.querySelector("#area").addEventListener("click", clicar);
  document.querySelector("#area").addEventListener("mouseenter", entrar);
  document.querySelector("#area").addEventListener("mouseout", sair);
}

acoes();

document
  .querySelector("#adicionar")
  .addEventListener("click", AdicionarEventos);
document.querySelector("#remover").addEventListener("click", removerEventos);

function AdicionarEventos() {
  let e = document.querySelector("#executar");
  e.addEventListener("click", executar_1);
  e.addEventListener("click", executar_2);
  e.addEventListener("click", exercutar_3);
}

function executar_1() {
  let agora = new Date();
  document.querySelector("#titulo1").textContent = agora.getSeconds();
}

function executar_2() {
  let agora = new Date();
  document.querySelector("#titulo2").textContent = agora.getSeconds();
}
function exercutar_3() {
  let agora = new Date();
  document.querySelector("#titulo3").textContent = agora.getSeconds();
}

function removerEventos() {
  document.querySelector("#executar").removeEventListener("click", executar_1);
  document.querySelector("#executar").removeEventListener("click", executar_2);
}

function TrocaCorDoButaoComUmClick() {
  let B = document.querySelector("#adicionar");
  B.style.background = "red";
}
function TrocaCorDoButaoAoTirarOMouse() {
  let B = document.querySelector("#adicionar");
  B.style.background = "blue";
}

function AcoesDoButao() {
  document
    .querySelector("#adicionar")
    .addEventListener("click", TrocaCorDoButaoComUmClick);
  document
    .querySelector("#adicionar")
    .addEventListener("mouseout", TrocaCorDoButaoAoTirarOMouse);
}
AcoesDoButao();

function TrocaCorAopassarNoTexto() {
  let passar = document.querySelector("#titulo1");
  passar.style.color = "red";
}
function TrocaCorAoSairdoTexto() {
  let sair = document.querySelector("#titulo1");
  sair.style.color = "blue";
}

document
  .querySelector("#titulo1")
  .addEventListener("mouseenter", TrocaCorAopassarNoTexto);

document
  .querySelector("#titulo1")
  .addEventListener("mouseout", TrocaCorAoSairdoTexto);
