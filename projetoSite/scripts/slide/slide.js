// melhorar o código e o nome das variáveis!!
// pega o índice
let indiceAtual = 0;
export function rodaSlides() {
  const bolas = document.querySelectorAll(".bola");
  trocaSlidesComSeta();
  trocaSlidesComTouchMobile();
  bolas.forEach((bola, indice) => {
    bola.addEventListener("click", () => {
      trocaSlides(indice);
    });
  });
}
function trocaSlides(indice) {
  const bolas = document.querySelectorAll(".bola");
  const slides = document.querySelectorAll(".slide");
  bolas.forEach((bola, indiceBola) => {
    if (indiceBola == indice) {
      if (!bola.classList.contains("ativado")) {
        bola.classList.remove("desativado");
        bola.classList.add("ativado");
        slides[indiceBola].classList.remove("desativado");
        slides[indiceBola].classList.add("ativado");
      }
    } else if (bola.classList.contains("ativado")) {
      bola.classList.remove("ativado");
      bola.classList.add("desativado");
      slides[indiceBola].classList.remove("ativado");
      slides[indiceBola].classList.add("desativado");
    }
  });
}

function trocaSlidesComSeta() {
  window.addEventListener("keydown", (ev) => {
    const slides = document.querySelectorAll(".slide");
    if (ev.key === "ArrowLeft" || ev.key === "a") {
      indiceAtual -= 1;
      verificaIndice();
      trocaSlides(indiceAtual);
    } else if (ev.key === "ArrowRight" || ev.key === "d") {
      indiceAtual += 1;
      verificaIndice();
      trocaSlides(indiceAtual);
    }
  });
}

function trocaSlidesComTouchMobile() {
  let startX = 0;
  let trocaRealizada = false; // Variável de controle

  document.getElementById("planos").addEventListener("touchstart", (event) => {
    startX = event.touches[0].clientX;
    trocaRealizada = false; // Reinicia a variável de controle no início do toque
  });

  document.getElementById("planos").addEventListener("touchmove", (event) => {
    if (!trocaRealizada) {
      // Verifica se a troca já foi realizada
      const currentX = event.touches[0].clientX;
      if (currentX > startX) {
        indiceAtual += 1;
        verificaIndice();
      } else if (currentX < startX) {
        indiceAtual -= 1;
        verificaIndice();
      }
      trocaSlides(indiceAtual);
      startX = currentX;
      trocaRealizada = true; // Define a variável de controle para evitar trocas repetidas
    }
  });
}

function verificaIndice() {
  const slides = document.querySelectorAll(".slide");
  if (indiceAtual < 0) {
    indiceAtual = slides.length - 1;
  } else if (indiceAtual >= slides.length) {
    indiceAtual = 0;
  }
}
