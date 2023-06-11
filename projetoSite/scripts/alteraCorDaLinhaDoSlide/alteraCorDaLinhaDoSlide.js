function mudaCorDaLinha() {
  const divContainerSlide = document.querySelector(".slide-container");

  // Verifica se a largura da janela é maior que 720 pixels
  if (window.innerWidth > 720) {
    // Adiciona o evento "mouseover" ao elemento divContainerSlide
    divContainerSlide.addEventListener("mouseover", () => {
      adicionaClasseHoverAElementosComHoverAtivo();
    });
    // Adiciona o evento "mouseout" ao elemento com o ID "planos"
    document.getElementById("planos").addEventListener("mouseout", () => {
      retiraClasseHover();
    });
  } else {
    // Adiciona o evento "scroll" à janela
    window.addEventListener("scroll", () => {
      adicionaClasseHoverAElementosComHoverAtivo();
    });
  }
}

function adicionaClasseHoverAElementosComHoverAtivo() {
  if (window.innerWidth > 720) {
    // Obtém todos os elementos com a classe "container-content-1" que estão sendo "hover"
    const containerContentHover = document.querySelectorAll(
      ".container-content-1:hover"
    );

    // Adiciona a classe "hover" a cada elemento encontrado
    containerContentHover.forEach((elem) => {
      elem.classList.add("hover");
    });
  } else {
    // Obtém a posição de rolagem vertical atual
    const scrollY = window.scrollY;

    // Obtém todos os elementos com a classe "container-content-1"
    const containerContent = document.querySelectorAll(".container-content-1");

    // Obtém todos os elementos com a classe "linha-column" ou define como falso caso nenhum seja encontrado
    const linhasColumn = document.querySelectorAll(".linha-column") || false;

    // Itera sobre cada elemento "containerContent"
    containerContent.forEach((elem, indice) => {
      console.log(elem.offsetHeight);
      console.log(scrollY);

      // Verifica se a posição de rolagem é maior ou igual à altura do elemento
      if (scrollY >= elem.offsetHeight) {
        elem.classList.add("hover");
      } else if (elem.classList.contains("hover")) {
        elem.classList.remove("hover");
      }
    });
  }
}

function retiraClasseHover() {
  if (window.innerWidth > 720) {
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
}

// Chama a função mudaCorDaLinha
mudaCorDaLinha();
