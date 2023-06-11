function mudaCorDaLinha() {
  const divContainerSlide = document.querySelector(".slide-container");

  // Verifica se a largura da janela é maior que 720 pixels

  // Adiciona o evento "mouseover" ao elemento divContainerSlide
  divContainerSlide.addEventListener("mouseover", () => {
    adicionaClasseHoverAElementosComHoverAtivo();
  });
  // Adiciona o evento "mouseout" ao elemento com o ID "planos"
  document.getElementById("planos").addEventListener("mouseout", () => {
    retiraClasseHover();
  });
}

function adicionaClasseHoverAElementosComHoverAtivo() {
  // Obtém todos os elementos com a classe "container-content-1" que estão sendo "hover"
  const containerContentHover = document.querySelectorAll(
    ".container-content-1:hover"
  );

  // Adiciona a classe "hover" a cada elemento encontrado
  containerContentHover.forEach((elem) => {
    elem.classList.add("hover");
  });
}

function retiraClasseHover() {
  // Verifica se o elemento com o ID "planos" está sendo "hover" (cursor em cima)
  const sectionPlanos = document.querySelector("#planos:hover") || false;

  // Remove a classe "hover" de todos os elementos com a classe "hover"
  if (!sectionPlanos) {
    const containerContentHover = document.querySelectorAll(".hover");
    containerContentHover.forEach((elem) => {
      elem.classList.remove("hover");
    });
  }
}

// Chama a função mudaCorDaLinha
mudaCorDaLinha();
