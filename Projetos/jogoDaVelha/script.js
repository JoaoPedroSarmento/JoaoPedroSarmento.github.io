const celulas = document.querySelectorAll(".cell");
let pLastChild = document.getElementById("last-child");
let jogadores = [];
let posicoesO = [];
let posicoesX = [];
let jogador = "X";
let vitoriasX = 0;
let vitoriasO = 0;
let celulasPreenchidas = 0;
const vitoriasCombinacoes = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function resetaJogo() {
  celulas.forEach((celula) => (celula.textContent = ""));
  posicoesO = [];
  posicoesX = [];
  jogador = "O";
  celulasPreenchidas = 0;
}
function adicionaJogador() {
  const contJogadores = document.querySelectorAll(".player");
  const inputJogador = document.getElementById("input");
  const section = document.getElementById("players");
  const p = document.createElement("p");
  p.setAttribute("class", "player");
  if (contJogadores.length == 2) {
    contJogadores.forEach((jogador) => section.removeChild(jogador));
    pLastChild.textContent = "";
    jogadores = [];
  }
  if (contJogadores.length == 1) {
    p.innerText = `O(a) Jogador(a) ${inputJogador.value} é o O`;
    jogadores.push(inputJogador.value);
    const divGame = document.getElementById("game");
    divGame.dataset.game = "true";
    pLastChild.innerText = `Vez de ${jogadores[0]} jogar:`;
  } else {
    jogadores.push(inputJogador.value);
    p.innerText = `O(a) Jogador(a) ${inputJogador.value} é o X`;
  }
  section.append(p, pLastChild);
}
function verificaVitoria() {
  const players = document.querySelectorAll(".player");
  vitoriasCombinacoes.forEach((combinacao) => {
    if (combinacao.every((posicao) => posicoesO.includes(posicao))) {
      vitoriasO += 1;
      resetaJogo();
      return true;
    } else if (combinacao.every((posicao) => posicoesX.includes(posicao))) {
      vitoriasX += 1;

      resetaJogo();
      return true;
    } else if (celulasPreenchidas == 9) {
      resetaJogo();
    }
    players[0].textContent = `O(a) Jogador(a) ${jogadores[0]} é o X. Vitórias: ${vitoriasX}`;
    players[1].textContent = `O(a) Jogador(a) ${jogadores[1]} é o O. Vitórias: ${vitoriasO}`;
  });
  return false;
}
function indicaJogador() {
  return jogador === "X"
    ? `Vez de ${jogadores[0]} jogar:`
    : `Vez de ${jogadores[1]} jogar:`;
}
celulas.forEach((celula, indice) => {
  celula.addEventListener("click", (valor) => {
    pLastChild.textContent = indicaJogador();
    if (jogador === "O" && celula.textContent === "") {
      jogador = "X";
      console.log(pLastChild);
      celula.textContent = "O";
      posicoesO.push(indice);
      celulasPreenchidas += 1;
      console.log(celulasPreenchidas);
    } else if (celula.textContent === "") {
      jogador = "O";
      celula.textContent = "X";
      posicoesX.push(indice);
      celulasPreenchidas += 1;
      console.log(celulasPreenchidas);
    }
    pLastChild.textContent = indicaJogador();
    verificaVitoria();
  });
});

document.getElementById("add").addEventListener("click", adicionaJogador);
