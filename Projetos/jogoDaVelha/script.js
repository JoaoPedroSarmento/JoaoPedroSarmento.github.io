const celulas = document.querySelectorAll(".cell");
let posicoesO = [];
let posicoesX = [];
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
  celulas.forEach((celula) => (celula.textContent = ""));
  posicoesO = [];
  posicoesX = [];
  jogador = "O";
  celulasPreenchidas = 0;
}

function verificaVitoria() {
  vitoriasCombinacoes.forEach((combinacao) => {
    if (combinacao.every((posicao) => posicoesO.includes(posicao))) {
      alert("Jogador O venceu");
      resetaJogo()
      return true;
    } else if (combinacao.every((posicao) => posicoesX.includes(posicao))) {
      alert("Jogador X venceu!");
      resetaJogo()
      return true;
    }else if (celulasPreenchidas == 9){
      alert("Empate");
      resetaJogo()
    }
  });
  return false;
}

celulas.forEach((celula, indice) => {
  celula.addEventListener("click", (valor) => {
    if (jogador === "O" && celula.textContent === "") {
      jogador = "X";
      celula.textContent = "O";
      posicoesO.push(indice);
      celulasPreenchidas += 1;
      console.log(celulasPreenchidas)
    } else if (celula.textContent === "") {
      jogador = "O";
      celula.textContent = "X";
      posicoesX.push(indice);
      celulasPreenchidas += 1;
      console.log(celulasPreenchidas)
    }
    verificaVitoria()
  });
});
