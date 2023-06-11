// Índice atual do slide
let currentIndex = 0;
let startX = 0;

// Função principal para manipular os slides
export function gerenciarSlides() {
  const bolas = document.querySelectorAll(".bola");
  trocarSlidesComSeta();
  trocarSlidesComMouse();
  trocarSlidesComToqueMobile();

  // Adiciona um event listener para cada bola
  bolas.forEach((bola, indice) => {
    bola.addEventListener("click", () => {
      trocarSlides(indice);
    });
  });
}

// Função para trocar os slides com base no índice fornecido
function trocarSlides(indice) {
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

// Função para trocar os slides usando as setas do teclado
function trocarSlidesComSeta() {
  window.addEventListener("keydown", (evento) => {
    const slides = document.querySelectorAll(".slide");

    if (evento.key === "ArrowLeft" || evento.key === "a") {
      currentIndex -= 1;
      verificarIndice();
      trocarSlides(currentIndex);
    } else if (evento.key === "ArrowRight" || evento.key === "d") {
      currentIndex += 1;
      verificarIndice();
      trocarSlides(currentIndex);
    }
  });
}

// Função para trocar os slides usando toque em dispositivos móveis
function trocarSlidesComToqueMobile() {
  let startX = 0;
  let trocaRealizada = false; // Variável de controle para evitar trocas múltiplas

  document.getElementById("planos").addEventListener("touchstart", (evento) => {
    startX = evento.touches[0].clientX;
    trocaRealizada = false; // Reinicia a variável de controle no início do toque
  });

  document.getElementById("planos").addEventListener("touchmove", (evento) => {
    if (!trocaRealizada) {
      // Verifica se a troca já foi realizada
      const currentX = evento.touches[0].clientX;
      if (currentX > startX) {
        currentIndex += 1;
        verificarIndice();
      } else if (currentX < startX) {
        currentIndex -= 1;
        verificarIndice();
      }
      trocarSlides(currentIndex);
      startX = currentX;
      trocaRealizada = true;
    }
  });
}

// Função para trocar os slides usando o movimento do mouse
function trocarSlidesComMouse() {
  let trocaRealizada = false;
  const sectionPlanos = document.getElementById("planos");

  sectionPlanos.addEventListener("mousemove", (evento) => {
    const sectionPlanosAtiva = document.querySelector("#planos:active");
    let x = evento.movementX;

    if (x > startX && sectionPlanosAtiva && !trocaRealizada) {
      currentIndex -= 1;
      trocaRealizada = true;
      verificarIndice();
      trocarSlides(currentIndex);
    } else if (x < startX && sectionPlanosAtiva && !trocaRealizada) {
      currentIndex += 1;
      trocaRealizada = true;
      verificarIndice();
      trocarSlides(currentIndex);
    }

    if (!sectionPlanosAtiva) {
      trocaRealizada = false;
    }

    startX = x;
  });
}

// Função para verificar e ajustar o índice do slide
function verificarIndice() {
  const slides = document.querySelectorAll(".slide");

  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  } else if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
}
