const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
const score = document.querySelector(".score");
const inputBtn = document.getElementById("start");
const tempoDisplay = document.getElementById("tempo");
let clique = false;
let pontos = 0;
let tempo = 30;
function alternaClasse(num) {
  holes[num].classList.toggle("up");
}
function numeroAleatorio() {
  return Math.floor(Math.random() * 6);
}
function startGame(btn) {
  pontos = 0;
  score.innerText = pontos;
  clique = false;
  inputBtn.disabled = true;
  const intervalo = setInterval(() => {
    removeClasse();
    alternaClasse(numeroAleatorio());
    document.querySelector(".up .mole").addEventListener("click", () => {
      verificaClique();
      if (clique) {
        score.textContent = pontos;
      }
      removeClasse();
    });
    if (tempo > 0) {
      tempo -= 1;
      tempoDisplay.innerText = tempo;
      console.log(tempo);
    } else {
      clearInterval(intervalo);
      resetaJogo();
    }
    clique = false;
  }, 650);
}
function removeClasse() {
  holes.forEach((hole) => {
    hole.classList.remove("up");
  });
}

function verificaClique() {
  if (!clique) {
    pontos += 1;
    clique = true;
  }
}
function resetaJogo() {
  removeClasse();
  pontos = 0;
  clique = false;
  tempo = 30;
  inputBtn.disabled = false;
}
inputBtn.addEventListener("click", startGame);
