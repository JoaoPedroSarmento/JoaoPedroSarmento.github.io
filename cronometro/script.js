const timeDisplay = document.getElementById("time");
const btnPause = document.getElementById("pause");
let tempo = 0;
let parar = false;
let pausar = false;
let intervalo;

function alternaClasse() {
  const div =
    document.querySelector(".play") ?? document.querySelector(".pause");
  div.classList.toggle("play");
  div.classList.toggle("pause");
}

function rodaCronometro() {
  intervalo = setInterval(() => {
    console.log("Intervalo -", tempo);
    if (!parar && !pausar) {
      tempo += 1;
      const segundos = tempo % 60;
      const minutos = Math.floor(tempo / 60);
      const horas = Math.floor(minutos / 60);
      const tempoFormatado = `${horas < 10 ? "0" + horas : horas}:${
        minutos % 60 < 10 ? "0" + (minutos % 60) : minutos % 60
      }:${segundos < 10 ? "0" + segundos : segundos}`;
      timeDisplay.textContent = tempoFormatado;
    }
  }, 1000);
}

function resetaCronometro() {
  parar = true;
  tempo = 0;
  pausar = false;
  btnPause.innerText = "pausar";
  timeDisplay.textContent = `00:00:00`;
  alternaClasse();
  clearInterval(intervalo);
}

function pausa() {
  if (btnPause.innerText === "pausar") {
    btnPause.innerText = "despausar";
    pausar = true;
  } else {
    btnPause.innerText = "pausar";
    pausar = false;
  }
}

document.getElementById("play").addEventListener("click", () => {
  parar = false;
  pausar = false;
  rodaCronometro();
  alternaClasse();
});

document.getElementById("parar").addEventListener("click", resetaCronometro);

btnPause.addEventListener("click", pausa);
