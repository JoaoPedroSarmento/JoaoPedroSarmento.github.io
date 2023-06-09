// melhorar o código!!

let indiceAtual = 0;
export function rodaSlides() {
  const bolas = document.querySelectorAll(".bola");
  trocaSlidesComSeta();
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
      if (indiceAtual < 0) {
        indiceAtual = slides.length - 1;
      }
      trocaSlides(indiceAtual);
    } else if (ev.key === "ArrowRight" || ev.key === "d") {
      indiceAtual += 1;
      if (indiceAtual >= slides.length) {
        indiceAtual = 0;
      }
      trocaSlides(indiceAtual);
    }
  });
}
