let qtdDeJogador = [];
const celulas = document.querySelectorAll(".cell");
const pLastChild = document.getElementById("last-child");
const combinacoesVitoria = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let posicoesX = [];
let posicoesO = [];
let vitoriasX = 0;
let vitoriasO = 0;
let contCliques = 0;
let jogador = "X";
function resetaJogo() {
  posicoesO = [];
  posicoesX = [];
  celulas.forEach((celula) => (celula.textContent = ""));
  contCliques = 0;
  jogador = "X";
  pLastChild.textContent = "";
}
function adicionaJogador() {
  const section = document.getElementById("players");
  const players = document.querySelectorAll(".player");
  const input = document.getElementById("input").value;
  const div = document.getElementById("game");
  if (input) {
    qtdDeJogador.push(input);
    if (qtdDeJogador.length > 2) {
      qtdDeJogador = [];
      qtdDeJogador.push(input);
      players.forEach((valor) => section.removeChild(valor));
      resetaJogo();
    }
    const p = document.createElement("h3");
    console.log(p);
    p.textContent = `Jogador: ${input}`;
    p.setAttribute("class", "player");
    section.append(p, pLastChild);
    div.dataset.game = "false";
    vitoriasX = 0;
    vitoriasO = 0;
    pLastChild.textContent = "";
  }
  if (comecaJogo()) {
    div.dataset.game = "true";
    pLastChild.textContent = `Vez de ${qtdDeJogador[0]}`;
  }
}
function verificaVitoria() {
  const h3 = document.querySelectorAll(".player");
  if (
    combinacoesVitoria.some((combinacao) =>
      combinacao.every((valor) => posicoesX.includes(valor))
    )
  ) {
    vitoriasX += 1;
    resetaJogo();
  } else if (
    combinacoesVitoria.some((combinacao) =>
      combinacao.every((valor) => posicoesO.includes(valor))
    )
  ) {
    vitoriasO += 1;
    resetaJogo();
  } else if (contCliques === 9) {
    alert("Empate");
    resetaJogo();
  }
  h3[0].textContent = `Jogador: ${qtdDeJogador[0]}, vitórias ${vitoriasX}`;
  h3[1].textContent = `Jogador: ${qtdDeJogador[1]}, vitórias ${vitoriasO}`;
}
function comecaJogo() {
  return qtdDeJogador.length == 2;
}
function jogada(element, indice) {
  if (jogador === "X" && element.textContent === "") {
    element.textContent = "X";
    jogador = "O";
    posicoesX.push(indice);
    contCliques += 1;
    pLastChild.textContent = `Vez de ${qtdDeJogador[1]}`;
  } else if (element.textContent === "") {
    element.textContent = "O";
    jogador = "X";
    posicoesO.push(indice);
    contCliques += 1;
    pLastChild.textContent = `Vez de ${qtdDeJogador[0]}`;
  }
  verificaVitoria();
}
document.getElementById("add").addEventListener("click", adicionaJogador);
celulas.forEach((element, indice) => {
  element.addEventListener("click", () => jogada(element, indice));
});

function alternaTema() {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");
}

document.querySelectorAll(".toggle").forEach((elemento) => {
  elemento.addEventListener("click", alternaTema);
});
