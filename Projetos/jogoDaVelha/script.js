const celulas = document.querySelectorAll(".cell");
let posicoesO = [];
let posicoesX = [];
let jogando = false;
let jogador = "O";
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
  celulas.forEach(celula => celula.textContent = "");
  posicoesO = [];
  posicoesX = [];
  jogador = "O";
  celulasPreenchidas = 0;
}

function verifcaVitoria() {
  for (const combinacao of vitoriasCombinacoes) {
    if (combinacao.every(posicao => posicoesO.includes(posicao))) {
      alert("Jogador O venceu");
      return true;
    } else if (combinacao.every(posicao => posicoesX.includes(posicao))) {
      alert("Jogador X venceu!")
      return true;
    }
  }
  return false;
}

celulas.forEach((celula , indice) => {
  celula.addEventListener("click", (valor) => {
    if (celula.textContent !== "" || verifcaVitoria() || celulasPreenchidas === 8) {
        verifcaVitoria()
        setTimeout(() => {
            resetaJogo();
          }, 1000);
    }
    if (jogador === "O") {
      jogador = "X";
      celula.textContent = "O";
      posicoesO.push(indice);
    } else {
      jogador = "O";
      celula.textContent = "X";
      posicoesX.push(indice)
    }
    celulasPreenchidas += 1;
    if (verifcaVitoria() || celulasPreenchidas === 8) {
        verifcaVitoria()
        setTimeout(() => {
        resetaJogo();
      }, 1000);
    }
  });
});
